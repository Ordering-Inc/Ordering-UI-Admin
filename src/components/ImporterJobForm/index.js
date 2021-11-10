import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { XLg } from 'react-bootstrap-icons'
import { useLanguage, DragAndDrop, ExamineClick, ImporterJobForm as ImporterJobFormController } from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../utils'
import { Input } from '../../styles/Inputs'
import { Button, IconButton } from '../../styles/Buttons'
import {
  FormWrapper,
  Header,
  FormInput,
  InputWrapper,
  ActionsForm,
  UploadCsvInputContainer,
  CloseButtonWrapper
} from './styles'

const ImporterJobFormUI = (props) => {
  const {
    selectedImporter,
    formState,
    fileState,
    handleChangeInput,
    handleUploadCsv,
    handleCreateImporterJob,
    onClose
  } = props
  const [, t] = useLanguage()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const headerCsvInputRef = useRef(null)
  const [hasImportedFile, setImportedFile] = useState(false)

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type
      if (type !== 'application/vnd.ms-excel' && type !== 'text/csv') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_CSV', 'Only CSV can be accepted')]
        })
        return
      }
      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('MAXIMUM_SIZE', 'The maximum file size is 2 megabytes')]
        })
        return
      }
      handleUploadCsv(files[0])
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0 || hasImportedFile) {
      handleCreateImporterJob(selectedImporter?.id)
    }
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if (formState.result?.error && Object.keys(formState.result).length > 0) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
    if (!formState.result?.error && formState.result?.result?.id) {
      onClose()
    }
  }, [formState.result])

  useEffect(() => {
    if (fileState?.fileName) {
      setImportedFile(true)
    }
  }, [fileState])

  return (
    <>
      <FormWrapper>
        <Header>
          {t('IMPORT', 'Import')}
          <CloseButtonWrapper>
            <IconButton
              color='black'
              onClick={() => onClose()}
            >
              <XLg />
            </IconButton>
          </CloseButtonWrapper>
        </Header>
        <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
          <InputWrapper>
            <label>{t('SEPARATOR', 'Separator (;)')}</label>
            <Input
              name='separator'
              type='text'
              placeholder=';'
              maxLength='1'
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('ENCLOSURE', 'Enclosure (“) ')}</label>
            <Input
              name='enclosure'
              type='text'
              placeholder='"'
              maxLength='1'
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.name
                  : formState?.changes?.name
              }
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('ESCAPE', 'Escape (|)')}</label>
            <Input
              name='escape'
              type='text'
              placeholder='\'
              maxLength='1'
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('START_LINE', 'Start line')}</label>
            <Input
              name='start_line'
              type='text'
              maxLength='1'
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>
          <InputWrapper
            onClick={() => headerCsvInputRef.current.click()}
          >
            <ExamineClick
              onFiles={files => handleFiles(files)}
              childRef={(e) => { headerCsvInputRef.current = e }}
              accept='.csv,.xlsx,.xls'
              disabled={formState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                className='csvUpload'
              >
                <UploadCsvInputContainer>
                  <label>{t('UPLOAD_FILE', 'Upload file')}</label>
                  <Input
                    name='CSVfile'
                    placeholder={t('CSV', 'CSV')}
                    autoComplete='off'
                    defaultValue={
                      fileState?.fileName
                    }
                    pattern='^.+\.(xlsx|xls|csv)$'
                    readOnly
                    ref={formMethods.register({
                      required: t('VALIDATION_ERROR_CSV_FILE_REQUIRED', 'CSV file is required')
                    })}
                    onChange={handleChangeInput}
                  />
                  <Button
                    name='upload'
                    color='primary'
                    borderRadius='7.6px'
                    type='button'
                  >
                    {t('UPLOAD', 'Upload')}
                  </Button>
                </UploadCsvInputContainer>
              </DragAndDrop>
            </ExamineClick>
          </InputWrapper>
          <ActionsForm>
            <Button
              type='submit'
              color='primary'
              borderRadius='5px'
              disabled={(!hasImportedFile && !(Object.keys(formState?.changes).length > 0)) || formState?.loading}
            >
              {formState?.loading ? t('LOADING', 'Loading') : t('IMPORT', 'Import')}
            </Button>
          </ActionsForm>
        </FormInput>
        <Alert
          title={t('CREATE_IMPORTER_JOB', 'Create importer job')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </FormWrapper>
    </>
  )
}

export const ImporterJobForm = (props) => {
  const addCsvDetailProps = {
    ...props,
    UIComponent: ImporterJobFormUI
  }
  return <ImporterJobFormController {...addCsvDetailProps} />
}
