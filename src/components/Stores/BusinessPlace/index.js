import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, BusinessPlace as BusinessPlaceController } from 'ordering-components-admin'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { XLg, ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, IconButton, Input } from '../../../styles'
import { useForm } from 'react-hook-form'
import { Alert } from '../../Shared'

import {
  Container,
  Header,
  ActionBlock,
  ActionSelectorWrapper,
  Content,
  ButtonWrapper,
  HideSubmitBtn
} from './styles'

export const BusinessPlaceUI = (props) => {
  const {
    open,
    onClose,
    place,
    formState,
    handleChangeInput,
    handleAddPlace,
    handleUpdatePlace,
    handleDeletePlace
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const formMethods = useForm()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const buttonRef = useRef(null)

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('business_place').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    if (place) handleUpdatePlace()
    else handleAddPlace()
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('business_place').style.width = '100%'
      } else {
        document.getElementById('business_place').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(error => error.message)
      })
    }
  }, [formMethods.errors])

  return (
    <>
      <Container id='business_place'>
        <Header>
          <h1>{place ? place?.name : t('NEW_PLACE', 'New place')}</h1>
          <ActionBlock>
            {place && (
              <ActionSelectorWrapper>
                <DropdownButton
                  className='product_actions'
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item
                    onClick={() => handleDeletePlace()}
                  >
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            )}
            <IconButton
              color='black'
              onClick={() => onClose()}
            >
              <XLg />
            </IconButton>
          </ActionBlock>
        </Header>
        <Content onSubmit={formMethods.handleSubmit(onSubmit)}>
          <label>{t('NAME', 'Name')}</label>
          <Input
            placeholder={t('NAME', 'Name')}
            name='name'
            autoComplete='off'
            onChange={handleChangeInput}
            value={formState?.changes?.name ?? place?.name ?? ''}
            ref={formMethods.register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('NAME', 'Name'))
            })}
          />
          <HideSubmitBtn type='submit' ref={buttonRef} />
        </Content>
        <ButtonWrapper>
          <Button
            color='primary'
            borderRadius='8px'
            disabled={Object.keys(formState?.changes).length === 0}
            onClick={() => buttonRef.current.click()}
          >
            {place ? t('SAVE', 'Save') : t('ADD', 'Add')}
          </Button>
        </ButtonWrapper>
      </Container>
      <Alert
        title={t('PLACES', 'Places')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const BusinessPlace = (props) => {
  const businessPlaceProps = {
    ...props,
    UIComponent: BusinessPlaceUI
  }
  return <BusinessPlaceController {...businessPlaceProps} />
}
