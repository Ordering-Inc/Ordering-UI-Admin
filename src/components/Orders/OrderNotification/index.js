import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useConfig,
  useEvent,
  OrderNotification as OrderNotificationController
} from 'ordering-components-admin'
import { Alert, Modal } from '../../Shared'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useTheme } from 'styled-components'
import { CheckSquareFill, Square } from 'react-bootstrap-icons'

import {
  ModalContainer,
  ToastWrapper,
  AlarmContent,
  CheckBoxWrapper
} from './styles'
import { Button } from '../../../styles'

toast.configure()

const OrderNotificationUI = (props) => {
  const {
    isOnlyDelivery,
    customerId
  } = props

  const [configState] = useConfig()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const theme = useTheme()
  const [showModal, setShowModal] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleNotification = (order) => {
    if (order?.products?.[0]?.type === 'gift_card') return
    if (customerId && order?.customer_id !== customerId) return
    if (isOnlyDelivery && order?.delivery_type !== 1) return
    const _registerOrderIds = [...registerOrderIds]
    if (!_registerOrderIds.includes(order.id)) {
      _registerOrderIds.push(order.id)
      setRegisterOrderIds(_registerOrderIds)
      if (configState?.configs?.notification_toast?.value === 'true') {
        toastNotify(order.id)
      } else {
        setNotificationModalOpen(true)
      }
    }
  }

  const handleCloseNotificationModal = () => {
    setNotificationModalOpen(false)
    setRegisterOrderIds([])
  }

  const toastNotify = (orderId) => {
    const toastConfigure = {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    }
    const content = () => {
      return (
        <ToastWrapper>
          <img src={theme.images.logos.isotype} alt='' />
          <div>
            <span>{t('WEB_DASHBOARD_APPNAME', 'Ordering Dashboard')}</span>
            <span>{t('ORDER_N_ORDERED', 'Order #_order_id_ has been ordered.').replace('_order_id_', `${orderId}`)}</span>
          </div>
        </ToastWrapper>
      )
    }
    toast(content, toastConfigure)
    if (!configState?.configs?.disable_sound_notification) {
      const sound = document.getElementById('notification-sound')
      sound.muted = false
      sound.play()
    }
    setRegisterOrderIds([])
  }

  useEffect(() => {
    if (registerOrderIds.length > 0) return
    setNotificationModalOpen(false)
  }, [registerOrderIds])

  useEffect(() => {
    if (!notificationModalOpen || configState?.configs?.disable_sound_notification) return
    const sound = document.getElementById('notification-sound')
    const interval = setInterval(() => {
      if (notificationModalOpen) {
        sound.muted = false
        sound.play()
      }
    }, 3000)
    if (!notificationModalOpen) {
      clearInterval(interval)
      return
    }
    return () => clearInterval(interval)
  }, [notificationModalOpen, configState?.configs?.disable_sound_notification])

  useEffect(() => {
    if (configState.loading) return
    events.on('order_added', handleNotification)
    return () => {
      events.off('order_added', handleNotification)
    }
  }, [configState, registerOrderIds, customerId])

  useEffect(() => {
    const isSaved = localStorage.getItem('new_order_notification')
    if (!isSaved) setShowModal(true)
  }, [])

  const handleClose = () => {
    setShowModal(false)
    if (isChecked) {
      localStorage.setItem('new_order_notification', '1')
    }
  }

  return (
    <>
      <Modal
        width='750px'
        open={notificationModalOpen}
        onClose={handleCloseNotificationModal}
      >
        <ModalContainer>
          <h1>{t('NEW_ORDRES_RECEIVED', 'New orders have been received!')}</h1>
          <img src={theme.images.general.registerOrder} alt='' />
          {registerOrderIds.map((orderId) =>
            <p key={orderId}>
              {t('ORDER_N_ORDERED', 'Order #_order_id_ has been ordered.').replace('_order_id_', `${orderId}`)}
            </p>
          )}
        </ModalContainer>
      </Modal>
      <audio id='notification-sound' muted>
        <source src={theme.sounds.notificationOgg} type='audio/ogg' />
        <source src={theme.sounds.notificationMp3} type='audio/mpeg' />
      </audio>
      <Alert
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Modal
        open={showModal}
        width='700px'
        onClose={handleClose}
        title={t('ORDERING', 'Ordering')}
      >
        <AlarmContent>
          <span>{t('SOUND_WILL_BE_PLAYED', 'The sound will be played on this page whenever a new order is received.')}</span>
          <CheckBoxWrapper onClick={() => setIsChecked(prev => !prev)} isChecked={isChecked}>
            {isChecked ? <CheckSquareFill /> : <Square />}
            <span>{t('DONT_SHOW_AGAIN', 'Don\'t show again')}</span>
          </CheckBoxWrapper>
          <Button color='primary' onClick={handleClose}>{t('ACCEPT', 'Accept')}</Button>
        </AlarmContent>
      </Modal>
    </>
  )
}

export const OrderNotification = (props) => {
  const orderNotificationProps = {
    ...props,
    UIComponent: OrderNotificationUI
  }
  return (
    <OrderNotificationController {...orderNotificationProps} />
  )
}
