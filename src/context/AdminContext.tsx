import React, { useContext, useState } from 'react'

const AdminContext = React.createContext({
  loggedIn: true,
  loginHandler: () => {
    // handles logging in
  },
  logoutHandler: () => {
    // handles logging out
  },
})

export const AdminProvider = (props: { children?: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const logoutHandler = () => {
    return setLoggedIn(false)
  }

  const loginHandler = () => {
    return setLoggedIn(true)
  }

  const contextValue = {
    loggedIn,
    loginHandler,
    logoutHandler,
  }
  return <AdminContext.Provider value={contextValue}>{props.children}</AdminContext.Provider>
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}
