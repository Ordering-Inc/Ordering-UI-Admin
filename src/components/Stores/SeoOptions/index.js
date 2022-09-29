import React, { useRef, useState, useEffect } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, useUtils } from 'ordering-components-admin'
import { Button, Input, TextArea, Switch } from '../../../styles'
import { Alert, Modal, ImageCrop } from '../../Shared'
import { bytesConverter } from '../../../utils'
import Skeleton from 'react-loading-skeleton'
import { Camera, Image as ImageIcon } from 'react-bootstrap-icons'
import {
  Container,
  WrapperShortDescription,
  WrapperDescription,
  SEOImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CameraWrapper,
  WrapperImage,
  ActionButtons,
  UseSameInfoWrapper
} from './styles'

export const SeoOptions = (props) => {
  const {
    data,
    formState,
    setFormState,
    handleUpdateClick,
    handleProductCategoryChangeInput,
    handlechangeImageProductCategory,
    isBusinessSeo,
    isProductSeo,
    isCategorySeo
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const productImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [isSameInfo, setIsSameInfo] = useState(false)

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  const handleClickImage = () => {
    productImageInputRef.current.click()
  }
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          seo_image: optimizeImage(reader.result, 'h_200,c_limit')
        }
      })
    }
    reader.onerror = error => console.log(error)
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
        setCropState({ name: 'seo_image', data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)

      if (isBusinessSeo) handlechangeImage(files[0])
      else handlechangeImageProductCategory(files[0], 'seo_image')
    }
  }

  const handleChangePhoto = (croppedImg) => {
    if (isBusinessSeo) {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          [cropState?.name]: croppedImg
        }
      })
    } else {
      setFormState({ [cropState?.name]: croppedImg })
    }
    setCropState({ name: null, data: null, open: false })
  }

  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: { ...formState?.changes, [e.target.name]: e.target.value }
    })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!isSameInfo || !isProductSeo) return
    setFormState({
      seo_title: data?.name,
      seo_description: data?.description
    })
    titleRef.current.value = data?.name
    descriptionRef.current.value = data?.description
  }, [isSameInfo, isProductSeo])

  return (
    <>
      <Container>
        <WrapperImage>
          <label>{t('SEO_IMAGE', 'SEO Image')}</label>
          <SEOImage
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
                  : ((!formState.changes?.seo_image || formState.result?.result === 'Network Error' || formState.result.error)
                    ? data?.seo_image &&
                      (<img src={optimizeImage(data?.seo_image, 'h_200,c_limit')} alt='business image' loading='lazy' />)
                    : formState?.changes?.seo_image &&
                      <img src={formState?.changes?.seo_image} alt='business image' loading='lazy' />
                  )}
                <UploadImageIconContainer
                  isImage={formState?.changes?.seo_image || data.seo_image}
                >
                  <CameraWrapper>
                    <Camera />
                  </CameraWrapper>
                  <UploadImageIcon>
                    <ImageIcon />
                    <span>{t('DRAG_DROP', 'Drag and Drop')}</span>
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </SEOImage>
        </WrapperImage>
        {isProductSeo && (
          <UseSameInfoWrapper>
            <label>{t('USE_SAME_PRODUCT_INFORMATION', 'Use the same as main product information')}</label>
            <Switch
              defaultChecked={isSameInfo || false}
              onChange={val => setIsSameInfo(val)}
            />
          </UseSameInfoWrapper>
        )}
        <WrapperShortDescription>
          <label>{t('SEO_TITLE', 'SEO Title')}</label>
          <Input
            name='seo_title'
            ref={titleRef}
            defaultValue={
              formState?.result?.result
                ? formState?.result?.result?.seo_title
                : formState?.changes?.seo_title ?? data?.seo_title ?? ''
            }
            onChange={(e) => {
              if (isBusinessSeo) handleChangeInput(e)
              if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e)
            }}
            placeholder={t('SEO_TITLE', 'SEO Title')}
          />
        </WrapperShortDescription>
        <WrapperDescription>
          <label>{t('SEO_DESCRIPTION', 'SEO Description')}</label>
          <TextArea
            name='seo_description'
            ref={descriptionRef}
            rows={4}
            defaultValue={
              formState?.result?.result
                ? formState?.result?.result?.seo_description
                : formState?.changes?.seo_description ?? data?.seo_description ?? ''
            }
            onChange={(e) => {
              if (isBusinessSeo) handleChangeInput(e)
              if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e)
            }}
            placeholder={t('SEO_DESCRIPTION', 'SEO Description')}
          />
        </WrapperDescription>
        {isProductSeo && (
          <WrapperDescription>
            <label>{t('SEO_KEYWORDS', 'SEO Keywords')}</label>
            <Input
              name='seo_keywords'
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.seo_keywords
                  : formState?.changes?.seo_keywords ?? data?.seo_keywords ?? ''
              }
              onChange={(e) => handleProductCategoryChangeInput(e)}
              placeholder={t('SEO_KEYWORDS', 'SEO Keywords')}
            />
          </WrapperDescription>
        )}
        <ActionButtons>
          <Button
            color='primary'
            borderRadius='5px'
            disabled={formState.loading || Object.keys(formState?.changes).length === 0}
            onClick={() => handleUpdateClick()}
          >
            {formState.loading ? t('UPDATING', 'Updating') : t('SAVE', 'Save')}
          </Button>
        </ActionButtons>
      </Container>
      <Alert
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
