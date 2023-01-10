import { API } from 'aws-amplify'
import { ProjectInt } from '../context/AdminContext'
import { createTMTNProject } from '../graphql/mutations'
import { listTMTNProjects } from '../graphql/queries'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchProjects() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projectData: any = await API.graphql({ query: listTMTNProjects, authMode: 'API_KEY' })
    return projectData.data.listTMTNProjects.items
    // setProjectData(projects)
  } catch (err) {
    console.log('error fetching todos')
    console.log(err)
  }
}

export async function createProject(projectData: ProjectInt) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await API.graphql({ query: createTMTNProject, variables: { input: projectData } })
  } catch (error) {
    console.log(error)
  }
}

export const getPossibleProjectLinks = (project: ProjectInt, possibleLinkOptions: string[]) => {
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

export const getRemainingProjectLinks = (project: ProjectInt, possibleLinkOptions: string[]) => {
  if (project.links) {
    const linkNames = project.links.map((projectlink) => projectlink.name.toLocaleUpperCase())
    const remainingLinks = possibleLinkOptions.filter((element) => !linkNames.includes(element))
    console.log('wut', remainingLinks)
    return false
  }
}
