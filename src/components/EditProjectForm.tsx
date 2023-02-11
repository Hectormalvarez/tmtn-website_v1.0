import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { IProject } from '../hooks/AdminContext'
import { updateProject } from '../service/projectService'
import { useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'

const EditProjectForm: React.FC<{ project: IProject }> = ({ project }) => {
  const { projectData, setProjectData, dispatch } = useAdmin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<IProject>()

  const onSubmit = handleSubmit((data) => {
    const updatedProject = {
      id: project.id,
      name: data.name,
      description: data.description,
      techstack: data.techstack,
    }
    updateProject(updatedProject)
    const updatedProjectData = projectData.map((p) => {
      return p.id !== project.id ? p : {...project, ...updatedProject}
    })
    setProjectData(updatedProjectData)
    reset()
    dispatch({type: EAdminAction.SET_CURRENTLY_EDITING, setCurrentlyEditing: null})
  })

  useEffect(() => {
    setValue('name', project.name)
    setValue('description', project.description)
    setValue('techstack', project.techstack)
  }, [])

  return (
    <form onSubmit={onSubmit} className='m-2 flex flex-col border-2 border-gray-800 p-2'>
      <h3 className='text-lg font-bold'>edit {project.name}</h3>

      <label>Name</label>
      <input
        className='border-2 border-gray-800 p-2 text-gray-800'
        {...register('name', { required: true })}
      />
      {errors.name && 'Name Required!'}

      <label>Description</label>
      <input
        className='border-2 border-gray-800 p-2 text-gray-800'
        {...register('description', { required: true })}
      />
      {errors.name && 'Description Required!'}

      <label>TechStack</label>
      <input
        className='border-2 border-gray-800 p-2 text-gray-800'
        {...register('techstack', { required: true })}
      />
      {errors.name && 'TechStack Required!'}

      <button
        className='
        my-2 border-2 border-gray-100 bg-gray-800 p-2 text-gray-50 hover:bg-gray-600
        hover:fill-white
        '
      >
        submit
      </button>
    </form>
  )
}

export default EditProjectForm
