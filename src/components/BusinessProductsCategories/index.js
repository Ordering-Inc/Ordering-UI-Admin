import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SingleBusinessCategory } from '../SingleBusinessCategory'
import {
  CategoryListContainer,
  HeaderContainer,
  ListContent,
  AddCategory
} from './styles'

export const BusinessProductsCategories = (props) => {
  const {
    businessState,
    categorySelected,
    onClickCategory,
    handleOpenCategoryDetails
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <CategoryListContainer>
        <HeaderContainer>
          <h1>{t('BUSINESS_CATEGORY', 'Business category')}</h1>
        </HeaderContainer>
        <ListContent>
          {
            businessState.loading && (
              [...Array(6).keys()].map(i => (
                <SingleBusinessCategory key={i} isSkeleton />
              ))
            )
          }
          {
            !businessState.loading && businessState?.business?.categories.length > 0 && (
              businessState?.business.categories.sort((a, b) => a.rank - b.rank).map((category, i) => (
                <SingleBusinessCategory
                  {...props}
                  key={i}
                  category={category}
                  categorySelected={categorySelected}
                  handleChangeCategory={onClickCategory}
                  business={businessState?.business}
                />
              ))
            )
          }
          <AddCategory onClick={() => handleOpenCategoryDetails()}>{t('ADD_NEW_CATEGORY', 'Add new category')}</AddCategory>
        </ListContent>
      </CategoryListContainer>
    </>
  )
}
