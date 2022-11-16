import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Router } from './template/router'
import { OrderingProvider } from 'ordering-components-admin'
import { Alert } from './src/components/Shared'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { ThemeProvider } from './src/contexts/ThemeContext'
import { ConfigFileContext } from './src/contexts/ConfigFileContext'
import { InfoShareProvider } from './src/contexts/InfoShareContext'
import { Toast } from './src/styles/Toast'
import theme from './template/theme.json'
import settings from './template/config.json'

/**
 * Theme images
 */
import logotype from './template/assets/images/logotype.svg'
import logotypeInvert from './template/assets/images/logotype-invert.svg'
import isotype from './template/assets/images/isotype.svg'
import isotypeInvert from './template/assets/images/isotype-invert.svg'
import logoPdf from './template/assets/images/logo-pdf.png'

import notNetwork from './template/assets/images/not-network.svg'
import notFound from './template/assets/images/not-found.svg'
import notFound404 from './template/assets/images/not-found-404.svg'
import notFoundLighting from './template/assets/images/not-found-lighting.svg'
import loginHero from './template/assets/images/loginHero.png'
import personalization from './template/assets/images/personalization.svg'
import mobileCase from './template/assets/images/mobile-case.png'
import mobileMask from './template/assets/images/mobile-mask.png'
import level from './template/assets/images/level.png'
import registerOrder from './template/assets/images/register-order.png'
import mobileHalfMask from './template/assets/images/mobile-half-mask.png'
import whatsappHeader from './template/assets/images/whatsapp-header.png'
import appStore from './template/assets/images/app-store.png'
import googlePlay from './template/assets/images/google-play.png'
import deliverect from './template/assets/images/deliverect.png'
import ItsaCheckmateLogo from './template/assets/images/ItsaCheckmateLogo.png'
import doordash from './template/assets/images/door-dash.png'
/**
 * project statuses
 */
import projectActive from './template/assets/images/projectStatuses/project-active.png'
import projectPastDuePayment from './template/assets/images/projectStatuses/project-past-due-payment.png'

/**
 * Theme apps
 */
import storeApp from './template/assets/images/store-app.png'
import driverApp from './template/assets/images/driver-app.png'
import posApp from './template/assets/images/pos-app.png'
import kioskApp from './template/assets/images/kiosk-app.png'
import callCenterApp from './template/assets/images/call-center-app.png'

/**
 * business tutorials
 */
import businessTutorial1 from './template/assets/images/tutorials/business-tutorial-1.png'
import businessTutorial2 from './template/assets/images/tutorials/business-tutorial-2.png'

/**
 * dummies
 */
import storeDummy from './template/assets/images/dummies/store.png'
import noOrders from './template/assets/images/dummies/no-orders.png'
import promotionDummy from './template/assets/images/dummies/promotion.png'
import productDummy from './template/assets/images/dummies/product.png'

/**
 * icons
 */
import ordersList from './template/assets/images/icons/ordersList.svg'
import shop from './template/assets/images/icons/shop.svg'
import pieChart from './template/assets/images/icons/pieChart.svg'
import setting from './template/assets/images/icons/setting.svg'
import support from './template/assets/images/icons/support.svg'
import deadline from './template/assets/images/icons/deadline.svg'
import deadlineOK from './template/assets/images/icons/deadlineOK.svg'
import deadlineRisk from './template/assets/images/icons/deadlineRisk.svg'
import deadlineDelayed from './template/assets/images/icons/timeOut.svg'
import deadlineSetting from './template/assets/images/icons/deadlineSetting.png'
import search from './template/assets/images/icons/search.svg'
import group from './template/assets/images/icons/group.svg'
import calendar from './template/assets/images/icons/calendar.svg'
import email from './template/assets/images/icons/email.svg'
import lock from './template/assets/images/icons/lock.svg'
import cash from './template/assets/images/icons/cash.svg'
import help from './template/assets/images/icons/help.svg'
import timeline from './template/assets/images/icons/timeline.svg'
import mapMarker from './template/assets/images/icons/marker.png'
import sixDots from './template/assets/images/icons/sixDots.svg'
import shopToShop from './template/assets/images/icons/shopToShop.svg'
import homeToHome from './template/assets/images/icons/homeToHome.svg'
import oneByOne from './template/assets/images/icons/one-by-one.svg'
import sendToAll from './template/assets/images/icons/send-to-all.svg'
import nearestAvailable from './template/assets/images/icons/nearest-available.svg'
import batchWise from './template/assets/images/icons/batch-wise.svg'
import roundRobin from './template/assets/images/icons/round-robin.svg'
import leftArrow from './template/assets/images/icons/left-arrow.svg'
import rightArrow from './template/assets/images/icons/right-arrow.svg'

