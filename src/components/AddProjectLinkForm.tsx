import React from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';


import { IProject, useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'
import { getPossibleProjectLinks, addLinktoProject } from '../service/projectService'

const AddProjectLink: React.FC<{ project: IProject; linkOptions: string[] }> = ({
  project,
  linkOptions,
}) => {
  const { dispatch } = useAdmin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ name: string; url: string }>()

  const onSubmit = handleSubmit((data) => {
    const newLink = { name: data.name.toLowerCase(), url: data.url, id: uuidv4() }
    addLinktoProject(project.id, newLink)
    if (project.links) {
      project.links.push(newLink)
    } else {
      project.links = [newLink]
    }

    reset()
    dispatch({ type: EAdminAction.ADDING_LINK, payload: false })
  })

  const availableProjectLinks = getPossibleProjectLinks(project, linkOptions)
  const linkSelectOptions = availableProjectLinks.map((availableLink) => (
    <option key={`${availableLink}`} value={`${availableLink}`}>
      {availableLink.toLocaleUpperCase()}
    </option>
  ))

  return (
    <form onSubmit={onSubmit} className='flex flex-col border-2 border-gray-800 p-2  text-black'>
      <h3 className='font-bold capitalize text-gray-800'>add a new project link</h3>
      <label>Name</label>
      <select className='border-2 border-gray-800 p-2' {...register('name', { required: true })}>
        {linkSelectOptions}
      </select>
      {errors.name && 'Name Required!'}
      <label>URL</label>
      <input className='border-2 border-gray-800 p-2' {...register('url', { required: true })} />
      {errors.url && 'URL Required!'}
      <button className='my-2 border-2 border-gray-900 bg-gray-200 p-2 text-black hover:bg-gray-900  hover:text-white'>
        submit
      </button>
      <button
        className='border-2 border-gray-900 bg-gray-200 p-2 text-black hover:bg-red-200'
        onClick={() => dispatch({ type: EAdminAction.ADDING_LINK, addingLinkProjectID: undefined })}
      >
        cancel
      </button>
    </form>
  )
}

export default AddProjectLink
