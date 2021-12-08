import React, { useState, useEffect } from 'react'
import { useLanguage, useSession, ProductProperties as ProductPropertiesController } from 'ordering-components-admin'
import { Input } from '../../styles/Inputs'
import { Checkbox } from '../../styles/Checkbox'
import { useForm } from 'react-hook-form'
import {
  PropertiesContainer,
  PropertyOption,
  TypeSelectWrapper,
  Option,
  LabelCustom,
  ButtonGroup,
  EditTaxContainer,
  WrapperRow,
  InputContainer,
  OptionCenter
} from './styles'
import { Select } from '../../styles/Select/FirstSelect'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
const ProductPropertiesUI = (props) => {
  const {
    productState,
    handleClickProperty,
    business,
    taxes,
    taxToEdit,
    setTaxToEdit,
    handleSaveTax,
    handleChangeTax,
    formTaxChanges,
    handleDeleteTax,
    setAlertState,
    alertState
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [isShowStock, setIsShowStock] = useState(productState?.inventoried)
  const [taxesOption, setTaxesOption] = useState([])
  const [taxSelected, setTaxSelected] = useState(null)
  const [taxToDelete, setTaxToDelete] = useState(null)
  const estimatedPersons = [
    { value: null, content: <Option>{t('NO_APPLY', 'No apply')}</Option> },
    ...[...Array(10)].map((item, i) => ({
      value: i + 1,
      content: <Option>{i + 1}</Option>
    }))
  ]

  const handleClickStock = (e) => {
    handleClickProperty('inventoried', e.target.checked)
    if (e.target.checked) {
      setIsShowStock(true)
    } else {
      setIsShowStock(false)
    }
  }

  const hanldeClickStockInput = (value) => {
    if (value === '') handleClickProperty('quantity', productState?.quantity)
    else handleClickProperty('quantity', value)
  }

  const handleChangeInput = (event) => {
    if (event.target.value === '') handleClickProperty(event.target.name, productState[event.target.name])
    else handleClickProperty(event.target.name, event.target.value)
  }

  const handleAddTax = () => {
    setTaxToEdit(true)
    handleChangeTax('type', 1)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setTaxToDelete(null)
  }

  const getTaxes = async () => {
    const inheritOption = {
      name: t('INHERIT_FROM_BUSINESS', 'Inherit from business'),
      value: 'inherit',
      content: <Option>{t('INHERIT_FROM_BUSINESS', 'Inherit from business')} ({business.tax}% {business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price')})</Option>,
      showOnSelected: <Option>{t('INHERIT_FROM_BUSINESS', 'Inherit from business')} ({business.tax}% {business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price')})</Option>
    }
    const addTaxOption = {
      name: t('ADD_NEW_TAX', 'Add new tax'),
      value: null,
      content: <OptionCenter onClick={() => handleAddTax()}>{t('ADD_NEW_TAX', 'Add new tax')}</OptionCenter>
    }
    const taxesOptions = [
      inheritOption,
      ...Object.values(taxes).map(tax => ({
        value: tax.id,
        name: tax.name,
        content: (
          <Option>{tax.name} ({tax.rate}% {tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price')})</Option>
        ),
        showOnSelected: (
          <Option>{tax.name} ({tax.rate}% {tax.type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price')})</Option>
        ),
        editFunctionality: user?.level === 0,
        deleteFunctionality: user?.level === 0,
        rate: tax.rate,
        type: tax.type,
        description: tax.description
      })),
      addTaxOption
    ]
    setTaxesOption(taxesOptions)
    setTaxSelected(taxesOptions.find(tax => tax.value === productState?.tax_id) || inheritOption)
  }

  const deleteTax = (id) => {
    handleDeleteTax(id)
    closeAlert()
  }

  useEffect(() => {
    if (taxes) { getTaxes() }
  }, [JSON.stringify(taxes)])

  useEffect(() => {
    if (taxToDelete) {
      setAlertState({
        open: true,
        content: t('ARE_YOUR_SURE_DELETE_TAX', 'Are you sure do you want delete this tax?')
      })
    }
  }, [taxToDelete])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  return (
    <PropertiesContainer>
      <h1>{t('PROPERTIES', 'Properties')}</h1>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.featured}
          onClick={(e) => handleClickProperty('featured', e.target.checked)}
          id='featured'
        />
        <label htmlFor='featured'>{t('FEATURED', 'Featured')}</label>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.upselling}
          onClick={(e) => handleClickProperty('upselling', e.target.checked)}
          id='upselling'
        />
        <label htmlFor='upselling'>{t('UPSELLING', 'Upselling')}</label>
      </PropertyOption>
      <PropertyOption>
        <Checkbox
          defaultChecked={productState?.inventoried}
          onClick={(e) => handleClickStock(e)}
          id='inventoried'
        />
        <label htmlFor='inventoried'>{t('INVENTORIED', 'Limit product quantity')}</label>
      </PropertyOption>
      {isShowStock && (
        <>
          <LabelCustom htmlFor='quantity'>{t('QUANTITY', 'Quantity')}</LabelCustom>
          <Input
            name='quantity'
            id='quantity'
            placeholder={t('QUANTITY', 'Quantity')}
            defaultValue={parseInt(productState?.quantity)}
            onChange={(e) => hanldeClickStockInput(e.target.value)}
          />
        </>
      )}
      <LabelCustom htmlFor='sku'>{t('SKU', 'Stock Keeping Unit (SKU)')}</LabelCustom>
      <Input
        name='sku'
        id='sku'
        placeholder={t('SKU', 'Stock Keeping Unit (SKU)')}
        defaultValue={parseInt(productState?.sku) !== -1 ? productState?.sku : ''}
        onChange={(e) => handleClickProperty('sku', e.target.value ?? null)}
      />
      <LabelCustom htmlFor='estimated'>{t('ESTIMATED_PERSON', 'Estimated person')}</LabelCustom>
      <TypeSelectWrapper>
        <Select
          defaultValue={productState?.estimated_person || null}
          options={estimatedPersons}
          onChange={(val) => handleClickProperty('estimated_person', val)}
        />
      </TypeSelectWrapper>
      <LabelCustom htmlFor='tax'>{t('TAX', 'Tax')}</LabelCustom>
      <TypeSelectWrapper>
        {taxSelected && (
          <Select
            placeholder={taxSelected.showOnSelected}
            defaultValue={taxSelected?.value ?? 'inherit'}
            options={taxesOption}
            onChange={(val) => handleClickProperty('tax_id', val === 'inherit' ? null : val)}
            onEdit={(val, i) => setTaxToEdit(val)}
            onDelete={(val) => setTaxToDelete(val)}
          />
        )}
      </TypeSelectWrapper>
      <LabelCustom htmlFor='fee_percentage'>{t('SERVICE_FEE_PERCENTAGE', 'Service fee percentage')}</LabelCustom>
      <Input
        name='fee_percentage'
        id='fee_percentage'
        placeholder='0.00%'
        defaultValue={parseInt(productState?.fee_percentage) || ''}
        onChange={(e) => handleChangeInput(e)}
      />
      <LabelCustom htmlFor='fee_fixed'>{t('SERVICE_FEE_FIXED', 'Service fee fixed')}</LabelCustom>
      <Input
        name='fee_fixed'
        id='fee_fixed'
        placeholder='$0.00'
        defaultValue={parseInt(productState?.fee_fixed)}
        onChange={(e) => handleChangeInput(e) || 0}
      />
      <Modal
        open={!!taxToEdit}
        width='80%'
        padding='30px'
        title={typeof taxToEdit === 'boolean' ? t('ADD_TAX', 'Add tax') : t('EDIT_TAX', 'Edit tax')}
        onClose={() => setTaxToEdit(null)}
      >
        <EditTaxContainer onSubmit={formMethods.handleSubmit(() => handleSaveTax(taxToEdit?.value))}>
          <WrapperRow>
            <InputContainer>
              <LabelCustom htmlFor='name'>{t('NAME', 'Name')}</LabelCustom>
              <Input
                name='name'
                id='name'
                placeholder={t('NAME', 'Name')}
                defaultValue={formTaxChanges?.name ?? taxToEdit?.name ?? ''}
                onChange={(e) => handleChangeTax('name', e.target.value)}
                ref={formMethods.register({
                  required: t('TAX_NAME_REQUIRED', 'Tax name is required')
                })}
              />
            </InputContainer>
            <InputContainer>
              <LabelCustom htmlFor='description'>{t('DESCRIPTION', 'Description')}</LabelCustom>
              <Input
                name='description'
                id='description'
                placeholder={t('DESCRIPTION', 'Description')}
                defaultValue={formTaxChanges?.description ?? taxToEdit?.description ?? ''}
                onChange={(e) => handleChangeTax('description', e.target.value)}
                ref={formMethods.register({
                  required: t('TAX_DESCRIPTION_REQUIRED', 'Tax description is required')
                })}
              />
            </InputContainer>
          </WrapperRow>
          <WrapperRow>
            <InputContainer>
              <LabelCustom htmlFor='rate'>{t('RATE', 'Rate')}</LabelCustom>
              <Input
                name='rate'
                id='rate'
                placeholder='0.00%'
                defaultValue={formTaxChanges?.rate ?? taxToEdit?.rate ?? ''}
                onChange={(e) => handleChangeTax('rate', e.target.value)}
                ref={formMethods.register({
                  required: t('TAX_RATE_REQUIRED', 'Tax rate is required'),
                  pattern: {
                    value: /^-?\d+\.?\d*$/,
                    message: t('ERROR_TAX_ID_INTEGER', 'The tax id must be an integer.')
                  }
                })}
              />
            </InputContainer>
            <InputContainer>
              <LabelCustom htmlFor='type'>{t('TYPE', 'Type')}</LabelCustom>
              <TypeSelectWrapper>
                <Select
                  notAsync
                  placeholder={formTaxChanges?.type ?? taxToEdit?.type}
                  defaultValue={taxToEdit?.type ?? 1}
                  options={[
                    {
                      value: 1,
                      content: t('INCLUDED_ON_PRICE', 'Included on price'),
                      showOnSelected: <Option>{t('INCLUDED_ON_PRICE', 'Included on price')}</Option>
                    },
                    {
                      value: 2,
                      content: t('NOT_INCLUDED_ON_PRICE', 'Not included on price'),
                      showOnSelected: <Option>{t('NOT_INCLUDED_ON_PRICE', 'Not included on price')}</Option>
                    }
                  ]}
                  onChange={(val) => handleChangeTax('type', val)}
                />
              </TypeSelectWrapper>
            </InputContainer>
          </WrapperRow>
          <ButtonGroup>
            <Button
              type='submit'
              color='primary'
              borderRadius='8px'
            >
              {t('ACCEPT', 'Accept')}
            </Button>
            <Button
              color='secundaryDark'
              borderRadius='8px'
              onClick={() => setTaxToEdit(null)}
            >
              {t('CLOSE', 'Close')}
            </Button>
          </ButtonGroup>
        </EditTaxContainer>
      </Modal>
      <Alert
        title={taxToDelete ? t('DELETE_TAX', 'Delete Tax') : t('ERROR')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => taxToDelete ? deleteTax(taxToDelete) : closeAlert()}
        closeOnBackdrop={false}
      />
    </PropertiesContainer>
  )
}

export const ProductProperties = (props) => {
  const productProperties = {
    ...props,
    UIComponent: ProductPropertiesUI
  }
  return <ProductPropertiesController {...productProperties} />
}
