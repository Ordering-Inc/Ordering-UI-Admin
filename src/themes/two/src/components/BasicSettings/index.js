import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, BasicSettings as BasicSettingsController } from 'ordering-components-admin'
import { SettingItemUI } from '../SettingItemUI'
import { CategoryDescription } from '../CategoryDescription'

import {
  BasicSettingsContainer,
  Title,
  ContentWrapper
} from './styles'

const BasicSettingsUI = (props) => {

  const {
    categoryList,
    onBasicSettingsRedirect
  } = props

  const [, t] = useLanguage()
  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoryId, setCategoryId] = useState(null)
  const query = new URLSearchParams(useLocation().search)

  useEffect(() => {
    const id = query.get('category')
    if (id === null) setIsOpenDescription(false)
    else {
      setCategoryId(id)
      onBasicSettingsRedirect && onBasicSettingsRedirect(id)
      setIsOpenDescription(true)
    }
  }, [])

  const handleOpenDescription = (category) => {
    setIsOpenDescription(true)
    setSelectedCategory(category)
    setCategoryId(category.id)
    onBasicSettingsRedirect(category.id)
  }

  const handleBackRedirect = () => {
    setIsOpenDescription(false)
    setSelectedCategory(null)
    onBasicSettingsRedirect()
  }

  return (
    <>
      <BasicSettingsContainer>
        <Title>{t('BASIC_SETTINGS', 'Basic settings ')}</Title>
        <ContentWrapper className="row">
          {
            categoryList.loading ? (
              [...Array(12).keys()].map(i => (
                <div className="col-md-4 col-sm-6" key={i}>
                  <SettingItemUI isSkeleton />
                </div>
              ))
            ) : (
              categoryList.categories.map((category, i) => (
                <div className="col-md-4 col-sm-6 category" key={i} onClick={() => handleOpenDescription(category)}>
                  <SettingItemUI category={category} />
                </div>
              ))
            )
          }
        </ContentWrapper>
      </BasicSettingsContainer>
      {
        isOpenDescription && (
          <CategoryDescription
            open={isOpenDescription}
            category={selectedCategory}
            categoryId={categoryId}
            onClose={handleBackRedirect}
          />
        )
      }

    </>
  )
}

export const BasicSettings = (props) => {
  const basicSettingsProps = {
    ...props,
    UIComponent: BasicSettingsUI,
  }
  return (
    <BasicSettingsController {...basicSettingsProps} />
  )
}
