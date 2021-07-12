import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, DragAndDrop, ExamineClick, useUtils } from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Input, TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'

import {
  FormInput,
  ProductImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  InputWrapper,
  ActionsForm
} from './styles'

export const ProductDetatilsEditForm = (props) => {
  const {
    product,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleButtonUpdateClick,
    onCancel
  } = props

  const [{ parsePrice }] = useUtils()
  const formMethods = useForm()
  const [, t] = useLanguage()
  const productImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleClickImage = () => {
    productImageInputRef.current.click()
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
      handlechangeImage(files[0])
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

  const handleChangePrice = (e) => {
    const regexp = /^[0-9.\b]+$/
    if (e.target.value === '' || regexp.test(e.target.value)) {
      handleChangeInput(e)
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
        <ProductImage
          onClick={() => handleClickImage()}
        >
          <ExamineClick
            onFiles={files => handleFiles(files)}
            childRef={(e) => { productImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={formState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files)}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              {formState.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!formState.changes?.images || formState.result?.result === 'Network Error' || formState.result.error)
                  ? product?.images &&
                    (<img src={product?.images} alt='product image' loading='lazy' />)
                  : formState?.changes?.images &&
                    <img src={formState?.changes?.images} alt='product image' loading='lazy' />
                )}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                  <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </ProductImage>
        <InputWrapper>
          <label>{t('PRODUCT_NAME', 'Product name')}</label>
          <Input
            name='name'
            placeholder={t('Name', 'name')}
            defaultValue={
              formState?.result?.result
                ? formState?.result?.result?.name
                : formState?.changes?.name ?? product?.name
            }
            onChange={handleChangeInput}
            ref={formMethods.register({
              required: t('VALIDATION_ERROR_BUSINESS_NAME_REQUIRED', 'Business name is required')
            })}
            disabled={formState.loading}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('PRICE', 'Price')}</label>
          <Input
            name='price'
            placeholder={parsePrice(0)}
            value={
              formState?.result?.result
                ? formState?.result?.result?.price
                : formState?.changes?.price ?? product?.price
            }
            onChange={(e) => handleChangePrice(e)}
            disabled={formState.loading}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('BUSINESS_DESCRIPTION', 'Business description')}</label>
          <TextArea
            rows={4}
            name='description'
            placeholder={t('WRITE_A_LITTLE_DESCRIPTION', 'Write a little description')}
            defaultValue={
              formState?.result?.result
                ? formState?.result?.result?.description
                : formState?.changes?.description ?? product?.description
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
              borderRadius='7.6px'
              type='button'
              onClick={() => onCancel(false)}
              disabled={formState.loading}
            >
              {t('CANCEL', 'Cancel')}
            </Button>
          )}
          {((formState && Object.keys(formState?.changes).length > 0)) && (
            <Button
              type='submit'
              color='primary'
              borderRadius='7.6px'
              disabled={formState.loading}
            >
              {formState?.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
            </Button>
          )}
        </ActionsForm>
      </FormInput>
      <Alert
        title={t('ORDERING', 'Ordering')}
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
