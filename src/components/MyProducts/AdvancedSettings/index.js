import React, { useState, useMemo, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SettingComponent } from './SettingComponent'
import { Button, Input } from '../../../styles'
import { ImageBox } from './ImageBox'
import { Alert } from '../../Shared'
import { OrderType } from './OrderType'
import { CheckSquareFill as CheckedIcon, Square as UnCheckedIcon } from 'react-bootstrap-icons'
import { FontStyleGroup } from './FontStyleGroup'

import {
  Container,
  BoxLayout,
  HomePageWrapper,
  HideCheckWrapper,
  ShadowWrapper,
  ShadowInfoWrapper,
  ShadowInputGroup,
  ShadowInputControl,
  DropShadow,
  DropShadowWrapper,
  HeadingWrapper,
  HomeImageFullScreenWrapper,
  ImageGroup,
  FormControl,
  ButtonWrapper
} from './styles'

export const AdvancedSettings = (props) => {
  const { themesList, advancedValues, setAdvancedValues, handleUpdateSiteTheme } = props

  const [, t] = useLanguage()

  const [themeStructure, setThemeStructure] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const homepageViewList = [
    { key: 'homepage_header', name: t('HOMEPAGE_HEADER', 'Homepage Header'), type: 'hidden', path: 'homepage_view.components.homepage_header.hidden' }
  ]

  const headerList = [
    { name: t('BACKGROUND_COLOR', 'Background color'), type: 'color', path: 'header.components.style.backgroundColor' },
    { name: t('LOGO_POSITION', 'Logo Position'), type: 'position', path: 'header.components.logo.components.layout.position' },
    { name: t('LANGUAGE_SELECTOR', 'Language selector'), type: 'hidden', path: 'header.components.language_selector.hidden' }
  ]

  const businessListing = [
    { name: t('BUSINESS_LISTING_IMAGE', 'Business listing image'), type: 'image', path: 'business_listing_view.components.business_hero.components.image' },
    { name: t('PREVIOUS_ORDERS_BLOCK', 'Previous orders block'), type: 'hidden', path: 'business_listing_view.components.previous_orders_block.hidden' },
    { name: t('Highest_rated_business_block', 'Highest rated business block'), type: 'hidden', path: 'business_listing_view.components.highest_rated_business_block.hidden' },
    { name: t('CATEGORIES_BLOCK', 'Categories block'), type: 'hidden', path: 'business_listing_view.components.categories.hidden' },
    { name: t('AMOUNT_OF_BUSINESSES_TO_DISPLAY_PER_ROW', 'Amount of businesses to display per row:'), type: 'position', path: 'business_listing_view.components.layout.rows' },
    { name: t('SEARCH_BOX', 'Search box'), type: 'hidden', path: 'business_listing_view.components.search.hidden' },
    { name: t('FILTER_ICON', 'Filter icon'), type: 'hidden', path: 'business_listing_view.components.filter.hidden' },
    { name: t('CITIES_DROPDOWN', 'Cities dropdown'), type: 'hidden', path: 'business_listing_view.components.cities.hidden' }
  ]

  const businessBlockList = [
    { name: t('LOGO', 'Logo'), type: 'hidden', path: 'business_listing_view.components.business.components.logo.hidden' },
    { name: t('HEADER', 'Header'), type: 'hidden', path: 'business_listing_view.components.business.components.header.hidden' },
    { name: t('DELIVERY_FEE', 'Delivery Fee'), type: 'hidden', path: 'business_listing_view.components.business.components.fee.hidden' },
    { name: t('TIME', 'Time'), type: 'hidden', path: 'business_listing_view.components.business.components.time.hidden' },
    { name: t('DISTANCE', 'Distance'), type: 'hidden', path: 'business_listing_view.components.business.components.distance.hidden' },
    { name: t('REVIEWS', 'Reviews'), type: 'hidden', path: 'business_listing_view.components.business.components.reviews.hidden' },
    { name: t('FAVORITE_BUTTON', 'Favorite button'), type: 'hidden', path: 'business_listing_view.components.business.components.favorite.hidden' },
    { name: t('OFFER_BADGE', 'Offer badge'), type: 'hidden', path: 'business_listing_view.components.business.components.offer.hidden' },
    { name: t('OFFER__BADGE_POSITION', 'Offer badge position'), type: 'position', path: 'business_listing_view.components.business.components.offer.position' },
    { name: t('CATEGORIES', 'Categories'), type: 'hidden', path: 'business_listing_view.components.business.components.categories.hidden' },
    { name: t('FEATURED_BADGE', 'Featured badge'), type: 'hidden', path: 'business_listing_view.components.business.components.featured_badge.hidden' }
  ]

  const businessPageList = [
    { name: t('DEFAULT_BACKGROUND_COLOR', 'Default Background color'), type: 'color', path: 'business_view.components.style.backgroundColor' },
    { name: t('PRODUCTS_FROM_PREVIOUS_ORDERS_BLOCK', 'Products from previous orders block'), type: 'hidden', path: 'business_view.components.products_ordered.hidden' },
    { name: t('FAVORITE_PRODUCTS_BLOCK', 'Favorite products block'), type: 'hidden', path: 'business_view.components.favorite_products.hidden' },
    { name: t('NEAR_BUSINESS_BLOCK', 'Near business block'), type: 'hidden', path: 'business_view.components.near_business' },
    { name: t('ORDER_VIEW_BUTTON', 'Order view button'), type: 'hidden', path: 'business_view.components.order_view_button.hidden' }
  ]

  const businessInfoList = [
    { name: t('DESCRIPTION', 'Description'), type: 'hidden', path: 'business_view.components.information.components.description.hidden' },
    { name: t('ABOUT', 'About'), type: 'hidden', path: 'business_view.components.information.components.about.hidden' },
    { name: t('VIDEOS', 'Videos'), type: 'hidden', path: 'business_view.components.information.components.videos.hidden' },
    { name: t('MENU_LIST_DELIVERY_TIME', 'Delivery time'), type: 'hidden', path: 'business_view.components.information.components.delivery_time.hidden' },
    { name: t('PICKUP_TIME', 'Pickup time'), type: 'hidden', path: 'business_view.components.information.components.pickup_time.hidden' },
    { name: t('IMAGES', 'Images'), type: 'hidden', path: 'business_view.components.information.components.images.hidden' },
    { name: t('ADDRESS', 'Address'), type: 'hidden', path: 'business_view.components.information.components.address.hidden' }
  ]

  const productBlockList = [
    { name: t('DUMMY_IMAGE_WHEN_NO_IMAGE', 'Dummy image when no image'), type: 'hidden', path: 'business_view.components.products.components.product.components.dummy.hidden' },
    { name: t('DESCRIPTION', 'Description'), type: 'hidden', path: 'business_view.components.products.components.product.components.description.hidden' },
    { name: t('IMAGE', 'Image'), type: 'hidden', path: 'business_view.components.products.components.product.components.image.hidden' },
    { name: t('POSITION', 'Position'), type: 'position', path: 'business_view.components.products.components.product.components.image.position' }
  ]

  const reviewsPopups = [
    { name: t('REVIEW_DATE', 'Review date'), type: 'hidden', path: 'business_view.components.reviews.components.review_date.hidden' }
  ]

  const cartHeaderList = [
    { name: t('BUSINESS_LOGO', 'Business logo'), type: 'hidden', path: 'header.components.cart.components.business.components.logo.hidden' },
    { name: t('PRODUCT_IMAGE', 'Product image'), type: 'hidden', path: 'header.components.cart.components.products.components.image.hidden' },
    { name: t('PRODUCT_DESCRIPTION', 'Product description'), type: 'hidden', path: 'header.components.cart.components.products.components.description.hidden' },
    { name: t('DISCOUNT_COUPON', 'Discount coupon'), type: 'hidden', path: 'header.components.cart.components.discount_coupon.hidden' },
    { name: t('COMMENTS', 'Comments'), type: 'hidden', path: 'header.components.cart.components.comments.hidden' }
  ]

  const checkoutList = [
    { name: t('BUSINESS_ADDRESS', 'Business address'), type: 'hidden', path: 'checkout.components.business.components.address.hidden' },
    { name: t('MAP_OF_BUSINESS_ADDRESS', 'Map of business address'), type: 'hidden', path: 'checkout.components.map.hidden' }
  ]

  const orderBlockList = [
    { name: t('DATE', 'Date'), type: 'hidden', path: 'confirmation.components.order.components.date.hidden' },
    { name: t('PROGRESS_BAR', 'Progress bar'), type: 'hidden', path: 'confirmation.components.order.components.progress.hidden' }
  ]

  const popupAddressList = [
    { name: t('MAP', 'Map'), type: 'hidden', path: 'address.components.map.hidden' },
    { name: t('INTERNAL_NUMBER', 'Internal number'), type: 'hidden', path: 'address.components.internal_number.hidden' },
    { name: t('ADDRESS_NOTES', 'Address notes'), type: 'hidden', path: 'address.components.address_notes.hidden' },
    { name: t('ICONS', 'Icons'), type: 'hidden', path: 'address.components.icons.hidden' }
  ]

  const myAccountList = [
    { name: t('USER_IMAGE', 'User image'), type: 'hidden', path: 'profile.components.picture.hidden' },
    { name: t('BIRTHDAY', 'Birthday'), type: 'hidden', path: 'profile.components.birthday.hidden' },
    { name: t('LANGUAGES', 'Languages'), type: 'hidden', path: 'profile.components.languages.hidden' },
    { name: t('address_list', 'Address list'), type: 'hidden', path: 'profile.components.address_list.hidden' }
  ]

  const activeOrderBlockList = [
    { name: t('MAP', 'Map'), type: 'hidden', path: 'orders.components.map.hidden' },
    { name: t('BUSINESS_LOGO', 'Business logo'), type: 'hidden', path: 'orders.components.business_logo.hidden' },
    { name: t('BUSINESS_NAME', 'Business name'), type: 'hidden', path: 'orders.components.business_name.hidden' },
    { name: t('ORDER_NUMBER', 'Order number'), type: 'hidden', path: 'orders.components.order_number.hidden' },
    { name: t('ORDER_DATE', 'Order date'), type: 'hidden', path: 'orders.components.date.hidden' },
    { name: t('REVIEW_ORDER_BUTTON', 'Review order button'), type: 'hidden', path: 'orders.components.review_order_button.hidden' },
    { name: t('REORDER_BUTTON', 'Reorder button'), type: 'hidden', path: 'orders.components.reorder_button.hidden' },
    { name: t('FAVORITE_BUTTON', 'Favorite button'), type: 'hidden', path: 'orders.components.favorite.hidden' },
    { name: t('ORDER_STATUS', 'Order status'), type: 'hidden', path: 'orders.components.order_status.hidden' },
    { name: t('PREVIOUS_ORDER_BLOCK', 'Previous order block'), type: 'hidden', path: 'orders.components.past_orders.hidden' },
    { name: t('BUSINESS_TAB', 'Business tab'), type: 'hidden', path: 'orders.components.business_tab.hidden' },
    { name: t('PRODUCTS_TAB', 'Products tab'), type: 'hidden', path: 'orders.components.products_tab.hidden' }
  ]

  const menuOptionList = [
    { name: t('BROWSE_AND_SEARCH', 'Browse and search'), type: 'hidden', path: 'bar_menu.components.browse.hidden' },
    { name: t('WALLET', 'Wallet'), type: 'hidden', path: 'bar_menu.components.wallet.hidden' },
    { name: t('PROMOTIONS', 'Promotions'), type: 'hidden', path: 'bar_menu.components.promotions.hidden' },
    { name: t('MESSAGES', 'Messages'), type: 'hidden', path: 'bar_menu.components.messages.hidden' },
    { name: t('HELP', 'Help'), type: 'hidden', path: 'bar_menu.components.help.hidden' },
    { name: t('SECURITY', 'Security'), type: 'hidden', path: 'bar_menu.components.sessions.hidden' },
    { name: t('MY_FAVORITES', 'My favorites'), type: 'hidden', path: 'bar_menu.components.favorites.hidden' }
  ]

  const thirdPartyCodeList = [
    { name: t('HEAD', 'Head'), type: 'input', path: 'third_party_code.head' },
    { name: t('BODY', 'Body'), type: 'input', path: 'third_party_code.body' }
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
    const _advancedValues = JSON.parse(JSON.stringify(advancedValues))
    updateObject(_advancedValues, value, path)
    setAdvancedValues(_advancedValues)
  }

  useEffect(() => {
    if (!themesList?.loading && themesList?.themes?.[0]?.structure) {
      setThemeStructure(JSON.parse(JSON.stringify(themesList?.themes?.[0]?.structure)))
    }
  }, [themesList])

  const shadowValues = useMemo(() => {
    const buttonShadow = advancedValues?.general?.components?.buttons?.shadow?.components
    if (!buttonShadow?.x || !buttonShadow?.y || !buttonShadow?.blur || !buttonShadow?.spread) return ''
    return `${buttonShadow?.x}px ${buttonShadow?.y}px ${buttonShadow?.blur}px ${buttonShadow?.spread}px ${buttonShadow?.color}`
  }, [advancedValues?.general?.components?.buttons?.shadow?.components])

  return (
    <>
      <Container>
        <BoxLayout>
          <h1>{t('WEBSITE_ADVANCED_SETTINGS', 'Website  Advanced Settings')}</h1>
          <HomePageWrapper>
            <h2>{t('HOMEPAGE', 'Homepage')}</h2>
            <SettingComponent
              settingList={homepageViewList}
              handleUpdateThemeValue={handleUpdateThemeValue}
              advancedValues={advancedValues}
            />
          </HomePageWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUTTONS', 'Buttons')}</h2>
          <FormControl>
            <label>Border Radius</label>
            <Input
              value={advancedValues?.general?.components?.buttons?.borderRadius}
              onChange={(e) => handleUpdateThemeValue(e.target.value, 'general.components.buttons.borderRadius')}
              onKeyPress={(e) => {
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </FormControl>
          <h3>{t('SHAPE', 'Shape')}</h3>
          <ShadowWrapper>
            <DropShadowWrapper>
              <ShadowInfoWrapper>
                <DropShadow
                  style={{
                    boxShadow: shadowValues
                  }}
                />
                <span>{t('DROP_SHADOW', 'Drop shadow')}</span>
              </ShadowInfoWrapper>
              <ShadowInputGroup>
                <ShadowInputControl>
                  <span>X</span>
                  <input
                    value={advancedValues?.general?.components?.buttons?.shadow?.components?.x}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                    onChange={(e) => handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.x')}
                  />
                </ShadowInputControl>
                <ShadowInputControl>
                  <span>Y</span>
                  <input
                    value={advancedValues?.general?.components?.buttons?.shadow?.components?.y}
                    onChange={(e) => handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.y')}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                  />
                </ShadowInputControl>
                <ShadowInputControl>
                  <span>B</span>
                  <input
                    value={advancedValues?.general?.components?.buttons?.shadow?.components?.blur}
                    onChange={(e) => handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.blur')}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                  />
                </ShadowInputControl>
                <ShadowInputControl>
                  <span>S</span>
                  <input
                    value={advancedValues?.general?.components?.buttons?.shadow?.components?.spread}
                    onChange={(e) => handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.spread')}
                    onKeyPress={(e) => {
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                  />
                </ShadowInputControl>
                <ShadowInputControl>
                  <span>C</span>
                  <input
                    value={advancedValues?.general?.components?.buttons?.shadow?.components?.color}
                    onChange={(e) => handleUpdateThemeValue(e.target.value, 'general.components.buttons.shadow.components.color')}
                  />
                </ShadowInputControl>
              </ShadowInputGroup>
            </DropShadowWrapper>
          </ShadowWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('TIPOGRAPHY', 'Tipography')}</h2>
          <HeadingWrapper>
            <FontStyleGroup
              fonts={advancedValues?.general?.components?.fonts?.primary}
              path='general.components.fonts.primary'
              handleUpdateThemeValue={handleUpdateThemeValue}
            />
          </HeadingWrapper>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('IMAGES', 'Images')}</h2>
          <ImageBox
            title={t('BUSINESS_LOGO_DUMMY_IMAGE', 'Business Logo dummy image')}
            ratio='512 x 512 px'
            photo={advancedValues?.business_view?.components?.header?.components?.logo?.dummy_image}
            path='business_view.components.header.components.logo.dummy_image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title={t('BUSINESS_HEADER_DUMMY_IMAGE', 'Business header dummy image')}
            ratio='1350 x 400 px'
            isBig
            photo={advancedValues?.business_view?.components?.header?.components?.dummy_image}
            path='business_view.components.header.components.dummy_image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <HomeImageFullScreenWrapper
            onClick={() => handleUpdateThemeValue(!advancedValues?.my_products?.components?.images?.components?.homepage_image_fullscreen, 'my_products.components.images.components.homepage_image_fullscreen')}
          >
            {advancedValues?.my_products?.components?.images?.components?.homepage_image_fullscreen ? <CheckedIcon className='active' /> : <UnCheckedIcon />}
            <span>{t('HOMEPAGE_IMAGE_FULLSCREEN', 'Homepage image fullscreen')}</span>
          </HomeImageFullScreenWrapper>
          <ImageGroup>
            <ImageBox
              title={t('PRODUCT_DUMMY_IMAGE', 'Product dummy image')}
              ratio='900 x 200 px'
              photo={advancedValues?.business_view?.components?.products?.components?.photo?.components?.dummy_image}
              path='business_view.components.products.components.photo.components.dummy_image'
              handleChangePhoto={handleUpdateThemeValue}
            />
          </ImageGroup>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('FAVICON', 'Favicon')}</h2>
          <ImageBox
            title={t('FAVICON', 'Favicon')}
            ratio='512 x 512 px'
            photo={advancedValues?.general?.components?.favicon}
            path='general.components.favicon'
            handleChangePhoto={handleUpdateThemeValue}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('HEADER', 'Header')}</h2>
          <SettingComponent
            settingList={headerList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_LISTING', 'Business listing')}</h2>
          <HideCheckWrapper isBottom onClick={() => handleUpdateThemeValue(!advancedValues?.business_listing_view?.hidden, 'business_listing_view.hidden')}>
            {advancedValues?.business_listing_view?.hidden ? <CheckedIcon className='active' /> : <UnCheckedIcon />}
            <span>{t('HIDDEN', 'Hidden')}</span>
          </HideCheckWrapper>
          <SettingComponent
            settingList={businessListing}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_BLOCK', 'Business block')}</h2>
          <SettingComponent
            settingList={businessBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_PAGE', 'Business page')}</h2>
          <SettingComponent
            settingList={businessPageList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_INFORMATION', 'Business Information')}</h2>
          <SettingComponent
            settingList={businessInfoList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('PRODUCTS_BLOCK', 'Products block')}</h2>
          <SettingComponent
            settingList={productBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('REVIEWS_POPUPS', 'Reviews popups')}</h2>
          <SettingComponent
            settingList={reviewsPopups}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('CART_HEADER', 'Cart Header')}</h2>
          <SettingComponent
            settingList={cartHeaderList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('CHECKOUT', 'Checkout')}</h2>
          <SettingComponent
            settingList={checkoutList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
          <h3>{t('CONFIRMATION_PAGE', 'Confirmation page')}</h3>
          <h3>{t('ORDER_BLOCK', 'Order block')}</h3>
          <SettingComponent
            settingList={orderBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
          <h3>{t('POPUP_ADDRESS', 'Popup: Address')}</h3>
          <SettingComponent
            settingList={popupAddressList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
          <h3>{t('MY_ACCOUNT_PAGE', 'My account page')}</h3>
          <SettingComponent
            settingList={myAccountList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
          <h3>{t('MY_ORDERS', 'My orders')}</h3>
          <h3>{t('ACTIVE_ORDERS_BLOCK', 'Active Orders Block')}</h3>
          <SettingComponent
            settingList={activeOrderBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('MENU_OPTIONS', 'Menu options')}</h2>
          <SettingComponent
            settingList={menuOptionList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('POPUP_ORDER_TYPES', 'Popup: Order types ')}</h2>
          <FormControl>
            <label>{t('TITLE_MENU_OPTIONS', 'Title Menu options')}</label>
            <Input
              placeholder={t('TITLE_MENU_OPTIONS', 'Title Menu options')}
              defaultValue={advancedValues?.order_types?.components?.title_menu}
              onChange={(e) => handleUpdateThemeValue(e.target.value, 'order_types.components.title_menu')}
            />
          </FormControl>
          <h3>{t('DELIVERY', 'Delivery')}</h3>
          <OrderType
            typeValues={advancedValues?.order_types?.components?.delivery?.components}
            path='order_types.components.delivery.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
          <h3>{t('PICKUP', 'Pickup')}</h3>
          <OrderType
            typeValues={advancedValues?.order_types?.components?.pickup?.components}
            path='order_types.components.pickup.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
          <h3>{t('EAT_IN', 'Eat in')}</h3>
          <OrderType
            typeValues={advancedValues?.order_types?.components?.eat_in?.components}
            path='order_types.components.eat_in.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
          <h3>{t('CURBSIDE', 'Curbside')}</h3>
          <OrderType
            typeValues={advancedValues?.order_types?.components?.curbside?.components}
            path='order_types.components.curbside.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
          <h3>{t('DRIVE_THRU', 'Drive thru')}</h3>
          <OrderType
            typeValues={advancedValues?.order_types?.components?.drive_thru?.components}
            path='order_types.components.drive_thru.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('THIRD_PARTY_CODE', 'Third-party code')}</h2>
          <SettingComponent
            settingList={thirdPartyCodeList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
          />
        </BoxLayout>
        <ButtonWrapper>
          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => handleUpdateSiteTheme(true)}
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
