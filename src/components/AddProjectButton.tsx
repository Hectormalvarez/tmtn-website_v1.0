import React from 'react'

import { useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'

const AddProjectButton = () => {
  const { adminState, dispatch } = useAdmin()
  if (!adminState.loggedIn) return <></>
  if (adminState.addingProject)
    return (
      <button
        className='border-2 border-gray-900 p-2 hover:bg-gray-900 hover:fill-white hover:text-white'
        onClick={() => dispatch({ type: EAdminAction.ADDING_PROJECT, payload: false })}
      >
        cancel
      </button>
    )
  return (
    <button
      className='flex border-2 border-gray-900 p-2 hover:bg-gray-900 hover:fill-white hover:text-white'
      onClick={() => dispatch({ type: EAdminAction.ADDING_PROJECT, payload: true })}
    >
      <svg
        className='w-6 p-1 lg:w-8 fill-white'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14 7V13M11 10H17M14 21C11 21 8 21 5 21C3.89543 21 3.00001 20.1069 3.00001 19.0023C3 16.2888 3 11.5934 3 10M9 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H9C7.89543 3 7 3.89543 7 5V15C7 16.1046 7.89543 17 9 17Z'
          stroke='#000000'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      Add Project
    </button>
  )
}

export default AddProjectButton
