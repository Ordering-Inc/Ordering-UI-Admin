import React from 'react'
import { OrdersOverview as OrdersOverviewController, useLanguage } from 'ordering-components'
// import { OrdersOverview as OrdersOverviewController } from '../OrdersOverviewController'
import Skeleton from 'react-loading-skeleton'
import {
  OverViewContainer,
  OverViewTitle,
  OverViewItemContent,
  OverViewItem,
  OverViewStatusTitle,
  OverViewStatusValue,
  SkeletonContainer,
  SkeletonCard
} from './styles'

const OrdersOverViewUI = (props) => {
  const {
    ordersOverviewList
  } = props
  const [, t] = useLanguage()

  return (
    <OverViewContainer id='overView'>
      {!ordersOverviewList.loading ? (
        <>
          <OverViewTitle>
            {t('OVERVIEW', 'overview')}
          </OverViewTitle>
          <OverViewItemContent>
            <OverViewItem>
              <OverViewStatusTitle>
                {t('ORDERS_TODAY', 'orders today')}
              </OverViewStatusTitle>
              <OverViewStatusValue>
                {ordersOverviewList.overview.total}
              </OverViewStatusValue>
            </OverViewItem>

            <OverViewItem>
              <OverViewStatusTitle>
                {t('PENDING', 'pending')}
              </OverViewStatusTitle>
              <OverViewStatusValue>
                {ordersOverviewList.overview.pending}
              </OverViewStatusValue>
            </OverViewItem>

            <OverViewItem>
              <OverViewStatusTitle>
                {t('IN_PROGRESS', 'in progress')}
              </OverViewStatusTitle>
              <OverViewStatusValue>
                {ordersOverviewList.overview.inProgress}
              </OverViewStatusValue>
            </OverViewItem>

            <OverViewItem>
              <OverViewStatusTitle>
                {t('COMPLETED', 'completed')}
              </OverViewStatusTitle>
              <OverViewStatusValue>
                {ordersOverviewList.overview.completed}
              </OverViewStatusValue>
            </OverViewItem>

            <OverViewItem>
              <OverViewStatusTitle>
                {t('CANCELLED', 'cancelled')}
              </OverViewStatusTitle>
              <OverViewStatusValue>
                {ordersOverviewList.overview.cancelled}
              </OverViewStatusValue>
            </OverViewItem>
          </OverViewItemContent>
        </>
      ) : (
        <SkeletonContainer>
          <Skeleton width={100} height={15} />
          {[...Array(5)].map((item, i) =>
            <SkeletonCard key={i}>
              <Skeleton width={100} height={15} />
              <Skeleton width={50} height={25} />
            </SkeletonCard>
          )}
        </SkeletonContainer>
      )}
    </OverViewContainer>
  )
}

export const OverView = (props) => {
  const OrdersOverviewControlProps = {
    ...props,
    UIComponent: OrdersOverViewUI
  }

  return <OrdersOverviewController {...OrdersOverviewControlProps} />
}
