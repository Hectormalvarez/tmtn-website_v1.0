import React from 'react'
import { useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'

const DeleteButton: React.FC<{ type: string; id: string | undefined }> = ({ type, id }) => {
  const { adminState, dispatch } = useAdmin()

  return (
    <div
      className='flex flex-grow cursor-pointer border-2 hover:border-gray-100 hover:bg-red-700'
      onClick={() => {
        if (adminState.currentlyEditing)
          dispatch({ type: EAdminAction.SET_CURRENTLY_EDITING, setCurrentlyEditing: null })
        dispatch({ type: EAdminAction.SET_CURRENTLY_DELETING, setCurrentlyDeleting: { id, type } })
      }}
    >
      <svg
        className='ml-2 w-6 fill-gray-900 stroke-gray-50 lg:w-8'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <p className='my-auto p-2'>delete</p>
    </div>
  )
}

export default DeleteButton
