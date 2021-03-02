import React from 'react'
import { LogisticInformation as LogisticInformationController, useLanguage, useUtils } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'
import {
  WraaperLogs,
  SkeletonHitory,
  BubbleConsole,
  UppercaseText
} from './styles'

const LogisticInformationUI = (props) => {
  const { logisticInformation, getLogistics } = props
  const [, t] = useLanguage()

  const [{ parseDate }] = useUtils()
  const getStatus = (status) => {
    switch (status) {
      case 0:
        return 'Pending order'
      case 1:
        return 'Completed by admin'
      case 2:
        return 'Reject by admin'
      case 3:
        return 'Driver arrived by business'
      case 4:
        return 'Ready for pickup'
      case 5:
        return 'Reject by business'
      case 6:
        return 'Reject by driver'
      case 7:
        return 'Accepted by business'
      case 8:
        return 'Accepted by driver'
      case 9:
        return 'Pickup completed by driver'
      case 10:
        return 'Pickup failed by driver'
      case 11:
        return 'Delivery completed by driver'
      case 12:
        return 'Delivery failed by driver'
      default:
        return status
    }
  }

  return (
    <>
      {logisticInformation.loading ? (
        <>
          {[...Array(3)].map((item, i) => (
            <SkeletonHitory key={i}>
              <Skeleton width={400} height={40} />
              <Skeleton width={300} height={40} />
              <Skeleton width={380} height={40} />
              <Skeleton width={200} height={40} />
              <Skeleton width={450} height={40} />
            </SkeletonHitory>
          ))}
        </>
      ) : (
        <>
          {logisticInformation.error === null ? (
            <WraaperLogs>
              <Button color='darkBlue' onClick={() => getLogistics()}>
                {t('RELOAD', 'Reload')}
              </Button>
              <BubbleConsole>
                <UppercaseText><strong>{t('distance_customer_from_business', 'distance_customer_from_business')}</strong></UppercaseText>
                : {(logisticInformation?.data?.distance_customer_from_business / 1000).toFixed(2)} KM
              </BubbleConsole>
              <>
                <BubbleConsole>
                  <UppercaseText title='title'>{t('queues', 'queues')}</UppercaseText>
                </BubbleConsole>
                {logisticInformation.data.queues.length > 0 ? (
                  <>
                    {logisticInformation.data.queues.map((queue, i) => (
                      <React.Fragment key={queue.id}>
                        {queue?.name && (
                          <BubbleConsole>
                            <span>{i + 1}. {queue.name}</span>
                          </BubbleConsole>
                        )}
                        {queue?.drivers.length > 0 && (
                          <BubbleConsole>
                            <strong>{t('AVAILABLE DRIVERS', 'Available drivers')}: </strong>
                            <span>{queue.drivers.length}</span>
                          </BubbleConsole>
                        )}
                        {queue?.priority && (
                          <BubbleConsole>
                            <strong>{t('PRIORITY', 'Priority')}: </strong>
                            <span>{queue.priority}</span>
                          </BubbleConsole>
                        )}
                        {queue?.orders_group_start_in_status && (
                          <BubbleConsole>
                            <strong>{t('START_IN', 'Start in')}: </strong>
                            <span>{getStatus(queue.orders_group_start_in_status)}</span>
                          </BubbleConsole>
                        )}
                        <BubbleConsole>
                          {queue.orders.length > 0 ? (
                            <>
                              {queue.orders.map((order, i) => (
                                <strong key={order.id}>
                                  {i + 1}. {order.id} {order?.waiting_for_preorder && <span>({t('waiting_for_preorder', 'waiting_for_preorder')})</span>}
                                </strong>
                              ))}
                            </>
                          ) : (
                            t('WITHOUT_ORDERS', 'without_orders')
                          )}
                        </BubbleConsole>
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <BubbleConsole>
                    <UppercaseText>{t('WITHOUT_QUEUES', 'without_queues')}</UppercaseText>
                  </BubbleConsole>
                )}
              </>
              <>
                <BubbleConsole>
                  <UppercaseText title='title'>{t('HISTORY_ATTEMPTS', 'history_attempts')}</UppercaseText>
                </BubbleConsole>
                {logisticInformation.data.logistic_attempts.length > 0 ? (
                  <>
                    {logisticInformation.data.logistic_attempts.map(attempt => (
                      <BubbleConsole key={attempt.id}>
                        <strong>{t('DRIVER_GROUP', 'Driver group')}</strong>: <strong>{attempt?.driver_group_id}</strong> {t('AT', 'at')} {parseDate(attempt?.created_at, { utc: false })}
                      </BubbleConsole>
                    ))}
                  </>
                ) : (
                  <BubbleConsole>
                    <UppercaseText>{t('WITHOUT_HISTORY_ATTEMPTS', 'without_history_attempts')}</UppercaseText>
                  </BubbleConsole>
                )}
              </>
            </WraaperLogs>
          ) : (
            <>
              {logisticInformation.error}
            </>
          )}
        </>
      )}
    </>
  )
}

export const LogisticInformation = (props) => {
  const logisticsProps = {
    ...props,
    orderId: props.orderId,
    UIComponent: LogisticInformationUI
  }
  return <LogisticInformationController {...logisticsProps} />
}
