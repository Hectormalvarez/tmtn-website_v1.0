import React from 'react'
import { useForm } from 'react-hook-form'

import { IProject } from '../hooks/AdminContext'
import { updateProject } from '../service/projectService'
import { useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'

const EditProjectForm: React.FC<{ project: IProject }> = ({ project }) => {
  const { projectData, dispatch } = useAdmin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProject>()

  const onSubmit = handleSubmit((data) => {
    try {
      updateProject(data)
      console.log(data, project, projectData)
      reset()
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <form onSubmit={onSubmit} className='m-4 flex flex-col border-2 border-gray-800 p-2'>
      <h3 className='text-lg font-bold capitalize'>add a new project</h3>

      <label>Name</label>
      <input
        className='border-2 border-gray-800 p-2 text-gray-800'
        {...register('name', { required: true })}
        value={project.name}
      />
      {errors.name && 'Name Required!'}

      <label>Description</label>
      <input
        className='border-2 border-gray-800 p-2 text-gray-800'
        {...register('description', { required: true })}
        value={project.description}
      />
      {errors.name && 'Description Required!'}

      <label>TechStack</label>
      <input
        className='border-2 border-gray-800 p-2 text-gray-800'
        {...register('techstack', { required: true })}
        value={project.techstack}
      />
      {errors.name && 'TechStack Required!'}

      <button
        className='
        my-2 border-2 border-gray-100 bg-gray-800 p-2 text-gray-50 hover:border-gray-900 hover:bg-gray-200
        hover:fill-white hover:text-black
        '
      >
        submit
      </button>
      <button
        className='
        border-2 border-gray-900 bg-gray-200 p-2 text-gray-900 hover:border-gray-200 hover:bg-gray-800
        hover:fill-white hover:text-white
        '
        onClick={() => {
            dispatch({
                type: EAdminAction.SET_CURRENTLY_EDITING,
                setCurrentlyEditing: null,
              })
        }}
      >
        cancel
      </button>
    </form>
  )
}

export default EditProjectForm
