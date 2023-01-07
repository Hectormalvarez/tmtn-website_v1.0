import React, { useContext, useState } from 'react'

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

const projects: ProjectInt[] = [
  {
    name: 'taylormadetech.net',
    description: 'company website',
    techstack: 'javascript (react), hosted on AWS with Amplify',
    // links: [
    //   {
    //     name: 'github',
    //     url: 'https://github.com',
    //   },
    //   {
    //     name: 'website',
    //     url: 'https://www.taylormadetech.net',
    //   },
    // ],
  },
  // {
  //   name: "secrets.taylormadetech.net",
  //   description: "secret sharing website",
  //   techstack: "javascript (react), hosted on AWS with Amplify",
  //   links: [
  //     {
  //       name: "github",
  //       url: "https://github.com",
  //     },
  //     {
  //       name: "figma",
  //       url: "figma.com",
  //     },
  //     {
  //       name: "website",
  //       url: "https://secrets.taylormadetech.net",
  //     },
  //   ],
  // },
  // {
  //   name: "mgdrywall-usa.com",
  //   description: "MG Drywall U.S.A company website",
  //   techstack: "javascript (next.js), hosted on AWS with Amplify",
  // },
  // {
  //   name: "discord-bot",
  //   description: "discord bot project",
  //   techstack: "node.js",
  //   links: [
  //     {
  //       name: "github",
  //       url: "https://github.com",
  //     },
  //   ],
  // },
  // {
  //   name: "myRides",
  //   description: "an app to book your favorite Uber or Lyft driver",
  //   techstack: "javascript (react) front end, python (django) backend",
  //   links: [
  //     {
  //       name: "github",
  //       url: "https://github.com",
  //     },
  //   ],
  // },
]

const AdminContext = React.createContext({
  loggedIn: true,
  addingProject: false,
  projectData: projects,
  addingLink: false,
  logoutHandler: () => {
    // logging out
  },
  loginHandler: () => {
    // logging in
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
  const [addingProject, setAddingProject] = useState(false)
  const [projectData, setProjectData] = useState(projects)
  const [addingLink, setAddingLink] = useState(false)

  const logoutHandler = () => {
    if (addingProject) addingProjectHandler()
    if (addingLink) addingLinkHandler()
    return setLoggedIn(false)
  }

  const loginHandler = () => {
    return setLoggedIn(true)
  }

  const addingProjectHandler = () => {
    return setAddingProject(!addingProject)
  }

  const projectDataHandler = (newProject: ProjectInt) => {
    return setProjectData([newProject, ...projectData])
  }

  const addingLinkHandler = () => {
    return setAddingLink(!addingLink)
  }

  const contextValue = {
    loggedIn,
    addingProject,
    projectData,
    addingLink,
    logoutHandler,
    loginHandler,
    addingProjectHandler,
    projectDataHandler,
    addingLinkHandler
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
