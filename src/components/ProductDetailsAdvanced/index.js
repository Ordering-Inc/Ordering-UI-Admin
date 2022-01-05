import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useSession,
  useUtils,
  ProductDetailsAdvanced as ProductDetailsAdvancedController
} from 'ordering-components-admin'
import { EditTaxManager } from '../EditTaxManager'
import { Button, Input, Switch } from '../../styles'
import { useForm } from 'react-hook-form'
import {
  PropertiesContainer,
  PropertyOption,
  TypeSelectWrapper,
  Option,
  LabelCustom,
  OptionCenter
} from './styles'
import { Select } from '../../styles/Select/FirstSelect'
import { Modal } from '../Modal'
import { Alert } from '../Confirm'

const ProductDetailsAdvancedUI = (props) => {
  const {
    formState,
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
    alertState,
    fees,
    handleUpdateClick
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [{ parsePrice }] = useUtils()
  const [isSku, setIsSku] = useState(false)
  const [taxesOption, setTaxesOption] = useState([])
  const [feesOptions, setFeesOptions] = useState([])
  const [fesSelected, setFeeSelected] = useState(null)
  const [taxSelected, setTaxSelected] = useState(null)
  const [taxToDelete, setTaxToDelete] = useState({ action: null, id: null })

  const estimatedPersons = [
    { value: 'no_apply', content: <Option>{t('NO_APPLY', 'No apply')}</Option>, showOnSelected: <Option>{t('NO_APPLY', 'No apply')}</Option> },
    ...[...Array(10)].map((item, i) => ({
      value: i + 1,
      content: <Option>{i + 1}</Option>
    }))
  ]

  const getTaxOrFeeString = (string) => {
    return string === 'taxes' ? 'tax' : 'fee'
  }

  const handleAddTax = (action) => {
    setTaxToEdit({ action, payload: true })
    if (action === 'taxes') handleChangeTax('type', 1)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setTaxToDelete({ action: null, payload: null })
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
      content: <OptionCenter onClick={() => handleAddTax('taxes')}>{t('ADD_NEW_TAX', 'Add new tax')}</OptionCenter>
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

  const getFees = () => {
    const inheritOption = {
      name: t('INHERIT_FROM_BUSINESS', 'Inherit from business'),
      value: 'inherit',
      content: <Option>{t('INHERIT_FROM_BUSINESS', 'Inherit from business')} (0$ + {business.service_fee}%)</Option>,
      showOnSelected: <Option>{t('INHERIT_FROM_BUSINESS', 'Inherit from business')} (0$ + {business.service_fee}%)</Option>
    }
    const addFeeOption = {
      name: t('ADD_NEW_FEE', 'Add new fee'),
      value: null,
      content: <OptionCenter onClick={() => handleAddTax('fees')}>{t('ADD_NEW_FEE', 'Add new fee')}</OptionCenter>
    }

    const feesOptions = [
      inheritOption,
      ...Object.values(fees).map(fee => ({
        value: fee.id,
        name: fee.name,
        content: (
          <Option>{fee.name} ({parsePrice(fee.fixed)} + {fee.percentage}%)</Option>
        ),
        showOnSelected: (
          <Option>{fee.name} ({parsePrice(fee.fixed)} + {fee.percentage}%)</Option>
        ),
        editFunctionality: user?.level === 0,
        deleteFunctionality: user?.level === 0,
        fixed: fee.fixed,
        percentage: fee.percentage,
        description: fee.description
      })),
      addFeeOption
    ]
    setFeesOptions(feesOptions)
    setFeeSelected(feesOptions.find(fee => fee.value === productState?.fee_id) || inheritOption)
  }

  const deleteTax = (data) => {
    handleDeleteTax(data.id, data.action)
    closeAlert()
  }

  const handleEnableSKU = (enabled) => {
    setIsSku(enabled)
    if (!enabled) {
      handleClickProperty('sku', -1)
    }
  }

  useEffect(() => {
    if (taxes) getTaxes()
  }, [JSON.stringify(taxes)])

  useEffect(() => {
    if (fees) getFees()
  }, [JSON.stringify(fees)])

  useEffect(() => {
    if (taxToDelete.action) {
      setAlertState({
        open: true,
        content: t(
          `ARE_YOUR_SURE_DELETE_${getTaxOrFeeString(taxToDelete.action).toUpperCase()}`,
          `Are you sure do you want delete this ${getTaxOrFeeString(taxToDelete.action)}?`
        )
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

  useEffect(() => {
    if (parseInt(productState?.sku) === -1 || !productState?.sku) {
      setIsSku(false)
    } else {
      setIsSku(true)
    }
  }, [productState])

  return (
    <PropertiesContainer>
      <PropertyOption>
        <label>{t('FEATURED', 'Featured')}</label>
        <Switch
          defaultChecked={productState?.featured || false}
          onChange={enabled => handleClickProperty('featured', enabled)}
        />
      </PropertyOption>
      <PropertyOption>
        <label>{t('UPSELLING', 'Upselling')}</label>
        <Switch
          defaultChecked={productState?.upselling || false}
          onChange={enabled => handleClickProperty('upselling', enabled)}
        />
      </PropertyOption>
      <PropertyOption>
        <label>{t('SKU', 'Stock Keeping Unit (SKU)')}</label>
        <Switch
          defaultChecked={isSku}
          onChange={enabled => handleEnableSKU(enabled)}
        />
      </PropertyOption>
      {isSku && (
        <>
          <LabelCustom htmlFor='sku'>SKU</LabelCustom>
          <Input
            name='sku'
            id='sku'
            placeholder={t('SKU', 'Stock Keeping Unit (SKU)')}
            defaultValue={parseInt(productState?.sku) !== -1 ? productState?.sku : ''}
            onChange={(e) => handleClickProperty('sku', e.target.value ?? null)}
          />
        </>
      )}
      <LabelCustom htmlFor='estimated'>{t('ESTIMATED_PERSON', 'Estimated person')}</LabelCustom>
      <TypeSelectWrapper>
        <Select
          notAsync
          defaultValue={productState?.estimated_person ?? 'no_apply'}
          options={estimatedPersons}
          onChange={(val) => handleClickProperty('estimated_person', val === 'no_apply' ? null : val)}
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
            onEdit={(val) => setTaxToEdit({ action: 'taxes', payload: val })}
            onDelete={(val) => setTaxToDelete({ action: 'taxes', id: val })}
          />
        )}
      </TypeSelectWrapper>
      <LabelCustom htmlFor='fees'>{t('FEES', 'Fees')}</LabelCustom>
      <TypeSelectWrapper>
        {fesSelected && (
          <Select
            placeholder={fesSelected.showOnSelected}
            defaultValue={fesSelected?.value ?? 'inherit'}
            options={feesOptions}
            onChange={(val) => handleClickProperty('fee_id', val === 'inherit' ? null : val)}
            onEdit={(val) => setTaxToEdit({ action: 'fees', payload: val })}
            onDelete={(val) => setTaxToDelete({ action: 'fees', id: val })}
          />
        )}
      </TypeSelectWrapper>
      <Button
        color='primary'
        borderRadius='7.6px'
        disabled={formState.loading || Object.keys(formState?.changes).length === 0}
        onClick={() => handleUpdateClick()}
      >
        {formState?.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
      </Button>
      <Modal
        open={!!taxToEdit?.action}
        width='80%'
        padding='30px'
        title={typeof taxToEdit?.payload === 'boolean'
          ? t(`ADD_${getTaxOrFeeString(taxToEdit?.action).toUpperCase()}`, `Add ${getTaxOrFeeString(taxToEdit?.action)}`)
          : t(`EDIT_${getTaxOrFeeString(taxToEdit?.action).toUpperCase()}`, `Edit ${getTaxOrFeeString(taxToEdit?.action)}`)}
        onClose={() => setTaxToEdit({ action: null, payload: null })}
      >
        <EditTaxManager
          type={taxToEdit?.action}
          data={taxToEdit?.payload}
          onChange={handleChangeTax}
          formChanges={formTaxChanges}
          onClose={() => setTaxToEdit({ action: null, payload: null })}
          handleSave={handleSaveTax}
          setAlertState={setAlertState}
        />
      </Modal>
      <Alert
        title={taxToDelete.action ? t(`DELETE_${getTaxOrFeeString(taxToDelete?.action).toUpperCase()}`, `Delete ${getTaxOrFeeString(taxToDelete?.action)}`) : t('ERROR')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => taxToDelete.action ? deleteTax(taxToDelete) : closeAlert()}
        closeOnBackdrop={false}
      />
    </PropertiesContainer>
  )
}

export const ProductDetailsAdvanced = (props) => {
  const productAdvancedProps = {
    ...props,
    UIComponent: ProductDetailsAdvancedUI
  }
  return <ProductDetailsAdvancedController {...productAdvancedProps} />
}
