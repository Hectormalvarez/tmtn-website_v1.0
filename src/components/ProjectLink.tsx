import React from 'react'
// import { useAdmin } from '../hooks/AdminContext'
// import EditPanel from './EditPanel'

interface IProjectLinkProps {
  link: {
    name: string
    url: string
    id?: string
  }
}

const ProjectLink: React.FC<IProjectLinkProps> = ({ link }) => {
  // const { adminState } = useAdmin()
  return (
    <>
      {/* {adminState.editingProjects && <EditPanel type="link" id={link.id} />} */}
      <figure className='my-auto w-32 py-2 lg:hover:cursor-pointer lg:hover:bg-white '>
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
      </figure>
    </>
  )
}

export default ProjectLink
