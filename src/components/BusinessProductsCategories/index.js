import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SingleBusinessCategory } from '../SingleBusinessCategory'
import {
  CategoryListContainer,
  HeaderContainer,
  ListContent,
  AddCategory
} from './styles'
import { AccordionDropdown } from '../AccordionDropdown'

const SPACE_CONTANT = 20

const categorySpace = {
  1: 1 * SPACE_CONTANT,
  2: 2 * SPACE_CONTANT,
  3: 3 * SPACE_CONTANT,
  4: 4 * SPACE_CONTANT,
  5: 5 * SPACE_CONTANT
}

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
  const IterateCategories = ({ list, isSub, index = 0 }) => {
    return (
      <>
        {list?.length && list?.map(category => (
          <div key={category?.id ?? category?.name}>
            {(category?.subcategories?.length > 0 || isSub) ? (
              <>
                {category?.subcategories?.length > 0 && (
                  <>
                    <div className='accordion'>
                      <AccordionDropdown
                        category={category}
                        categorySelected={categorySelected}
                        isSelected={categorySelected?.id === category.id}
                        className={`${category.id === 'featured' ? 'special' : ''}`}
                        handleChangeCategory={onClickCategory}
                        handleOpenCategoryDetails={handleOpenCategoryDetails}
                        business={businessState?.business}
                        dataSelected={dataSelected}
                        spaceTab={categorySpace[index ?? 0]}
                        index={index}
                        isSkeleton={businessState?.loading}
                        isOpen={openCategories?.includes(category.id)}
                        onDataSelected={setDataSelected}
                        IterateCategories={IterateCategories}
                        handleUpdateBusinessState={handleUpdateBusinessState}
                        setOpenCategories={setOpenCategories}
                        openCategories={openCategories}
                        setCategorySelected={setCategorySelected}
                      />
                    </div>
                  </>
                )}
                {isSub && !category?.subcategories?.length && (
                  <SingleBusinessCategory
                    category={category}
                    active={categorySelected}
                    className={`${category.id === 'featured' ? 'special' : ''}`}
                    categorySpace={categorySpace[category?.level ?? 1]}
                    handleChangeCategory={onClickCategory}
                    business={businessState?.business}
                    dataSelected={dataSelected}
                    onDataSelected={setDataSelected}
                    handleUpdateBusinessState={handleUpdateBusinessState}
                    spaceTab={categorySpace[index ?? 0]}
                  />
                )}
              </>
            ) : (
              <SingleBusinessCategory
                category={category}
                categorySelected={categorySelected}
                className={`${category.id === 'featured' ? 'special' : ''}`}
                categorySpace={categorySpace[category?.level ?? 1]}
                handleChangeCategory={onClickCategory}
                business={businessState?.business}
                dataSelected={dataSelected}
                onDataSelected={setDataSelected}
                handleUpdateBusinessState={handleUpdateBusinessState}
              />
            )}
          </div>
        ))}
      </>
    )
  }

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
          {businessState?.business?.categories?.length && <IterateCategories list={businessState?.business.categories.sort((a, b) => a.rank - b.rank)} />}
          {/* {
            !businessState.loading && businessState?.business?.categories.length > 0 && (
              businessState?.business.categories.sort((a, b) => a.rank - b.rank).map((category, i) => (
                <SingleBusinessCategory
                  {...props}
                  key={i}
                  category={category}
                  categorySelected={categorySelected}
                  handleChangeCategory={onClickCategory}
                  business={businessState?.business}
                  dataSelected={dataSelected}
                  onDataSelected={setDataSelected}
                  IterateCategories={IterateCategories}
                />
              ))
            )
          } */}
          <AddCategory onClick={() => handleOpenCategoryDetails()}>{t('ADD_NEW_CATEGORY', 'Add new category')}</AddCategory>
        </ListContent>
      </CategoryListContainer>
    </>
  )
}
