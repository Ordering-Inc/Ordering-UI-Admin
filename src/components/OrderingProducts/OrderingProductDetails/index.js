import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { bytesConverter } from '../../../utils'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import Skeleton from 'react-loading-skeleton'
import { Alert, Confirm } from '../../Shared'
import { Input, TextArea, Button, DefaultSelect } from '../../../styles'
import { ThreeDots, InfoCircle } from 'react-bootstrap-icons'

import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  SiteDetails as SiteDetailsController
} from 'ordering-components-admin'

import {
  DetailContainer,
  DetailHeaderContainer,
  ActionSelectorWrapper,
  TitleWrapper,
  ContactUsContainer,
  FormContainer,
  BusinessImg,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  LogoImage,
  FormControl,
  LabelHeader,
  Label,
  FormGroup,
  SaveBtnWrapper,
  SocialShareImage,
  InfoWrapper,
  InfoContent,
  InfoTitle,
  Info
} from './styles'

const OrderingProductDetailsUI = (props) => {
  const {
    siteState,
    formState,
    isAddMode,
    handleChangeInput,
    handlechangeImage,
    handleUpdateSite,
    handleAddSite,
    handleDeleteSite
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const headerImageInputRef = useRef(null)
  const logoImageInputRef = useRef(null)
  const socialShareInputRef = useRef(null)

  const moreOptions = [
    { value: 0, content: t('DELETE', 'Delete') }
  ]

  const handleClickImage = (type) => {
    if (type === 'header') {
      headerImageInputRef.current.click()
    }
    if (type === 'logo') {
      logoImageInputRef.current.click()
    }
    if (type === 'social_share') {
      socialShareInputRef.current.click()
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

  const onSubmit = () => {
    if (isAddMode) {
      handleAddSite && handleAddSite()
    } else {
      handleUpdateSite && handleUpdateSite()
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickDelete = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PRODUCT', 'Product')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteSite()
      }
    })
  }

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState.error])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  return (
    <DetailContainer>
      <DetailHeaderContainer>
        <TitleWrapper>
          <h2>{siteState.site?.name}</h2>
        </TitleWrapper>
        {!isAddMode && (
          <ActionSelectorWrapper>
            <DefaultSelect
              placeholder={<ThreeDots />}
              options={moreOptions}
              onChange={() => onClickDelete()}
            />
          </ActionSelectorWrapper>
        )}
      </DetailHeaderContainer>
      {!isAddMode && (
        <ContactUsContainer>
          <p>
            {t('NEED_HELP_WITH_SET_UP', 'Do you need help with the setup?')}
          </p>
          <Button
            outline
            borderRadius='8px'
            color='primary'
            onClick={() => window.open('https://www.ordering.co/ordering-sales', '_blank')}
          >
            {t('CONTACT_US', 'Contact us')}
          </Button>
        </ContactUsContainer>
      )}
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <BusinessImg
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
                : ((!formState.changes?.header || formState.error)
                  ? siteState.site?.header &&
                    (<img src={siteState.site?.header} alt='header image' loading='lazy' />)
                  : formState?.changes?.header &&
                    <img src={formState?.changes?.header} alt='header image' loading='lazy' />
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
                : ((!formState.changes?.logo || formState.error)
                  ? siteState.site?.logo &&
                    (<img src={siteState.site?.logo} alt='logo image' loading='lazy' />)
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
        <FormGroup className='row'>
          <FormControl className='col-md-12'>
            <Label>{t('NAME', 'Name')}</Label>
            <Input
              type='text'
              name='name'
              placeholder={t('NAME', 'Name')}
              value={
                formState?.changes?.name ?? siteState.site?.name ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                required: t('VALIDATION_ERROR_REQUIRED', 'The name field is required.').replace('_attribute_', t('NAME', 'Name'))
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('CODE', 'Code')}</Label>
            <Input
              type='text'
              name='code'
              placeholder={t('CODE', 'Code')}
              value={
                formState?.changes?.code ?? siteState.site?.code ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                required: t('VALIDATION_ERROR_REQUIRED', 'The name code is required.').replace('_attribute_', t('CODE', 'Code'))
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('URL', 'URL')}</Label>
            <Input
              type='text'
              name='url'
              placeholder={t('URL', 'Url')}
              value={
                formState?.changes?.url ?? siteState.site?.url ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('URL', 'Url'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('SOCIAL_SHARE', 'Social share')}</Label>
            <SocialShareImage
              onClick={() => handleClickImage('social_share')}
            >
              <ExamineClick
                onFiles={files => handleFiles(files, 'social_share')}
                childRef={(e) => { socialShareInputRef.current = e }}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                <DragAndDrop
                  onDrop={dataTransfer => handleFiles(dataTransfer.files, 'social_share')}
                  accept='image/png, image/jpeg, image/jpg'
                  disabled={formState.loading}
                >
                  {formState.loading
                    ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                    : ((!formState.changes?.social_share || formState.error)
                      ? siteState.site?.social_share &&
                        (<img src={siteState.site?.social_share} alt='social share image' loading='lazy' />)
                      : formState?.changes?.social_share &&
                        <img src={formState?.changes?.social_share} alt='social share image' loading='lazy' />
                    )}
                  <UploadImageIconContainer small>
                    <UploadImageIcon small>
                      <BsCardImage />
                      <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                    </UploadImageIcon>
                  </UploadImageIconContainer>
                </DragAndDrop>
              </ExamineClick>
            </SocialShareImage>
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('RESET_PASSWORD_URL_TEMPLATE', 'Reset password url template')}</Label>
            <Input
              type='text'
              name='reset_password_url_template'
              placeholder={t('URL', 'Url')}
              value={
                formState?.changes?.reset_password_url_template ?? siteState.site?.reset_password_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('RESET_PASSWORD_URL_TEMPLATE', 'Reset password url template'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template')}</Label>
            <Input
              type='text'
              placeholder={t('URL', 'Url')}
              name='track_order_url_template'
              value={
                formState?.changes?.track_order_url_template ?? siteState.site?.track_order_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('TRACK_ORDER_URL_TEMPLATE', 'Track order url template'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('DESCRIPTION', 'Description')}</Label>
            <TextArea
              name='description'
              rows={5}
              placeholder={t('SHORT_PROMOTION_ABOUT', 'Write a little description')}
              value={
                formState?.changes?.description ?? siteState.site?.description ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('CHECKOUT_URL_TEMPLATE', 'Checkout url template')}</Label>
            <Input
              type='text'
              placeholder={t('URL', 'Url')}
              name='checkout_url_template'
              value={
                formState?.changes?.checkout_url_template ?? siteState.site?.checkout_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('CHECKOUT_URL_TEMPLATE', 'Checkout url template'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('CART_URL_TEMPLATE', 'Cart url template')}</Label>
            <Input
              type='text'
              placeholder={t('URL', 'Url')}
              name='cart_url_template'
              value={
                formState?.changes?.cart_url_template ?? siteState.site?.cart_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('CART_URL_TEMPLATE', 'Cart url template'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('BUSINESS_URL_TEMPLATE', 'Business url template')}</Label>
            <Input
              type='text'
              placeholder={t('URL', 'Url')}
              name='business_url_template'
              value={
                formState?.changes?.business_url_template ?? siteState.site?.business_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('BUSINESS_URL_TEMPLATE', 'Business url template'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('CATEGORY_URL_TEMPLATE', 'Category url template')}</Label>
            <Input
              type='text'
              placeholder={t('URL', 'Url')}
              name='category_url_template'
              value={
                formState?.changes?.category_url_template ?? siteState.site?.category_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('CATEGORY_URL_TEMPLATE', 'Category url template'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <LabelHeader>
              <Label>{t('PRODUCT_URL_TEMPLATE', 'Product url template')}</Label>
              <InfoWrapper>
                <InfoCircle />
                <InfoContent>
                  <InfoTitle>{t('AVAILABLE_URL_FORMATS', 'Available Product Url formats').replace('_attribute_', t('PRODUCT', 'Product'))}</InfoTitle>
                  <Info>store/:business_slug/:category_slug/:product_slug</Info>
                  <Info>store/:category_slug/:product_slug/?sucursal=:business_slug</Info>
                  <Info>store/:business_slug?category=:category_id&product=:product_id</Info>
                </InfoContent>
              </InfoWrapper>
            </LabelHeader>
            <Input
              type='text'
              placeholder={t('URL', 'Url')}
              name='product_url_template'
              value={
                formState?.changes?.product_url_template ?? siteState.site?.product_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /.+/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('PRODUCT_URL_TEMPLATE', 'Product url template'))
                }
              })}
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <Label>{t('PROFILE_URL_TEMPLATE', 'Profile url template')}</Label>
            <Input
              type='text'
              placeholder={t('URL', 'Url')}
              name='profile_url_template'
              value={
                formState?.changes?.profile_url_template ?? siteState.site?.profile_url_template ?? ''
              }
              onChange={(e) => handleChangeInput(e)}
              ref={register({
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: t(
                    'VALIDATION_ERROR_ACTIVE_URL',
                    'The _attribute_ is not a valid URL.'
                  ).replace('_attribute_', t('PROFILE_URL_TEMPLATE', 'Profile url template'))
                }
              })}
            />
          </FormControl>
        </FormGroup>
        <SaveBtnWrapper>
          <Button
            borderRadius='7.6px'
            color='primary'
            type='submit'
            disabled={formState.loading || Object.keys(formState.changes).length === 0}
          >
            {t('SAVE', 'Save')}
          </Button>
        </SaveBtnWrapper>
      </FormContainer>

      <Alert
        title={t('ORDERING_PRODUCTS', 'Ordering products')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
    </DetailContainer>
  )
}

export const OrderingProductDetails = (props) => {
  const productDetailsProps = {
    ...props,
    UIComponent: OrderingProductDetailsUI
  }
  return <SiteDetailsController {...productDetailsProps} />
}
