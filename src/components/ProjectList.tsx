import React from 'react'
import { useAdmin } from '../context/AdminContext'
import AddProjectButton from './AddProjectButton'
import Project from './Project'

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
    links: [
      {
        name: 'github',
        url: 'https://github.com',
      },
      {
        name: 'website',
        url: 'https://www.taylormadetech.net',
      },
    ],
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

const ProjectList = () => {
  const { loggedIn } = useAdmin()
  return (
    <section>
      <div className='font-mplus mx-4 flex justify-between text-2xl font-bold'>
        <h2 className='p-2'>Project Catalog</h2>
        <AddProjectButton loggedIn={loggedIn} />
      </div>
      {projects.map((project) => {
        return <Project key={project.name} project={project} loggedIn={loggedIn} />
      })}
    </section>
  )
}

export default ProjectList
