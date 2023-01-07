import React from 'react'
import { useForm } from 'react-hook-form'

import { ProjectInt, useAdmin } from '../context/AdminContext'

const AddProjectLink: React.FC<{ project: ProjectInt }> = ({ project }) => {
  const { addingLinkHandler } = useAdmin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ name: string; url: string }>()

  const onSubmit = handleSubmit((data) => {
    if (project.links) {
      project.links.push({ name: data.name.toLowerCase(), url: data.url })
    } else {
      project.links = [{ name: data.name.toLowerCase(), url: data.url }]
    }
    reset()
    addingLinkHandler()
  })

  const getAvailableProjectLinks = (project: ProjectInt) => {
    const linkOptions = ['WEBSITE', 'GITHUB', 'FIGMA']
    // determine links that can be added
    // check links project contains and deduce from possible options
    if (project.links) {
      const linkNames = project.links.map((projectlink) => projectlink.name.toLocaleUpperCase())
      const availableLinkOptions = linkOptions.filter((element) => !linkNames.includes(element))
      return availableLinkOptions
    } else {
      return linkOptions
    }
  }
  const availableProjectLinks = getAvailableProjectLinks(project)
  if (!availableProjectLinks) return <></>
  const linkSelectOptions = availableProjectLinks.map((availableLink) => (
    <option key={`${availableLink}`} value={`${availableLink}`}>
      {availableLink.toLocaleUpperCase()}
    </option>
  ))

  return (
    <div>
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
        <button className='my-2 border-2 border-gray-900 bg-gray-800 p-2 text-gray-50 hover:bg-gray-200 hover:fill-white hover:text-black'>
          submit
        </button>
      </form>
    </div>
  )
}

export default AddProjectLink
