import React from 'react'
import { LoginForm } from '../../../src/components/Login'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config.json'

export const Login = (props) => {
  const loginProps = {
    ...props,
    billingUrl: settings?.billing_url
  }
  return (
    <>
      <HelmetTags page='login' />
      <LoginForm {...loginProps} />
    </>
  )
}
