import React, { useState, useEffect } from 'react'
import {
  ExamineClick,
  DragAndDrop,
  useLanguage
} from 'ordering-components-admin'
import { CardImage, PlusCircle } from 'react-bootstrap-icons'
import { Alert, Modal, ImageCrop } from '../../Shared'
import { bytesConverter } from '../../../utils'
import {
  ImagesContainer,
  BannerImage,
  UploadImageIconContainer
} from './styles'

export const BannerImages = (props) => {
  const {
    bannerItemsState,
    changesState,
    handleChangeItem,
    handleAddBannerItem,
    handleUpdateBannerItem
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const handleClickImage = (idName) => {
    document.getElementById(idName).click()
  }

  const handleFiles = (files, itemId) => {
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
        setCropState({ name: 'image', data: reader.result, open: true, id: itemId })
      }
      reader.onerror = error => console.log(error)
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg, type: 'image' }, cropState?.id)
    if (cropState?.id) {
      handleUpdateBannerItem({ [cropState?.name]: croppedImg, type: 'image' }, cropState.id)
    } else {
      handleAddBannerItem({ [cropState?.name]: croppedImg, type: 'image' })
    }
    setCropState({ name: null, data: null, open: false })
  }

  useEffect(() => {
    if (!changesState?.error) return
    setAlertState({
      open: true,
      content: changesState?.error
    })
  }, [changesState?.error])

  return (
    <ImagesContainer>
      {bannerItemsState.images.map(image => (
        <BannerImage
          key={image.id}
          onClick={() => handleClickImage(`banner_image_${image.id}`)}
        >
          <ExamineClick
            onFiles={files => handleFiles(files, image.id)}
            childId={`banner_image_${image.id}`}
            accept='image/png, image/jpeg, image/jpg'
            disabled={changesState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files, image.id)}
              accept='image/png, image/jpeg, image/jpg'
              disabled={changesState.loading}
            >
              {
                (changesState?.changes?.file && changesState?.itemId === image.id)
                  ? (<img src={changesState?.changes?.image} alt='item image' loading='lazy' />)
                  : image?.url && (<img src={image?.url} alt='item image' loading='lazy' />)
              }
              <UploadImageIconContainer>
                <CardImage />
                <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </BannerImage>
      ))}
      <BannerImage
        onClick={() => handleClickImage('banner_image_add')}
      >
        <ExamineClick
          onFiles={files => handleFiles(files, null)}
          childId='banner_image_add'
          accept='image/png, image/jpeg, image/jpg'
          disabled={changesState.loading}
        >
          <DragAndDrop
            onDrop={dataTransfer => handleFiles(dataTransfer.files, null)}
            accept='image/png, image/jpeg, image/jpg'
            disabled={changesState.loading}
          >
            {(changesState?.changes?.image && changesState?.itemId === null) && (
              <img src={changesState?.changes?.image} alt='item image' loading='lazy' />
            )}
            <UploadImageIconContainer>
              <PlusCircle />
              <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
            </UploadImageIconContainer>
          </DragAndDrop>
        </ExamineClick>
      </BannerImage>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onClose={() => setCropState({ ...cropState, open: false })}
        className='ordering-img-crop'
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </ImagesContainer>
  )
}
