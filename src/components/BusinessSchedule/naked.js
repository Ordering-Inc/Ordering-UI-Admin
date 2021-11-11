import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import {
  useSession,
  useApi,
  useToast,
  ToastType,
  useLanguage
} from 'ordering-components-admin'

export const BusinessSchedule = (props) => {
  const {
    business,
    UIComponent,
    handleSuccessBusinessScheduleUpdate
  } = props
  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [schedule, setSchedule] = useState([])
  const [selectedCopyDays, setSelectedCopyDays] = useState([])
  const [isConflict, setIsConflict] = useState(false)
  const [openAddScheduleIndex, setOpenAddScheduleInex] = useState(null)
  const [addScheduleTime, setAddScheduleTime] = useState({
    open: { hour: 0, minute: 0 },
    close: { hour: 23, minute: 59 }
  })

  /**
   * Clean selectedCopyDays
   */
  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Method to check contain conflict
   */
  const isCheckConflict = (lapses, newSchedule, index) => {
    const openNew = newSchedule.open.hour * 60 + newSchedule.open.minute
    const closeNew = newSchedule.close.hour * 60 + newSchedule.close.minute
    for (let i = 0; i < lapses.length; i++) {
      if (i !== index) {
        const openOld = lapses[i].open.hour * 60 + lapses[i].open.minute
        const closeOld = lapses[i].close.hour * 60 + lapses[i].close.minute

        if (openNew <= openOld && closeNew >= closeOld) return true
        if (openNew < openOld && closeNew > openOld) return true
        if (openNew > openOld && closeNew < closeOld) return true
        if (openNew < closeOld && closeNew > closeOld) return true
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
    const selectedLaps = _schedule[daysOfWeekIndex].lapses[index]

    if (isOpen) {
      if (isHour) {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: { hour: parseInt(value), minute: selectedLaps.open.minute },
            close: selectedLaps.close
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.hour = parseInt(value)
        }
      } else {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: { hour: selectedLaps.open.hour, minute: parseInt(value) },
            close: selectedLaps.close
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].open.minute = parseInt(value)
        }
      }
    } else {
      if (isHour) {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: selectedLaps.open,
            close: { hour: parseInt(value), minute: selectedLaps.close.minute }
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.hour = parseInt(value)
        }
      } else {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: selectedLaps.open,
            close: { hour: selectedLaps.close.hour, minute: parseInt(value) }
          },
          index
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          _schedule[daysOfWeekIndex].lapses[index].close.minute = parseInt(value)
        }
      }
    }

    if (!conflict) {
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setSchedule(_schedule)
      setFormState({
        ...formState,
        changes: {
          schedule: _schedule
        }
      })
    }
  }

  /**
   * Method to add the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleAddScheduleTime = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    const conflict = isCheckConflict(_schedule[daysOfWeekIndex].lapses, addScheduleTime, null)
    if (conflict) {
      setIsConflict(true)
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime)
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setSchedule(_schedule)
      setFormState({
        ...formState,
        changes: {
          schedule: _schedule
        }
      })
    }
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
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const changes = { ...formState.changes }
      const { content: { error, result } } = await ordering.businesses(business.id).save(changes, {
        accessToken: session.token
      })
      setOpenAddScheduleInex(null)
      if (!error) {
        handleSuccessBusinessScheduleUpdate && handleSuccessBusinessScheduleUpdate(result)
        showToast(ToastType.Success, t('SCHEDULE_UPDATED', 'Schedule updated'))
      }
      setFormState({
        ...formState,
        changes: error ? formState.changes : {},
        result: {
          error: false,
          result: result
        },
        loading: false
      })
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
    const _schedule = [...schedule]

    if (!_selectedCopyDays.includes(index)) {
      let conflict = false
      for (let i = 0; i < _schedule[index].lapses.length; i++) {
        if (isCheckConflict(_schedule[daysOfWeekIndex].lapses, _schedule[index].lapses[i], null)) {
          conflict = true
        }
      }
      if (conflict) {
        setIsConflict(true)
        return
      }
      _selectedCopyDays.push(index)

      for (const laps of _schedule[index].lapses) {
        _schedule[daysOfWeekIndex].lapses.push(laps)
      }

      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
    } else {
      _selectedCopyDays = _selectedCopyDays.filter(el => el !== index)

      const newLapses = _schedule[daysOfWeekIndex].lapses.filter(laps => {
        for (const deleteLaps of _schedule[index].lapses) {
          if (convertMinutes(laps.open) === convertMinutes(deleteLaps.open) && convertMinutes(laps.close) === convertMinutes(deleteLaps.close)) {
            return false
          }
        }
        return true
      })
      _schedule[daysOfWeekIndex].lapses = newLapses
    }

    setSelectedCopyDays(_selectedCopyDays)

    setSchedule(_schedule)
    setFormState({
      ...formState,
      changes: {
        schedule: _schedule
      }
    })
  }

  /**
   * Update schedule time
   * @param {Number} daysOfWeekIndex index of week days
   * @param {Boolean} isOpen open time if true, else close time
   * @param {Boolean} isHour hour if true, else minute
   * @param {String} value changed value
   */
  const handleChangeAddScheduleTime = (daysOfWeekIndex, isOpen, isHour, value) => {
    const _schedule = [...schedule]
    let conflict

    if (isOpen) {
      if (isHour) {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: { hour: parseInt(value), minute: addScheduleTime.open.minute },
            close: addScheduleTime.close
          },
          null
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          setAddScheduleTime({
            ...addScheduleTime,
            open: {
              ...addScheduleTime.open,
              hour: parseInt(value)
            }
          })
        }
      } else {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: { hour: addScheduleTime.open.hour, minute: parseInt(value) },
            close: addScheduleTime.close
          },
          null
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          setAddScheduleTime({
            ...addScheduleTime,
            open: {
              ...addScheduleTime.open,
              minute: parseInt(value)
            }
          })
        }
      }
    } else {
      if (isHour) {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: addScheduleTime.open,
            close: { hour: parseInt(value), minute: addScheduleTime.close.minute }
          },
          null
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          setAddScheduleTime({
            ...addScheduleTime,
            close: {
              ...addScheduleTime.close,
              hour: parseInt(value)
            }
          })
        }
      } else {
        conflict = isCheckConflict(
          _schedule[daysOfWeekIndex].lapses,
          {
            open: addScheduleTime.open,
            close: { hour: addScheduleTime.close.hour, minute: parseInt(value) }
          },
          null
        )
        if (conflict) {
          setIsConflict(true)
        } else {
          setAddScheduleTime({
            ...addScheduleTime,
            close: {
              ...addScheduleTime.close,
              minute: parseInt(value)
            }
          })
        }
      }
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
            addScheduleTime={addScheduleTime}
            setAddScheduleTime={setAddScheduleTime}
            handleChangeAddScheduleTime={handleChangeAddScheduleTime}
            openAddScheduleIndex={openAddScheduleIndex}
            setOpenAddScheduleInex={setOpenAddScheduleInex}
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
