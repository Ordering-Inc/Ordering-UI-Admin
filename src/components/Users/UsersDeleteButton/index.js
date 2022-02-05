import React, { useState, useEffect } from 'react'
import { useLanguage, CheckPassword as CheckPasswordController } from 'ordering-components-admin'
import { Button } from '../../../styles'
import { Modal } from '../../Shared'

import {
  WrapperCheckPassword,
  ErrorText,
  WrapperIndicator
} from './styles'

const UsersDeleteButtonUI = (props) => {
  const {
    checkPasswordStatus,
    handleChangePassword,
    getCheckPassword,
    selectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers
  } = props
  const [, t] = useLanguage()

  const [checkPasswordModalOpen, setCheckPasswordModalOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [totalUsersNumber, setTotalUsersNumber] = useState(null)
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleModalOpen = () => {
    setPassword('')
    setCheckPasswordModalOpen(true)
  }

  useEffect(() => {
    handleChangePassword(password)
  }, [password])

  useEffect(() => {
    if (checkPasswordStatus.loading || checkPasswordStatus.error !== null) return
    if (checkPasswordStatus.result === 'OK') {
      setCheckPasswordModalOpen(false)
      setPassword('')
      handleDeleteSeveralUsers()
    }
  }, [checkPasswordStatus])

  useEffect(() => {
    if (deleteUsersActionState.loading) {
      setTotalUsersNumber(selectedUsers.length)
    } else {
      setTimeout(() => {
        setTotalUsersNumber(0)
      }, 500)
    }
  }, [deleteUsersActionState])

  return (
    <>
      <Button
        borderRadius='5px'
        color='secundary'
        disabled={!selectedUsers.length || deleteUsersActionState.loading}
        onClick={() => handleModalOpen()}
      >
        {t('DELETE', 'Delete')}
      </Button>
      {totalUsersNumber > 0 && (
        <WrapperIndicator>
          {selectedUsers.length} / {totalUsersNumber}
        </WrapperIndicator>
      )}
      <Modal
        open={checkPasswordModalOpen}
        width='600px'
        onClose={() => setCheckPasswordModalOpen(false)}
      >
        <WrapperCheckPassword>
          <h3>{t('CONFIRM_PASSWORD', 'Confirm password')}</h3>
          <p>{t('TYPE_YOUR_PASSWORD_TO_CONFIRM_DELETE', 'Type your password to confirm delete.')}</p>
          <input
            autoComplete='new-password'
            type='password'
            value={password}
            placeholder={t('PASSWORD', 'password')}
            onChange={(e) => handlePassword(e)}
          />
          {checkPasswordStatus?.error && (
            <ErrorText
              className='text-danger'
            >
              {checkPasswordStatus.error}
            </ErrorText>
          )}
          <Button
            color='primary'
            borderRadius='5px'
            onClick={() => getCheckPassword()}
          >
            {t('CONFIRM', 'Confirm')}
          </Button>
        </WrapperCheckPassword>
      </Modal>
    </>
  )
}

export const UsersDeleteButton = (props) => {
  const checkPasswordControlProps = {
    ...props,
    UIComponent: UsersDeleteButtonUI
  }
  return (
    <CheckPasswordController {...checkPasswordControlProps} />
  )
}
