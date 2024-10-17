import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar, Modal, Pagination } from '../../Shared'
import { Button, Checkbox } from '../../../styles'
import { DriverTemporalSchedule } from '../DriverTemporalSchedule'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  BusinessesContainer,
  BusinessWrapper,
  WrapperImage,
  Image,
  DriverInfoContainer,
  DriverTemporaryContainer
} from './styles'
import moment from 'moment'
import { PaginationWrapper } from '../../../styles/MultiSelect/styles'

export const DriversGroupDrivers = (props) => {
  const {
    drivers,
    actionState,
    selectedDriverIds,
    selectedDriverTemporaryIds,
    handleSelectDriver,
    handleSelectAllDriver,
    handleSelectDriverTemporary
  } = props
  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredDrivers, setFilteredDrivers] = useState([])
  const [driverTemporalSchedule, setDriverTemporalScheduleModal] = useState(false)
  const [driverSchedule, setDriverSchedule] = useState(null)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
    totalItems: null,
    totalPages: null
  })

  const handleOpenModal = (driver) => {
    setDriverSchedule(driver)
    setDriverTemporalScheduleModal(true)
  }

  const handleChangePage = (page) => {
    setPagination({
      ...pagination,
      currentPage: page
    })
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((pagination?.currentPage - 1) * pagination?.pageSize + 1) / pageSize)
    setPagination({
      ...pagination,
      currentPage: expectedPage,
      pageSize,
      totalPages: Math.ceil(filteredDrivers?.length / pageSize)
    })
  }

  const filterFunction = (_, index) => {
    const validation = pagination?.currentPage === 1
      ? index < (pagination.pageSize * pagination.currentPage)
      : (index >= (pagination.pageSize * (pagination.currentPage - 1))) && (index < (pagination.pageSize * pagination.currentPage))
    return validation
  }

  useEffect(() => {
    let _filteredDrivers = []
    if (searchValue) {
      _filteredDrivers = drivers
        .filter(
          driver => (
            driver?.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
            driver?.email?.toLowerCase().includes(searchValue?.toLowerCase())
          )
        )
    } else {
      _filteredDrivers = [...drivers]
    }
    setFilteredDrivers(_filteredDrivers)
    setPagination({
      ...pagination,
      currentPage: 1,
      totalItems: _filteredDrivers?.length,
      totalPages: Math.ceil(_filteredDrivers?.length / pagination.pageSize)
    })
  }, [searchValue])

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          placeholder={t('SEARCH', 'Search')}
          isCustomLayout
          lazyLoad
          search={searchValue}
          onSearch={val => setSearchValue(val)}
        />
      </SearchBarWrapper>
      <ButtonGroup>
        <Button
          type='button'
          color='secundaryDark'
          onClick={() => handleSelectAllDriver(true)}
        >
          {t('SELECT_ALL', 'Select all')}
        </Button>
        <Button
          type='button'
          color='secundaryDark'
          onClick={() => handleSelectAllDriver(false)}
        >
          {t('SELECT_NONE', 'Select none')}
        </Button>
      </ButtonGroup>
      <BusinessesContainer>
        {filteredDrivers.filter(filterFunction).map(driver => (
          <BusinessWrapper
            key={driver.id}
            isDisabed={actionState.loading}
          >
            <Checkbox
              checked={selectedDriverIds.includes(driver.id)}
              onChange={e => handleSelectDriver(driver.id, e.target.checked)}
            />
            <WrapperImage>
              {driver?.photo ? (
                <Image bgimage={driver?.photo} alt='driver' />
              ) : (
                <FaUserAlt />
              )}
            </WrapperImage>
            <DriverInfoContainer>
              <p>{driver?.name} {driver?.lastname}</p>
              <p>{driver?.email}</p>
            </DriverInfoContainer>
            {selectedDriverIds?.includes(driver?.id) && (
              <>
                <Checkbox
                  checked={selectedDriverTemporaryIds?.some((_driver) => _driver?.id === driver.id && _driver?.temporarily_activated)}
                  onChange={e => handleSelectDriverTemporary(driver?.id, e.target.checked, moment().endOf('day').utc().format('YYYY-MM-DD HH:mm:ss'))}
                />
                <DriverTemporaryContainer>
                  <p onClick={() => handleOpenModal(selectedDriverTemporaryIds.find((_driver) => (_driver?.id === driver?.id)) ?? { id: driver?.id, temporarily_activated: true, temporary_at: null })}>{t('DRIVER_TEMPORAL', 'Temporal driver')}</p>
                </DriverTemporaryContainer>
              </>
            )}
          </BusinessWrapper>
        ))}
      </BusinessesContainer>
      {pagination && handleChangePageSize && handleChangePage && (
        <PaginationWrapper>
          <Pagination
            currentPage={pagination?.currentPage}
            totalPages={pagination?.totalPages}
            handleChangePage={handleChangePage}
            handleChangePageSize={handleChangePageSize}
            defaultPageSize={pagination?.pageSize}
          />
        </PaginationWrapper>
      )}
      <Modal
        width='385px'
        height='auto'
        padding='30px'
        title={t('TEMPORAL_SCHEDULE', 'Temporal Schedule')}
        open={driverTemporalSchedule}
        onClose={() => setDriverTemporalScheduleModal(false)}
      >
        <DriverTemporalSchedule
          driverSchedule={driverSchedule}
          handleSelectDriverTemporary={handleSelectDriverTemporary}
          onClose={() => setDriverTemporalScheduleModal(false)}
        />
      </Modal>
    </Container>
  )
}
