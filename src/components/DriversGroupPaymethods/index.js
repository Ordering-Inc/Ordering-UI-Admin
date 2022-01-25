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

export const DriversGroupPaymethods = (props) => {
  const {
    driversGroupState,
    paymethods,
    actionState,
    changesState,
    selectedPaymethodIds,
    handleUpdateDriversGroup,
    handleAddDriversGroup,
    handleSelectPaymethod,
    handleSelectAllPaymethod
  } = props
  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredPaymethods, setFilteredPaymethods] = useState([])

  useEffect(() => {
    let _filteredPaymethods = []
    if (searchValue) {
      _filteredPaymethods = paymethods.filter(paymethod => paymethod?.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      _filteredPaymethods = [...paymethods]
    }
    setFilteredPaymethods(_filteredPaymethods)
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
            onClick={() => handleSelectAllPaymethod(true)}
          >
            {t('SELECT_ALL', 'Select all')}
          </Button>
          <Button
            color='secundaryDark'
            onClick={() => handleSelectAllPaymethod(false)}
          >
            {t('SELECT_NONE', 'Select none')}
          </Button>
        </ButtonGroup>
        <GroupsContainer>
          {filteredPaymethods.map(paymethod => (
            <GroupWrapper
              key={paymethod.id}
              isDisabed={actionState.loading}
            >
              <Checkbox
                checked={selectedPaymethodIds.includes(paymethod.id)}
                onChange={e => handleSelectPaymethod(paymethod.id, e.target.checked)}
              />
              <p>{paymethod?.name}</p>
            </GroupWrapper>
          ))}
        </GroupsContainer>
        <Button
          borderRadius='8px'
          color='primary'
          disabled={Object.keys(changesState).length === 0}
          onClick={() => driversGroupState.driversGroup ? handleUpdateDriversGroup(changesState) : handleAddDriversGroup()}
        >
          {driversGroupState.driversGroup ? t('SAVE', 'Save') : t('ADD', 'Add')}
        </Button>
      </Container>
    </>
  )
}
