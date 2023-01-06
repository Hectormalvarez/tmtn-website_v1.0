import React from 'react'

interface ProjectLinkProps {
  link: {
    name: string
    url: string
  }
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ link }) => {
  return (
    <figure className='my-auto w-32 py-2 lg:hover:cursor-pointer lg:hover:bg-white '>
      <a href={`${link.url}`} target='_blank' rel='noreferrer'>
        <img
          src={`${link.name}.svg`}
          alt={`${link.name} svg icon`}
          className='mx-auto w-8 lg:w-16'
        />
        <figcaption className='text-center font-bold capitalize text-gray-800'>
          {link.name}
        </figcaption>
      </a>
    </figure>
  )
}

export default ProjectLink
