import React from 'react'
import { useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'

const EditProjectsButton = () => {
  const { adminState, dispatch } = useAdmin()

  if (!adminState.loggedIn || adminState.addingProject) return <></>
  if (adminState.editingProjects) {
    return (
      <div
        className='
        flex cursor-pointer border-2 border-gray-900 p-2 duration-300 hover:shadow-lg hover:shadow-gray-600
        '
        onClick={() => {
          dispatch({ type: EAdminAction.SET_CURRENTLY_EDITING, setCurrentlyEditing: null })
          dispatch({ type: EAdminAction.SET_CURRENTLY_DELETING, setCurrentlyDeleting: null })
          dispatch({ type: EAdminAction.EDITING_PROJECTS, payload: false })
        }}
      >
        <svg className='w-6 p-1 lg:w-8' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
          <g id='Layer_2' data-name='Layer 2'>
            <g id='invisible_box' data-name='invisible box'>
              <rect width='48' height='48' fill='none' />
            </g>
            <g id='icons_Q2' data-name='icons Q2'>
              <g>
                <path d='M43.4,15.1,32.9,4.6A2,2,0,0,0,31.5,4h-15a2,2,0,0,0-1.4.6L4.6,15.1A2,2,0,0,0,4,16.5v15a2,2,0,0,0,.6,1.4L15.1,43.4a2,2,0,0,0,1.4.6h15a2,2,0,0,0,1.4-.6L43.4,32.9a2,2,0,0,0,.6-1.4v-15A2,2,0,0,0,43.4,15.1ZM40,30.6,30.6,40H17.4L8,30.6V17.4L17.4,8H30.6L40,17.4Z' />
                <path d='M26.8,24l5.6-5.6a2,2,0,0,0-2.8-2.8L24,21.2l-5.6-5.6a2,2,0,0,0-2.8,2.8L21.2,24l-5.6,5.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0L24,26.8l5.6,5.6a1.9,1.9,0,0,0,2.8,0,1.9,1.9,0,0,0,0-2.8Z' />
              </g>
            </g>
          </g>
        </svg>
        stop editing
      </div>
    )
  }
  return (
    <div
      className='
        flex cursor-pointer border-2 border-gray-900 p-2 duration-300 hover:shadow-lg hover:shadow-gray-600
        '
      onClick={() => dispatch({ type: EAdminAction.EDITING_PROJECTS, payload: true })}
    >
      <svg
        className='w-6 fill-white p-1 lg:w-8'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M9 15V12.5L17.75 3.75C18.4404 3.05964 19.5596 3.05964 20.25 3.75V3.75C20.9404 4.44036 20.9404 5.55964 20.25 6.25L15.5 11L11.5 15H9Z'
          stroke='#000000'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      edit projects
    </div>
  )
}

export default EditProjectsButton
