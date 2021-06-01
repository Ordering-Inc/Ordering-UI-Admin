import React from 'react'
import { LogoutAction, useLanguage } from 'ordering-components-admin'

import FaSignOutAlt from '@meronex/icons/fa/FaSignOutAlt'
import { Button } from 'react-bootstrap'

import {
  LogoutButtonContainer
} from './styles'

const LogoutButtonUI = (props) => {
  const [, t] = useLanguage()

  return (
    <Button
      className='d-flex align-items-center m-1'
      variant=''
      onClick={props.handleLogoutClick}
    >
      <FaSignOutAlt />
      <span className='mx-2'>
        {t('LOGOUT', 'Logout')}
      </span>
    </Button>
  )
}

export const LogoutButton = (props) => {
  const logoutButtonProps = {
    ...props,
    UIComponent: LogoutButtonUI
  }
  return (
    <LogoutAction {...logoutButtonProps} />
  )
}
