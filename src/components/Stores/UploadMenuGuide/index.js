import React, { useState, useRef } from 'react'
import { useLanguage, ExamineClick, DragAndDrop, UploadMenu } from 'ordering-components-admin'
import { CloudUploadFill, FileEarmarkPdfFill } from 'react-bootstrap-icons'
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

const UploadMenuGuideUI = (props) => {
  const { handleBack, formState, changeFormState, handleUploadMenu } = props

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
      if (type?.split('/')[0] !== 'image' && type !== 'application/pdf') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES_OR_PDF', 'Only images or pdf can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('FILE_MAXIMUM_SIZE', 'The maximum file size is 2 megabytes')]
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
      handleUploadMenu()
      return
    }
    if (!formState?.changes?.file) {
      setAlertState({
        open: true,
        content: t('IMAGE_OR_PDF_IS_REQUIRED', 'Image or pdf file is required!')
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

  return (
    <>
      <Container>
        <h2>{t('UPLOAD_YOUR_MENU', 'Upload your menu')}</h2>
        <p>{t('UPLOAD_YOUR_MENU_DESC', 'Click to upload your menu (PDF or image file) or share your menu link (For website or another online ordering system)')}</p>
        <FileUploadBox onClick={() => fileRef.current.click()}>
          <ExamineClick
            onFiles={files => handleFiles(files)}
            childRef={(e) => { fileRef.current = e }}
            accept='image/png, image/jpeg, image/jpg, application/pdf'
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files)}
              accept='image/png, image/jpeg, image/jpg, application/pdf'
            >
              {formState?.changes?.file && (
                formState?.changes?.type === 'pdf'
                  ? <PdfIconBox><FileEarmarkPdfFill /></PdfIconBox>
                  : <img src={formState?.changes?.file} alt='file' loading='lazy' />
              )}
              <UploadIconBox>
                <div>
                  <CloudUploadFill />
                  <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
                </div>
              </UploadIconBox>
            </DragAndDrop>
          </ExamineClick>
        </FileUploadBox>
        <Or>{t('OR', 'Or')}</Or>
        <FormControl>
          <label>{t('SHARE_YOUR_MENU_LINK', 'Share your menu link (From your webiste or another online ordering system)')}</label>
          <Input
            placeholder={t('URL', 'URL')}
            defaultValue={formState?.changes?.url}
            onChange={(e) => changeFormState({ url: e.target.value })}
          />
        </FormControl>
        <ButtonGroup>
          <Button
            color='primary'
            outline
            onClick={handleBack}
          >
            {t('BACK', 'Back')}
          </Button>
          <Button
            color='primary'
            onClick={() => handleSendRequest()}
          >
            {t('SEND_REQUEST', 'Send Request')}
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

export const UploadMenuGuide = (props) => {
  const uploadMenuGuideProps = {
    ...props,
    UIComponent: UploadMenuGuideUI
  }
  return <UploadMenu {...uploadMenuGuideProps} />
}
