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
        id: '1',
        name: 'github',
        url: 'https://github.com',
      },
      {
        id: '2',
        name: 'website',
        url: 'https://www.taylormadetech.net',
      },
      {
        id: '3',
        name: 'figma',
        url: 'https://www.figma.com',
      },
    ],
  },
]

export type TadminState = {
  loggedIn: boolean | undefined
  addingProject: boolean | undefined | null
  addingLinkProjectID: string | undefined | null
  editingProjects: boolean | undefined
  currentlyEditing: {
    type: string | null | undefined
    id: string | null | undefined
  }
  currentlyDeleting: {
    type: string | null | undefined
    id: string | null | undefined
  }
}

const initialAdminState: TadminState = {
  loggedIn: false,
  addingProject: undefined,
  addingLinkProjectID: undefined,
  editingProjects: undefined,
  currentlyEditing: {
    type: undefined,
    id: undefined,
  },
  currentlyDeleting: {
    type: undefined,
    id: undefined,
  },
}

type TAdminContext = {
  adminState: TadminState
  projectData: IProject[]
  dispatch: Dispatch<TadminAction>
  setProjectData: React.Dispatch<React.SetStateAction<IProject[]>>
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
        setProjectData,
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
