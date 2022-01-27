import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  useConfig,
  GoogleAutocompleteInput,
  GoogleMapsMap,
  BusinessFormDetails as BusinessFormDetailsController
} from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Input, TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { CitySelector } from '../CitySelector'
import Skeleton from 'react-loading-skeleton'

import {
  BusinessDetailsContainer,
  DetailsHeader,
  BusinessName,
  FormInput,
  HeaderImage,
  SkeletonWrapper,
  UploadImageIcon,
  InputWrapper,
  ActionsForm,
  UploadImageIconContainer,
  LogoImage,
  WrapperMap,
  FormInputInnerContainer
} from './styles'

const AddBusinessFormUI = (props) => {
  const {
    isFirstVisited,
    formState,
    setFormState,
    handlechangeImage,
    handleChangeInput,
    handleAddBusiness,
    handleChangeAddress,
    handleChangeCenter
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const formMethods = useForm()
  const headerImageInputRef = useRef(null)
  const logoImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const googleMapsApiKey = configs?.google_maps_api_key?.value
  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const defaultPosition = { lat: 40.77473399999999, lng: -73.9653844 }

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
      handleAddBusiness()
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
      <BusinessDetailsContainer>
        <DetailsHeader>
          <BusinessName>
            {t('NEW_BUSINESS', 'New business')}
          </BusinessName>
        </DetailsHeader>
        <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormInputInnerContainer>
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
                    : (!formState.changes?.header
                      ? formState?.result?.result?.header &&
                        <img src={formState?.result?.result?.header} alt='header' loading='lazy' />
                      : <img src={formState?.changes?.header} alt='header image' loading='lazy' />
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
                    : (!formState.changes?.logo
                      ? formState?.result?.result?.logo &&
                        <img src={formState?.result?.result?.logo} alt='logo image' loading='lazy' />
                      : <img src={formState?.changes?.logo} alt='logo image' loading='lazy' />
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
                type='text'
                placeholder={t('NAME', 'name')}
                defaultValue={
                  formState?.result?.result
                    ? formState?.result?.result?.name
                    : formState?.changes?.name
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
              <label>{t('BUSINESS_EMAIL', 'Business email')}</label>
              <Input
                name='email'
                type='email'
                placeholder={t('EMAIL', 'email')}
                defaultValue={
                  formState?.result?.result
                    ? formState?.result?.result?.email
                    : formState?.changes?.email
                }
                onChange={handleChangeInput}
                ref={formMethods.register({
                  required: t(
                    'VALIDATION_ERROR_REQUIRED',
                    'Email is required'
                  ).replace('_attribute_', t('EMAIL', 'Email')),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t(
                      'VALIDATION_ERROR_EMAIL',
                      'Invalid email address'
                    ).replace('_attribute_', t('EMAIL', 'Email'))
                  }
                })}
                disabled={formState.loading}
                autoComplete='off'
              />
            </InputWrapper>
            <InputWrapper>
              <label>{t('BUSINESS_SLUG', 'Business slug')}</label>
              <Input
                name='slug'
                placeholder={t('SLUG', 'slug')}
                defaultValue={
                  formState?.result?.result
                    ? formState?.result?.result?.slug
                    : formState?.changes?.slug
                }
                onChange={handleChangeInput}
                ref={formMethods.register({
                  required: t('BUSINESS_SLUG_REQUIRED', 'Business slug is required')
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
                placeholder={t('SHORT_BUSINESS_ABOUT', 'Write a little description')}
                defaultValue={
                  formState?.result?.result
                    ? formState?.result?.result?.description
                    : formState?.changes?.description
                }
                onChange={handleChangeInput}
                disabled={formState.loading}
                autoComplete='off'
              />
            </InputWrapper>
            <InputWrapper>
              <label>{t('CITY', 'City')}</label>
              <CitySelector
                isDefault
                defaultValue={
                  formState?.result?.result
                    ? formState?.result?.result?.city_id
                    : formState?.changes?.city_id ?? ''
                }
                handleChangeCity={cityId => setFormState({ ...formState, changes: { ...formState.changes, city_id: cityId } })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>{t('ADDRESS', 'Address')}</label>
              <GoogleAutocompleteInput
                name='address'
                className='input-autocomplete'
                apiKey={googleMapsApiKey}
                placeholder={t('ADDRESS', 'Address')}
                onChangeAddress={(e) => {
                  handleChangeAddress(e)
                }}
                onChange={(e) => {
                  handleChangeInput(e)
                }}
                defaultValue={
                  formState?.result?.result
                    ? formState?.result?.result?.address
                    : formState?.changes?.address ?? ''
                }
                autoComplete='new-field'
                countryCode={configs?.country_autocomplete?.value || '*'}
              />
            </InputWrapper>
            <WrapperMap>
              <GoogleMapsMap
                apiKey={configs?.google_maps_api_key?.value}
                location={formState?.changes?.location ?? defaultPosition}
                mapControls={googleMapsControls}
                handleChangeCenter={handleChangeCenter}
                isFitCenter
              />
            </WrapperMap>
          </FormInputInnerContainer>
          <ActionsForm>
            <Button
              type='submit'
              color='primary'
              borderRadius='5px'
              disabled={!(Object.keys(formState?.changes).length > 0) || formState?.loading}
            >
              {
                formState?.loading
                  ? t('LOADING', 'Loading')
                  : isFirstVisited ? t('SAVE_AND_CONTINUE', 'Save and continue') : t('SAVE', 'Save')
              }
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
      </BusinessDetailsContainer>
    </>
  )
}

export const AddBusinessForm = (props) => {
  const businessFormDetailsProps = {
    ...props,
    UIComponent: AddBusinessFormUI
  }
  return <BusinessFormDetailsController {...businessFormDetailsProps} />
}
