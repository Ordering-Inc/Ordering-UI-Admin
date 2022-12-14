import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent, useConfig, Settings as SettingsController } from 'ordering-components-admin'
import { SettingItemUI } from '../SettingItemUI'
import { SettingsDetail } from '../SettingsDetail'
import { List as MenuIcon, GearFill, MegaphoneFill, CheckCircleFill, GeoAltFill, InfoCircle } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { SideBar } from '../../Shared'
import { CheckoutFieldsSetting } from '../CheckoutFieldsSetting'
import { AddressFieldsSetting } from '../AddressFieldsSetting'
import { LanguageSetting } from '../LanguageSetting'
import { MultiCountrySettings } from '../MultiCountrySettings'

import {
  BasicSettingsContainer,
  HeaderTitleContainer,
  ContentWrapper,
  SettingItemWrapper,
  WrapperNoneConfigs,
  InnerNoneConfigsContainer,
  InfoWrapper,
  InfoContent
} from './styles'

const SettingsUI = (props) => {
  const {
    categoryList,
    settingsType,
    handChangeConfig
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const isMulticountryEnabled = configs?.multicountry?.value

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const { search } = useLocation()

  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isOpenSettingDetails, setIsOpenSettingDetails] = useState(null)
  const [openMultiCountrySettings, setOpenMultiCountrySettings] = useState(false)
  const [moveDistance, setMoveDistance] = useState(0)

  let category

  if (search) {
    const data = search.substring(1).split('&')
    category = data[0]
  }

  const categoryId = category && category.split('=')[1]
  const [events] = useEvent()

  const settingPageList = {
    key_basic: 'basic_settings',
    key_operation: 'operation_settings',
    key_plugin: 'plugin_settings'
  }

  const onBasicSettingsRedirect = ({ category }) => {
    if (!category) {
      return events.emit('go_to_page', { page: settingPageList[settingsType], replace: true })
    }
    if (category) {
      events.emit('go_to_page', {
        page: settingPageList[settingsType],
        search: `?category=${category}`,
        replace: true
      })
    }
  }

  const handleOpenDescription = (category) => {
    setIsOpenSettingDetails(null)
    setOpenMultiCountrySettings(false)
    setIsOpenDescription(true)
    setSelectedCategory(category)
    onBasicSettingsRedirect({ category: category?.id })
    handChangeConfig && handChangeConfig(false)
  }

  const handleOpenSettingDetails = (item) => {
    setIsOpenDescription(false)
    setOpenMultiCountrySettings(false)
    setSelectedCategory(null)
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
      const categorySelected = categoryList?.categories.find(item => item?.id === parseInt(categoryId))
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
            {settingsType === 'key_basic' && t('BASIC_SETTINGS', 'Basic settings ')}
            {settingsType === 'key_operation' && t('OPERATION_SETTINGS', 'Operation settings ')}
            {settingsType === 'key_plugin' && t('PLUGIN_SETTINGS', 'Plugin settings ')}
          </h1>
          {settingsType === 'key_plugin' && (
            <InfoWrapper>
              <IconButton
                color='primary'
              >
                <InfoCircle />
              </IconButton>
              <InfoContent>
                {t('MANAGE_CONFIG_ALL_PLUGINS', 'Manage and configure all your plugins in this tab')}
                <span onClick={() => events.emit('go_to_page', { page: 'integrations', search: '?id=plugins' })}>{t('ADD_NEW_PLUGIN', 'Add a new plugin')}</span>
              </InfoContent>
            </InfoWrapper>
          )}

        </HeaderTitleContainer>
        <ContentWrapper className='row'>
          {settingsType === 'key_basic' && (
            <>
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
              {isMulticountryEnabled && (
                <SettingItemWrapper
                  className='col-md-4 col-sm-6'
                  onClick={() => {
                    setIsOpenDescription(false)
                    setIsOpenSettingDetails(null)
                    setOpenMultiCountrySettings(true)
                  }}
                >
                  <SettingItemUI
                    title={t('MULTI_COUNTRY_SETTINGS', 'Multi country settings')}
                    description={t('MULTI_COUNTRY_SETTINGS_DESC', 'Settings according country')}
                    icon={<GearFill />}
                    active={openMultiCountrySettings}
                  />
                </SettingItemWrapper>
              )}
            </>
          )}
          {
            categoryList.loading ? (
              [...Array(12).keys()].map(i => (
                <SettingItemWrapper className='col-md-4 col-sm-6' key={i}>
                  <SettingItemUI isSkeleton />
                </SettingItemWrapper>
              ))
            ) : (
              categoryList.categories.map((category, i) => (
                <React.Fragment key={i}>
                  <SettingItemWrapper
                    className='col-md-4 col-sm-6'
                    onClick={() => handleOpenDescription(category)}
                  >
                    <SettingItemUI
                      title={category?.name}
                      description={category?.description}
                      icon={category?.image ? <img src={category?.image} /> : <GearFill />}
                      active={selectedCategory?.id === category?.id}
                    />
                  </SettingItemWrapper>
                </React.Fragment>
              ))
            )
          }
        </ContentWrapper>
        {!categoryList.loading && categoryList.categories?.length === 0 && settingsType !== 'key_basic' && (
          <WrapperNoneConfigs>
            <InnerNoneConfigsContainer>
              <img src={theme?.images?.dummies?.noOrders} alt='none' />
              <p>{t('NO_SETTINGS', 'No Settings yet.')}</p>
            </InnerNoneConfigsContainer>
          </WrapperNoneConfigs>
        )}
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
      {openMultiCountrySettings && (
        <SideBar
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
          open={openMultiCountrySettings}
          onClose={() => {
            setMoveDistance(0)
            setOpenMultiCountrySettings(false)
          }}
        >
          <MultiCountrySettings setMoveDistance={setMoveDistance} />
        </SideBar>
      )}
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
