import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import AiFillMinusSquare from '@meronex/icons/ai/AiFillMinusSquare'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'

import {
  BusinessMenuBasicContainer,
  FieldName,
  OrderType,
  CategoryProductsContainer,
  BusinessCategoryContainer,
  CheckboxContainer,
  CheckBoxWrapper,
  ProductContainer
} from './styles'

export const BusinessMenuBasicOptions = (props) => {
  const {
    business,
    businessMenuState,
    formState,
    handleChangeInput,
    handleCheckOrderType,
    handleCheckCategory,
    handleClickCategory,
    handleCheckProduct,
    handleUpdateBusinessMenuOption,
    handleAddBusinessMenuOption
  } = props
  const [, t] = useLanguage()
  const [openCategoryProduct, setOpenCategoryProduct] = useState({})
  const isEdit = Object.keys(businessMenuState?.menu).length

  const orderTypes = [
    { value: 1, key: 'delivery', content: t('DELIVERY', 'Delivery') },
    { value: 2, key: 'pickup', content: t('PICKUP', 'Pickup') },
    { value: 3, key: 'eatin', content: t('EAT_IN', 'Eat in') },
    { value: 4, key: 'curbside', content: t('CURBSIDE', 'Curbside') },
    { value: 5, key: 'driver_thru', content: t('DRIVE_THRU', 'Drive thru') }
  ]
  const handleTogglePopover = (type) => {
    setOpenCategoryProduct({
      ...openCategoryProduct,
      [type]: !openCategoryProduct[type]
    })
  }

  const isCheckedCategory = (categoryId) => {
    if (!isEdit) return 'nothing'
    const businessCategory = business?.categories.find(category => category.id === categoryId)
    const menuProducts = businessMenuState?.menu?.products.filter(product => product?.category_id === categoryId)
    let result = ''
    if (businessCategory?.products.length === menuProducts.length) result = 'all'
    else if (menuProducts.length) result = 'some'
    else result = 'nothing'
    return result
  }

  const isCheckedProduct = (categoryId, productId) => {
    if (!isEdit) return false
    const found = businessMenuState?.menu?.products.find(product => product?.category_id === categoryId && product.id === productId)
    return found
  }

  return (
    <BusinessMenuBasicContainer>
      <FieldName>{t('BUSINESS_NAME', 'Business name')}</FieldName>
      <Input
        name='name'
        placeholder={t('NAME', 'Name')}
        defaultValue={
          formState?.result?.result
            ? formState?.result?.result?.name
            : formState?.changes?.name ?? businessMenuState?.menu?.name ?? ''
        }
        onChange={(e) => handleChangeInput(e)}
      />
      <FieldName isBorderBottom>{t('DELIVERY_TYPE', 'Delivery type')}</FieldName>
      {orderTypes.map(orderType => (
        <OrderType
          key={orderType.value}
          active={(formState?.result?.result
            ? formState?.result?.result[orderType.key]
            : formState?.changes[orderType.key] ?? businessMenuState.menu[orderType.key])}
          onClick={() => handleCheckOrderType(orderType.key)}
        >
          {
            (formState?.result?.result
              ? formState?.result?.result[orderType.key]
              : formState?.changes[orderType.key] ?? businessMenuState.menu[orderType.key])
              ? (
                <RiCheckboxFill />
              ) : (
                <RiCheckboxBlankLine />
              )
          }
          <span>{orderType.content}</span>
        </OrderType>
      ))}
      {/* <BusinessScheduleWrapper>
        <BusinessSchedule
          business={business}
          handleSuccessBusinessScheduleUpdate={handleUpdateBusinessState}
        />
      </BusinessScheduleWrapper> */}
      <FieldName>{t('COMMENTS', 'Comments')}</FieldName>
      <TextArea
        rows={4}
        name='comment'
        defaultValue={
          formState?.result?.result
            ? formState?.result?.result?.comment
            : formState?.changes?.comment ?? businessMenuState?.menu?.comment ?? ''
        }
        placeholder={t('WRITE_HERE', 'Write here')}
        onChange={(e) => handleChangeInput(e)}
      />
      <FieldName isBorderBottom>{t('PRODUCTS', 'Products')}</FieldName>
      {business?.categories.map(category => (
        <CategoryProductsContainer key={category.id}>
          <BusinessCategoryContainer
            active={openCategoryProduct[category?.name]}
          >
            <CheckboxContainer
              onClick={() => handleClickCategory(category.id)}
            >
              <CheckBoxWrapper
                active={
                  (handleCheckCategory(category.id) === 'all' ?? isCheckedCategory(category.id) === 'all') ||
                  (handleCheckCategory(category.id) === 'some' ?? isCheckedCategory(category.id) === 'some')
                }
              >
                {
                  ((formState?.result?.result?.products || formState?.changes?.products)
                    ? handleCheckCategory(category.id) === 'all'
                    : isCheckedCategory(category.id) === 'all')
                    ? (
                      <RiCheckboxFill />
                    ) : (
                      ((formState?.result?.result?.products || formState?.changes?.products)
                        ? handleCheckCategory(category.id) === 'some'
                        : isCheckedCategory(category.id) === 'some')
                        ? (
                          <AiFillMinusSquare />
                        ) : (
                          <RiCheckboxBlankLine />
                        )
                    )
                }
              </CheckBoxWrapper>
              <span className='bold'>{category?.name}</span>
            </CheckboxContainer>
            <GoTriangleDown
              onClick={() => handleTogglePopover(category?.name)}
            />
          </BusinessCategoryContainer>
          {openCategoryProduct[category?.name] && (
            <>
              {category?.products.map(product => (
                <ProductContainer
                  key={product.id}
                  onClick={() => handleCheckProduct(product.id)}
                >
                  <CheckboxContainer>
                    <CheckBoxWrapper
                      active={(formState?.result?.result
                        ? formState?.result?.products.includes(product?.id)
                        : formState?.changes?.products
                          ? formState?.changes?.products.includes(product?.id)
                          : isCheckedProduct(product?.category_id, product?.id))}
                    >
                      {
                        (formState?.result?.result
                          ? formState?.result?.products.includes(product?.id)
                          : formState?.changes?.products
                            ? formState?.changes?.products.includes(product?.id)
                            : isCheckedProduct(product?.category_id, product?.id))
                          ? (
                            <RiCheckboxFill />
                          ) : (
                            <RiCheckboxBlankLine />
                          )
                      }
                    </CheckBoxWrapper>
                    <span>{product?.name}</span>
                  </CheckboxContainer>
                </ProductContainer>
              ))}
            </>
          )}
        </CategoryProductsContainer>
      ))}
      {Object.keys(formState?.changes).length > 0 && (
        <Button
          color='primary'
          borderRadius='5px'
          disabled={formState.loading}
          onClick={() => isEdit ? handleUpdateBusinessMenuOption() : handleAddBusinessMenuOption()}
        >
          {formState.loading ? (
            t('LOADING', 'Loading')
          ) : (
            isEdit ? (
              t('UPDATE', 'Update')
            ) : (
              t('ADD', 'Add')
            )
          )}
        </Button>
      )}
    </BusinessMenuBasicContainer>
  )
}
