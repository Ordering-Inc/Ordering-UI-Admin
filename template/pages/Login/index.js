import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { LoginForm } from '../../../src/components/Login'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config.json'

export const Login = (props) => {
  const location = useLocation()
  const history = useHistory()

  const loginProps = {
    ...props,
    billingUrl: settings?.billing_url,
    useProjectDomain: settings?.use_project_domain,
    urlToRedirect: location?.state?.from,
    handleRedirect: (url) => history.push(url)
  }
  return (
    <>
      <HelmetTags page='login' />
      <LoginForm {...loginProps} />
    </>
  )
}
