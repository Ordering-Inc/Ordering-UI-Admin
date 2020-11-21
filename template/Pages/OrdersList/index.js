import React, { useState } from 'react'
import { AdminLayout } from '../../../src/layouts/AdminLayout'
import { HelmetTags } from '../../components/HelmetTags'
import {
  OrdersListContainer,
  PageContent,
  OrdersContent,
  OrdersInnerContent
} from './styles'

import { OrderStatusFilterBar } from '../../../src/components/OrderStatusFilterBar'
import { OrderContentHeader } from '../../../src/components/OrderContentHeader'
import { OrdersDashboardControls } from '../../../src/components/OrdersDashboardControls'
import { OverView } from '../../../src/components/OverView'

import { OrderListing } from '../../../src/components/OrderListing'

export const OrdersList = (props) => {
  const [selectedOrderStatus, setSelectedOrderStatus] = useState('pending')

  const changeOrderStatus = (orderStatus) => {
    setSelectedOrderStatus(orderStatus)
  }

  return (
    <>
      <HelmetTags page='orders' />
      <AdminLayout>
        <OrdersListContainer>
          <PageContent>
            <OrderStatusFilterBar
              selectedOrderStatus={selectedOrderStatus}
              changeOrderStatus={(orderStatus) => changeOrderStatus(orderStatus)}
            />
            <OrdersContent>
              <OrdersInnerContent>
                <OrderContentHeader active='ordersList' />
                <OrdersDashboardControls />

                <OrderListing
                  selectedOrderStatus={selectedOrderStatus}
                  orderListView='big'
                />

              </OrdersInnerContent>
            </OrdersContent>
          </PageContent>

          <OverView />
        </OrdersListContainer>
      </AdminLayout>
    </>
  )
}
