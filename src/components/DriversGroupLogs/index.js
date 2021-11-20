import React, { useEffect } from 'react'
import { useLanguage, useUtils, DriversGroupLogs as DriversGroupLogsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'

import {
  DriversGroupLogsContainer,
  TableWrapper,
  Table,
  UserInfoContainer,
  DateTimeWrapper,
  NoData,
  WrapperPagination,
  DataListTable
} from './styles'

const DriversGroupLogsUI = (props) => {
  const {
    logsList,
    paginationProps,
    getDriversGroupLogs
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const getAttributeName = (key) => {
    const attributes = [
      { key: 'autoassign_amount_drivers', content: t('AUTO_ASSIGN_GROUP_ORDERS_TO_DRIVERS', 'Auto assign the order of group to this amount of drivers') },
      { key: 'orders_group_max_orders', content: t('MAX_NUMBER_ORDERS', 'Maximum Number of Orders') },
      { key: 'autoassign_autoaccept_by_driver', content: t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver') },
      { key: 'orders_group_max_time_between', content: t('MAX_ORDER_TIME_BETWEEN', 'Maximum time between orders in seconds') },
      { key: 'orders_group_max_distance_between_pickup', content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters') },
      { key: 'orders_group_max_distance_between_delivery', content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters') },
      { key: 'orders_group_use_maps_api', content: t('USE_MAPS_API', 'Use maps api') },
      { key: 'orders_group_max_time_between_pickup', content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters') },
      { key: 'orders_group_max_time_between_delivery', content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters') },
      { key: 'autoassign_forced_assignment', content: t('AUTO_ASSIGN_FORCED_ASSIGNMENT', 'Forced assignment') },
      { key: 'autoassign_customer_max_distance_from_business', content: t('MAX_CUSTOMER_DISTANCE_FROM_BUSINESS', 'Max distance between customer and business') },
      { key: 'autoassign_initial_radius', content: t('INITIAL_RADIUS', 'Initial radius in meters') },
      { key: 'autoassign_increment_radius', content: t('INCREMENT_RADIUS', 'Radius increase in meters') },
      { key: 'autoassign_max_radius', content: t('MAX_RADIUS', 'Maximum radius in meters') },
      { key: 'autoassign_autoreject_time', content: t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After') },
      { key: 'autoassign_max_orders', content: t('MAX_AMOUNT_ORDERS_PER_DRIVER', 'Maximum amount of orders per drivers') },
      { key: 'autoassign_max_in_pending', content: t('ORDER_PENDING', 'Pending') }
    ]
    const found = attributes.find(attribute => attribute.key === key)
    if (found) {
      return found.content
    } else {
      return key
    }
  }

  const handleChangePage = (page) => {
    getDriversGroupLogs(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getDriversGroupLogs(expectedPage, pageSize)
  }

  useEffect(() => {
    if (logsList.loading || logsList.logs.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [logsList.logs, paginationProps])

  return (
    <>
      <DriversGroupLogsContainer>
        <TableWrapper>
          {(logsList.loading || logsList.logs.length > 0) ? (
            <Table>
              <thead>
                <tr>
                  <th>{t('CONTROL_PANEL_USERS', 'Users')}</th>
                  <th>{t('DETAILS', 'Details')}</th>
                  <th>{t('EXPORT_DATE', 'Date')}</th>
                  <th>{t('USER_AGENT', 'User agent')}</th>
                </tr>
              </thead>
              {logsList.loading ? (
                [...Array(10).keys()].map(i => (
                  <tbody key={i}>
                    <tr>
                      <td>
                        <UserInfoContainer>
                          <p><Skeleton width={100} /></p>
                          <p><Skeleton width={120} /></p>
                        </UserInfoContainer>
                      </td>
                      <td>
                        <DataListTable>
                          <tbody>
                            <tr>
                              <td><Skeleton width={100} /></td>
                              <td><Skeleton width={20} /></td>
                              <td><Skeleton width={20} /></td>
                            </tr>
                          </tbody>
                        </DataListTable>
                      </td>
                      <td>
                        <DateTimeWrapper>
                          <Skeleton />
                        </DateTimeWrapper>
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                logsList.logs.map(log => (
                  <tbody key={log.id}>
                    <tr>
                      <td>
                        <UserInfoContainer>
                          <p>{log?.user?.name} {log?.user?.lastname}</p>
                          <p>{log?.user?.email}</p>
                        </UserInfoContainer>
                      </td>
                      <td>
                        <DataListTable>
                          {log?.data.map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{getAttributeName(item?.attribute)}</td>
                                <td>{`${item?.new}`}</td>
                                <td>{`${item?.old}`}</td>
                              </tr>
                            </tbody>
                          ))}
                        </DataListTable>
                      </td>
                      <td>
                        <DateTimeWrapper>
                          {parseDate(log.created_at, { utc: false })}
                        </DateTimeWrapper>
                      </td>
                      <td>
                        {log?.user_agent}
                      </td>
                    </tr>
                  </tbody>
                ))
              )}
            </Table>
          ) : (
            <NoData>{t('NO_DATA', 'No Data')}</NoData>
          )}
        </TableWrapper>
        {logsList?.logs.length > 0 && (
          <WrapperPagination>
            <Pagination
              isHidePagecontrol
              currentPage={paginationProps.currentPage}
              totalPages={paginationProps.totalPages}
              handleChangePage={handleChangePage}
              handleChangePageSize={handleChangePageSize}
            />
          </WrapperPagination>
        )}
      </DriversGroupLogsContainer>
    </>
  )
}

export const DriversGroupLogs = (props) => {
  const driversGroupLogsProps = {
    ...props,
    UIComponent: DriversGroupLogsUI
  }
  return <DriversGroupLogsController {...driversGroupLogsProps} />
}
