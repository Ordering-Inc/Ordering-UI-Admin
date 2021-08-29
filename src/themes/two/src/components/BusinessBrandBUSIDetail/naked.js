import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

/**
 * Component to manage BusinessBrandBUSIDetail behavior without UI component
 */
export const BusinessBrandBUSIDetail = (props) => {
  const {
    UIComponent,
    propsToFetch
  } = props
  const [ordering] = useApi()
  const [searchValue, setSearchValue] = useState(null)
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], result: { error: null } })

  const handleChangeCheckBox = (e, businessId, brandId) => {
    if (!e.target.checked) return
    const changes = { franchise_id: brandId }
    updateBusinessList(businessId, changes)
  }

  /**
   * Method to get business list from API
   */
  const getBusinessList = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })
      const { content: { error, result, pagination } } = await ordering.businesses().asDashboard().select(propsToFetch).get()
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
  const updateBusinessList = async (id, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const { content: { error, result } } = await ordering.businesses(parseInt(id)).save(changes)
      if (!error) {
        const _businesses = businessList?.businesses.map(business => {
          if (business.id === id) {
            return {
              ...business,
              franchise_id: result.id
            }
          }
          return business
        })
        setBusinessList({ ...businessList, businesses: _businesses })
        showToast(ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'))
      }
    } catch (error) {
      console.log(error || error?.toString() || error?.message)
    }
  }

  useEffect(() => {
    getBusinessList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          onSearch={setSearchValue}
          businessList={businessList}
          handleChangeCheckBox={handleChangeCheckBox}
        />
      )}
    </>
  )
}

BusinessBrandBUSIDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for a brand
   */
  brand: PropTypes.object,
  /**
   * Object for brand list
   */
  brandListState: PropTypes.object,
  /**
  * Function to set a business state
  */
  handleUpdateBrandList: PropTypes.func,
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

BusinessBrandBUSIDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
