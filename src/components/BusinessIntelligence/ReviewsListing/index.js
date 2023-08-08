import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon, CaretDownFill } from 'react-bootstrap-icons'
import { SearchBar } from '../../Shared'
import { IconButton } from '../../../styles'
import { BusinessReviewList } from '../BusinessReviewList'
import { UsersReviewList } from '../UsersReviewList'
import { BusinessSelectHeader } from '../../Stores/BusinessSelectHeader'
import { ReviewProductsListing } from '../ReviewProductsListing'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  ReviewsListingContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  Tabs,
  Tab,
  SelectWrapper,
  TitleWrapper
} from './styles'

export const ReviewsListing = (props) => {
  const {
    isUseQuery
  } = props

  const query = new URLSearchParams(useLocation().search)
  const defaultTab = query.get('tab')
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const firstRender = useRef(true)
  const [showOption, setShowOption] = useState(defaultTab || 'business')
  const [searchValue, setSearchValue] = useState(null)
  const [showSelect, setShowSelect] = useState(false)
  const [business, setBusiness] = useState('')
  const [businessId, setBusinessId] = useState(null)

  const changeBusinessState = (business) => {
    setShowSelect(false)
    setBusiness(business)
    setBusinessId(business.id)
    addQueryToUrl({ business: business.id })
  }

  const handleChangeOption = (option, isInitialRender) => {
    if (!isInitialRender) {
      firstRender.current = false
      removeQueryToUrl(['page', 'pageSize', 'business', 'category', 'product', 'id'])
      addQueryToUrl({ tab: option })
    }
    setShowOption(option)
    if (option === 'products' && !businessId) {
      setShowSelect(true)
    }
  }

  const handleOpenProducts = (business) => {
    setBusiness(business)
    setShowOption('products')
    setShowSelect(false)
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      const businessId = query.get('business')
      if (tab === 'products' && businessId) {
        setShowOption('products')
        setShowSelect(false)
        setBusinessId(Number(businessId))
      } else {
        handleChangeOption(tab, true)
      }
    } else {
      handleChangeOption(showOption)
    }
  }, [])

  return (
    <>
      <ReviewsListingContainer>
        <Header>
          <HeaderLeft>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            {showOption === 'products' ? (
              <SelectWrapper>
                <TitleWrapper onClick={() => setShowSelect(prev => !prev)}>
                  <h1>{business?.name || t('REVIEWS_MANAGER', 'Reviews manager')}</h1>
                  <CaretDownFill className={`${showSelect && 'rotate'}`} />
                </TitleWrapper>
                {showSelect && (
                  <BusinessSelectHeader
                    close={() => setShowSelect(false)}
                    isOpen={showSelect}
                    noActiveStatusCondition
                    changeBusinessState={changeBusinessState}
                  />
                )}
              </SelectWrapper>
            ) : (
              <h1>{t('REVIEWS_MANAGER', 'Reviews manager')}</h1>
            )}
          </HeaderLeft>
          <HeaderRight>
            <SearchBar
              lazyLoad
              placeholder={t('SEARCH', 'Search')}
              searchValue={searchValue}
              onSearch={val => setSearchValue(val)}
            />
          </HeaderRight>
        </Header>
        <Tabs>
          <Tab
            active={showOption === 'business'}
            onClick={() => handleChangeOption('business')}
          >
            {t('BUSINESS', 'Business')}
          </Tab>
          <Tab
            active={showOption === 'drivers'}
            onClick={() => handleChangeOption('drivers')}
          >
            {t('DRIVERS', 'Drivers')}
          </Tab>
          <Tab
            active={showOption === 'customers'}
            onClick={() => handleChangeOption('customers')}
          >
            {t('CUSTOMERS', 'Customers')}
          </Tab>
          <Tab
            active={showOption === 'professionals'}
            onClick={() => handleChangeOption('professionals')}
          >
            {t('PROFESSIONALS', 'Professionals')}
          </Tab>
          <Tab
            active={showOption === 'products'}
            onClick={() => handleChangeOption('products')}
          >
            {t('PRODUCTS', 'Products')}
          </Tab>
        </Tabs>
        {showOption === 'business' && (
          <BusinessReviewList
            parentSearchValue={searchValue}
            handleOpenProducts={handleOpenProducts}
            isUseQuery={isUseQuery}
            paginationSettings={{
              initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
          />
        )}
        {showOption === 'drivers' && (
          <UsersReviewList
            defaultUserTypesSelected={[4]}
            parentSearchValue={searchValue}
            isUseQuery={isUseQuery}
            paginationSettings={{
              initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
          />
        )}
        {showOption === 'customers' && (
          <UsersReviewList
            defaultUserTypesSelected={[3]}
            parentSearchValue={searchValue}
            isUseQuery={isUseQuery}
            paginationSettings={{
              initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
          />
        )}
        {showOption === 'professionals' && (
          <UsersReviewList
            defaultUserTypesSelected={[8]}
            parentSearchValue={searchValue}
            isUseQuery={isUseQuery}
            paginationSettings={{
              initialPage: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1,
              pageSize: isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
              controlType: 'pages'
            }}
          />
        )}
        {showOption === 'products' && businessId && (
          <ReviewProductsListing
            parentSearchValue={searchValue}
            businessId={businessId}
            isUseQuery={isUseQuery}
            defaultPage={isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPage) : 1}
            defaultPageSize={isUseQuery && firstRender.current && !isNaN(defaultPage) ? Number(defaultPageSize) : 10}
            firstRender={firstRender.current}
          />
        )}
      </ReviewsListingContainer>
    </>
  )
}
