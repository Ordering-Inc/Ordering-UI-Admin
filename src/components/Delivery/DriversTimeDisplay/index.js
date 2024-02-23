import React, { useEffect, useState } from 'react'
import { useLanguage, useConfig, CalendarDriversList as CalendarDriversListController } from 'ordering-components-admin'
import { List as MenuIcon, ChevronRight } from 'react-bootstrap-icons'
import { Button, IconButton, LinkButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Alert, Modal, SpinnerLoader } from '../../Shared'
import { DeliveryUsersListing } from './UserList'
import { DriverGroupSelectHeader } from '../DriverGroupSelectorHeader'
import { AnalyticsCalendar } from '../../BusinessIntelligence/AnalyticsCalendar'
import { DriverBlockAddFormUI } from './DriverBlockAddForm'
import { RRule } from 'rrule'
import moment from 'moment'

import {
  Container,
  SpinnerLoaderWrapper,
  Header,
  HeaderTitleContainer,
  DriverGroupName,
  DriverGroupSelectorWrapper,
  HeaderWrapper,
  DriversGroupCalendarWrapper,
  TimeOptions,
  DeleteBlock,
  DeleteButtons,
  DeleteWrapper,
  OrderStatusTypeSelectWrapper,
  StackedBlock,
  WarningMessage,
  FiltContainer
} from './styles'
import { Select } from '../../../styles/Select'
import { DriverMultiSelector } from '../../Orders/DriverMultiSelector'
import TiWarningOutline from '@meronex/icons/ti/TiWarningOutline'
import MdClose from '@meronex/icons/md/MdClose'

