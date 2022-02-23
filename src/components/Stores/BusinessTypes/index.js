import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components-admin'
import { Alert, SearchBar } from '../../Shared'
import { BusinessTypeForm } from '../BusinessTypeForm'
import { ChevronRight, Square, CheckSquareFill } from 'react-bootstrap-icons'

import {
  Container,
  AddNewBusinessTypeContainer,
  AddNewBusinessTypeTitle,
  BusinessTypeContainer,
  BusinessTypeInfoWrapper,
  LogoWrapper,
  CheckBoxWrapper,
  BusinessTypeWrapper,
  ArrowWrapper,
  SearchWrapper
} from './styles'

export const BusinessTypes = (props) => {
  const {
    businessTypes,
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    setBusinessTypes,
    setIsExtendExtraOpen
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([])
  const [isAdd, setIsAdd] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const [filteredBusinessTypes, setFilteredBusinessTypes] = useState([])

  const handleSelectBusinessTypes = (typeId) => {
    let _selectedBusinessTypes = [...selectedBusinessTypes]
    if (selectedBusinessTypes.includes(typeId)) {
      _selectedBusinessTypes = _selectedBusinessTypes.filter(id => id !== typeId)
    } else {
      _selectedBusinessTypes.push(typeId)
    }
    if (_selectedBusinessTypes.length > 0) {
      setSelectedBusinessTypes(_selectedBusinessTypes)
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_TYPES_ITEM_MINIMUM', 'The types must have at least 1 items.')
      })
      return
    }
    setFormState({
      ...formState,
      changes: { types: _selectedBusinessTypes }
    })
  }

  const handleSuccessAddBusinessType = (result) => {
    setIsAdd(false)
    setBusinessTypes && setBusinessTypes([...businessTypes, result])
  }

  const handleClickCategory = () => {
    setIsExtendExtraOpen(true)
  }

  useEffect(() => {
    if (!business?.types) return
    const _selectedBusinessTypes = []
    for (const type of business?.types) {
      _selectedBusinessTypes.push(type.id)
    }
    setSelectedBusinessTypes(_selectedBusinessTypes)
  }, [business])

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [])

  useEffect(() => {
    const updatedBusinessTypes = businessTypes.filter(type => type?.name.toLowerCase().includes(searchVal.toLowerCase()))
    setFilteredBusinessTypes([...updatedBusinessTypes])
  }, [businessTypes, searchVal])

  return (
    <Container>
      <SearchWrapper>
        <SearchBar
          search={searchVal}
          isCustomLayout
          lazyLoad
          onSearch={(value) => setSearchVal(value)}
          placeholder={t('SEARCH', 'Search')}
        />
      </SearchWrapper>
      <BusinessTypeWrapper>
        {filteredBusinessTypes.map(category => (
          category?.id && (
            <BusinessTypeContainer
              key={category?.id}
              onClick={() => handleClickCategory(category)}
            >
              <BusinessTypeInfoWrapper>
                <CheckBoxWrapper onClick={() => handleSelectBusinessTypes(category.id)}>
                  {selectedBusinessTypes.includes(category.id) ? <CheckSquareFill className='fill' /> : <Square />}
                </CheckBoxWrapper>
                <LogoWrapper>
                  <img src={category?.image || theme.images?.categories?.all} alt='business type image' loading='lazy' />
                </LogoWrapper>
                <span>{category?.name}</span>
              </BusinessTypeInfoWrapper>
              <ArrowWrapper>
                <ChevronRight />
              </ArrowWrapper>
            </BusinessTypeContainer>
          )
        ))}
      </BusinessTypeWrapper>

      <AddNewBusinessTypeContainer>
        {isAdd ? (
          <BusinessTypeForm
            businessTypes={businessTypes}
            handleSuccessAddBusinessType={handleSuccessAddBusinessType}
            handleCloseAddForm={() => setIsAdd(false)}
          />
        ) : (
          <AddNewBusinessTypeTitle
            onClick={() => setIsAdd(true)}
          >
            {t('ADD_NEW_BUSINESS_TYPE', 'Add new business type')}
          </AddNewBusinessTypeTitle>
        )}
      </AddNewBusinessTypeContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
