import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import { OrderDetails } from '../../../src/components/OrderDetails'

import { AdminLayout } from '../../../src/layouts/AdminLayout'
import {
  OrderDetailsContainer
} from './styles'

export const OrderDetailsPage = (props) => {
  const history = useHistory()
  const { orderId } = useParams()

  const orderDetailsProps = {
    ...props,
    orderId: orderId,
    handleOrderRedirect: () => {
      history.push('/orders')
    }
  }
  return (
    <>
      <HelmetTags page='order_details' helmetTitle={`Order #${orderId}`} />
      <AdminLayout>
        <OrderDetailsContainer>
          <OrderDetails {...orderDetailsProps} />
        </OrderDetailsContainer>
      </AdminLayout>
    </>
  )
}
