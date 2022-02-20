import React from 'react'
import { useUtils } from 'ordering-components-admin'
import { CircleFill } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'

import {
  Container,
  HistoriesWrapper,
  HistoryItem,
  TransactionHeader,
  Transaction,
  TransactionDescription,
  Amount
} from './styles'

export const CustomerCashWalletEvents = (props) => {
  const {
    cashEventsState,
    parseEvent
  } = props

  const [{ parseDate, parsePrice }] = useUtils()

  return (
    <Container>
      <HistoriesWrapper
        isLoading={cashEventsState.loading}
      >
        {cashEventsState.loading ? (
          [...Array(10).keys()].map(i => (
            <HistoryItem key={i}>
              <Skeleton />
            </HistoryItem>
          ))
        ) : (
          cashEventsState.events.map(event => (
            <HistoryItem
              key={event.id}
            >
              <TransactionHeader>
                <CircleFill />
                <span className='date'>
                  {parseDate(event?.created_at, { utc: false })}
                </span>
                <Amount negative={Math.sign(event.amount) === -1}>{parsePrice(event.amount)}</Amount>
              </TransactionHeader>
              <Transaction
                dangerouslySetInnerHTML={{
                  __html: parseEvent(event)
                }}
              />
              <TransactionDescription>
                {event.description}
              </TransactionDescription>
            </HistoryItem>
          ))
        )}
      </HistoriesWrapper>
    </Container>
  )
}
