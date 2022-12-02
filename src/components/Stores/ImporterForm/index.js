import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col } from 'react-bootstrap'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import BsTrash from '@meronex/icons/bs/BsTrash'
import { useLanguage, ImporterForm as ImporterFormController } from 'ordering-components-admin'
import { Alert } from '../../Shared'
import { Button, Input } from '../../../styles'
import { Select } from '../../../styles/Select/FirstSelect'
import { ChildMapplingList } from '../ChildMapplingList'

import {
  NewImporter,
  Header,
  Title,
  FormInput,
  InputWrapper,
  ActionsForm,
  FiledListWrapper,
  FieldAddForm,
  ButtonWrapper,
  FieldRow,
  FieldName,
  FieldValue,
  ExampleCSV,
  MappingFields
} from './styles'

export const ImporterFormUI = (props) => {
  const {
    isAdvanedOptions,
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
    editImporter,
    downloadCSV,
    openMappingDetails,
    setOpenMappingDetails,
    isMapping,
    headerTitle,
    handleUpdateMultipleMapping,
    defaultImporter,
    mappingState
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

  const defaultImporterSlugs = [
    'sync_businesses_default', 'sync_categories_default', 'sync_products_default',
    'sync_extras_default', 'sync_extra_options_default', 'sync_extra_option_suboptions_default',
    'sync_extra_products_default', 'sync_full_menu_default'
  ]

  const noAdvancedTypes = ['sync_extras', 'sync_extra_options', 'sync_extra_option_suboptions']

  const isDefaultImporter = defaultImporterSlugs.includes(selectedImporter?.slug) || defaultImporter

  const importypeOptions = [
    { value: 1, content: t('STORE', 'Store'), sync_name: 'sync_businesses' },
    { value: 2, content: t('CATEGORY', 'Category'), sync_name: 'sync_categories' },
    { value: 3, content: t('PRODUCT', 'Product'), sync_name: 'sync_products' },
    { value: 4, content: t('EXTRA_PRODUCTS', 'Extra products'), sync_name: 'sync_extra_products' },
    { value: 5, content: t('EXTRAS', 'Extras'), sync_name: 'sync_extras' },
    { value: 6, content: t('EXTRA_OPTIONS', 'Extra options'), sync_name: 'sync_extra_options' },
    { value: 7, content: t('EXTRA_OPTION_SUBOPTIONS', 'extra option suboptions'), sync_name: 'sync_extra_option_suboptions' },
    { value: 8, content: t('MULTIPLE', 'Multiple'), sync_name: 'sync_multiple' }
  ]

  const onSubmit = () => {
    if (Object.keys(formState.changes).length === 0) return
    if (Object.keys(selectedImporter).length > 0) editImporter()
    else handleCreateImporter()
  }

  const onNewFiledSubmit = () => {
    addNewField(filedKey, filedValue)
    if (document.getElementById('field-form')) {
      document.getElementById('field-form').reset()
    }
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
        {headerTitle ? (
          <Title>{headerTitle}</Title>
        ) : (
          <Title>
            {
              isAdvanedOptions
                ? t('ADVANCED_OPTION', 'Advanced Options')
                : selectedImporter?.id ? t('EDIT_IMPORTER', 'Edit importer') : t('ADD_IMPORTER', 'Add importer')
            }
          </Title>
        )}
      </Header>
      <FormInput onSubmit={formMethods.handleSubmit(onSubmit)} id='importer-form'>
        {!isMapping && (
          <>
            <InputWrapper>
              <label>{t('NAME', 'Name')}</label>
              <Input
                name='name'
                type='text'
                placeholder={t('NAME', 'name')}
                defaultValue={editState?.name}
                onChange={handleChangeInput}
                disabled={formState.loading || isAdvanedOptions || isDefaultImporter}
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
                disabled={formState.loading || isAdvanedOptions || isDefaultImporter}
                autoComplete='off'
                onKeyPress={e => {
                  if (e.which === 32) { e.preventDefault() }
                }}
              />
            </InputWrapper>
          </>
        )}

        {!isAdvanedOptions && (
          <InputWrapper>
            <label>{t('TYPE', 'Type')}</label>
            {isDefaultImporter ? (
              <Input
                disabled
                value={importypeOptions.find(option => option.sync_name === selectedImporter?.type)?.content}
              />
            ) : (
              <Select
                name='type'
                options={importypeOptions}
                defaultValue={importType}
                onChange={(value) => handleSelectOption(value)}
              />
            )}
          </InputWrapper>
        )}

        {!isMapping && (
          <InputWrapper>
            <label style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600' }}>{t('MAPPING', 'Mapping')}</label>
            {Object.keys(selectedImporter).length > 0 && (
              <span style={{ fontSize: '14px', lineHeight: '24px' }}>
                {t('CSV_FILE_EXAMPLE', 'CSV file example')}
                <ExampleCSV onClick={() => downloadCSV()}>{`${editState?.type}.csv`}</ExampleCSV>
              </span>
            )}
          </InputWrapper>
        )}
        {importType !== 8 && !(isAdvanedOptions && noAdvancedTypes.includes(selectedImporter?.type)) && (
          <MappingFields disabled={isDefaultImporter}>
            <Row>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_BUSINESS_ID', 'Business ID')}</label>
                  <Input
                    name='business_id'
                    type='number'
                    min={0}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                    placeholder='0'
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                    value={mappingState?.['business_id'] || ''}
                  />
                </InputWrapper>
              </Col>
              <Col>
                <InputWrapper>
                  <label>{t('MAPPING_EXTERNAL_BUSINESS_ID', 'External business ID')}</label>
                  <Input
                    name='external_business_id'
                    type='number'
                    min={0}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                    placeholder='0'
                    onChange={handleChangeMappingInput}
                    disabled={formState.loading}
                    autoComplete='off'
                    value={mappingState?.['external_business_id'] || ''}
                  />
                </InputWrapper>
              </Col>
            </Row>
            {(importType === 2 || importType === 3 || importType === 4) && (
              <Row>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_CATEGORY_ID', 'Category ID')}</label>
                    <Input
                      name='category_id' type='number'
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['category_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTERNAL_CATEGORY_ID', 'External category ID')}</label>
                    <Input
                      name='external_category_id'
                      type='number'
                      min={0}
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['external_category_id'] || ''}
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
                      min={0}
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      defaultValue={editState?.mapping?.external_parent_category_id ?? ''}
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['external_parent_category_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
              </Row>
            )}
            {(importType === 3 || importType === 4) && (
              <Row>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_PRODUCT_ID', 'Product ID')}</label>
                    <Input
                      name='product_id'
                      type='number'
                      min={0}
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['product_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTERNAL_PRODUCT_ID', 'External product ID')}</label>
                    <Input
                      name='external_product_id'
                      type='number'
                      min={0}
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['external_product_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
              </Row>
            )}
            {(importType === 4 || importType === 5 || importType === 6 || importType === 7) && (
              <Row>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTRA_ID', 'Extra ID')}</label>
                    <Input
                      name='extra_id' type='number'
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['extra_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTERNAL_EXTRA_ID', 'External extra ID')}</label>
                    <Input
                      name='external_extra_id'
                      type='number'
                      min={0}
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['external_extra_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
              </Row>
            )}
            {(importType === 6 || importType === 7) && (
              <Row>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTRA_OPTION_ID', 'Extra option ID')}</label>
                    <Input
                      name='extra_option_id' type='number'
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['extra_option_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTERNAL_EXTRA_OPTION_ID', 'External extra option ID')}</label>
                    <Input
                      name='external_extra_option_id'
                      type='number'
                      min={0}
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['external_extra_option_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
              </Row>
            )}
            {(importType === 7) && (
              <Row>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTRA_OPTION_SUBOPTION_ID', 'Extra option suboption ID')}</label>
                    <Input
                      name='extra_option_suboption_id' type='number'
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['extra_option_suboption_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
                <Col>
                  <InputWrapper>
                    <label>{t('MAPPING_EXTERNAL_EXTRA_OPTION_SUBOPTION_ID', 'External extra option suboption ID')}</label>
                    <Input
                      name='external_extra_option_suboption_id'
                      type='number'
                      min={0}
                      onKeyPress={(e) => {
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault()
                        }
                      }}
                      placeholder='0'
                      onChange={handleChangeMappingInput}
                      disabled={formState.loading}
                      autoComplete='off'
                      value={mappingState?.['external_extra_option_suboption_id'] || ''}
                    />
                  </InputWrapper>
                </Col>
              </Row>
            )}
          </MappingFields>
        )}
      </FormInput>
      {!isAdvanedOptions && importType !== 8 && (
        <FiledListWrapper disabled={isDefaultImporter}>
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
                    min={0}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
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
      )}

      {importType !== 8 && !(isAdvanedOptions && noAdvancedTypes.includes(selectedImporter?.type)) && (
        <FiledListWrapper disabled={isDefaultImporter}>
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
                    min={0}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
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
      )}
      {importType === 8 && (
        <ChildMapplingList
          mappingList={editState?.mapping || []}
          importypeOptions={importypeOptions}
          openMappingDetails={openMappingDetails}
          setOpenMappingDetails={setOpenMappingDetails}
          handleUpdateMultipleMapping={handleUpdateMultipleMapping}
          defaultImporter={isDefaultImporter}
        />
      )}

      {!isDefaultImporter && (
        <ActionsForm>
          <Button
            type='submit'
            color='primary'
            borderRadius='5px'
            disabled={!(Object.keys(formState?.changes).length > 1) || formState?.loading}
            onClick={() => onSubmit()}
          >
            {formState?.loading ? t('LOADING', 'Loading') : (Object.keys(selectedImporter).length > 0 ? t('EDIT', 'Edit') : t('ADD', 'Add'))}
          </Button>
        </ActionsForm>
      )}

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
