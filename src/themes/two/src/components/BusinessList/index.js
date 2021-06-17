import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { PaginationButton } from '../PaginationButton'

import {
  BusinessListContainer,
  BusinessListTable,
  WrapperPagination,
  BusinessCardContainer
} from './styles'
import { SingleBusiness } from '../SingleBusiness'
import { ColumnAllowSettingPopover } from '../ColumnAllowSettingPopover'

export const BusinessList = (props) => {
  const {
    viewMethod,
    businessList,
    pagination,
    loadMoreBusinesses,
    handleSucessRemoveBusiness,
    handleSucessAddBusiness
  } = props
  const [, t] = useLanguage()

  const [openPopover, setOpenPopover] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    business: true,
    deliveryFee: true,
    distance: true,
    deliveryTime: true
  })

  const optionsDefault = [
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    },
    {
      value: 'deliveryFee',
      content: t('DELIVERY_FEE', 'Delivery fee')
    },
    {
      value: 'distance',
      content: t('DISTANCE', 'Distance')
    },
    {
      value: 'deliveryTime',
      content: t('DELIVERY TIME', 'Delivery time')
    }   
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [businessesPerPage] = useState(10)

  // Get current orders
  const indexOfLastPost = currentPage * businessesPerPage
  const indexOfFirstPost = indexOfLastPost - businessesPerPage
  const [currentBusinessess, setCurrentBusinessess] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [totalBusinesses, setTotalBusinesses] = useState(null)

  // Change page
  const prevPaginate = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPaginate = () => {
    if (currentPage !== totalPages) {
      if (businessList.businesses.length < businessesPerPage * currentPage + 1) {
        loadMoreBusinesses()
      }
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    if (businessList.loading) return
    let _totalPages
    if (pagination?.total) {
      _totalPages = Math.ceil(pagination?.total / businessesPerPage)
    } else if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / businessesPerPage)
    }
    const _currentBusinessess = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost)
    setTotalBusinesses(pagination?.total)
    setTotalPages(_totalPages)
    setCurrentBusinessess(_currentBusinessess)
  }, [businessList, currentPage, pagination])

  return (
    <>
      {viewMethod === 'list' && (
        <>
          <BusinessListContainer>
            <BusinessListTable>
              <thead>
                <tr>
                  {allowColumns?.business && (
                    <th>{t('BUSINESS', 'Business')}</th>
                  )}
                  {(allowColumns?.deliveryFee || allowColumns?.distance || allowColumns?.deliveryTime) && (
                    <th colSpan={3}>{t('DETAILS', 'Details')}</th>
                  )}
                  <th>{t('ACTIONS', 'Actions')}</th>
                  <th>
                    <ColumnAllowSettingPopover
                      open={openPopover}
                      allowColumns={allowColumns}
                      optionsDefault={optionsDefault}
                      onClick={() => setOpenPopover(!openPopover)}
                      onClose={() => setOpenPopover(false)}
                      handleChangeAllowColumns={handleChangeAllowColumns}
                    />
                  </th>
                </tr>
              </thead>
              {businessList.loading ? (
                [...Array(10).keys()].map(i => (
                  <SingleBusiness
                    key={i}
                    isSkeleton
                    allowColumns={allowColumns}
                  />
                ))
              ) : (
                currentBusinessess.map(business => (
                  <SingleBusiness
                    key={business.id}
                    viewMethod={viewMethod}
                    allowColumns={allowColumns}
                    businessId={business.id}
                    business={business}
                    handleSucessRemoveBusiness={handleSucessRemoveBusiness}
                    handleSucessAddBusiness={handleSucessAddBusiness}
                  />
                ))
              )}
            </BusinessListTable>
          </BusinessListContainer>
          {pagination && (
            <WrapperPagination>
              {!businessList.loading && totalPages > 0 && (
                <PaginationButton
                  pageSize={businessesPerPage}
                  total={totalBusinesses}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  prevPaginate={prevPaginate}
                  nextPaginate={nextPaginate}
                />
              )}
            </WrapperPagination>
          )}
        </>
      )}

      {viewMethod === 'card' && (
        <BusinessCardContainer>
          {businessList.loading ? (
            [...Array(10).keys()].map(i => (
              <SingleBusiness
                key={i}
                isSkeleton
                allowColumns={allowColumns}
              />
            ))
          ) : (
            currentBusinessess.map(business => (
              <SingleBusiness
                key={business.id}
                viewMethod={viewMethod}
                allowColumns={allowColumns}
                businessId={business.id}
                business={business}
                handleSucessRemoveBusiness={handleSucessRemoveBusiness}
                handleSucessAddBusiness={handleSucessAddBusiness}
              />
            ))
          )}
        </BusinessCardContainer>
      )}
    </>
  )
}
