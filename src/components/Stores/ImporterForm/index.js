import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col } from 'react-bootstrap'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import BsTrash from '@meronex/icons/bs/BsTrash'
import { useLanguage, ImporterForm as ImporterFormController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Alert } from '../../Shared'
import { IconButton, Button, Input } from '../../../styles'
import { XLg } from 'react-bootstrap-icons'
import { Select } from '../../../styles/Select/FirstSelect'

import {
  NewImporter,
  Header,
  Title,
  CloseButtonWrapper,
  FormInput,
  InputWrapper,
  ActionsForm,
  FiledListWrapper,
  FieldAddForm,
  ButtonWrapper,
  FieldRow,
  FieldName,
  FieldValue
} from './styles'

export const ImporterFormUI = (props) => {
  const {
    formState,
    handleChangeInput,
    handleChangeSelect,
    handleCreateImporter,
    handleChangeMappingInput,
    handleEditState,
    addNewField,
    removeField,
    fieldList,
    addNewMetaField,
    removeMetaField,
    metafieldList,
    onClose,
    selectedImporter,
    clearImorterForm,
    setIsEdit,
    editState,
    editImporter
  } = props

  const [, t] = useLanguage()
  const formMethods = useForm()
  const fieldMethods = useForm()
  const metafieldMethods = useForm()
  const [importType, setImportType] = useState(1)
  // const [mappingInputData, setMappingInpuData] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [filedKey, setFiledKey] = useState()
  const [filedValue, setFiledValue] = useState()
  const [metafiledKey, setMetaFiledKey] = useState()
  const [metafiledValue, setMetaFiledValue] = useState()
  const theme = useTheme()

  const importypeOptions = [
    {
      value: 1,
      content: t('STORE', 'Store'),
      sync_name: 'sync_businesses'
    },
    {
      value: 2,
      content: t('CATEGORY', 'Category'),
      sync_name: 'sync_categories'
    },
    {
      value: 3,
      content: t('PRODUCT', 'Product'),
      sync_name: 'sync_products'
    }
  ]

  const onSubmit = () => {
    if (Object.keys(formState.changes).length === 0) return
    if (Object.keys(editState).length > 0) editImporter()
    else handleCreateImporter()
  }

  const onNewFiledSubmit = () => {
    addNewField(filedKey, filedValue)
    document.getElementById('field-form').reset()
  }

  const onNewMetaFiledSubmit = () => {
    addNewMetaField(metafiledKey, metafiledValue)
    document.getElementById('meta-field-form').reset()
  }

  const handleSelectOption = (val) => {
    setImportType(val)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (importType) {
      const _target = (importypeOptions?.filter(options => options.value === importType))[0]
      handleChangeSelect('type', _target.sync_name)
      // setMappingInpuData(_target.mapping_input_data)
    }
  }, [importType])

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
    clearImorterForm()
    if (Object.keys(selectedImporter).length === 0) {
      const _target = (importypeOptions?.filter(options => options.value === 1))[0]
      handleChangeSelect('type', _target.sync_name)
    }
    if (Object.keys(selectedImporter).length > 0) {
      setIsEdit(true)
      handleEditState(selectedImporter)
      const targetOption = importypeOptions.filter(option => option.sync_name === selectedImporter?.type)[0]
      handleSelectOption(targetOption?.value)
    }
  }, [selectedImporter])

  return (
    <NewImporter>
      <Header>
        <Title>
          {t('ADD_IMPORTER', 'Add importer')}
        </Title>
        <CloseButtonWrapper>
          <IconButton
            color='black'
            onClick={() => onClose()}
          >
            <XLg />
          </IconButton>
        </CloseButtonWrapper>
      </Header>
      <FormInput onSubmit={formMethods.handleSubmit(onSubmit)} id='importer-form'>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            name='name'
            type='text'
            placeholder={t('NAME', 'name')}
            defaultValue={editState?.name}
            onChange={handleChangeInput}
            disabled={formState.loading}
            autoComplete='off'
          />
        </InputWrapper>

        <InputWrapper>
          <label>{t('SLUG', 'Slug')}</label>
          <Input
            name='slug'
            placeholder={t('SLUG', 'slug')}
            defaultValue={editState?.slug}
            onChange={handleChangeInput}
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
            onChange={(value) => handleSelectOption(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600' }}>{t('MAPPING', 'Mapping')}</label>
          <span style={{ fontSize: '14px', lineHeight: '24px' }}>CSV file example <a href={theme.files?.exampleCSV || 'www.example.com'} target='_blank' rel='noopener noreferrer' download={theme.files?.exampleCSV}>example.csv</a></span>
        </InputWrapper>
        <>
          {(importType === 1 || importType === 2 || importType === 3) && (
            <Row>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_BUSINESS_ID', 'Business ID')}</label>
                  <Input
                    name='business_id'
                    type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.business_id || ''}
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_EXTERNAL_BUSINESS_ID', 'External business ID')}</label>
                  <Input
                    name='external_business_id'
                    type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.external_business_id || ''}
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
            </Row>
          )}
          {(importType === 2 || importType === 3) && (
            <Row>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_CATEGORY_ID', 'Category ID')}</label>
                  <Input
                    name='category_id' type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.category_id || ''}
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_EXTERNAL_CATEGORY_ID', 'External category ID')}</label>
                  <Input
                    name='external_category_id'
                    type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.external_category_id || ''}
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
              <Col /> {/* empty col for layout */}
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_EXTERNAL_PARENT_CATEGORY_ID', 'External parent category ID')}</label>
                  <Input
                    name='external_parent_category_id'
                    type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.external_parent_category_id || ''}
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
            </Row>
          )}
          {importType === 3 && (
            <Row>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_PRODUCT_ID', 'Product ID')}</label>
                  <Input
                    name='product_id' type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.product_id || ''}
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_EXTERNAL_PRODUCT_ID', 'External product ID')}</label>
                  <Input
                    name='external_product_id'
                    type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.external_product_id || ''}
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
            </Row>
          )}
        </>
      </FormInput>
      <FiledListWrapper>
        <label>{t('FIELDS', 'Fields')}</label>
        {Object.keys(fieldList).length > 0 && (
          <>
            {Object.entries(fieldList).map((value, i) => (
              <Row key={i} style={{ marginBottom: '15px' }}>
                <Col>
                  <FieldName>{value[0]}</FieldName>
                </Col>
                <Col>
                  <FieldRow>
                    <FieldValue>{value[1]}</FieldValue>
                    <ButtonWrapper>
                      <button onClick={() => removeField(value[0])}>
                        <BsTrash />
                      </button>
                    </ButtonWrapper>
                  </FieldRow>
                </Col>
              </Row>
            ))}
          </>
        )}
        <FieldAddForm
          onSubmit={fieldMethods.handleSubmit(onNewFiledSubmit)}
          id='field-form'
        >
          <Row style={{ alignItems: 'flex-end' }}>
            <Col>
              <Input
                name='key'
                type='text'
                placeholder={t('NAME', 'name')}
                onChange={(e) => setFiledKey(e.target.value)}
                disabled={formState.loading}
                autoComplete='off'
              />
            </Col>
            <Col style={{ width: '49%' }}>
              <FieldRow>
                <Input
                  name='value'
                  type='number'
                  placeholder='0'
                  onChange={(e) => setFiledValue(e.target.value)}
                  disabled={formState.loading}
                  autoComplete='off'
                />
                <ButtonWrapper>
                  <button
                    type='submit'
                  >
                    <BsPlusSquare />
                  </button>
                </ButtonWrapper>
              </FieldRow>
            </Col>
          </Row>
        </FieldAddForm>
      </FiledListWrapper>

      <FiledListWrapper>
        <label>{t('META_FIELDS', 'MetaFields')}</label>
        {Object.keys(metafieldList) && Object.keys(metafieldList).length > 0 && (
          <>
            {Object.entries(metafieldList).map((value, i) => (
              <Row key={i} style={{ marginBottom: '15px' }}>
                <Col>
                  <FieldName>{value[0]}</FieldName>
                </Col>
                <Col>
                  <FieldRow>
                    <FieldValue>{value[1]}</FieldValue>
                    <ButtonWrapper>
                      <button onClick={() => removeMetaField(value[0])}>
                        <BsTrash />
                      </button>
                    </ButtonWrapper>
                  </FieldRow>
                </Col>
              </Row>
            ))}
          </>
        )}
        <FieldAddForm
          onSubmit={metafieldMethods.handleSubmit(onNewMetaFiledSubmit)}
          id='meta-field-form'
        >
          <Row style={{ alignItems: 'flex-end' }}>
            <Col>
              <Input
                name='key'
                type='text'
                placeholder={t('NAME', 'name')}
                onChange={(e) => setMetaFiledKey(e.target.value)}
                disabled={formState.loading}
                autoComplete='off'
              />
            </Col>
            <Col style={{ width: '49%' }}>
              <FieldRow>
                <Input
                  name='value'
                  type='number'
                  placeholder='0'
                  onChange={(e) => setMetaFiledValue(e.target.value)}
                  disabled={formState.loading}
                  autoComplete='off'
                />
                <ButtonWrapper>
                  <button
                    type='submit'
                  >
                    <BsPlusSquare />
                  </button>
                </ButtonWrapper>
              </FieldRow>
            </Col>
          </Row>
        </FieldAddForm>
      </FiledListWrapper>

      <ActionsForm>
        <Button
          type='submit'
          color='primary'
          borderRadius='5px'
          disabled={!(Object.keys(formState?.changes).length > 1) || formState?.loading}
          onClick={() => onSubmit()}
        >
          {formState?.loading ? t('LOADING', 'Loading') : (Object.keys(editState).length > 0 ? t('EDIT', 'Edit') : t('ADD', 'Add'))}
        </Button>
      </ActionsForm>
      <Alert
        title={t('IMPORT', 'Import')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </NewImporter>
  )
}

export const ImporterForm = (props) => {
  const addImporterProps = {
    ...props,
    UIComponent: ImporterFormUI
  }
  return <ImporterFormController {...addImporterProps} />
}
