import React, { useState, createContext } from 'react'
/**
 * Create FilterValuesContext
 * This context will manage the info between pages and provide an easy interface
 */
export const FilterValuesContext = createContext()

/**
  * Custom provider to mange shared info
  * @param {props} props
  */
export const FilterValuesProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({
    orderId: null,
    externalId: null,
    groupTypes: [],
    groupTypesUnassigned: [],
    dateType: null,
    deliveryFromDatetime: null,
    deliveryEndDatetime: null,
    businessIds: [],
    driverIds: [],
    driverGroupIds: [],
    cityIds: [],
    statuses: [],
    deliveryTypes: [],
    paymethodIds: [],
    countryCode: [],
    currency: [],
    metafield: [],
    logisticStatus: null,
    assigned: null,
    driverGroupBusinessIds: [],
    customerName: null,
    customerEmail: null,
    customerCellphone: null,
    customerLastname: null,
    coupon: null,
    offerId: null,
    administratorIds:[]
  })

  const handleFilterValues = (filterValues) => {
    setFilterValues(filterValues)
  }

  const functions = {
    handleFilterValues
  }

  return (
    <FilterValuesContext.Provider value={[filterValues, functions]}>
      {children}
    </FilterValuesContext.Provider>
  )
}

// hook context

export function useFilterValues () {
  const filterValuesManager = React.useContext(FilterValuesContext)
  return filterValuesManager || [{}, () => {}]
}
