import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useEvent, Settings as SettingsController } from 'ordering-components-admin'
import { SettingItemUI } from '../SettingItemUI'
import { SettingsDetail } from '../SettingsDetail'
import { List as MenuIcon, GearFill, MegaphoneFill, CheckCircleFill, GeoAltFill } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { SideBar } from '../../Shared'
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
      if (settingsType === 'key_basic') return events.emit('go_to_page', { page: 'basicSettings', replace: true })
      if (settingsType === 'key_operation') return events.emit('go_to_page', { page: 'operationSettings', replace: true })
    }
    if (category) {
      events.emit('go_to_page', {
        page: settingsType === 'key_basic' ? 'basicSettings' : 'operationSettings',
        search: `?category=${category}`,
        replace: true
      })
    }
  }

  const handleOpenDescription = (category) => {
    setIsOpenSettingDetails(null)
    setIsOpenDescription(true)
    setSelectedCategory(category)
    onBasicSettingsRedirect({ category: category?.id })
    handChangeConfig && handChangeConfig(false)
  }

  const handleOpenSettingDetails = (item) => {
    setIsOpenDescription(false)
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

  // useEffect(() => {
  //   if (Object.keys(configs).length > 0) {
  //     const _configs = [
  //       configs?.stripe_connect_sandbox,
  //       { ...configs?.stripe_connect_client_id, name: t('CLIENT_ID_SANDBOX') },
  //       { ...configs?.stripe_connect_client_id_sandbox, name: t('CLIENT_ID_PRODUCTION') }
  //     ]
  //     setStripeConnectConfigs([..._configs])
  //   }
  // }, [configs])

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
            {settingsType === 'key_basic' ? t('BASIC_SETTINGS', 'Basic settings ') : t('OPERATION_SETTINGS', 'Operation settings ')}
          </h1>
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
