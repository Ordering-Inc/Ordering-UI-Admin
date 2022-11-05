import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

export const CountryList = (props) => {
  const {
    UIComponent,
    isSearchByName,
    filterList,
    handleChangeFilterList,
    onClose
  } = props
  const [ordering] = useApi()

  const [countriesState, setCountriesState] = useState({ countries: [], loading: false, error: null })
  const [searchValue, setSearchValue] = useState(null)
  const [countryIds, setCountryIds] = useState()
  const [isAllCheck, setIsAllCheck] = useState(false)

  const rex = new RegExp(/^[A-Za-z0-9\s]+$/g)

  /**
   * Method to change country id
   * @param {number} id
   */
  const handleChangeCountryIds = (id) => {
    const found = countryIds?.find(countryId => countryId === id)
    if (found) {
      const _countryIds = countryIds?.filter(businessId => businessId !== id)
      setCountryIds(_countryIds)
      setIsAllCheck(false)
    } else {
      const _countryIds = countryIds ? [...countryIds] : []
      _countryIds.push(id)
      if (_countryIds.length === countriesState?.countries.length) setIsAllCheck(true)
      setCountryIds(_countryIds)
    }
  }

  /**
 * Method to change filter list
 */
  const handleClickFilterButton = () => {
    const _countryIds = countryIds ? [...countryIds] : null
    handleChangeFilterList && handleChangeFilterList({ ...filterList, countryIds: _countryIds })
    onClose && onClose()
  }

  /**
   * Method to change all check status
   */
  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setCountryIds(null)
    } else {
      const _businessIds = countriesState.countries.map(country => country?.id)
      setCountryIds(_businessIds)
    }
    setIsAllCheck(!isAllCheck)
  }

  /**
   * Method to get the countries from API
   */
  const getCountries = async () => {
    try {
      setCountriesState({ ...countriesState, loading: true })
      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        const isSpecialCharacter = rex.test(searchValue)
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: !isSpecialCharacter ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const fetchEndpoint = where
        ? ordering.countries().where(where)
        : ordering.countries()
      const { content: { error, result } } = await fetchEndpoint.get()
      if (!error) {
        setCountriesState({ ...countriesState, loading: false, countries: result })
      } else {
        setCountriesState({ ...countriesState, loading: false, error: result })
      }
    } catch (err) {
      setCountriesState({ ...countriesState, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getCountries()
  }, [searchValue])

  useEffect(() => {
    if (countriesState?.countries?.length === 0) return
    const _countryIds = countriesState.countries?.map(country => country?.id)
    const filterCountryIds = filterList?.countryIds?.length > 0
      ? filterList?.countryIds.filter(countryId => _countryIds.includes(countryId))
      : _countryIds
    setCountryIds([...filterCountryIds])
    if (!filterList?.countryIds || filterCountryIds?.length === countriesState?.countries.length) setIsAllCheck(true)
  }, [countriesState?.countries])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          countryIds={countryIds}
          isAllCheck={isAllCheck}
          searchValue={searchValue}
          countriesState={countriesState}
          onSearch={setSearchValue}
          handleChangeAllCheck={handleChangeAllCheck}
          handleChangeCountryIds={handleChangeCountryIds}
          handleClickFilterButton={handleClickFilterButton}
        />
      )}
    </>
  )
}

CountryList.propTypes = {
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

CountryList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
