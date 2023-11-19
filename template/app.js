import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom'
import {
  useSession,
  useOrder,
  useLanguage,
  useConfig,
  GoogleTagManager,
  CannyIdentification,
  useEvent
} from 'ordering-components-admin'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { useWindowSize } from '../src/hooks/useWindowSize'

import { SidebarMenu } from '../src/components/SidebarMenu'
import { Layout } from '../src/components/Layout'

import { Home } from './pages/Home'
import { PageNotFound } from './pages/PageNotFound'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { OrdersList } from './pages/OrdersList'
import { DeliveriesManager } from './pages/DeliveriesManager'
import { DriversList } from './pages/DriversList'
import { AllInOne } from './pages/AllInOne'
import { CustomersList } from './pages/CustomersList'
import { ManagersList } from './pages/ManagersList'
import { BusinessesList } from './pages/BusinessesList'
import { BrandManager } from './pages/BrandManager'
import { BasicSettings } from './pages/BasicSettings'
import { OperationSettings } from './pages/OperationSettings'
import { BusinessProductsList } from './pages/BusinessProductsList'
import { DriverAnalytics } from './pages/DriverAnalytics'
import { BusinessAnalytics } from './pages/BusinessAnalytics'
import { MessagesList } from './pages/MessagesList'
import { Cms } from './pages/Cms'
import { IntegrationsList } from './pages/IntegrationsList'
import { LanguageManager } from './pages/LanguageManager'
import { PlacesList } from './pages/PlacesList'
import { InvoiceManager } from './pages/InvoiceManager'
import { OrderingProducts } from './pages/OrderingProducts'
import { ReviewsList } from './pages/ReviewsList'
import { DeliveryDriversList } from './pages/DeliveryDriversList'
import { DriversManagersList } from './pages/DriversManagersList'
import { DriversCompaniesList } from './pages/DriversCompaniesList'
import { DriversGroupsList } from './pages/DriversGroupsList'
import { Support } from './pages/Support'
import { AdvancedReports } from './pages/AdvancedReports'
import { EnterprisePromotionList } from './pages/EnterprisePromotionList'
import { Appointments } from './pages/Appointments'
import { GiftCardsList } from './pages/GiftCardsList'
import { ResetPassword } from './pages/ResetPassword'
import { OrderingWebsite } from './pages/OrderingWebsite'
import { CustomerApp } from './pages/CustomerApp'
import { StoreApp } from './pages/StoreApp'
import { DriverApp } from './pages/DriverApp'
import { PosApp } from './pages/PosApp'
import { CallCenterApp } from './pages/CallCenterApp'
import { KioskApp } from './pages/KioskApp'

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { ProtectedRoute, SpinnerLoader } from '../src/components/Shared'
import { HelmetTags } from './components/HelmetTags'
import { RewardsPrograms } from './pages/RewardsPrograms'
import { OpenCarts } from './pages/OpenCarts'
import { RecoveryActionListing } from './pages/RecoveryActionListing'
import { CampaignListing } from './pages/CampaignListing'
import { Professionals } from './pages/Professionals'
import { QueryLogin } from '../src/components/Login'
import { PluginSettings } from './pages/PluginSettings'
import { AdBannersList } from './pages/AdBannersList'
import { Profile } from './pages/Profile'
import settings from './config.json'
import { BusinessAdd } from './pages/BusinessAdd'
import { CustomProject } from './pages/CustomProject'
import { OrderingWidgets } from './pages/OrderingWidgets'
import { BusinessDevicesList } from './pages/BusinessDevicesList'
import { SettingsLogs } from './pages/SettingsLogs'
import { DriversTimeDisplay } from './pages/DriverTimeDisplay'

