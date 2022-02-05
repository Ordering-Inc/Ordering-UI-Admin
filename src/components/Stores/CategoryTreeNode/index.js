import React, { useState, useRef, useEffect } from 'react'
import { Checkbox } from '../../../styles'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem
} from './styles'

export const CategoryTreeNode = (props) => {
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
  const [isCategoryChecked, setIsCategoryChecked] = useState(false)

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
    if (_category?.productIds?.length > 0) {
      return _category?.productIds.every(id => selectedProductsIds.includes(id))
    } else {
      return false
    }
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
    if (category?.products?.length) {
      setIsCategoryChecked(isCheckedCategory())
    }
  }, [selectedProductsIds])

  const onChangeCategory = (checked) => {
    setIsCategoryChecked(checked)
    handleChangeSelectCategory()
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
              <div>
                <Checkbox
                  ref={categoryRef}
                  checked={isCategoryChecked}
                  onChange={e => onChangeCategory(e.target.checked)}
                />
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
                  <Checkbox
                    ref={checkboxRef}
                    checked={selectedProductsIds.includes(product.id)}
                    onChange={() => handleClickProduct(product)}
                  />
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
