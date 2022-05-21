import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

/**
 * Component to manage ProfessionalBusinessService behavior without UI component
 */
export const ProfessionalBusinessService = (props) => {
  const {
    UIComponent,
    propsToFetch,
    isSearchByName
  } = props
  const [ordering] = useApi()
  const [searchValue, setSearchValue] = useState(null)
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], result: { error: null } })

  const rex = new RegExp(/^[A-Za-z0-9\s]+$/g)

  const handleChangeCheckBox = (e, businessId, brandId) => {
    let changes = { franchise_id: brandId }
    if (!e.target.checked) changes = { franchise_id: null }
    // updateBusinessList(businessId, changes)
  }

  // const handleSelectAllBusinesses = (isAll, brandId) => {
  //   let changes
  //   const _businesses = []
  //   if (isAll) {
  //     changes = { franchise_id: brandId }
  //     businessList.businesses.forEach(business => {
  //       if (business.franchise_id !== brandId) {
  //         updateBusinessList(business.id, changes)
  //         business.franchise_id = brandId
  //       }
  //       _businesses.push(business)
  //     })
  //   } else {
  //     changes = { franchise_id: null }
  //     businessList.businesses.forEach(business => {
  //       if (business.franchise_id !== null) {
  //         updateBusinessList(business.id, changes)
  //         business.franchise_id = null
  //       }
  //       _businesses.push(business)
  //     })
  //   }
  //   setBusinessList({ ...businessList, businesses: _businesses })
  // }

  /**
   * Method to get business list from API
   */
  const getBusinessList = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })

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
        ? ordering.businesses().asDashboard().select(propsToFetch).where(where)
        : ordering.businesses().asDashboard().select(propsToFetch)
      const { content: { error, result, pagination } } = await fetchEndpoint.get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result,
          pagination
        })
      } else {
        setBusinessList({
          ...businessList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setBusinessList({
        ...businessList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  /**
   * Method to update business list from API
   */
  // const updateBusinessList = async (id, changes) => {
  //   try {
  //     showToast(ToastType.Info, t('LOADING', 'Loading'))
  //     const { content: { error, result } } = await ordering.businesses(parseInt(id)).save(changes)
  //     if (!error) {
  //       const _businesses = businessList?.businesses.map(business => {
  //         if (business.id === id) {
  //           return {
  //             ...business,
  //             franchise_id: result.franchise_id
  //           }
  //         }
  //         return business
  //       })
  //       setBusinessList(preBusinessList => ({ ...preBusinessList, businesses: _businesses }))
  //       showToast(ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'))
  //     }
  //   } catch (error) {
  //     console.log(error || error?.toString() || error?.message)
  //   }
  // }

  useEffect(() => {
    getBusinessList()
  }, [searchValue])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          onSearch={setSearchValue}
          businessList={businessList}
          handleChangeCheckBox={handleChangeCheckBox}
          // handleSelectAllBusinesses={handleSelectAllBusinesses}
        />
      )}
    </>
  )
}

ProfessionalBusinessService.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProfessionalBusinessService.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
