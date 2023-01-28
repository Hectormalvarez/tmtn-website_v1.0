import React from 'react'

import { useAdmin } from '../hooks/AdminContext'
import { EAdminAction } from '../hooks/adminReducer'

const AddLinkButton: React.FC<{ id: string }> = ({ id }) => {
  const { dispatch } = useAdmin()

  return (
    <div
      className='my-auto ml-auto w-28 py-2 text-center font-bold capitalize text-black lg:hover:cursor-pointer lg:hover:bg-white'
      onClick={() => {
        dispatch({ type: EAdminAction.ADDING_LINK, addingLinkProjectID: id })
      }}
    >
      <svg
        className='mx-auto w-8 lg:w-16'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 8V16M16 12H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z'
          stroke='#000000'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      add link
    </div>
  )
}

export default AddLinkButton
