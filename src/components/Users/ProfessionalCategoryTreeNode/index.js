import React, { useState, useRef, useEffect } from 'react'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import { CheckSquareFill, Square } from 'react-bootstrap-icons'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem,
  CheckboxWrapper
} from './styles'

export const ProfessionalCategoryTreeNode = (props) => {
  const {
    category,
    index,
    selectedProductsIds,
    // setSelectedProductsIds,

    // selectedProducts,
    // setSelectedProducts,

    subCategoriesList,
    handleCreateService,
    handleDeleteService,
    searchValue
  } = props

  const content = useRef(null)
  const checkboxRef = useRef(null)
  const categoryRef = useRef(null)

  const [setActive, setActiveState] = useState('active')
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
    if (selectedProductsIds.includes(product.id)) {
      handleDeleteService && handleDeleteService(product.id)
    } else {
      handleCreateService && handleCreateService(product.id)
    }
  }

  useEffect(() => {
    if (searchValue) setActiveState('active')
  }, [searchValue])

  return (
    <>
      {subCategoriesList.find(_category => _category.id === category.id)?.productIds?.length > 0 && (
        <AccordionSection isParent={!category?.parent_category_id}>
          <Accordion
            onClick={(e) => toggleAccordion(e, category.id)}
          >
            <AccordionItem
              margin={20 * index}
            >
              <div>
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
                <ProfessionalCategoryTreeNode
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
