import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, DragAndDrop, ExamineClick, useUtils } from 'ordering-components-admin'
import { Alert } from '../../Shared'
import { bytesConverter } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Button, Input, TextArea, Switch } from '../../../styles'
import Skeleton from 'react-loading-skeleton'

import {
  FormInput,
  ProductImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  InputWrapper,
  ActionsForm,
  InventoryWrapper,
  Wrapper,
  RegularWrapper
} from './styles'

export const ProductDetatilsInformation = (props) => {
  const {
    product,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleChangeFormState,
    handleButtonUpdateClick,
    onCancel
  } = props

  const [{ parsePrice, optimizeImage }] = useUtils()
  const formMethods = useForm()
  const [, t] = useLanguage()
  const productImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [autoGenerateCode, setAutoGenerate] = useState({
    isAutoGenerate: false,
    autoCodeText: product?.slug
  })

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

  const stringToSlug = str => {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaaaeeeeiiiioooouuuunc------'

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '_') // collapse whitespace and replace by _
      .replace(/-+/g, '_') // collapse dashes
      .replace(/^-+/, '') // trim - from start of text
      .replace(/-+$/, '') // trim - from end of text

    return str
  }

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0) {
      handleButtonUpdateClick()
    }
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => {
        if (error.type === 'min') return t('REGULAR_PRICE_MUST_BIGGER_PRICE', 'This regular price must be bigger than price')
        else return error.message
      })
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (autoGenerateCode.isAutoGenerate) {
      const generateCode = {
        target: {
          name: 'slug',
          value: formState.changes.name ? stringToSlug(formState.changes.name) : stringToSlug(product.name)
        }
      }
      setAutoGenerate({
        ...autoGenerateCode,
        autoCodeText: generateCode.target.value
      })
      handleChangeInput(generateCode)
      setAutoGenerate({
        ...autoGenerateCode,
        isAutoGenerate: false
      })
    }
  }, [autoGenerateCode])

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
                : (
                  (!formState.changes?.images || formState.result?.result === 'Network Error' || formState.result.error)
                    ? product?.images && (<img src={optimizeImage(product?.images, 'h_200,c_limit')} alt='product image' loading='lazy' />)
                    : formState?.changes?.images && (<img src={formState?.changes?.images} alt='product image' loading='lazy' />)
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
          <label>{t('Name_V2', 'Name')}</label>
          <Input
            name='name'
            placeholder={t('Name', 'name')}
            defaultValue={product?.name}
            onChange={handleChangeInput}
            ref={formMethods.register({
              required: t('NAME_REQUIRED', 'The name is required')
            })}
            disabled={formState.loading}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label className='space-between'>
            <span>{t('PRICE', 'Price')}</span>
          </label>
          <Input
            name='price'
            placeholder={parsePrice(0)}
            defaultValue={product?.price}
            onChange={(e) => handleChangeInput(e)}
            disabled={formState.loading}
            autoComplete='off'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </InputWrapper>
        <RegularWrapper>
          <span>{t('REGULAR_PRICE', 'Regular Price')}</span>
          <Switch
            defaultChecked={product?.in_offer}
            onChange={val => handleChangeFormState({ in_offer: val })}
          />
        </RegularWrapper>
        {
          (typeof (formState?.changes?.in_offer) !== 'undefined' ? formState?.changes?.in_offer : product?.in_offer) && (
            <InputWrapper style={{ marginTop: '10px' }}>
              <Input
                name='offer_price'
                placeholder={parsePrice(0)}
                defaultValue={product?.offer_price}
                ref={formMethods.register({
                  required: t(
                    'VALIDATION_ERROR_REQUIRED',
                    'The Regular Price field is required'
                  ).replace('_attribute_', t('REGULAR_PRICE', 'Regular Price')),
                  min: formState?.changes?.price ?? product?.price
                })}
                onChange={(e) => handleChangeInput(e)}
                disabled={formState.loading}
                autoComplete='off'
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
              />
            </InputWrapper>
          )
        }
        <InputWrapper>
          <label>{t('DESCRIPTION', 'Description')}</label>
          <TextArea
            rows={4}
            name='description'
            placeholder={t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description')}
            defaultValue={product?.description}
            onChange={handleChangeInput}
            disabled={formState.loading}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('SLUG', 'Slug')}</label>
          <Input
            name='slug'
            placeholder={t('SLUG', 'Slug')}
            onChange={handleChangeInput}
            disabled={formState.loading}
            autoComplete='off'
            defaultValue={product?.slug}
          />
          <Wrapper
            style={{ paddingTop: 10 }}
          >
            <Button
              color='lightPrimary'
              borderRadius='7.6px'
              disabled={formState.loading}
              onClick={() => setAutoGenerate({
                ...autoGenerateCode,
                isAutoGenerate: true
              })}
            >
              {formState?.loading ? t('LOADING', 'Loading') : t('AUTOGENERATE', 'Auto Generate')}
            </Button>
          </Wrapper>
        </InputWrapper>

        <InventoryWrapper>
          <span>{t('INVENTORY', 'Inventory')}</span>
          <Switch
            defaultChecked={product?.inventoried}
            onChange={val => handleChangeFormState({ inventoried: val })}
          />
        </InventoryWrapper>
        {
          (typeof (formState?.changes?.inventoried) !== 'undefined' ? formState?.changes?.inventoried : product?.inventoried) && (
            <InputWrapper>
              <label>{t('QUANTITY', 'Quantity')}</label>
              <Input
                name='quantity'
                placeholder={t('QUANTITY', 'Quantity')}
                defaultValue={product?.quantity}
                onChange={handleChangeInput}
                disabled={formState.loading}
                autoComplete='off'
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
              />
            </InputWrapper>
          )
        }
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
          <Button
            type='submit'
            color='primary'
            borderRadius='7.6px'
            disabled={formState.loading || Object.keys(formState?.changes).length === 0}
          >
            {formState?.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
          </Button>
        </ActionsForm>
      </FormInput>
      <Alert
        width='700px'
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
