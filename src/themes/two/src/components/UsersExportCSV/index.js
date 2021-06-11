import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { UsersExportCSV as UsersExportCSVController } from './naked'
import { SpinnerLoader } from '../SpinnerLoader'
import { Button } from '../../styles/Buttons'
import ZoDownload from '@meronex/icons/zo/ZoDownload'
import {
  ExportContainer,
  PopoverContainer,
  Item
} from './styles'

const UsersExportCSVUI = (props) => {
  const {
    actionStatus,
    getCSV
  } = props
  const [, t] = useLanguage()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleExportAll = () => {
    setPopoverOpen(false)
    getCSV(false)
  }

  const handleExportFiltered = () => {
    setPopoverOpen(false)
    getCSV(true)
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  useEffect(() => {
    if (!popoverOpen) return
    document.addEventListener('click', closePopover)
    return () => document.removeEventListener('click', closePopover)
  }, [popoverOpen])

  useEffect(() => {
    if (!actionStatus?.result || actionStatus?.error) return
    setModalOpen(true)
  }, [actionStatus])

  return (
    <>
      <ExportContainer>
        <Button
          borderRadius='5px'
          color='secundary'
          disabled={actionStatus.loading}
          onClick={() => setPopoverOpen(!popoverOpen)}
        >
          {t('CSV', 'CSV')}
          <ZoDownload />
        </Button>
        {popoverOpen && (
          <PopoverContainer>
            <Item onClick={() => handleExportAll()}>
              {t('EXPROT_ALL', 'Export all')}
            </Item>
            <Item onClick={() => handleExportFiltered()}>
              {t('EXPROT_FILTERED', 'Export filtered')}
            </Item>
          </PopoverContainer>
        )}

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
