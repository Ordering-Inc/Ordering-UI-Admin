import React from 'react'
import { AdminLayout } from '../../../src/layouts/AdminLayout'
import { HelmetTags } from '../../components/HelmetTags'
import { DeliveryDashboard as DeliveryDashboardController } from '../../../src/components/DeliveryDashboard'
import {
  DeliveryDashboardContainer
} from './styles'

export const DeliveryDashboard = (props) => {
  return (
    <>
      <HelmetTags page='deliveryDashboard' />
      <AdminLayout>
        <DeliveryDashboardContainer>
          <DeliveryDashboardController />
        </DeliveryDashboardContainer>
      </AdminLayout>
    </>
  )
}
