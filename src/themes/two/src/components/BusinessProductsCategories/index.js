import React, { useState } from 'react'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { useLanguage } from 'ordering-components-admin'
import { SingleProductsCategory } from '../SingleProductsCategory'
import { CreateBusinessCategory } from '../CreateBusinessCategory'
import {
  CategoryListContainer,
  HeaderContainer,
  AddButton,
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
  const [isAddCategory, setIsAddCategory] = useState(false)

  return (
    <>
      <CategoryListContainer>
        <HeaderContainer>
          <h1>{t('BUSINESS_CATEGORY', 'Business category')}</h1>
          <AddButton onClick={() => handleOpenCategoryDetails()}>
            <BsPlusSquare />
          </AddButton>
        </HeaderContainer>
        <ListContent>
          {
            businessState.loading && (
              [...Array(6).keys()].map(i => (
                <SingleProductsCategory key={i} isSkeleton />
              ))
            )
          }
          {
            !businessState.loading && businessState?.business.categories.length > 0 && businessState?.business.categories.map((category, i) => (
              <SingleProductsCategory
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
                ? <CreateBusinessCategory {...props} setIsAddCategory={setIsAddCategory} business={businessState?.business} />
                : <AddCategory onClick={() => setIsAddCategory(true)}>{t('ADD_NEW_CATEGORY', 'Add new Category')}</AddCategory>
            )
          }
        </ListContent>
      </CategoryListContainer>
    </>
  )
}
