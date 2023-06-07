import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'

import { Checkbox, Button } from '../../../../styles'
import { SearchBar } from '../../../Shared'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  BusinessesContainer,
  BusinessWrapper,
  WrapperImage,
  Image
} from './styles'

export const Businesses = (props) => {
  const {
    isAddMode,
    businessList,
    handleSelectBusiness,
    actionState,
    handleSelectAllBusiness,
    selectedBusinessIds,
    handleUpdateClick
  } = props

  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredBusinesses, setFilteredBusinesses] = useState([])

  useEffect(() => {
    if (businessList.loading) return
    let _filteredBusinesses = []
    if (searchValue) {
      _filteredBusinesses = businessList.businesses.filter(business => business?.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      _filteredBusinesses = [...businessList.businesses]
    }
    setFilteredBusinesses(_filteredBusinesses)
  }, [searchValue, businessList])

  const onSaveBusinesses = () => {
    handleUpdateClick && handleUpdateClick({
      businesses: selectedBusinessIds
    })
  }

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
          onClick={() => handleSelectAllBusiness(true)}
        >
          {t('SELECT_ALL', 'Select all')}
        </Button>
        <Button
          type='button'
          color='secundaryDark'
          onClick={() => handleSelectAllBusiness(false)}
        >
          {t('SELECT_NONE', 'Select none')}
        </Button>
      </ButtonGroup>
      <BusinessesContainer>
        {filteredBusinesses.map(business => (
          <BusinessWrapper
            key={business.id}
            isDisabed={actionState.loading}
          >
            <Checkbox
              checked={selectedBusinessIds.includes(business.id)}
              onChange={e => handleSelectBusiness(business.id, e.target.checked)}
            />
            <WrapperImage>
              <Image bgimage={business?.logo} alt='logo' />
            </WrapperImage>
            <p>{business?.name}</p>
          </BusinessWrapper>
        ))}
        {businessList.loading && (
          [...Array(10).keys()].map(index => (
            <BusinessWrapper key={index}>
              <Skeleton width={20} height={20} />
              <WrapperImage>
                <Skeleton width={40} height={40} />
              </WrapperImage>
              <p><Skeleton width={80} /></p>
            </BusinessWrapper>
          ))
        )}
      </BusinessesContainer>
      {!isAddMode && (
        <Button
          type='button'
          color='primary'
          disabled={actionState.loading}
          onClick={() => onSaveBusinesses()}
        >
          {t('SAVE', 'Save')}
        </Button>
      )}
    </Container>
  )
}
