import React from 'react'
import { Button } from '../../styles/Buttons'
import { AutoScroll } from '../AutoScroll'
import MdClose from '@meronex/icons/ios/MdClose'
import {
  SubFilterContainer,
  InnerConatiner
} from './styles'

export const OrderStatusSubFilter = (props) => {
  const {
    selectedSubOrderStatus,
    ordersStatusGroup,
    setSelectedSubOrderStatus
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
        setSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          pending: status
        })
        break
      case 'inProgress':
        setSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          inProgress: status
        })
        break
      case 'completed':
        setSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          completed: status
        })
        break
      case 'cancelled':
        setSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          cancelled: status
        })
        break
      default:
        setSelectedSubOrderStatus({
          ...selectedSubOrderStatus,
          pending: status
        })
        break
    }
  }
  return (
    <SubFilterContainer>
      <InnerConatiner>
        <AutoScroll scrollId='subfilter'>
          {statues[ordersStatusGroup].map(status => (
            <Button
              key={status.key}
              color={(selectedSubOrderStatus?.pending === status.key ||
                selectedSubOrderStatus?.inProgress === status.key ||
                selectedSubOrderStatus?.completed === status.key ||
                selectedSubOrderStatus?.cancelled === status.key) ? 'primary' : 'secundary'}
              onClick={() => handleChange(status.key)}
            >
              {status.value}
              {(selectedSubOrderStatus?.pending === status.key ||
                selectedSubOrderStatus?.inProgress === status.key ||
                selectedSubOrderStatus?.completed === status.key ||
                selectedSubOrderStatus?.cancelled === status.key) && <MdClose />}
            </Button>
          ))}
        </AutoScroll>
      </InnerConatiner>
    </SubFilterContainer>
  )
}
