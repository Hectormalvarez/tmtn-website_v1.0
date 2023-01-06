import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import ProjectList from './ProjectList'

const Home = () => {
  return (
    <main className='mx-auto max-w-6xl font-nunito'>
      <Header />
      <ProjectList />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Home
