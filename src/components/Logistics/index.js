import React from 'react'
import { Logistics as LogisticsController, useUtils } from 'ordering-components-admin'
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
    case 'logistic_driver_found':
      return `Driver ${log.driver.name} found to the order at ${(
        log?.data?.distance / 1000
      ).toFixed(2)} KM`
    case 'logistic_driver_found_group':
      return `Driver ${log.driver.name} found`
    case 'logistic_driver_not_found':
      return 'Drivers was not found.'
    case 'logistic_driver_not_found_group':
      return 'Drivers was not found to the group'
    case 'logistic_driver_found_in_coverage':
      return 'logistic driver found in coverage'
    case 'logistic_driver_found_in_coverage_group':
      return 'logistic driver found in coverage group'
    case 'logistic_driver_found_out_coverage':
      return `Driver ${log.driver.name} found to the order at ${(
        log?.data?.distance / 1000
      ).toFixed(2)} KM out of ${log.data.coverage} KM of coverage.`
    case 'logistic_driver_found_out_coverage_group':
      return 'logistic driver found out coverage group'
    case 'logistic_driver_autoaccepted':
      return `Order was auto-assigned and auto-accepted by driver ${log.driver.name} at ${(log.data.distance / 1000).toFixed(2)} KM.`
    case 'logistic_driver_autoaccepted_group':
      return 'logisticdriver autoaccepted group'
    case 'logistic_request_autorejected':
      return `Request of the driver ${log.driver.name} was auto-rejected with order ${log?.with_orders.join()} by process.`
    case 'logistic_request_autorejected_group':
      return 'logistic request autorejected group'
    case 'logistic_assign_request_accepted':
      return 'logistic assign request accepted'
    case 'logistic_assign_request_accepted_group':
      return 'logistic assign request accepted group'
    case 'logistic_assign_request_rejected':
      return 'logistic assign request rejected'
    case 'logistic_assign_request_rejected_group':
      return 'logistic assign request rejected group'
    case 'logistic_manual_driver_assignment':
      return 'logistic manual driver assignment'
    case 'logistic_manual_driver_unassignment':
      return 'LOG_LOGISTIC_MANUAL_DRIVER_UNASSIGNMENT'
    case 'logistic_driver_autoassigned_group':
      return 'logistic driver autoassigned group'
    case 'logistic_started':
      return 'Process started.'
    case 'logistic_finished':
      return 'Process finished.'
    case 'logistic_expired':
      return 'Logisitic expired'
    case 'logistic_resolved':
      return 'Logistic resolved.'
    case 'logistic_reset':
      return 'Logistic reset'
    case 'logistic_grouped':
      return `Order was grouped with order ${log.data.with_orders.join()}`
    case 'logistic_cancelled':
      return 'Logistic cancelled'
    case 'logistic_not_grouped':
      return 'Order was not grouped.'
    case 'logistic_order_queued':
      return 'Order to queue.'
    case 'logistic_order_out_queue':
      return 'LOGISTIC_ORDER_OUT_QUEUE'
    default:
      return log.event
  }
}

const LogisticsUI = (props) => {
  const { logisticList } = props
  const [{ getTimeAgo }] = useUtils()

  return (
    <>
      {logisticList.loading ? (
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
