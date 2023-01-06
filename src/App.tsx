import React from 'react'

import { AdminProvider } from './context/AdminContext'
import Home from './components/Home'

function App() {
  return (
    <AdminProvider>
      <Home />
    </AdminProvider>
  )
}

export default App
