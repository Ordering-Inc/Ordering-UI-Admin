import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, BusinessPlaceGroup as BusinessPlaceGroupController } from 'ordering-components-admin'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, IconButton, Input } from '../../../styles'
import { useForm } from 'react-hook-form'
import { Alert, Modal } from '../../Shared'
import Skeleton from 'react-loading-skeleton'
import { BusinessPlace } from '../BusinessPlace'
import { ChevronRight, CheckSquareFill, Square, XLg, ThreeDots } from 'react-bootstrap-icons'

import {
  Container,
  Header,
  ActionBlock,
  ActionSelectorWrapper,
  Content,
  ButtonWrapper,
  HideSubmitBtn,
  OptionList,
  AddBtn,
  PlaceItemContainer,
  CheckWrapper,
  TableHead
} from './styles'

export const BusinessPlaceGroupUI = (props) => {
  const {
    open,
    onClose,
    placeGroup,
    formState,
    handleChangeInput,
    handleAddPlaceGroup,
    handleUpdatePlaceGroup,
    handleDeletePlaceGroup,
    placeList,
    handleSuccessDeletePlace,
    handleSuccessAddPlace,
    handleSuccessUpdatePlace,
    handleChangePlaceEnabled,
    businessId,
    handleMultiPlaceChangeEnabled,
    getMultiPlaceCheckStatus
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const formMethods = useForm()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [openModal, setOpenModal] = useState(false)

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

  const handleOpenModal = (place) => {
    setSelectedPlace(place)
    setOpenModal(true)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    if (placeGroup) handleUpdatePlaceGroup()
    else handleAddPlaceGroup()
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedPlace(null)
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

  const handlePlaceClick = (e, place) => {
    if (e.target.closest('.check-box')) return
    handleOpenModal(place)
  }

  const handleCheckBoxChange = (place) => {
    handleChangePlaceEnabled(place?.id, { enabled: !place?.enabled })
  }

  const handleUpdateSelectedPlace = (placeGroup) => {
    setSelectedPlace(placeGroup)
  }

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
          <h1>{placeGroup ? placeGroup?.name : t('NEW_PLACE', 'New place')}</h1>
          <ActionBlock>
            {placeGroup && (
              <ActionSelectorWrapper>
                <DropdownButton
                  className='product_actions'
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item
                    onClick={() => handleDeletePlaceGroup()}
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
            value={formState?.changes?.name ?? placeGroup?.name ?? ''}
            ref={formMethods.register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('NAME', 'Name'))
            })}
          />
          <HideSubmitBtn type='submit' ref={buttonRef} />
        </Content>
        {placeList?.loading && (
          <OptionList>
            {
              [...Array(5).keys()].map(i => (
                <PlaceItemContainer key={i}>
                  <CheckWrapper>
                    <Skeleton width={16} height={16} />
                    <label>
                      <Skeleton width={100} />
                    </label>
                  </CheckWrapper>
                  <Skeleton width={16} height={16} />
                </PlaceItemContainer>
              ))
            }
          </OptionList>
        )}
        {!placeList?.loading && (
          <OptionList>
            {placeList?.places?.length > 0 && (
              <TableHead>
                <CheckWrapper>
                  <span className='check-box' onClick={() => handleMultiPlaceChangeEnabled()}>
                    {getMultiPlaceCheckStatus() ? <CheckSquareFill className='active' /> : <Square />}
                  </span>
                  <label>{t('OPTIONS', 'Options')}</label>
                </CheckWrapper>
              </TableHead>
            )}
            {placeList?.places?.map((place, i) => (
              <PlaceItemContainer
                key={i}
                active={selectedPlace?.id === place?.id}
                onClick={(e) => handlePlaceClick(e, place)}
              >
                <CheckWrapper>
                  <span className='check-box' onClick={() => handleCheckBoxChange(place)}>
                    {place?.enabled ? <CheckSquareFill className='active' /> : <Square />}
                  </span>
                  <label>{place?.name}</label>
                </CheckWrapper>
                <ChevronRight />
              </PlaceItemContainer>
            ))}
          </OptionList>
        )}
        {placeGroup && <AddBtn onClick={() => handleOpenModal(null)}>{t('ADD_OPTION', 'Add option')}</AddBtn>}
        <ButtonWrapper>
          <Button
            color='primary'
            borderRadius='8px'
            disabled={Object.keys(formState?.changes).length === 0}
            onClick={() => buttonRef.current.click()}
          >
            {placeGroup ? t('SAVE', 'Save') : t('ADD', 'Add')}
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
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        open={openModal}
        onClose={() => handleCloseModal()}
        hideCloseDefault
      >
        <BusinessPlace
          businessId={businessId}
          place={selectedPlace}
          placeGroup={placeGroup}
          handleUpdateSelectedPlace={handleUpdateSelectedPlace}
          handleSuccessUpdatePlace={handleSuccessUpdatePlace}
          handleSuccessAddPlace={handleSuccessAddPlace}
          handleSuccessDeletePlace={handleSuccessDeletePlace}
          onClose={() => handleCloseModal()}
        />
      </Modal>
    </>
  )
}

export const BusinessPlaceGroup = (props) => {
  const businessPlaceProps = {
    ...props,
    UIComponent: BusinessPlaceGroupUI
  }
  return <BusinessPlaceGroupController {...businessPlaceProps} />
}
