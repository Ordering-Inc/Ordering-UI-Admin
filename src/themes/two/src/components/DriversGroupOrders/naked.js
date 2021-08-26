import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const DriversGroupOrders = (props) => {
  const {
    UIComponent,
    curDriversGroup,
    handleChangesState
  } = props

  const [maxTimeBetweenOrder, setMaxTimeBetweenOrder] = useState({})
  const [maxTimeBetweenBusiness, setMaxTimeBetweenBusiness] = useState({})
  const [maxTimeBetweenDelivery, setMaxTimeBetweenDelivery] = useState({})

  const getHours = (seconds) => {
    return (seconds * 1) / 3600 > 1 ? Math.floor((seconds * 1) / 3600) : 0
  }
  const getMinutes = (seconds) => {
    return Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60)
  }
  const getSeconds = (seconds) => {
    const remain = seconds - Math.floor(seconds / 3600) * 3600
    return Math.floor(remain - Math.floor(remain / 60) * 60)
  }

  const handleChangeMaxTimeBetweenOrder = (value, option) => {
    const regExp = /^[0-9\b]+$/
    if (value === '' || regExp.test(value)) {
      const changeValue = value === '' ? 0 : parseInt(value)
      const _maxTimeBetweenOrder = { ...maxTimeBetweenOrder }
      _maxTimeBetweenOrder[option] = changeValue
      setMaxTimeBetweenOrder(_maxTimeBetweenOrder)
      const maxTimeBetweenOrderChanges = _maxTimeBetweenOrder?.hour * 3600 + _maxTimeBetweenOrder?.minute * 60 + _maxTimeBetweenOrder?.second
      handleChangesState({ orders_group_max_time_between: maxTimeBetweenOrderChanges })
    }
  }

  const handleChangeMaxTimeBetweenBusiness = (value, option) => {
    const regExp = /^[0-9\b]+$/
    if (value === '' || regExp.test(value)) {
      const changeValue = value === '' ? 0 : parseInt(value)
      const _maxTimeBetweenBusiness = { ...maxTimeBetweenOrder }
      _maxTimeBetweenBusiness[option] = changeValue
      setMaxTimeBetweenBusiness(_maxTimeBetweenBusiness)
      const maxTimeBetweenBusinessChanges = _maxTimeBetweenBusiness?.hour * 3600 + _maxTimeBetweenBusiness?.minute * 60 + _maxTimeBetweenBusiness?.second
      handleChangesState({ orders_group_max_time_between_pickup: maxTimeBetweenBusinessChanges })
    }
  }

  const handleChangeMaxTimeBetweenDelivery = (value, option) => {
    const regExp = /^[0-9\b]+$/
    if (value === '' || regExp.test(value)) {
      const changeValue = value === '' ? 0 : parseInt(value)
      const _maxTimeBetweenDelivery = { ...maxTimeBetweenOrder }
      _maxTimeBetweenDelivery[option] = changeValue
      setMaxTimeBetweenDelivery(_maxTimeBetweenDelivery)
      const maxTimeBetweenDeliveryChanges = _maxTimeBetweenDelivery?.hour * 3600 + _maxTimeBetweenDelivery?.minute * 60 + _maxTimeBetweenDelivery?.second
      handleChangesState({ orders_group_max_time_between_delivery: maxTimeBetweenDeliveryChanges })
    }
  }

  const onChangeNumberInput = (name, change) => {
    const regExp = /^[0-9\b]+$/
    if (change === '' || regExp.test(change)) {
      handleChangesState({ [name]: change })
    }
  }

  useEffect(() => {
    if (curDriversGroup) {
      const _maxTimeBetweenOrder = {
        hour: getHours(curDriversGroup?.orders_group_max_time_between),
        minute: getMinutes(curDriversGroup?.orders_group_max_time_between),
        second: getSeconds(curDriversGroup?.orders_group_max_time_between)
      }
      setMaxTimeBetweenOrder(_maxTimeBetweenOrder)

      const _maxTimeBetweenBusiness = {
        hour: getHours(curDriversGroup?.orders_group_max_time_between_pickup),
        minute: getMinutes(curDriversGroup?.orders_group_max_time_between_pickup),
        second: getSeconds(curDriversGroup?.orders_group_max_time_between_pickup)
      }
      setMaxTimeBetweenBusiness(_maxTimeBetweenBusiness)

      const _maxTimeBetweenDelivery = {
        hour: getHours(curDriversGroup?.orders_group_max_time_between_delivery),
        minute: getMinutes(curDriversGroup?.orders_group_max_time_between_delivery),
        second: getSeconds(curDriversGroup?.orders_group_max_time_between_delivery)
      }
      setMaxTimeBetweenDelivery(_maxTimeBetweenDelivery)
    }
  }, [curDriversGroup])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            maxTimeBetweenOrder={maxTimeBetweenOrder}
            maxTimeBetweenBusiness={maxTimeBetweenBusiness}
            maxTimeBetweenDelivery={maxTimeBetweenDelivery}
            handleChangeMaxTimeBetweenOrder={handleChangeMaxTimeBetweenOrder}
            handleChangeMaxTimeBetweenBusiness={handleChangeMaxTimeBetweenBusiness}
            handleChangeMaxTimeBetweenDelivery={handleChangeMaxTimeBetweenDelivery}
            onChangeNumberInput={onChangeNumberInput}
          />
        )
      }
    </>
  )
}

DriversGroupOrders.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers group orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers group orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers group orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers group orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversGroupOrders.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
