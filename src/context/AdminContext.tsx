import React, { useContext, useEffect, useReducer, Dispatch, useState } from 'react'
import { adminReducer, adminAction } from './adminReducer'
import { fetchProjects } from '../service/projectService'

export interface ProjectInt {
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

const initialProjectState: ProjectInt[] = [
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

export const initialAdminState = {
  loggedIn: false,
  addingProject: false,
  addingLink: false,
}

type AdminState = {
  adminState: typeof initialAdminState
  projectData: typeof initialProjectState
  dispatch: Dispatch<adminAction>
}

const AdminContext = React.createContext<AdminState | null>(null)

export const AdminProvider = (props: { children?: React.ReactNode }) => {
  const [adminState, dispatch] = useReducer(adminReducer, initialAdminState)
  const [projectData, setProjectData] = useState(initialProjectState)

  const loadData = async () => {
    const loadedProjects: ProjectInt[] = await fetchProjects()
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
        projectData
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
