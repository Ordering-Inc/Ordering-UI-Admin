import React, { useState, useEffect, useRef } from 'react'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import {
  DragAndDrop,
  useLanguage,
  BatchImageForm as BatchImageFormController
} from 'ordering-components-admin'
import { bytesConverter } from '../../../utils'
import { Alert } from '../../Shared'
import { Button } from '../../../styles'
import {
  Container,
  Title,
  UploadConditions,
  ConditionTitle,
  Conditions,
  BatchUploadForm,
  FormContainer,
  ImageIssue,
  BatchImages,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  ImageInput,
  Action,
  IssueBoard,
  UploadedImages
} from './styles'

const BatchImageFormUI = (props) => {
  const {
    onClose,
    formState,
    handleUploadImages,
    cleanFormState,
    products,
    updateProduct
  } = props
  const [, t] = useLanguage()
  const inputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [productIds, setProductIds] = useState([])
  const [invalidImages, setInvalidImages] = useState([])

  const uploadConditions = [
    t('BATCH_IMAGE_UPLOAD_CONDITION_1', 'The images must have a valid PNG or JPG format.'),
    t('BATCH_IMAGE_UPLOAD_CONDITION_2', 'The name of the image must be the product ID.'),
    t('BATCH_IMAGE_UPLOAD_CONDITION_3', 'You can see the product ID in the spreadsheet mode.'),
    t('BATCH_IMAGE_UPLOAD_CONDITION_4', 'Don’t close or refresh the page.')
  ]

  const handleClick = (e) => {
    inputRef.current.click()
  }

  const validImages = (files) => {
    const invalidfileNames = []
    const validfiles = []
    if (files && files.length > 0) {
      Object.values(files).forEach(f => {
        const type = f.type.split('/')[0]
        if (type !== 'image') {
          setAlertState({
            open: true,
            content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
          })
          invalidfileNames.push(f?.name)
          return
        }
        if (bytesConverter(f.size) > 2048) {
          setAlertState({
            open: true,
            content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
          })
          invalidfileNames.push(f?.name)
          return
        }
        const nameWithoutExtension = f?.name.split('.')[0]
        if (productIds.indexOf(parseInt(nameWithoutExtension)) > -1) {
          validfiles.push(f)
        } else {
          invalidfileNames.push(f?.name)
        }
      })
    }
    setInvalidImages(invalidfileNames)
    return validfiles
  }

  const handleFiles = (files) => {
    const readyFiles = validImages(files)
    handleUploadImages(readyFiles)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    cleanFormState && cleanFormState({ result: { error: false } })
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    handleFiles(e.target.files)
  }

  const handleSubmit = () => {
    event.preventDefault()
    if (formState?.photos.length > 0 && updateProduct) {
      updateProduct()
    }
  }

  useEffect(() => {
    if (products && products.length > 0) {
      const _productIds = []
      products.map(p => {
        _productIds.push(p?.id)
      })
      setProductIds(_productIds)
    }
  }, [products])

  useEffect(() => {
    if (formState?.endPoint) {
      onClose()
    }
  }, [formState])

  return (
    <>
      <Container>
        <Title>
          <h2>{t('BATCH_UPLOADE_FORM_TITLE', 'Upload images in batch')}</h2>
        </Title>
        <UploadConditions>
          <ConditionTitle><b>{t('BATCH_UPLOAD_CONDITION_TITLE', 'Here you can upload multiple product images.')}</b></ConditionTitle>
          <Conditions>
            {uploadConditions && uploadConditions.length > 0 && uploadConditions.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </Conditions>
        </UploadConditions>
        <FormContainer>
          <BatchUploadForm>
            <ImageInput>
              <BatchImages onClick={handleClick}>
                <input
                  type='file'
                  multiple
                  name='imagesArray'
                  ref={(e) => {
                    inputRef.current = e
                  }}
                  onChange={(e) => handleImageChange(e)}
                  onClick={e => e.stopPropagation()}
                  accept='image/png, image/jpeg, image/jpg'
                  disabled={formState.loading}
                  id='batch-images'
                  style={{ display: 'none' }}
                />
                <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading} className='multiple-image-uploader'>
                  {
                    formState.loading
                      ? (
                        <SkeletonWrapper>
                          <div className='loader-wrapper'>
                            <div className='loader' />
                          </div>
                          <p>{t('UPLODING', 'Uploading')}{'...'}</p>
                        </SkeletonWrapper>
                      )
                      : (
                        <UploadedImages>
                          {formState?.photos && formState?.photos.length > 0 && formState?.photos.map(photo => (
                            <img key={photo?.name} src={photo?.base64} alt='' loading='lazy' />
                          ))}
                        </UploadedImages>
                      )
                  }
                  <UploadImageIconContainer>
                    <UploadImageIcon>
                      {!formState.loading && formState?.photos.length === 0 && (
                        <>
                          <BsCardImage />
                          <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
                        </>
                      )}
                    </UploadImageIcon>
                  </UploadImageIconContainer>
                </DragAndDrop>
              </BatchImages>
            </ImageInput>
            <Action>
              <Button
                borderRadius='8px'
                color='primary'
                disabled={formState?.photos.length === 0 || formState?.loading}
                onClick={() => handleSubmit()}
              >
                {t('SAVE', 'Save')}
              </Button>
            </Action>
          </BatchUploadForm>
          <ImageIssue>
            <p><b>Issues with images:</b></p>
            {invalidImages.length > 0 ? (
              <IssueBoard>
                <ul>
                  {invalidImages.map((invalidImage, i) => (
                    <li key={i}>{invalidImage}</li>
                  ))}
                </ul>
              </IssueBoard>
            ) : (
              <IssueBoard emptyboard />
            )}
          </ImageIssue>
        </FormContainer>
        <Alert
          title={t('PROFILE', 'Profile')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </Container>
    </>
  )
}

export const BatchImageForm = (props) => {
  const batchImageFormProps = {
    ...props,
    UIComponent: BatchImageFormUI
  }
  return (
    <BatchImageFormController {...batchImageFormProps} />
  )
}
