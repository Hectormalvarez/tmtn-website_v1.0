import React from 'react'
import { useAdmin } from '../context/AdminContext'

const Admin = () => {
  const { loggedIn, loginHandler, logoutHandler } = useAdmin()
  return (
    <nav className='flex flex-col lg:block'>
      <button
        className='
      mx-4 border-2 border-gray-700 p-4 text-center font-bold uppercase hover:cursor-pointer hover:bg-gray-900 hover:text-gray-50 lg:text-2xl
      '
        onClick={loggedIn ? logoutHandler : loginHandler}
      >
        {loggedIn ? <p>logout</p> : <p>login</p>}
      </button>
    </nav>
  )
}

export default Admin
