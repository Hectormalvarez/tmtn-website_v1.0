import React from 'react'

import { IProject, useAdmin } from '../hooks/AdminContext'
import ProjectLinks from './ProjectLinks'
import EditPanel from './EditPanel'

interface ProjectProps {
  project: IProject
  children?: React.ReactNode
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { adminState } = useAdmin()
  return (
    <article
      key={project.name}
      className='m-4 flex flex-col bg-gray-800 p-2 text-white lg:flex-row lg:justify-center lg:align-middle'
    >
      {adminState.loggedIn && <EditPanel />}
      <div className='flex flex-col p-2 lg:flex-grow'>
        <h3 className='text-xl lg:text-3xl'>{project.name}</h3>
        <p className='flex-grow text-sm lg:text-lg'>{project.description}</p>
        <p className='pb-2 text-xs text-white'>tech stack: {project.techstack}</p>
      </div>
      <ProjectLinks project={project} />
    </article>
  )
}

export default Project
