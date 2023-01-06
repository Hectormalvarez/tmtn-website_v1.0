import React from 'react'

const Header = () => {
  return (
    <header className='mx-4 justify-center pt-12 text-center capitalize text-gray-900 lg:flex lg:pt-0 lg:align-middle'>
      <div className='my-auto lg:grow'>
        <p className='text-4xl lg:text-5xl'>hector alvarez</p>
        <p className='text-lg'>full stack development & UX \ UI</p>
      </div>
      <img src='/tmtn.png' alt='TMTN logo' className='m-auto w-full max-w-md' />
    </header>
  )
}

export default Header
