import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessMenuOptions = (props) => {
  const {
    business,
    menu,
    UIComponent
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [businessMenuState, setBusinessMenuState] = useState({ loading: false, error: null, menu: menu || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [orderTypeState, setOrderTypeSate] = useState({})
  const [selectedProductsIds, setSelectedProductsIds] = useState([])
  const [selectedCopyDays, setSelectedCopyDays] = useState([])
  const [schedule, setSchedule] = useState([])
  const [openAddScheduleIndex, setOpenAddScheduleInex] = useState(null)
  const [isConflict, setIsConflict] = useState(false)
  const [addScheduleTime, setAddScheduleTime] = useState({
    open: { hour: 0, minute: 0 },
    close: { hour: 23, minute: 59 }
  })

  /**
   * Clean selectedCopyDays
   */
  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Update business menu name and comment
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    const currentChanges = {
      [e.target.name]: e.target.value
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Method to contol order type selection
   * @param {String} orderType params key of order type
   */
  const handleCheckOrderType = (orderType) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [orderType]: !orderTypeState[orderType]
      }
    })
    setOrderTypeSate({ ...orderTypeState, [orderType]: !orderTypeState[orderType] })
  }

  /**
   * Method to control category selection
   * @param {*} categoryId category id
   */
  const handleClickCategory = (categoryId) => {
    const businessCategoryProducts = business.categories.find(category => category.id === categoryId).products
    const businessCategoryProductsIds = businessCategoryProducts.reduce((ids, product) => [...ids, product.id], [])
    let _selectedProductsIds = [...selectedProductsIds]
    if (businessCategoryProductsIds.every(elem => selectedProductsIds.includes(elem))) {
      _selectedProductsIds = _selectedProductsIds.filter(el => !businessCategoryProductsIds.includes(el))
    } else if (businessCategoryProductsIds.some(elem => selectedProductsIds.includes(elem))) {
      _selectedProductsIds = [...selectedProductsIds, ...businessCategoryProductsIds]
      _selectedProductsIds = [...new Set(_selectedProductsIds)]
    } else {
      _selectedProductsIds = [...selectedProductsIds, ...businessCategoryProductsIds]
    }
    setSelectedProductsIds(_selectedProductsIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        products: JSON.stringify(_selectedProductsIds)
      }
    })
  }

  /**
   * Method to control category selection
   * @param {Number} categoryId category id
   */
  const handleCheckCategory = (categoryId) => {
    const businessCategoryProducts = business.categories.find(category => category.id === categoryId).products
    const businessCategoryProductsIds = businessCategoryProducts.reduce((ids, product) => [...ids, product.id], [])
    let result
    if (businessCategoryProductsIds.every(elem => selectedProductsIds.includes(elem))) {
      result = 'all'
    } else if (businessCategoryProductsIds.some(elem => selectedProductsIds.includes(elem))) {
      result = 'some'
    } else {
      result = 'nothing'
    }
    return result
  }

  /**
   * Method to control prodcut selection
   * @param {Number} productId product id
   */
  const handleCheckProduct = (productId) => {
    let _selectedProductsIds = [...selectedProductsIds]
    if (_selectedProductsIds.includes(productId)) {
      _selectedProductsIds = _selectedProductsIds.filter(id => id !== productId)
    } else {
      _selectedProductsIds.push(productId)
    }
    setSelectedProductsIds(_selectedProductsIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        products: JSON.stringify(_selectedProductsIds)
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
        ...formState.changes,
        schedule: JSON.stringify(_schedule)
      }
    })
  }

  /**
   * Method to check valid schedule time
   */
  const isConflictScheduleTime = (lapses, index, value) => {
    for (let i = 0; i < lapses.length; i++) {
      if (i !== index) {
        if (convertMinutes(lapses[i].open) <= value && convertMinutes(lapses[i].close) >= value) {
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
        schedule: JSON.stringify(_schedule)
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
        schedule: JSON.stringify(_schedule)
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
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: parseInt(value), minute: addScheduleTime.open.minute })
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
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: addScheduleTime.open.hour, minute: parseInt(value) })
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
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: parseInt(value), minute: addScheduleTime.close.minute })
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
        conflict = isConflictScheduleTime(
          _schedule[daysOfWeekIndex].lapses,
          null,
          convertMinutes({ hour: addScheduleTime.close.hour, minute: parseInt(value) })
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

  /**
   * Method to add the schedule time
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleAddScheduleTime = (daysOfWeekIndex) => {
    const _schedule = [...schedule]
    const openConflict = isConflictScheduleTime(
      _schedule[daysOfWeekIndex].lapses,
      null,
      convertMinutes({ hour: addScheduleTime.open.hour, minute: addScheduleTime.open.minute })
    )
    const closeConflict = isConflictScheduleTime(
      _schedule[daysOfWeekIndex].lapses,
      null,
      convertMinutes({ hour: addScheduleTime.close.hour, minute: addScheduleTime.close.minute })
    )
    if (openConflict || closeConflict) {
      setIsConflict(true)
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime)
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setSchedule(_schedule)
      setFormState({
        ...formState,
        changes: {
          schedule: JSON.stringify(_schedule)
        }
      })
    }
  }

  /**
   * Method to update the busienss menu option from API
   */
  const handleUpdateBusinessMenuOption = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState?.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus/${menu?.id}`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: false,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
    }
  }

  /**
   * Method to add the busienss menu option from API
   */
  const handleAddBusinessMenuOption = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState?.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus`, requestOptions)
      const content = await response.json()

      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: {
          error: false,
          result: content.result
        },
        loading: false
      })

      if (!content.error) {
      }
    } catch (err) {
      setFormState({ ...formState, loading: false, result: { error: true, result: err.message } })
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
          schedule: JSON.stringify(_schedule)
        }
      })
    }
  }

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
    setBusinessMenuState({ ...businessMenuState, menu: menu || {} })
    setOrderTypeSate({
      delivery: menu?.delivery,
      pickup: menu?.pickup,
      eatin: menu?.eatin,
      curbside: menu?.curbside,
      driver_thru: menu?.driver_thru
    })
    if (Object.keys(menu).length) {
      const _selectedProductsIds = menu.products.reduce((ids, product) => [...ids, product.id], [])
      setSelectedProductsIds(_selectedProductsIds)
      setSchedule(menu?.schedule)
    } else {
      setSelectedProductsIds([])
      setSchedule([
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
        { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] }
      ])
    }
  }, [menu])
  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMenuState={businessMenuState}
            formState={formState}
            selectedProductsIds={selectedProductsIds}
            handleChangeInput={handleChangeInput}
            handleCheckOrderType={handleCheckOrderType}
            handleCheckCategory={handleCheckCategory}
            handleClickCategory={handleClickCategory}
            handleCheckProduct={handleCheckProduct}
            handleUpdateBusinessMenuOption={handleUpdateBusinessMenuOption}
            handleAddBusinessMenuOption={handleAddBusinessMenuOption}
            scheduleTimes={schedule}
            addScheduleTime={addScheduleTime}
            setAddScheduleTime={setAddScheduleTime}
            handleScheduleTimeActiveState={handleScheduleTimeActiveState}
            handleChangeTime={handleChangeTime}
            handleDeleteScheduleTime={handleDeleteScheduleTime}
            handleChangeAddScheduleTime={handleChangeAddScheduleTime}
            handleAddScheduleTime={handleAddScheduleTime}
            openAddScheduleIndex={openAddScheduleIndex}
            setOpenAddScheduleInex={setOpenAddScheduleInex}
            isConflict={isConflict}
            setIsConflict={setIsConflict}
            selectedCopyDays={selectedCopyDays}
            cleanSelectedCopyDays={cleanSelectedCopyDays}
            handleSelectCopyTimes={handleSelectCopyTimes}
          />
        )
      }
    </>
  )
}

BusinessMenuOptions.propTypes = {
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

BusinessMenuOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
