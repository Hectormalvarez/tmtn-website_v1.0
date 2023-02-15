/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, Auth, graphqlOperation } from 'aws-amplify'
import {
  createTMTNProject,
  createTMTNProjectLink,
  createProjectLinks,
  updateTMTNProject,
  deleteTMTNProject,
  deleteTMTNProjectLink,
  deleteProjectLinks,
} from '../graphql/mutations'
import { listProjectLinks } from '../graphql/queries'

import { IProject } from '../hooks/AdminContext'

const customListTMTNProjects = /* GraphQL */ `
  query CustomListTMTNProjects {
    listTMTNProjects {
      items {
        links {
          items {
            tMTNProjectLink {
              id
              name
              url
            }
          }
        }
        description
        createdAt
        id
        name
        techstack
      }
    }
  }
`

export async function fetchProjects() {
  let fetchedProjects
  try {
    // graphql call to get projects
    const projectData: any = await API.graphql({
      query: customListTMTNProjects,
      authMode: 'API_KEY',
    })

    // transform data to match IProject
    fetchedProjects = projectData.data.listTMTNProjects.items.map((project: any) => {
      project.links = project.links.items.map((projectLink: any) => {
        return {
          name: projectLink.tMTNProjectLink.name,
          url: projectLink.tMTNProjectLink.url,
          id: projectLink.tMTNProjectLink.id,
        }
      })
      return project
    })
    return fetchedProjects
  } catch (error) {
    console.log('error fetching todos', error)
  }
}

export async function createProject(projectData: IProject) {
  const areAuthenticated = await Auth.currentAuthenticatedUser()
  if (!areAuthenticated) throw new Error('not logged in!')

  return await API.graphql({
    query: createTMTNProject,
    variables: { input: projectData, authMode: 'AWS_IAM' },
  })
}

export async function updateProject(projectUpdateData: IProject) {
  const areAuthenticated = await Auth.currentAuthenticatedUser()
  if (!areAuthenticated) throw new Error('not logged in!')

  try {
    await API.graphql({
      query: updateTMTNProject,
      variables: { input: projectUpdateData, authMode: 'AWS_IAM' },
    })
  } catch (error) {
    console.log('ERROR UPDATING PROJECT')
  }
}

export async function addLinktoProject(
  projectID: string,
  projectLink: { name: string; url: string, id: string },
) {
  let createdTMTNProjectLinkData: any
  try {
    const areAuthenticated = await Auth.currentAuthenticatedUser()
    if (!areAuthenticated) throw new Error('not logged in!')

    // create project link record
    createdTMTNProjectLinkData = await API.graphql(graphqlOperation(
      createTMTNProjectLink,
      { input: projectLink, authMode: 'AWS_IAM' },
    ))
    const newLinkID: string = await createdTMTNProjectLinkData.data.createTMTNProjectLink.id
    // add project link record to projectlinks m2m table
    await API.graphql({
      query: createProjectLinks,
      variables: {
        input: {
          tMTNProjectId: projectID,
          tMTNProjectLinkId: newLinkID,
        },
      },
    })
  } catch (error) {
    console.log('error occured trying to add link', error)
  }
}

export const deleteProjectLinkFromCloud = async (linkID: string, type: 'link' | 'project') => {
  console.log('Deleting Link: ', linkID)
  const projectLinksIDQuery: any = await API.graphql({ query: listProjectLinks, variables: { filter: { tMTNProjectLinkId: { eq: linkID } } } })
  const projectLinksID = projectLinksIDQuery.data.listProjectLinks.items[0].id
  console.log('Deleting Link Relation to Project: ', projectLinksID)
  try {
    await API.graphql(graphqlOperation(deleteProjectLinks, { input: { id: projectLinksID }, authMode: 'AWS_IAM' }))
    await API.graphql(graphqlOperation(deleteTMTNProjectLink, { input: { id: linkID }, authMode: 'AWS_IAM' }))
  } catch (error) {
    console.log("ERROR DELETING PROJECT LINK", error)
  }
}

export const getPossibleProjectLinks = (project: IProject, possibleLinkOptions: string[]) => {
  // determine links that can be added
  // check links project contains and deduce from possible options
  if (project.links) {
    const linkNames = project.links.map((projectlink) => projectlink.name.toLocaleUpperCase())
    const remainingLinks = possibleLinkOptions.filter((element) => !linkNames.includes(element))
    return remainingLinks
  } else {
    return possibleLinkOptions
  }
}
