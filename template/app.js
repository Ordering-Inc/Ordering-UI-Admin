import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { useSession, useOrder, useLanguage } from 'ordering-components-admin'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'

import { PageNotFound } from './Pages/PageNotFound'
import { OrdersListAndDelivery } from './Pages/OrdersListAndDelivery'
import { Login } from './Pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'

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
                      auth ? <Redirect to='/orders-deliveries' /> : <Redirect to='/login' />
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
                          <Redirect to='/orders-deliveries' />
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
                        : <Redirect to='/orders-deliveries' />
                    }
                  </Route>

                  <Route exact path='/orders-deliveries'>
                    {
                      auth
                        ? <OrdersListAndDelivery />
                        : <Redirect to='/login' />
                    }
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
