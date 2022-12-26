import React, { useState, useEffect, useCallback } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { ColumnAllowSettingPopover, Pagination } from '../../Shared'
import { Button, Switch } from '../../../styles'
import { useTheme } from 'styled-components'
import { SingleBusiness } from '../SingleBusiness'
import { CheckSquareFill, Square } from 'react-bootstrap-icons'

import {
  BusinessListContainer,
  BusinessListTable,
  WrapperPagination,
  BusinessCardContainer,
  AddNewButtonLink,
  BusinessListBottomContainer,
  AddFirstStoreContainer,
  CheckBoxWrapper,
  BusinessIdWrapper,
  ActionWrapper,
  FeaturedWrapper
} from './styles'

export const BusinessesList = (props) => {
  const {
    viewMethod,
    businessList,
    pagination,
    loadMoreBusinesses,
    handleSucessRemoveBusiness,
    handleSucessAddBusiness,
    handleSucessUpdateBusiness,
    handleOpenBusinessDetails,
    handleOpenAddBusiness,
    detailsBusinessId,
    getPageBusinesses,
    isTutorialMode,
    businessIds,
    handleChangeBusinessIds,
    handleEnableAllBusiness,
    selectedBusinessActiveState,
    setBusinessIds,
    handleGotToAdd
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [isAllFeatured, setIsAllFeatured] = useState(false)

  const [allowColumns, setAllowColumns] = useState({
    business: true,
    featured: true,
    ratings: true
  })

  const optionsDefault = [
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    },
    {
      value: 'featured',
      content: t('FEATURE', 'Featured')
    },
    {
      value: 'ratings',
      content: t('RATINGS', 'Ratings')
    }
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  const handleChangePage = (page) => {
    getPageBusinesses(pagination.pageSize, page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(pagination.from / pageSize)
    getPageBusinesses(pageSize, expectedPage)
  }

  const handleSelecteAllBusiness = () => {
    const _businessIds = businessList.businesses?.reduce((ids, business) => [...ids, business.id], [])
    if (!isAllChecked) {
      setBusinessIds([...new Set([...businessIds, ..._businessIds])])
    } else {
      const updateBusinessIds = businessIds.filter((name) => {
        return !_businessIds.includes(name)
      })
      setBusinessIds(updateBusinessIds)
    }
  }

  const handleScroll = useCallback(() => {
    const innerHeightScrolltop = window.innerHeight + document.documentElement?.scrollTop + 10
    const badScrollPosition = innerHeightScrolltop < document.documentElement?.offsetHeight
    const hasMore = !(pagination.to === pagination.total)
    if (badScrollPosition || businessList.loading || !hasMore) return
    loadMoreBusinesses()
  }, [businessList, pagination])

  useEffect(() => {
    if (viewMethod !== 'card') return
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, viewMethod])

  useEffect(() => {
    const _isAllFeatured = businessList.businesses
      .filter(business => businessIds.includes(business.id))
      .every(business => business.featured)
    setIsAllFeatured(_isAllFeatured)
  }, [JSON.stringify(businessList.businesses), businessIds])

  useEffect(() => {
    if (businessList.loading) return
    const _businessIds = businessList.businesses?.reduce((ids, business) => [...ids, business.id], [])
    const _isAllChecked = _businessIds.every(elem => businessIds.includes(elem))
    setIsAllChecked(_isAllChecked)
  }, [JSON.stringify(businessList.businesses), businessIds])

  return (
    <>
      {viewMethod === 'list' && (
        <>
          <BusinessListContainer>
            <BusinessListTable>
              <thead>
                <tr>
                  <th>
                    <BusinessIdWrapper>
                      <CheckBoxWrapper
                        className='all-checkbox'
                        isChecked={!businessList?.loading && isAllChecked}
                        onClick={() => handleSelecteAllBusiness()}
                      >
                        {(!businessList?.loading && isAllChecked) ? (
                          <CheckSquareFill />
                        ) : (
                          <Square />
                        )}
                      </CheckBoxWrapper>
                      {t('ID', 'ID')}
                    </BusinessIdWrapper>
                  </th>
                  {allowColumns?.business && (
                    <th className='business'>{t('BUSINESS', 'Business')}</th>
                  )}
                  {allowColumns?.featured && (
                    <th>
                      <FeaturedWrapper>
                        {businessIds?.length > 0 && (
                          <Switch
                            defaultChecked={isAllFeatured}
                            onChange={(value) => handleEnableAllBusiness(value, true)}
                          />
                        )}
                        {t('FEATURED', 'Featured')}
                      </FeaturedWrapper>
                    </th>
                  )}
                  {allowColumns?.ratings && (
                    <th>{t('RATINGS', 'Ratings')}</th>
                  )}
                  <th className='action'>
                    <ActionWrapper>
                      <ColumnAllowSettingPopover
                        allowColumns={allowColumns}
                        optionsDefault={optionsDefault}
                        handleChangeAllowColumns={handleChangeAllowColumns}
                      />
                      {businessIds?.length > 0 && (
                        <Switch
                          defaultChecked={selectedBusinessActiveState}
                          onChange={(value) => handleEnableAllBusiness(value)}
                        />
                      )}
                    </ActionWrapper>
                  </th>
                </tr>
              </thead>
              {businessList.loading ? (
                [...Array(10).keys()].map(i => (
                  <SingleBusiness
                    key={i}
                    isSkeleton
                    viewMethod={viewMethod}
                    allowColumns={allowColumns}
                  />
                ))
              ) : (
                businessList.businesses.map(business => (
                  <SingleBusiness
                    key={business.id}
                    detailsBusinessId={detailsBusinessId}
                    viewMethod={viewMethod}
                    allowColumns={allowColumns}
                    businessId={business.id}
                    business={business}
                    handleSucessRemoveBusiness={handleSucessRemoveBusiness}
                    handleSucessAddBusiness={handleSucessAddBusiness}
                    handleSucessUpdateBusiness={handleSucessUpdateBusiness}
                    handleOpenBusinessDetails={handleOpenBusinessDetails}
                    businessIds={businessIds}
                    handleChangeBusinessIds={handleChangeBusinessIds}
                  />
                ))
              )}
            </BusinessListTable>
          </BusinessListContainer>

          <BusinessListBottomContainer>
            <AddNewButtonLink
              onClick={() => handleGotToAdd()}
            >
              {t('ADD_NEW_STORE', 'Add new store')}
            </AddNewButtonLink>
            {pagination && (
              <WrapperPagination>
                {pagination?.total > 0 && (
                  <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={Math.ceil(pagination?.total / pagination.pageSize)}
                    handleChangePage={handleChangePage}
                    handleChangePageSize={handleChangePageSize}
                    defaultPageSize={pagination?.pageSize}
                  />
                )}
              </WrapperPagination>
            )}
          </BusinessListBottomContainer>
        </>
      )}

      {viewMethod === 'card' && (
        <BusinessCardContainer>
          {businessList.loading ? (
            [...Array(30).keys()].map(i => (
              <SingleBusiness
                key={i}
                isSkeleton
                viewMethod={viewMethod}
                allowColumns={allowColumns}
              />
            ))
          ) : (
            businessList.businesses.map(business => (
              <SingleBusiness
                key={business.id}
                viewMethod={viewMethod}
                allowColumns={allowColumns}
                businessId={business.id}
                business={business}
                handleSucessRemoveBusiness={handleSucessRemoveBusiness}
                handleSucessAddBusiness={handleSucessAddBusiness}
                handleSucessUpdateBusiness={handleSucessUpdateBusiness}
                handleOpenBusinessDetails={handleOpenBusinessDetails}
              />
            ))
          )}
        </BusinessCardContainer>
      )}

      {isTutorialMode && !businessList.loading && businessList.businesses.length === 0 && (
        <AddFirstStoreContainer>
          <img src={theme.images.tutorials.businessTutorial1} alt='' />
          <Button
            borderRadius='8px'
            color='primary'
            onClick={() => handleOpenAddBusiness()}
          >
            {t('ADD_FIRST_STORE', 'Add your first store')}
          </Button>
        </AddFirstStoreContainer>
      )}
    </>
  )
}
