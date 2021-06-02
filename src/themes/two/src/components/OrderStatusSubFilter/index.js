import React from 'react'
import { Button } from '../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'
import { AutoScroll } from '../AutoScroll'
import {
  SubFilterContainer,
  InnerContainer
} from './styles'

export const OrderStatusSubFilter = (props) => {
  const {
    selectedSubOrderStatus,
    ordersStatusGroup,
    handleSelectedSubOrderStatus
  } = props

  const statues = {
    pending: [
      { key: 0, value: 'Pending' },
      { key: 13, value: 'Preorder' },
    ],
    inProgress: [
      { key: 7, value: 'Accepted by business' },
      { key: 4, value: 'Ready for pickup' },
      { key: 8, value: 'Accepted by driver' },
      { key: 3, value: 'Driver arrived by business' },
      { key: 9, value: 'Pick up completed by driver' },
      { key: 14, value: 'Order not ready' },
      { key: 18, value: 'Driver almost arrived to business' },
      { key: 19, value: 'Driver almost arrived to customer' },
      { key: 20, value: 'Customer almost arrived to business' },
      { key: 21, value: 'Customer arrived to business' }
    ],
    completed: [
      { key: 1, value: 'Completed by admin' },
      { key: 11, value: 'Delivery completed by driver' },
      { key: 15, value: 'Pickup completed by customer' }
    ],
    cancelled: [
      { key: 2, value: 'Reject by admin' },
      { key: 5, value: 'Reject by business' },
      { key: 6, value: 'Reject by driver' },
      { key: 10, value: 'Pick up Failed by driver' },
      { key: 12, value: 'Delivery Failed by driver' },
      { key: 16, value: 'Canceled by customer' },
      { key: 17, value: 'Not picked by customer' }
    ]
  }

  const handleChange = (status) => {
    switch (ordersStatusGroup) {
      case 'pending':
        let pendingStatuses = [...selectedSubOrderStatus?.pending]
        if (pendingStatuses.includes(status)) {
          pendingStatuses = pendingStatuses.filter(_status => _status !== status)
        } else {
          pendingStatuses.push(status)
        }
        handleSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          pending: pendingStatuses
        })
        break
      case 'inProgress':
        let inProgressStatuses = [...selectedSubOrderStatus?.inProgress]
        if (inProgressStatuses.includes(status)) {
          inProgressStatuses = inProgressStatuses.filter(_status => _status !== status)
        } else {
          inProgressStatuses.push(status)
        }
        handleSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          inProgress: inProgressStatuses
        })
        break
      case 'completed':
        let completedStatuses = [...selectedSubOrderStatus?.completed]
        if (completedStatuses.includes(status)) {
          completedStatuses = completedStatuses.filter(_status => _status !== status)
        } else {
          completedStatuses.push(status)
        }
        handleSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          completed: completedStatuses
        })
        break
      case 'cancelled':
        let cancelledStatuses = [...selectedSubOrderStatus?.cancelled]
        if (cancelledStatuses.includes(status)) {
          cancelledStatuses = cancelledStatuses.filter(_status => _status !== status)
        } else {
          cancelledStatuses.push(status)
        }
        handleSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          cancelled: cancelledStatuses
        })
        break
    }
  }
  return (
    <SubFilterContainer>
      <InnerContainer>
        <AutoScroll scrollId='subFilter'>
          {statues[ordersStatusGroup].map(status => (
            <Button
              key={status.key}
              color={(selectedSubOrderStatus?.pending.includes(status.key) ||
                selectedSubOrderStatus?.inProgress.includes(status.key) ||
                selectedSubOrderStatus?.completed.includes(status.key) ||
                selectedSubOrderStatus?.cancelled.includes(status.key)) ? 'primary' : 'secundary'}
              onClick={() => handleChange(status.key)}
            >
              {status.value}
              {(selectedSubOrderStatus?.pending.includes(status.key) ||
                selectedSubOrderStatus?.inProgress.includes(status.key) ||
                selectedSubOrderStatus?.completed.includes(status.key) ||
                selectedSubOrderStatus?.cancelled.includes(status.key)) && <MdClose />}
            </Button>
          ))}
        </AutoScroll>
      </InnerContainer>
    </SubFilterContainer>
  )
}
