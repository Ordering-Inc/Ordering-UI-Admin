import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { useSession, useOrder, useLanguage } from 'ordering-components-admin'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'

import { SidebarMenu } from '../src/themes/two/src/components/SidebarMenu'
import { Layout } from '../src/themes/two/src/components/Layout'

import { Home } from './pages/Home'
import { PageNotFound } from './pages/PageNotFound'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { OrdersList } from './pages/OrdersList'
import { DeliveriesManager } from './pages/DeliveriesManager'
import { DriversList } from './pages/DriversList'
import { UsersList } from './pages/UsersList'
import { BusinessesList } from './pages/BusinessesList'
import { BasicSettings } from './pages/BasicSettings'
import { OperationSettings } from './pages/OperationSettings'
import { BusinessProductsList } from './pages/BusinessProductsList'
import { BusinessAnalytics } from './pages/BusinessAnalytics'
import { MessagesList } from './pages/MessagesList'
import { Cms } from './pages/Cms'
import { IntegrationsList } from './pages/IntegrationsList'
import { PlacesList } from './pages/PlacesList'
import { InvoiceManager } from './pages/InvoiceManager'
import { ReviewsList } from './pages/ReviewsList'

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { SpinnerLoader } from '../src/themes/two/src/components/SpinnerLoader'
import { HelmetTags } from './components/HelmetTags'
import { DriverAnalytics } from './pages/DriverAnalytics'

export const App = () => {
  const [{ auth, loading }] = useSession()
  const [orderStatus] = useOrder()
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
                        auth ? <Redirect to='/home' /> : <Redirect to='/login' />
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
                          ? <Home />
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
                    <Route exact path='/users'>
                      {
                        auth
                          ? <UsersList />
                          : <Redirect to='/login' />
                      }
                    </Route>
                    <Route exact path='/businesses'>
                      {
                        auth
                          ? <BusinessesList />
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
                    <Route exact path='/store/:store'>
                      {
                        auth
                          ? <BusinessProductsList />
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
