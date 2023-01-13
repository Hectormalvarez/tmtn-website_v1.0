import { API } from 'aws-amplify'
import { IProject } from '../context/AdminContext'
import { createTMTNProject } from '../graphql/mutations'
import { listTMTNProjects } from '../graphql/queries'

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
  return await API.graphql({ query: createTMTNProject, variables: { input: projectData, authMode: 'AWS_IAM' } })
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
