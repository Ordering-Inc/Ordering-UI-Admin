import React, { useState, useRef } from 'react'
import { Checkbox } from '../../styles'
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
    setSelectedProductsIds
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

  const isCheckedCategory = () => {
    if (category?.products) {
      const productsIds = category.products.reduce((ids, product) => [...ids, product.id], [])
      return productsIds.every(id => selectedProductsIds.includes(id))
    } else {
      return false
    }
  }

  const handleClickProduct = (productId) => {
    if (selectedProductsIds.includes(productId)) {
      const _selectedProductsIds = selectedProductsIds.filter(id => id !== productId)
      setSelectedProductsIds(_selectedProductsIds)
    } else {
      setSelectedProductsIds([...selectedProductsIds, productId])
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
          <div>
            <Checkbox
              ref={categoryRef}
              checked={isCheckedCategory()}
              onChange={() => handleChangeSelectCategory()}
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
                onChange={() => handleClickProduct(product.id)}
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
  )
}
