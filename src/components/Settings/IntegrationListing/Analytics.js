import React, { useState, useEffect } from 'react'
import { useLanguage, useEvent, Settings as SettingsController } from 'ordering-components-admin'
import { GearFill } from 'react-bootstrap-icons'
import { SettingsDetail } from '../SettingsDetail'
import Skeleton from 'react-loading-skeleton'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CategorySection,
  SettingList,
  SettingItemContainer,
  IconWrapper,
  SettingItemContent
} from './styles'

const AnalyticsUI = (props) => {
  const {
    categoryList
  } = props

  const [, t] = useLanguage()
  const [events] = useEvent()

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)

  const allowOptions = ['facebook_pixel', 'segment', 'google']

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showDetail, setShowDetail] = useState(false)

  const handleBackRedirect = () => {
    setShowDetail(false)
    setSelectedCategory(null)
    history.replace(`${location.pathname}`)
  }

  const onBasicSettingsRedirect = ({ category }) => {
    if (!category) {
      return events.emit('go_to_page', { page: 'integrations', replace: true })
    }
    if (category) {
      events.emit('go_to_page', {
        page: 'integrations',
        search: `?category=${category}`,
        replace: true
      })
    }
  }

  const handleOpenSetting = (category, initialRender) => {
    setSelectedCategory(category)
    setShowDetail(true)
    if (!initialRender) {
      history.replace(`${location.pathname}?category=${category?.id}`)
    }
  }

  useEffect(() => {
    if (categoryList.loading) return
    const categoryId = query.get('category')
    if (categoryId) {
      const categorySelected = categoryList?.categories.find(item => item?.id === parseInt(categoryId))
      if (categorySelected) {
        handleOpenSetting(categorySelected, true)
      }
    }
  }, [categoryList.loading])

  return (
    <CategorySection>
      <h2>{t('ANALYTICS', 'Analytics')}</h2>
      {!categoryList?.loading && (
        <SettingList>
          {categoryList?.categories?.filter(item => allowOptions.includes(item.key)).map(setting => (
            <SettingItemContainer
              key={setting?.id}
              onClick={() => handleOpenSetting(setting)}
            >
              <IconWrapper>
                <GearFill />
              </IconWrapper>
              <SettingItemContent>
                <h5>{setting?.name}</h5>
                <p>{setting?.description}</p>
              </SettingItemContent>
            </SettingItemContainer>
          ))}
        </SettingList>
      )}
      {categoryList?.loading && (
        <SettingList>
          {[...Array(2).keys()].map(i => (
            <SettingItemContainer
              key={i}
            >
              <IconWrapper>
                <Skeleton width={24} height={24} />
              </IconWrapper>
              <SettingItemContent>
                <h5><Skeleton height={18} width={120} /></h5>
                <p><Skeleton height={13} count={2} /></p>
              </SettingItemContent>
            </SettingItemContainer>
          ))}
        </SettingList>
      )}
      {showDetail && (
        <SettingsDetail
          {...props}
          open={showDetail}
          category={selectedCategory}
          onClose={handleBackRedirect}
          onBasicSettingsRedirect={onBasicSettingsRedirect}
        />
      )}
    </CategorySection>
  )
}

export const Analytics = (props) => {
  const paymentGatewayProps = {
    ...props,
    UIComponent: AnalyticsUI,
    settingsType: 'key_operation'
  }
  return <SettingsController {...paymentGatewayProps} />
}
