import { API } from 'aws-amplify'
import { IProject } from '../hooks/AdminContext'
import { createTMTNProject, createTMTNProjectLink, createProjectLinks } from '../graphql/mutations'
import { listTMTNProjects } from '../graphql/queries'
import { ProjectLinks } from '../API'

export async function fetchProjects() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projectData: any = await API.graphql({ query: listTMTNProjects, authMode: 'API_KEY' })
    return projectData.data.listTMTNProjects.items
  } catch (err) {
    console.log('error fetching todos')
    console.log(err)
  }
}

export async function createProject(projectData: IProject) {
  return await API.graphql({
    query: createTMTNProject,
    variables: { input: projectData, authMode: 'AWS_IAM' },
  })
}

export async function createProjectLink(projectLink: { name: string; url: string }) {
  return await API.graphql({
    query: createTMTNProjectLink,
    variables: { input: projectLink, authMode: 'AWS_IAM' },
  })
}

export async function addLinktoProject(
  project: IProject,
  projectLink: { name: string; url: string },
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let createdTMTNProjectLinkData: any
  let createdProjectLinksData: any
  try {
    createdTMTNProjectLinkData = await API.graphql({
      query: createTMTNProjectLink,
      variables: { input: projectLink, authMode: 'AWS_IAM' },
    })
    if (!createdTMTNProjectLinkData) throw new Error('unable to create link!')
    createdProjectLinksData = await API.graphql({
      query: createProjectLinks,
      variables: {
        input: {
          tMTNProjectId: project.id,
          tMTNProjectLinkId: createdTMTNProjectLinkData.data.createTMTNProjectLink.id,
        },
      },
    })
    if (createdProjectLinksData) return createdProjectLinksData.data.createProjectLinks
    throw new Error("Error adding project link")
  } catch (error) {
    console.log(error)
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
