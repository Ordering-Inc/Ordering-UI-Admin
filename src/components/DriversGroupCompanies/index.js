import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../SearchBar'
import { Button, Checkbox } from '../../styles'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  GroupsContainer,
  GroupWrapper
} from './styles'

export const DriversGroupCompanies = (props) => {
  const {
    companies,
    actionState,
    selectedDriversCompanyIds,
    handleSelectDriversCompany,
    handleSelectAllDriversCompany
  } = props
  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredCompanies, setFilteredCompanies] = useState([])

  useEffect(() => {
    let _filteredCompanies = []
    if (searchValue) {
      _filteredCompanies = companies.filter(company => company?.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      _filteredCompanies = [...companies]
    }
    setFilteredCompanies(_filteredCompanies)
  }, [searchValue])

  return (
    <>
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
            color='secundaryDark'
            onClick={() => handleSelectAllDriversCompany(true)}
          >
            {t('SELECT_ALL', 'Select all')}
          </Button>
          <Button
            color='secundaryDark'
            onClick={() => handleSelectAllDriversCompany(false)}
          >
            {t('SELECT_NONE', 'Select none')}
          </Button>
        </ButtonGroup>
        <GroupsContainer>
          {filteredCompanies.map(company => (
            <GroupWrapper
              key={company.id}
              isDisabed={actionState.loading}
            >
              <Checkbox
                checked={selectedDriversCompanyIds.includes(company.id)}
                onChange={e => handleSelectDriversCompany(company.id, e.target.checked)}
              />
              <p>{company?.name}</p>
            </GroupWrapper>
          ))}
        </GroupsContainer>
      </Container>
    </>
  )
}
