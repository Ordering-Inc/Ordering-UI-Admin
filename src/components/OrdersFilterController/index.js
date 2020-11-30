import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const OrdersFilter = (props) => {
  const {
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusSelected,
    UIComponent
  } = props

  /**
   * This property is used to set in state the current value
   */
  const [typesSelected, setTypesSelected] = useState({
    groupType: null,
    deliveryDatetime: null,
    businessIds: [],
    driverId: null,
    cityId: null,
    status: null,
    deliveryType: null,
    paymethodId: null
  })

  /**
   * Change group type
   * * @param {object} groupType Group type
   */
  const handleChangeGroup = (groupType) => {
    setTypesSelected({ ...typesSelected })
  }
  /**
   * Change group type
   * * @param {object} dateType date type
  */
  const handleChangeDateType = (dateType) => {
    setTypesSelected({ ...typesSelected })
  }
  /**
   * Change group type
   * * @param {number} businessId business id
  */
  const handleChangeBusinesses = (businessId) => {
    const _businessIds = typesSelected.businessIds
    if (!_businessIds.includes(businessId)) {
      _businessIds.push(businessId)
    } else {
      for (let i = 0; i < _businessIds.length; i++) {
        if (_businessIds[i] === businessId) {
          _businessIds.splice(i, 1)
          i--
        }
      }
    }
    setTypesSelected({ ...typesSelected, businessIds: _businessIds })
  }
  /**
   * Change group type
   * * @param {number} driverId driver id
  */
  const handleChangeDriver = (driverId) => {
    setTypesSelected({ ...typesSelected, driverId: driverId })
  }
  /**
   * Change group type
   * * @param {number} cityId city id of business
  */
  const handleChangeCity = (cityId) => {
    setTypesSelected({ ...typesSelected, cityId: cityId })
  }
  /**
   * Change group type
   * * @param {number} status status
  */
  const handleChangeOrderStatus = (status) => {
    setTypesSelected({ ...typesSelected, status: status })
  }
  /**
   * Change group type
   * * @param {number} deliveryType delivery type
  */
  const handleChangeDeliveryType = (deliveryType) => {
    setTypesSelected({ ...typesSelected, deliveryType: deliveryType })
  }
  /**
   * Change group type
   * * @param {number} paymethodId paymethod Id
  */
  const handleChangePaymethodType = (paymethodId) => {
    setTypesSelected({ ...typesSelected, paymethodId: paymethodId })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          ordersStatusSelected={ordersStatusSelected}
          handleChangeGroup={handleChangeGroup}
          handleChangeDateType={handleChangeDateType}
          handleChangeBusinesses={handleChangeBusinesses}
          handleChangeDriver={handleChangeDriver}
          handleChangeCity={handleChangeCity}
          handleChangeOrderStatus={handleChangeOrderStatus}
          handleChangeDeliveryType={handleChangeDeliveryType}
          handleChangePaymethodType={handleChangePaymethodType}
        />
      )}
    </>
  )
}

OrdersFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
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

OrdersFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
