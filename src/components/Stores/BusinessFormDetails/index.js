import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, DragAndDrop, ExamineClick, BusinessFormDetails as BusinessFormDetailsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../../Shared'
import { bytesConverter } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Button, Input, TextArea } from '../../../styles'

import {
  FormInput,
  HeaderImage,
  SkeletonWrapper,
  UploadImageIcon,
  InputWrapper,
  ActionsForm,
  UploadImageIconContainer,
  LogoImage
} from './styles'

const BusinessFormDetailsUI = (props) => {
  const {
    formState,
    businessState,
    handlechangeImage,
    handleChangeInput,
    handleButtonUpdateClick,
    onCancel
  } = props
  const formMethods = useForm()
  const [, t] = useLanguage()
  const headerImageInputRef = useRef(null)
  const logoImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

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
          <label>{t('EXPORT_BUSINESS_NAME', 'Business name')}</label>
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
          <label>{t('BUSINESS_DESCRIPTION', 'Business description')}</label>
          <TextArea
            rows={4}
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
        <ActionsForm>
          {onCancel && (
            <Button
              outline
              borderRadius='5px'
              type='button'
              onClick={() => onCancel(false)}
              disabled={formState.loading}
            >
              {t('CANCEL', 'Cancel')}
            </Button>
          )}
          {((formState && Object.keys(formState?.changes).length > 0) || formState?.loading) && (
            <Button
              type='submit'
              color='primary'
              borderRadius='5px'
              disabled={formState.loading}
            >
              {t('SAVE', 'Save')}
            </Button>
          )}
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
    </>
  )
}

export const BusinessFormDetails = (props) => {
  const businessFormDetailsProps = {
    ...props,
    UIComponent: BusinessFormDetailsUI
  }
  return <BusinessFormDetailsController {...businessFormDetailsProps} />
}
