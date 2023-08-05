import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useLanguage, useEvent, useConfig, Settings as SettingsController } from 'ordering-components-admin'
import { SettingItemUI } from '../SettingItemUI'
import { SettingsDetail } from '../SettingsDetail'
import { List as MenuIcon, GearFill, MegaphoneFill, CheckCircleFill, GeoAltFill, InfoCircle, CreditCard } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { SideBar } from '../../Shared'
import { CheckoutFieldsSetting } from '../CheckoutFieldsSetting'
import { AddressFieldsSetting } from '../AddressFieldsSetting'
import { LanguageSetting } from '../LanguageSetting'
import { SitesAuthSettings } from '../SitesAuthSettings'
import { MultiCountrySettings } from '../MultiCountrySettings'
import { CardFieldsSetting } from '../CardFieldsSetting'
import { GuestCheckoutFieldsSetting } from '../GuestCheckoutFieldsSetting'

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

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ configs }] = useConfig()
  const isMulticountryEnabled = configs?.multicountry?.value

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isOpenSettingDetails, setIsOpenSettingDetails] = useState(null)
  const [openSitesAuthSettings, setOpenSitesAuthSettings] = useState(false)
  const [openMultiCountrySettings, setOpenMultiCountrySettings] = useState(false)
  const [openCheckoutSettings, setOpenCheckoutSettings] = useState(false)
  const [moveDistance, setMoveDistance] = useState(0)

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

  const handleOpenDescription = (category, isInitialRender) => {
    setIsOpenSettingDetails(null)
    setOpenSitesAuthSettings(false)
    setOpenMultiCountrySettings(false)
    setOpenCheckoutSettings(false)
    setIsOpenDescription(true)
    setSelectedCategory(category)
    handChangeConfig && handChangeConfig(false)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?category=${category?.id}`)
    }
  }

  const handleOpenSettingDetails = (item, isInitialRender) => {
    setIsOpenDescription(false)
    setOpenSitesAuthSettings(false)
    setOpenCheckoutSettings(false)
    setOpenMultiCountrySettings(false)
    setSelectedCategory(null)
    setIsOpenSettingDetails(item)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?category=${item}`)
    }
  }

  const handleOpenSites = (isInitialRender) => {
    setIsOpenDescription(false)
    setIsOpenSettingDetails(null)
    setOpenSitesAuthSettings(true)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?category=sites`)
    }
  }

  const handleOpenMultiCountry = (isInitialRender) => {
    setIsOpenDescription(false)
    setIsOpenSettingDetails(null)
    setOpenMultiCountrySettings(true)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?category=multi_country`)
    }
  }

  const handleOpenCheckout = (isInitialRender) => {
    setIsOpenDescription(false)
    setIsOpenSettingDetails(null)
    setOpenSitesAuthSettings(false)
    setOpenCheckoutSettings(true)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?category=site`)
    }
  }

  const handleBackRedirect = () => {
    setIsOpenDescription(false)
    setSelectedCategory(null)
    setIsOpenSettingDetails(null)
    setMoveDistance(0)
    setOpenMultiCountrySettings(false)
    setOpenCheckoutSettings(false)
    setOpenSitesAuthSettings(false)
    history.replace(`${location.pathname}`)
  }

  useEffect(() => {
    if (categoryList.loading) return
    const categoryId = query.get('category')
    if (categoryId) {
      if (isNaN(Number(categoryId))) {
        if (categoryId === 'sites') {
          handleOpenSites(true)
        } else if (categoryId === 'multi_country') {
          handleOpenMultiCountry(true)
        } else if (categoryId === 'site') {
          setOpenCheckoutSettings(true)
        } else {
          handleOpenSettingDetails(categoryId, true)
        }
      } else {
        const categorySelected = categoryList?.categories.find(item => item?.id === parseInt(categoryId))
        if (categorySelected) {
          handleOpenDescription(categorySelected, true)
        }
      }
    }
  }, [categoryList.loading])

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
                onClick={() => handleOpenCheckout()}
              >
                <SettingItemUI
                  title={t('CHECKOUT_FIELDS', 'Checkout fields')}
                  description={t('CHECKOUT_FIELDS_DESC')}
                  icon={<CheckCircleFill />}
                  active={openCheckoutSettings}
                />
              </SettingItemWrapper>
              <SettingItemWrapper
                className='col-md-4 col-sm-6'
                onClick={() => handleOpenSettingDetails('guest_checkout')}
              >
                <SettingItemUI
                  title={t('GUEST_CHECKOUT_FIELDS', 'Guest checkout fields')}
                  description={t('GUEST_CHECKOUT_FIELDS_DESC', 'Which fields do you want to show on the guest checkout page?')}
                  icon={<CheckCircleFill />}
                  active={isOpenSettingDetails === 'guest_checkout'}
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
              <SettingItemWrapper
                className='col-md-4 col-sm-6'
                onClick={() => handleOpenSettingDetails('card')}
              >
                <SettingItemUI
                  title={t('CARD_FIELDS', 'Card fields')}
                  description={t('CARD_FIELDS_DESC', 'Manage your card fields')}
                  icon={<CreditCard />}
                  active={isOpenSettingDetails === 'card'}
                />
              </SettingItemWrapper>
              <SettingItemWrapper
                className='col-md-4 col-sm-6'
                onClick={() => handleOpenSites()}
              >
                <SettingItemUI
                  title={t('SITES_LOGIN_SIGNUP_SETTINGS', 'Sites Login/Signup Settings')}
                  description={t('SITES_LOGIN_SIGNUP_SETTINGS_DESC', 'Advanced sites login/sign up settings')}
                  icon={<GearFill />}
                  active={openSitesAuthSettings}
                />
              </SettingItemWrapper>
              {isMulticountryEnabled && (
                <SettingItemWrapper
                  className='col-md-4 col-sm-6'
                  onClick={() => handleOpenMultiCountry()}
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
      {openSitesAuthSettings && (
        <SideBar
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
          open={openSitesAuthSettings}
          onClose={() => handleBackRedirect()}
        >
          <SitesAuthSettings setMoveDistance={setMoveDistance} />
        </SideBar>
      )}
      {openMultiCountrySettings && (
        <SideBar
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
          open={openMultiCountrySettings}
          onClose={() => handleBackRedirect()}
        >
          <MultiCountrySettings setMoveDistance={setMoveDistance} />
        </SideBar>
      )}
      {openCheckoutSettings && (
        <SideBar
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
          open={openCheckoutSettings}
          onClose={() => handleBackRedirect()}
        >
          <CheckoutFieldsSetting setMoveDistance={setMoveDistance} />
        </SideBar>
      )}
      {
        isOpenSettingDetails && (
          <SideBar
            sidebarId='setting-details'
            defaultSideBarWidth={550}
            open={isOpenSettingDetails}
            onClose={() => handleBackRedirect()}
            showExpandIcon
          >
            {isOpenSettingDetails === 'guest_checkout' && (
              <GuestCheckoutFieldsSetting />
            )}
            {isOpenSettingDetails === 'address' && (
              <AddressFieldsSetting />
            )}
            {isOpenSettingDetails === 'card' && (
              <CardFieldsSetting />
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
