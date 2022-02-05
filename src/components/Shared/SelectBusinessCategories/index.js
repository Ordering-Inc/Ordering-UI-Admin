import React, { useState, useRef } from 'react'
import {
  useApi,
  BusinessProductsListing as BusinessProductsListingController
} from 'ordering-components-admin'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import { Checkbox } from '../../../styles'
import Skeleton from 'react-loading-skeleton'

import {
  Container,
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem,
  SkeletonWrapper
} from './styles'

const CategoryTreeNode = (props) => {
  const {
    category,
    index,
    selectedCategoryIds,
    setSelectedCategoryIds
  } = props

  const content = useRef(null)
  const checkboxRef = useRef(null)
  const categoryRef = useRef(null)

  const [setActive, setActiveState] = useState('')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const toggleAccordion = (e) => {
    const isActionsClick = categoryRef.current?.contains(e.target) || checkboxRef.current?.contains(e.target)
    if (isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const handleChangeSelectCategory = (checked) => {
    let categoryIds = []
    if (category?.subcategories?.length > 0) {
      category.subcategories.forEach(function iterate (category) {
        categoryIds = [...categoryIds, category.id]
        Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
      })
    }
    let _selectedCaetegoryIds = []
    if (checked) {
      _selectedCaetegoryIds = [...selectedCategoryIds, ...categoryIds, category.id].filter((value, index, self) => self.indexOf(value) === index)
    } else {
      _selectedCaetegoryIds = selectedCategoryIds.filter(id => id !== category.id && !categoryIds.includes(id))
    }
    setSelectedCategoryIds(_selectedCaetegoryIds)
  }

  return (
    <AccordionSection>
      <Accordion
        onClick={(e) => toggleAccordion(e, category.id)}
      >
        <AccordionItem
          margin={20 * index}
        >
          <GoTriangleDown className={setRotate} />
          <div>
            <Checkbox
              ref={categoryRef}
              checked={selectedCategoryIds.includes(category.id)}
              onChange={e => handleChangeSelectCategory(e.target.checked)}
            />
            <span>{category.name}</span>
          </div>
        </AccordionItem>
      </Accordion>
      <AccordionContent
        ref={content}
        style={{
          maxHeight: !setActive && '0px'
        }}
      >
        {(category?.subcategories && category?.subcategories?.length > 0) && (
          category.subcategories.map(subCategory => (
            <CategoryTreeNode
              {...props}
              key={subCategory.id}
              category={subCategory}
              index={index + 1}
            />
          ))
        )}
      </AccordionContent>
    </AccordionSection>
  )
}

const SelectBusinessCategoriesUI = (props) => {
  const {
    businessState,
    selectedCategoryIds,
    setSelectedCategoryIds
  } = props

  return (
    <Container>
      {businessState?.loading ? (
        <>
          {[...Array(10).keys()].map(i => (
            <SkeletonWrapper key={i}>
              <Skeleton width={16} height={16} />
              <Skeleton width={16} height={16} />
              <Skeleton width={120} height={20} />
            </SkeletonWrapper>
          ))}
        </>
      ) : (
        businessState.business?.categories.sort((a, b) => a.rank - b.rank).map(category => (
          <CategoryTreeNode
            key={category.id}
            index={0}
            category={category}
            selectedCategoryIds={selectedCategoryIds}
            setSelectedCategoryIds={setSelectedCategoryIds}
          />
        ))
      )}
    </Container>
  )
}

export const SelectBusinessCategories = (props) => {
  const [ordering] = useApi()
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    ordering,
    UIComponent: SelectBusinessCategoriesUI,
    isInitialRender,
    isAllCategoryProducts: true,
    isSearchByName: true,
    isSearchByDescription: true,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }
  return (
    <BusinessProductsListingController {...businessProductslistingProps} />
  )
}
