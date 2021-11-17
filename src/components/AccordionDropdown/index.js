import React from 'react'
import BiCaretUp from '@meronex/icons/bi/BiCaretUp'
import Skeleton from 'react-loading-skeleton'
import { CategoryTab, CategoryEnableWrapper, CategoryInfoWrapper, AccordionContainer } from './styles'
import { Switch } from '../../styles/Switch'
import { SingleBusinessCategory as SingleBusinessCategoryController } from 'ordering-components-admin'

const AccordionDropdownUI = (props) => {
  const {
    category,
    isSkeleton,
    handelChangeCategoryActive,
    isSelected,
    isOpen,
    IterateCategories,
    spaceTab,
    handleChangeCategory,
    index,
    setOpenCategories,
    openCategories,
    categorySelected,
    setCategorySelected
  } = props

  const handleOnClick = () => {
    setOpenCategories({ values: openCategories.filter(categoryId => categoryId !== categorySelected.id) })
    if (isOpen) {
      setCategorySelected(null)
    }
  }

  return (
    <AccordionContainer className='accordion-category'>
      {isOpen && (
        <div className='accordion-content'>
          <IterateCategories
            list={category.subcategories}
            isSub
            currentCat={category}
            index={index + 1}
          />
        </div>
      )}
      <CategoryTab
        active={isSelected}
        className='accordion-title'
        categorySpace={spaceTab}
        onClick={(e) => isSelected ? handleOnClick() : handleChangeCategory(e, category)}
      >
        <CategoryInfoWrapper>
          {!isSkeleton && (
            <BiCaretUp
              className='rotate'
              style={{
                transform: isOpen
                  ? 'rotate(0deg)'
                  : 'rotate(180deg)'
              }}
            />
          )}
          <span>
            {category.name}
          </span>
        </CategoryInfoWrapper>
        <CategoryEnableWrapper className='business_enable_control'>
          {
            isSkeleton
              ? <Skeleton height={15} width={100} />
              : (
                <Switch
                  defaultChecked={category?.enabled}
                  onChange={handelChangeCategoryActive}
                />
              )
          }
        </CategoryEnableWrapper>
      </CategoryTab>
    </AccordionContainer>
  )
}

export const AccordionDropdown = (props) => {
  const AccordionDropdownController = {
    ...props,
    UIComponent: AccordionDropdownUI
  }
  return <SingleBusinessCategoryController {...AccordionDropdownController} />
}
