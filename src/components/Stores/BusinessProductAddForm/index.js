import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../../Shared'
import { bytesConverter } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Button, Input, TextArea } from '../../../styles'

import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  BusinessProductCreator as BusinessProductCreatorController
} from 'ordering-components-admin'

import {
  FormInput,
  ProductImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  InputWrapper,
  ActionsForm,
  SkipButton
} from './styles'

const BusinessProductAddFormUI = (props) => {
  const {
    formState,
    handleChangeInput,
    handleUpdateClick,
    handlechangeImage,
    isTutorialMode,
    handleTutorialSkip
  } = props

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

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  return (
    <>
      <FormInput>
        <h1>{t('NEW_PRODUCT', 'New product')}</h1>
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
              {formState?.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!formState?.changes?.images)
                  ? <div />
                  : formState?.changes?.images &&
                  (
                    <img src={formState?.changes?.images} alt='business type image' loading='lazy' />
                  )
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
            type='text'
            name='name'
            defaultValue={formState?.changes?.name || ''}
            onChange={handleChangeInput}
            placeholder={t('WRITE_A_NAME', 'Write a name')}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('PRICE', 'Price')}</label>
          <Input
            type='number'
            name='price'
            defaultValue={formState?.changes?.price || ''}
            onChange={handleChangeInput}
            placeholder={t('WRITE_PRICE', 'Write price')}
            autoComplete='off'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('DESCRIPTION', 'Description')}</label>
          <TextArea
            rows={4}
            name='description'
            defaultValue={formState?.changes?.description || ''}
            onChange={handleChangeInput}
            placeholder={t('WRITE_DESCRIPTION', 'Write description')}
            autoComplete='off'
          />
        </InputWrapper>
        <ActionsForm>
          {isTutorialMode && (
            <SkipButton
              onClick={() => handleTutorialSkip()}
            >
              {t('TUTORIAL_SKIP', 'Skip')}
            </SkipButton>
          )}
          {((formState && Object.keys(formState?.changes).length > 0)) && (
            <Button
              type='submit'
              color='primary'
              borderRadius='7.6px'
              disabled={formState.loading || Object.keys(formState?.changes).length === 1}
              onClick={() => Object.keys(formState?.changes).length > 1 && handleUpdateClick()}
            >
              {
                formState?.loading
                  ? t('LOADING', 'Loading')
                  : isTutorialMode ? t('SAVE_AND_CONTINUE', 'Save and continue') : t('SAVE', 'Save')
              }
            </Button>
          )}
        </ActionsForm>
      </FormInput>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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

export const BusinessProductAddForm = (props) => {
  const businessProductAddProps = {
    ...props,
    UIComponent: BusinessProductAddFormUI
  }
  return (
    <BusinessProductCreatorController {...businessProductAddProps} />
  )
}
