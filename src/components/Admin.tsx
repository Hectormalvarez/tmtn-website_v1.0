import React, { useEffect } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Auth, Hub } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'

import { useAdmin } from '../context/AdminContext'
import { AdminActionType } from '../context/adminReducer'

const Admin = () => {
  const { dispatch } = useAdmin()

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        if (user) dispatch({ type: AdminActionType.LOGGEDIN, payload: true })
      })
      .catch((error) => console.log(error))

    const authListenerCancelToken = Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in')
          dispatch({ type: AdminActionType.LOGGEDIN, payload: true })
          break
        case 'signOut':
          console.log('user signed out')
          dispatch({ type: AdminActionType.LOGGEDIN, payload: false })
          break
        case 'signIn_failure':
          console.log('user sign in failed')
          break
      }
    })
    return () => authListenerCancelToken()
  }, [])

  return (
    <Authenticator hideSignUp={true} variation='modal'>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {({ signOut, user }: any) => (
        <div
          className='
            text-md m-4 flex flex-col
            border-2 border-gray-700 p-2 text-center font-bold uppercase lg:block lg:text-2xl
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
