import React from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import EnDotSingle from '@meronex/icons/en/EnDotSingle'
import ReactToPrint from 'react-to-print'
import {
  // Wallet2,
  Printer,
  Diagram3,
  ThreeDots,
  XLg as CloseIcon,
  Chat as ChatIcon,
  Dot
} from 'react-bootstrap-icons'
import { IconButton as ButtonLink } from '../../../styles'
import {
  OrderDetailsHeaderContainer,
  UreadMessageAlert,
  ButtonGroup
} from './styles'

export const OrderDetailsHeader = (props) => {
  const {
    order,
    handleShowOption,
    handleOpenMessages,
    actionSidebar,
    setIsTourOpen,
    isTourOpen,
    currentTourStep,
    showOption,
    openMessage,
    printRef
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()

  const walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  }

  const closeSideBar = () => {
    actionSidebar(false)
    if (isTourOpen && currentTourStep === 1) setIsTourOpen(false)
  }

  return (
    <OrderDetailsHeaderContainer>
      <div>
        <h1>{t('INVOICE_ORDER_NO', 'Order No')} {order?.id}</h1>
        <p>
          {order?.payment_events?.length > 0 ? (
            order?.payment_events?.map((event, i) => (
              <React.Fragment key={i}>
                <span>
                  {event?.wallet_event
                    ? walletName[event?.wallet_event?.wallet?.type]?.name
                    : event?.paymethod?.name}
                </span>
                <EnDotSingle />
              </React.Fragment>
            ))
          ) : (
            <>
              <span>{order?.paymethod?.name}</span>
              <EnDotSingle />
            </>
          )}
          {order?.delivery_type === 1 && (
            <span>
              {t('DELIVERY', 'Delivery')}
            </span>
          )}
          {order?.delivery_type === 2 && (
            <span>
              {t('PICKUP', 'Pickup')}
            </span>
          )}
          {order?.delivery_type === 3 && (
            <span>
              {t('EAT_IN', 'Eat in')}
            </span>
          )}
          {order?.delivery_type === 4 && (
            <span>
              {t('CURBSIDE', 'Curbside')}
            </span>
          )}
          {order?.delivery_type === 5 && (
            <span>
              {t('DRIVE_THRU', 'Drive thru')}
            </span>
          )}
        </p>
      </div>
      <ButtonGroup>
        {/* <ButtonLink
          isDisabled={isTourOpen && currentTourStep === 1}
          onClick={() => handleShowOption('cash_wallet')}
        >
          <Wallet2 />
        </ButtonLink> */}
        {user?.level !== 5 && (
          <ButtonLink
            color='black'
            active={openMessage?.chat}
            onClick={() => handleOpenMessages('chat')}
            isDisabled={isTourOpen && currentTourStep === 1}
          >
            <ChatIcon />
            {order?.unread_count > 0 && (
              <UreadMessageAlert>
                <Dot />
              </UreadMessageAlert>
            )}
          </ButtonLink>
        )}
        <ReactToPrint
          trigger={() => (
            <ButtonLink
              color='black'
              isDisabled={isTourOpen && currentTourStep === 1}
            >
              <Printer />
            </ButtonLink>
          )}
          content={() => printRef.current}
          removeAfterPrint
        />
        <ButtonLink
          color='black'
          active={openMessage?.history}
          onClick={() => handleOpenMessages('history')}
          isDisabled={isTourOpen && currentTourStep === 1}
        >
          <Diagram3 />
        </ButtonLink>
        <ButtonLink
          color='black'
          active={showOption === 'metafields'}
          onClick={() => handleShowOption('metafields')}
          isDisabled={isTourOpen && currentTourStep === 1}
        >
          <ThreeDots />
        </ButtonLink>
        <ButtonLink
          color='black'
          onClick={() => closeSideBar()}
        >
          <CloseIcon />
        </ButtonLink>
      </ButtonGroup>
    </OrderDetailsHeaderContainer>
  )
}
