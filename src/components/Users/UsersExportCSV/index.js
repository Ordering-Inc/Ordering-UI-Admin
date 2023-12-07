import React, { useState, useEffect } from 'react'
import { useLanguage, UsersExportCSV as UsersExportCSVController } from 'ordering-components-admin'
import { Download as DownloadIcon } from 'react-bootstrap-icons'
import { SpinnerLoader, Alert } from '../../Shared'
import { Button } from '../../../styles'
import {
  ExportContainer
} from './styles'

const UsersExportCSVUI = (props) => {
  const {
    actionStatus,
    getCSV,
    disabled
  } = props
  const [, t] = useLanguage()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  // const handleExportAll = () => {
  //   setPopoverOpen(false)
  //   getCSV(false)
  // }

  // const handleExportFiltered = () => {
  //   setPopoverOpen(false)
  //   getCSV(true)
  // }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  const handleCSV = () => {
    getCSV(true)
  }

  useEffect(() => {
    if (!popoverOpen) return
    document.addEventListener('click', closePopover)
    return () => document.removeEventListener('click', closePopover)
  }, [popoverOpen])

  useEffect(() => {
    if (!actionStatus.result) return
    setAlertState({
      open: true,
      content: actionStatus.result
    })
  }, [actionStatus.result])

  return (
    <>
      <ExportContainer>
        <Button
          borderRadius='5px'
          color='secundary'
          disabled={actionStatus.loading || disabled}
          onClick={() => handleCSV()}
        >
          {t('CSV', 'CSV')}
          <DownloadIcon />
        </Button>
        {/* {popoverOpen && (
          <PopoverContainer>
            <Item onClick={() => handleExportAll()}>
              {t('EXPROT_ALL', 'Export all')}
            </Item>
            <Item onClick={() => handleExportFiltered()}>
              {t('EXPROT_FILTERED', 'Export filtered')}
            </Item>
          </PopoverContainer>
        )} */}

        {actionStatus.loading && (
          <SpinnerLoader primary />
        )}
      </ExportContainer>
      <Alert
        title={t('PROFILE', 'Profile')}
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

export const UsersExportCSV = (props) => {
  const ExportCSVControlProps = {
    ...props,
    UIComponent: UsersExportCSVUI
  }
  return <UsersExportCSVController {...ExportCSVControlProps} />
}
