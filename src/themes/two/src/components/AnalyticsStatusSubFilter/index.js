import React from 'react'
import { AnalyticsStatusSubFilter as AnalyticsStatusSubFilterController } from './naked'
import { Button } from '../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'
import { AutoScroll } from '../AutoScroll'
import {
  SubFilterContainer,
  InnerContainer
} from './styles'
import Skeleton from 'react-loading-skeleton'

export const AnalyticsStatusSubFilterUI = (props) => {
  const {
    selectedAnalyticsSubStatus,
    changeAnalyticsSubStatus,
    appIdList
  } = props

  // const handleChange = (status) => {
  //   let pendingStatuses = [...selectedSubOrderStatus?.pending]
  //   let inProgressStatuses = [...selectedSubOrderStatus?.inProgress]
  //   let completedStatuses = [...selectedSubOrderStatus?.completed]
  //   let cancelledStatuses = [...selectedSubOrderStatus?.cancelled]
  //   switch (ordersStatusGroup) {
  //     case 'pending':
  //       if (pendingStatuses.includes(status)) {
  //         pendingStatuses = pendingStatuses.filter(_status => _status !== status)
  //       } else {
  //         pendingStatuses.push(status)
  //       }
  //       handleSelectedSubOrderStatus({
  //         ...selectedSubOrderStatus,
  //         pending: pendingStatuses
  //       })
  //       break
  //     case 'inProgress':
  //       if (inProgressStatuses.includes(status)) {
  //         inProgressStatuses = inProgressStatuses.filter(_status => _status !== status)
  //       } else {
  //         inProgressStatuses.push(status)
  //       }
  //       handleSelectedSubOrderStatus({
  //         ...selectedSubOrderStatus,
  //         inProgress: inProgressStatuses
  //       })
  //       break
  //     case 'completed':
  //       if (completedStatuses.includes(status)) {
  //         completedStatuses = completedStatuses.filter(_status => _status !== status)
  //       } else {
  //         completedStatuses.push(status)
  //       }
  //       handleSelectedSubOrderStatus({
  //         ...selectedSubOrderStatus,
  //         completed: completedStatuses
  //       })
  //       break
  //     case 'cancelled':
  //       if (cancelledStatuses.includes(status)) {
  //         cancelledStatuses = cancelledStatuses.filter(_status => _status !== status)
  //       } else {
  //         cancelledStatuses.push(status)
  //       }
  //       handleSelectedSubOrderStatus({
  //         ...selectedSubOrderStatus,
  //         cancelled: cancelledStatuses
  //       })
  //       break
  //   }
  // }
  return (
    <SubFilterContainer>
      <InnerContainer>
        <AutoScroll innerScroll scrollId='analyticsSubFilter'>
          {appIdList.loading ? (
            [...Array(10).keys()].map(i => (
              <Skeleton width={50} key={i} />
            ))
          ) : (
            ['all', ...appIdList?.ids].map((appId, i) => (
              <Button
                key={i}
                color={(selectedAnalyticsSubStatus === appId) ? 'primary' : 'secundary'}
                onClick={() => changeAnalyticsSubStatus(appId)}
              >
                {appId}
                {(selectedAnalyticsSubStatus === appId) && <MdClose />}
              </Button>
            ))
          )}
        </AutoScroll>
      </InnerContainer>
    </SubFilterContainer>
  )
}

export const AnalyticsStatusSubFilter = (props) => {
  const analyticsStatusSubFilterProps = {
    ...props,
    UIComponent: AnalyticsStatusSubFilterUI
  }
  return (
    <AnalyticsStatusSubFilterController {...analyticsStatusSubFilterProps} />
  )
}
