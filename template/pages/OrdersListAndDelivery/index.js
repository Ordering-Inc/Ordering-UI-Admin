import React from 'react'
import { AdminLayout } from '../../../src/layouts/AdminLayout'
import { HelmetTags } from '../../components/HelmetTags'
import {
  WrapperOrdersListAndDelivery
} from './styles'
import { MainOrdersManager as MainOrdersManagerController } from '../../../src/components/MainOrdersManager'
// import { OverView } from '../../../src/components/OverView'

export const OrdersListAndDelivery = (props) => {
  return (
    <>
      <HelmetTags page='orders-deliveries' />
      <AdminLayout>
        <WrapperOrdersListAndDelivery>
          <MainOrdersManagerController />
          {/* <OverView /> */}
        </WrapperOrdersListAndDelivery>
      </AdminLayout>
    </>
  )
}
