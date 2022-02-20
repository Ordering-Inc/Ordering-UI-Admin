import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const WalletBusinessList = (props) => {
  const {
    UIComponent,
    pointWallet,
    propsToFetch,
    handleUpdateWalletBusiness
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [businessList, setBusinessList] = useState({ loading: true, error: null, businesses: [], pagination: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  const handleCheckBox = (businessId, name, checked) => {
    const changes = { [name]: checked }
    updateLoayalty(businessId, changes)
  }

  const handleUpdateBusinessList = (result) => {
    const businesses = businessList.businesses.map(business => {
      if (business.id === result.id) {
        return {
          ...business,
          ...result
        }
      }
      return business
    })
    setBusinessList({
      ...businessList,
      businesses: businesses
    })
  }

  const updateLoayalty = async (businessId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/loyalty_plans/${pointWallet?.id}/businesses/${businessId}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('POINTS_WALLET_UPDATED', 'Points wallet updated'))
        setActionState({ loading: false, error: null })
        handleUpdateWalletBusiness && handleUpdateWalletBusiness(result)
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (error) {
      setActionState({ loading: false, error: error.message })
    }
  }

  /**
   * Method to get business types from API
   */
  const getBusinessTypes = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })
      const fetchEndpoint = ordering.businesses().asDashboard().select(propsToFetch)
      const { content: { error, result, pagination } } = await fetchEndpoint.get()
      if (!error) {
        let _businessList = []
        if (pointWallet?.businesses?.length > 0) {
          _businessList = pointWallet?.businesses.map(wallet => {
            const searchBusiness = result.find(business => business.id === wallet.business_id)
            if (searchBusiness) {
              return {
                ...wallet,
                business_logo: searchBusiness?.logo,
                business_name: searchBusiness?.name
              }
            }
            return wallet
          })
        }
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: _businessList,
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

  useEffect(() => {
    const controller = new AbortController()
    getBusinessTypes()
    return controller.abort()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessList={businessList}
          handleCheckBox={handleCheckBox}
          updateLoayalty={updateLoayalty}
          handleUpdateBusinessList={handleUpdateBusinessList}
        />
      )}
    </>
  )
}

WalletBusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * pointWallet, this must be contains an object
   */
  pointWallet: PropTypes.object,
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

WalletBusinessList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
