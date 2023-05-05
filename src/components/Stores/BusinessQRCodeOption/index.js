import React, { useEffect, useState, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, Input } from '../../../styles'
import { X as Close } from 'react-bootstrap-icons'
import QRCode from 'react-qr-code'
import ReactToPrint from 'react-to-print'
import { Alert } from '../../Shared'
import { checkSiteUrl, checkValidUrlFormat } from '../../../utils'
import {
  Container,
  ButtonGroup,
  Header,
  CloseButton,
  FormControl,
  QRCodeLayout
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
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [code, setCode] = useState(null)

  const numberRef = useRef(null)
  const printerRef = useRef()
  const siteRef = useRef()

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const generateQRCode = () => {
    const errors = []
    if (!(siteState?.site?.domain && siteState?.site?.ssl_process_status === 'ended') && !siteRef?.current?.value) {
      errors.push(t('VALIDATION_ERROR_REQUIRED', 'URL is required').replace('_attribute_', t('URL', 'Url')))
    }
    if (siteRef?.current?.value && !checkValidUrlFormat(siteRef?.current?.value)) {
      errors.push(t('VALIDATION_ERROR_URL', 'The URL format is not valid').replace('_attribute_', 'URL'))
    }
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
      : `${checkSiteUrl(siteRef?.current?.value)}store/${business?.slug}`
    const tsNumber = item?.key !== 'pick_up'
      ? (item?.key === 'eat_in'
        ? `&table_numer=${numberRef?.current?.value}`
        : `&spot_numer=${numberRef?.current?.value}`)
      : ''
    const compltedUrl = `${storeUrl}?order_type=${item.value}${tsNumber}`
    console.log(compltedUrl)
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
        <p>{t('GENERATE_QR_CODE', 'Generate QR Code')}</p>
      ) : (
        <FormControl>
          <label>{item?.key === 'eat_in' ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number')}</label>
          <Input
            placeholder='0'
            ref={numberRef}
          />
        </FormControl>
      )}
      {!(siteState?.site?.domain && siteState?.site?.ssl_process_status === 'ended') && (
        <FormControl isMargin>
          <label>{t('ADD_YOUR_SITE_URL', 'Add your site url')}</label>
          <Input
            placeholder='https://yourdomain.com'
            ref={siteRef}
          />
        </FormControl>
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
