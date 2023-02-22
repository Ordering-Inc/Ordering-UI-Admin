import React, { useState, useEffect, useRef } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { ThreeDots, Image as ImageIcon } from 'react-bootstrap-icons'
import { useLanguage, DragAndDrop, ExamineClick, useUtils, PlatformProductDetail as PlatformProductDetailController } from 'ordering-components-admin'
import { Confirm, Alert, ImageCrop, Modal } from '../../Shared'
import { Input, Button, Switch } from '../../../styles'
import { bytesConverter } from '../../../utils'

import {
  Container,
  DetailsHeader,
  LeftHeader,
  RightHeader,
  LevelName,
  ActionSelectorWrapper,
  Content,
  FormController,
  ButtonWrapper,
  LoyaltyImage,
  UploadImageIconContainer,
  UploadImageIcon
} from './styles'

const GiftCardDetailUI = (props) => {
  const {
    product,
    formState,
    handleChangeInput,
    handlechangeImage,
    handleChangeItem,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const { handleSubmit } = useForm()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const imageRef = useRef()

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickDeleteGiftCard = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('GIFT_CARD', 'Gift card')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteProduct()
      }
    })
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg })
    setCropState({ name: null, data: null, open: false })
  }

  const onSubmit = () => {
    if (formState?.changes?.name === '') {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Value is required'
        ).replace('_attribute_', 'name')
      })
      return
    }
    if (formState?.changes?.accumulation_rate === '') {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Value is required'
        ).replace('_attribute_', 'accumulation_rate')
      })
      return
    }
    if (formState?.changes?.minimum_points === '') {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Value is required'
        ).replace('_attribute_', 'points_required')
      })
      return
    }
    if (product?.id) handleUpdateProduct()
    else handleAddProduct('gift_card')
  }

  const handleClickImage = () => {
    imageRef.current.click()
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }

      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: 'image', data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)

      handlechangeImage(files[0])
    }
  }

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState?.error])

  return (
    <>
      <Container>
        <DetailsHeader>
          <LeftHeader>
            <LevelName>{product?.id ? (formState?.changes?.name ?? product?.name) : t('NEW_GIFT_CARD', 'New gift card')}</LevelName>
            {product?.id && (
              <Switch
                defaultChecked={product?.enabled}
                onChange={val => handleUpdateProduct({ enabled: val })}
              />
            )}
          </LeftHeader>
          {product?.id && (
            <RightHeader>
              <ActionSelectorWrapper>
                <DropdownButton
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item onClick={onClickDeleteGiftCard}>
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            </RightHeader>
          )}
        </DetailsHeader>
        <Content onSubmit={handleSubmit(onSubmit)}>
          <LoyaltyImage
            onClick={() => handleClickImage()}
          >
            <ExamineClick
              onFiles={files => handleFiles(files)}
              childRef={(e) => { imageRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {
                  (!formState.changes?.image || formState.error)
                    ? product?.image && (<img src={optimizeImage(product?.image, 'h_200,c_limit')} alt='tag image' loading='lazy' />)
                    : formState?.changes?.image && (<img src={formState?.changes?.image} alt='tag image' loading='lazy' />)
                }
                <UploadImageIconContainer>
                  <UploadImageIcon>
                    <ImageIcon />
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </LoyaltyImage>
          <FormController>
            <label>{t('NAME', 'Name')}</label>
            <Input
              name='name'
              placeholder={t('Name', 'name')}
              value={formState?.changes?.name ?? product?.name ?? ''}
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </FormController>
          <FormController>
            <label>{t('AMOUNT', 'Amount')}</label>
            <Input
              name='price'
              placeholder={t('AMOUNT', 'Amount')}
              value={formState?.changes?.price ?? product?.price ?? ''}
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </FormController>
          <ButtonWrapper>
            <Button
              color='primary'
              type='submit'
              disabled={Object.keys(formState?.changes).length === 0 || formState?.loading}
            >
              {product?.id ? ('SAVE', 'Save') : ('ADD', 'Add')}
            </Button>
          </ButtonWrapper>
        </Content>
      </Container>
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onRemove={() => setCropState({ ...cropState, open: false })}
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </>
  )
}

export const GiftCardDetail = (props) => {
  const giftCardDetailProps = {
    ...props,
    UIComponent: GiftCardDetailUI
  }
  return <PlatformProductDetailController {...giftCardDetailProps} />
}
