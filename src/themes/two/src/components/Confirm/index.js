import React from 'react'
import { Popup, useLanguage } from 'ordering-components-admin'
import { Button, IconButton } from '../../styles/Buttons'
import { useTheme } from 'styled-components'
import { XLg } from 'react-bootstrap-icons'
import {
  PopupDialog,
  PopupActions,
  PopupTitle,
  PopupContent,
  PopupIcon
} from './styles'

const ConfirmUI = (props) => {
  const {
    title,
    children,
    content,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText
  } = props
  const [, t] = useLanguage()
  return (
    <PopupDialog className='popup-dialog'>
      <PopupIcon>
        <IconButton color='black' onClick={() => onClose()}>
          <XLg />
        </IconButton>
      </PopupIcon>
      {title && <PopupTitle>{title}</PopupTitle>}
      <PopupContent>
        {content && typeof content === 'string' && content}
        {content && typeof content === 'object' && Array.isArray(content) && (
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        {children}
      </PopupContent>
      {(onCancel || onAccept || onClose) && (
        <PopupActions>
          {onCancel && <Button outline onClick={() => onCancel()}>{cancelText || t('CANCEL')}</Button>}
          {onAccept && <Button color='primary' onClick={() => onAccept()}>{acceptText || t('ACCEPT')}</Button>}
        </PopupActions>)}
    </PopupDialog>
  )
}

export const Confirm = (props) => {
  const popupProps = {
    ...props,
    UIComponent: ConfirmUI
  }

  const theme = useTheme()

  return (
    <>
      {
        theme && <Popup {...popupProps} />
      }
    </>
  )
}

export const Alert = Confirm
