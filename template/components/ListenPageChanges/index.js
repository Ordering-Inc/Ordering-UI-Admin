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
    messages: '/messages',
    customers: '/users/customers',
    managers: '/users/managers',
    login: '/login',
    businesses: '/stores/list',
    brand: '/stores/brand',
    store: '/stores/products/:store?',
    basicSettings: '/settings/basic',
    operationSettings: '/settings/operation',
    pages: '/settings/pages',
    places: '/settings/places',
    integrations: '/settings/integrations',
    language: '/settings/language',
    business_analytics: '/intelligence/business',
    drivers_analytics: '/intelligence/drivers',
    invoice: '/intelligence/invoice',
    reviews: '/intelligence/reviews',
    reviewProducts: '/intelligence/reviews/:store',
    reports: '/intelligence/reports',
    delivery_drivers: '/delivery/drivers-list',
    drivers_managers: '/delivery/drivers-managers',
    drivers_companies: '/delivery/drivers-companies',
    drivers_groups: '/delivery/drivers-groups',
    enterprise_promotions: '/marketing/promotions-enterprise',
    campaign: '/marketing/campaign',
    ordering_products: '/ordering-products',
    support: '/support',
    rewards_programs: '/loyalty/rewards-programs'
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
