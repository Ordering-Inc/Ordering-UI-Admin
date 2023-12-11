import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SettingComponent } from './SettingComponent'
import { Button, Input } from '../../../styles'
import { ImageBox } from './ImageBox'
import { Alert, Modal } from '../../Shared'
import { OrderType } from './OrderType'
import { FontStyleGroup } from './FontStyleGroup'

import {
  Container,
  BoxLayout,
  HeadingWrapper,
  ImageGroup,
  FormControl,
  ButtonWrapper
} from './styles'
import { UploadAudio } from '../UploadAudio'

export const AdvancedSettings = (props) => {
  const {
    themesList,
    advancedValues,
    handleUpdateSiteTheme,
    isApp
  } = props

  const [, t] = useLanguage()

  const [themeStructure, setThemeStructure] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const themeValuesRef = useRef({})
  
  const [isOpenSound, setIsOpenSound] = useState(false)

  const headerList = [
    { name: t('BACKGROUND_COLOR', 'Background color'), type: 'color', path: 'header.components.style.backgroundColor' },
    { name: t('LOGO_POSITION', 'Logo Position'), type: 'position', path: 'header.components.logo.components.layout.position' },
    { name: t('LANGUAGE_SELECTOR', 'Language selector'), type: 'hidden', path: 'header.components.language_selector.hidden' }
  ]

  const businessListing = [
    { name: '', type: 'hidden', path: 'business_listing_view.hidden' },
    { name: t('BUSINESS_LISTING_IMAGE', 'Business listing image'), type: 'image', path: 'business_listing_view.components.business_hero.components.image' },
    { name: t('HIGHEST_RATED_BUSINESS_BLOCK', 'Highest rated business block'), type: 'hidden', path: 'business_listing_view.components.highest_rated_business_block.hidden' },
    { name: t('CATEGORIES_BLOCK', 'Categories block'), type: 'hidden', path: 'business_listing_view.components.categories.hidden' },
    { name: t('AMOUNT_OF_BUSINESSES_TO_DISPLAY_PER_ROW', 'Amount of businesses to display per row:'), type: 'position', path: 'business_listing_view.components.layout.rows' },
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
    { name: t('OFFER_BADGE_POSITION', 'Offer badge position'), type: 'position', path: 'business_listing_view.components.business.components.offer.position' },
    { name: t('FEATURED_BADGE', 'Featured badge'), type: 'hidden', path: 'business_listing_view.components.business.components.featured_badge.hidden' }
  ]

  const businessPageList = [
    { name: t('DEFAULT_BACKGROUND_COLOR', 'Default Background color'), type: 'color', path: 'business_view.components.style.backgroundColor' },
    { name: t('PRODUCTS_FROM_PREVIOUS_ORDERS_BLOCK', 'Products from previous orders block'), type: 'hidden', path: 'business_view.components.products_ordered.hidden' },
    { name: t('NEAR_BUSINESS_BLOCK', 'Near business block'), type: 'hidden', path: 'business_view.components.near_business.hidden' },
    { name: t('REVIEWS', 'Reviews'), type: 'hidden', path: 'business_view.components.reviews.hidden' },
    { name: t('CUSTOMER_COMMENTS', 'Customer comments'), type: 'hidden', path: 'business_view.components.reviews.components.customer_comments.hidden' },
    { name: t('RANKING', 'Ranking'), type: 'hidden', path: 'business_view.components.reviews.components.ranking.hidden' },
    { name: t('REVIEWS_DATE', 'Reviews date'), type: 'hidden', path: 'business_view.components.reviews.components.review_date.hidden' },
    { name: t('SEARCH', 'Search'), type: 'hidden', path: 'business_view.components.reviews.components.search.hidden' },
    { name: t('BUSINESS_LOGO', 'Business logo'), type: 'hidden', path: 'business_view.components.header.components.logo.hidden' },
    { name: t('BUSINESS_INFO_ICON', 'Business info icon'), type: 'hidden', path: 'business_view.components.header.components.business_info.hidden' },
    { name: t('BUSINESS_HEADER', 'Business header'), type: 'hidden', path: 'business_view.components.header.hidden' },
    { name: t('BUSINESS_HEADER_REVIEWS', 'Business header reviews'), type: 'hidden', path: 'business_view.components.header.components.business.components.reviews.hidden' },
    { name: t('BUSINESS_POPUP_REVIEWS', 'Business popup reviews'), type: 'hidden', path: 'business_view.components.header.components.reviews.hidden' }

  ]

  const businessInfoList = [
    { name: t('DESCRIPTION', 'Description'), type: 'hidden', path: 'business_view.components.information.components.description.hidden' },
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
    { name: t('POSITION', 'Position'), type: 'position', path: 'business_view.components.products.components.product.components.image.position' },
    { name: t('ADD_TO_CART_BUTTON', 'Add to cart button'), type: 'hidden', path: 'business_view.components.products.components.add_to_cart_button.hidden' },
    { name: t('FAVORITE', 'Favorite'), type: 'hidden', path: 'business_view.components.products.components.product.components.favorite.hidden' }
  ]

  const reviewsPopups = [
    { name: t('REVIEW_DATE', 'Review date'), type: 'hidden', path: 'business_view.components.reviews.components.review_date.hidden' }
  ]

  const cartHeaderList = [
    { name: t('BUSINESS_LOGO', 'Business logo'), type: 'hidden', path: 'header.components.cart.components.business.components.logo.hidden' },
    { name: t('PRODUCT_IMAGE', 'Product image'), type: 'hidden', path: 'header.components.cart.components.products.components.image.hidden' },
    { name: t('DISCOUNT_COUPON', 'Discount coupon'), type: 'hidden', path: 'header.components.cart.components.discount_coupon.hidden' },
    { name: t('COMMENTS', 'Comments'), type: 'hidden', path: 'header.components.cart.components.comments.hidden' },
    { name: t('OPEN_STRATEGY', 'Open strategy'), type: 'position', path: 'header.components.cart.components.open_strategy.type' },
    { name: t('OPEN_STRATEGY_POSITION', 'Open strategy position'), type: 'position', path: 'header.components.cart.components.open_strategy.position' }
  ]

  const checkoutList = [
    { name: t('BUSINESS_ADDRESS', 'Business address'), type: 'hidden', path: 'checkout.components.business.components.address.hidden' },
    { name: t('MAP', 'Map'), type: 'hidden', path: 'checkout.components.map.hidden' }
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
    { name: t('EXPORT_BIRTHDAY', 'Birthday'), type: 'hidden', path: 'profile.components.birthday.hidden' },
    { name: t('LANGUAGES', 'Languages'), type: 'hidden', path: 'profile.components.languages.hidden' },
    { name: t('ADDRESS_LIST', 'Address list'), type: 'hidden', path: 'profile.components.address_list.hidden' }
  ]

  const activeOrderBlockList = [
    { name: t('BUSINESS_LOGO', 'Business logo'), type: 'hidden', path: 'orders.components.business_logo.hidden' },
    { name: t('EXPORT_BUSINESS_NAME', 'Business name'), type: 'hidden', path: 'orders.components.business_name.hidden' },
    { name: t('ORDER_NUMBER', 'Order number'), type: 'hidden', path: 'orders.components.order_number.hidden' },
    { name: t('ORDER_DATE', 'Order date'), type: 'hidden', path: 'orders.components.date.hidden' },
    { name: t('EXPORT_REVIEW_ORDER_BUTTON', 'Review order button'), type: 'hidden', path: 'orders.components.review_order_button.hidden' },
    { name: t('EXPORT_REORDER_BUTTON', 'Reorder button'), type: 'hidden', path: 'orders.components.reorder_button.hidden' },
    { name: t('FAVORITE_BUTTON', 'Favorite button'), type: 'hidden', path: 'orders.components.favorite.hidden' },
    { name: t('ORDER_STATUS', 'Order status'), type: 'hidden', path: 'orders.components.order_status.hidden' },
    { name: t('EXPORT_PREVIOUS_ORDER_BLOCK', 'Previous order block'), type: 'hidden', path: 'orders.components.past_orders.hidden' },
    { name: t('EXPORT_BUSINESS_TAB', 'Business tab'), type: 'hidden', path: 'orders.components.business_tab.hidden' },
    { name: t('EXPORT_PRODUCTS_TAB', 'Products tab'), type: 'hidden', path: 'orders.components.products_tab.hidden' }
  ]

  const menuOptionList = [
    { name: t('EXPORT_BROWSE_AND_SEARCH', 'Browse and search'), type: 'hidden', path: 'bar_menu.components.browse.hidden' },
    { name: t('WALLETS', 'Wallets'), type: 'hidden', path: 'bar_menu.components.wallet.hidden' },
    { name: t('PROMOTIONS', 'Promotions'), type: 'hidden', path: 'bar_menu.components.promotions.hidden' },
    { name: t('MESSAGES', 'Messages'), type: 'hidden', path: 'bar_menu.components.messages.hidden' },
    { name: t('HELP', 'Help'), type: 'hidden', path: 'bar_menu.components.help.hidden' },
    { name: t('EXPORT_SECURITY', 'Security'), type: 'hidden', path: 'bar_menu.components.sessions.hidden' },
    { name: t('EXPORT_MY_FAVORITES', 'My favorites'), type: 'hidden', path: 'bar_menu.components.favorites.hidden' }
  ]

  const thirdPartyCodeList = [
    { name: t('EXPORT_HEAD', 'Head'), type: 'input', path: 'third_party_code.head' },
    { name: t('EXPORT_BODY', 'Body'), type: 'input', path: 'third_party_code.body' }
  ]

  const buttonList = [
    { name: t('BUTTON_COLOR', 'Button color'), type: 'input', path: 'general.components.buttons.color' },
    { name: t('BORDER_RADIUS', 'Border radius'), type: 'input', path: 'general.components.buttons.borderRadius' },
    { name: t('BUTTON_TEXT_COLOR', 'Button text color'), type: 'input', path: 'general.components.buttons.buttonTextColor' }
  ]

  const homeImageFullScreen = [
    { name: t('HOMEPAGE_IMAGE_FULLSCREEN', 'Homepage image fullscreen'), type: 'hidden', path: 'my_products.components.images.components.homepage_image_fullscreen' }
  ]

  const navigationBarList = [
    { name: t('BROWSE', 'Browse'), type: 'hidden', path: 'bar_menu.components.browse.hidden' },
    { name: t('ORDERS', 'Orders'), type: 'hidden', path: 'bar_menu.components.orders.hidden' },
    { name: t('MY_CARTS', 'My carts'), type: 'hidden', path: 'bar_menu.components.my_carts.hidden' },
    { name: t('WALLET', 'Wallet'), type: 'hidden', path: 'bar_menu.components.wallet.hidden' },
    { name: t('PROFILE', 'Profile'), type: 'hidden', path: 'bar_menu.components.profile.hidden' }
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
    if (!themesList?.loading && themesList?.themes?.[0]?.structure) {
      setThemeStructure(JSON.parse(JSON.stringify(themesList?.themes?.[0]?.structure)))
    }
  }, [themesList])

  useEffect(() => {
    themeValuesRef.current = JSON.parse(JSON.stringify(advancedValues))
  }, [advancedValues])
  return (
    <>
      <Container>
        {isApp && (
          <BoxLayout>
            <h1>{t('CUSTOMER_APP_ADVANCED_SETTINGS', 'Customer App  Advanced Settings')}</h1>
            <h2>{t('HOMEPAGE', 'Homepage')}</h2>
            <ImageBox
              title={t('HOMEPAGE_IMAGE', 'Homepage image')}
              ratio='1350 x 400 px'
              photo={themeValuesRef?.current?.my_products?.components?.images?.components?.homepage_background?.components?.image}
              path='my_products.components.images.components.homepage_background.components.image'
              themeId={themesList?.themes?.[0]?.id}
              handleChangePhoto={handleUpdateThemeValue}
            />
          </BoxLayout>
        )}
        <BoxLayout>
          {!isApp && (
            <h1>{t('WEBSITE_ADVANCED_SETTINGS', 'Website  Advanced Settings')}</h1>
          )}
          <h2>{t('BUTTONS', 'Buttons')}</h2>
          <SettingComponent
            settingList={buttonList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
          <Button
            color='primary'
            outline
            borderRadius='8px'
            onClick={() => setIsOpenSound(true)}
            className='custom'
          >
            {t('CUSTOM_SOUNDS', 'Custom sounds')}
          </Button>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('TIPOGRAPHY', 'Tipography')}</h2>
          <HeadingWrapper>
            <FontStyleGroup
              fonts={themeValuesRef?.current?.general?.components?.fonts?.primary}
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
            photo={themeValuesRef?.current?.business_view?.components?.header?.components?.logo?.dummy_image}
            path='business_view.components.header.components.logo.dummy_image'
            themeId={themesList?.themes?.[0]?.id}
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title={t('BUSINESS_HEADER_DUMMY_IMAGE', 'Business header dummy image')}
            ratio='1350 x 400 px'
            isBig
            photo={themeValuesRef?.current?.business_view?.components?.header?.components?.dummy_image}
            path='business_view.components.header.components.dummy_image'
            themeId={themesList?.themes?.[0]?.id}
            handleChangePhoto={handleUpdateThemeValue}
          />
          <SettingComponent
            settingList={homeImageFullScreen}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
            noLabel
          />
          <ImageGroup>
            <ImageBox
              title={t('PRODUCT_DUMMY_IMAGE', 'Product dummy image')}
              ratio='900 x 200 px'
              photo={themeValuesRef?.current?.business_view?.components?.products?.components?.photo?.components?.dummy_image}
              path='business_view.components.products.components.photo.components.dummy_image'
              themeId={themesList?.themes?.[0]?.id}
              handleChangePhoto={handleUpdateThemeValue}
            />
          </ImageGroup>
        </BoxLayout>
        <BoxLayout>
          <h2>{t('FAVICON', 'Favicon')}</h2>
          <ImageBox
            title={t('FAVICON', 'Favicon')}
            ratio='512 x 512 px'
            photo={themeValuesRef?.current?.general?.components?.favicon?.components?.image}
            path='general.components.favicon.components.image'
            themeId={themesList?.themes?.[0]?.id}
            handleChangePhoto={handleUpdateThemeValue}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('HEADER', 'Header')}</h2>
          <SettingComponent
            settingList={headerList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_LISTING', 'Business listing')}</h2>
          <SettingComponent
            settingList={businessListing}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_BLOCK', 'Business block')}</h2>
          <SettingComponent
            settingList={businessBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_PAGE', 'Business page')}</h2>
          <SettingComponent
            settingList={businessPageList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('BUSINESS_INFORMATION', 'Business Information')}</h2>
          <SettingComponent
            settingList={businessInfoList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('PRODUCTS_BLOCK', 'Products block')}</h2>
          <SettingComponent
            settingList={productBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('REVIEWS_POPUPS', 'Reviews popups')}</h2>
          <SettingComponent
            settingList={reviewsPopups}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('CART_HEADER', 'Cart Header')}</h2>
          <SettingComponent
            settingList={cartHeaderList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={advancedValues}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h2>{t('CHECKOUT', 'Checkout')}</h2>
          <SettingComponent
            settingList={checkoutList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h3>{t('CONFIRMATION_PAGE', 'Confirmation page')}</h3>
          <h3>{t('ORDER_BLOCK', 'Order block')}</h3>
          <SettingComponent
            settingList={orderBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h3>{t('POPUP_ADDRESS', 'Popup: Address')}</h3>
          <SettingComponent
            settingList={popupAddressList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h3>{t('MY_ACCOUNT_PAGE', 'My account page')}</h3>
          <SettingComponent
            settingList={myAccountList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        <BoxLayout>
          <h3>{t('MY_ORDERS', 'My orders')}</h3>
          <h3>{t('ACTIVE_ORDERS_BLOCK', 'Active Orders Block')}</h3>
          <SettingComponent
            settingList={activeOrderBlockList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        {!isApp && (
          <BoxLayout>
            <h2>{t('MENU_OPTIONS', 'Menu options')}</h2>
            <SettingComponent
              settingList={menuOptionList}
              handleUpdateThemeValue={handleUpdateThemeValue}
              advancedValues={advancedValues}
              themeStructure={themeStructure}
              themeId={themesList?.themes?.[0]?.id}
            />
          </BoxLayout>
        )}
        <BoxLayout>
          <h2>{t('POPUP_ORDER_TYPES', 'Popup: Order types ')}</h2>
          <FormControl>
            <label>{t('TITLE_MENU_OPTIONS', 'Title Menu options')}</label>
            <Input
              placeholder={t('TITLE_MENU_OPTIONS', 'Title Menu options')}
              defaultValue={themeValuesRef?.current?.order_types?.components?.title_menu}
              onChange={(e) => handleUpdateThemeValue(e.target.value, 'order_types.components.title_menu')}
            />
          </FormControl>
          <h3>{t('DELIVERY', 'Delivery')}</h3>
          <OrderType
            typeValues={themeValuesRef?.current?.order_types?.components?.delivery?.components}
            path='order_types.components.delivery.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
            <ImageBox
              title={t('DELIVERY_OPTION_IMAGE', 'Delivery option image')}
              ratio='900 x 200 px'
              photo={themeValuesRef?.current?.order_types?.components?.delivery?.components?.image}
              path='order_types.components.delivery.components.image'
              themeId={themesList?.themes?.[0]?.id}
              handleChangePhoto={handleUpdateThemeValue}
            />
          <h3>{t('PICKUP', 'Pickup')}</h3>
          <OrderType
            typeValues={themeValuesRef?.current?.order_types?.components?.pickup?.components}
            path='order_types.components.pickup.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
            <ImageBox
              title={t('PICKUP_OPTION_IMAGE', 'Pickup option image')}
              ratio='900 x 200 px'
              photo={themeValuesRef?.current?.order_types?.components?.pickup?.components?.image}
              path='order_types.components.pickup.components.image'
              themeId={themesList?.themes?.[0]?.id}
              handleChangePhoto={handleUpdateThemeValue}
            />
          <h3>{t('EAT_IN', 'Eat in')}</h3>
          <OrderType
            typeValues={themeValuesRef?.current?.order_types?.components?.eat_in?.components}
            path='order_types.components.eat_in.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
            <ImageBox
              title={t('EAT_IN_OPTION_IMAGE', 'Eat in option image')}
              ratio='900 x 200 px'
              photo={themeValuesRef?.current?.order_types?.components?.eat_in?.components?.image}
              path='order_types.components.eat_in.components.image'
              themeId={themesList?.themes?.[0]?.id}
              handleChangePhoto={handleUpdateThemeValue}
            />
          <h3>{t('CURBSIDE', 'Curbside')}</h3>
          <OrderType
            typeValues={themeValuesRef?.current?.order_types?.components?.curbside?.components}
            path='order_types.components.curbside.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
            <ImageBox
              title={t('CURBSIDE_OPTION_IMAGE', 'Curbside option image')}
              ratio='900 x 200 px'
              photo={themeValuesRef?.current?.order_types?.components?.curbside?.components?.image}
              path='order_types.components.curbside.components.image'
              themeId={themesList?.themes?.[0]?.id}
              handleChangePhoto={handleUpdateThemeValue}
            />
          <h3>{t('DRIVE_THRU', 'Drive thru')}</h3>
          <OrderType
            typeValues={themeValuesRef?.current?.order_types?.components?.drive_thru?.components}
            path='order_types.components.drive_thru.components'
            handleUpdateThemeValue={handleUpdateThemeValue}
          />
            <ImageBox
              title={t('DRIVE_THRU_OPTION_IMAGE', 'Drive thru option image')}
              ratio='900 x 200 px'
              photo={themeValuesRef?.current?.order_types?.components?.drive_thru?.components?.image}
              path='order_types.components.drive_thru.components.image'
              themeId={themesList?.themes?.[0]?.id}
              handleChangePhoto={handleUpdateThemeValue}
            />

        </BoxLayout>
        <BoxLayout>
          <h2>{t('THIRD_PARTY_CODE', 'Third-party code')}</h2>
          <SettingComponent
            settingList={thirdPartyCodeList}
            handleUpdateThemeValue={handleUpdateThemeValue}
            advancedValues={themeValuesRef?.current}
            themeStructure={themeStructure}
            themeId={themesList?.themes?.[0]?.id}
          />
        </BoxLayout>
        {isApp && (
          <BoxLayout>
            <h2>{t('NAVIGATION_BAR_MENU', 'Navigation bar menu')}</h2>
            <SettingComponent
              settingList={navigationBarList}
              handleUpdateThemeValue={handleUpdateThemeValue}
              advancedValues={themeValuesRef?.current}
              themeStructure={themeStructure}
              themeId={themesList?.themes?.[0]?.id}
            />
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
      <Modal
        width='769px'
        padding='25px'
        open={isOpenSound}
        onClose={() => setIsOpenSound(false)}
      >
        <UploadAudio
          onClose={() => setIsOpenSound(false)}
        />
      </Modal>
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
