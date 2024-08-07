import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { useTheme } from '../../../src/contexts/ThemeContext'

export const ListenPageChanges = ({ children }) => {
  const history = useHistory()
  const [events] = useEvent()
  const [languageState] = useLanguage()
  const [theme, { merge }] = useTheme()

  const routes = {
    home: '/home',
    orders: '/orders',
    deliveries: '/deliveries',
    drivers: '/drivers',
    all_in_one: '/all-in-one',
    appointments: '/appointments',
    giftCards: '/gift-cards',
    messages: '/messages',
    customers: '/users/customers',
    managers: '/users/managers',
    professionals: '/users/professionals',
    login: '/login',
    businesses: '/stores/list',
    business_add: '/stores/add',
    brand: '/stores/brand',
    devices: '/stores/devices',
    store: '/stores/products/:store?',
    basic_settings: '/settings/basic',
    operation_settings: '/settings/operation',
    plugin_settings: '/settings/plugin',
    pages: '/settings/pages',
    places: '/settings/places',
    integrations: '/settings/integrations',
    language: '/settings/language',
    logs: '/settings/logs',
    business_analytics: '/intelligence/business',
    drivers_analytics: '/intelligence/drivers',
    invoice: '/intelligence/invoice',
    reviews: '/intelligence/reviews',
    reports: '/intelligence/reports',
    open_carts: '/cart-recovery/open-carts',
    recovery_actions: '/cart-recovery/recovery-actions',
    ordering_website: '/my-products/ordering-website',
    customer_app: '/my-products/customer-app',
    store_app: '/my-products/store-app',
    driver_app: '/my-products/driver-app',
    pos_app: '/my-products/pos-app',
    call_center_app: '/my-products/call-center-app',
    kiosk_app: '/my-products/kiosk-app',
    custom_project: '/my-products/custom-project',
    ordering_widgets: '/my-products/ordering-widgets',
    delivery_drivers: '/delivery/drivers-list',
    drivers_managers: '/delivery/drivers-managers',
    drivers_companies: '/delivery/drivers-companies',
    drivers_groups: '/delivery/drivers-groups',
    drivers_time_display: '/delivery/drivers-time-display',
    enterprise_promotions: '/marketing/promotions-enterprise',
    campaign: '/marketing/campaign',
    ad_banners: '/marketing/ad-banners',
    ordering_products: '/ordering-products',
    support: '/support',
    rewards_programs: '/loyalty/rewards-programs',
    reset_password: '/password/reset',
    profile: '/profile'
  }

  const handleGoToPage = ({ page, params = {}, search, replace = false }) => {
    let path = routes[page]
    if (path) {
      Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`:${key}`, value)
      })
      if (Object.values(params).length === 0 && page === 'store') {
        path = path.replace(':store?', '')
      }
      if (search) {
        path = `${path}${search}`
      }
      history[replace ? 'replace' : 'push'](path)
    }
  }

  const getCurrentPage = (pathname) => {
    Object.entries(routes).forEach(([key, value]) => {
      const regex = RegExp(value.replace(/:[a-zA-Z]+/i, '(.+)') + '$', 'gi')
      if (regex.test(pathname)) {
        const pathParts = value.split('/')
        const currentParts = pathname.split('/')
        const params = {}
        const paramRegex = /:[a-zA-Z]+/i
        pathParts.forEach((part, i) => {
          if (paramRegex.test(part)) {
            params[part.replace(':', '')] = currentParts[i]
          }
        })
        const query = {}
        const searchParams = new URLSearchParams(history.location.search)
        for (const [key, value] of searchParams.entries()) {
          query[key] = value
        }

        events.emit('change_view', { page: key, params, query })
      }
    })
  }

  const handleGetCurrentView = () => {
    getCurrentPage(history.location.pathname)
  }

  useEffect(() => {
    getCurrentPage(history.location.pathname)
    const unlisten = history.listen((data) => {
      getCurrentPage(data.pathname)
    })
    events.on('go_to_page', handleGoToPage)
    events.on('get_current_view', handleGetCurrentView)
    return () => {
      unlisten()
      events.off('go_to_page', handleGoToPage)
      events.off('get_current_view', handleGetCurrentView)
    }
  }, [events])

  useEffect(() => {
    if (theme.rtl !== languageState?.language?.rtl) {
      merge({
        rtl: languageState?.language?.rtl
      })
    }
  }, [languageState?.language?.rtl])

  return (
    <>
      {children}
    </>
  )
}
