import React, { useEffect, useState, useRef } from 'react'
import { useLanguage, useApi } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, Input } from '../../../styles'
import { X as Close } from 'react-bootstrap-icons'
import QRCode from 'react-qr-code'
import ReactToPrint from 'react-to-print'
import { Alert } from '../../Shared'
import {
  Container,
  ButtonGroup,
  Header,
  CloseButton,
  FormControl,
  QRCodeLayout,
  TableNumberHintText
} from './styles'

export const BusinessQRCodeOption = (props) => {
  const {
    open,
    item,
    business,
    onClose,
    siteState
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [code, setCode] = useState(null)

  const numberRef = useRef(null)
  const printerRef = useRef()

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const generateQRCode = () => {
    const errors = []
    if (item?.key !== 'pick_up' && !numberRef?.current?.value) {
      errors.push(
        item?.key === 'eat_in'
          ? t('VALIDATION_ERROR_REQUIRED', 'Table number is required').replace('_attribute_', t('TABLE_NUMBER', 'Table number'))
          : t('VALIDATION_ERROR_REQUIRED', 'Spot number is required').replace('_attribute_', t('SPOT_NUMBER', 'Spot number'))
      )
    }
    if (errors.length > 0) {
      setAlertState({
        open: true,
        content: errors
      })
      return
    }
    const storeUrl = siteState?.site?.domain && siteState?.site?.ssl_process_status === 'ended'
      ? `https://${siteState?.site?.domain}/store/${business?.slug}`
      : `https://${ordering.project}.tryordering.com/store/${business?.slug}`
    const tsNumber = item?.key !== 'pick_up'
      ? (item?.key === 'eat_in'
        ? `&table_number=${numberRef?.current?.value}`
        : `&spot_number=${numberRef?.current?.value}`)
      : ''
    const compltedUrl = `${storeUrl}?order_type=${item.value}${tsNumber}`
    setCode(compltedUrl)
  }

  const actionSidebar = (value) => {
    if (!value) {
      onClose && onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('qrOption').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('qrOption').style.width = '100%'
      } else {
        document.getElementById('qrOption').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    setCode(null)
    if (numberRef?.current) {
      numberRef.current.value = ''
    }
  }, [item])

  return (
    <Container id='qrOption'>
      <Header>
        {item?.title && (<h1>{item?.title}</h1>)}
        <CloseButton>
          <Close onClick={() => onClose && onClose()} />
        </CloseButton>
      </Header>

      {code && (
        <QRCodeLayout ref={printerRef}>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={code}
            viewBox='0 0 256 256'
          />
        </QRCodeLayout>
      )}

      {item?.key === 'pick_up' ? (
        <h4>{t('GENERATE_QR_CODE', 'Generate QR Code')}</h4>
      ) : (
        <>
          {item?.key === 'eat_in' && code && (
            <TableNumberHintText>
              {t('TO_GENERATE_NEW_QR_CODE_UPDATE_TABLE_NUMBER', 'To generate new QR codes, update the table number and regenerate the code.')}
            </TableNumberHintText>
          )}
          <FormControl>
            <label>{item?.key === 'eat_in' ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number')}</label>
            <Input
              placeholder='0'
              ref={numberRef}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </FormControl>
        </>
      )}

      <ButtonGroup>
        <Button color='primary' outline onClick={generateQRCode}>
          {t('GENERATE_CODE', 'Generate Code')}
        </Button>
        <ReactToPrint
          trigger={() => (
            <Button
              color='primary'
              disabled={!code}
            >
              {t('PRINT', 'Print')}
            </Button>
          )}
          content={() => printerRef.current}
          removeAfterPrint
        />
      </ButtonGroup>

      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
