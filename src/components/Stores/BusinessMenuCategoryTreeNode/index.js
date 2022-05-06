import React, { useState, useRef, useEffect } from 'react'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import { DashSquareFill, CheckSquareFill, Square } from 'react-bootstrap-icons'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem,
  CheckboxWrapper
} from './styles'

export const BusinessMenuCategoryTreeNode = (props) => {
  const {
    category,
    index,
    selectedProductsIds,
    setSelectedProductsIds,

    selectedProducts,
    setSelectedProducts,

    subCategoriesList
  } = props

  const content = useRef(null)
  const checkboxRef = useRef(null)
  const categoryRef = useRef(null)

  const [setActive, setActiveState] = useState('')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const [isCategoryState, setIsCategoryState] = useState(0)

  const toggleAccordion = (e) => {
    const isActionsClick = categoryRef.current?.contains(e.target) || checkboxRef.current?.contains(e.target)
    if (isActionsClick) return
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  const isCheckedCategory = () => {
    const _category = subCategoriesList.find(item => item.id === category.id)
    if (_category?.productIds.every(id => selectedProductsIds.includes(id))) {
      return 2
    } else if (_category?.productIds.some(id => selectedProductsIds.includes(id))) {
      return 1
    }
    return 0
  }

  const handleClickProduct = (product) => {
    if (selectedProductsIds.includes(product.id)) {
      const _selectedProductsIds = selectedProductsIds.filter(id => id !== product.id)
      setSelectedProductsIds(_selectedProductsIds)

      if (selectedProducts) {
        const _selectedProducts = selectedProducts.filter(_product => _product.id !== product.id)
        setSelectedProducts(_selectedProducts)
      }
    } else {
      setSelectedProductsIds([...selectedProductsIds, product.id])
      if (selectedProducts) {
        setSelectedProducts([...selectedProducts, product])
      }
    }
  }

  const handleChangeSelectCategory = () => {
    const productsIds = subCategoriesList.find(item => item.id === category.id)?.productIds || []

    const everyContain = productsIds.every(id => selectedProductsIds.includes(id))
    let _selectedProductsIds = []
    let _selectedProducts = []
    if (!everyContain) {
      _selectedProductsIds = [...selectedProductsIds, ...productsIds].filter((value, index, self) => self.indexOf(value) === index)
      setSelectedProductsIds(_selectedProductsIds)

      if (selectedProducts) {
        const uniqueArr = []
        _selectedProducts = [...selectedProducts, ...category.products].filter(product => {
          const index = uniqueArr.findIndex(item => (item.id === product.id))
          if (index <= -1) {
            uniqueArr.push(product)
          }
          return null
        })

        setSelectedProducts(uniqueArr)
      }
    } else {
      _selectedProductsIds = selectedProductsIds.filter(id => !productsIds.includes(id))
      setSelectedProductsIds(_selectedProductsIds)

      if (selectedProducts) {
        _selectedProducts = selectedProducts.filter(product => !productsIds.includes(product.id))
        setSelectedProducts(_selectedProducts)
      }
    }
  }

  useEffect(() => {
    setIsCategoryState(isCheckedCategory())
  }, [selectedProductsIds])

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
              <div>
                <CheckboxWrapper
                  ref={categoryRef}
                  active={isCategoryState}
                  onClick={() => handleChangeSelectCategory()}
                >
                  {isCategoryState === 2 ? (
                    <CheckSquareFill />
                  ) : (
                    isCategoryState === 1 ? <DashSquareFill /> : <Square />
                  )}
                </CheckboxWrapper>
                <span>{category.name}</span>
              </div>
              <GoTriangleDown className={setRotate} />
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
                  <CheckboxWrapper
                    ref={checkboxRef}
                    active={selectedProductsIds.includes(product.id)}
                    onClick={() => handleClickProduct(product)}
                  >
                    {selectedProductsIds.includes(product.id) ? <CheckSquareFill /> : <Square />}
                  </CheckboxWrapper>
                  <span>{product.name}</span>
                </div>
              </AccordionItem>
            ))}
            {(category?.subcategories && category?.subcategories?.length > 0) && (
              category.subcategories.map(subCategory => (
                <BusinessMenuCategoryTreeNode
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
