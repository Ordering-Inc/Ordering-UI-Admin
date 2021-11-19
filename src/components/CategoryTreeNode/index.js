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
    selectedProductsIds,
    setSelectedProductsIds,
    openCategories,
    handleTogglePopover
  } = props

  const RenderNode = ({ category, index = 0 }) => {
    const content = useRef(null)
    const checkboxRef = useRef(null)
    const categoryRef = useRef(null)

    const toggleAccordion = (e, categoryId) => {
      const isActionsClick = categoryRef.current?.contains(e.target) || checkboxRef.current?.contains(e.target)
      if (isActionsClick) return
      handleTogglePopover(categoryId)
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
                defaultChecked={isCheckedCategory()}
                onClick={() => handleChangeSelectCategory()}
              />
              <span>{category.name}</span>
            </div>
            <GoTriangleDown className={`accordion__icon ${openCategories[category.id] && 'rotate'}`} />
          </AccordionItem>
        </Accordion>
        <AccordionContent
          ref={content}
          style={{
            maxHeight: !openCategories[category.id] && '0px'
          }}
        >
          {(category?.subcategories && category?.subcategories?.length > 0) ? (
            category.subcategories.map(subCategory => (
              <RenderNode
                key={subCategory.id}
                category={subCategory}
                index={index + 1}
              />
            ))
          ) : (
            category?.products.map(product => (
              <AccordionItem
                key={product.id}
                margin={20 * (index + 1)}
                isProduct
              >
                <div>
                  <Checkbox
                    ref={checkboxRef}
                    defaultChecked={selectedProductsIds.includes(product.id)}
                    onClick={() => handleClickProduct(product.id)}
                  />
                  <span>{product.name}</span>
                </div>
              </AccordionItem>
            ))
          )}
        </AccordionContent>
      </AccordionSection>
    )
  }
  return (
    <>
      <RenderNode category={category} />
    </>
  )
}
