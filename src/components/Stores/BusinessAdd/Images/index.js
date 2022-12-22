import React, { useRef, useState } from 'react'
import { ExamineClick, useLanguage, DragAndDrop } from 'ordering-components-admin'
import { bytesConverter } from '../../../../utils'
import { Alert, Modal, ImageCrop } from '../../../Shared'
import { Image as DumyPhoto } from 'react-bootstrap-icons'
import {
  ImagesContainer,
  ImageFormGroup,
  LogoImage,
  BackgroundImage,
  UploadImageIconContainer,
  UploadImageIcon,
  ImgInfoWrapper
} from './styles'

export const Images = (props) => {
  const {
    formState,
    handleChangeSwtich
  } = props

  const [, t] = useLanguage()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const logoRef = useRef(null)
  const backgroundRef = useRef(null)

  const handleClickImage = (type) => {
    if (type === 'logo') {
      logoRef.current.click()
    }

    if (type === 'header') {
      backgroundRef.current.click()
    }
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

  const handleChangePhoto = (croppedImg) => {
    handleChangeSwtich(cropState?.name, croppedImg)
    setCropState({ name: null, data: null, open: false })
  }

  return (
    <>
      <ImagesContainer>
        <h2>{t('IMAGES', 'Images')}</h2>
        <ImageFormGroup>
          <LogoImage
            onClick={() => handleClickImage('logo')}
          >
            <ExamineClick
              onFiles={files => handleFiles(files, 'logo')}
              childRef={(e) => { logoRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files, 'logo')}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {formState?.changes?.logo && <img src={formState?.changes?.logo} alt='logo image' loading='lazy' />}
                <UploadImageIconContainer bgimage={formState?.changes?.logo}>
                  <UploadImageIcon>
                    <DumyPhoto />
                    <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </LogoImage>
          <ImgInfoWrapper>
            <h4>{t('BUSINESS_LOGO', 'Business Logo')}</h4>
            <p>512 x 512 px</p>
            <p>{t('FORMAT', 'Format')}: PNG, JPG</p>
          </ImgInfoWrapper>
        </ImageFormGroup>
        <ImageFormGroup>
          <BackgroundImage
            onClick={() => handleClickImage('header')}
          >
            <ExamineClick
              onFiles={files => handleFiles(files, 'header')}
              childRef={(e) => { backgroundRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files, 'header')}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {formState?.changes?.header && <img src={formState?.changes?.header} alt='backgrond image' loading='lazy' />}
                <UploadImageIconContainer bgimage={!!formState?.changes?.header}>
                  <UploadImageIcon>
                    <DumyPhoto />
                    <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </BackgroundImage>
          <ImgInfoWrapper>
            <h4>{t('HOMEPAGE_BACKGROUND', 'Business Header')}</h4>
            <p>1350 x 400 px</p>
            <p>{t('FORMAT', 'Format')}: PNG, JPG</p>
          </ImgInfoWrapper>
        </ImageFormGroup>
      </ImagesContainer>
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
