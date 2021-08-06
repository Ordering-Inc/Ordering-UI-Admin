import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SingleBusinessCategory } from '../SingleBusinessCategory'
import { BusinessCategoryCreator } from '../BusinessCategoryCreator'
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
    onClickCategory
  } = props

  const [, t] = useLanguage()
  const [isAddCategory, setIsAddCategory] = useState(false)

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
            !businessState.loading && businessState?.business.categories.length > 0 && businessState?.business.categories.map((category, i) => (
              <SingleBusinessCategory
                {...props}
                key={i}
                category={category}
                categorySelected={categorySelected}
                handleChangeCategory={onClickCategory}
                business={businessState?.business}
              />
            ))
          }
          {
            !businessState.loading && (
              isAddCategory
                ? <BusinessCategoryCreator {...props} setIsAddCategory={setIsAddCategory} business={businessState?.business} />
                : <AddCategory onClick={() => setIsAddCategory(true)}>{t('ADD_NEW_CATEGORY', 'Add new category')}</AddCategory>
            )
          }
        </ListContent>
      </CategoryListContainer>
    </>
  )
}
