import React from 'react'
import { Amplify } from 'aws-amplify'

import { AdminProvider } from './context/AdminContext'
import Home from './components/Home'

import awsExports from './aws-exports'
Amplify.configure(awsExports)

function App() {
  return (
    <AdminProvider>
      <Home />
    </AdminProvider>
  )
}

export default App
