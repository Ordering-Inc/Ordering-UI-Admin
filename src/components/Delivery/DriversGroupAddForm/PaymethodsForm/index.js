import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../../../Shared'
import { Button, Checkbox } from '../../../../styles'

import {
  Container,
  SearchBarWrapper,
  ButtonGroup,
  GroupsContainer,
  GroupWrapper
} from './styles'

export const PaymethodsForm = (props) => {
  const {
    paymethods,
    actionState,
    selectedPaymethodIds,
    handleSelectPaymethod,
    handleSelectAllPaymethod
  } = props
  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredPaymethods, setFilteredPaymethods] = useState([])

  useEffect(() => {
    let _filteredPaymethods = []
    if (searchValue) {
      _filteredPaymethods = paymethods.filter(paymethod => paymethod?.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      _filteredPaymethods = [...paymethods]
    }
    setFilteredPaymethods(_filteredPaymethods)
  }, [searchValue])

  return (
    <>
      <Container>
        <h2>{t('PAYMENT_METHODS', 'Payment methods')}</h2>
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
              <p>{t(paymethod?.gateway?.toUpperCase(), paymethod?.name)}</p>
            </GroupWrapper>
          ))}
        </GroupsContainer>
      </Container>
    </>
  )
}
