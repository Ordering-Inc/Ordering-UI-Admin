import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, DragAndDrop, ExamineClick, BusinessFormDetails as BusinessFormDetailsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, Modal, ImageCrop } from '../../Shared'
import { bytesConverter } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Button, Input, Switch } from '../../../styles'

import {
  FormInput,
  HeaderImage,
  SkeletonWrapper,
  UploadImageIcon,
  InputWrapper,
  ActionsForm,
  UploadImageIconContainer,
  LogoImage,
  PhoneWrapper,
  SwitchWrapper
} from './styles'

const BusinessInformationUI = (props) => {
  const {
    formState,
    businessState,
    handlechangeImage,
    handleChangeInput,
    handleButtonUpdateClick,
    handleChangeSwtich
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()
  const headerImageInputRef = useRef(null)
  const logoImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const handleClickImage = (type) => {
    if (type === 'header') {
      headerImageInputRef.current.click()
    }

    if (type === 'logo') {
      logoImageInputRef.current.click()
    }
  }

  const handleFiles = (files, name) => {
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
        setCropState({ name: name, data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)
      handlechangeImage(files[0], name)
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0) {
      handleButtonUpdateClick()
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeSwtich(cropState?.name, croppedImg)
    setCropState({ name: null, data: null, open: false })
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  return (
    <>
      <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
        <HeaderImage
          onClick={() => handleClickImage('header')}
        >
          <ExamineClick
            onFiles={files => handleFiles(files, 'header')}
            childRef={(e) => { headerImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={formState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files, 'header')}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              {formState.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!formState.changes?.header || formState.result?.result === 'Network Error' || formState.result.error)
                  ? businessState?.business?.header &&
                    (<img src={businessState?.business?.header} alt='header image' loading='lazy' />)
                  : formState?.changes?.header &&
                    <img src={formState?.changes?.header} alt='header image' loading='lazy' />
                )}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                  <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </HeaderImage>

        <LogoImage
          onClick={() => handleClickImage('logo')}
        >
          <ExamineClick
            onFiles={files => handleFiles(files, 'logo')}
            childRef={(e) => { logoImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={formState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files, 'logo')}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              {formState.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!formState.changes?.logo || formState.result?.result === 'Network Error' || formState.result.error)
                  ? businessState?.business?.logo &&
                    (<img src={businessState?.business?.logo} alt='logo image' loading='lazy' />)
                  : formState?.changes?.logo &&
                    <img src={formState?.changes?.logo} alt='logo image' loading='lazy' />
                )}
              <UploadImageIconContainer small>
                <UploadImageIcon small>
                  <BiImage />
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </LogoImage>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            name='name'
            placeholder={t('Name', 'name')}
            defaultValue={
              formState?.result?.result
                ? formState?.result?.result?.name
                : formState?.changes?.name ?? businessState?.business?.name
            }
            onChange={handleChangeInput}
            ref={formMethods.register({
              required: t('BUSINESS_NAME_REQUIRED', 'Business name is required')
            })}
            disabled={formState.loading}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('SHORT_DESCRIPTION', 'Short description')}</label>
          <Input
            name='description'
            placeholder={t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description')}
            defaultValue={
              formState?.result?.result
                ? formState?.result?.result?.description
                : formState?.changes?.description ?? businessState?.business?.description
            }
            onChange={handleChangeInput}
            disabled={formState.loading}
            autoComplete='off'
          />
        </InputWrapper>
        <PhoneWrapper>
          <InputWrapper>
            <label>{t('PHONE_NUMBER', 'Phone number')}</label>
            <Input
              name='phone'
              placeholder='(000) 0000 000'
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.phone
                  : formState?.changes?.phone ?? businessState?.business?.phone
              }
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('MOBILE_NUMBER', 'Mobile number')} <span>{t('OPTIONAL', 'Optional')}</span></label>
            <Input
              name='cellphone'
              placeholder='(000) 0000 000'
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.cellphone
                  : formState?.changes?.cellphone ?? businessState?.business?.cellphone
              }
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
        </PhoneWrapper>
        <SwitchWrapper>
          <span>{t('FEATURED', 'Featured')}</span>
          <Switch
            defaultChecked={businessState?.business?.featured || false}
            onChange={(val) => handleChangeSwtich('featured', val)}
          />
        </SwitchWrapper>
        <ActionsForm>
          <Button
            type='submit'
            color='primary'
            borderRadius='8px'
            disabled={formState.loading || Object.keys(formState?.changes).length === 0}
          >
            {t('SAVE', 'Save')}
          </Button>
        </ActionsForm>
      </FormInput>
      <Alert
        title={t('BUSINESS', 'Business')}
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
        onClose={() => setCropState({ ...cropState, open: false })}
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </>
  )
}

export const BusinessInformation = (props) => {
  const businessInformationProps = {
    ...props,
    UIComponent: BusinessInformationUI
  }
  return <BusinessFormDetailsController {...businessInformationProps} />
}
