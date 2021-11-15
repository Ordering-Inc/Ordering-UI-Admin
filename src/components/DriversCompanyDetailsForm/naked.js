import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const DriversCompanyDetails = (props) => {
  const {
    UIComponent,
    driversCompaniesState,
    setDriversCompaniesState,
    driversCompany
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [changesState, setChangesState] = useState({})
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [isConflict, setIsConflict] = useState(false)
  const [isTimeChangeError, setIsTimeChangeError] = useState(false)
  const [schedule, setSchedule] = useState(null)
  const [addScheduleTime, setAddScheduleTime] = useState({
    open: { hour: 0, minute: 0 },
    close: { hour: 23, minute: 59 }
  })
  const [openAddSchedule, setOpenAddSchedule] = useState({})
  const [selectedCopyDays, setSelectedCopyDays] = useState([])

  /**
   * Clean selectedCopyDays
   */
  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Method to update the selected drivers company from API
   * @param {Number} driverCompanyId
   */
  const handleUpdateDriversCompany = async (changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const _changes = { ...changes }
      if (_changes?.schedule) {
        _changes.schedule = JSON.stringify(_changes?.schedule)
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(_changes)
      }
      const response = await fetch(`${ordering.root}/driver_companies/${driversCompany?.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const companies = driversCompaniesState.companies.filter(company => {
          if (company.id === driversCompany?.id) {
            Object.assign(company, content.result)
          }
          return true
        })
        setDriversCompaniesState({ ...driversCompaniesState, companies: companies })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
        setChangesState({})
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add new drivers company from API
   */
  const handleAddDriversCompany = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })

      const schedule = []
      for (var i = 0; i < 7; i++) {
        schedule.push({
          enabled: true,
          lapses: [
            {
              open: {
                hour: 0,
                minute: 0
              },
              close: {
                hour: 23,
                minute: 45
              }
            }
          ]
        })
      }
      const extraAttributes = {
        enabled: true,
        priority: '0',
        fixed_cost_per_km: 0,
        fixed_cost_delivery: 0,
        percentage_cost_per_order_subtotal: 0,
        schedule: JSON.stringify(schedule)
      }
      const changes = { ...changesState, ...extraAttributes }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/driver_companies`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const companies = [...driversCompaniesState.companies, content.result]
        setDriversCompaniesState({ ...driversCompaniesState, companies: companies })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
        setChangesState({})
        props.onClose && props.onClose()
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

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

  const handleChangesState = (key, val) => {
    setChangesState({
      ...changesState,
      [key]: val
    })
  }

  const convertMinutes = ({ hour, minute }) => {
    return hour * 60 + minute
  }

  const handleOpenAddSchedule = (daysOfWeekIndex) => {
    setAddScheduleTime({
      open: { hour: 0, minute: 0 },
      close: { hour: 23, minute: 59 }
    })
    setOpenAddSchedule({
      [daysOfWeekIndex]: true
    })
  }

  /**
   * Method to change the add schedule time
   * @param {String} changeTime change time
   * @param {Boolean} isOpen open or close
   */
  const handleChangeAddScheduleTime = (changeTime, isOpen) => {
    const hour = parseInt(changeTime.split(':')[0])
    const minute = parseInt(changeTime.split(':')[1])
    if (isOpen) {
      setAddScheduleTime({
        ...addScheduleTime,
        open: { hour: hour, minute: minute }
      })
    } else {
      setAddScheduleTime({
        ...addScheduleTime,
        close: { hour: hour, minute: minute }
      })
    }
  }

  /**
   * Method to add new schedule on the week day
   * @param {Nuumber} daysOfWeekIndex week day
   */
  const handleAddSchedule = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    const currentLapses = [..._schedule[daysOfWeekIndex].lapses]
    const conflict = isCheckConflict(currentLapses, addScheduleTime, null)

    if (conflict) {
      setIsConflict(true)
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime)
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setSchedule(_schedule)
      setChangesState({
        ...changesState,
        schedule: _schedule
      })
      setOpenAddSchedule({
        [daysOfWeekIndex]: false
      })
    }
  }

  /**
   * Method to delete the schedule time on the week day
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} index lapse index
   */
  const handleDeleteSchedule = (daysOfWeekIndex, index) => {
    const _schedule = [...schedule]
    _schedule[daysOfWeekIndex].lapses.splice(index, 1)
    setSchedule(_schedule)
    setChangesState({
      ...changesState,
      schedule: _schedule
    })
  }

  /**
   * Method to change the schedule time on the week day
   * @param {String} changeTime change time
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} lapseIndex lapse no
   * @param {Boolean} isOpen open or close
   */
  const handleChangeScheduleTime = (changeTime, daysOfWeekIndex, lapseIndex, isOpen) => {
    const _schedule = [...schedule]
    const currentLapses = [..._schedule[daysOfWeekIndex].lapses]

    const hour = parseInt(changeTime.split(':')[0])
    const minute = parseInt(changeTime.split(':')[1])

    let changeScheduleTime
    let _isTimeChangeError = false
    if (isOpen) {
      _isTimeChangeError = convertMinutes({ hour, minute }) >= convertMinutes(currentLapses[lapseIndex].close)
      if (_isTimeChangeError) {
        setIsTimeChangeError(true)
      } else {
        changeScheduleTime = {
          open: {
            hour: hour,
            minute: minute
          },
          close: currentLapses[lapseIndex].close
        }
      }
    } else {
      _isTimeChangeError = convertMinutes(currentLapses[lapseIndex].open) >= convertMinutes({ hour, minute })
      if (_isTimeChangeError) {
        setIsTimeChangeError(true)
      } else {
        changeScheduleTime = {
          open: currentLapses[lapseIndex].open,
          close: {
            hour: hour,
            minute: minute
          }
        }
      }
    }

    if (!_isTimeChangeError) {
      const conflict = isCheckConflict(currentLapses, changeScheduleTime, null)
      if (conflict) {
        setIsConflict(true)
      } else {
        _schedule[daysOfWeekIndex].lapses[lapseIndex] = changeScheduleTime
        _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
        setChangesState({
          ...changesState,
          schedule: _schedule
        })
        setSchedule(_schedule)
      }
    }
  }

  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleSelectCopyTimes = (index) => {
    setSelectedCopyDays([...selectedCopyDays, index])
  }
  /**
   * Method to apply copy times
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleApplyScheduleCopyTimes = (daysOfWeekIndex) => {
    const _schedule = schedule.map((option, index) => {
      if (selectedCopyDays.includes(index)) {
        return schedule[daysOfWeekIndex]
      }
      return option
    })
    setSchedule(_schedule)
    setChangesState({
      ...changesState,
      schedule: _schedule
    })
  }

  const handleEnabledSchedule = (daysOfWeekIndex, checked) => {
    const _schedule = [...schedule]
    _schedule[daysOfWeekIndex].enabled = checked
    setSchedule(_schedule)
    setChangesState({
      ...changesState,
      schedule: _schedule
    })
  }

  useEffect(() => {
    if (driversCompany) {
      setSchedule(driversCompany?.schedule)
    }
  }, [driversCompany])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            cleanChagesState={() => setChangesState({})}
            changesState={changesState}
            actionState={actionState}
            isConflict={isConflict}
            setIsConflict={setIsConflict}
            isTimeChangeError={isTimeChangeError}
            setIsTimeChangeError={setIsTimeChangeError}
            addScheduleTime={addScheduleTime}
            handleChangesState={handleChangesState}
            handleUpdateDriversCompany={handleUpdateDriversCompany}
            handleAddDriversCompany={handleAddDriversCompany}
            handleAddSchedule={handleAddSchedule}
            handleChangeScheduleTime={handleChangeScheduleTime}
            handleChangeAddScheduleTime={handleChangeAddScheduleTime}
            openAddSchedule={openAddSchedule}
            handleOpenAddSchedule={handleOpenAddSchedule}
            handleDeleteSchedule={handleDeleteSchedule}
            handleEnabledSchedule={handleEnabledSchedule}
            driverCompanySchedule={schedule}

            cleanSelectedCopyDays={cleanSelectedCopyDays}
            selectedCopyDays={selectedCopyDays}
            handleSelectCopyTimes={handleSelectCopyTimes}
            handleApplyScheduleCopyTimes={handleApplyScheduleCopyTimes}
          />
        )
      }
    </>
  )
}

DriversCompanyDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers company details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers company details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers company details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers company details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversCompanyDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
