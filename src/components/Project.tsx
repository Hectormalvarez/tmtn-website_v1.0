import React from 'react'

import { ProjectInt } from './ProjectList'
import ProjectLinks from './ProjectLinks'

interface ProjectProps {
  project: ProjectInt
  loggedIn: boolean
  children?: React.ReactNode
}

const Project: React.FC<ProjectProps> = ({ project, loggedIn }) => {
  return (
    <article
      key={project.name}
      className='m-4 flex flex-col bg-gray-800 p-2 text-gray-100 lg:h-48 lg:flex-row lg:justify-center lg:align-middle'
    >
      <div className='flex flex-col p-2 lg:flex-grow'>
        <h3 className='text-xl lg:text-3xl'>{project.name}</h3>
        <p className='flex-grow text-sm lg:text-lg'>{project.description}</p>
        <p className='pb-2 text-xs text-white'>tech stack: {project.techstack}</p>
      </div>
      <ProjectLinks project={project} loggedIn={loggedIn} />
    </article>
  )
}

export default Project
