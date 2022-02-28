import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { useSession, useOrder, useLanguage, useConfig, GoogleTagManager } from 'ordering-components-admin'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'

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
// import { OrderingProducts } from './pages/OrderingProducts'
import { ReviewsList } from './pages/ReviewsList'
import { ReviewProducts } from './pages/ReviewProducts'
import { DeliveryDriversList } from './pages/DeliveryDriversList'
import { DriversManagersList } from './pages/DriversManagersList'
import { DriversCompaniesList } from './pages/DriversCompaniesList'
import { DriversGroupsList } from './pages/DriversGroupsList'
import { Support } from './pages/Support'
import { AdvancedReports } from './pages/AdvancedReports'
import { EnterprisePromotionList } from './pages/EnterprisePromotionList'

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { SpinnerLoader } from '../src/components/Shared'
import { HelmetTags } from './components/HelmetTags'
import { RewardsPrograms } from './pages/RewardsPrograms'

export const App = () => {
  const [{ auth, loading, user }] = useSession()
  const [orderStatus] = useOrder()
  const [{ configs }] = useConfig()
  const [loaded, setLoaded] = useState(false)
  const [, t] = useLanguage()
  const onlineStatus = useOnlineStatus()

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
                          ? user?.level !== 5 ? <Redirect to='/home' /> : <Redirect to='/orders' />
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
                    <Route exact path='/home'>
                      {
                        auth
                          ? user?.level !== 5 ? <Home /> : <Redirect to='/orders' />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/orders'>
                      {
                        auth
                          ? <OrdersList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/deliveries'>
                      {
                        auth
                          ? <DeliveriesManager />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/drivers'>
                      {
                        auth
                          ? <DriversList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/messages'>
                      {
                        auth
                          ? <MessagesList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/users/customers'>
                      {
                        auth
                          ? <CustomersList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/users/managers'>
                      {
                        auth
                          ? <ManagersList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/stores/list'>
                      {
                        auth
                          ? <BusinessesList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/stores/brand'>
                      {
                        auth
                          ? <BrandManager />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/stores/list/:store'>
                      {
                        auth
                          ? <BusinessProductsList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/settings/basic'>
                      {
                        auth
                          ? <BasicSettings />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/settings/operation'>
                      {
                        auth
                          ? <OperationSettings />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/settings/pages'>
                      {
                        auth
                          ? <Cms />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/settings/places'>
                      {
                        auth
                          ? <PlacesList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/settings/integrations'>
                      {
                        auth
                          ? <IntegrationsList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/settings/language'>
                      {
                        auth
                          ? <LanguageManager />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/support'>
                      {
                        auth
                          ? <Support />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/intelligence/business'>
                      {
                        auth
                          ? <BusinessAnalytics />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/intelligence/drivers'>
                      {
                        auth
                          ? <DriverAnalytics />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/intelligence/invoice'>
                      {
                        auth
                          ? <InvoiceManager />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/intelligence/reviews'>
                      {
                        auth
                          ? <ReviewsList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/intelligence/reviews/:store'>
                      {
                        auth
                          ? <ReviewProducts />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/intelligence/reports'>
                      {
                        auth
                          ? <AdvancedReports />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/delivery/drivers-list'>
                      {
                        auth
                          ? <DeliveryDriversList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/delivery/drivers-managers'>
                      {
                        auth
                          ? <DriversManagersList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/delivery/drivers-companies'>
                      {
                        auth
                          ? <DriversCompaniesList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/delivery/drivers-groups'>
                      {
                        auth
                          ? <DriversGroupsList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/marketing/promotions-enterprise'>
                      {
                        auth
                          ? <EnterprisePromotionList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    {/* <Route exact path='/ordering-products'>
                      {
                        auth
                          ? <OrderingProducts />
                          : <Redirect to='/login' />
                      }
                    </Route> */}
                    <Route exact path='/loyalty/rewards-programs'>
                      {
                        auth
                          ? <RewardsPrograms />
                          : <Redirect to='/login' />
                      }
                    </Route>

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
