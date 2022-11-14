import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from 'react-router-dom'
import { useSession, useOrder, useLanguage, useConfig, GoogleTagManager, CannyIdentification } from 'ordering-components-admin'
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
import { ReviewProducts } from './pages/ReviewProducts'
import { DeliveryDriversList } from './pages/DeliveryDriversList'
import { DriversManagersList } from './pages/DriversManagersList'
import { DriversCompaniesList } from './pages/DriversCompaniesList'
import { DriversGroupsList } from './pages/DriversGroupsList'
import { Support } from './pages/Support'
import { AdvancedReports } from './pages/AdvancedReports'
import { EnterprisePromotionList } from './pages/EnterprisePromotionList'
import { Appointments } from './pages/Appointments'
// import { GiftCardsList } from './pages/GiftCardsList'
import { ResetPassword } from './pages/ResetPassword'
import { OrderingWebsite } from './pages/OrderingWebsite'
import { CustomerApp } from './pages/CustomerApp'
import { StoreApp } from './pages/StoreApp'
import { DriverApp } from './pages/DriverApp'

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
import { Profile } from './pages/Profile'

export const App = () => {
  const [{ auth, loading, user }] = useSession()
  const [orderStatus] = useOrder()
  const [{ configs }] = useConfig()
  const [loaded, setLoaded] = useState(false)
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

  return (
    <>
      <ListenPageChanges />
      {
        !loaded && (
          <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading Ordering Dashboard...')} />
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
                <SidebarMenu />
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
                    <ProtectedRoute path='/appointments' allowedLevels={[0, 2]}>
                      <Appointments />
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
                    <ProtectedRoute path='/intelligence/reviews/:store' allowedLevels={[0]}>
                      <ReviewProducts />
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

                    <ProtectedRoute path='/marketing/promotions-enterprise' allowedLevels={[0]}>
                      <EnterprisePromotionList />
                    </ProtectedRoute>
                    <ProtectedRoute path='/marketing/campaign' allowedLevels={[0]}>
                      <CampaignListing />
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
