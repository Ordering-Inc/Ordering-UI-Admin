import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { Button, Checkbox } from '../../../styles'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  BusinessesContainer,
  BusinessWrapper,
  WrapperImage,
  Image,
  DriverInfoContainer
} from './styles'

export const DriversGroupDrivers = (props) => {
  const {
    drivers,
    actionState,
    selectedDriverIds,
    handleSelectDriver,
    handleSelectAllDriver
  } = props
  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredDrivers, setFilteredDrivers] = useState([])

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
        {filteredDrivers.map(driver => (
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
          </BusinessWrapper>
        ))}
      </BusinessesContainer>
    </Container>
  )
}
