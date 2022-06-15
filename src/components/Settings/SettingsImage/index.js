import React, { useState, useRef } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, useUtils } from 'ordering-components-admin'
import { Alert, Modal, ImageCrop } from '../../Shared'
import { bytesConverter } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  ImageContainer,
  ConfigImage,
  UploadImageIconContainer,
  UploadImageIcon
} from './styles'

export const SettingsImage = (props) => {
  const {
    config,
    saveConfig
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [baseData, setBaseData] = useState(null)
  const configImageRef = useRef()
  const handleChangePhoto = (croppedImg) => {
    saveConfig(config.id, {
      image: croppedImg
    })
    setCropState({ ...cropState, data: croppedImg, open: false })
    setBaseData(croppedImg)
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
    }
  }

  return (
    <>
      <ImageContainer>
        <p>{config?.name}</p>
        <ConfigImage
          onClick={() => configImageRef.current.click()}
        >
          <ExamineClick
            onFiles={files => handleFiles(files)}
            childRef={(e) => { configImageRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files)}
              accept='image/png, image/jpeg, image/jpg'
            >
              {
                baseData
                  ? (<img src={baseData} alt='config image' loading='lazy' />)
                  : config?.value && (<img src={optimizeImage(config?.value, 'h_200,c_limit')} alt='config image' loading='lazy' />)
              }
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                  <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </ConfigImage>
      </ImageContainer>
      <Alert
        width='700px'
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
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </>
  )
}
