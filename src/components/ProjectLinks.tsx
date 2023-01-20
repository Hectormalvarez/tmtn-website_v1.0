import React from 'react'
import { useLocation } from 'react-router-dom'

import { useAdmin } from '../hooks/AdminContext'
import AddProjectLinkForm from './AddProjectLinkForm'
import ProjectLink from './ProjectLink'
import { IProject } from '../hooks/AdminContext'
import { getPossibleProjectLinks } from '../service/projectService'
import { EAdminAction } from '../hooks/adminReducer'

const ProjectLinks: React.FC<{ project: IProject }> = ({ project }) => {
  const { adminState, dispatch } = useAdmin()
  const linkOptions = ['WEBSITE', 'GITHUB', 'FIGMA']
  const remaininglinks = getPossibleProjectLinks(project, linkOptions)
  const showLinkForm = project.id === adminState.addingLinkProjectID
  const currentLocation = useLocation()

  // show add link button
  if (adminState.loggedIn && remaininglinks.length !== 0 && currentLocation.pathname === '/admin') {
    return (
      <div className='m-2 flex flex-col bg-gray-200 p-2'>
        <div className='flex flex-row-reverse justify-around'>
          {/* do not show add link if form is showing */}
          {!showLinkForm && (
            <div
              className='my-auto w-28 py-2 text-center capitalize font-bold text-black lg:hover:cursor-pointer lg:hover:bg-white'
              onClick={() => {
                dispatch({ type: EAdminAction.ADDING_LINK, projectID: project.id })
              }}
            >
              <svg
                className='mx-auto w-8 lg:w-16'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 8V16M16 12H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z'
                  stroke='#000000'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              add link
            </div>
          )}

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
      {project.links?.length ? (
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
