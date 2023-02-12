import React from 'react'

import { IProject, useAdmin } from '../hooks/AdminContext'
import DeleteButton from './DeleteButton'
import EditProjectForm from './EditProjectForm'
import EditButton from './EditButton'
import ProjectLinks from './ProjectLinks'
import DeleteConfirm from './DeleteConfirm'

interface ProjectProps {
  project: IProject
  children?: React.ReactNode
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { adminState } = useAdmin()
  const showEditForm = adminState.currentlyEditing.id == project.id
  const showDeleteForm = adminState.currentlyDeleting.id == project.id
  const showButtons =
    adminState.editingProjects &&
    adminState.currentlyEditing.id !== project.id &&
    adminState.currentlyDeleting.id !== project.id

  return (
    <article key={project.name} className='m-4 bg-gray-800 p-2 text-white'>
      <div className={`w-full ${adminState.currentlyEditing ? '' : 'lg:flex'}`}>
        {showButtons && (
          <div className='m-2 flex gap-2 lg:flex-col'>
            <EditButton type='project' id={project.id} />
            <DeleteButton type='project' id={project.id} />
          </div>
        )}
        <div className='flex flex-col p-2 lg:flex-grow'>
          <h3 className='text-xl lg:text-3xl'>{project.name}</h3>
          <p className='flex-grow text-sm lg:text-lg'>{project.description}</p>
          <p className='pb-2 text-xs text-white'>tech stack: {project.techstack}</p>
        </div>
        {showDeleteForm && <DeleteConfirm name={project.name} type='project' id={project.id} />}
        {!showDeleteForm && <ProjectLinks project={project} />}
      </div>
      {showEditForm && <EditProjectForm project={project} />}
    </article>
  )
}

export default Project

