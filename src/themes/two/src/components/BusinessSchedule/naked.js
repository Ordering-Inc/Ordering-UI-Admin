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
  const [isConflict, setIsConflict] = useState(false)

  /**
   * Clean selectedCopyDays
   */
  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Method to check valid schedule time
   */
  const isConflictScheduleTime = (lapses, index, value) => {
    for (let i = 0; i < lapses.length; i++) {
      if (i !== index) {
        if (convertMinutes(lapses[i].open) < value && convertMinutes(lapses[i].close) > value) {
          return true
        }
      }
    }
    return false
  }

  const convertMinutes = ({ hour, minute }) => {
    return hour * 60 + minute
  }

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
    let conflict
    if (isOpen) {
      if (isHour) {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: parseInt(value), minute: _schedule[daysOfWeekIndex].lapses[index].open.minute })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.hour = parseInt(value)
        }
      } else {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: _schedule[daysOfWeekIndex].lapses[index].open.hour, minute: parent(value) })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.minute = parseInt(value)
        }
      }
    } else {
      if (isHour) {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: parseInt(value), minute: _schedule[daysOfWeekIndex].lapses[index].close.minute })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.hour = parseInt(value)
        }
      } else {
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          index,
          convertMinutes({ hour: _schedule[daysOfWeekIndex].lapses[index].close.hour, minute: parent(value) })
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.minute = parseInt(value)
        }
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
      const changes = { ...formState.changes }
      const { content: { error, result } } = await ordering.businesses(business.id).save(changes, {
        accessToken: session.token
      })
      setFormState({
        ...formState,
        changes: error ? formState.changes : {},
        result: {
          error: false,
          result: result
        },
        loading: false
      })

      if (!error) {
        handleSuccessBusinessScheduleUpdate && handleSuccessBusinessScheduleUpdate(result)
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
    if (Object.keys(formState.changes).length === 0 || isConflict) return
    handleUpdateBusinessClick()
  }, [formState?.changes, isConflict])

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
            isConflict={isConflict}
            setIsConflict={setIsConflict}
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