const DriversTimeDisplayUI = (props) => {
  const {
    driversList,
    paginationProps,
    getDrivers,
    setSelectedGroup,
    setIsTimeChangeError,
    isTimeChangeError,
    handleChangeScheduleTime,
    scheduleState,
    selectedGroup,
    setScheduleState,
    setDate,
    setSelectedUntilDate,
    selectedDate,
    selectedUntilDate,
    setSelectedDate,
    setSelectedBlock,
    selectedBlock,
    timeErrorList,
    openModal,
    setOpenModal,
    handleAddBlockTime,
    deleteBlockTime,
    setOpenDeleteModal,
    openDeleteModal,
    setPropagation,
    propagation,
    setShowBreakBlock,
    showBreakBlock,
    date,
    editBlockTime,
    setOpenEditModal,
    openEditModal,
    setStackEventsState,
    stackEventsState,
    setAlertState,
    alertState,
    handleSelectedUntilDate,
    ruleState,
    setRuleState,
    handleSetInitialStates,
    filterValues,
    handleChangeDriver,
    handleClearFilters,
    setFiltOption,
    filtOption,
    handleClearDriversList
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [showSelectHeader, setShowSelectHeader] = useState(false)
  const [scheduleOptions, setScheduleOptions] = useState([])
  const [scheduleOptionValues, setScheduleOptionValues] = useState([])

  const rule = ruleState?.freq ? new RRule(ruleState).toString() : null
  const is12Hours = configs?.general_hour_format?.value?.includes('hh:mm')
  const hourFormat = configs?.general_hour_format?.value

  const rruleList = [
    { value: null, name: t('NONE', 'None') },
    { value: RRule.WEEKLY, name: t('WEEKLY', 'Weekly') },
    { value: RRule.DAILY, name: t('DAILY', 'Daily') }
  ]

  const rruleDayList = [
    { value: RRule.SU, name: t('SUN', 'Sun') },
    { value: RRule.MO, name: t('MON', 'Mon') },
    { value: RRule.TU, name: t('TUE', 'Tue') },
    { value: RRule.WE, name: t('WED', 'Wed') },
    { value: RRule.TH, name: t('THU', 'Thu') },
    { value: RRule.FR, name: t('FRI', 'Fri') },
    { value: RRule.SA, name: t('SAT', 'Sat') }
  ]

  const propagationList = [
    {
      value: 'none',
      content: t('NONE', 'None')
    },
    {
      value: 'all',
      content: t('ALL', 'All')
    },
    {
      value: 'from_now',
      content: t('FROM_NOW', 'From now')
    },
    {
      value: 'from_event',
      content: t('FROM_EVENT', 'From event')
    }
  ]

  const handleCleanFilters = () => {
    setShowSelectHeader(false)
    handleClearFilters()
  }

  const changeDriverGroupState = (_driverGroup) => {
    if (_driverGroup?.id === selectedGroup?.id) return
    handleCleanFilters()
    setSelectedGroup(_driverGroup)
  }

  const handleCloseFiltOption = () => {
    setSelectedGroup(null)
    setFiltOption(null)
    handleClearDriversList()
    handleCleanFilters()
  }

  const handleChangeDate = (date1, date2) => {
    const diff = moment(date2).diff(date1, 'days')
    if (diff > 31) {
      setIsTimeChangeError({
        state: true,
        error: 4
      })
    } else {
      setDate([moment(date1).startOf('day').utc().format('YYYY-MM-DD HH:mm:ss'), moment(date2).endOf('day').utc().format('YYYY-MM-DD HH:mm:ss')])
    }
  }

  const handleUntilDate = (_date) => {
    const diff = moment(_date).diff(selectedDate, 'months', true)
    if (moment(_date) < moment(selectedDate) || diff > 2) {
      setIsTimeChangeError({
        state: true,
        error: 5
      })
    } else {
      handleSelectedUntilDate(_date)
      setSelectedUntilDate(_date)
    }
  }

  const closeAlert = () => {
    setIsTimeChangeError({
      state: false,
      error: null
    })
    setAlertState({
      open: false,
      content: []
    })
  }

  const generateHourList = () => {
    const _scheduleOptions = []
    const isTodayOrPastDate = moment(selectedDate).format('YYYY-MM-DD') <= moment().format('YYYY-MM-DD')
    const now = new Date()
    for (let hour = 0; hour < 24; hour++) {
      /**
         * Continue if is today and hour is smaller than current hour
        */
      if (isTodayOrPastDate && hour < now?.getHours()) continue
      let hh = ''
      let meridian = ''
      if (!is12Hours) hh = hour < 10 ? `0${hour}` : hour
      else {
        if (hour === 0) {
          hh = '12'
          meridian = ' ' + t('AM', 'AM')
        } else if (hour > 0 && hour < 12) {
          hh = (hour < 10 ? '0' + hour : hour)
          meridian = ' ' + t('AM', 'AM')
        } else if (hour === 12) {
          hh = '12'
          meridian = ' ' + t('PM', 'PM')
        } else {
          hh = ((hour - 12 < 10) ? '0' + (hour - 12) : (hour - 12))
          meridian = ' ' + t('PM', 'PM')
        }
      }
      for (let min = 0; min < 4; min++) {
        /**
           * Continue if is today and hour is equal to current hour and minutes is smaller than current minute
          */
        if (isTodayOrPastDate && hour === now?.getHours() && (min * 15) <= now.getMinutes()) continue
        _scheduleOptions.push({
          value: (hour < 10 ? `0${hour}` : hour) + ':' + (min === 0 ? '00' : min * 15),
          content: (
            <TimeOptions>
              {is12Hours ? (
                <>
                  {hh}:{min === 0 ? '00' : min * 15} {meridian}
                </>
              ) : (
                <>
                  {hh} : {min === 0 ? '00' : min * 15}
                </>
              )}
            </TimeOptions>
          )
        })
      }
    }

    _scheduleOptions.push({
      value: '23:59',
      content: (
        <TimeOptions>{is12Hours ? '11:59 PM' : '23 : 59'}</TimeOptions>
      )
    })
    const breakEnd = selectedBlock?.block?.break_end || selectedBlock?.block?.end
    const breakStart = selectedBlock?.block?.break_start || selectedBlock?.block?.start
    if (selectedBlock?.block?.end && !_scheduleOptions.some(option => option?.name === 'end')) {
      _scheduleOptions.unshift({
        value: moment(selectedBlock?.block?.end).format('HH:mm'),
        name: 'end',
        content: (
          <TimeOptions>{is12Hours ? `${moment(selectedBlock?.block?.end).format('hh:mm A')}` : `${moment(selectedBlock?.block?.end).format('HH : mm')}`}</TimeOptions>
        )
      })
    }
    if (showBreakBlock && selectedBlock?.block?.end && !_scheduleOptions.some(option => option?.name === 'break_end')) {
      _scheduleOptions.unshift({
        value: moment(breakEnd).format('HH:mm'),
        name: 'break_end',
        content: (
          <TimeOptions>{is12Hours ? `${moment(breakEnd).format('hh:mm A')}` : `${moment(breakEnd).format('HH : mm')}`}</TimeOptions>
        )
      })
    }

    if (showBreakBlock && selectedBlock?.block?.start) {
      _scheduleOptions.unshift({
        value: moment(breakStart).format('HH:mm'),
        name: 'break_start',
        content: (
          <TimeOptions>{is12Hours ? `${moment(breakStart).format('hh:mm A')}` : `${moment(breakStart).format('HH : mm')}`}</TimeOptions>
        )
      })
    }
    if (selectedBlock?.block?.start && !_scheduleOptions.some(option => option?.name === 'start')) {
      _scheduleOptions.unshift({
        value: moment(selectedBlock?.block?.start).format('HH:mm'),
        name: 'start',
        content: (
          <TimeOptions>{is12Hours ? `${moment(selectedBlock?.block?.start).format('hh:mm A')}` : `${moment(selectedBlock?.block?.start).format('HH : mm')}`}</TimeOptions>
        )
      })
    }
    setScheduleOptionValues(_scheduleOptions.map(option => option?.value))
    setScheduleOptions(_scheduleOptions)
  }

  const handleChangeFiltOption = (option) => {
    setFiltOption(option)
    option === 'driver_groups' && setShowSelectHeader(true)
  }

  useEffect(() => {
    const isTodayOrPastDate = moment(selectedDate).format('YYYY-MM-DD') <= moment().format('YYYY-MM-DD')
    const date = moment(selectedDate).format('YYYY-MM-DD')
    if (scheduleOptions?.length > 0 && isTodayOrPastDate) {
      const state = {
        ...scheduleState.state,
        start: `${date} ${scheduleOptions?.find(option => option?.name === 'start')?.value ?? scheduleOptions[0]?.value}:00`
      }
      if (showBreakBlock) {
        state.break_start = `${date} ${scheduleOptions?.find(option => option?.name === 'break_start')?.value ?? scheduleOptions[0]?.value}:00`
      }
      if (!scheduleState?.block?.end && !selectedBlock) {
        state.end = `${date} 23:59:00`
      }
      if (!scheduleState?.block?.rrule && !selectedBlock) {
        delete state.until
      }

      setScheduleState({
        ...scheduleState,
        state: state,
        loading: false,
        error: null
      })
    }
  }, [JSON.stringify(scheduleOptions), selectedDate, showBreakBlock, selectedBlock, date])

  useEffect(() => {
    if (!isTimeChangeError?.state) return
    setAlertState({
      open: true,
      content: timeErrorList[isTimeChangeError.error]
    })
  }, [isTimeChangeError?.state])

  useEffect(() => {
    const interval = setInterval(() => {
      generateHourList()
    }, 1000)
    return () => clearInterval(interval)
  }, [selectedDate, selectedBlock, showBreakBlock])

  useEffect(() => {
    setScheduleState({
      ...scheduleState,
      state: {
        ...scheduleState.state,
        rrule: rule,
        until: scheduleState?.state?.until || `${moment(selectedDate).format('YYYY-MM-DD')} 23:59:00`
      }
    })
  }, [rule])

  useEffect(() => {
    if (!selectedBlock?.block) return

    if (selectedBlock?.block?.rrule) {
      const _date = RRule.fromString(`DTSTART:${moment(selectedBlock?.block?.start).toISOString().replaceAll('-', '').replaceAll(':', '').replaceAll('.', '')}` + '\n' + selectedBlock?.block?.rrule?.includes('RRULE:') ? selectedBlock?.block?.rrule : `RRULE:${selectedBlock?.block?.rrule}`)
      setRuleState({
        freq: _date.options.freq,
        byweekday: _date.options.byweekday
      })
    }
  }, [selectedBlock?.block])

  const handleSelectDriver = (_driver, _block, date) => {
    setSelectedBlock({
      user: _driver,
      block: _block
    })

    const isTodayOrPastDate = moment(date).format('YYYY-MM-DD') <= moment().format('YYYY-MM-DD')
    if (_block || (date && !isTodayOrPastDate)) {
      setSelectedDate(new Date(_block?.start || `${date} 00:00:00`))
      setScheduleState({
        ...scheduleState,
        state: {
          start: _block?.start || `${date} 00:00:00`,
          end: _block?.end || `${date} 23:59:00`
        }
      })
    }
    !_block && generateHourList()
    setOpenModal(true)
  }

  const onCloseModal = () => {
    setOpenModal(false)
    setScheduleOptionValues([])
    handleSetInitialStates()
  }

  const handleCloseSecondModal = () => {
    setOpenDeleteModal(false)
    setOpenEditModal(false)
  }

  return (
    <>
      <Container>
        {driversList.loading && (
          <SpinnerLoaderWrapper>
            <SpinnerLoader />
          </SpinnerLoaderWrapper>
        )}
        <Header>
          <HeaderTitleContainer>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <HeaderWrapper>
              <div>
                <h1>{t('DRIVERS_TIME_DISPLAY', 'Drivers time display')}</h1>
                <DriverGroupSelectorWrapper>
                  <span className='calendar'>{t('CALENDAR', 'Calendar')}</span>
                  <ChevronRight />
                  {!filtOption ? (
                    <>
                      <DriverGroupName className='calendar' onClick={() => handleChangeFiltOption('driver_groups')}>{t('SELECT_DRIVER_GROUPS', 'Select driver groups')}</DriverGroupName>
                      <span> {t('OR', 'Or')} </span>
                      <DriverGroupName className='calendar' onClick={() => handleChangeFiltOption('drivers')}>{t('SELECT_DRIVERS', 'Select drivers')}</DriverGroupName>
                    </>
                  ) : (
                    <FiltContainer>
                      <DriverGroupName
                        className='calendar'
                        onClick={() => filtOption === 'driver_groups' ? setShowSelectHeader(!showSelectHeader) : {}}
                      >
                        {filtOption === 'driver_groups' ? t('DRIVER_GROUPS', 'driver groups') : t('DRIVERS', 'drivers')}
                      </DriverGroupName>
                      <Button
                        circle
                        outline
                        color='primary'
                        type='reset'
                        className='remove_option'
                        onClick={() => handleCloseFiltOption()}
                      >
                        <MdClose />
                      </Button>
                    </FiltContainer>
                  )}
                  <ChevronRight />
                  {(selectedGroup || (filtOption === 'drivers')) && (
                    <>
                      {selectedGroup && (
                        <>
                          <span>{selectedGroup?.name}</span>
                          <ChevronRight />
                          <span>{t('DRIVERS', 'DRIVERS')}</span>
                          <ChevronRight />
                        </>
                      )}
                      <DriverMultiSelector
                        isSearchByName
                        useDriversByProps={selectedGroup}
                        drivers={selectedGroup?.drivers}
                        disableSocketRoomDriver
                        useTextStyle
                        hideChevronIcon
                        autoOpen={filtOption === 'drivers'}
                        filterValues={filterValues}
                        handleChangeDriver={handleChangeDriver}
                        andText={t('AND', 'And')}
                        textClassnames='calendar'
                        optionsPosition='left'
                      />
                    </>
                  )}
                  {showSelectHeader && (
                    <DriverGroupSelectHeader
                      close={() => setShowSelectHeader(false)}
                      isOpen={showSelectHeader}
                      changeDriverGroupState={changeDriverGroupState}
                    />
                  )}
                  {(filterValues?.driverIds?.length > 0) && (
                    <WarningMessage>
                      <TiWarningOutline />
                      <span>{t('FILTER_APPLIED', 'Filters applied')}</span>
                      <LinkButton onClick={() => handleClearFilters()}>{t('CLEAR_FILTERS', 'Clear filters')}</LinkButton>
                    </WarningMessage>
                  )}
                </DriverGroupSelectorWrapper>
              </div>

              <DriversGroupCalendarWrapper>
                <AnalyticsCalendar {...props} handleChangeDate={handleChangeDate} />
              </DriversGroupCalendarWrapper>
            </HeaderWrapper>
          </HeaderTitleContainer>
        </Header>
        <DeliveryUsersListing
          date={date}
          getDrivers={getDrivers}
          driversList={driversList}
          paginationProps={paginationProps}
          selectedGroup={selectedGroup}
          handleSelectDriver={handleSelectDriver}
          setStackEventsState={setStackEventsState}
        />
      </Container>
      <Modal
        width='700px'
        padding='30px'
        title={selectedBlock?.block ? t('EDIT_BLOCK', 'Edit block') : t('ADD_NEW_BLOCK', 'Add new block')}
        open={openModal}
        onClose={onCloseModal}
      >
        <DriverBlockAddFormUI
          rruleList={rruleList}
          ruleState={ruleState}
          setRuleState={setRuleState}
          rruleDayList={rruleDayList}
          selectedDate={selectedDate}
          scheduleState={scheduleState}
          showBreakBlock={showBreakBlock}
          isEdit={!!selectedBlock?.block}
          handleUntilDate={handleUntilDate}
          scheduleOptions={scheduleOptions}
          deleteBlockTime={deleteBlockTime}
          setScheduleState={setScheduleState}
          setOpenEditModal={setOpenEditModal}
          selectedBlock={selectedBlock?.block}
          setShowBreakBlock={setShowBreakBlock}
          selectedUntilDate={selectedUntilDate}
          handleChangeStartDate={setSelectedDate}
          setOpenDeleteModal={setOpenDeleteModal}
          handleAddBlockTime={handleAddBlockTime}
          handleChangeScheduleTime={handleChangeScheduleTime}
          onCloseModal={onCloseModal}
          scheduleOptionValues={scheduleOptionValues}
        />
      </Modal>
      <Modal
        width='500px'
        height='40vh'
        padding='30px'
        title={openEditModal ? t('EDIT_BLOCK', 'Edit block') : t('DELETE_BLOCK', 'Delete block')}
        open={openDeleteModal || openEditModal}
        onClose={handleCloseSecondModal}
      >
        <DeleteWrapper>
          {openDeleteModal && <DeleteBlock>{t('DELETE_BLOCK_CONFIRMATION', 'Are you sure that you want to delete this block?')}</DeleteBlock>}
          {openEditModal && <DeleteBlock>{t('EDIT_BLOCK_CONFIRMATION', 'Are you sure that you want to edit this block?')}</DeleteBlock>}

          <OrderStatusTypeSelectWrapper>
            <p>{t('SELECT_PROPAGATION', 'Select a propagation option')}</p>
            <Select
              defaultValue={propagation}
              options={propagationList}
              onChange={(option) => setPropagation(option)}
              placeholder={t('CHANGE_PROPAGATION', 'Change Propagation')}
              notAsync
            />
          </OrderStatusTypeSelectWrapper>
        </DeleteWrapper>

        <DeleteButtons>
          <Button
            color='lightPrimary'
            borderRadius='8px'
            onClick={() => handleCloseSecondModal()}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button
            color='primary'
            borderRadius='8px'
            disabled={scheduleState.loading}
            onClick={() => openDeleteModal ? deleteBlockTime() : editBlockTime()}
          >
            {scheduleState.loading ? t('LOADING', 'Loading') : openDeleteModal ? t('DELETE', 'Delete') : t('ACCEPT', 'Accept')}
          </Button>
        </DeleteButtons>
      </Modal>
      <Modal
        width='500px'
        height='40vh'
        padding='30px'
        title={t('STACKED_BLOCKS', 'Stacked blocks')}
        open={stackEventsState?.open}
        onClose={onCloseModal}
      >
        <DeleteWrapper>
          {stackEventsState?.events?.map((event, i) => (
            <StackedBlock key={i} onClick={() => handleSelectDriver(stackEventsState?.user, event)}>
              <p>{moment(event.start).format(hourFormat)} - {moment(event.end).format(hourFormat)}</p>
            </StackedBlock>
          ))}
        </DeleteWrapper>
      </Modal>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const DriversTimeDisplay = (props) => {
  const driversTimeDisplayProps = {
    ...props,
    UIComponent: DriversTimeDisplayUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'pages'
    },
    propsToFetch: ['id', 'enabled', 'name', 'email', 'level', 'lastname', 'delivery_blocks', 'photo']
  }
  return (
    <CalendarDriversListController {...driversTimeDisplayProps} />
  )
}
