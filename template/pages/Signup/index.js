import React from 'react'
import { SignupForm } from '../../../src/components/Login/Signup'
import { HelmetTags } from '../../components/HelmetTags'

export const Signup = (props) => {
  return (
    <>
      <HelmetTags page='signup' />
      <SignupForm {...props} />
    </>
  )
}
