import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import { IProject, useAdmin } from '../hooks/AdminContext'
import { getPossibleProjectLinks } from '../service/projectService'
import AddProjectLinkForm from './AddProjectLinkForm'
import AddLinkButton from './AddLinkButton'
import DeleteConfirm from './DeleteConfirm'
import ProjectLink from './ProjectLink'

const ProjectLinks: React.FC<{ project: IProject }> = ({ project }) => {
  const { adminState } = useAdmin()
  
  const deletingLink = project.links?.find((link) => {
    if (!link.id) return false
    link.id === adminState.currentlyDeleting.id
  })
  if (deletingLink) {
    return <DeleteConfirm name={deletingLink.name} type='link' id={deletingLink.id as string} />
  }
  
  // show add link context
  const currentLocation = useLocation()
  const linkOptions = ['WEBSITE', 'GITHUB', 'FIGMA']
  const showLinkForm = project.id === adminState.addingLinkProjectID
  const remaininglinks = getPossibleProjectLinks(project, linkOptions)
  if (adminState.loggedIn && remaininglinks.length !== 0 && currentLocation.pathname === '/admin') {
    return (
      <div className='m-2 flex flex-col bg-gray-200 p-2'>
        <div className='flex flex-row-reverse justify-around'>
          {/* do not show add link if form is showing */}
          {!showLinkForm && !adminState.editingProjects && <AddLinkButton id={project.id} />}
          {project.links?.map((link) => {
            return <ProjectLink link={link} key={link.id} />
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
          return <ProjectLink link={link} key={link.id} />
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
