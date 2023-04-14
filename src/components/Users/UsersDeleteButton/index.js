import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles'
import { Alert, ConfirmAdmin } from '../../Shared'

export const UsersDeleteButton = (props) => {
  const {
    selectedUsers,
    deleteUsersActionState,
    handleDeleteSeveralUsers,
    disabled
  } = props
  const [, t] = useLanguage()

  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleModalOpen = () => {
    setConfirmAdmin({
      open: true,
      handleOnConfirm: (code) => {
        setConfirmAdmin({ ...confirmAdmin, open: false })
        handleDeleteSeveralUsers(code)
      }
    })
  }

  useEffect(() => {
    if (!deleteUsersActionState.loading && deleteUsersActionState.error) {
      setAlertState({
        open: true,
        content: deleteUsersActionState.error || [t('ERROR')]
      })
    }
  }, [deleteUsersActionState])

  return (
    <>
      <Button
        borderRadius='5px'
        color='secundary'
        disabled={!selectedUsers.length || deleteUsersActionState.loading || disabled}
        onClick={() => handleModalOpen()}
      >
        {t('DELETE', 'Delete')}
      </Button>
      <ConfirmAdmin
        open={confirmAdmin.open}
        onClose={() => setConfirmAdmin({ ...confirmAdmin, open: false })}
        onConfirm={confirmAdmin.handleOnConfirm}
      />
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}
