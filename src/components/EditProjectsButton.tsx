import React from 'react'
import { useAdmin } from '../hooks/AdminContext'

const EditProjectsButton = () => {
  const {adminState} = useAdmin();

  if (!adminState.loggedIn) return <></>
  return (
    <div
      className='
        flex cursor-pointer border-2 border-gray-900 p-2 duration-300 hover:shadow-lg hover:shadow-gray-600
        '
      onClick={() => console.log('EDIT PROJECTS')}
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
