import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, DragAndDrop, ExamineClick, ImportCustomCSVForm as ImportCustomCsvController } from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../utils'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Select } from '../../styles/Select/FirstSelect'
import {
  FormWrapper,
  Header,
  FormInput,
  InputWrapper,
  ActionsForm,
  UploadCsvInputContainer
} from './styles'

const AddCsvFormUI = (props) => {
  const {
    formState,
    fileState,
    handleChangeInput,
    handleChangeSelect,
    handleUploadCsv,
    handleCreateImporter,
    onClose
  } = props
  const [, t] = useLanguage()
  const formMethods = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const headerCsvInputRef = useRef(null)
  const [importType, setImportType] = useState(2)
  const [importSymbol, setImportSymbol] = useState(1)

  const importypeOptions = [
    { value: 1, content: t('STORE', 'Store'), sync_name: 'sync_stores' },
    { value: 2, content: t('PRODUCT', 'Product'), sync_name: 'sync_products' },
    { value: 3, content: t('CATEGORY', 'Category'), sync_name: 'sync_categorys' }
  ]

  const importSymbolOptions = [
    { value: 1, content: t('SEPARATOR', 'Separator (;)') },
    { value: 2, content: t('ENCLOSURE', 'Enclosure (“)') },
    { value: 3, content: t('ESCAPE', 'Escape ( )') },
    { value: 4, content: t('STARTLINE', 'Start line') }
  ]

  const handleSelectOption = (val, selectname) => {
    if (selectname === 'type') {
      setImportType(val)
    } else if (selectname === 'import_options') {
      setImportSymbol(val)
    }
  }

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
    if (Object.keys(formState.changes).length > 0) {
      handleCreateImporter()
    }
  }

  useEffect(() => {
    if (importType) {
      handleChangeSelect('type', (importypeOptions?.filter(options => options.value === importType))[0].sync_name)
    }
  }, [importType])

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

  return (
    <>
      <FormWrapper>
        <Header>
          {t('IMPORT', 'Import')}
        </Header>
        <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
          <InputWrapper>
            <label>{t('NAME', 'Name')}</label>
            <Input
              name='name'
              type='text'
              placeholder={t('NAME', 'name')}
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.name
                  : formState?.changes?.name
              }
              onChange={handleChangeInput}
              ref={formMethods.register({
                required: t('VALIDATION_ERROR_IMPORTER_NAME_REQUIRED', 'Importer name is required')
              })}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>

          <InputWrapper>
            <label>{t('SLUG', 'Slug')}</label>
            <Input
              name='slug'
              placeholder={t('SLUG', 'slug')}
              defaultValue={
                formState?.result?.result
                  ? formState?.result?.result?.slug
                  : formState?.changes?.slug
              }
              onChange={handleChangeInput}
              ref={formMethods.register({
                required: t('VALIDATION_ERROR_IMPORTER_SLUG_REQUIRED', 'Importer slug is required')
              })}
              disabled={formState.loading}
              autoComplete='off'
            />
          </InputWrapper>

          <InputWrapper>
            <label>{t('TYPE', 'Type')}</label>
            <Select
              name='type'
              options={importypeOptions}
              defaultValue={importType}
              onChange={(value) => handleSelectOption(value, 'type')}
            />
          </InputWrapper>

          <InputWrapper>
            <label>{t('IMPORT_OPTION', 'Import options')}</label>
            <Select
              options={importSymbolOptions}
              defaultValue={importSymbol}
              onChange={(value) => handleSelectOption(value, 'import_options')}
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
              disabled={!(Object.keys(formState?.changes).length > 1) || formState?.loading}
            >
              {formState?.loading ? t('LOADING', 'Loading') : t('IMPORT', 'Import')}

            </Button>
          </ActionsForm>
        </FormInput>
        <Alert
          title={t('IMPORT', 'Import')}
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

export const ImportCustomCSVForm = (props) => {
  const addCsvDetailProps = {
    ...props,
    UIComponent: AddCsvFormUI
  }
  return <ImportCustomCsvController {...addCsvDetailProps} />
}
