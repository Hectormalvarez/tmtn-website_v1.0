import React, { useContext, useEffect, useState } from 'react'
import { API, Auth, Hub } from 'aws-amplify'
import { listTMTNProjects } from '../graphql/queries'
import { createTMTNProject } from '../graphql/mutations'

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

const AdminContext = React.createContext({
  loggedIn: false,
  loggingIn: false,
  addingProject: false,
  projectData: initialProjectState,
  addingLink: false,
  logoutHandler: () => {
    // logging out
  },
  loginHandler: () => {
    // logging in
  },
  loggingInHandler: () => {
    // toggles logging in state on\off
  },
  addingProjectHandler: () => {
    // toggles addingProject state on\off
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectDataHandler: (newProject: ProjectInt) => {
    // adds project to projectdata
  },
  addingLinkHandler: () => {
    // toggles addingLinK state on\off
  },
})

export const AdminProvider = (props: { children?: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)
  const [addingProject, setAddingProject] = useState(false)
  const [projectData, setProjectData] = useState(initialProjectState)
  const [addingLink, setAddingLink] = useState(false)

  const logoutHandler = () => {
    if (addingProject) addingProjectHandler()
    if (addingLink) addingLinkHandler()
    return setLoggedIn(false)
  }

  const loginHandler = () => {
    return setLoggedIn(true)
  }

  const loggingInHandler = () => {
    return setLoggingIn(!loggingIn)
  }

  const addingProjectHandler = () => {
    return setAddingProject(!addingProject)
  }

  async function createProject(projectData: ProjectInt) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await API.graphql({ query: createTMTNProject, variables: { input: projectData } })
    } catch (error) {
      console.log(error)
    }
  }

  const projectDataHandler = (newProject: ProjectInt) => {
    return createProject(newProject)
  }

  const addingLinkHandler = () => {
    return setAddingLink(!addingLink)
  }

  async function fetchProjects() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const projectData: any = await API.graphql({ query: listTMTNProjects, authMode: 'API_KEY' })
      const projects = projectData.data.listTMTNProjects.items
      setProjectData(projects)
    } catch (err) {
      console.log('error fetching todos')
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProjects()
    Auth.currentAuthenticatedUser()
      .then((user) => {
        if (user) loginHandler()
      })
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          loginHandler()
          // console.log(data)
          console.log('user signed in')
          break
        case 'signOut':
          logoutHandler()
          // console.log(data)
          console.log('user signed out')
          break
        case 'signIn_failure':
          console.log('user sign in failed')
          break
      }
    })
  }, [])

  const contextValue = {
    loggedIn,
    loggingIn,
    addingProject,
    projectData,
    addingLink,
    logoutHandler,
    loginHandler,
    loggingInHandler,
    addingProjectHandler,
    projectDataHandler,
    addingLinkHandler,
  }

  return <AdminContext.Provider value={contextValue}>{props.children}</AdminContext.Provider>
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}
