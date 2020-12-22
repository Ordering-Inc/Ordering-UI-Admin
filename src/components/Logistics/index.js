import React from 'react'
import { Logistics as LogisticsController, useUtils } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import {
  WraaperLogs,
  BubbleConsole,
  TimeofSent,
  Reason,
  SkeletonHitory
} from './styles'

const getEventName = (log) => {
  switch (log.event) {
    case 'logistic_order_queued':
      return 'Order to queue.'
    case 'logistic_order_out_queue':
      return 'LOGISTIC_ORDER_OUT_QUEUE'
    case 'logistic_started':
      return 'Process started.'
    case 'logistic_not_grouped':
      return 'Order was not grouped.'
    case 'logistic_driver_found_out_coverage':
      return `Driver ${log.driver.name} found to the order at ${(
        log.data.distance / 1000
      ).toFixed(2)} KM out of ${log.data.coverage} KM of coverage.`
    case 'logistic_driver_autoaccepted':
      return `Order was auto-assigned and auto-accepted by driver ${log.driver.name} at ${log.data.distance} KM.`
    case 'logistic_resolved':
      return 'Logistic resolved.'
    case 'logistic_finished':
      return 'Process finished.'
    case 'logistic_manual_driver_unassignment':
      return 'LOG_LOGISTIC_MANUAL_DRIVER_UNASSIGNMENT'
    case 'logistic_request_autorejected':
      return `Request of the driver ${log.driver.name} was auto-rejected by process.`
    case 'logistic_driver_not_found':
      return 'Drivers was not found.'
    case 'logistic_expired':
      return 'Logisitic expired'
    default:
      return log.event
  }
}

const LogisticsUI = (props) => {
  const { actionStatus, logisticList } = props
  const [{ getTimeAgo }] = useUtils()

  return (
    <>
      {actionStatus.loading ? (
        <>
          {[...Array(5)].map((item, i) => (
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
        <WraaperLogs>
          {logisticList.logs.map((log) => (
            <BubbleConsole key={log.id}>
              {getEventName(log)}
              {log.event === 'logistic_expired' && (
                <Reason>Reason: {log?.data?.reason}</Reason>
              )}
              <TimeofSent>{getTimeAgo(log.updated_at)}</TimeofSent>
            </BubbleConsole>
          ))}
        </WraaperLogs>
      )}
    </>
  )
}

export const Logistics = (props) => {
  const logisticsProps = {
    ...props,
    orderId: props.orderId,
    UIComponent: LogisticsUI
  }
  return <LogisticsController {...logisticsProps} />
}
