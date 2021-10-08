import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useConfig,
  useEvent,
  OrderNotification as OrderNotificationController
} from 'ordering-components-admin'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import {
  ModalContainer
} from './styles'

toast.configure()

const OrderNotificationUI = (props) => {
  const [configState] = useConfig()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])

  const handleNotification = (orderId) => {
    const _registerOrderIds = [...registerOrderIds]
    if (!_registerOrderIds.includes(orderId)) {
      _registerOrderIds.push(orderId)
      setRegisterOrderIds(_registerOrderIds)
      if (configState?.configs?.notification_toast?.value === 'true') {
        toastNotify(orderId)
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
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    }
    const content = `Order #${orderId} has been ordered.`
    toast.dark(content, toastConfigure)
    const sound = document.getElementById('notification-sound')
    sound.muted = false
    sound.play()
    setRegisterOrderIds([])
  }

  useEffect(() => {
    if (registerOrderIds.length > 0) return
    setNotificationModalOpen(false)
  }, [registerOrderIds])

  useEffect(() => {
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
  }, [notificationModalOpen])

  useEffect(() => {
    if (configState.loading) return
    events.on('order_added', handleNotification)
    return () => {
      events.off('order_added', handleNotification)
    }
  }, [configState, registerOrderIds])

  return (
    <>
      <Modal
        width='50%'
        hideCloseDefault
        open={notificationModalOpen}
        onClose={handleCloseNotificationModal}
      >
        <ModalContainer>
          <p>{t('WEB_APPNAME', 'Ordering')}</p>
          {registerOrderIds.map((orderId) =>
            <p key={orderId}>Order <span>#{orderId}</span> has been ordered.</p>
          )}
          <Button color='primary' onClick={() => handleCloseNotificationModal()}>
            {t('OK', 'OK')}
          </Button>
        </ModalContainer>
      </Modal>
      <audio id='notification-sound' muted>
        <source src={require('../../../template/assets/sounds/notification.ogg')} type='audio/ogg' />
        <source src={require('../../../template/assets/sounds/notification.mp3')} type='audio/mpeg' />
      </audio>
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
