import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, DragAndDrop, ExamineClick, useUtils } from 'ordering-components-admin'
import { Alert, Modal, ImageCrop } from '../../Shared'
import { bytesConverter } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { Button, Input, TextArea, Switch } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { Select } from '../../../styles/Select/FirstSelect'

import {
  Container,
  FormInput,
  ProductImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  InputWrapper,
  ActionsForm,
  FieldRow,
  SelectWrapper,
  Option,
  TimeContent,
  TimeBlock,
  PropertyOptionWrapper,
  PropertyOption
} from './styles'

export const ServiceDetail = (props) => {
  const {
    product,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleChangeFormState,
    handleUpdateClick,
    onCancel,
    isExtendExtraOpen
  } = props

  const [{ parsePrice, optimizeImage }] = useUtils()
  const formMethods = useForm()
  const [, t] = useLanguage()
  const productImageInputRef = useRef(null)
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [curPreorderTime, setCurPreorderTime] = useState({})
  const [isCustom, setIsCustom] = useState(false)
  const [autoGenerateCode, setAutoGenerate] = useState({
    isAutoGenerate: false,
    autoCodeText: product?.slug
  })

  const durationList = [
    { value: 15, content: <Option>15 <span>{t('MINUTES', 'minutes')}</span></Option> },
    { value: 30, content: <Option>30 <span>{t('MINUTES', 'minutes')}</span></Option> },
    { value: 45, content: <Option>45 <span>{t('MINUTES', 'minutes')}</span></Option> },
    { value: 60, content: <Option>1 <span>{('HOUR', 'hour')}</span></Option> },
    { value: 'custom', content: <Option><span>{('CUSTOME', 'custom')}</span></Option> }
  ]

  const setTimeList = () => {
    const _hours = []
    const _minutes = []
    for (let i = 0; i < 24; i++) {
      const text = (i < 10 ? '0' : ' ') + i
      _hours.push({
        text: text,
        hour: i
      })
    }
    for (let i = 0; i < 60; i++) {
      const text = (i < 10 ? '0' : '') + i
      _minutes.push({
        text: text,
        minute: i
      })
    }
    setHours(_hours)
    setMinutes(_minutes)
  }

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

      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: 'images', data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)

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
    str = str?.toLowerCase()

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
      handleUpdateClick()
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeFormState({ [cropState?.name]: croppedImg })
    setCropState({ name: null, data: null, open: false })
  }

  const handleChangePreorderTime = (evt) => {
    const type = evt.target.name
    const value = evt.target.value
    setCurPreorderTime({
      ...curPreorderTime,
      [type]: value
    })
    let preorderTime = 0
    if (type === 'hour') preorderTime = parseInt(value) * 60 + parseInt(curPreorderTime?.minute)
    else preorderTime = parseInt(curPreorderTime?.hour) * 60 + parseInt(value)
    handleChangeFormState({ duration: preorderTime })
  }

  const handleChangeSelect = (value) => {
    if (value === 'custom') {
      setIsCustom(true)
      handleChangeFormState({ duration: null })
      return
    }
    setCurPreorderTime({ hour: '0', minute: '0' })
    setIsCustom(false)
    handleChangeFormState({ duration: value })
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
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

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

  useEffect(() => {
    setTimeList()
    setCurPreorderTime({
      hour: product?.duration ? (parseInt(product?.duration / 60)) : '0',
      minute: product?.duration ? (parseInt(product?.duration) % 60) : '0'
    })
    if (!product?.duration) return

    if (parseInt(product?.duration) === 15 || parseInt(product?.duration) === 30 || parseInt(product?.duration) === 45 || parseInt(product?.duration) === 60) {
      setIsCustom(false)
    } else {
      setIsCustom(true)
    }
  }, [product])

  return (
    <>
      <Container maxLimit={isExtendExtraOpen}>
        <h1>{t('SERVICE_DETAILS', 'Service details')}</h1>
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
          {((formState?.changes?.type ?? product?.type) === 'service') && (
            <FieldRow>
              <SelectWrapper>
                <label>{t('DURATION', 'Duration')}</label>
                <Select
                  options={durationList}
                  className='select'
                  defaultValue={isCustom ? 'custom' : (formState?.changes?.duration ?? product?.duration)}
                  placeholder={t('SELECT_OPTION', 'Select an option')}
                  onChange={(value) => handleChangeSelect(value)}
                />
              </SelectWrapper>
              {isCustom && (
                <InputWrapper>
                  <label>{t('CUSTOM_DURATION', 'Custom duration')}</label>
                  <TimeContent>
                    <TimeBlock>
                      <select
                        value={curPreorderTime?.hour}
                        name='hour'
                        onChange={handleChangePreorderTime}
                      >
                        {
                          hours?.map((hour, i) => (
                            <option value={hour.hour} key={i}>{hour.text}</option>
                          ))
                        }
                      </select>
                      <span>:</span>
                      <select
                        value={curPreorderTime?.minute}
                        name='minute'
                        onChange={handleChangePreorderTime}
                      >
                        {minutes?.map((minute, i) => (
                          <option value={minute.minute} key={i}>{minute.text}</option>
                        ))}
                      </select>
                    </TimeBlock>
                  </TimeContent>
                </InputWrapper>
              )}
            </FieldRow>
          )}
          <InputWrapper>
            <label className='space-between'>
              <span>{t('PRICE', 'Price')}</span>
            </label>
            <Input
              name='price'
              placeholder={parsePrice(0)}
              defaultValue={product?.price}
              onChange={(e) => handleChangeFormState({ price: Number(e.target.value) })}
              disabled={formState.loading}
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
              placeholder={t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description')}
              defaultValue={product?.description}
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <PropertyOptionWrapper>
            <PropertyOption>
              <label>{t('FEATURED', 'Featured')}</label>
              <Switch
                defaultChecked={product?.featured || false}
                onChange={val => handleChangeFormState({ featured: val })}
              />
            </PropertyOption>
            <PropertyOption>
              <label>{t('UPSELLING', 'Upselling')}</label>
              <Switch
                defaultChecked={product?.upselling || false}
                onChange={val => handleChangeFormState({ upselling: val })}
              />
            </PropertyOption>
          </PropertyOptionWrapper>
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
      </Container>

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
