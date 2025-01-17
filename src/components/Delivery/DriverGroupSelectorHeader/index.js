import React, { useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, DriversGroupsList as DriverGroupsListController } from 'ordering-components-admin'
import { Pagination, SearchBar } from '../../Shared'
import {
  PopMenuContatiner,
  DriverGroupSearch,
  OptionItem,
  DriverGroupList,
  WrapperPagination,
  SelectHeaderContent
} from './styles'

const DriverGroupsListingUI = (props) => {
  const {
    driversGroupsState,
    pagination,
    searchValue,
    onSearch,
    getHeaderDriversGroups,
    isOpen,
    close,
    changeDriverGroupState
  } = props
  const [, t] = useLanguage()
  const dropdownReference = useRef()

  const handleChangePage = (page) => {
    getHeaderDriversGroups(page, pagination.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getHeaderDriversGroups(expectedPage, pageSize)
  }

  const closeSelect = (e) => {
    if (isOpen) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        close()
      }
    }
  }

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('mouseup', closeSelect)
    return () => document.removeEventListener('mouseup', closeSelect)
  }, [isOpen])

  return (
    <PopMenuContatiner ref={dropdownReference}>
      <SelectHeaderContent>
        <DriverGroupSearch>
          <SearchBar
            isCustomLayout
            lazyLoad
            onSearch={onSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </DriverGroupSearch>
        <DriverGroupList>
          {driversGroupsState.loading ? (
            [...Array(pagination?.pageSize).keys()].map(i => (
              <OptionItem key={i}>
                <Skeleton width={38} height={38} style={{ borderRadius: '7.6px' }} />
                <div style={{ marginLeft: '8px', marginRight: '8px' }}>
                  <Skeleton height={15} width={140} />
                  <Skeleton height={12} width={80} style={{ marginTop: '7px' }} />
                </div>
              </OptionItem>
            ))
          ) : (
            <>
              {driversGroupsState.groups.map(driverGroup => (
                <OptionItem
                  key={driverGroup.id}
                  onClick={() => changeDriverGroupState(driverGroup)}
                >
                  <div>
                    <b>{driverGroup?.name}</b>
                    <p>{t('DRIVERS', 'Drivers:')} {driverGroup?.drivers?.length}</p>
                  </div>
                </OptionItem>
              ))}
            </>
          )}
        </DriverGroupList>
        {pagination && pagination?.totalPages > 0 && (
          <WrapperPagination className='pagination-container'>
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination?.totalPages}
              handleChangePage={handleChangePage}
              defaultPageSize={pagination.pageSize}
              handleChangePageSize={handleChangePageSize}
              isHidePagecontrol
            />
          </WrapperPagination>
        )}
      </SelectHeaderContent>
    </PopMenuContatiner>
  )
}

export const DriverGroupSelectHeader = (props) => {
  const driverGroupsListingProps = {
    ...props,
    UIComponent: DriverGroupsListingUI,
    asDashboard: true,
    isHeaderComponent: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 5,
      controlType: 'pages'
    },
    propsToFetch: ['id', 'enabled', 'drivers', 'name']
  }
  return (
    <DriverGroupsListController {...driverGroupsListingProps} />
  )
}
