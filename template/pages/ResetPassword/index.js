import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEvent } from 'ordering-components-admin'
import { HelmetTags } from '../../components/HelmetTags'
import { ResetPassword as ResetPasswordController } from '../../../src/components/Login/ResetPassword'

export const ResetPassword = (props) => {
  const [events] = useEvent()
  const {search} = useLocation()
  let code, random, project

  if (search) {
    const data = search.substring(1).split('&')
    code = data[0]
    random = data[1]
    project = data[2]
  }

  const codeString = code && code.split('=')[1]
  const randomString = random && random.split('=')[1]
  const projectString = project && project.split('=')[1]

  const resetPasswordProps = {
    ...props,
    code: codeString,
    random: randomString,
    project: projectString,
    redirectResetPassword: ({ code, random }) => {
      events.emit('go_to_page', {
        page: 'reset_password',
        search: `?code=${code}&random=${random}`
      })
    },
    onPasswordReset: () => (events.emit('go_to_page', { page: 'login' }))
  }
  return (
    <>
      <HelmetTags page='reset_password' />
      <ResetPasswordController {...resetPasswordProps} />
    </>
  )
}
