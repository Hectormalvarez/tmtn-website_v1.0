import React from 'react'

import { useAdmin } from '../hooks/AdminContext'
import AddProjectLinkForm from './AddProjectLinkForm'
import ProjectLink from './ProjectLink'
import { IProject } from '../hooks/AdminContext'
import { getPossibleProjectLinks } from '../service/projectService'
import { EAdminAction } from '../hooks/adminReducer'

const ProjectLinks: React.FC<{ project: IProject }> = ({ project }) => {
  const linkOptions = ['WEBSITE', 'GITHUB', 'FIGMA']
  const { adminState, dispatch } = useAdmin()
  const remaininglinks = getPossibleProjectLinks(project, linkOptions)
  const showLinkForm = project.id === adminState.addingLinkProjectID

  // show add link button
  if (adminState.loggedIn && remaininglinks.length !== 0) {
    return (
      <div className='m-2 flex flex-col bg-gray-200 p-2'>
        <div className='flex flex-row-reverse justify-around'>
          <div
            className='text-center text-black lg:hover:cursor-pointer lg:hover:bg-white'
            onClick={() => {
              dispatch({ type: EAdminAction.ADDING_LINK, projectID: project.id })
            }}
          >
            <svg
              className='mx-auto w-8 lg:w-16'
              viewBox='0 0 1024 1024'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M576.477 448.471l349.649.621c35.346.041 63.967 28.728 63.926 64.074s-28.728 63.967-64.074 63.926l-349.429-.621.194 349.647c.013 35.346-28.63 64.01-63.977 64.023s-64.01-28.63-64.023-63.977l-.195-349.921-349.622-.621C63.58 575.581 34.959 546.894 35 511.548s28.728-63.967 64.074-63.926l349.402.621-.194-349.361c-.013-35.346 28.63-64.01 63.977-64.023s64.01 28.63 64.023 63.977l.194 349.635z' />
            </svg>
            add link
          </div>
          {project.links?.map((link) => {
            return <ProjectLink link={link} key={link.name} />
          })}
        </div>
       {showLinkForm && <AddProjectLinkForm project={project} linkOptions={linkOptions} />}
      </div>
    )
  }

  // if not logged in
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
