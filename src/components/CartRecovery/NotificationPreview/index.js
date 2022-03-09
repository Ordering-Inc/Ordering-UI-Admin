import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea, Button } from '../../../styles'
import {
  Container,
  InputWrapper,
  ButtonGroup
} from './styles'

export const NotificationPreview = (props) => {
  const {
    notification,
    formState,
    handleChangeInput,
    handleUpdateClick,
    handleDeleteClick,
    onClose
  } = props

  const [, t] = useLanguage()

  const handleClickDeleteBtn = (id) => {
    handleDeleteClick && handleDeleteClick(id)
    onClose && onClose()
  }

  const handleClickUpdateBtn = (id) => {
    handleUpdateClick && handleUpdateClick(id, formState?.changes)
  }

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={formState?.changes?.title ?? notification?.title}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGE', 'Message')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={formState?.changes?.body ?? notification?.body}
            onChange={handleChangeInput}
          />
        </InputWrapper>
      </Container>
      <ButtonGroup>
        <Button
          color='primary'
          borderRadius='8px'
          disabled={Object.keys(formState?.changes).length === 0 || formState?.loading}
          onClick={() => handleClickUpdateBtn(notification?.id)}
        >
          {t('ACCEPT', 'Accept')}
        </Button>
        <Button
          color='secundary'
          borderRadius='8px'
          onClick={() => handleClickDeleteBtn(notification?.id)}
        >
          {t('DELETE', 'Delete')}
        </Button>
      </ButtonGroup>
    </>
  )
}
