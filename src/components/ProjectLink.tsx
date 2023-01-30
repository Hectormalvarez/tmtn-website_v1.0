import React from 'react'

import { useAdmin } from '../hooks/AdminContext'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

interface IProjectLinkProps {
  link: {
    name: string
    url: string
    id?: string
  }
}

const ProjectLink: React.FC<IProjectLinkProps> = ({ link }) => {
  const { adminState } = useAdmin()
  return (
    <>
      <figure className='my-auto w-32 p-2 lg:hover:cursor-pointer lg:hover:bg-white '>
        <a href={`${link.url}`} target='_blank' rel='noreferrer'>
          <img
            className='mx-auto w-8 lg:w-16'
            src={`${link.name}.svg`}
            alt={`${link.name} svg icon`}
          />
          <figcaption className='text-center font-bold capitalize text-gray-800'>
            {link.name}
          </figcaption>
        </a>
        {adminState.editingProjects && adminState.currentlyEditing.type !== 'project' && (
          <div className='bg-gray-800 p-2'>
            <EditButton type='link' id={link.id} />
            <DeleteButton type='link' id={link.id} />
          </div>
        )}
      </figure>
    </>
  )
}

export default ProjectLink
