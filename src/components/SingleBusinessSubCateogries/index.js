import React, { useState, useRef } from 'react'
import { Switch } from '../../styles/Switch'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import { SingleBusinessCategory as SingleBusinessCategoryController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionItem
} from './styles'

const SingleBusinessSubCateogriesUI = (props) => {
  const {
    index,
    category,
    categorySelected,
    isSkeleton,
    handleChangeCategory,
    handelChangeCategoryActive,

    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    onDataSelected,
    dataSelected
  } = props

  const theme = useTheme()

  const conatinerRef = useRef(null)
  const content = useRef(null)

  const [setActive, setActiveState] = useState('')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const toggleAccordion = (e, category) => {
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
    handleChangeCategory(e, category)
  }

  const handleDragOverChange = (e) => {
    const element = e.target.closest('.draggable-category')
    if (element) {
      onDataSelected(element.dataset.index)
    }
    handleDragOver(e)
  }

  const handleDragEndChange = (e) => {
    onDataSelected('')
    handleDragEnd(e)
  }

  return (
    <AccordionSection
      ref={conatinerRef}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOverChange(e)}
      onDragEnd={e => handleDragEndChange(e)}
      className='draggable-category'
      data-index={category?.id}
      isAccept={dataSelected && dataSelected === category?.id.toString()}
    >
      {isSkeleton ? (
        <>
          <Accordion>
            <AccordionItem>
              <div><Skeleton width={120} /></div>
              <Skeleton width={30} />
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <>
          <Accordion
            onClick={(e) => toggleAccordion(e, category)}
          >
            <AccordionItem
              margin={20 * index}
              active={!isSkeleton && (category?.id === categorySelected?.id)}
            >
              <div>
                <img
                  src={theme.images.icons?.sixDots}
                  alt='six dots'
                  draggable
                  onDragStart={e => handleDragStart(e)}
                />
                {category?.subcategories && (
                  category?.subcategories.length > 0 && (
                    <GoTriangleDown className={setRotate} />
                  )
                )}
                <span>{category?.name}</span>
              </div>
              <Switch
                defaultChecked={category?.enabled}
                onChange={handelChangeCategoryActive}
              />
            </AccordionItem>
          </Accordion>
          <AccordionContent
            ref={content}
            style={{
              maxHeight: !setActive && '0px'
            }}
          >
            {category?.subcategories && (
              category.subcategories.map(subCategory => (
                <SingleBusinessSubCateogries
                  {...props}
                  key={subCategory.id}
                  category={subCategory}
                  index={index + 1}
                />
              ))
            )}
          </AccordionContent>
        </>
      )}
    </AccordionSection>
  )
}

export const SingleBusinessSubCateogries = (props) => {
  const { isSkeleton } = props
  const singleBusinessSubCateogriesProps = {
    ...props,
    UIComponent: SingleBusinessSubCateogriesUI
  }
  return (
    <>
      {isSkeleton ? (
        <SingleBusinessSubCateogriesUI {...props} />
      ) : (
        <SingleBusinessCategoryController {...singleBusinessSubCateogriesProps} />
      )}
    </>
  )
}
