import React, { useCallback, useRef } from 'react'
import FaCcMastercard from '@meronex/icons/fa/FaCcMastercard'
import FaCcVisa from '@meronex/icons/fa/FaCcVisa'
import FaCreditCard from '@meronex/icons/fa/FaCreditCard'
import moment from 'moment'
import { useLanguage, CODES } from 'ordering-components-admin'
import { CURRENCY } from '../config/currency.js'

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
 * Function to get unique id
 */
export const getUniqueId = () => {
  const dateString = Date.now().toString(36)
  const randomness = Math.random().toString(36).substr(2)
  return dateString + randomness
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
 * Function to get language settins by language code
 * @param {string} code // language code
 * @param {any} locales // language settings
 */
export const getLocale = (code, locales) => {
  let locale = locales?.[code]
  if (code === 'es-419-1' || code === 'es-419-2') locale = locales?.es
  if (code === 'zh-CN') locale = locales?.zhCN
  if (code === 'ar') locale = locales?.arSA
  if (code === 'kn') locale = locales?.ta
  if (code === 'km') locale = locales?.th
  if (!locale) return locales?.enUS
  return locale
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

export const findExitingCode = (countryCode) => {
  const code = CODES.find(code => code.countryCode === (countryCode || '').toUpperCase())
  return code?.countryCode
}

export const findExitingCountryPhoneCode = (countryCode) => {
  const code = CODES.find(code => code.countryCode === (countryCode || '').toUpperCase())
  return code?.phoneCode
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
  return sec < 0 ? '-' : '' + (hours === '00' ? '' : hours + ':') + minutes + ':' + seconds // Return is HH : MM : SS
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
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
export const checkPreSiteUrl = (url, fallback) => {
  if (!url) return fallback
  return url[0] === '/' ? url : `/${url}`
}

/**
 * Function to validate URL
 * @param {string} url URL of page
 */
export const checkValidUrlFormat = (url) => {
  if (!url) return
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator

  return pattern.test(url)
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
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_1_0', 'Not handled with care') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_1_1', 'Poor communication') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_1_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_1_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_1_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_1_5', 'Not on-time') }
        ]
      },
      2: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_2_0', 'Not handled with care') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_2_1', 'Poor communication') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_2_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_2_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_2_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_2_5', 'Not on-time') }
        ]
      },
      3: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_3_0', 'Not handled with care') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_3_1', 'Poor communication') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_3_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_3_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_3_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_3_5', 'Not on-time') }
        ]
      },
      4: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_4_0', 'Not handled with care') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_4_1', 'Poor communication') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_4_2', 'COVID-19 issue') },
          { key: 3, content: t('CUSTOMER_QUICK_COMMENT_4_3', "Didn't follow instructions") },
          { key: 4, content: t('CUSTOMER_QUICK_COMMENT_4_4', 'Rude') },
          { key: 5, content: t('CUSTOMER_QUICK_COMMENT_4_5', 'Not on-time') }
        ]
      },
      5: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [
          { key: 0, content: t('CUSTOMER_QUICK_COMMENT_5_0', 'Good communication') },
          { key: 1, content: t('CUSTOMER_QUICK_COMMENT_5_1', 'Friendly') },
          { key: 2, content: t('CUSTOMER_QUICK_COMMENT_5_2', 'Above and beyond') }
        ]
      }
    }
  }

  return reviews[type]
}

