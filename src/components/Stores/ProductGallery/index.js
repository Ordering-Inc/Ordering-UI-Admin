import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  ProductGallery as ProductGalleryController
} from 'ordering-components-admin'
import { Image as ImageIcon, PlusCircle, ThreeDotsVertical } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { bytesConverter } from '../../../utils'
import { Alert, Confirm, Modal, ImageCrop } from '../../Shared'
import { IconButton } from '../../../styles'

import {
  ProdcutGalleryContainer,
  GalleryImagesContainer,
  GalleryItem,
  GalleryImage,
  UploadImageIconContainer,
  GalleryItemBottom,
  DropDownWrapper
} from './styles'

const ProductGalleryUI = (props) => {
  const {
    productGalleryState,
    changesState,
    handleChangeImage,
    handleChangeInput,
    handleAddGalleryProduct,
    handleDeteteProductGalleryItem,
    handleChangeItem
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [inputRef, setInputRef] = useState(null)
  const inputAddRef = useRef()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleClickImage = (idName) => {
    document.getElementById(idName).click()
  }

  const handleFiles = (files, optionId) => {
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
        setCropState({ name: 'file', data: reader.result, open: true, id: optionId })
      }
      reader.onerror = error => console.log(error)

      handleChangeImage(files[0], optionId)
    }
    if (!optionId && inputRef?.value) inputRef.value = null
  }

  const handleDeleteClick = (itemId, type) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_IMAGE', 'Are you sure that you want to delete this image?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeteteProductGalleryItem(itemId, type)
      }
    })
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg }, cropState?.id)
    setCropState({ name: null, data: null, open: false })
  }

  useEffect(() => {
    if (!changesState?.error) return
    setAlertState({
      open: true,
      content: changesState?.error
    })
  }, [changesState?.error])

  useEffect(() => {
    if (Object.entries(changesState?.changes).length === 0 && inputAddRef?.current) inputAddRef.current.value = ''
  }, [changesState?.changes])

  return (
    <>
      <ProdcutGalleryContainer>
        <h1>{t('PRODUCT_IMAGES', 'Product images')}</h1>
        <GalleryImagesContainer>
          {productGalleryState?.loading ? (
            [...Array(5).keys()].map(i => (
              <GalleryItem key={i}>
                <GalleryImage>
                  <Skeleton width={130} height={130} style={{ bordeRadius: '8px' }} />
                </GalleryImage>
                <GalleryItemBottom>
                  <Skeleton width={90} />
                  <Skeleton width={10} />
                </GalleryItemBottom>
              </GalleryItem>
            ))
          ) : (
            <>
              {productGalleryState?.photos.map(photo => (
                <GalleryItem key={photo.id}>
                  <GalleryImage
                    onClick={() => handleClickImage(`gallery_image_${photo.id}`)}
                  >
                    <ExamineClick
                      onFiles={files => handleFiles(files, photo.id)}
                      childId={`gallery_image_${photo.id}`}
                      accept='image/png, image/jpeg, image/jpg'
                      disabled={changesState.loading || productGalleryState.loading}
                    >
                      <DragAndDrop
                        onDrop={dataTransfer => handleFiles(dataTransfer.files, photo.id)}
                        accept='image/png, image/jpeg, image/jpg'
                        disabled={changesState.loading || productGalleryState.loading}
                      >
                        {
                          (changesState?.changes?.file && changesState?.itemId === photo.id)
                            ? (<img src={changesState?.changes?.file} alt='option image' loading='lazy' />)
                            : photo?.file && (<img src={photo?.file} alt='option image' loading='lazy' />)
                        }
                        <UploadImageIconContainer>
                          <ImageIcon />
                          <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
                        </UploadImageIconContainer>
                      </DragAndDrop>
                    </ExamineClick>
                  </GalleryImage>
                  <GalleryItemBottom>
                    <input
                      name='title'
                      defaultValue={photo?.title || ''}
                      onChange={e => handleChangeInput(e, photo.id)}
                    />
                    <DropDownWrapper>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<ThreeDotsVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          onClick={() => handleDeleteClick(photo.id, photo.type)}
                        >
                          {t('DELETE', 'Delete')}
                        </Dropdown.Item>
                      </DropdownButton>
                    </DropDownWrapper>
                  </GalleryItemBottom>
                </GalleryItem>
              ))}
              <GalleryItem>
                <GalleryImage
                  onClick={() => handleClickImage('gallery_image_add')}
                >
                  <ExamineClick
                    onFiles={files => handleFiles(files, null)}
                    childId='gallery_image_add'
                    accept='image/png, image/jpeg, image/jpg'
                    disabled={changesState.loading || productGalleryState.loading}
                    childRef={e => setInputRef(e)}
                  >
                    <DragAndDrop
                      onDrop={dataTransfer => handleFiles(dataTransfer.files, null)}
                      accept='image/png, image/jpeg, image/jpg'
                      disabled={changesState.loading || productGalleryState.loading}
                    >
                      {(changesState?.changes?.file && changesState?.itemId === null) && (
                        <img src={changesState?.changes?.file} alt='option image' loading='lazy' />
                      )}
                      <UploadImageIconContainer>
                        <PlusCircle />
                        <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
                      </UploadImageIconContainer>
                    </DragAndDrop>
                  </ExamineClick>
                </GalleryImage>
                <GalleryItemBottom isAdd>
                  <input
                    name='title'
                    ref={inputAddRef}
                    placeholder={t('TITLE', 'Title')}
                    onChange={e => handleChangeInput(e, null)}
                  />
                  <IconButton
                    color='black'
                    onClick={() => handleAddGalleryProduct(1)}
                    disabled={changesState.loading || productGalleryState.loading}
                  >
                    <PlusCircle />
                  </IconButton>
                </GalleryItemBottom>
              </GalleryItem>
            </>
          )}
        </GalleryImagesContainer>
      </ProdcutGalleryContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
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
        onRemove={() => setCropState({ ...cropState, open: false })}
        className='ordering-img-crop'
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </>
  )
}

export const ProductGallery = (props) => {
  const productGalleryProps = {
    ...props,
    UIComponent: ProductGalleryUI
  }
  return <ProductGalleryController {...productGalleryProps} />
}
