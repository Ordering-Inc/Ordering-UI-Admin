import React, { useEffect } from 'react'
import { useLanguage, useUtils, useConfig, SettingsLogs as SettingsLogsController } from 'ordering-components-admin'
 import Skeleton from 'react-loading-skeleton'
 import { Modal, Pagination } from '../../Shared'
 import { IconButton } from '../../../styles'
 import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'


 import {
  DriversGroupLogsContainer,
  TableWrapper,
  Table,
  UserInfoContainer,
  DateTimeWrapper,
  NoData,
  WrapperPagination,
  DataListTable,
  EventTypeContainer,
  SeeChanges,
  SchedulesWrapper,
  Schedules,
  ScheduleDay,
  ScheduleLapses,
  ScheduleTitle,
  HeaderContainer,
  HeaderTitleContainer,
  ConfigListTable
} from './styles'

const SettingsLogsUI = (props) => {

  const { logsList, paginationProps, getSettingsLogs } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [open, setOpen] = React.useState(false)
  const [schedules, setSchedules] = React.useState({
    newSchedule: [],
    oldSchedule: []
  })
  const [{ configs }] = useConfig()
  const formatTime = configs?.general_hour_format?.value

  const handleChangePage = (page) => {
    getSettingsLogs(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getDriversGroupLogs(expectedPage, pageSize)
  }

  const getValidLogData = (data) => {
    return typeof data === 'object'
      ? Object.values(data)
      : typeof data === 'string' ? JSON.parse(data) : data
  }

  const handleSchedules = (_schedules) => {
    setSchedules({
      newSchedule: _schedules?.new,
      oldSchedule: _schedules?.old
    })
  }

  const scheduleModalData = (_schedules) => {
    setOpen(true)
    handleSchedules(_schedules)
  }

  useEffect(() => {
    if (logsList.loading || logsList.logs.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [logsList.logs, paginationProps])

  const daysOptions = [
    t('DAY7', 'Sunday'),
    t('DAY1', 'Monday'),
    t('DAY2', 'Tuesday'),
    t('DAY3', 'Wednesday'),
    t('DAY4', 'Thursday'),
    t('DAY5', 'Friday'),
    t('DAY6', 'Saturday')
  ]

  const checkTime = (val) => (val < 10 ? `0${val}` : val)
  const timeFormated = (time) => {
    return moment(`1900-01-01 ${checkTime(time.hour)}:${checkTime(time.minute)}`).format(formatTime)
  }

  const getSchedule = (_schedules) => {
    return ((!_schedules?.length && _schedules?.length < 1) ? <p>{t('NONE', 'None')}</p> : _schedules?.map((schedule, i) => {
      return (
        <ScheduleDay key={i}>
          <span>{daysOptions[i]}</span>
          <ScheduleLapses>
            {schedule?.lapses?.map((item, i) => {
              return <p key={i}>{`${timeFormated(item?.open)} - ${timeFormated(item?.close)}`}</p>
            })}
          </ScheduleLapses>
        </ScheduleDay>
      )
    })
    )
  }

  return (
    <>
    <DriversGroupLogsContainer>
      {isCollapse && (
        <IconButton
          color='black'
          onClick={() => handleMenuCollapse(false)}
        >
          <MenuIcon />
        </IconButton>
      )}
      <HeaderContainer>
        <HeaderTitleContainer>
          <h1>{t('SETTINGS_LOGS', 'Settings Logs')}</h1>
        </HeaderTitleContainer>
      </HeaderContainer>
      <TableWrapper>
        {(logsList.loading || logsList.logs.length > 0) ? (
          <Table>
            <thead>
              <tr>
                <th>{t('CONTROL_PANEL_USERS', 'Users')}</th>
                <th>{t('EVENTS_TYPE', 'Events type')}</th>
                <th>{t('CONFIG', 'Config')}</th>
                <th>{t('DETAILS', 'Details')}</th>
                <th>{t('NEW', 'New')}</th>
                <th>{t('OLD', 'Old')}</th>
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
                      <UserInfoContainer>
                        <p>{log?.author?.name || log?.user?.name} {log?.author?.lastname || log?.user?.lastname}</p>
                        <p>{log?.author?.email || log?.user?.email}</p>
                      </UserInfoContainer>
                    </td>
                    <td>
                      <EventTypeContainer>
                        <p>{t((log?.event || '').toUpperCase())}</p>
                      </EventTypeContainer>
                    </td>
                    <td>
                      <ConfigListTable>
                        <p>{t((log?.config?.key || '').toUpperCase(), (log?.config?.key || '').replaceAll('_',' '))}</p>
                      </ConfigListTable>
                    </td>
                    <td>
                      <DataListTable>
                        {log?.data && getValidLogData(log?.data).map((item, i) => (
                          <tbody key={i}>
                            <tr>
                              <td>{t(item?.attribute.toUpperCase(), item?.attribute.replaceAll('_',' '))}</td>
                            </tr>
                          </tbody>
                        ))}
                      </DataListTable>
                    </td>
                    <td>
                      <DataListTable>
                        {log?.data && getValidLogData(log?.data).map((item, i) => (
                          <tbody key={i}>
                            <tr>
                              {item.attribute !== 'schedule'
                                ? (
                                  <td>
                                    {
                                      (typeof item?.new !== 'undefined' && item?.new !== null)
                                        ? `${item?.new}`
                                        : item?.added?.length > 0 ? item?.added?.toString() : t('NONE', 'None')
                                    }
                                  </td>
                                )
                                : (
                                  <td>
                                    <SeeChanges onClick={() => scheduleModalData(item, 'new')}>{t('SEE_CHANGES', 'See changes')}</SeeChanges>
                                  </td>
                                )}
                            </tr>
                          </tbody>
                        ))}
                      </DataListTable>
                    </td>
                    <td>
                      <DataListTable>
                        {log?.data && getValidLogData(log?.data).map((item, i) => (
                          <tbody key={i}>
                            <tr>
                              {item.attribute !== 'schedule'
                                ? (
                                  <td>
                                    {
                                      (typeof item?.old !== 'undefined' && item?.old !== null)
                                        ? `${item?.old}`
                                        : item?.removed?.length > 0 ? item?.removed?.toString() : t('NONE', 'None')
                                    }
                                  </td>
                                )
                                : (
                                  <td>
                                    <SeeChanges onClick={() => scheduleModalData(item, 'old')}>{t('SEE_CHANGES', 'See changes')}</SeeChanges>
                                  </td>
                                )}
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
    <Modal
      width='40%'
      height='60vh'
      style={{ overflowY: 'auto' }}
      padding='30px'
      title={t('SCHEDULE_CHANGES', 'Schedule changes')}
      open={open}
      onClose={() => setOpen(false)}
    >
      <SchedulesWrapper border={!!schedules?.oldSchedule}>
        {schedules?.newSchedule && (
          <Schedules>
            <ScheduleTitle>{t('NEW', 'New')}</ScheduleTitle>
            {getSchedule(schedules?.newSchedule)}
          </Schedules>
        )}
        {schedules?.oldSchedule && (
          <Schedules>
            <ScheduleTitle>{t('OLD', 'Old')}</ScheduleTitle>
            {getSchedule(schedules?.oldSchedule)}
          </Schedules>
        )}
      </SchedulesWrapper>
    </Modal>
  </>
  )
}

export const SettingsLogs = (props) => {
  const settingsLogsProps = {
    ...props,
    UIComponent: SettingsLogsUI
  }
  return <SettingsLogsController {...settingsLogsProps} />
}
