import React, { useState, useEffect } from 'react'
import {
  ExamineClick,
  DragAndDrop,
  useLanguage
} from 'ordering-components-admin'
import { CardImage, PlusCircle, XCircleFill } from 'react-bootstrap-icons'
import { Alert, Modal, ImageCrop, Confirm } from '../../Shared'
import { bytesConverter } from '../../../utils'
import {
  ImagesContainer,
  BannerImage,
  UploadImageIconContainer,
  DeleteButtonWrapper
} from './styles'

export const BannerImages = (props) => {
  const {
    aspectRatio,
    bannerItemsState,
    changesState,
    handleChangeItem,
    handleAddBannerItem,
    handleUpdateBannerItem,
    handleDeleteBannerItem
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleClickImage = (idName, e) => {
    const isInvalid = e.target.closest('.banner-delete')
    if (isInvalid) return
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

  const onDeleteImage = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('IMAGE', 'Image')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteBannerItem(id)
      }
    })
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
          onClick={e => handleClickImage(`banner_image_${image.id}`, e)}
        >
          <DeleteButtonWrapper
            className='banner-delete'
            onClick={() => onDeleteImage(image.id)}
          >
            <XCircleFill />
          </DeleteButtonWrapper>
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
        onClick={e => handleClickImage('banner_image_add', e)}
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
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
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
          aspectRatio={aspectRatio}
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </ImagesContainer>
  )
}
