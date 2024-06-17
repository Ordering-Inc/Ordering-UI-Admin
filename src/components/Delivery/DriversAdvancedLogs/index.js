import React, { useEffect } from 'react'
import { useLanguage, useUtils, DriversAdvancedLogs as DriversAdvancedLogsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../../Shared'
import { getAttributeName } from '../../../utils'
import {
  DriversAdvacedLogsContainer,
  TableWrapper,
  Table,
  UserInfoContainer,
  DateTimeWrapper,
  NoData,
  WrapperPagination,
  DataListTable,
  EventTypeContainer
} from './styles'

export const DriversAdvancedLogsUI = (props) => {
  const {
    logsList,
    paginationProps,
    getDriversAdvancedLogs,
    actionDisabled
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const handleChangePage = (page) => {
    getDriversAdvancedLogs(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getDriversAdvancedLogs(expectedPage, pageSize)
  }

  const getValidLogData = (data) => {
    return typeof data === 'object'
      ? Object.values(data)
      : typeof data === 'string' ? JSON.parse(data) : data
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
      <DriversAdvacedLogsContainer
        disabled={actionDisabled}
      >
        <TableWrapper>
          {(logsList.loading || logsList.logs.length > 0) ? (
            <Table>
              <thead>
                <tr>
                  <th>{t('EVENTS_TYPE', 'Events type')}</th>
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
                !logsList.error && logsList.logs?.map(log => (
                  <tbody key={log.id}>
                    <tr>
                      <td>
                        <EventTypeContainer>
                          <p>{t((log?.event || '').toUpperCase())}</p>
                        </EventTypeContainer>
                      </td>
                      <td>
                        <DataListTable>
                          {console.log(log?.data)}
                          {log?.data && getValidLogData(log?.data).map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{getAttributeName(item)}</td>
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
      </DriversAdvacedLogsContainer>
    </>
  )
}

export const DriversAdvancedLogs = (props) => {
  const driversGroupLogsProps = {
    ...props,
    UIComponent: DriversAdvancedLogsUI
  }
  return <DriversAdvancedLogsController {...driversGroupLogsProps} />
}
