import React from 'react'

const EditPanel = () => {
  return (
    <div className='flex justify-around bg-gray-600 text-center text-xs lg:flex-col'>
      <div className='m-2 cursor-pointer border-2 p-2 hover:border-gray-100 hover:bg-gray-900'>
        <svg
          className='mx-auto w-6 fill-gray-600 stroke-gray-50 p-1 lg:w-8'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M9 15V12.5L17.75 3.75C18.4404 3.05964 19.5596 3.05964 20.25 3.75V3.75C20.9404 4.44036 20.9404 5.55964 20.25 6.25L15.5 11L11.5 15H9Z'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <p>edit</p>
      </div>
      <div className='m-2 cursor-pointer border-2 p-2 hover:border-gray-100 hover:bg-red-700 '>
        <svg
          className='mx-auto w-6 fill-gray-600 stroke-gray-50 p-1 lg:w-8'
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
        delete
      </div>
    </div>
  )
}

export default EditPanel
