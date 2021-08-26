import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const DriversGroupAutoassign = (props) => {
  const {
    UIComponent,
    curDriversGroup,
    handleChangesState
  } = props

  const [autoAssign, setAutoAssign] = useState(0)
  const [autoRejectOrderGroup, setAutoRejectOrderGroup] = useState({})

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

  const onSelectAssign = (type) => {
    setAutoAssign(type)
    const changes = {}
    if (type === 1) {
      // one by one
      changes.autoassign_initial_radius = 500
      changes.autoassign_increment_radius = 100
      changes.autoassign_max_radius = 15000

      changes.autoassign_amount_drivers = 1
    } else if (type === 2) {
      // send to all
      changes.autoassign_initial_radius = 15000
      changes.autoassign_increment_radius = 15000
      changes.autoassign_max_radius = 15000

      changes.autoassign_amount_drivers = 1000
    } else if (type === 3) {
      // nearest available
      changes.autoassign_initial_radius = 100
      changes.autoassign_increment_radius = 100
      changes.autoassign_max_radius = 1500

      changes.autoassign_amount_drivers = 1
    } else if (type === 4) {
      // batch wise
      changes.autoassign_initial_radius = 1000
      changes.autoassign_increment_radius = 500
      changes.autoassign_max_radius = 15000

      changes.autoassign_amount_drivers = 2
    } else if (type === 5) {
      // round robin
      changes.autoassign_initial_radius = 15000
      changes.autoassign_increment_radius = 15000
      changes.autoassign_max_radius = 15000

      changes.autoassign_amount_drivers = 1
    } else if (type === 6) {
      // other
      changes.autoassign_initial_radius = ''
      changes.autoassign_increment_radius = ''
      changes.autoassign_max_radius = ''

      changes.autoassign_amount_drivers = ''
    }

    handleChangesState({
      autoassign_initial_radius: changes.autoassign_initial_radius,
      autoassign_increment_radius: changes.autoassign_increment_radius,
      autoassign_max_radius: changes.autoassign_max_radius,
      autoassign_amount_drivers: changes.autoassign_amount_drivers
    })
  }

  const handleChangeInput = (e) => {
    const value = e.target.value
    const changeValue = value === '' ? 0 : parseInt(value)
    const regExp = /^[0-9\b]+$/
    if (changeValue === '' || regExp.test(changeValue)) {
      handleChangesState({ [e.target.name]: changeValue })
    }
  }

  const onChangeAutoRejectOrderGroup = (value, option) => {
    const changeValue = value === '' ? 0 : parseInt(value)
    const _autoRejectOrderGroup = { ...autoRejectOrderGroup }
    const regExp = /^[0-9\b]+$/
    if (changeValue === '' || regExp.test(changeValue)) {
      _autoRejectOrderGroup[option] = value
      setAutoRejectOrderGroup(_autoRejectOrderGroup)
      handleChangesState({ autoassign_autoreject_time: _autoRejectOrderGroup })
    }
  }

  useEffect(() => {
    let _autoAssign
    if (!curDriversGroup) return
    if (curDriversGroup.autoassign_initial_radius * 1 === 500 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 1
    else if (curDriversGroup.autoassign_initial_radius * 1 === 15000 && curDriversGroup.autoassign_amount_drivers * 1 === 1000) _autoAssign = 2
    else if (curDriversGroup.autoassign_initial_radius * 1 === 100 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 3
    else if (curDriversGroup.autoassign_initial_radius * 1 === 1000 && curDriversGroup.autoassign_amount_drivers * 1 === 2) _autoAssign = 4
    else if (curDriversGroup.autoassign_initial_radius * 1 === 15000 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 5
    else _autoAssign = 6
    setAutoAssign(_autoAssign)

    const _autoRejectOrderGroup = {
      hour: getHours(curDriversGroup.autoassign_autoreject_time),
      minute: getMinutes(curDriversGroup.autoassign_autoreject_time),
      second: getSeconds(curDriversGroup.autoassign_autoreject_time)
    }
    setAutoRejectOrderGroup(_autoRejectOrderGroup)
  }, [curDriversGroup])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            autoAssign={autoAssign}
            autoRejectOrderGroup={autoRejectOrderGroup}
            onSelectAssign={onSelectAssign}
            onChangeSave={handleChangesState}
            handleChangeInput={handleChangeInput}
            onChangeAutoRejectOrderGroup={onChangeAutoRejectOrderGroup}
          />
        )
      }
    </>
  )
}

DriversGroupAutoassign.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers group assign setting
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers group assign setting
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers group assign setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers group assign setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversGroupAutoassign.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
