import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useEvent } from 'ordering-components-admin'
import { Settings as SettingsController } from './naked'
import { SettingItemUI } from '../SettingItemUI'
import { SettingsDetail } from '../SettingsDetail'

import {
  BasicSettingsContainer,
  Title,
  ContentWrapper,
  SettingItemWrapper
} from './styles'

const SettingsUI = (props) => {
  const {
    categoryList,
    settingsType,
    handChangeConfig
  } = props

  const [, t] = useLanguage()
  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { search } = useLocation()

  let category

  if (search) {
    const data = search.substring(1).split('&')
    category = data[0]
  }

  const categoryId = category && category.split('=')[1]
  const [events] = useEvent()

  const onBasicSettingsRedirect = ({ category }) => {
    if (!category) {
      if (settingsType === 'basic') return events.emit('go_to_page', { page: 'basicSettings', replace: true })
      if (settingsType === 'operation') return events.emit('go_to_page', { page: 'operationSettings', replace: true })
    }
    if (category) {
      events.emit('go_to_page', {
        page: settingsType === 'basic' ? 'basicSettings' : 'operationSettings',
        search: `?category=${category}`,
        replace: true
      })
    }
  }

  const handleOpenDescription = (category) => {
    setIsOpenDescription(true)
    setSelectedCategory(category)
    onBasicSettingsRedirect({ category: category.id })
    handChangeConfig && handChangeConfig(false)
  }

  const handleBackRedirect = () => {
    setIsOpenDescription(false)
    setSelectedCategory(null)
    onBasicSettingsRedirect({ category: null })
  }

  useEffect(() => {
    if (categoryId) {
      onBasicSettingsRedirect({ category: categoryId })
      setIsOpenDescription(true)
    } else {
      setIsOpenDescription(false)
    }
  }, [])

  useEffect(() => {
    if (categoryId && categoryList?.categories?.length > 0) {
      const categorySelected = categoryList?.categories.find(item => item.id === parseInt(categoryId))
      setSelectedCategory(categorySelected)
    }
  }, [categoryList?.categories])

  return (
    <>
      <BasicSettingsContainer>
        <Title>
          {
            settingsType === 'basic' ? t('BASIC_SETTINGS', 'Basic settings ') : t('OPERATION_SETTINGS', 'Operation settings ')
          }
        </Title>
        <ContentWrapper className='row'>
          {
            categoryList.loading ? (
              [...Array(12).keys()].map(i => (
                <SettingItemWrapper className='col-md-4 col-sm-6' key={i}>
                  <SettingItemUI isSkeleton />
                </SettingItemWrapper>
              ))
            ) : (
              categoryList.categories.map((category, i) => (
                <SettingItemWrapper
                  key={i}
                  className='col-md-4 col-sm-6'
                  onClick={() => handleOpenDescription(category)}
                >
                  <SettingItemUI
                    category={category}
                    active={selectedCategory?.id === category?.id}
                  />
                </SettingItemWrapper>
              ))
            )
          }
        </ContentWrapper>
      </BasicSettingsContainer>
      {
        isOpenDescription && (
          <SettingsDetail
            {...props}
            open={isOpenDescription}
            category={selectedCategory}
            onClose={handleBackRedirect}
            onBasicSettingsRedirect={onBasicSettingsRedirect}
          />
        )
      }
    </>
  )
}

export const Settings = (props) => {
  const settingsProps = {
    ...props,
    UIComponent: SettingsUI
  }
  return (
    <SettingsController {...settingsProps} />
  )
}
