import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { getStarWidth } from '../../../utils'
import { useWindowSize } from '../../../hooks/useWindowSize'
import {
  DriversListContainer,
  DriverCard,
  WrapperImage,
  DriverInfo,
  PaginationWrapper
} from './styles'
import { Driver } from './Driver'
import { Pagination } from '../../Shared'

export const DriversList = (props) => {
  const {
    loading,
    driversIsOnline,
    onlineDrivers,
    offlineDrivers,
    selectedDriver,
    handleChangeDriver,
    handleOpenDriverOrders,
    hidePhoto,
    showCompressedInfo
  } = props

  const { width } = useWindowSize()
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
    totalItems: null,
    totalPages: null
  })
  const drivers = driversIsOnline ? onlineDrivers : offlineDrivers
  const handleClickDriver = (e, driver) => {
    const isInvalid = e.target.closest('.driver-orders')
    if (isInvalid) return
    handleChangeDriver(driver)
    const element = document.getElementById('driverDashboard')
    if (width < 993 && element) element.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const onOpenDriverOrdersDetail = (driver) => {
    if (selectedDriver?.id !== driver.id) {
      handleChangeDriver(driver)
    }
    handleOpenDriverOrders(driver)
  }

  const filterFunction = (_, index) => {
    const validation = pagination?.currentPage === 1
      ? index < (pagination.pageSize * pagination.currentPage)
      : (index >= (pagination.pageSize * (pagination.currentPage - 1))) && (index < (pagination.pageSize * pagination.currentPage))
    return validation
  }

  const handleChangePage = (page) => {
    setPagination((pagination) => ({
      ...pagination,
      currentPage: page
    }))
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((pagination?.currentPage - 1) * pagination?.pageSize + 1) / pageSize)
    setPagination((pagination) => ({
      ...pagination,
      currentPage: expectedPage,
      pageSize,
      totalPages: Math.ceil(drivers?.length / pageSize)
    }))
  }

  useEffect(() => {
    if (drivers?.length) {
      setPagination((pagination) => ({
        ...pagination,
        totalItems: drivers?.length,
        totalPages: Math.ceil(drivers?.length / 10)
      }))
    }
  }, [drivers?.length])

  return (
    <DriversListContainer showCompressedInfo={showCompressedInfo}>
      {loading ? (
        <>
          {[...Array(10).keys()].map(i => (
            <DriverCard
              key={i}
            >
              {!hidePhoto && (
                <WrapperImage>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
              )}
              <DriverInfo>
                <div>
                  <Skeleton width={100} />
                </div>
                <Skeleton width={100} />
              </DriverInfo>
            </DriverCard>
          ))}
        </>
      ) : (
        <>
          {drivers.filter(filterFunction).map(driver => (
            <Driver
              key={driver?.id}
              driver={driver}
              handleClickDriver={handleClickDriver}
              selectedDriver={selectedDriver}
              hidePhoto={hidePhoto}
              onOpenDriverOrdersDetail={onOpenDriverOrdersDetail}
              getStarWidth={getStarWidth}
              showCompressedInfo={showCompressedInfo}
            />
          ))}
        </>
      )}
      {drivers?.length > 0 && (
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
    </DriversListContainer>
  )
}
