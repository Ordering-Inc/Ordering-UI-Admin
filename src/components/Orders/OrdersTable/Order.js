import React from 'react'
import { BusinessInfo, CheckBox, CustomerInfo, LogisticStatusDot, OrderNumberContainer, OrdersCountWrapper, PriorityDot, StatusInfo, Timer, Timestatus, WrapperImage, InfoWrapper, ChannelInfo, EtaInfo, PodInfo } from './styles'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

const OrderPropsAreEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.order) === JSON.stringify(nextProps.order) &&
    JSON.stringify(prevProps.allowColumns) === JSON.stringify(nextProps.allowColumns) &&
    prevProps.isEnabledRowInColor === nextProps.isEnabledRowInColor &&
    JSON.stringify(prevProps.selectedOrderIds) === JSON.stringify(nextProps.selectedOrderIds) &&
    JSON.stringify(prevProps.isSelectedOrders) === JSON.stringify(nextProps.isSelectedOrders) &&
    prevProps.showExternalId === nextProps.showExternalId &&
    prevProps.groupStatus === nextProps.groupStatus
}

export const Order = React.memo((props) => {
  const {
    orderDetailId,
    order,
    i,
    isEnabledRowInColor,
    handleClickOrder,
    allowColumns,
    isSelectedOrders,
    selectedOrderIds,
    handleSelectedOrderIds,
    showExternalId,
    getOrderStatus,
    hidePhoto,
    getLogisticTag,
    getPriorityTag,
    groupStatus,
    displayDelayedTime,
    getCurrenySymbol,
    franchiseImages
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [{ parseDate, optimizeImage, getTimeAgo, parsePrice }] = useUtils()
  const cateringTypes = [7, 8]
  return (
    <tr
      key={i}
      className={parseInt(orderDetailId) === order.id ? 'active' : ''}
      data-tour={i === 0 ? 'tour_start' : ''}
      data-status={isEnabledRowInColor && order?.time_status}
      onClick={(e) => handleClickOrder(order, e)}
    >
      {Object.keys(allowColumns).filter(col => allowColumns[col]?.visable)
        .sort((col1, col2) => allowColumns[col1]?.order - allowColumns[col2]?.order)
        .map((column, index) => {
          if (column === 'slaBar') {
            return (
              <td key={`slaBar${i}-${index}`}>
                <Timestatus
                  timeState={order?.time_status}
                />
              </td>
            )
          }
          if (column === 'externalId' && !isSelectedOrders) {
            return (
              <td className='externalId' key={`externalId${i}-${index}`}>
                <StatusInfo>
                  <p className='bold'>{order?.external_id}</p>
                </StatusInfo>
              </td>
            )
          }
          if (showExternalId ? column === 'dateTime' : column === 'orderNumber') {
            return (
              <td
                className={!(allowColumns?.orderNumber?.visable || allowColumns?.dateTime?.visable) ? 'small' : ''}
                key={`orderNumber${i}-${index}`}
              >
                <OrderNumberContainer>
                  {!isSelectedOrders && (
                    <CheckBox
                      isChecked={selectedOrderIds.includes(order?.id)}
                      onClick={() => handleSelectedOrderIds(order.id)}
                      className='orderCheckBox'
                    >
                      {selectedOrderIds.includes(order?.id) ? (
                        <RiCheckboxFill />
                      ) : (
                        <RiCheckboxBlankLine />
                      )}
                    </CheckBox>
                  )}
                  <div className='info'>
                    {allowColumns?.orderNumber?.visable && !showExternalId && (
                      <p className='bold'>{t('INVOICE_ORDER_NO', 'Order No.')} {order?.id}</p>
                    )}
                    {allowColumns?.dateTime?.visable && (
                      <>
                        {cateringTypes.includes(order?.delivery_type) && (
                          <p className='date'>
                            {
                              `${t('CREATED_AT', 'Created at')}: ${parseDate(order?.created_at)}`
                            }
                          </p>
                        )}
                        <p className='date'>
                          {
                            `${cateringTypes.includes(order?.delivery_type) ? `${t('PLACED_TO', 'Placed to')}:` : ''} ${order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}`
                          }
                        </p>
                      </>
                    )}
                  </div>
                </OrderNumberContainer>
              </td>
            )
          }
          if (column === 'status' && !isSelectedOrders) {
            return (
              <td className='statusInfo' key={`statusInfo${i}-${index}`}>
                <StatusInfo>
                  <p className='bold'>{getOrderStatus(order.status)}</p>
                </StatusInfo>
              </td>
            )
          }
          if (column === 'agent') {
            return (
              <td className='statusInfo' key={`agentInfo${i}-${index}`}>
                <InfoWrapper>
                  <div className='info'>
                    <p className='bold'>{order?.agent?.name}</p>
                    <p>{order?.agent?.email}</p>
                  </div>
                </InfoWrapper>
              </td>
            )
          }
          if (column === 'cartGroupId') {
            return (
              <td className='orderGroupId' key={`cart_group_id${i}-${index}`}>
                <StatusInfo>
                  {order?.cart_group_id && (
                    <p className='bold'>{t('No', 'No')}. {order?.cart_group_id}</p>
                  )}
                </StatusInfo>
              </td>
            )
          }
          if (column === 'driverGroupId') {
            return (
              <td className='orderGroupId' key={`cart_group_id${i}-${index}`}>
                <StatusInfo>
                  {order?.driver_group_id && (
                    <p className='bold'>{t('No', 'No')}. {order?.driver_group_id}</p>
                  )}
                </StatusInfo>
              </td>
            )
          }
          if (column === 'business') {
            return (
              <td className='businessInfo' key={`businessInfo${i}-${index}`}>
                <BusinessInfo>
                  {!hidePhoto && (
                    <WrapperImage>
                      <img src={optimizeImage(franchiseImages[order?.business?.franchise_id] || order.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} loading='lazy' alt='' />
                    </WrapperImage>
                  )}
                  <div className='info'>
                    <p className='bold'>{order?.business?.name}</p>
                    <p>{order?.business?.city?.name}</p>
                  </div>
                </BusinessInfo>
              </td>
            )
          }
          if (column === 'customer') {
            return (
              <td className='customerInfo' key={`customerInfo${i}-${index}`}>
                <CustomerInfo>
                  {!hidePhoto && (
                    <WrapperImage>
                      {order?.customer?.photo ? (
                        <img src={optimizeImage(order?.customer?.photo, 'h_50,c_limit')} loading='lazy' alt='' />
                      ) : (
                        <FaUserAlt />
                      )}
                      <OrdersCountWrapper isNew={order?.customer?.orders_count === 0}>
                        {order?.customer?.orders_count || t('NEW', 'New')}
                      </OrdersCountWrapper>
                    </WrapperImage>
                  )}
                  <div className='info'>
                    <p className='bold'>
                      {(!order?.customer?.email && !order?.customer?.cellphone && !order?.customer?.name) ? t('GUEST_USER', 'Guest user') : order?.customer?.name}
                    </p>
                    <p>{order?.customer?.cellphone}</p>
                  </div>
                </CustomerInfo>
              </td>
            )
          }
          if (column === 'driver' && !isSelectedOrders) {
            return (
              <td key={`driver${i}-${index}`}>
                {order?.delivery_type === 1 && (
                  <CustomerInfo>
                    {!hidePhoto && (
                      <WrapperImage>
                        {order?.driver?.photo ? (
                          <img src={optimizeImage(order?.driver?.photo, 'h_50,c_limit')} loading='lazy' alt='' />
                        ) : (
                          <FaUserAlt />
                        )}
                      </WrapperImage>
                    )}
                    <div className='info'>
                      {order?.driver ? (
                        <>
                          <p className='bold'>{order?.driver?.name}</p>
                          <p>{order?.driver?.cellphone}</p>
                        </>
                      ) : (
                        <p className='bold'>{t('NO_DRIVER', 'No Driver')}</p>
                      )}
                    </div>
                  </CustomerInfo>
                )}
              </td>
            )
          }
          if (column === 'advanced' && !isSelectedOrders) {
            return (
              <React.Fragment key={`advanced${i}-${index}`}>
                <td className='logistic'>
                  <div className='info'>
                    <p className='bold'>{t('LOGISTIC', 'Logistic')}</p>
                    <p>
                      {getLogisticTag(order?.logistic_status)}
                      <LogisticStatusDot
                        status={order?.logistic_status}
                      />
                    </p>
                  </div>
                </td>
                <td className='attempts'>
                  <div className='info'>
                    <p className='bold'>{t('ATTEMPTS', 'Attempts')}</p>
                    <p>{order?.logistic_attemps}</p>
                  </div>
                </td>
                <td className='priority'>
                  <div className='info'>
                    <p className='bold'>{t('PRIORITY', 'Priority')}</p>
                    <p>
                      {getPriorityTag(order?.priority)}
                      <PriorityDot priority={order?.priority} />
                    </p>
                  </div>
                </td>
              </React.Fragment>
            )
          }
          if (column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress')) {
            return (
              <td className='timer' key={`timer${i}-${index}`}>
                <Timer>
                  <p className='bold'>{t('TIMER', 'Timer')}</p>
                  <p className={order?.time_status}>{displayDelayedTime(order)}</p>
                </Timer>
              </td>
            )
          }
          if (column === 'eta') {
            return (
              <td className='eta' key={`eta${i}-${index}`}>
                <EtaInfo>
                  <p className='bold'>{''}</p>
                </EtaInfo>
             </td>
            )
          }
          if (column === 'channel') {
            return (
              <td className='channelInfo' key={`channelInfo${i}-${index}`}>
                <ChannelInfo>
                  <p className='bold'>{order?.app_id}</p>
                </ChannelInfo>
              </td>
            )
          }
          if (column === 'pod') {
            return (
              <td className='podInfo' key={`podInfo${i}-${index}`}>
                <PodInfo>
                  <p className='bold'>{order?.codigoPod}</p>
                </PodInfo>
              </td>
            )
          }
          if (column === 'total') {
            return (
              <td className='orderPrice' key={`total${i}-${index}`}>
                <div className='info'>
                  {allowColumns?.total?.visable && (
                    <p className='bold'>{parsePrice(order?.summary?.total, { currency: getCurrenySymbol(order?.currency) })}</p>
                  )}
                  {!(order?.status === 1 || order?.status === 11 || order?.status === 2 || order?.status === 5 || order?.status === 6 || order?.status === 10 || order.status === 12) && (
                    <p>
                      {
                        order?.delivery_datetime_utc
                          ? getTimeAgo(order?.delivery_datetime_utc)
                          : getTimeAgo(order?.delivery_datetime, { utc: false })
                      }
                    </p>
                  )}
                </div>
              </td>
            )
          }
        })}
    </tr>
  )
}, OrderPropsAreEqual)
