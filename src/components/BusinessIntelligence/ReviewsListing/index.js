import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon, CaretDownFill } from 'react-bootstrap-icons'
import { SearchBar } from '../../Shared'
import { IconButton } from '../../../styles'
import { BusinessReviewList } from '../BusinessReviewList'
import { UsersReviewList } from '../UsersReviewList'
import { BusinessSelectHeader } from '../../Stores/BusinessSelectHeader'
import { ReviewProductsListing } from '../ReviewProductsListing'

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
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [showOption, setShowOption] = useState('business')
  const [searchValue, setSearchValue] = useState(null)
  const [showSelect, setShowSelect] = useState(false)
  const [business, setBusiness] = useState('')

  const changeBusinessState = (business) => {
    setShowSelect(false)
    setBusiness(business)
  }

  const handleChangeOption = (option) => {
    setShowOption(option)
    if (option === 'products' && !business) setShowSelect(true)
  }

  const handleOpenProducts = (business) => {
    setBusiness(business)
    setShowOption('products')
    setShowSelect(false)
  }

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
          <BusinessReviewList parentSearchValue={searchValue} handleOpenProducts={handleOpenProducts} />
        )}
        {showOption === 'drivers' && (
          <UsersReviewList
            defaultUserTypesSelected={[4]}
            parentSearchValue={searchValue}
          />
        )}
        {showOption === 'customers' && (
          <UsersReviewList
            defaultUserTypesSelected={[3]}
            parentSearchValue={searchValue}
          />
        )}
        {showOption === 'professionals' && (
          <UsersReviewList
            defaultUserTypesSelected={[8]}
            parentSearchValue={searchValue}
          />
        )}
        {showOption === 'products' && business?.id && (
          <ReviewProductsListing
            parentSearchValue={searchValue}
            businessId={business?.id}
          />
        )}
      </ReviewsListingContainer>
    </>
  )
}