export const orderStatus = [
  { key: 0, value: 'Pending Order', slug: 'PENDING_ORDER', percentage: 10 },
  { key: 1, value: 'Completed by admin', slug: 'COMPLETED_BY_ADMIN', percentage: 100 },
  { key: 2, value: 'Reject by admin', slug: 'REJECT_BY_ADMIN', percentage: 0 },
  { key: 3, value: 'Driver arrived by business', slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
  { key: 4, value: 'Preparation Completed', slug: 'PREPARATION_COMPLETED', percentage: 20 },
  { key: 5, value: 'Reject by business', slug: 'REJECT_BY_BUSINESS', percentage: 0 },
  { key: 6, value: 'Reject by driver', slug: 'REJECT_BY_DRIVER', percentage: 0 },
  { key: 7, value: 'Accepted by business', slug: 'ACCEPTED_BY_BUSINESS', percentage: 15 },
  { key: 8, value: 'Accepted by driver', slug: 'ACCEPTED_BY_DRIVER', percentage: 40 },
  { key: 9, value: 'Pick up completed by driver', slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 70 },
  { key: 10, value: 'Pick up Failed by driver', slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
  { key: 11, value: 'Delivery completed by driver', slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
  { key: 12, value: 'Delivery Failed by driver', slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
  { key: 13, value: 'Preorder', slug: 'PREORDER', percentage: 0 },
  { key: 14, value: 'Order not ready', slug: 'ORDER_NOT_READY', percentage: 15 },
  { key: 15, value: 'Pickup completed by customer', slug: 'PICKUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
  { key: 16, value: 'Canceled by customer', slug: 'CANCELED_BY_CUSTOMER', percentage: 0 },
  { key: 17, value: 'Not picked by customer', slug: 'NOT_PICKED_BY_CUSTOMER', percentage: 0 },
  { key: 18, value: 'Driver almost arrived to business', slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 50 },
  { key: 19, value: 'Driver almost arrived to customer', slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', percentage: 90 },
  { key: 20, value: 'Customer almost arrived to business', slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 90 },
  { key: 21, value: 'Customer arrived to business', slug: 'CUSTOMER_ARRIVED_TO_BUSINESS', percentage: 90 },
  { key: 22, value: 'Looking for driver', slug: 'ORDER_LOOKING_FOR_DRIVER', percentage: 30 },
  { key: 23, value: 'Driver on way', slug: 'ORDER_DRIVER_ON_WAY', percentage: 80 },
  { key: 24, value: 'Driver waiting for order', slug: 'ORDER_STATUS_DRIVER_WAITING_FOR_ORDER', percentage: 25 },
  { key: 25, value: 'Accepted by driver company', slug: 'ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY', percentage: 15 },
  { key: 26, value: 'Driver arrived to customer', slug: 'ORDER_DRIVER_ARRIVED_CUSTOMER', percentage: 80 }
]

export const getOrderStatusPrefix = (s, dictionary, prefixForVariable = '') => {
  if (!dictionary) return s

  const orderStatus = {
    0: dictionary?.[prefixForVariable ? `${prefixForVariable}_PENDING` : 'PENDING'] ?? 'Pending',
    1: dictionary?.[prefixForVariable ? `${prefixForVariable}_COMPLETED_BY_ADMIN` : 'COMPLETED_BY_ADMIN'] ?? 'Completed by admin',
    2: dictionary?.[prefixForVariable ? `${prefixForVariable}_REJECTED` : 'REJECTED'] ?? 'Rejected',
    3: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_STATUS_IN_BUSINESS` : 'ORDER_STATUS_IN_BUSINESS'] ?? 'Driver arrived to business',
    4: dictionary?.[prefixForVariable ? `${prefixForVariable}_PREPARATION_COMPLETED` : 'PREPARATION_COMPLETED'] ?? 'Preparation Completed',
    5: dictionary?.[prefixForVariable ? `${prefixForVariable}_REJECTED_BY_BUSINESS` : 'REJECTED_BY_BUSINESS'] ?? 'Rejected by business',
    6: dictionary?.[prefixForVariable ? `${prefixForVariable}_REJECTED_BY_DRIVER` : 'REJECTED_BY_DRIVER'] ?? 'Rejected by Driver',
    7: dictionary?.[prefixForVariable ? `${prefixForVariable}_ACCEPTED_BY_BUSINESS` : 'ACCEPTED_BY_BUSINESS'] ?? 'Accepted by business',
    8: dictionary?.[prefixForVariable ? `${prefixForVariable}_ACCEPTED_BY_DRIVER` : 'ACCEPTED_BY_DRIVER'] ?? 'Accepted by driver',
    9: dictionary?.[prefixForVariable ? `${prefixForVariable}_PICK_UP_COMPLETED_BY_DRIVER` : 'PICK_UP_COMPLETED_BY_DRIVER'] ?? 'Pick up completed by driver',
    10: dictionary?.[prefixForVariable ? `${prefixForVariable}_PICK_UP_FAILED_BY_DRIVER` : 'PICK_UP_FAILED_BY_DRIVER'] ?? 'Pick up Failed by driver',
    11: dictionary?.[prefixForVariable ? `${prefixForVariable}_DELIVERY_COMPLETED_BY_DRIVER` : 'DELIVERY_COMPLETED_BY_DRIVER'] ?? 'Delivery completed by driver',
    12: dictionary?.[prefixForVariable ? `${prefixForVariable}_DELIVERY_FAILED_BY_DRIVER` : 'DELIVERY_FAILED_BY_DRIVER'] ?? 'Delivery Failed by driver',
    13: dictionary?.[prefixForVariable ? `${prefixForVariable}_PREORDER` : 'PREORDER'] ?? 'PreOrder',
    14: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_NOT_READY` : 'ORDER_NOT_READY'] ?? 'Order not ready',
    15: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER` : 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER'] ?? 'Order picked up completed by customer',
    16: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_STATUS_CANCELLED_BY_CUSTOMER` : 'ORDER_STATUS_CANCELLED_BY_CUSTOMER'] ?? 'Order cancelled by customer',
    17: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_NOT_PICKEDUP_BY_CUSTOMER` : 'ORDER_NOT_PICKEDUP_BY_CUSTOMER'] ?? 'Order not picked up by customer',
    18: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS` : 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS'] ?? 'Driver almost arrived to business',
    19: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER` : 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER'] ?? 'Driver almost arrived to customer',
    20: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS` : 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS'] ?? 'Customer almost arrived to business',
    21: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_CUSTOMER_ARRIVED_BUSINESS` : 'ORDER_CUSTOMER_ARRIVED_BUSINESS'] ?? 'Customer arrived to business',
    22: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_LOOKING_FOR_DRIVER` : 'ORDER_LOOKING_FOR_DRIVER'] ?? 'Looking for driver',
    23: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_DRIVER_ON_WAY` : 'ORDER_DRIVER_ON_WAY'] ?? 'Driver on way',
    24: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_STATUS_DRIVER_WAITING_FOR_ORDER` : 'ORDER_STATUS_DRIVER_WAITING_FOR_ORDER'] ?? 'Driver waiting for order',
    25: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY` : 'ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY'] ?? 'Accepted by driver company',
    26: dictionary?.[prefixForVariable ? `${prefixForVariable}_ORDER_DRIVER_ARRIVED_CUSTOMER` : 'ORDER_DRIVER_ARRIVED_CUSTOMER'] ?? 'Driver arrived to customer',
    50: dictionary?.[prefixForVariable ? `${prefixForVariable}_DRIVER_ASSIGNED` : 'DRIVER_ASSIGNED'] ?? 'Driver assigned',
    51: dictionary?.[prefixForVariable ? `${prefixForVariable}_DRIVER_CLOSE` : 'DRIVER_CLOSE'] ?? 'Driver is close',
    53: dictionary?.[prefixForVariable ? `${prefixForVariable}_NEW_BUSINESS_OWNER_SIGNUP` : 'NEW_BUSINESS_OWNER_SIGNUP'] ?? 'New Business owner Signup',
    54: dictionary?.[prefixForVariable ? `${prefixForVariable}_NEW_DRIVER_SIGNUP` : 'NEW_DRIVER_SIGNUP'] ?? 'New Driver owner Signup'
  }

  return orderStatus?.[Number(s)] ?? s
}

export const getOrderStatus = (status) => {
  const objectStatus = orderStatus.find((o) => o.key === status)
  return objectStatus && objectStatus
}

export const getOrderStatuPickUp = (status) => {
  const orderStatus = [
    { key: 0, value: 'Pending Order', slug: 'PENDING_ORDER', percentage: 10 },
    { key: 1, value: 'Completed by admin', slug: 'COMPLETED_BY_ADMIN', percentage: 100 },
    { key: 2, value: 'Reject by admin', slug: 'REJECT_BY_ADMIN', percentage: 0 },
    { key: 4, value: 'Preparation Completed', slug: 'PREPARATION_COMPLETED', percentage: 50 },
    { key: 5, value: 'Reject by business', slug: 'REJECT_BY_BUSINESS', percentage: 0 },
    { key: 7, value: 'Accepted by business', slug: 'ACCEPTED_BY_BUSINESS', percentage: 30 },
    { key: 13, value: 'Preorder', slug: 'PREORDER', percentage: 0 },
    { key: 14, value: 'Order not ready', slug: 'ORDER_NOT_READY', percentage: 30 },
    { key: 15, value: 'Pickup completed by customer', slug: 'PICKUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
    { key: 16, value: 'Canceled by customer', slug: 'CANCELED_BY_CUSTOMER', percentage: 0 },
    { key: 17, value: 'Not picked by customer', slug: 'NOT_PICKED_BY_CUSTOMER', percentage: 0 },
    { key: 20, value: 'Customer almost arrived to business', slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', percentage: 70 },
    { key: 21, value: 'Customer arrived to business', slug: 'CUSTOMER_ARRIVED_TO_BUSINESS', percentage: 90 }
  ]

  const objectStatus = orderStatus.find((o) => o.key === status)
  return objectStatus && objectStatus
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

export const getCurrentDiffDays = (time) => {
  const current = moment().utc()
  const compared = moment(time)
  return compared.diff(current, 'days')
}

export const firstLetterCapital = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export const stringToSlug = str => {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str?.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '_') // collapse whitespace and replace by -
    .replace(/-+/g, '_') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, '') // trim - from end of text

  return str
}

export const getCurrenySymbol = (code) => {
  return CURRENCY?.[code]?.symbol ?? code
}

export const queryStringToObject = url => {
  const params = new URLSearchParams(url.split('?')[1])
  return Object.fromEntries(params)
}

export const addQueryToUrl = (newObj) => {
  const queryObj = queryStringToObject(location.href)
  for (const key in newObj) {
    queryObj[key] = newObj[key]
  }
  const query = new URLSearchParams(queryObj)
  history.replaceState(null, '', `${location.pathname}?${query}`)
}

export const removeQueryToUrl = (removeKeys) => {
  const queryObj = queryStringToObject(location.href)
  for (const key of removeKeys) {
    delete queryObj[key]
  }
  if (Object.keys(queryObj).length) {
    const query = new URLSearchParams(queryObj)
    history.replaceState(null, '', `${location.pathname}?${query}`)
  } else {
    history.replaceState(null, '', `${location.pathname}`)
  }
}

export const TwelveHours = [
  '12:00 AM',
  '01:00 AM',
  '02:00 AM',
  '03:00 AM',
  '04:00 AM',
  '05:00 AM',
  '06:00 AM',
  '07:00 AM',
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
  '09:00 PM',
  '10:00 PM',
  '11:00 PM'
]

export const TwentyFourHours = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00'
]

export const disableReasons = () => {
  const [, t] = useLanguage()
  const disableReasonDictionary = {
    SALE_DIVIATION: t('SALE_DIVIATION', 'Sale Diviation'),
    MOTORCYCLE_FAILURE: t('MOTORCYCLE_FAILURE', 'Motorcycle failure'),
    NO_DRIVERS: t('NO_DRIVERS', 'No drivers'),
    OVEN_FAILURE: t('OVEN_FAILURE', 'Oven failure'),
    EXCESS_ORDERS: t('EXCESS_ORDERS', 'Excess orders'),
    NO_ELECTRIC_POWER: t('NO_ELECTRIC_POWER', 'No electric power'),
    NO_GAS: t('NO_GAS', 'No gas'),
    CONECTION_FAILURE: t('CONECTION_FAILURE', 'Conection failure'),
    NO_WATER: t('NO_WATER', 'No water'),
    SYSTEM_FAILURE: t('SYSTEM_FAILURE', 'System failure'),
    STREETS_CLOSED: t('STREETS_CLOSED', 'Streets closed'),
    NO_SERVICE: t('NO_SERVICE', 'No service'),
    UNSAFETY: t('UNSAFETY', 'Unsafety'),
    MAINTENANCE_IN_STORE: t('MAINTENANCE_IN_STORE', 'Maintenance in store'),
    RAINING: t('RAINING', 'Raining'),
    STORE_EVENT: t('STORE_EVENT', 'Store event'),
    PROBLEM_WITH_POWER: t('PROBLEM_WITH_POWER', 'Problem with power'),
    DRIVER_ACCIDENT: t('DRIVER_ACCIDENT', 'Driver accident'),
    MAINTENANCE_SYSTEM_IN_STORE: t('MAINTENANCE_SYSTEM_IN_STORE', 'Maintenance system in store'),
    PROBLEM_WITH_GAS: t('PROBLEM_WITH_GAS', 'Problem with gas'),
    ROLLER_FAILURE: t('ROLLER_FAILURE', 'Roller failure'),
    WEATHER: t('WEATHER', 'Weather'),
    GAS_LEAK: t('GAS_LEAK', 'Gas leak'),
    MANIFESTATION: t('MANIFESTATION', 'Manifestation'),
    LACK_OF_STAFF: t('LACK_OF_STAFF', 'Lack of Staff'),
    MIXER_FAILURE: t('MIXER_FAILURE', 'Mixer failure'),
    AUTOMATICS: t('AUTOMATICS', 'Automatics'),
    PRODUCT_SHORTAGE: t('PRODUCT_SHORTAGE', 'Product shortage'),
    TERMINAL_FAILURES: t('TERMINAL_FAILURES', 'Terminal failures')
  }
  return disableReasonDictionary
}

export const getAttributeName = (key, { parseDate }) => {
  const [, t] = useLanguage()
  const attributes = [
    { key: 'autoassign_amount_drivers', content: t('AUTO_ASSIGN_GROUP_ORDERS_TO_DRIVERS', 'Auto assign the order of group to this amount of drivers') },
    { key: 'orders_group_max_orders', content: t('MAX_NUMBER_ORDERS', 'Maximum Number of Orders') },
    { key: 'autoassign_autoaccept_by_driver', content: t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver') },
    { key: 'orders_group_max_time_between', content: t('MAX_ORDER_TIME_BETWEEN', 'Maximum time between orders in seconds') },
    { key: 'orders_group_max_distance_between_pickup', content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters') },
    { key: 'orders_group_max_distance_between_delivery', content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters') },
    { key: 'orders_group_use_maps_api', content: t('USE_MAPS_API', 'Use maps api') },
    { key: 'orders_group_max_time_between_pickup', content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters') },
    { key: 'orders_group_max_time_between_delivery', content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters') },
    { key: 'autoassign_forced_assignment', content: t('AUTO_ASSIGN_FORCED_ASSIGNMENT', 'Forced assignment') },
    { key: 'autoassign_customer_max_distance_from_business', content: t('MAX_CUSTOMER_DISTANCE_FROM_BUSINESS', 'Max distance between customer and business') },
    { key: 'autoassign_initial_radius', content: t('INITIAL_RADIUS', 'Initial radius in meters') },
    { key: 'autoassign_increment_radius', content: t('INCREMENT_RADIUS', 'Radius increase in meters') },
    { key: 'autoassign_max_radius', content: t('MAX_RADIUS', 'Maximum radius in meters') },
    { key: 'autoassign_autoreject_time', content: t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After') },
    { key: 'autoassign_max_orders', content: t('MAX_AMOUNT_ORDERS_PER_DRIVER', 'Maximum amount of orders per drivers') },
    { key: 'autoassign_max_in_pending', content: t('ORDER_PENDING', 'Pending') },
    { key: 'available', content: t('AVAILABLE', 'Available') },
    { key: 'enabled', content: t('ENABLED', 'Enabled') },
    { key: 'last_available_at', content: t('LAST_AVAILABLE_AT', 'Last available at') },
    { key: 'busy', content: t('BUSY', 'Busy') }
  ]
  const found = attributes.find(attribute => attribute.key === key)

  if (found) {
    return found.content
  } else {
    if (parseDate && moment(key).isValid()) {
      return parseDate(key)
    } else {
      return key
    }
  }
}

export const usePreventDoubleClick = (_callback, delay = 300) => {
  const clickTimeRef = useRef(0)

  const handleClick = useCallback((...args) => {
    const currentTime = new Date().getTime()
    if (currentTime - clickTimeRef.current < delay) {
      return
    }
    clickTimeRef.current = currentTime
    _callback(...args)
  }, [_callback, delay])

  return handleClick
}
