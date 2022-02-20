import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi, useSession } from 'ordering-components-admin'

export const RewardsPrograms = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [loyaltyPlanList, setLoyaltyPlanList] = useState({ loading: true, error: null, loyaltyPlans: [], pagination: null })
  const [pointWallet, setPointWallet] = useState(null)

  /**
   * Method to update the pointsWallet business
   */
  const handleUpdateWalletBusiness = (result) => {
    const businesses = pointWallet?.businesses.map(business => {
      if (business.id === result.id) {
        return {
          ...business,
          ...result
        }
      }
      return business
    })

    setPointWallet({
      ...pointWallet,
      businesses: businesses
    })
  }

  /**
   * Method to update the pointsWallet
   */
  const handleUpdatePointsWallet = (changes) => {
    setPointWallet({ ...changes })
  }

  /**
   * Method to get loyalty plans from API
   */
  const getLoyaltyPlans = async () => {
    if (loading) return
    try {
      setLoyaltyPlanList({ ...loyaltyPlanList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/loyalty_plans`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result, pagination } = await response.json()
      if (!error) {
        setLoyaltyPlanList({
          ...loyaltyPlanList,
          loading: false,
          loyaltyPlans: result,
          pagination
        })
      } else {
        setLoyaltyPlanList({
          ...loyaltyPlanList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setLoyaltyPlanList({
        ...loyaltyPlanList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getLoyaltyPlans()
  }, [])

  useEffect(() => {
    if (loyaltyPlanList?.loyaltyPlans?.length === 0) return
    const loyalty = loyaltyPlanList?.loyaltyPlans.find(plan => plan.type === 'credit_point')
    if (loyalty) setPointWallet({ ...loyalty })
  }, [loyaltyPlanList?.loyaltyPlans])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          loyaltyPlanList={loyaltyPlanList}
          pointWallet={pointWallet}
          handleUpdateWalletBusiness={handleUpdateWalletBusiness}
          handleUpdatePointsWallet={handleUpdatePointsWallet}
        />
      )}
    </>
  )
}

RewardsPrograms.propTypes = {
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

RewardsPrograms.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
