import React from 'react'
import BiCaretUp from '@meronex/icons/bi/BiCaretUp'
import Skeleton from 'react-loading-skeleton'
import { CategoryTab, CategoryEnableWrapper, CategoryInfoWrapper } from './styles'
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
    handleChangeCategory
  } = props

  return (
    <div className='accordion-category' style={{ display: 'flex', flexDirection: 'column-reverse' }}>
      {isOpen && (
        <div className='accordion-content'>
          <IterateCategories
            list={category.subcategories}
            isSub
            currentCat={category}
          />
        </div>
      )}
      <CategoryTab
        active={isSelected}
        className='accordion-title'
        categorySpace={spaceTab}
        onClick={(e) => handleChangeCategory(e, category)}
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
    </div>
  )
}

export const AccordionDropdown = (props) => {
  const AccordionDropdownController = {
    ...props,
    UIComponent: AccordionDropdownUI
  }
  return <SingleBusinessCategoryController {...AccordionDropdownController} />
}
