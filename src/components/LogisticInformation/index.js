import React from 'react'
import { LogisticInformation as LogisticInformationController, useLanguage, useUtils } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import {
  WraaperLogs,
  SkeletonHitory,
  BubbleConsole,
  UppercaseText
} from './styles'

const LogisticInformationUI = (props) => {
  const { logisticInformation } = props
  const [, t] = useLanguage()

  const [{ parseDate }] = useUtils()

  return (
    <>
      {logisticInformation.loading ? (
        <>
          {[...Array(3)].map((item, i) => (
            <SkeletonHitory key={i}>
              <Skeleton width={400} height={50} />
              <Skeleton width={300} height={50} />
              <Skeleton width={380} height={50} />
              <Skeleton width={200} height={50} />
              <Skeleton width={450} height={50} />
            </SkeletonHitory>
          ))}
        </>
      ) : (
        <>
          {logisticInformation.error === null ? (
            <WraaperLogs>
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
                      <BubbleConsole key={queue.id}>
                        {i}:
                        {queue.orders.length > 0 ? (
                          <>
                            {queue.orders.map(order => (
                              <span key={order.id}>
                                {order.id}
                              </span>
                            ))}
                          </>
                        ) : (
                          t('WITHOUT_ORDERS', 'without_orders')
                        )}
                      </BubbleConsole>
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
