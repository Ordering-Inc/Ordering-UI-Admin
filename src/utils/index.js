import React from 'react'
import FaCcMastercard from '@meronex/icons/fa/FaCcMastercard'
import FaCcVisa from '@meronex/icons/fa/FaCcVisa'
import FaCreditCard from '@meronex/icons/fa/FaCreditCard'
import moment from 'moment'
import { useLanguage } from 'ordering-components-admin'

export const optimizeImage = (url, params, fallback) => {
  if (!url && fallback) return fallback
  params = params && params.length > 0 ? `,${params}` : ''
  if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
    var parts = url.split('upload')
    url = `${parts[0]}upload/f_auto,q_auto${params}${parts[1]}`
  }
  return url
}

export const getIconCard = (brand = '') => {
  const value = brand?.toLowerCase()
  switch (value) {
    case 'visa':
      return <FaCcVisa />
    case 'mastercard':
      return <FaCcMastercard />
    default:
      return <FaCreditCard />
  }
}

/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const DriverTipsOptions = [0, 10, 15, 20, 25]

/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

/**
 * Function to do scroll of one element to another
 * @param {*} element = parent element
 * @param {*} to = position Top of child element
 * @param {*} duration = time to animation
 */
export const scrollTo = (element, to, duration) => {
  const start = element.scrollTop
  const change = to - start
  let currentTime = 0
  const increment = 20

  const animateScroll = () => {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    element.scrollTop = val
    if (currentTime < duration && val > 0) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */
export const formatUrlVideo = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  const id = (match && match[7].length === 11) ? match[7] : false
  return `https://www.youtube-nocookie.com/embed/${id}`
}

/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */
export const convertHoursToMinutes = (time) => {
  if (!time) return '0min'
  const [hour, minute] = time.split(':')
  const result = (parseInt(hour, 10) * 60) + parseInt(minute, 10)
  return `${result}min`
}

/**
 * Function to convert star rate in width to display
 * @param {int} qualification star rate or qualification
 */
export const getStarWidth = (qualification) => {
  if (qualification) {
    return qualification / 5 * 100 + '%'
  } else {
    return '0%'
  }
}

/**
 * Function to calculate differnece with current time in minutes
 * @param {string} time past time
 */
export const getAgoMinutes = (time) => {
  const totalMinutes = ((moment().utc() - moment(time)) / 1000 / 60).toFixed(0)
  const totalHours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes - totalHours * 60
  const days = Math.floor(totalHours / 24)
  const hours = totalHours - days * 24
  if (days > 0) {
    return `-${days} days ${hours}:${minutes} hrs`
  } else if (hours > 0) {
    return `-${hours}:${minutes} hrs`
  } else return `-00:${minutes} hrs`
}

/**
 * Function to transform bytes to kb
 * @param {number} bytes for transform
 *
 */
export const bytesConverter = bytes => {
  return Math.floor(bytes / 1024)
}

/**
 * List of fields with correct order
 */
export const fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email']

/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */
export const sortInputFields = ({ fields, values }) => {
  let fieldsBase = fields
  const fieldsSorted = []
  const fieldsArray = Array.isArray(values) ? values : Object.values(values)

  if (!fieldsBase) {
    fieldsBase = fieldsToSort
  }

  fieldsBase.forEach(f => {
    fieldsArray.forEach(field => {
      if (f === field.code) {
        fieldsSorted.push(field)
      }
    })
  })
  return fieldsSorted
}

/**
 * Function to covert seconds into remain hours
 * @param {Number} seconds
 */
export const getHours = (seconds) => {
  return (seconds * 1) / 3600 > 1 ? Math.floor((seconds * 1) / 3600) : 0
}

/**
 * Function to covert seconds into remain Minutes
 * @param {Number} seconds
 */
export const getMinutes = (seconds) => {
  return Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60)
}

/**
 * Function to covert seconds into remain Seconds
 * @param {Number} seconds
 */
export const getSeconds = (seconds) => {
  const remain = seconds - Math.floor(seconds / 3600) * 3600
  return Math.floor(remain - Math.floor(remain / 60) * 60)
}

/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */
export const verifyDecimals = (value, parser) => {
  if (value % 1 === 0) {
    return value
  } else {
    return parser(value)
  }
}

/**
 * Fuctions to control the local storage
 */
