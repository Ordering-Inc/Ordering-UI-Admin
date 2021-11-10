import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col } from 'react-bootstrap'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import BsTrash from '@meronex/icons/bs/BsTrash'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useLanguage, ImporterForm as ImporterFormController } from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { IconButton, Button } from '../../styles/Buttons'
import { XLg } from 'react-bootstrap-icons'
import { Input } from '../../styles/Inputs'
import { Select } from '../../styles/Select/FirstSelect'

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
    onClose,
    openNewImporter,
    selectedImporter,
    clearImorterForm,
    isEdit,
    setIsEdit,
    editState
  } = props

  const [, t] = useLanguage()
  const formMethods = useForm()
  const { width } = useWindowSize()
  const [importType, setImportType] = useState(1)
  const fieldMethods = useForm()
  const [mappingInputData, setMappingInpuData] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [filedKey, setFiledKey] = useState()
  const [filedValue, setFiledValue] = useState()

  const importypeOptions = [
    {
      value: 1,
      content: t('STORE', 'Store'),
      sync_name: 'sync_businesses',
      mapping_input_data: {
        id: {
          label: t('MAPPING_BUSINESS_ID', 'Business ID'),
          name: 'business_id'
        },
        external_id: {
          label: t('MAPPING_EXTERNAL_BUSINESS_ID', 'External business ID'),
          name: 'external_business_id'
        },
        external_key: {
          label: t('MAPPING_EXTERNAL_BUSINESS_KEY', 'External business key'),
          name: 'external_business_key'
        }
      }
    },
    {
      value: 2,
      content: t('CATEGORY', 'Category'),
      sync_name: 'sync_categories',
      mapping_input_data: {
        id: {
          label: t('MAPPING_CATEGORY_ID', 'Category ID'),
          name: 'category_id'
        },
        external_id: {
          label: t('MAPPING_EXTERNAL_CATEGORY_ID', 'External category ID'),
          name: 'external_category_id'
        },
        external_key: {
          label: t('MAPPING_EXTERNAL_CATEGORY_KEY', 'External category key'),
          name: 'external_category_key'
        }
      }
    },
    {
      value: 3,
      content: t('PRODUCT', 'Product'),
      sync_name: 'sync_products',
      mapping_input_data: {
        id: {
          label: t('MAPPING_PRODUCT_ID', 'Product ID'),
          name: 'product_id'
        },
        external_id: {
          label: t('MAPPING_EXTERNAL_PRODUCT_ID', 'External product ID'),
          name: 'external_product_id'
        },
        external_key: {
          label: t('MAPPING_EXTERNAL_PRODUCT_KEY', 'External product key'),
          name: 'external_product_key'
        }
      }
    }
  ]

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0) {
      handleCreateImporter()
    }
  }

  const onNewFiledSubmit = () => {
    addNewField(filedKey, filedValue)
    document.getElementById('field-form').reset()
  }

  const handleSelectOption = (val) => {
    setImportType(val)
  }

  useEffect(() => {
    if (importType) {
      const _target = (importypeOptions?.filter(options => options.value === importType))[0]
      handleChangeSelect('type', _target.sync_name)
      setMappingInpuData(_target.mapping_input_data)
    }
  }, [importType])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

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
            defaultValue={editState?.slug}
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
            onChange={(value) => handleSelectOption(value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600' }}>{t('MAPPING', 'Mapping')}</label>
          <span style={{ fontSize: '14px', lineHeight: '24px' }}>CSV file example <a href='www.example.com' target='_blank' rel='noopener noreferrer'>www.example.com</a></span>
        </InputWrapper>

        {Object.keys(mappingInputData).length !== 0 && (
          <>
            <Row>
              <Col>
                <InputWrapper>
                  <label>{mappingInputData?.id?.label}</label>
                  <Input
                    name={mappingInputData?.id?.name}
                    type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.id}
                    onChange={handleChangeMappingInput}
                    ref={formMethods.register({
                      required: t('VALIDATION_ERROR_PRODUCT_ID_REQUIRED', 'Product Id is required')
                    })}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
              {width > 767 && (
                <Col />
              )}
            </Row>
            <Row>
              <Col>
                <InputWrapper>
                  <label>{mappingInputData?.external_id?.label}</label>
                  <Input
                    name={mappingInputData?.external_id?.name}
                    type='number'
                    placeholder='0'
                    defaultValue={editState?.mapping?.externalId}
                    onChange={handleChangeMappingInput}
                    ref={formMethods.register({
                      required: t('VALIDATION_ERROR_EXTERNAL_PRODUCT_ID_REQUIRED', 'External Product Id is required')
                    })}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
              <Col>
                <InputWrapper>
                  <label>{mappingInputData?.external_key?.label}</label>
                  <Input
                    name={mappingInputData?.external_key?.name}
                    type='text'
                    placeholder='0'
                    defaultValue={editState?.mapping?.externalKey}
                    onChange={handleChangeMappingInput}
                    ref={formMethods.register({
                      required: t('VALIDATION_ERROR_EXTERNAL_BUSINESS_KEY_REQUIRED', 'External business KEY is required'),
                      pattern: {
                        value: /^\d+$/,
                        message: t(
                          'VALIDATION_ERROR_INTEGER',
                          'Invalid integer'
                        ).replace('_attribute_', t('VALUE', 'Vlue'))
                      }
                    })}
                    disabled={formState.loading}
                    autoComplete='off'
                  />
                </InputWrapper>
              </Col>
            </Row>
          </>
        )}
      </FormInput>

      <FiledListWrapper>
        <label>Fields</label>
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
                ref={fieldMethods.register({
                  required: t('VALIDATION_ERROR_FIELD_NAME_REQUIRED', 'Name is required')
                })}
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
                  ref={fieldMethods.register({
                    required: t('VALIDATION_ERROR_FIELD_VALUE_REQUIRED', 'Product Id is required')
                  })}
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
          {formState?.loading ? t('LOADING', 'Loading') : (isEdit ? t('EDIT', 'Edit') : t('ADD', 'Add'))}
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
