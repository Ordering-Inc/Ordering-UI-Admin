import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination, SideBar, Confirm } from '../../Shared'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { Switch } from '../../../styles'
import { CountryDetails } from '../CountryDetails'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'

import {
  CountriesContainer,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper,
  CountryWrapper,
  CheckboxWrapper,
  CountryName,
  PagesBottomContainer,
  AddNewPageButton
} from './styles'

export const CountriesList = (props) => {
  const {
    actionState,
    searchValue,
    countriesState,
    handleUpdateCountry,
    handleAddCountry,
    selectedCountries,
    setSelectedCountries,
    handleDeleteCountry
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(null)
  const [currentCountries, setCurrentCountries] = useState([])

  const [openDetaisl, setOpenDetails] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * countriesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setCountriesPerPage(pageSize)
  }

  useEffect(() => {
    if (countriesState.loading) return
    let _totalPages
    let dropdownOptions = []
    if (searchValue) {
      dropdownOptions = countriesState.countries.filter(option => option.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      dropdownOptions = [...countriesState.countries]
    }
    if (dropdownOptions.length > 0) {
      _totalPages = Math.ceil(dropdownOptions.length / countriesPerPage)
    }
    const indexOfLastPost = currentPage * countriesPerPage
    const indexOfFirstPost = indexOfLastPost - countriesPerPage
    const _currentDropdownOptions = dropdownOptions.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentCountries(_currentDropdownOptions)
  }, [countriesState, currentPage, countriesPerPage, searchValue])

  const handleClickCountry = (e, country) => {
    const isInvalid = e.target.closest('.country-checkbox') || e.target.closest('.country-enabled') || e.target.closest('.country-actions')
    if (isInvalid) return
    setSelectedCountry(country)
    setOpenDetails(true)
  }

  const onDeleteCountry = (countryId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('COUNTRY', 'Country')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteCountry(countryId)
      }
    })
  }

  const handleAllCheckbox = () => {
    const isAllChecked = currentCountries.every(item => selectedCountries.find(elem => elem.id === item.id))
    if (!isAllChecked) {
      setSelectedCountries(currentCountries)
    } else {
      setSelectedCountries([])
    }
  }

  const handleCheckCountry = (country) => {
    const found = selectedCountries.find(item => item.id === country.id)
    if (found) {
      setSelectedCountries(selectedCountries.filter(_country => _country.id !== country.id))
    } else {
      setSelectedCountries([...selectedCountries, country])
    }
  }

  useEffect(() => {
    if (actionState.loading || actionState.error || selectedCountry) return
    setOpenDetails(false)
    setSelectedCountry(null)
  }, [actionState])

  return (
    <CountriesContainer>
      <CountryWrapper isHeader>
        <CountryName>
          <CheckboxWrapper
            onClick={() => handleAllCheckbox()}
            active={!countriesState.loading && selectedCountries.length === currentCountries.length}
          >
            {!countriesState.loading && selectedCountries.length === currentCountries.length ? (
              <RiCheckboxFill />
            ) : (
              <RiCheckboxBlankLine />
            )}
          </CheckboxWrapper>
          <span>{t('COUNTRY', 'Zone')}</span>
        </CountryName>
        <ActionsContainer isHeader>{t('ACTIONS', 'Actions')}</ActionsContainer>
      </CountryWrapper>
      {countriesState.loading ? (
        [...Array(10).keys()].map(i => (
          <CountryWrapper key={i}>
            <CountryName><Skeleton width={150} /></CountryName>
            <ActionsContainer><Skeleton width={100} /></ActionsContainer>
          </CountryWrapper>
        ))
      ) : (
        <>
          {currentCountries.length > 0 && (
            <>
              {currentCountries.map(country => (
                <CountryWrapper
                  key={country.id}
                  active={selectedCountry?.id === country.id}
                  onClick={e => handleClickCountry(e, country)}
                >
                  <CountryName>
                    <CheckboxWrapper
                      className='country-checkbox'
                      onClick={() => handleCheckCountry(country)}
                      active={selectedCountries.find(_country => _country?.id === country.id)}
                    >
                      {selectedCountries.find(_country => _country?.id === country.id) ? (
                        <RiCheckboxFill />
                      ) : (
                        <RiCheckboxBlankLine />
                      )}
                    </CheckboxWrapper>
                    <span>{country?.name}</span>
                  </CountryName>
                  <ActionsContainer>
                    <EnableWrapper className='country-enabled'>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked={country?.enabled}
                        onChange={enabled => handleUpdateCountry(country.id, { enabled: enabled })}
                      />
                    </EnableWrapper>
                    <ActionSelectorWrapper className='country-actions'>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<FiMoreVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          onClick={() => {
                            setSelectedCountry(country)
                            setOpenDetails(true)
                          }}
                        >
                          {t('EDIT', 'Edit')}
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => onDeleteCountry(country.id)}
                        >
                          {t('DELETE', 'Delete')}
                        </Dropdown.Item>
                      </DropdownButton>
                    </ActionSelectorWrapper>
                  </ActionsContainer>
                </CountryWrapper>
              ))}
            </>
          )}
        </>
      )}

      {!countriesState.loading && (
        <PagesBottomContainer>
          <AddNewPageButton
            onClick={() => {
              setSelectedCountry(null)
              setOpenDetails(true)
            }}
          >
            {t('ADD_NEW_COUNTRY ', 'Add new country')}
          </AddNewPageButton>
          {currentCountries?.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleChangePage={page => setCurrentPage(page)}
              defaultPageSize={countriesPerPage}
              handleChangePageSize={handleChangePageSize}
            />
          )}
        </PagesBottomContainer>
      )}
      {openDetaisl && (
        <SideBar
          open={openDetaisl}
          onClose={() => {
            setOpenDetails(false)
            setSelectedCountry(null)
          }}
        >
          <CountryDetails
            country={selectedCountry}
            handleUpdateCountry={handleUpdateCountry}
            handleAddCountry={handleAddCountry}
          />
        </SideBar>
      )}
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </CountriesContainer>
  )
}