export const App = () => {
  const history = useHistory()
  const [events] = useEvent()
  const [{ auth, loading, user }] = useSession()
  const [orderStatus] = useOrder()
  const [{ configs, loading: configLoading }] = useConfig()
  const [loaded, setLoaded] = useState(false)
  const [oneSignalState, setOneSignalState] = useState({
    notification_app: settings.notification_app
  })
  const [, t] = useLanguage()
  const onlineStatus = useOnlineStatus()
  const { height } = useWindowSize()

  const cannyAppId = '5b05e5e2d3f6c47201694ad4'

  const { search } = useLocation()
  let queryProject
  let queryToken
  if (search) {
    const query = new URLSearchParams(search)
    queryProject = query.get('project')
    queryToken = query.get('token')
  }

  useEffect(() => {
    if (!loaded && !orderStatus.loading) {
      setLoaded(true)
    }
  }, [orderStatus])

  useEffect(() => {
    if (!loading) {
      setLoaded(!auth)
    }
  }, [loading])

  useEffect(() => {
    if (height) {
      const vh = height * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }, [height])

  const oneSignalSetup = () => {
    if (!configs?.onesignal_dashboardweb_id?.value) {
      setOneSignalState({
        notification_app: settings.notification_app
      })
      return
    }
    const OneSignal = window.OneSignal || []
    const initConfig = {
      appId: configs?.onesignal_dashboardweb_id?.value,
      // allowLocalhostAsSecureOrigin: true,
      notificationClickHandlerAction: 'navigate'
    }

    OneSignal.push(function () {
      OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' }
      OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
      OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
      OneSignal.init(initConfig)

      const onNotificationClicked = function (data) {
        if (data?.data?.order_uuid) {
          history.push(`/orders?id=${data?.data?.order_uuid}`)
        }
      }
      const handler = function (data) {
        onNotificationClicked(data)
        OneSignal.addListenerForNotificationOpened(handler)
      }
      OneSignal.addListenerForNotificationOpened(handler)

      OneSignal.on('subscriptionChange', function (isSubscribed) {
        if (isSubscribed) {
          OneSignal.getUserId((userId) => {
            const data = {
              ...oneSignalState,
              notification_token: userId
            }
            setOneSignalState(data)
          })
        }
      })

      OneSignal.getUserId((userId) => {
        const data = {
          ...oneSignalState,
          notification_token: userId
        }
        setOneSignalState(data)
      })
    })
  }

  useEffect(() => {
    if (configLoading) return
    oneSignalSetup()
  }, [configLoading, events])

  return (
    <>
      <ListenPageChanges />
      {
        !loaded && (
          <SpinnerLoader />
        )
      }
      {
        loaded && (
          <>
            <NotNetworkConnectivity />
            {GoogleTagManager && (
              <GoogleTagManager tagId={configs?.google_tag_manager?.value} />
            )}
            {cannyAppId && (
              <CannyIdentification appId={cannyAppId} />
            )}
            <Layout>
              {auth && (
                <SidebarMenu billingUrl={settings?.billing_url} />
              )}
              {onlineStatus && (
                <ScrollToTop>
                  <HelmetTags />
                  <Switch>
                    <Route exact path='/'>
                      {
                        auth
                          ? (user?.level !== 5 && user?.level !== 8)
                            ? <Redirect to='/home' />
                            : user?.level === 8 ? <Redirect to='/profile' /> : <Redirect to='/orders' />
                          : (queryProject && queryToken)
                            ? <QueryLogin project={queryProject} token={queryToken} />
                            : <Redirect to='/login' />
                      }
                    </Route>

                    <Route exact path='/login'>
                      {
                        !auth
                          ? (
                            <Login
                              useLoginByEmail
                              elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                              notificationState={oneSignalState}
                            />
                          )
                          : (
                            <Redirect to='/home' />
                          )
                      }
                    </Route>

                    <Route exact path='/password/forgot'>
                      {
                        !auth ? (
                          <ForgotPassword
                            elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                          />
                        )
                          : <Redirect to='/home' />
                      }
                    </Route>

                    <Route exact path='/password/reset'>
                      {auth ? (
                        <Redirect to='/' />
                      ) : (
                        <ResetPassword
                          elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                        />
                      )}
                    </Route>

                    <Route exact path='/reset_password'>
                      {auth ? (
                        <Redirect to='/' />
                      ) : (
                        <ResetPassword
                          elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                        />
                      )}
                    </Route>

                    <Route exact path='/home'>
                      {
                        auth
                          ? (user?.level !== 5 && user?.level !== 8)
                            ? <Home />
                            : user?.level === 8 ? <Redirect to='/profile' /> : <Redirect to='/orders' />
                          : <Redirect to='/login' />
                      }
                    </Route>

                    <ProtectedRoute path='/orders' allowedLevels={[0, 2, 5]}>
                      <OrdersList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/deliveries' allowedLevels={[0, 2, 5]}>
                      <DeliveriesManager />
                    </ProtectedRoute>
                    <ProtectedRoute path='/drivers' allowedLevels={[0, 5]}>
                      <DriversList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/all-in-one' allowedLevels={[0, 2, 5]}>
                      <AllInOne />
                    </ProtectedRoute>
                    <ProtectedRoute path='/appointments' allowedLevels={[0, 2]}>
                      <Appointments />
                    </ProtectedRoute>
                    <ProtectedRoute path='/gift-cards' allowedLevels={[0]}>
                      <GiftCardsList />
                    </ProtectedRoute>

                    <ProtectedRoute path='/messages' allowedLevels={[0, 2]}>
                      <MessagesList />
                    </ProtectedRoute>

                    <ProtectedRoute path='/stores/list' allowedLevels={[0, 2]}>
                      <BusinessesList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/stores/products/:store?' allowedLevels={[0, 2]}>
                      <BusinessProductsList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/stores/brand' allowedLevels={[0]}>
                      <BrandManager />
                    </ProtectedRoute>
                    <ProtectedRoute path='/stores/devices' allowedLevels={[0]}>
                      <BusinessDevicesList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/stores/add' allowedLevels={[0, 2]}>
                      <BusinessAdd />
                    </ProtectedRoute>

                    <ProtectedRoute path='/users/customers' allowedLevels={[0]}>
                      <CustomersList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/users/managers' allowedLevels={[0]}>
                      <ManagersList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/users/professionals' allowedLevels={[0, 2, 5]}>
                      <Professionals />
                    </ProtectedRoute>

                    <ProtectedRoute path='/intelligence/business' allowedLevels={[0, 2]}>
                      <BusinessAnalytics />
                    </ProtectedRoute>
                    <ProtectedRoute path='/intelligence/drivers' allowedLevels={[0]}>
                      <DriverAnalytics />
                    </ProtectedRoute>
                    <ProtectedRoute path='/intelligence/invoice' allowedLevels={[0]}>
                      <InvoiceManager />
                    </ProtectedRoute>
                    <ProtectedRoute path='/intelligence/reviews' allowedLevels={[0]}>
                      <ReviewsList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/intelligence/reports' allowedLevels={[0]}>
                      <AdvancedReports />
                    </ProtectedRoute>

                    <ProtectedRoute path='/delivery/drivers-list' allowedLevels={[0, 5, 2]}>
                      <DeliveryDriversList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/delivery/drivers-managers' allowedLevels={[0]}>
                      <DriversManagersList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/delivery/drivers-companies' allowedLevels={[0]}>
                      <DriversCompaniesList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/delivery/drivers-groups' allowedLevels={[0, 5]}>
                      <DriversGroupsList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/delivery/drivers-time-display' allowedLevels={[0, 5]}>
                      <DriversTimeDisplay />
                    </ProtectedRoute>
                    <ProtectedRoute path='/marketing/promotions-enterprise' allowedLevels={[0]}>
                      <EnterprisePromotionList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/marketing/campaign' allowedLevels={[0]}>
                      <CampaignListing />
                    </ProtectedRoute>
                    <ProtectedRoute path='/marketing/ad-banners' allowedLevels={[0]}>
                      <AdBannersList />
                    </ProtectedRoute>

                    <ProtectedRoute path='/loyalty/rewards-programs' allowedLevels={[0]}>
                      <RewardsPrograms />
                    </ProtectedRoute>

                    <ProtectedRoute path='/cart-recovery/open-carts' allowedLevels={[0]}>
                      <OpenCarts />
                    </ProtectedRoute>
                    <ProtectedRoute path='/cart-recovery/recovery-actions' allowedLevels={[0]}>
                      <RecoveryActionListing />
                    </ProtectedRoute>

                    <ProtectedRoute path='/my-products/ordering-website' allowedLevels={[0]}>
                      <OrderingWebsite />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/customer-app' allowedLevels={[0]}>
                      <CustomerApp />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/store-app' allowedLevels={[0]}>
                      <StoreApp />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/driver-app' allowedLevels={[0]}>
                      <DriverApp />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/pos-app' allowedLevels={[0]}>
                      <PosApp />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/call-center-app' allowedLevels={[0]}>
                      <CallCenterApp />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/kiosk-app' allowedLevels={[0]}>
                      <KioskApp />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/custom-project' allowedLevels={[0]}>
                      <CustomProject />
                    </ProtectedRoute>
                    <ProtectedRoute path='/my-products/ordering-widgets' allowedLevels={[0]}>
                      <OrderingWidgets />
                    </ProtectedRoute>

                    <ProtectedRoute path='/settings/basic' allowedLevels={[0]}>
                      <BasicSettings />
                    </ProtectedRoute>
                    <ProtectedRoute path='/settings/operation' allowedLevels={[0]}>
                      <OperationSettings />
                    </ProtectedRoute>
                    <ProtectedRoute path='/settings/plugin' allowedLevels={[0]}>
                      <PluginSettings />
                    </ProtectedRoute>
                    <ProtectedRoute path='/settings/pages' allowedLevels={[0]}>
                      <Cms />
                    </ProtectedRoute>
                    <ProtectedRoute path='/settings/places' allowedLevels={[0]}>
                      <PlacesList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/settings/integrations' allowedLevels={[0]}>
                      <IntegrationsList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/settings/language' allowedLevels={[0]}>
                      <LanguageManager />
                    </ProtectedRoute>
                    <ProtectedRoute path='/settings/logs' allowedLevels={[0]}>
                      <SettingsLogs />
                    </ProtectedRoute>

                    <ProtectedRoute path='/support' allowedLevels={[0]}>
                      <Support />
                    </ProtectedRoute>

                    <ProtectedRoute path='/ordering-products' allowedLevels={[0]}>
                      <OrderingProducts />
                    </ProtectedRoute>

                    <ProtectedRoute path='/profile' allowedLevels={[0, 2, 5, 8]}>
                      <Profile />
                    </ProtectedRoute>

                    <Route path='*'>
                      <PageNotFound />
                    </Route>
                  </Switch>
                </ScrollToTop>
              )}
            </Layout>
          </>
        )
      }
    </>
  )
}
