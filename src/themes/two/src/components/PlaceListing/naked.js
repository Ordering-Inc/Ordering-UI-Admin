import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const PlaceList = (props) => {
  const {
    UIComponent,
    cityMangersPropsToFetch
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [countriesState, setCountriesState] = useState({ countries: [], loading: false, error: null })
  const [cityManagerList, setCityMangerList] = useState({ users: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [selectedCity, setSelectedCity] = useState(null)
  const [changesState, setChangesState] = useState({})
  const [openCity, setOpenCity] = useState(false)
  const [selectedCityList, setSelectedCityList] = useState([])

  /**
   * Method to get the countries from API
   */
  const getCountries = async () => {
    try {
      setCountriesState({ ...countriesState, loading: true })
      const { content: { error, result } } = await ordering.countries().get()
      if (!error) {
        setCountriesState({ ...countriesState, loading: false, countries: result })
      } else {
        setCountriesState({ ...countriesState, loading: false, error: result })
      }
    } catch (err) {
      setCountriesState({ ...countriesState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update country from API
   */
  const handleChangeCountryName = async (countryId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const { content: { error, result } } = await ordering.countries(countryId).save(changes)
      if (!error) {
        const countries = countriesState.countries.filter(country => {
          if (country.id === countryId) {
            Object.assign(country, result)
          }
          return true
        })
        setCountriesState({ ...countriesState, countries: countries })
        showToast(ToastType.Success, t('COUNTRY_SAVED', 'Country saved'))
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the city from API
   */
  const handleUpdateCity = async (countryId, cityId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const { content: { error, result } } = await ordering.countries(countryId).cities(cityId).save(changes)
      if (!error) {
        const countries = countriesState.countries.map(country => {
          if (country.id === countryId) {
            const cities = country.cities.filter(city => {
              if (city.id === cityId) {
                Object.assign(city, result)
              }
              return true
            })
            country.cities = cities
          }
          return country
        })
        setCountriesState({ ...countriesState, countries: countries })
        showToast(ToastType.Success, t('CITY_SAVED', 'City saved'))
        setChangesState({})
      } else {
        setActionState({ ...actionState, loading: false, error: result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the city from API
   */
  const handleDeleteCity = async (countryId, cityId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const { content: { error, result } } = await ordering.countries(countryId).cities(cityId).delete()
      if (!error) {
        const countries = countriesState.countries.map(country => {
          if (parseInt(country.id) === parseInt(countryId)) {
            const cities = country.cities.filter(city => city.id !== cityId)
            country.cities = cities
          }
          return country
        })
        setCountriesState({ ...countriesState, countries: countries })
        showToast(ToastType.Success, t('CITY_REMOVED', 'City removed'))
      } else {
        setActionState({ ...actionState, loading: false, error: result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get city managers from API
   */
  const getCityManagers = async () => {
    try {
      setCityMangerList({ ...cityManagerList, loading: true })
      const source = {}
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .select(cityMangersPropsToFetch)
        .where([{ attribute: 'level', value: [1] }])
        .get({ cancelToken: source })

      setCityMangerList({
        ...cityManagerList,
        loading: false,
        users: result
      })
    } catch (err) {
      setCityMangerList({
        ...cityManagerList,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to add new city from API
   */
  const handleAddCity = async () => {
    if (!changesState?.country_id) {
      setActionState({
        ...actionState,
        error: t('SELECT_COUNTRY', 'Select a country')
      })
      return
    }
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      changesState.enabled = true
      const { content: { error, result } } = await ordering.countries(changesState?.country_id).cities().save(changesState)
      if (!error) {
        const countries = countriesState.countries.map(country => {
          if (country.id === changesState?.country_id) {
            const cities = [...country.cities, result]
            country.cities = cities
          }
          return country
        })
        setCountriesState({ ...countriesState, countries: countries })
        showToast(ToastType.Success, t('CITY_ADDED', 'City added'))
        setChangesState({})
        setOpenCity(false)
      } else {
        setActionState({ ...actionState, loading: false, error: result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  const handleChangesState = (key, val) => {
    setChangesState({
      ...changesState,
      [key]: val
    })
  }

  const handleSaveCity = () => {
    handleUpdateCity(selectedCity?.country_id, selectedCity?.id, changesState)
  }

  const handleCheckboxClick = (city) => {
    const found = selectedCityList.find(_city => _city?.id === city.id)
    if (!found) {
      setSelectedCityList([...selectedCityList, city])
    } else {
      const cities = selectedCityList.filter(_city => _city.id !== city.id)
      setSelectedCityList(cities)
    }
  }

  const handleAllCheckboxClick = () => {
    const cities = countriesState.countries.reduce((_cities, country) => [..._cities, ...country?.cities], [])
    if (cities.length === selectedCityList.length) {
      setSelectedCityList([])
    } else {
      setSelectedCityList(cities)
    }
  }

  /**
   * Method to delete the several cities from API
   */
  const handleSeveralDeleteCities = () => {
    for (const city of selectedCityList) {
      handleDeleteCity(city?.country_id, city.id)
    }
  }

  useEffect(() => {
    setChangesState({})
  }, [selectedCity])

  useEffect(() => {
    getCityManagers()
    getCountries()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          countriesState={countriesState}
          cityManagerList={cityManagerList}
          actionState={actionState}
          handleChangeCountryName={handleChangeCountryName}
          handleUpdateCity={handleUpdateCity}
          handleDeleteCity={handleDeleteCity}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          openCity={openCity}
          setOpenCity={setOpenCity}
          changesState={changesState}
          handleChangesState={handleChangesState}
          handleSaveCity={handleSaveCity}
          handleAddCity={handleAddCity}
          selectedCityList={selectedCityList}
          handleCheckboxClick={handleCheckboxClick}
          handleAllCheckboxClick={handleAllCheckboxClick}
          handleSeveralDeleteCities={handleSeveralDeleteCities}
        />
      )}
    </>
  )
}

PlaceList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before place list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after place list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PlaceList.defaultProps = {
  cityMangersPropsToFetch: ['id', 'name', 'lastname'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
