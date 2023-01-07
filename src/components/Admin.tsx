import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const Admin = () => {
  return (
    <Authenticator hideSignUp={true} variation='modal'>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {({ signOut, user }: any) => (
        <div
          className='
            flex flex-col border-2 m-4
            border-gray-700 text-md p-2 text-center font-bold uppercase hover:cursor-pointer hover:bg-gray-900 hover:text-gray-50 lg:block lg:text-2xl
'
        >
          <div className='my-2'>

          <p>Hello,</p>
          <p>{user.attributes.email}</p>
          </div>
          <button
            className='
            mx-4 border-2 border-gray-700 p-4 text-center font-bold uppercase hover:cursor-pointer hover:bg-gray-900 hover:text-gray-50 lg:text-2xl
            '
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      )}
    </Authenticator>
  )
}

export default Admin
