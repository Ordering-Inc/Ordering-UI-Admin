import React, { useState, useRef, useEffect } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  useUtils,
  BusinessTypeDetail as BusinessTypeDetailController
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Image as ImageIcon, ThreeDots } from 'react-bootstrap-icons'
import { Alert, Confirm, Modal, ImageCrop } from '../../Shared'
import { bytesConverter } from '../../../utils'
import { Button, Input } from '../../../styles'

import {
  DetailsContainer,
  Header,
  FormInput,
  ProductTagImage,
  UploadImageIconContainer,
  UploadImageIcon,
  FormController,
  ActionSelectorWrapper
} from './styles'

const BusinessTypeDetailUI = (props) => {
  const {
    businessTypeState,
    typeFormState,
    handlechangeImage,
    handleChangeInput,
    handleUpdateProductType,
    handleDeleteProductType,
    handleAddProductType,
    handleChangeItem
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const formMethods = useForm()
  const tagImageRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const onSubmit = () => {
    if (businessTypeState?.businessType) {
      handleUpdateProductType()
    } else {
      handleAddProductType()
    }
  }

  const handleClickImage = () => {
    tagImageRef.current.click()
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
  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CATEGORY', 'Are you sure that you want to delete this category?'),
      handleOnAccept: () => {
        handleDeleteProductType()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem(cropState?.name, croppedImg)
    setCropState({ name: null, data: null, open: false })
  }

  useEffect(() => {
    if (!typeFormState?.error) return
    setAlertState({
      open: true,
      content: typeFormState?.error
    })
  }, [typeFormState?.error])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map((error) => error.message)
      })
    }
  }, [formMethods.errors])

  return (
    <>
      <DetailsContainer>
        <Header>
          <h1>
            {
              businessTypeState?.businessType
                ? typeFormState.changes?.name ?? businessTypeState?.businessType?.name ?? ''
                : t(t('ADD_NEW_BUSINESS_CATEGORY', 'Add new business category'))
            }
          </h1>
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => handleDeleteClick()}
              >
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        </Header>

        <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
          <ProductTagImage
            onClick={() => handleClickImage()}
          >
            <ExamineClick
              onFiles={files => handleFiles(files)}
              childRef={(e) => { tagImageRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={typeFormState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                accept='image/png, image/jpeg, image/jpg'
                disabled={typeFormState.loading}
              >
                {
                  (!typeFormState.changes?.image || typeFormState.error)
                    ? businessTypeState?.businessType?.image && (<img src={optimizeImage(businessTypeState?.businessType?.image, 'h_200,c_limit')} alt='tag image' loading='lazy' />)
                    : typeFormState?.changes?.image && (<img src={typeFormState?.changes?.image} alt='tag image' loading='lazy' />)
                }
                <UploadImageIconContainer>
                  <UploadImageIcon>
                    <ImageIcon />
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </ProductTagImage>

          <FormController>
            <label>{t('NAME', 'Name')}</label>
            <Input
              name='name'
              placeholder={t('NAME', 'Name')}
              value={typeFormState.changes?.name ?? businessTypeState?.businessType?.name ?? ''}
              onChange={e => handleChangeInput(e)}
              ref={formMethods.register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Name is required'
                ).replace('_attribute_', t('NAME', 'Name'))
              })}
              autoComplete='off'
            />
          </FormController>

          <Button
            borderRadius='8px'
            color='primary'
            type='submit'
            disabled={typeFormState.loading || Object.keys(typeFormState.changes).length === 0}
          >
            {t('SAVE', 'Save')}
          </Button>
        </FormInput>
      </DetailsContainer>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
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

export const BusinessTypeDetail = (props) => {
  const businessTypeDetailProps = {
    ...props,
    UIComponent: BusinessTypeDetailUI
  }
  return <BusinessTypeDetailController {...businessTypeDetailProps} />
}
