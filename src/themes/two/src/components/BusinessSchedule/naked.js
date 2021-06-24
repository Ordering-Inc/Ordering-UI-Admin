import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessSchedule = (props) => {
  const {
    business,
    UIComponent,
    handleSuccessBusinessScheduleUpdate
  } = props
  const [ordering] = useApi()
  const [session] = useSession()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [schedule, setSchedule] = useState([])
  const [selectedCopyDays, setSelectedCopyDays] = useState([])

  /**
   * Clean selectedCopyDays
   */

  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {Number} index index of schedule time
   * @param {String} value changed value
   */
  const handleChangeTime = (daysOfWeekIndex, isOpen, isHour, index, value) => {
    const _schedule = [...schedule]
    if (isOpen) {
      if (isHour) {
        _schedule[daysOfWeekIndex].lapses[index].open.hour = parseInt(value)
      } else {
        _schedule[daysOfWeekIndex].lapses[index].open.minute = parseInt(value)
      }
    } else {
      if (isHour) {
        _schedule[daysOfWeekIndex].lapses[index].close.hour = parseInt(value)
      } else {
        _schedule[daysOfWeekIndex].lapses[index].close.minute = parseInt(value)
      }
    }
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: _schedule
      }
    })
  }

  /**
   * Method to add the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleAddScheduleTime = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    const addTime = {
      open: { hour: 0, minute: 0 },
      close: { hour: 23, minute: 59 }
    }
    _schedule[daysOfWeekIndex].lapses.push(addTime)
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: _schedule
      }
    })
  }

  /**
   * Method to delete the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Number} index index of schedule time
   */
  const handleDeleteScheduleTime = (daysOfWeekIndex, index) => {
    const _schedule = [...schedule]
    _schedule[daysOfWeekIndex].lapses.splice(index, 1)
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: _schedule
      }
    })
  }

  /**
   * Method to control the business schedule time enable state
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleScheduleTimeActiveState = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    _schedule[daysOfWeekIndex].enabled = !_schedule[daysOfWeekIndex].enabled
    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: _schedule
      }
    })
  }

  /**
   * Method to update the business from the API
   */
  const handleUpdateBusinessClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const response = await ordering.businesses(business.id).save(formState.changes, {
        accessToken: session.token
      })
      setFormState({
        ...formState,
        changes: response.content.error ? formState.changes : {},
        result: response.content,
        loading: false
      })

      if (!response.content.error) {
        handleSuccessBusinessScheduleUpdate && handleSuccessBusinessScheduleUpdate(response.content.result)
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleSelectCopyTimes = (index, daysOfWeekIndex) => {
    let _selectedCopyDays = [...selectedCopyDays]
    if (!_selectedCopyDays.includes(index)) {
      _selectedCopyDays.push(index)
    } else {
      _selectedCopyDays = _selectedCopyDays.filter(el => el !== index)
    }
    setSelectedCopyDays(_selectedCopyDays)

    const _schedule = [...schedule]

    if (_selectedCopyDays.length) {
      for (const copyDay of _selectedCopyDays) {
        for (const laps of _schedule[copyDay].lapses) {
          _schedule[daysOfWeekIndex].lapses.push(laps)
        }
      }
      setSchedule(_schedule)
      setFormState({
        ...formState,
        changes: {
          schedule: _schedule
        }
      })
    }
  }

  useEffect(() => {
    if (Object.keys(formState.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState?.changes])

  useEffect(() => {
    setSchedule(business?.schedule)
  }, [business?.schedule])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            selectedCopyDays={selectedCopyDays}
            cleanSelectedCopyDays={cleanSelectedCopyDays}
            handleChangeTime={handleChangeTime}
            handleAddScheduleTime={handleAddScheduleTime}
            handleDeleteScheduleTime={handleDeleteScheduleTime}
            handleScheduleTimeActiveState={handleScheduleTimeActiveState}
            handleSelectCopyTimes={handleSelectCopyTimes}
          />
        )
      }
    </>
  )
}

BusinessSchedule.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Business, this must be contains an object with all business info
  */
  business: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessSchedule.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
