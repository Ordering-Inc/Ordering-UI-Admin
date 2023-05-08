import React from 'react'
import { useLocation } from 'react-router-dom'
import { LoginForm } from '../../../src/components/Login'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config.json'

export const Login = (props) => {
  const location = useLocation()

  const loginProps = {
    ...props,
    billingUrl: settings?.billing_url,
    useProjectDomain: settings?.use_project_domain,
    urlToRedirect: location?.state?.from
  }
  return (
    <>
      <HelmetTags page='login' />
      <LoginForm {...loginProps} />
    </>
  )
}
