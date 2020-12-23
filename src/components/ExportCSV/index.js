import React, { useState, useEffect } from 'react'
import { useLanguage, ExportCSV as ExportCSVController } from 'ordering-components'
import { SpinnerLoader } from '../SpinnerLoader'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import ZoDownload from '@meronex/icons/zo/ZoDownload'
import {
  WrapperExportButton,
  PopoverContainer,
  Item
} from './styles'
const ExportCSVUI = (props) => {
  const {
    actionStatus,
    handleGetCsvExport,
    handleGetCsvFilteredExport
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [popoverOpen, setPopoverOpen] = useState(false)

  const handleExportAll = () => {
    setPopoverOpen(false)
    handleGetCsvExport()
  }

  const handleExportFiltered = () => {
    setPopoverOpen(false)
    handleGetCsvFilteredExport()
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  useEffect(() => {
    if (!popoverOpen) return
    document.addEventListener('click', closePopover)
    return () => document.removeEventListener('click', closePopover)
  }, [popoverOpen])

  return (
    <WrapperExportButton>
      <Button color='primary' borderRadius='6px' withIcon disabled={actionStatus.loading} onClick={() => setPopoverOpen(!popoverOpen)}>
        {width > 600 && t('CSV', 'CSV')}
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
    </WrapperExportButton>
  )
}

export const ExportCSV = (props) => {
  const ExportCSVControlProps = {
    ...props,
    UIComponent: ExportCSVUI,
    filterValues: props.filterValues
  }
  return <ExportCSVController {...ExportCSVControlProps} />
}
