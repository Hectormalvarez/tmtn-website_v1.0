import React from 'react'
import { useAdmin } from '../hooks/AdminContext'
import AddProjectForm from './AddProjectForm'
import AddProjectButton from './AddProjectButton'
import Project from './Project'

const ProjectList = () => {
  const { adminState, projectData } = useAdmin()
  return (
    <section>
      <div className='font-mplus mx-4 flex justify-between font-bold lg:text-2xl'>
        <h2 className='p-2'>Project Catalog</h2>
        <AddProjectButton />
      </div>
      {adminState.loggedIn && adminState.addingProject && <AddProjectForm />}
      {projectData.map((project) => {
        return <Project key={project.name} project={project} />
      })}
    </section>
  )
}

export default ProjectList
