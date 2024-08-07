import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useLanguage, PlaceList as PlaceListController } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton, Switch, LinkButton } from '../../../styles'
import { List as MenuIcon } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Alert, Confirm, Pagination, SearchBar, SideBar } from '../../Shared'
import { CountrySelector } from '../CountrySelector'
import { CityDetails } from '../CityDetails'
import { DropdownOptionList } from '../DropdownOptionList'
import { CountriesList } from '../CountriesList'

import {
  PlaceListContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  Tabs,
  Tab,
  CitiesListContainer,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper,
  CityWrapper,
  CityName,
  CityAdministrator,
  CountryName,
  CheckboxWrapper,
  PagesBottomContainer
} from './styles'

const PlaceListingUI = (props) => {
  const {
    countriesState,
    cityManagerList,
    handleUpdateCountry,
    handleAddCountry,
    selectedCountries,
    setSelectedCountries,
    handleDeleteCountry,
    handleUpdateCity,
    handleDeleteCity,
    actionState,
    selectedCity,
    setSelectedCity,
    handleChangesState,
    changesState,
    handleSaveCity,
    handleAddCity,
    openCity,
    setOpenCity,
    selectedCityList,
    handleCheckboxClick,
    handleAllCheckboxClick,
    handleSeveralDeleteCities,
    handleSeveralDeleteCountries,
    dropdownOptionsState,
    handleUpdateDropdown,
    openZoneDropdown,
    setOpenZonedropdown,
    selectedZoneDropdown,
    setSelectedZoneDropdown,
    cleanChagesState,
    handleSaveZone,
    handleAddZone,
    handleDeleteZone,
    selectedZoneList,
    handleCheckboxZoneClick,
    handleAllCheckboxZoneClick,
    handleSeveralDeleteZones
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [showOption, setShowOption] = useState('countries')
  const [searchValue, setSearchValue] = useState(null)

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [citiesPerPage, setCitiesPerPage] = useState(10)
  // Get current cities
  const [currentCities, setCurrentCities] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * citiesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setCitiesPerPage(pageSize)
  }

  useEffect(() => {
    if (countriesState.loading) return
    const _cities = countriesState.countries?.reduce((_cities, country) => [..._cities, ...country?.cities], [])
    let cities = []
    if (searchValue) {
      cities = _cities.filter(city => city.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      cities = [..._cities]
    }
    const _totalPages = Math.ceil(cities.length / citiesPerPage)
    const indexOfLastPost = currentPage * citiesPerPage
    const indexOfFirstPost = indexOfLastPost - citiesPerPage
    const _currentCities = cities.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentCities(_currentCities)
  }, [countriesState, currentPage, citiesPerPage, searchValue])

  const onDeleteCity = (countryId, cityId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CITY', 'Are you sure to delete this city?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteCity(countryId, cityId)
      }
    })
  }

  const handleOpenCityDetails = (city) => {
    setSelectedCity(city)
    setOpenCity(true)
  }

  const handleClickCity = (e, city, isInitialRender) => {
    const isInvalid = e?.target?.closest('.city-checkbox') || e?.target?.closest('.city-enabled') || e?.target?.closest('.city-actions')
    if (isInvalid) return
    handleOpenCityDetails(city)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?country=${city.country_id}&city=${city.id}`)
    }
  }

  const handleCloseCityDetail = () => {
    setSelectedCity(null)
    setOpenCity(false)
    history.replace(`${location.pathname}`)
  }

  const handleOpenZoneDropdownDetails = (zone) => {
    setSelectedZoneDropdown(zone)
    setOpenZonedropdown(true)
  }

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  useEffect(() => {
    setSearchValue(null)
    cleanChagesState()
  }, [showOption])

  useEffect(() => {
    if (countriesState.loading) return
    const countryId = query.get('country')
    const cityId = query.get('city')
    if (countryId && cityId) {
      setShowOption('cities')
      const initCountry = countriesState.countries.find(country => country.id === Number(countryId))
      if (initCountry) {
        const initCity = initCountry.cities.find(city => city.id === Number(cityId))
        if (initCity) {
          handleClickCity(null, initCity, true)
        }
      }
    }
  }, [countriesState.loading])

  useEffect(() => {
    const zone = query.get('zone')
    if (zone) {
      setShowOption('zones')
    }
  }, [])

  return (
    <>
      <PlaceListContainer>
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
            <h1>{t('COUNTRIES_CITIES', 'Countries/Cities')}</h1>
          </HeaderLeft>
          <HeaderRight>
            {showOption === 'cities' && (
              <Button
                borderRadius='8px'
                color='lightPrimary'
                onClick={() => handleOpenCityDetails(null)}
              >
                {t('ADD_CITY', 'Add city')}
              </Button>
            )}
            {showOption === 'zones' && (
              <Button
                borderRadius='8px'
                color='lightPrimary'
                onClick={() => handleOpenZoneDropdownDetails(null)}
              >
                {t('ADD_ZONE_DROPDOWN', 'Add zone dropdown')}
              </Button>
            )}
            {showOption === 'countries' && (
              <Button
                borderRadius='8px'
                color='secundary'
                disabled={selectedCountries?.length === 0}
                onClick={() => handleSeveralDeleteCountries()}
              >
                {t('DELETE', 'Delete')}
              </Button>
            )}
            {showOption === 'cities' && (
              <Button
                borderRadius='8px'
                color='secundary'
                disabled={selectedCityList.length === 0}
                onClick={() => handleSeveralDeleteCities()}
              >
                {t('DELETE', 'Delete')}
              </Button>
            )}
            {showOption === 'zones' && (
              <Button
                borderRadius='8px'
                color='secundary'
                disabled={selectedZoneList.length === 0}
                onClick={() => handleSeveralDeleteZones()}
              >
                {t('DELETE', 'Delete')}
              </Button>
            )}
            <SearchBar
              lazyLoad
              isCustomLayout
              placeholder={t('SEARCH', 'Search')}
              searchValue={searchValue}
              onSearch={val => setSearchValue(val)}
            />
          </HeaderRight>
        </Header>

        <Tabs>
          <Tab
            active={showOption === 'countries'}
            onClick={() => setShowOption('countries')}
          >
            {t('COUNTRIES', 'Countries')}
          </Tab>
          <Tab
            active={showOption === 'cities'}
            onClick={() => setShowOption('cities')}
          >
            {t('CITIES', 'Cities')}
          </Tab>
          <Tab
            active={showOption === 'zones'}
            onClick={() => setShowOption('zones')}
          >
            {t('DROPDOWN_OPTIONS', 'Zones dropdown options')}
          </Tab>
        </Tabs>

        {showOption === 'countries' && (
          <CountriesList
            actionState={actionState}
            countriesState={countriesState}
            handleUpdateCountry={handleUpdateCountry}
            handleAddCountry={handleAddCountry}
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
            handleDeleteCountry={handleDeleteCountry}
          />
        )}
        {showOption === 'cities' && (
          <CitiesListContainer>
            <CityWrapper isHeader>
              <CityName>
                <CheckboxWrapper
                  onClick={() => handleAllCheckboxClick()}
                  active={!countriesState.loading && selectedCityList.length === countriesState.countries?.reduce((_cities, country) => [..._cities, ...country?.cities], []).length}
                >
                  {!countriesState.loading && selectedCityList.length === countriesState.countries?.reduce((_cities, country) => [..._cities, ...country?.cities], []).length ? (
                    <RiCheckboxFill />
                  ) : (
                    <RiCheckboxBlankLine />
                  )}
                </CheckboxWrapper>
                <span>{t('CITY', 'City')}</span>
              </CityName>
              {/* <CityAdministrator isHeader>{t('ADMINISTRATOR', 'Administrator')}</CityAdministrator> */}
              <CountryName isHeader>{t('COUNTRY', 'Country')}</CountryName>
              <ActionsContainer isHeader>{t('ACTIONS', 'Actions')}</ActionsContainer>
            </CityWrapper>
            {countriesState.loading ? (
              [...Array(10).keys()].map(i => (
                <CityWrapper key={i}>
                  <CityName><Skeleton width={100} /></CityName>
                  <CityAdministrator><Skeleton width={100} /></CityAdministrator>
                  <CountryName><Skeleton width={100} /></CountryName>
                  <ActionsContainer><Skeleton width={100} /></ActionsContainer>
                </CityWrapper>
              ))
            ) : (
              <>
                {currentCities.length > 0 && (
                  <>
                    {currentCities.map(city => (
                      <CityWrapper
                        key={city.id}
                        active={selectedCity?.id === city.id}
                        onClick={e => handleClickCity(e, city)}
                      >
                        <CityName>
                          <CheckboxWrapper
                            className='city-checkbox'
                            onClick={() => handleCheckboxClick(city)}
                            active={selectedCityList.find(_city => _city?.id === city.id)}
                          >
                            {selectedCityList.find(_city => _city?.id === city.id) ? (
                              <RiCheckboxFill />
                            ) : (
                              <RiCheckboxBlankLine />
                            )}
                          </CheckboxWrapper>
                          <span>{city?.name}</span>
                        </CityName>
                        {/* <CityAdministrator>
                          <CityAdministratorSelector
                            defaultValue={parseInt(city?.administrator_id)}
                            cityManagers={cityManagerList.users}
                          />
                        </CityAdministrator> */}
                        <CountryName>
                          <CountrySelector
                            defaultValue={parseInt(city?.country_id)}
                            countries={countriesState?.countries}
                          />
                        </CountryName>
                        <ActionsContainer>
                          <EnableWrapper className='city-enabled'>
                            <span>{t('ENABLE', 'Enable')}</span>
                            <Switch
                              defaultChecked={city?.enabled}
                              onChange={enabled => handleUpdateCity(city.country_id, city.id, { enabled: enabled })}
                            />
                          </EnableWrapper>
                          <ActionSelectorWrapper className='city-actions'>
                            <DropdownButton
                              menuAlign={theme?.rtl ? 'left' : 'right'}
                              title={<FiMoreVertical />}
                              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                            >
                              <Dropdown.Item
                                onClick={() => handleOpenCityDetails(city)}
                              >
                                {t('EDIT', 'Edit')}
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => onDeleteCity(city.country_id, city.id)}
                              >
                                {t('DELETE', 'Delete')}
                              </Dropdown.Item>
                            </DropdownButton>
                          </ActionSelectorWrapper>
                        </ActionsContainer>
                      </CityWrapper>
                    ))}
                  </>
                )}
              </>
            )}

            {!countriesState.loading && (
              <PagesBottomContainer>
                <LinkButton
                  onClick={() => handleOpenCityDetails(null)}
                >
                  {t('ADD_NEW_CITY', 'Add new city')}
                </LinkButton>
                {currentCities?.length > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleChangePage={handleChangePage}
                    defaultPageSize={citiesPerPage}
                    handleChangePageSize={handleChangePageSize}
                  />
                )}
              </PagesBottomContainer>
            )}
          </CitiesListContainer>
        )}
        {showOption === 'zones' && (
          <DropdownOptionList
            dropdownOptionsState={dropdownOptionsState}
            searchValue={searchValue}
            countriesState={countriesState}
            handleUpdateDropdown={handleUpdateDropdown}
            openZoneDropdown={openZoneDropdown}
            setOpenZonedropdown={setOpenZonedropdown}
            selectedZoneDropdown={selectedZoneDropdown}
            setSelectedZoneDropdown={setSelectedZoneDropdown}
            changesState={changesState}
            handleChangesState={handleChangesState}
            handleSaveZone={handleSaveZone}
            handleAddZone={handleAddZone}
            handleDeleteZone={handleDeleteZone}
            handleOpenZoneDropdownDetails={handleOpenZoneDropdownDetails}
            selectedZoneList={selectedZoneList}
            handleCheckboxZoneClick={handleCheckboxZoneClick}
            handleAllCheckboxZoneClick={handleAllCheckboxZoneClick}
          />
        )}
      </PlaceListContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
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
      {openCity && (
        <SideBar
          sidebarId='city-details'
          defaultSideBarWidth={550}
          open={openCity}
          onClose={() => handleCloseCityDetail()}
          showExpandIcon
        >
          <CityDetails
            city={selectedCity}
            countries={countriesState?.countries}
            cityManagers={cityManagerList.users}
            handleChangesState={handleChangesState}
            changesState={changesState}
            handleSaveCity={handleSaveCity}
            handleAddCity={handleAddCity}
          />
        </SideBar>
      )}
    </>
  )
}

export const PlaceListing = (props) => {
  const placesProps = {
    ...props,
    UIComponent: PlaceListingUI
  }
  return <PlaceListController {...placesProps} />
}
