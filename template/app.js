import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useSession, useOrder, useLanguage } from 'ordering-components'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'

import { PageNotFound } from './Pages/PageNotFound'
import { OrdersList } from './Pages/OrdersList'
import { OrderDetailsPage } from './Pages/OrderDetails'
import { Login } from './Pages/Login'
import { DeliveryDashboard } from './Pages/DeliveryDashboard'

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { HelmetTags } from './components/HelmetTags'

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
            {onlineStatus && (
              <ScrollToTop>
                <HelmetTags />
                <Switch>
                  <Route exact path='/'>
                    {
                      auth ? <Redirect to='/orders' /> : <Redirect to='/login' />
                    }
                  </Route>

                  <Route exact path='/login'>
                    {
                      !auth
                        ? (
                          <Login
                            useLoginByEmail
                          />
                        )
                        : (
                          <Redirect to='/orders' />
                        )
                    }
                  </Route>

                  <Route exact path='/orders'>
                    {
                      auth
                        ? <OrdersList />
                        : <Redirect to='/login' />
                    }
                  </Route>

                  <Route exact path='/delivery-dashboard'>
                    {
                      auth
                        ? <DeliveryDashboard />
                        : <Redirect to='/login' />
                    }
                  </Route>

                  <Route exact path='/orders/:orderId'>
                    {auth
                      ? <OrderDetailsPage />
                      : <Redirect to='/login' />}
                  </Route>

                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
              </ScrollToTop>
            )}
          </>
        )
      }
    </>
  )
}
