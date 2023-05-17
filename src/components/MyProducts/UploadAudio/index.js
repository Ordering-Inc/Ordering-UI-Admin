import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, ExamineClick, DragAndDrop, UploadAudio as UploadAudioController } from 'ordering-components-admin'
import { CloudUploadFill, FileMusicFill } from 'react-bootstrap-icons'
import { Button, Input } from '../../../styles'
import { bytesConverter } from '../../../utils'
import { Alert } from '../../Shared'
import {
  Container,
  FileUploadBox,
  UploadIconBox,
  Or,
  FormControl,
  ButtonGroup,
  PdfIconBox
} from './styles'
import Skeleton from 'react-loading-skeleton'

const UploadAudioUI = (props) => {
  const { onClose, formState, changeFormState, handleUploadAudio } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const fileRef = useRef(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type
      if (type?.split('/')[0] !== 'audio' && type !== 'audio/mpeg' && type !== 'audio/ogg') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_AUDIO', 'Only audio files can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 512) {
        setAlertState({
          open: true,
          content: [t('FILE_MAXIMUM_SIZE', 'The maximum file size is 500 kilobytes')]
        })
        return
      }
      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        changeFormState({ file: reader.result, type: type === 'application/pdf' ? 'pdf' : 'image' })
      }
      reader.onerror = error => console.log(error)
    }
  }

  const handleSendRequest = () => {
    if (formState?.changes?.file || formState?.changes?.url) {
      handleUploadAudio()
      return
    }
    if (!formState?.changes?.file) {
      setAlertState({
        open: true,
        content: t('AUDIO_FILE_IS_REQUIRED', 'Audio file is required!')
      })
      return
    }
    if (!formState?.changes?.url) {
      setAlertState({
        open: true,
        content: t('URL_IS_REQUIRED', 'URL is required')
      })
    }
  }

  useEffect(() => {
    if (formState?.error) {
      setAlertState({
        open: true,
        content: formState.error
      })
    }
  }, [formState?.error])

  return (
    <>
      <Container>
        <h2>{t('UPLOAD_YOUR_CUSTOM_SOUNDS', 'Upload your custom sounds')}</h2>
        <p>{t('UPLOAD_CUSTOM_SOUNDS_DESC', 'Click to upload your custom sounds or share your custom sounds link')}</p>
        <FileUploadBox onClick={() => fileRef.current.click()}>
          {formState?.loading ? (
            <Skeleton height={150} />
          ) : (
            <ExamineClick
              onFiles={files => handleFiles(files)}
              childRef={(e) => { fileRef.current = e }}
              accept='.mp3, .aac, .ogg'
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                accept='.mp3, .aac, .ogg'
              >
                {formState?.changes?.file && (
                  <PdfIconBox><FileMusicFill /></PdfIconBox>
                )}
                <UploadIconBox>
                  <div>
                    <CloudUploadFill />
                    <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
                  </div>
                </UploadIconBox>
              </DragAndDrop>
            </ExamineClick>
          )}
        </FileUploadBox>
        <Or>{t('OR', 'Or')}</Or>
        <FormControl>
          <label>{t('SHARE_CUSTOM_SOUNDS_LINK', 'Share your custom sounds link')}</label>
          {formState?.loading ? (
            <Skeleton height={44} />
          ) : (
            <Input
              placeholder={t('URL', 'URL')}
              defaultValue={formState?.changes?.url}
              onChange={(e) => changeFormState({ url: e.target.value })}
            />
          )}
        </FormControl>
        <ButtonGroup>
          <Button
            color='primary'
            outline
            onClick={onClose}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button
            color='primary'
            onClick={() => handleSendRequest()}
          >
            {t('UPLOAD', 'Upload')}
          </Button>
        </ButtonGroup>
      </Container>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const UploadAudio = (props) => {
  const uploadAudioProps = {
    ...props,
    UIComponent: UploadAudioUI
  }
  return <UploadAudioController {...uploadAudioProps} />
}
