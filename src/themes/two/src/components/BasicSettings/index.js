import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useEvent } from 'ordering-components-admin'
import { BasicSettings as BasicSettingsController } from './naked'
import { SettingItemUI } from '../SettingItemUI'
import { CategoryDescription } from '../CategoryDescription'

import {
  BasicSettingsContainer,
  Title,
  ContentWrapper
} from './styles'

const BasicSettingsUI = (props) => {
  const {
    categoryList
  } = props

  const [, t] = useLanguage()
  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { search } = useLocation()

  let category
  let config

  if (search) {
    const data = search.substring(1).split('&')
    category = data[0]
    config = data[1]
  }

  const categoryId = category && category.split('=')[1]
  const configId = config && config.split('=')[1]
  const [events] = useEvent()

  useEffect(() => {
    if (categoryId && configId) {
      onBasicSettingsRedirect({ category: categoryId, config: configId })
      setIsOpenDescription(true)
    } else if (categoryId) {
      onBasicSettingsRedirect({ category: categoryId })
      setIsOpenDescription(true)
    } else {
      setIsOpenDescription(false)
    }
  }, [])

  const onBasicSettingsRedirect = ({ category, config }) => {
    if (!category && !config) {
      return events.emit('go_to_page', { page: 'basicSettings', replace: true })
    }
    if (!config && category) {
      events.emit('go_to_page', {
        page: 'basicSettings',
        search: `?category=${category}`,
        replace: true
      })
    }
    if (category && config) {
      events.emit('go_to_page', {
        page: 'basicSettings',
        search: `?category=${category}&config=${config}`,
        replace: true
      })
    }
  }

  const handleOpenDescription = (category) => {
    setIsOpenDescription(true)
    setSelectedCategory(category)
    onBasicSettingsRedirect({ category: category.id })
  }

  const handleBackRedirect = () => {
    setIsOpenDescription(false)
    setSelectedCategory(null)
    onBasicSettingsRedirect({ category: null, config: null })
  }

  return (
    <>
      <BasicSettingsContainer>
        <Title>{t('BASIC_SETTINGS', 'Basic settings ')}</Title>
        <ContentWrapper className='row'>
          {
            categoryList.loading ? (
              [...Array(12).keys()].map(i => (
                <div className='col-md-4 col-sm-6' key={i}>
                  <SettingItemUI isSkeleton />
                </div>
              ))
            ) : (
              categoryList.categories.map((category, i) => (
                <div className='col-md-4 col-sm-6 category' key={i} onClick={() => handleOpenDescription(category)}>
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
            configId={configId}
            onClose={handleBackRedirect}
            onBasicSettingsRedirect={onBasicSettingsRedirect}
          />
        )
      }

    </>
  )
}

export const BasicSettings = (props) => {
  const basicSettingsProps = {
    ...props,
    UIComponent: BasicSettingsUI
  }
  return (
    <BasicSettingsController {...basicSettingsProps} />
  )
}
