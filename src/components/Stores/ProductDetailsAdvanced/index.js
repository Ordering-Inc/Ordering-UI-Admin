import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useSession,
  useUtils,
  ProductDetailsAdvanced as ProductDetailsAdvancedController
} from 'ordering-components-admin'
import { EditTaxManager } from '../EditTaxManager'
import { Button, Input, Switch } from '../../../styles'
import { useForm } from 'react-hook-form'
import {
  PropertiesContainer,
  PropertyOption,
  TypeSelectWrapper,
  Option,
  LabelCustom,
  OptionCenter,
  InputContainer,
  FieldRow,
  WeightWrapper,
  PropertyOptionWrapper
} from './styles'
import { Select } from '../../../styles/Select/FirstSelect'
import { Alert, Modal } from '../../Shared'

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
  const [isShowPriceByWeight, setIsShowPriceByWeight] = useState(false)
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

  const weightUnitOptions = [
    {
      value: 'grams',
      content: t('WEIGHT_UNIT_GRAM', 'grams'),
      ratio: 1
    },
    {
      value: 'kg',
      content: t('WEIGHT_UNIT_KILOGRAM', 'kilograms'),
      ratio: 0.001
    },
    {
      value: 'ounces',
      content: t('WEIGHT_UNIT_OUNCE', 'ounces'),
      ratio: 0.035274
    },
    {
      value: 'pounds',
      content: t('WEIGHT_UNIT_POUND', 'pounds'),
      ratio: 0.00220462
    }
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

  const handleEnablePriceWeight = (enabled) => {
    setIsShowPriceByWeight(enabled)
    if (!enabled) {
      handleClickProperty('weight', null)
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

  useEffect(() => {
    if (productState?.weight) {
      setIsShowPriceByWeight(true)
    } else {
      setIsShowPriceByWeight(false)
    }
  }, [productState?.weight])

  useEffect(() => {
    if (formState?.changes?.weight && !(formState?.changes?.weight_unit)) {
      handleClickProperty('weight_unit', 'grams')
    }
  }, [formState?.changes?.weight])

  return (
    <PropertiesContainer>
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
      <FieldRow>
        <InputContainer>
          <LabelCustom htmlFor='cost_price'>{t('PRODUCT_COST', 'Product cost')}</LabelCustom>
          <Input
            name='cost_price'
            id='cost_price'
            placeholder='0.00'
            defaultValue={productState?.cost_price ?? ''}
            onChange={(e) => handleClickProperty('cost_price', e.target.value ?? null)}
            disabled={formState.loading}
            autoComplete='off'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </InputContainer>
        <InputContainer>
          <LabelCustom htmlFor='cost_offer_price'>{t('PRODUCT_REGULAR_COST', 'Product cost - regular price')}</LabelCustom>
          <Input
            name='cost_offer_price'
            id='cost_offer_price'
            placeholder='0.00'
            defaultValue={productState?.cost_offer_price ?? ''}
            onChange={(e) => handleClickProperty('cost_offer_price', e.target.value ?? null)}
            disabled={formState.loading}
            autoComplete='off'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </InputContainer>
      </FieldRow>
      <FieldRow>
        <InputContainer className={`${isShowPriceByWeight ? 'growUnset showWeight' : 'growUnset'}`}>
          <LabelCustom htmlFor='calories'>{t('CALORIES', 'Calories')}</LabelCustom>
          <Input
            name='calories'
            id='calories'
            placeholder='0.00'
            defaultValue={productState?.calories ?? ''}
            onChange={(e) => handleClickProperty('calories', e.target.value ?? null)}
            disabled={formState.loading}
            autoComplete='off'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </InputContainer>
        {isShowPriceByWeight && (
          <InputContainer>
            <LabelCustom htmlFor='weight'>{t('PRODUCT_WEIGHT', 'Product weight')}</LabelCustom>
            <WeightWrapper>
              <Input
                name='weight'
                id='weight'
                placeholder='0.00'
                defaultValue={productState?.weight ?? ''}
                onChange={(e) => handleClickProperty('weight', e.target.value ?? null)}
                disabled={formState.loading}
                autoComplete='off'
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
              />
              <Select
                notAsync
                defaultValue={productState?.weight_unit ?? 'grams'}
                options={weightUnitOptions}
                onChange={(val) => handleClickProperty('weight_unit', val ?? 'grams')}
              />
            </WeightWrapper>
          </InputContainer>
        )}
      </FieldRow>
      <PropertyOptionWrapper>
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
        <PropertyOption>
          <label>{t('HIDE_SPECIAL_INSTRUCTIONS', 'Hide special instructions')}</label>
          <Switch
            defaultChecked={productState?.hide_special_instructions}
            onChange={enabled => handleClickProperty('hide_special_instructions', enabled)}
          />
        </PropertyOption>
        <PropertyOption>
          <label>{t('SHOW_PRICE_BY_WEIGHT', 'Show price by weight')}</label>
          <Switch
            defaultChecked={isShowPriceByWeight}
            onChange={enabled => handleEnablePriceWeight(enabled)}
          />
        </PropertyOption>
      </PropertyOptionWrapper>
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
