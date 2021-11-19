import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SingleBusinessCategory } from '../SingleBusinessCategory'
import { IterateCategories } from './IterateCategories'

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
    handleOpenCategoryDetails,
    openCategories,
    handleUpdateBusinessState,
    setOpenCategories,
    setCategorySelected
  } = props

  const [, t] = useLanguage()
  const [dataSelected, setDataSelected] = useState('')

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
          {businessState?.business?.categories?.length && (
            <IterateCategories
              list={businessState?.business.categories.sort((a, b) => a.rank - b.rank)}
              isSub={false}
              index={0}
              categorySelected={categorySelected}
              onClickCategory={onClickCategory}
              businessState={businessState}
              dataSelected={dataSelected}
              setDataSelected={setDataSelected}
              handleUpdateBusinessState={handleUpdateBusinessState}

              handleOpenCategoryDetails={handleOpenCategoryDetails}
              openCategories={openCategories}
              setOpenCategories={setOpenCategories}
              setCategorySelected={setCategorySelected}
            />
          )}
          <AddCategory onClick={() => handleOpenCategoryDetails()}>{t('ADD_NEW_CATEGORY', 'Add new category')}</AddCategory>
        </ListContent>
      </CategoryListContainer>
    </>
  )
}
