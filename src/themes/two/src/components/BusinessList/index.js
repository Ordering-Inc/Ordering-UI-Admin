import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { PaginationButton } from '../PaginationButton'
import { useTheme } from 'styled-components'

import {
  BusinessListContainer,
  BusinessListTable,
  WrapperPagination
} from './styles'
import { SingleBusiness } from '../SingleBusiness'

export const BusinessList = (props) => {
  const {
    businessList,
    pagination,
    loadMoreBusinesses,
    handleSucessRemoveBusiness,
    handleSucessAddBusiness
  } = props
  const [, t] = useLanguage()

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
      <BusinessListContainer>
        <BusinessListTable>
          <thead>
            <tr>
              <th>{t('BUSINESS', 'Business')}</th>
              <th colSpan={3}>{t('DETAILS', 'Details')}</th>
              <th>{t('ACTIONS', 'Actions')}</th>
              <th></th>
            </tr>
          </thead>
          {businessList.loading ? (
            [...Array(10).keys()].map(i => (
              <SingleBusiness isSkeleton key={i} />
            ))
          ) : (
            currentBusinessess.map(business => (
              <SingleBusiness
                key={business.id}
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
  )
}
