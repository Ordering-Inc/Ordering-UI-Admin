import React, { useState, useEffect } from 'react'
import { useLanguage, UsersExportCSV as UsersExportCSVController } from 'ordering-components-admin'
import { SpinnerLoader } from '../../Shared'
import { Button } from '../../../styles'
import { Download as DownloadIcon } from 'react-bootstrap-icons'
import {
  ExportContainer
} from './styles'

const UsersExportCSVUI = (props) => {
  const {
    actionStatus,
    getCSV
  } = props
  const [, t] = useLanguage()
  const [popoverOpen, setPopoverOpen] = useState(false)

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
    getCSV(false)
  }

  useEffect(() => {
    if (!popoverOpen) return
    document.addEventListener('click', closePopover)
    return () => document.removeEventListener('click', closePopover)
  }, [popoverOpen])

  return (
    <>
      <ExportContainer>
        <Button
          borderRadius='5px'
          color='secundary'
          disabled={actionStatus.loading}
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
