import React, { useState, useRef } from 'react'
import {
  useUtils,
  useLanguage,
  useApi,
  BusinessProductsListing as BusinessProductsListingController
} from 'ordering-components-admin'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import { Button, Checkbox } from '../../styles'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { SearchBar } from '../SearchBar'

import {
  Container,
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem,
  WrapperImage,
  Image,
  SkeletonWrapper,
  SearchBarWrapper,
  ButtonGroup
} from './styles'

const CategoryTreeNode = (props) => {
  const {
    category,
    index,
    selectedProductsIds,
    setSelectedProductsIds
  } = props

  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

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

  const isCheckedCategory = () => {
    if (category?.products) {
      const productsIds = category.products.reduce((ids, product) => [...ids, product.id], [])
      return productsIds.every(id => selectedProductsIds.includes(id))
    } else {
      return false
    }
  }

  const handleClickProduct = (product) => {
    if (selectedProductsIds.includes(product.id)) {
      const _selectedProductsIds = selectedProductsIds.filter(id => id !== product.id)
      setSelectedProductsIds(_selectedProductsIds)
    } else {
      setSelectedProductsIds([...selectedProductsIds, product.id])
    }
  }

  const handleChangeSelectCategory = () => {
    const productsIds = category.products.reduce((ids, product) => [...ids, product.id], [])
    const everyContain = productsIds.every(id => selectedProductsIds.includes(id))
    let _selectedProductsIds = []
    if (!everyContain) {
      _selectedProductsIds = [...selectedProductsIds, ...productsIds].filter((value, index, self) => self.indexOf(value) === index)
      setSelectedProductsIds(_selectedProductsIds)
    } else {
      _selectedProductsIds = selectedProductsIds.filter(id => !productsIds.includes(id))
      setSelectedProductsIds(_selectedProductsIds)
    }
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
              checked={isCheckedCategory()}
              onChange={() => handleChangeSelectCategory()}
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
        {category?.products.map(product => (
          <AccordionItem
            key={product.id}
            margin={20 * (index + 1)}
            isProduct
          >
            <div>
              <Checkbox
                ref={checkboxRef}
                checked={selectedProductsIds.includes(product.id)}
                onChange={() => handleClickProduct(product)}
              />
              <WrapperImage>
                <Image bgimage={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_50,c_limit')} />
              </WrapperImage>
              <span>{product.name}</span>
            </div>
          </AccordionItem>
        ))}
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

const SelectBusinessProductsUI = (props) => {
  const {
    businessState,
    searchValue,
    handleChangeSearch,

    selectedProductsIds,
    setSelectedProductsIds,

    categoryState
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      {/* <SearchBarWrapper>
        <SearchBar
          placeholder={t('SEARCH', 'Search')}
          isCustomLayout
          lazyLoad
          search={searchValue}
          onSearch={handleChangeSearch}
        />
      </SearchBarWrapper>
      <ButtonGroup>
        <Button
          color='secundaryDark'
          // onClick={() => handleSelectAllProducts()}
        >
          {t('SELECT_ALL', 'Select all')}
        </Button>
        <Button
          color='secundaryDark'
          // onClick={() => handleSelectNoneProducts()}
        >
          {t('SELECT_NONE', 'Select none')}
        </Button>
      </ButtonGroup> */}
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
            selectedProductsIds={selectedProductsIds}
            setSelectedProductsIds={setSelectedProductsIds}
          />
        ))
      )}
    </Container>
  )
}

export const SelectBusinessProducts = (props) => {
  const [ordering] = useApi()
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    ordering,
    UIComponent: SelectBusinessProductsUI,
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
