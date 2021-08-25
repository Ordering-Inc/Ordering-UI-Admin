import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Checkbox, Button } from '../../styles'
import { SearchBar } from '../SearchBar'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  BusinessesContainer,
  BusinessWrapper,
  WrapperImage,
  Image
} from './styles'

export const DriversGroupBusinesses = (props) => {
  const {
    driversGroup,
    businesses,
    handleSelectBusiness,
    actionState,
    changesState,
    handleUpdateDriversGroup,
    handleSelectAllBusiness,
    selectedBusinessIds
  } = props

  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredBusinesses, setFilteredBusinesses] = useState([])

  useEffect(() => {
    let _filteredBusinesses = []
    if (searchValue) {
      _filteredBusinesses = businesses.filter(business => business?.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      _filteredBusinesses = [...businesses]
    }
    setFilteredBusinesses(_filteredBusinesses)
  }, [searchValue])

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          placeholder={t('SEARCH', 'Search')}
          isCustomLayout
          search={searchValue}
          onSearch={val => setSearchValue(val)}
        />
      </SearchBarWrapper>
      <ButtonGroup>
        <Button
          color='secundaryDark'
          onClick={() => handleSelectAllBusiness(true)}
        >
          {t('SELECT_ALL', 'Select all')}
        </Button>
        <Button
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
      </BusinessesContainer>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={Object.keys(changesState).length === 0}
        onClick={() => handleUpdateDriversGroup(driversGroup.id, changesState)}
      >
        {t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
