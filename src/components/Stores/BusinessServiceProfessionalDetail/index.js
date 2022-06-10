import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { XLg, ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { IconButton } from '../../../styles'
import { useForm } from 'react-hook-form'
import { UserProfileForm } from '../../Users/UserProfileForm'
import { Alert, Confirm } from '../../Shared'
import { ProfessionalAddForm } from '../../Users/ProfessionalAddForm'

import {
  Container,
  Header,
  ActionBlock,
  ActionSelectorWrapper
} from './styles'

export const BusinessServiceProfessionalDetail = (props) => {
  const {
    open,
    onClose,
    professional,
    handleSuccessUpdate,
    handleSuccessAddUser,
    handleDeleteUser
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const formMethods = useForm()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('business_service').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  const onDeleteCustomer = async () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_USER', 'Are you sure that you want to delete this user?'),
      handleOnAccept: async () => {
        setConfirm({ ...confirm, open: false })
        await handleDeleteUser(professional?.id)
        onClose && onClose()
      }
    })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('business_service').style.width = '100%'
      } else {
        document.getElementById('business_service').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  return (
    <>
      <Container id='business_service' noPadding={!professional}>
        {professional && (
          <Header>
            <h1>{professional ? professional?.name : t('NEW_PROFESSIONAL', 'New professional')}</h1>
            <ActionBlock>
              <ActionSelectorWrapper>
                <DropdownButton
                  className='product_actions'
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item
                    onClick={() => onDeleteCustomer()}
                  >
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
              <IconButton
                color='black'
                onClick={() => onClose()}
              >
                <XLg />
              </IconButton>
            </ActionBlock>
          </Header>
        )}
        {professional ? (
          <UserProfileForm
            user={professional}
            handleSuccessUpdate={handleSuccessUpdate}
            isProfessional
            isService
          />
        ) : (
          <ProfessionalAddForm
            handleSuccessAdd={handleSuccessAddUser}
            onClose={() => onClose()}
            isService
          />
        )}
      </Container>
      <Alert
        title={t('PROFESSIONAL', 'Professional')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}
