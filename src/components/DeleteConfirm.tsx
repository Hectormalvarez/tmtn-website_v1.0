import React from 'react'

import { useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'
import { deleteProjectLinkFromCloud } from '../service/projectService'

const DeleteConfirm: React.FC<{ name: string; type: 'project' | 'link'; id: string }> = ({
  name,
  type,
  id,
}) => {
  const { dispatch } = useAdmin()

  const handleDeleteOnClick = () => {
    console.log(`deleting ${id}`)
    if (type === 'link') {
      deleteProjectLinkFromCloud(id, type)
    }
    dispatch({ type: EAdminAction.SET_CURRENTLY_DELETING, setCurrentlyDeleting: null })
  }
  const handleCancelOnClick = () => {
    dispatch({ type: EAdminAction.SET_CURRENTLY_DELETING, setCurrentlyDeleting: null })
  }

  return (
    <div>
      <h3 className='tex p-2 text-2xl text-red-50 underline'>
        delete {type}: {name}?
      </h3>
      <div className='flex justify-around'>
        <div
          onClick={handleDeleteOnClick}
          className='flex-grow border-2 border-transparent bg-slate-500 py-2 text-center uppercase hover:cursor-pointer hover:border-red-800'
        >
          delete
        </div>
        <div
          onClick={handleCancelOnClick}
          className='flex-grow border-2 border-transparent bg-slate-500 py-2 text-center uppercase hover:cursor-pointer hover:border-white'
        >
          cancel
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirm
