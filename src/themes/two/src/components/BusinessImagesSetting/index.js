import React, { useState, useEffect, useRef } from 'react'
import { DragAndDrop, ExamineClick, useLanguage, BusinessGallery as BusinessGalleryController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { bytesConverter } from '../../../../../utils'
import { Alert, Confirm } from '../Confirm'

import { AutoScroll } from '../AutoScroll'
import BiImage from '@meronex/icons/bi/BiImage'
import MdClose from '@meronex/icons/md/MdClose'

import {
  Container,
  BusinessImagesContainer,
  InnerContainer,
  Tab,
  BusinessNewImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  DeleteButton
} from './styles'

const BusinessImagesSettingUI = (props) => {
  const {
    businessPhotos,
    formState,
    handlechangeImage,
    cleanFormState,
    handleUpdateBusinessGallery,
    handleDeleteBusinessGallery
  } = props

  const [, t] = useLanguage()

  const imageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleClickImage = () => {
    imageInputRef.current.click()
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

  const handleDeleteClick = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_IMAGE', 'Are you sure that you want to delete this image?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteBusinessGallery(id)
      }
    })
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
  }, [formState])

  useEffect(() => {
    if (formState.changes?.file) {
      handleUpdateBusinessGallery()
    }
  }, [formState.changes?.file])

  useEffect(() => {
    cleanFormState({ changes: {} })
  }, [])
  return (
    <>
      <Container>
        <BusinessNewImage
          onClick={() => handleClickImage('header')}
        >
          <ExamineClick
            onFiles={files => handleFiles(files, 'header')}
            childRef={(e) => { imageInputRef.current = e }}
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
                : formState?.changes?.file &&
                  <img src={formState?.changes?.file} alt='header image' loading='lazy' />}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                  <span>{t('DRAG_DROP', 'Darg and Drop')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </BusinessNewImage>
        <BusinessImagesContainer>
          <InnerContainer>
            <AutoScroll innerScroll scrollId='business_images'>
              {businessPhotos.map(photo => (
                <Tab
                  key={photo.id}
                >
                  <img
                    src={photo.file}
                  />
                  <DeleteButton
                    onClick={() => handleDeleteClick(photo.id)}
                  >
                    <MdClose />
                  </DeleteButton>
                </Tab>
              ))}
            </AutoScroll>
          </InnerContainer>
        </BusinessImagesContainer>
      </Container>
      <Alert
        title={t('BUSINESS', 'Business')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('ORDERING', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const BusinessImagesSetting = (props) => {
  const businessGalleryProps = {
    ...props,
    UIComponent: BusinessImagesSettingUI
  }
  return <BusinessGalleryController {...businessGalleryProps} />
}
