import React from 'react'
import { useForm } from 'react-hook-form'

import { IProject } from '../hooks/AdminContext'
import { createProject } from '../service/projectService'

const AddProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProject>()

  const onSubmit = handleSubmit((data) => {
    createProject(data)
    reset()
  })

  return (
    <form onSubmit={onSubmit} className='m-4 flex flex-col border-2 border-gray-800 p-2'>
      <h3 className='text-lg font-bold capitalize'>add a new project</h3>

      <label>Name</label>
      <input className='border-2 border-gray-800 p-2' {...register('name', { required: true })} />
      {errors.name && 'Name Required!'}

      <label>Description</label>
      <input
        className='border-2 border-gray-800 p-2'
        {...register('description', { required: true })}
      />
      {errors.name && 'Description Required!'}

      <label>TechStack</label>
      <input
        className='border-2 border-gray-800 p-2'
        {...register('techstack', { required: true })}
      />
      {errors.name && 'TechStack Required!'}

      <button className='my-2 border-2 border-gray-900 bg-gray-800 p-2 text-gray-50 hover:bg-gray-200 hover:fill-white hover:text-white'>
        submit
      </button>
    </form>
  )
}

export default AddProject
