import React, { useEffect, useRef, useState } from 'react'
import { useLanguage, ExamineClick, DragAndDrop } from 'ordering-components-admin'
import { bytesConverter } from '../../../utils'
import { Image as DumyPhoto } from 'react-bootstrap-icons'
import { ImageCrop, Modal, Alert } from '../../Shared'
import {
  ImageBoxContainer,
  UploadImageIconContainer,
  UploadImageIcon,
  ImgInfoWrapper
} from './styles'

export const ImageBox = (props) => {
  const { isBig, title, ratio, photo, path, handleChangePhoto, themeId } = props

  const [, t] = useLanguage()

  const imageRef = useRef()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [picture, setPicture] = useState('')

  const handleChangeImage = (croppedImg) => {
    handleChangePhoto(croppedImg, path)
    setPicture(croppedImg)
    setCropState({ name: null, data: null, open: false })
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
      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: name, data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!photo) return
    setPicture(photo)
  }, [photo])

  return (
    <div>
      <ImageBoxContainer isBig={isBig} onClick={() => imageRef.current.click()}>
        <ExamineClick
          onFiles={files => handleFiles(files, 'logo')}
          childRef={(e) => { imageRef.current = e }}
          accept='image/png, image/jpeg, image/jpg'
        >
          <DragAndDrop
            onDrop={dataTransfer => handleFiles(dataTransfer.files, 'logo')}
            accept='image/png, image/jpeg, image/jpg'
          >
            {picture && <img src={picture} alt='logo image' loading='lazy' />}
            <UploadImageIconContainer bgimage={picture}>
              <UploadImageIcon>
                <DumyPhoto />
                <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
              </UploadImageIcon>
            </UploadImageIconContainer>
          </DragAndDrop>
        </ExamineClick>
      </ImageBoxContainer>
      <ImgInfoWrapper>
        <h4>{title}</h4>
        <p>{ratio}</p>
        <p>{t('FORMAT', 'Format')}: PNG</p>
      </ImgInfoWrapper>
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onRemove={() => setCropState({ ...cropState, open: false })}
      >
        <ImageCrop
          useCloudinaryUrl
          themeId={themeId}
          photo={cropState?.data}
          handleChangePhoto={handleChangeImage}
        />
      </Modal>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </div>
  )
}
