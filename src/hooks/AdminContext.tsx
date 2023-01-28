import React, { useContext, useEffect, useReducer, Dispatch, useState } from 'react'
import { adminReducer, TadminAction } from './adminReducer'
import { fetchProjects } from '../service/projectService'

export interface IProject {
  id: string
  name: string
  description: string
  techstack: string
  links?:
    | {
        id?: string | undefined
        name: string
        url: string
      }[]
    | undefined
}

const initialProjectState: IProject[] = [
  {
    id: '234',
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
  loggedIn: boolean | undefined
  addingProject: boolean | undefined
  addingLinkProjectID: string | undefined | null
  editingProjects: boolean | undefined
  currentlyEditing: {
    type: string | null | undefined
    id: string | null | undefined
  }
}

const initialAdminState: TadminState = {
  loggedIn: false,
  addingProject: false,
  addingLinkProjectID: null,
  editingProjects: false,
  currentlyEditing: {
    type: null,
    id: null,
  },
}

type TAdminContext = {
  adminState: TadminState
  projectData: IProject[]
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
