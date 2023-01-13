import React, { useContext, useEffect, useReducer, Dispatch, useState } from 'react'
import { adminReducer, TadminAction } from './adminReducer'
import { fetchProjects } from '../service/projectService'

export interface IProject {
  name: string
  description: string
  techstack: string
  links?:
    | {
        name: string
        url: string
      }[]
    | undefined
}

const initialProjectState: IProject[] = [
  {
    name: 'Loading...',
    description: 'Loading...',
    techstack: 'Loading...',
    links: [
      {
        name: 'github',
        url: 'https://github.com',
      },
      {
        name: 'website',
        url: 'https://www.taylormadetech.net',
      },
      {
        name: 'figma',
        url: 'https://www.figma.com',
      },
    ],
  },
]

export type TadminState = {
  loggedIn: boolean
  addingProject: boolean
  addingLinkTo: 'github' | 'figma' | 'website' | null
}

const initialAdminState: TadminState = {
  loggedIn: false,
  addingProject: false,
  addingLinkTo: null,
}

type TAdminContext = {
  adminState: TadminState
  projectData: typeof initialProjectState
  dispatch: Dispatch<TadminAction>
}

const AdminContext = React.createContext<TAdminContext | null>(null)

export const AdminProvider = (props: { children?: React.ReactNode }) => {
  const [adminState, dispatch] = useReducer(adminReducer, initialAdminState)
  const [projectData, setProjectData] = useState(initialProjectState)

  const loadData = async () => {
    const loadedProjects: IProject[] = await fetchProjects()
    setProjectData(loadedProjects)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <AdminContext.Provider
      value={{
        adminState,
        dispatch,
        projectData,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}
