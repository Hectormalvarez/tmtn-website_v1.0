import React from 'react'
import { useAdmin } from '../context/AdminContext'

const Admin = () => {
  const { loggedIn, loginHandler, logoutHandler } = useAdmin()
  return (
    <nav className=''>
      <p
        className='
        m-4 border-2 border-gray-700 p-4 text-center text-2xl uppercase hover:cursor-pointer hover:bg-gray-900
        '
      >
        login
      </p>
    </nav>
  )
}

export default Admin