import orderPending from './template/assets/images/orderStatus/pending.svg'
import orderInProgress from './template/assets/images/orderStatus/inProgress.svg'
import orderCompleted from './template/assets/images/orderStatus/completed.svg'
import orderCancelled from './template/assets/images/orderStatus/cancelled.svg'
import noDriver from './template/assets/images/avatars/noDriver.png'
import driverDelivery from './template/assets/images/icons/driverDelivery.svg'
import pickUp from './template/assets/images/icons/pickUp.svg'
import clock1 from './template/assets/images/icons/clock1.svg'
import clockRisk from './template/assets/images/icons/clock-history1.svg'
import clockDelayed from './template/assets/images/icons/clock-fill1.svg'

import orderStatus0 from './template/assets/images/order/status-0.svg'
import orderStatus1 from './template/assets/images/order/status-1.svg'
import orderStatus2 from './template/assets/images/order/status-2.svg'
import orderStatus3 from './template/assets/images/order/status-3.svg'
import orderStatus4 from './template/assets/images/order/status-4.svg'
import orderStatus5 from './template/assets/images/order/status-5.svg'
import orderStatus6 from './template/assets/images/order/status-6.svg'
import orderStatus7 from './template/assets/images/order/status-7.svg'
import orderStatus8 from './template/assets/images/order/status-8.svg'
import orderStatus9 from './template/assets/images/order/status-9.svg'
import orderStatus10 from './template/assets/images/order/status-10.svg'
import orderStatus11 from './template/assets/images/order/status-11.svg'
import orderStatus12 from './template/assets/images/order/status-12.svg'
import orderStatus13 from './template/assets/images/order/status-13.svg'
import orderStatus14 from './template/assets/images/order/status-14.svg'
import orderStatus15 from './template/assets/images/order/status-15.svg'
import orderStatus16 from './template/assets/images/order/status-16.svg'
import orderStatus17 from './template/assets/images/order/status-17.svg'
import orderStatus18 from './template/assets/images/order/status-18.svg'
import orderStatus19 from './template/assets/images/order/status-19.svg'
import orderStatus20 from './template/assets/images/order/status-20.svg'
import orderStatus21 from './template/assets/images/order/status-21.svg'

import categoryAll from './template/assets/images/categories/category-all.png'
import exampleCSV from './template/assets/files/ordering_business_example.csv'
import delivery from './template/assets/images/icons/delivery.svg'
import poster from './template/assets/images/icons/poster.svg'
import posTerminal from './template/assets/images/icons/pos-terminal.svg'
import apple from './template/assets/images/icons/apple.svg'
import android from './template/assets/images/icons/android.svg'

/**
 * sounds
 */
import notificationOgg from './template/assets/sounds/notification.ogg'
import notificationMp3 from './template/assets/sounds/notification.mp3'

/**
 * my products
 */
import myCustomerApp from './template/assets/images/myProducts/customer-app.png'
import myStoreApp from './template/assets/images/myProducts/store-app.png'
import myDriverApp from './template/assets/images/myProducts/driver-app.png'
import orderingWebsite from './template/assets/images/myProducts/ordering-website.png'
import myCallcenterAppBrand from './template/assets/images/myProducts/my-callcenter-app-brand.png'
import myCallcenterAppLive from './template/assets/images/myProducts/my-callcenter-app-live.png'
import myKioskAppBrand from './template/assets/images/myProducts/my-kiosk-app-brand.png'
import myKioskAppLive from './template/assets/images/myProducts/my-kiosk-app-live.png'
import myPosAppBrand from './template/assets/images/myProducts/my-pos-app-brand.png'
import myPosAppLive from './template/assets/images/myProducts/my-pos-app-live.png'
import storeAppFree from './template/assets/images/myProducts/store-app-free.png'
import storeAppBrand from './template/assets/images/myProducts/store-app-brand.png'
import driverAppFree from './template/assets/images/myProducts/driver-app-free.png'
import driverAppBrand from './template/assets/images/myProducts/driver-app-brand.png'
import multiStoreCustomerApp from './template/assets/images/myProducts/multi-store-customer-app.png'
import singleStoreCustomerApp from './template/assets/images/myProducts/single-store-customer-app.png'

import { AutologinParams } from './template/components/AutologinParams'

if (!(window?.location?.hostname === 'localhost')) {
  Sentry.init({
    environment: process.env.NODE_ENV,
    dsn: 'https://ee8c5677dcce40e5a0740ecdb222f357@o460529.ingest.sentry.io/5681485',
    integrations: [
      new Integrations.BrowserTracing()
    ],
    release: 'ordering-ui-admin@' + process.env.npm_package_version,
    // Release health
    autoSessionTracking: true,
    ignoreErrors: [
      'is not defined',
      'is not a function',
      'can\'t find variable',
      'objects are not valid',
      'element type is invalid'
    ],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 0.2
  })
}

