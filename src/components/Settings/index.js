import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useEvent, Settings as SettingsController } from 'ordering-components-admin'
import { SettingItemUI } from '../SettingItemUI'
import { SettingsDetail } from '../SettingsDetail'
import { List as MenuIcon, Gear, MegaphoneFill, CheckCircleFill, GeoAltFill } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { SideBar } from '../SideBar'
import { CheckoutFieldsSetting } from '../CheckoutFieldsSetting'
import { AddressFieldsSetting } from '../AddressFieldsSetting'
import { LanguageSetting } from '../LanguageSetting'

import {
  BasicSettingsContainer,
  HeaderTitleContainer,
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
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isOpenSettingDetails, setIsOpenSettingDetails] = useState(null)
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
    setIsOpenSettingDetails(null)
    setIsOpenDescription(true)
    setSelectedCategory(category)
    onBasicSettingsRedirect({ category: category.id })
    handChangeConfig && handChangeConfig(false)
  }

  const handleOpenSettingDetails = (item) => {
    setIsOpenDescription(false)
    setIsOpenSettingDetails(item)
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
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>
            {
              settingsType === 'basic' ? t('BASIC_SETTINGS', 'Basic settings ') : t('OPERATION_SETTINGS', 'Operation settings ')
            }
          </h1>
        </HeaderTitleContainer>
        <ContentWrapper className='row'>
          <SettingItemWrapper
            className='col-md-4 col-sm-6'
            onClick={() => handleOpenSettingDetails('language')}
          >
            <SettingItemUI
              title={t('LANGUAGE_SETTINGS', 'Language settings')}
              description={t('LANGUAGE_SETTINGS_DESC')}
              icon={<MegaphoneFill />}
              active={isOpenSettingDetails === 'language'}
            />
          </SettingItemWrapper>
          <SettingItemWrapper
            className='col-md-4 col-sm-6'
            onClick={() => handleOpenSettingDetails('checkout')}
          >
            <SettingItemUI
              title={t('CHECKOUT_FIELDS', 'Checkout fields')}
              description={t('CHECKOUT_FIELDS_DESC')}
              icon={<CheckCircleFill />}
              active={isOpenSettingDetails === 'checkout'}
            />
          </SettingItemWrapper>
          <SettingItemWrapper
            className='col-md-4 col-sm-6'
            onClick={() => handleOpenSettingDetails('address')}
          >
            <SettingItemUI
              title={t('ADDRESS_FIELDS', 'Address fields')}
              description={t('ADDRESS_FIELDS_DESC')}
              icon={<GeoAltFill />}
              active={isOpenSettingDetails === 'address'}
            />
          </SettingItemWrapper>
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
                    title={category?.name}
                    description={category?.description}
                    icon={category?.image ? <img src={category?.image} /> : <Gear />}
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
      {
        isOpenSettingDetails && (
          <SideBar
            sidebarId='setting-details'
            defaultSideBarWidth={550}
            open={isOpenSettingDetails}
            onClose={() => setIsOpenSettingDetails(null)}
          >
            {isOpenSettingDetails === 'checkout' && (
              <CheckoutFieldsSetting />
            )}
            {isOpenSettingDetails === 'address' && (
              <AddressFieldsSetting />
            )}
            {isOpenSettingDetails === 'language' && (
              <LanguageSetting />
            )}
          </SideBar>
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
