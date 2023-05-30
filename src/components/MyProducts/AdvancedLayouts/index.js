import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles'
import { Alert } from '../../Shared'
import { LayoutStyleGroup } from './LayoutStyleGroup'

import {
  Container,
  BoxLayout,
  HomePageWrapper,
  HeadingWrapper,
  ButtonWrapper
} from './styles'

export const AdvancedLayouts = (props) => {
  const {
    advancedValues,
    handleUpdateSiteTheme,
    isApp,
    themesList
  } = props

  const [, t] = useLanguage()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [themeStructure, setThemeStructure] = useState({}) // Don't remove this state
  const themeValuesRef = useRef({})

  const homeLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'starbucks', name: 'Elegant' },
    { value: 'red', name: 'Simple' }
  ]

  const businessListingLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'appointments', name: 'Appointments' },
    { value: 'mapview', name: 'MapsView' }
  ]

  const businessViewLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'starbucks', name: 'Elegant' },
    { value: 'red', name: 'Simple' },
    { value: 'old', name: '2021' }
  ]

  const productFormLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'starbucks', name: 'Elegant' }
  ]

  const productSearchLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'starbucks', name: 'Elegant' },
    { value: 'old', name: '2021' }
  ]

  const confirmationLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'old', name: '2021' }
  ]

  const profileLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'old', name: '2021' }
  ]

  const headerLayoutList = [
    { value: 'original', name: 'Original' },
    { value: 'starbucks', name: 'Elegant' },
    { value: 'old', name: '2021' },
    { value: 'chew', name: 'Great' }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const updateObject = (object, newValue, path) => {
    const stack = path.split('.')
    while (stack.length > 1) {
      object = object[stack.shift()]
    }
    object[stack.shift()] = newValue
  }

  const handleUpdateThemeValue = (value, path) => {
    const _advancedValues = JSON.parse(JSON.stringify(themeValuesRef.current))
    updateObject(_advancedValues, value, path)
    themeValuesRef.current = _advancedValues
  }

  useEffect(() => {
    themeValuesRef.current = JSON.parse(JSON.stringify(advancedValues))
  }, [advancedValues])

  useEffect(() => { // Don't remove this effect
    if (!themesList?.loading && themesList?.themes?.[0]?.structure) {
      setThemeStructure(JSON.parse(JSON.stringify(themesList?.themes?.[0]?.structure)))
    }
  }, [themesList])

  return (
    <>
      <Container>
        {isApp ? (
          <BoxLayout>
            <h1>{t('CUSTOMER_APP_ADVANCED_LAYOUTS', 'Customer App  Advanced Layouts')}</h1>
            <h2>{t('HOMEPAGE', 'Homepage')}</h2>
            <HeadingWrapper>
              <LayoutStyleGroup
                title={t('HOMEPAGE', 'Homepage')}
                layoutList={homeLayoutList}
                layouts={themeValuesRef?.current?.homepage_view?.components?.layout}
                path='homepage_view.components.layout'
                handleUpdateThemeValue={handleUpdateThemeValue}
              />
            </HeadingWrapper>
          </BoxLayout>
        ) : (
          <BoxLayout>
            <h1>{t('WEBSITE_ADVANCED_LAYOUTS', 'Website Advanced Layouts')}</h1>
            <HomePageWrapper>
              <h2>{t('HOMEPAGE', 'Homepage')}</h2>
              <HeadingWrapper>
                <LayoutStyleGroup
                  title={t('HOMEPAGE', 'Homepage')}
                  layoutList={homeLayoutList}
                  layouts={themeValuesRef?.current?.homepage_view?.components?.layout}
                  path='homepage_view.components.layout'
                  handleUpdateThemeValue={handleUpdateThemeValue}
                />
              </HeadingWrapper>
            </HomePageWrapper>
          </BoxLayout>
        )}
        <BoxLayout>
          <h2>{t('BUSINESS_LISTING_VIEW', 'Business Listing view')}</h2>
          <HeadingWrapper>
            <LayoutStyleGroup
              layoutList={businessListingLayoutList}
              layouts={themeValuesRef?.current?.business_listing_view?.components?.layout}
              path='business_listing_view.components.layout'
              handleUpdateThemeValue={handleUpdateThemeValue}
            />
          </HeadingWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_VIEW_HEADERS', 'Business View Headers')}</h2>
          <HeadingWrapper>
            <LayoutStyleGroup
              layoutList={businessViewLayoutList}
              layouts={themeValuesRef?.current?.business_view?.components?.header?.components?.layout}
              path='business_view.components.header.components.layout'
              handleUpdateThemeValue={handleUpdateThemeValue}
            />
          </HeadingWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('PRODUCT_LAYOUTS', 'Product Layouts')}</h2>
          <HeadingWrapper>
            <LayoutStyleGroup
              layoutList={productFormLayoutList}
              layouts={themeValuesRef?.current?.business_view?.components?.products?.components?.layout}
              path='business_view.components.products.components.layout'
              handleUpdateThemeValue={handleUpdateThemeValue}
            />
          </HeadingWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('PRODUCTS_SEARCH', 'Products Search')}</h2>
          <HeadingWrapper>
            <LayoutStyleGroup
              layoutList={productSearchLayoutList}
              layouts={themeValuesRef?.current?.business_view?.components?.product_search?.components?.layout}
              path='business_view.components.product_search.components.layout'
              handleUpdateThemeValue={handleUpdateThemeValue}
            />
          </HeadingWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('CONFIRMATION', 'Confirmation')}</h2>
          <HeadingWrapper>
            <LayoutStyleGroup
              layoutList={confirmationLayoutList}
              layouts={themeValuesRef?.current?.confirmation?.components?.layout}
              path='confirmation.components.layout'
              handleUpdateThemeValue={handleUpdateThemeValue}
            />
          </HeadingWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('PROFILE', 'Profile')}</h2>
          <HeadingWrapper>
            <LayoutStyleGroup
              layoutList={profileLayoutList}
              layouts={themeValuesRef?.current?.profile?.components?.layout}
              path='profile.components.layout'
              handleUpdateThemeValue={handleUpdateThemeValue}
            />
          </HeadingWrapper>
        </BoxLayout>
        {!isApp && (
          <BoxLayout>
            <h2>{t('HEADER', 'Header')}</h2>
            <HeadingWrapper>
              <LayoutStyleGroup
                layoutList={headerLayoutList}
                layouts={themeValuesRef?.current?.header?.components?.layout}
                path='header.components.layout'
                handleUpdateThemeValue={handleUpdateThemeValue}
              />
            </HeadingWrapper>
          </BoxLayout>
        )}
        <ButtonWrapper>
          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => handleUpdateSiteTheme(themeValuesRef?.current)}
          >
            {t('SAVE', 'Save')}
          </Button>
        </ButtonWrapper>
      </Container>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
