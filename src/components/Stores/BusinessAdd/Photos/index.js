import React, { useRef, useState } from 'react'
import { useLanguage, ExamineClick, DragAndDrop, useUtils } from 'ordering-components-admin'
import { Image as DumyPhoto, X as CloseIcon } from 'react-bootstrap-icons'
import { Alert, Modal, ImageCrop, DragScroll } from '../../../Shared'
import { bytesConverter } from '../../../../utils'
import {
  PhotosContainer,
  ContentWrapper,
  UploadImageContainer,
  UploadImageIconContainer,
  UploadImageIcon,
  GalleryList,
  Tab,
  DeleteButton
} from './styles'

export const Photos = (props) => {
  const { gallery, handleChangeGallery } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ data: null, open: false })

  const imageRef = useRef()

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleClickImage = () => {
    imageRef.current.click()
  }

  const handleChangePhoto = (croppedImg) => {
    const uniqueId = getUniqueId()
    const updatedGallery = JSON.parse(JSON.stringify([...gallery, { file: croppedImg, type: 1, temp_id: uniqueId }]))
    handleChangeGallery(updatedGallery)
    setCropState({ data: null, open: false })
  }

  const handleDeleteGalleryImage = (id) => {
    const updatedGallery = gallery.filter(item => item.temp_id !== id)
    handleChangeGallery(updatedGallery)
  }

  const getUniqueId = () => {
    const dateString = Date.now().toString(36)
    const randomness = Math.random().toString(36).substr(2)
    return dateString + randomness
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
        setCropState({ data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)
    }
  }

  return (
    <>
      <PhotosContainer>
        <h2>{t('PHOTOS', 'Photos')}</h2>
        <ContentWrapper>
          <UploadImageContainer
            onClick={() => handleClickImage()}
          >
            <ExamineClick
              onFiles={files => handleFiles(files, 'header')}
              childRef={(e) => { imageRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files, 'header')}
                accept='image/png, image/jpeg, image/jpg'
              >
                <UploadImageIconContainer>
                  <UploadImageIcon>
                    <DumyPhoto />
                    <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </UploadImageContainer>
          {gallery?.length > 0 && (
            <GalleryList>
              <DragScroll>
                {gallery.map(photo => (
                  <Tab
                    key={photo.temp_id}
                  >
                    <img
                      src={optimizeImage(photo.file, 'h_200,c_limit')}
                    />
                    <DeleteButton
                      onClick={() => handleDeleteGalleryImage(photo.temp_id)}
                    >
                      <CloseIcon />
                    </DeleteButton>
                  </Tab>
                ))}
              </DragScroll>
            </GalleryList>
          )}
        </ContentWrapper>
      </PhotosContainer>
      <Alert
        title={t('ORDERING', 'Ordering')}
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
