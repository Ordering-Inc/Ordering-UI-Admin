import React, { useEffect } from 'react'
import { XLg } from 'react-bootstrap-icons'
import { Popup, useLanguage } from 'ordering-components-admin'
import { Button, IconButton } from '../../../styles'
import {
  ModalDialog,
  ModalActions,
  ModalTitle,
  ModalIcon,
  ModalHeader
} from './styles'

const ModalUI = (props) => {
  const {
    title,
    children,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText,
    isTransparent,
    hideCloseDefault
  } = props
  const [, t] = useLanguage()

  const onCloseModal = (e) => {
    if (e.code === 'Escape') {
      onClose && onClose()
    }
  }

  useEffect(() => {
    if (!props.open) return
    document.addEventListener('keydown', onCloseModal)
    return () => document.removeEventListener('keydown', onCloseModal)
  }, [props.open])
  return (
    <ModalDialog
      className='popup-dialog'
      height={props.height}
      width={props.width}
      padding={props.padding}
      isTransparent={isTransparent}
    >
      {!hideCloseDefault && (
        <ModalIcon className='modal-close-icon'>
          <IconButton
            color='black'
            onClick={() => onClose()}
          >
            <XLg />
          </IconButton>
        </ModalIcon>
      )}
      <ModalHeader>
        {title && (
          <ModalTitle>
            {title}
          </ModalTitle>
        )}
      </ModalHeader>
      {children}
      {(onCancel || onAccept) && (
        <ModalActions>
          {onAccept && <Button color='darkBlue' onClick={() => onAccept()}>{acceptText || t('ACCEPT')}</Button>}
          {onCancel && <Button color='primary' onClick={() => onCancel()}>{cancelText || t('CANCEL')}</Button>}
        </ModalActions>)}
    </ModalDialog>
  )
}

export const Modal = (props) => {
  const ModalProps = {
    ...props,
    UIComponent: ModalUI
  }

  return (
    <Popup {...ModalProps} />
  )
}
