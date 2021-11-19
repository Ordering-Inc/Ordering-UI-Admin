import React from 'react'
import { SingleBusinessCategory } from '../SingleBusinessCategory'
import { AccordionDropdown } from '../AccordionDropdown'

const SPACE_CONTANT = 20

const categorySpace = {
  1: 1 * SPACE_CONTANT,
  2: 2 * SPACE_CONTANT,
  3: 3 * SPACE_CONTANT,
  4: 4 * SPACE_CONTANT,
  5: 5 * SPACE_CONTANT
}
export const IterateCategories = (props) => {
  const {
    list,
    isSub,
    index,
    categorySelected,
    onClickCategory,
    businessState,
    dataSelected,
    setDataSelected,
    handleUpdateBusinessState,
    handleOpenCategoryDetails,
    openCategories,
    setOpenCategories,
    setCategorySelected
  } = props

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
