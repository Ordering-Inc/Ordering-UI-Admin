import React, { useState, useEffect } from 'react'
import { useLanguage, ExportCSV as ExportCSVController } from 'ordering-components-admin'
import { Alert, Modal, SpinnerLoader } from '../../Shared'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button } from '../../../styles'
import { Download } from 'react-bootstrap-icons'
import {
  ExportContainer,
  PopoverContainer,
  Item,
  ExportCSVResult,
  ErrorMessage
} from './styles'
const ExportCSVUI = (props) => {
  const {
    actionStatus,
    getCSV
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!popoverOpen) return
    document.addEventListener('click', closePopover)
    return () => document.removeEventListener('click', closePopover)
  }, [popoverOpen])

  useEffect(() => {
    if (actionStatus?.error) {
      setAlertState({
        open: true,
        content: actionStatus?.error
      })
    }
    if (!actionStatus?.result || actionStatus?.error) return
    setModalOpen(true)
  }, [actionStatus])

  return (
    <>
      <ExportContainer>
        <Button
          borderRadius='7.6px'
          color='secundary'
          disabled={actionStatus.loading}
          onClick={() => setPopoverOpen(!popoverOpen)}
        >
          {width > 600 && t('CSV', 'CSV')}
          <Download />
        </Button>
        {popoverOpen && (
          <PopoverContainer disabled={actionStatus.loading}>
            <Item onClick={() => handleExportAll()}>
              {t('EXPORT_ALL', 'Export all')}
            </Item>
            <Item onClick={() => handleExportFiltered()}>
              {t('EXPORT_FILTERED', 'Export filtered')}
            </Item>
          </PopoverContainer>
        )}

        {actionStatus.loading && (
          <SpinnerLoader primary />
        )}
      </ExportContainer>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ExportCSVResult>
          <h1 className='align-center'>{t('WEB_APPNAME', 'Ordering')}</h1>
          {actionStatus?.result?.length > 0 && (
            actionStatus?.result.map((e, i) => (
              <ErrorMessage key={i}>{e?.message || e}</ErrorMessage>
            )))}
          <Button
            rectangle
            color='primary'
            onClick={() => setModalOpen(false)}
          >
            {t('OK', 'OK')}
          </Button>
        </ExportCSVResult>
      </Modal>
      <Alert
        title={t('CSV_ORDERS', 'Csv orders')}
        content={alertState?.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState?.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const OrdersExportCSV = (props) => {
  const ExportCSVControlProps = {
    ...props,
    UIComponent: ExportCSVUI,
    filterValues: props.filterValues
  }
  return <ExportCSVController {...ExportCSVControlProps} />
}
