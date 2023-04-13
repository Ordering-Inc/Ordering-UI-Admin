import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import FaTrash from '@meronex/icons/fa/FaTrash'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button } from '../../../styles/Buttons'
import { ConfirmAdmin } from '../../Shared'

export const BusinessDelete = (props) => {
  const {
    handleDeleteMultiBusinesses
  } = props
  const { width } = useWindowSize()
  const [, t] = useLanguage()

  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })

  const handleModalOpen = () => {
    setConfirmAdmin({
      open: true,
      handleOnConfirm: () => {
        setConfirmAdmin({ ...confirmAdmin, open: false })
        handleDeleteMultiBusinesses()
      }
    })
  }

  return (
    <>
      <Button
        borderRadius='8px'
        color='secundary'
        onClick={() => handleModalOpen()}
      >
        {width > 600 && t('DELETE', 'Delete')}
        <FaTrash />
      </Button>

      <ConfirmAdmin
        open={confirmAdmin.open}
        onClose={() => setConfirmAdmin({ ...confirmAdmin, open: false })}
        onConfirm={confirmAdmin.handleOnConfirm}
      />
    </>
  )
}
