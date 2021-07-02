import React from 'react'
import { LogoutAction, useLanguage } from 'ordering-components-admin'

import FaSignOutAlt from '@meronex/icons/fa/FaSignOutAlt'
import { Button } from 'react-bootstrap'

const LogoutButtonUI = (props) => {
  const [, t] = useLanguage()

  const {
    isCollapse
  } = props

  return (
    <Button
      className='d-flex align-items-center'
      variant=''
      onClick={props.handleLogoutClick}
    >
      <FaSignOutAlt />
      {!isCollapse && (
        <span className='mx-2'>
          {t('LOGOUT', 'Logout')}
        </span>
      )}
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
