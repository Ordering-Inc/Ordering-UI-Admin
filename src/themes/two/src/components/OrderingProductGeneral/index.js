import React, { useState, useRef } from 'react'
import { bytesConverter } from '../../../../../utils'
import { Select } from '../../styles/Select/FirstSelect'
import { Button } from '../../styles/Buttons'
import { useLanguage, DragAndDrop, ExamineClick } from 'ordering-components-admin'
import FiCamera from '@meronex/icons/fi/FiCamera'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import {
  GeneralContainer,
  BusinessImg,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  LogoImage,
  SmallLogoImage,
  FormControl,
  Label,
  FormGroup,
  Option,
  SocialImage,
  CameraIconContainer,
  SaveBtnWrapper
} from './styles'

export const OrderingProductGeneral = (props) => {
  const {
    product
  } = props

  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: null } })
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const businessImageInputRef = useRef(null)
  const socialImageInputRef = useRef(null)
  const logoImageInputRef = useRef(null)

  const productOptions = [
    { value: 'website', content: <Option>{t('WEBSITE', 'Website')}</Option> },
    { value: 'app', content: <Option>{t('APP', 'App')}</Option> }
  ]

  const handleClickImage = (type) => {
    if (type === 'image') {
      businessImageInputRef.current.click()
    }

    if (type === 'logo') {
      logoImageInputRef.current.click()
    }

    if (type === 'social') {
      socialImageInputRef.current.click()
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

  const handleChangeFormState = (type, value) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [type]: value
      }
    })
  }

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  const handlechangeImage = (file, name) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          [name]: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <>
      <GeneralContainer>
        <BusinessImg
          onClick={() => handleClickImage('image')}
        >
          <ExamineClick
            onFiles={files => handleFiles(files, 'image')}
            childRef={(e) => { businessImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={formState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files, 'image')}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              {formState.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!formState.changes?.image || formState.result?.result === 'Network Error' || formState.result?.error)
                  ? product?.image &&
                    (<img src={product?.image} alt='header image' loading='lazy' />)
                  : formState?.changes?.image &&
                    <img src={formState?.changes?.image} alt='header image' loading='lazy' />
                )}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BsCardImage />
                  <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </BusinessImg>
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
                  ? product?.logo &&
                    (<img src={product?.logo} alt='logo image' loading='lazy' />)
                  : formState?.changes?.logo &&
                    <img src={formState?.changes?.logo} alt='logo image' loading='lazy' />
                )}
              <UploadImageIconContainer small>
                <UploadImageIcon small>
                  <BsCardImage />
                  <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </LogoImage>
        <SmallLogoImage>
          <FiCamera />
        </SmallLogoImage>
        <FormGroup className='row'>
          <FormControl className='col-md-6'>
            <Label>{t('NAME', 'Name')}</Label>
            <input
              type='text'
              placeholder={t('NAME', 'Name')}
              defaultValue={product?.name}
              onChange={(e) => handleChangeFormState('name', e.target.value)}
            />
          </FormControl>
          <FormControl className='col-md-6'>
            <Label>{t('BUSINESS', 'Business')}</Label>
            <Select
              options={productOptions}
              className='select'
              defaultValue={product?.type}
              placeholder={t('PRODUCT_TYPE', 'Product type')}
              onChange={(value) => handleChangeFormState('type', value)}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('CODE', 'Code')}</Label>
            <input
              type='text'
              placeholder={t('CODE', 'Code')}
              defaultValue={product?.code}
              onChange={(e) => handleChangeFormState('code', e.target.value)}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('URL', 'URL')}</Label>
            <input
              type='text'
              placeholder={t('URL', 'Url')}
              defaultValue={product?.url}
              onChange={(e) => handleChangeFormState('url', e.target.value)}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('DESCRIPTION', 'Description')}</Label>
            <textarea
              placeholder={t('WRITE_A_LITTLE_DESCRIPTION', 'Write a little description')}
              value={formState?.misc_description || ''}
              onChange={(e) => handleChangeFormState('misc_description', e.target.value)}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('RESET_PASSWORD_URL_TEMPLATE', 'Reset password url template')}</Label>
            <input
              type='text'
              placeholder={t('URL', 'Url')}
              defaultValue={product?.reset_password_url}
              onChange={(e) => handleChangeFormState('reset_password_url', e.target.value)}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template')}</Label>
            <input
              type='text'
              placeholder={t('URL', 'Url')}
              defaultValue={product?.reset_password_url}
              onChange={(e) => handleChangeFormState('track_order_url', e.target.value)}
            />
          </FormControl>
          <FormControl className='col-md-7'>
            <Label>{t('SOCIAL_SHARE', 'Social share')}</Label>
            <SocialImage
              onClick={() => handleClickImage('social')}
            >
              <ExamineClick
                onFiles={files => handleFiles(files, 'social')}
                childRef={(e) => { socialImageInputRef.current = e }}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                <DragAndDrop
                  onDrop={dataTransfer => handleFiles(dataTransfer.files, 'social')}
                  accept='image/png, image/jpeg, image/jpg'
                  disabled={formState.loading}
                >
                  {formState.loading
                    ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                    : ((!formState.changes?.social || formState.result?.result === 'Network Error' || formState.result?.error)
                      ? product?.social &&
                        (<img src={product?.social} alt='social image' loading='lazy' />)
                      : formState?.changes?.social &&
                        <img src={formState?.changes?.social} alt='social image' loading='lazy' />
                    )}
                  <UploadImageIconContainer>
                    <UploadImageIcon>
                      <BsCardImage />
                      <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                    </UploadImageIcon>
                  </UploadImageIconContainer>
                  <CameraIconContainer>
                    <FiCamera />
                  </CameraIconContainer>
                </DragAndDrop>
              </ExamineClick>
            </SocialImage>
          </FormControl>
        </FormGroup>
        <SaveBtnWrapper>
          <Button
            borderRadius='7.6px'
            color='primary'
          >
            {t('SAVE', 'Save')}
          </Button>
        </SaveBtnWrapper>
      </GeneralContainer>
      <Alert
        title={t('ORDERING_PRODUCTS', 'Ordering products')}
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
