import React, { useState, useRef, useEffect } from 'react'
import {
  useUtils,
  useApi,
  BusinessProductsListing as BusinessProductsListingController
} from 'ordering-components-admin'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import {
  Container,
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem,
  WrapperImage,
  Image,
  SkeletonWrapper,
  RadioButton
} from './styles'

const CategoryTreeNode = (props) => {
  const {
    category,
    index,
    selectedProductId,
    setSelectedProductId,
    subCategoriesList,
    selectedCategoryId,
    setSelectedCategoryId
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

  const handleClickProduct = (product) => {
    setSelectedProductId(product.id)
    setSelectedCategoryId(product.category_id)
  }

  return (
    <>
      {subCategoriesList.find(_category => _category.id === category.id)?.productIds?.length > 0 && (
        <AccordionSection>
          <Accordion
            onClick={(e) => toggleAccordion(e, category.id)}
          >
            <AccordionItem
              margin={20 * index}
            >
              <GoTriangleDown className={setRotate} />
              <div>
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
            {category?.products.filter(product => product?.enabled).map(product => (
              <AccordionItem
                key={product.id}
                margin={20 * (index + 1)}
                isProduct
              >
                <div>
                  <RadioButton
                    ref={checkboxRef}
                    onClick={() => handleClickProduct(product)}
                  >
                    {(selectedCategoryId === product?.category_id && selectedProductId === product?.id) ? (
                      <RecordCircleFill color={theme.colors.primary} />
                    ) : (
                      <Circle color={theme.colors.secundaryLight} />
                    )}
                  </RadioButton>
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
      )}
    </>
  )
}

const SelectBusinessProductsUI = (props) => {
  const {
    businessState,
    selectedProductId,
    setSelectedProductId,
    selectedCategoryId,
    setSelectedCategoryId
  } = props

  const [subCategoriesList, setSubCategoriesList] = useState([])

  useEffect(() => {
    if (businessState.loading) return
    const _subCategoriesList = []
    const iterateCategories = (categories) => {
      return (
        categories?.length > 0 && categories?.forEach(category => {
          let productIds = []
          const _productIds = category.products?.reduce((ids, product) => [...ids, product.id], [])
          productIds = [...productIds, ..._productIds]
          if (category?.subcategories?.length) {
            category.subcategories.forEach(function iterate (category) {
              const _productIds = category.products?.reduce((ids, product) => [...ids, product.id], [])
              productIds = [...productIds, ..._productIds]
              Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
            })
          }

          _subCategoriesList.push({
            id: category.id,
            name: category.name,
            productIds: productIds
          })
          iterateCategories(category.subcategories)
        })
      )
    }
    iterateCategories(businessState.business?.categories)
    setSubCategoriesList(_subCategoriesList)
  }, [businessState.business?.categories])

  return (
    <Container>
      {businessState?.loading ? (
        <>
          {[...Array(10).keys()].map(i => (
            <SkeletonWrapper key={i}>
              <Skeleton width={16} height={16} />
              <Skeleton width={120} height={20} />
            </SkeletonWrapper>
          ))}
        </>
      ) : (
        businessState.business?.categories?.filter(category => category?.enabled).sort((a, b) => a.rank - b.rank).map(category => (
          <CategoryTreeNode
            subCategoriesList={subCategoriesList}
            key={category.id}
            index={0}
            category={category}
            selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
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
