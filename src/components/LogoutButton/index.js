import React from 'react'
import { LogoutAction, useLanguage } from 'ordering-components-admin'

import { BoxArrowRight } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

const LogoutButtonUI = (props) => {
  const [, t] = useLanguage()

  return (
    <Button
      className='d-flex align-items-center m-1'
      variant=''
      onClick={props.handleLogoutClick}
    >
      <BoxArrowRight size={20} />
      <span>
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