const logos = {
  logotype,
  logotypeInvert,
  isotype,
  isotypeInvert,
  logoPdf
}

theme.images = {
  logos,
  general: {
    notNetwork,
    notFound,
    notFound404,
    notFoundLighting,
    loginHero,
    personalization,
    mobileCase,
    mobileMask,
    level,
    registerOrder,
    mobileHalfMask,
    whatsappHeader,
    appStore,
    googlePlay,
    deliverect,
    ItsaCheckmateLogo,
    doordash
  },
  project: {
    active: projectActive,
    pastDuePayment: projectPastDuePayment
  },
  apps: {
    storeApp,
    driverApp,
    posApp,
    kioskApp,
    callCenterApp
  },
  order: {
    status0: orderStatus0,
    status1: orderStatus1,
    status2: orderStatus2,
    status3: orderStatus3,
    status4: orderStatus4,
    status5: orderStatus5,
    status6: orderStatus6,
    status7: orderStatus7,
    status8: orderStatus8,
    status9: orderStatus9,
    status10: orderStatus10,
    status11: orderStatus11,
    status12: orderStatus12,
    status13: orderStatus13,
    status14: orderStatus14,
    status15: orderStatus15,
    status16: orderStatus16,
    status17: orderStatus17,
    status18: orderStatus18,
    status19: orderStatus19,
    status20: orderStatus20,
    status21: orderStatus21
  },
  categories: {
    all: categoryAll
  },
  orderStatus: {
    pending: orderPending,
    inProgress: orderInProgress,
    completed: orderCompleted,
    cancelled: orderCancelled
  },
  myProducts: {
    customerApp: myCustomerApp,
    storeApp: myStoreApp,
    driverApp: myDriverApp,
    orderingWebsite: orderingWebsite,
    myCallcenterAppBrand,
    myCallcenterAppLive,
    myKioskAppBrand,
    myKioskAppLive,
    myPosAppBrand,
    myPosAppLive,
    storeAppFree,
    storeAppBrand,
    driverAppFree,
    driverAppBrand,
    multiStoreCustomerApp,
    singleStoreCustomerApp
  },
  icons: {
    ordersList: ordersList,
    shop: shop,
    pieChart: pieChart,
    setting: setting,
    support: support,
    deadline: deadline,
    deadlineOK: deadlineOK,
    deadlineRisk: deadlineRisk,
    deadlineDelayed: deadlineDelayed,
    deadlineSetting: deadlineSetting,
    search: search,
    calendar: calendar,
    group: group,
    email: email,
    lock: lock,
    noDriver: noDriver,
    driverDelivery: driverDelivery,
    pickUp: pickUp,
    cash: cash,
    help: help,
    timeline: timeline,
    mapMarker: mapMarker,
    sixDots: sixDots,
    shopToShop: shopToShop,
    homeToHome: homeToHome,
    oneByOne: oneByOne,
    sendToAll: sendToAll,
    nearestAvailable: nearestAvailable,
    batchWise: batchWise,
    roundRobin: roundRobin,
    leftArrow: leftArrow,
    rightArrow: rightArrow,
    clock1: clock1,
    clockRisk: clockRisk,
    clockDelayed: clockDelayed,
    delivery: delivery,
    posTerminal: posTerminal,
    poster: poster,
    apple: apple,
    android: android
  },
  dummies: {
    noOrders: noOrders,
    businessLogo: storeDummy,
    promotionDummy: promotionDummy,
    product: productDummy
  },
  tutorials: {
    businessTutorial1: businessTutorial1,
    businessTutorial2: businessTutorial2
  }
}
theme.sounds = {
  notificationMp3,
  notificationOgg
}
theme.files = {
  exampleCSV
}

const RouteApp = () => {
  const language = JSON.parse(window.localStorage.getItem('language'))?.code || 'en'
  const [configFile, setConfigFile] = useState({
    ...settings,
    api: {
      ...settings.api,
      language: language
    },
    project: settings?.use_project_domain
      ? '_'
      : window.localStorage.getItem('project') !== null
        ? window.localStorage.getItem('project')
        : null
  })

  return (
    <ConfigFileContext.Provider value={[configFile, setConfigFile]}>
      <ThemeProvider theme={theme}>
        <AutologinParams configFile={configFile}>
          <OrderingProvider Alert={Alert}>
            <InfoShareProvider>
              <Router />
              <Toast />
            </InfoShareProvider>
          </OrderingProvider>
        </AutologinParams>
      </ThemeProvider>
    </ConfigFileContext.Provider>
  )
}

const wrapper = document.getElementById('app')
ReactDOM.render(<RouteApp />, wrapper)
