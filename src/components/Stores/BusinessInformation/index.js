import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, DragAndDrop, ExamineClick, BusinessFormDetails as BusinessFormDetailsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, Modal, ImageCrop, ColorPicker } from '../../Shared'
import { bytesConverter, shape, ribbonValues } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Button, Input, Switch } from '../../../styles'
import { RecordCircleFill, Circle, Facebook, Instagram, Tiktok, Pinterest, Whatsapp, Snapchat } from 'react-bootstrap-icons'

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
  SwitchWrapper,
  ColorShapeWrapper,
  ColorWrapper,
  ShapeWrapper,
  ShapeContentWrapper,
  ShapeBoxWrapper,
  RibbonSwitchWrapper,
  PriceFilterWrapper,
  PriceFilterListWrapper,
  PriceFilterItem,
  SocialWrapper,
  SocialItemWrapper,
  SocialItemHeader,
  SocialItemContent
} from './styles'

const BusinessInformationUI = (props) => {
  const {
    formState,
    businessState,
    handlechangeImage,
    handleChangeInput,
    handleButtonUpdateClick,
    handleChangeSwtich,
    handleChangeRibbon
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()
  const headerImageInputRef = useRef(null)
  const logoImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const priceList = [
    { key: '1', value: '$' },
    { key: '2', value: '$$' },
    { key: '3', value: '$$$' },
    { key: '4', value: '$$$$' },
    { key: '5', value: '$$$$$' }
  ]

  const socialOriginalURL = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/',
    snap_chat: 'https://www.snapchat.com/add/',
    pinterest: 'https://www.pinterest.com/',
    whatsapp: 'https://wa.me/'
  }

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
      if (formState?.changes?.whatsapp_number && formState?.changes?.whatsapp_number.search(/^https:\/\/wa\.me\/\+?\d+$/) === -1) {
        setAlertState({
          open: true,
          content: t('WHATS_APP_NUMBER_NOT_VALID', 'Whatsapp number is not valid')
        })
        return
      }
      if (formState?.changes?.tiktok_profile && formState?.changes?.tiktok_profile.search(/^https:\/\/www\.tiktok\.com\/@.+$/) === -1) {
        setAlertState({
          open: true,
          content: t('TIKTOK_USERNAME_NOT_VALID', 'TikTok user name is not valid')
        })
        return
      }
      handleButtonUpdateClick()
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeSwtich(cropState?.name, croppedImg)
    setCropState({ name: null, data: null, open: false })
  }

  const handleChangeEnable = (value) => {
    if (!businessState?.business?.ribbon && !value) {
      const ribbonChanges = { ...ribbonValues }
      handleChangeSwtich('ribbon', ribbonChanges)
      return
    }
    handleChangeRibbon({ enabled: value })
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
            defaultValue={formState?.changes?.name ?? businessState?.business?.name}
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
            defaultValue={formState?.changes?.description ?? businessState?.business?.description}
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
              defaultValue={formState?.changes?.phone ?? businessState?.business?.phone}
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
              defaultValue={formState?.changes?.cellphone ?? businessState?.business?.cellphone}
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
        <RibbonSwitchWrapper>
          <span>{t('RIBBON', 'Ribbon')}</span>
          <Switch
            defaultChecked={businessState?.business?.ribbon?.enabled || false}
            onChange={val => handleChangeEnable(val)}
          />
        </RibbonSwitchWrapper>
        {
          (typeof (formState?.changes?.ribbon?.enabled) !== 'undefined' ? formState?.changes?.ribbon?.enabled : businessState?.business?.ribbon?.enabled) && (
            <>
              <InputWrapper>
                <label>{t('TEXT', 'Text')}</label>
                <Input
                  name='text'
                  placeholder={t('TEXT', 'Text')}
                  defaultValue={formState?.changes?.ribbon?.text ?? businessState?.business?.ribbon?.text}
                  onChange={(e) => handleChangeRibbon({ text: e.target.value })}
                  disabled={formState.loading}
                  autoComplete='off'
                  ref={formMethods.register({
                    required:
                      (businessState?.business?.ribbon && (typeof (formState?.changes?.ribbon?.enabled) !== 'undefined' ? formState?.changes?.ribbon?.enabled : businessState?.business?.ribbon?.enabled))
                        ? t(
                          'VALIDATION_ERROR_REQUIRED',
                          'The Ribbon text field is required'
                        ).replace('_attribute_', t('Ribbon_Text', 'Ribbon text'))
                        : false
                  })}
                />
              </InputWrapper>
              <ColorShapeWrapper>
                <ColorWrapper>
                  <label>{t('COLOR', 'Color')}</label>
                  <ColorPicker
                    defaultColor={formState?.changes?.ribbon?.color ?? businessState?.business?.ribbon?.color}
                    onChangeColor={(color) => handleChangeRibbon({ color })}
                  />
                </ColorWrapper>
                <ShapeWrapper>
                  <label>{t('SHAPE', 'Shape')}</label>
                  <ShapeContentWrapper>
                    {shape && Object.keys(shape).map((key, i) => (
                      <ShapeBoxWrapper
                        key={i}
                        shapeRect={shape[key] === shape?.rectangleRound}
                        round={shape[key] === shape?.capsuleShape}
                        active={formState?.changes?.ribbon?.shape
                          ? (formState?.changes?.ribbon?.shape === shape[key])
                          : (businessState?.business?.ribbon?.shape === shape[key])}
                        onClick={() => handleChangeRibbon({ shape: shape[key] })}
                      >
                        <div />
                        {(formState?.changes?.ribbon?.shape
                          ? (formState?.changes?.ribbon?.shape === shape[key])
                          : (businessState?.business?.ribbon?.shape === shape[key]))
                          ? <RecordCircleFill />
                          : <Circle />}
                      </ShapeBoxWrapper>
                    ))}
                  </ShapeContentWrapper>
                </ShapeWrapper>
              </ColorShapeWrapper>
            </>
          )
        }
        <PriceFilterWrapper>
          <label>{t('PRICE_FILTER', 'Price filter')}</label>
          <PriceFilterListWrapper>
            {priceList.map((item, i) => (
              <PriceFilterItem
                key={i}
                onClick={() => handleChangeSwtich('price_level', item.key)}
                active={(formState?.changes?.price_level ?? businessState?.business?.price_level) === item.key}
              >
                {((formState?.changes?.price_level ?? businessState?.business?.price_level) === item.key) ? <RecordCircleFill /> : <Circle />}
                <span>{item.value}</span>
              </PriceFilterItem>
            ))}
          </PriceFilterListWrapper>
        </PriceFilterWrapper>
        <SocialWrapper>
          <h2>{t('SOCIAL_NETWORKS', 'Social networks')}</h2>
          <SocialItemWrapper>
            <SocialItemHeader>
              <div>
                <Facebook />
              </div>
              <span>{t('FACEBOOK', 'Facebook')}</span>
            </SocialItemHeader>
            <SocialItemContent>
              <ConvertInput
                value={formState?.changes?.facebook_profile ?? businessState?.business?.facebook_profile}
                handleChangeValue={(val) => handleChangeSwtich('facebook_profile', val)}
                originalURL={socialOriginalURL.facebook}
                placeholder={t('USER_OR_URL', 'User or url')}
                name='facebook_profile'
              />
            </SocialItemContent>
          </SocialItemWrapper>
          <SocialItemWrapper>
            <SocialItemHeader>
              <div>
                <Instagram />
              </div>
              <span>{t('INSTAGRAM', 'Instagram')}</span>
            </SocialItemHeader>
            <SocialItemContent>
              <ConvertInput
                value={formState?.changes?.instagram_profile ?? businessState?.business?.instagram_profile}
                handleChangeValue={(val) => handleChangeSwtich('instagram_profile', val)}
                originalURL={socialOriginalURL.instagram}
                placeholder={t('USER_OR_URL', 'User or url')}
                name='instagram_profile'
              />
            </SocialItemContent>
          </SocialItemWrapper>
          <SocialItemWrapper>
            <SocialItemHeader>
              <div>
                <Tiktok />
              </div>
              <span>{t('TIK_TOK', 'Tik tok')}</span>
            </SocialItemHeader>
            <SocialItemContent>
              <ConvertInput
                value={formState?.changes?.tiktok_profile ?? businessState?.business?.tiktok_profile}
                handleChangeValue={(val) => handleChangeSwtich('tiktok_profile', val)}
                originalURL={socialOriginalURL.tiktok}
                placeholder={t('USER_OR_URL', 'User or url')}
                name='tiktok_profile'
              />
            </SocialItemContent>
          </SocialItemWrapper>
          <SocialItemWrapper>
            <SocialItemHeader>
              <div>
                <Pinterest />
              </div>
              <span>{t('PINTEREST', 'Pinterest')}</span>
            </SocialItemHeader>
            <SocialItemContent>
              <ConvertInput
                value={formState?.changes?.pinterest_profile ?? businessState?.business?.pinterest_profile}
                handleChangeValue={(val) => handleChangeSwtich('pinterest_profile', val)}
                originalURL={socialOriginalURL.pinterest}
                placeholder={t('USER_OR_URL', 'User or url')}
                name='pinterest_profile'
              />
            </SocialItemContent>
          </SocialItemWrapper>
          <SocialItemWrapper>
            <SocialItemHeader>
              <div>
                <Whatsapp />
              </div>
              <span>{t('WHATSAPP', 'Whatsapp')}</span>
            </SocialItemHeader>
            <SocialItemContent>
              <ConvertInput
                value={formState?.changes?.whatsapp_number ?? businessState?.business?.whatsapp_number}
                handleChangeValue={(val) => handleChangeSwtich('whatsapp_number', val)}
                originalURL={socialOriginalURL.whatsapp}
                placeholder={t('PHONE_NUMBER', 'Phone number')}
                name='whatsapp_number'
              />
            </SocialItemContent>
          </SocialItemWrapper>
          <SocialItemWrapper>
            <SocialItemHeader>
              <div>
                <Snapchat />
              </div>
              <span>{t('SNAPCHAT', 'Snapchat')}</span>
            </SocialItemHeader>
            <SocialItemContent>
              <ConvertInput
                value={formState?.changes?.snapchat_profile ?? businessState?.business?.snapchat_profile}
                handleChangeValue={(val) => handleChangeSwtich('snapchat_profile', val)}
                originalURL={socialOriginalURL.snap_chat}
                placeholder={t('USER_OR_URL', 'User or url')}
                name='snapchat_profile'
              />
            </SocialItemContent>
          </SocialItemWrapper>
        </SocialWrapper>
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

export const ConvertInput = (props) => {
  const { value, handleChangeValue, originalURL, placeholder, name } = props

  const inputRef = useRef()
  let timeout1 = null

  const handleChangeConvert = (e) => {
    clearTimeout(timeout1)
    const inputValue = convertValue(e.target.value)
    const update = inputValue ? (originalURL + inputValue) : ''
    timeout1 = setTimeout(() => {
      handleChangeValue(update)
      inputRef.current.value = inputValue
    }, 750)
  }

  const convertValue = (value) => {
    if (!value) return ''
    const splitValue = value.split('/')
    const updatedValue = splitValue[splitValue.length - 1] === '' ? splitValue[splitValue.length - 2] : splitValue[splitValue.length - 1]
    return updatedValue
  }

  const checkKeyDown = (e) => {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (keyCode === 8 || keyCode === 46) {
      setTimeout(() => {
        if (inputRef.current.value === '') handleChangeValue('')
      }, 1)
    }
  }

  return (
    <Input
      name={name}
      ref={inputRef}
      placeholder={placeholder}
      defaultValue={convertValue(value)}
      onKeyDown={checkKeyDown}
      onChange={handleChangeConvert}
      autoComplete='off'
    />
  )
}