export const getStorageItem = async (storageKey, isJson) => {
  const value = await window.localStorage.getItem(storageKey)
  if (isJson && typeof value !== 'object') {
    return JSON.parse(value)
  }
  return value
}
export const setStorageItem = async (key, val, isJson) => {
  const value = isJson ? JSON.stringify(val) : val
  await window.localStorage.setItem(key, value)
}
export const removeStorageItem = async (key) => {
  await window.localStorage.removeItem(key)
}

/**
 * Fuctions to convert formatted time from seconds
 */
export const convertHMS = (value) => {
  const sec = parseInt(value, 10) // convert value to number if it's string
  const absSec = Math.abs(sec)
  let hours = Math.floor(absSec / 3600) // get hours
  let minutes = Math.floor((absSec - (hours * 3600)) / 60) // get minutes
  let seconds = absSec - (hours * 3600) - (minutes * 60) //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) { hours = '0' + hours }
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }
  return sec < 0 ? '-' : '' + hours + ':' + minutes + ':' + seconds // Return is HH : MM : SS
}

/**
 * List shape for ribbon
 */
export const shape = {
  rectangle: 'rectangle',
  rectangleRound: 'rectangle_round',
  capsuleShape: 'capsule_shape'
}

/**
 * default value for bitton
 */
export const ribbonValues = {
  color: '#0083FE',
  text: 'ribbon',
  shape: 'rectangle',
  enabled: false
}
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */
export const formatSeconds = (seconds) => {
  // Hours, minutes and seconds
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)

  // Output like '1:01' or '4:03:59' or '123:03:59'
  let ret = ''
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
  }
  ret += '' + mins + ':' + (secs < 10 ? '0' : '')
  ret += '' + secs
  return ret
}

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
export const checkSiteUrl = (url, fallback) => {
  if (!url) return fallback
  return url[url?.length - 1] === '/' ? url : `${url}/`
}

/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */
export const reviewCommentList = (type) => {
  const [, t] = useLanguage()

  const reviews = {
    1: {
      1: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_1', "What went wrong?"),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_1_0', "Not handled with care") },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_1_1', "Poor communication") },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_1_2', "COVID-19 issue") },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_1_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_1_4', "Rude") },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_1_5', "Not on-time") }
        ]
      },
      2: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_2', "What went wrong?"),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_2_0', "Not handled with care") },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_2_1', "Poor communication") },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_2_2', "COVID-19 issue") },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_2_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_2_4', "Rude") },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_2_5', "Not on-time") }
        ]
      },
      3: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_3', "What could have been better?"),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_3_0', "Not handled with care") },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_3_1', "Poor communication") },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_3_2', "COVID-19 issue") },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_3_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_3_4', "Rude") },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_3_5', "Not on-time") }
        ]
      },
      4: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_4', " Tell us more"),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_4_0', "Not handled with care") },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_4_1', "Poor communication") },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_4_2', "COVID-19 issue") },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_4_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_4_4', "Rude") },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_4_5', "Not on-time") }
        ]
      },
      5: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_5', "What went well?"),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_5_0', "Good communication") },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_5_1', "Friendly") },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_5_2', "Above and beyond") }
        ]
      }
    }
  }

  return reviews[type]
}

/**
 * function to manage order reject comment list
 * @param {string} param0 type of orders to return
 * @returns object with orders dictionary
 */
export const orderRejectCommentList = (status) => {
  const messages = {
    6: [// on reject order
      'very_far_away',
      'driver_vehicle_incident',
      'destination_unreacheable',
      'unavailable_driver',
      'other'
    ],
    9: [// on force pickup status
      'forgot_complete_location',
      'not_internet_conection',
      'other'
    ],
    10: [// on pickup failed by driver
      'very_far_away',
      'driver_vehicle_incident',
      'destination_unreacheable',
      'store_closed',
      'unavailable_driver',
      'other'
    ],
    11: [// on force delivery status
      'forgot_complete_location',
      'not_internet_conection',
      'other'
    ],
    12: [// on delivery failed by driver
      'very_far_away',
      'driver_vehicle_incident',
      'destination_unreacheable',
      'recipient_unavailable',
      'incorrect_missing_items',
      'refused_damage',
      'other'
    ],
    14: [// on order not ready
      'store_recieve_order_late',
      'store_busy',
      'other'
    ]
  }

  if (!messages[parseInt(status)]) return []

  const list = messages[status].map((val, i) => ({ key: i, value: val, content: val }))

  return list
}

export const widgetURL = 'https://orderingweb.ordering.co/'
