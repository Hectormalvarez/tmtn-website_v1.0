import React from 'react'
import AddLink from './AddLinkButton'
import ProjectLink from './ProjectLink'
import { ProjectInt } from '../context/AdminContext'

const ProjectLinks: React.FC<{
  project: ProjectInt
  loggedIn: boolean
}> = ({ project, loggedIn }) => {
  if (loggedIn)
    return (
      <div className='m-2 flex flex-row-reverse justify-around bg-gray-200 p-2'>
        <figure className='my-auto w-32 py-2 lg:hover:cursor-pointer lg:hover:bg-white '>
          <AddLink loggedIn={loggedIn} />
        </figure>
        {project.links?.map((link) => {
          return <ProjectLink link={link} key={link.name} />
        })}
      </div>
    )

  return (
    <div className='m-2 flex flex-row-reverse justify-around bg-gray-200  p-2'>
      {project.links ? (
        project.links?.map((link) => {
          return <ProjectLink link={link} key={link.name} />
        })
      ) : (
        <p className='p-4 text-lg font-bold uppercase text-black lg:p-12 lg:text-2xl'>
          links coming soon!
        </p>
      )}
    </div>
  )
}

export default ProjectLinks
