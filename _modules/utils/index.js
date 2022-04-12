"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyDecimals = exports.sortInputFields = exports.setStorageItem = exports.scrollTo = exports.reviewCommentList = exports.removeStorageItem = exports.optimizeImage = exports.getStorageItem = exports.getStarWidth = exports.getSeconds = exports.getMinutes = exports.getIconCard = exports.getHours = exports.getAgoMinutes = exports.formatUrlVideo = exports.fieldsToSort = exports.convertHoursToMinutes = exports.convertHMS = exports.capitalize = exports.bytesConverter = exports.DriverTipsOptions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _FaCcMastercard = _interopRequireDefault(require("@meronex/icons/fa/FaCcMastercard"));

var _FaCcVisa = _interopRequireDefault(require("@meronex/icons/fa/FaCcVisa"));

var _FaCreditCard = _interopRequireDefault(require("@meronex/icons/fa/FaCreditCard"));

var _moment = _interopRequireDefault(require("moment"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var optimizeImage = function optimizeImage(url, params, fallback) {
  if (!url && fallback) return fallback;
  params = params && params.length > 0 ? ",".concat(params) : '';

  if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
    var parts = url.split('upload');
    url = "".concat(parts[0], "upload/f_auto,q_auto").concat(params).concat(parts[1]);
  }

  return url;
};

exports.optimizeImage = optimizeImage;

var getIconCard = function getIconCard() {
  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = brand.toLowerCase();

  switch (value) {
    case 'visa':
      return /*#__PURE__*/_react.default.createElement(_FaCcVisa.default, null);

    case 'mastercard':
      return /*#__PURE__*/_react.default.createElement(_FaCcMastercard.default, null);

    default:
      return /*#__PURE__*/_react.default.createElement(_FaCreditCard.default, null);
  }
};
/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */


exports.getIconCard = getIconCard;

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.capitalize = capitalize;
var DriverTipsOptions = [0, 10, 15, 20, 25];
/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */

exports.DriverTipsOptions = DriverTipsOptions;

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
/**
 * Function to do scroll of one element to another
 * @param {*} element = parent element
 * @param {*} to = position Top of child element
 * @param {*} duration = time to animation
 */


var scrollTo = function scrollTo(element, to, duration) {
  var start = element.scrollTop;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;

    if (currentTime < duration && val > 0) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
};
/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */


exports.scrollTo = scrollTo;

var formatUrlVideo = function formatUrlVideo(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  var id = match && match[7].length === 11 ? match[7] : false;
  return "https://www.youtube-nocookie.com/embed/".concat(id);
};
/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */


exports.formatUrlVideo = formatUrlVideo;

var convertHoursToMinutes = function convertHoursToMinutes(time) {
  if (!time) return '0min';

  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hour = _time$split2[0],
      minute = _time$split2[1];

  var result = parseInt(hour, 10) * 60 + parseInt(minute, 10);
  return "".concat(result, "min");
};
/**
 * Function to convert star rate in width to display
 * @param {int} qualification star rate or qualification
 */


exports.convertHoursToMinutes = convertHoursToMinutes;

var getStarWidth = function getStarWidth(qualification) {
  if (qualification) {
    return qualification / 5 * 100 + '%';
  } else {
    return '0%';
  }
};
/**
 * Function to calculate differnece with current time in minutes
 * @param {string} time past time
 */


exports.getStarWidth = getStarWidth;

var getAgoMinutes = function getAgoMinutes(time) {
  var totalMinutes = (((0, _moment.default)().utc() - (0, _moment.default)(time)) / 1000 / 60).toFixed(0);
  var totalHours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes - totalHours * 60;
  var days = Math.floor(totalHours / 24);
  var hours = totalHours - days * 24;

  if (days > 0) {
    return "-".concat(days, " days ").concat(hours, ":").concat(minutes, " hrs");
  } else if (hours > 0) {
    return "-".concat(hours, ":").concat(minutes, " hrs");
  } else return "-00:".concat(minutes, " hrs");
};
/**
 * Function to transform bytes to kb
 * @param {number} bytes for transform
 *
 */


exports.getAgoMinutes = getAgoMinutes;

var bytesConverter = function bytesConverter(bytes) {
  return Math.floor(bytes / 1024);
};
/**
 * List of fields with correct order
 */


exports.bytesConverter = bytesConverter;
var fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email'];
/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */

exports.fieldsToSort = fieldsToSort;

var sortInputFields = function sortInputFields(_ref) {
  var fields = _ref.fields,
      values = _ref.values;
  var fieldsBase = fields;
  var fieldsSorted = [];
  var fieldsArray = Array.isArray(values) ? values : Object.values(values);

  if (!fieldsBase) {
    fieldsBase = fieldsToSort;
  }

  fieldsBase.forEach(function (f) {
    fieldsArray.forEach(function (field) {
      if (f === field.code) {
        fieldsSorted.push(field);
      }
    });
  });
  return fieldsSorted;
};
/**
 * Function to covert seconds into remain hours
 * @param {Number} seconds
 */


exports.sortInputFields = sortInputFields;

var getHours = function getHours(seconds) {
  return seconds * 1 / 3600 > 1 ? Math.floor(seconds * 1 / 3600) : 0;
};
/**
 * Function to covert seconds into remain Minutes
 * @param {Number} seconds
 */


exports.getHours = getHours;

var getMinutes = function getMinutes(seconds) {
  return Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60);
};
/**
 * Function to covert seconds into remain Seconds
 * @param {Number} seconds
 */


exports.getMinutes = getMinutes;

var getSeconds = function getSeconds(seconds) {
  var remain = seconds - Math.floor(seconds / 3600) * 3600;
  return Math.floor(remain - Math.floor(remain / 60) * 60);
};
/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */


exports.getSeconds = getSeconds;

var verifyDecimals = function verifyDecimals(value, parser) {
  if (value % 1 === 0) {
    return value;
  } else {
    return parser(value);
  }
};
/**
 * Fuctions to control the local storage
 */


exports.verifyDecimals = verifyDecimals;

var getStorageItem = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(storageKey, isJson) {
    var value;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.localStorage.getItem(storageKey);

          case 2:
            value = _context.sent;

            if (!(isJson && _typeof(value) !== 'object')) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", JSON.parse(value));

          case 5:
            return _context.abrupt("return", value);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStorageItem(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getStorageItem = getStorageItem;

var setStorageItem = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(key, val, isJson) {
    var value;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            value = isJson ? JSON.stringify(val) : val;
            _context2.next = 3;
            return window.localStorage.setItem(key, value);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setStorageItem(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.setStorageItem = setStorageItem;

var removeStorageItem = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(key) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return window.localStorage.removeItem(key);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function removeStorageItem(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Fuctions to convert formatted time from seconds
 */


exports.removeStorageItem = removeStorageItem;

var convertHMS = function convertHMS(value) {
  var sec = parseInt(value, 10); // convert value to number if it's string

  var absSec = Math.abs(sec);
  var hours = Math.floor(absSec / 3600); // get hours

  var minutes = Math.floor((absSec - hours * 3600) / 60); // get minutes

  var seconds = absSec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return sec < 0 ? '-' : '' + hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
};
/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */


exports.convertHMS = convertHMS;

var reviewCommentList = function reviewCommentList(type) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var reviews = {
    1: {
      1: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_1', "What went wrong?"),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_1_0', "Not handled with care")
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_1_1', "Poor communication")
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_1_2', "COVID-19 issue")
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_1_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_1_4', "Rude")
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_1_5', "Not on-time")
        }]
      },
      2: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_2', "What went wrong?"),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_2_0', "Not handled with care")
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_2_1', "Poor communication")
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_2_2', "COVID-19 issue")
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_2_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_2_4', "Rude")
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_2_5', "Not on-time")
        }]
      },
      3: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_3', "What could have been better?"),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_3_0', "Not handled with care")
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_3_1', "Poor communication")
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_3_2', "COVID-19 issue")
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_3_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_3_4', "Rude")
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_3_5', "Not on-time")
        }]
      },
      4: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_4', " Tell us more"),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_4_0', "Not handled with care")
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_4_1', "Poor communication")
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_4_2', "COVID-19 issue")
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_4_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_4_4', "Rude")
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_4_5', "Not on-time")
        }]
      },
      5: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_5', "What went well?"),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_5_0', "Good communication")
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_5_1', "Friendly")
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_5_2', "Above and beyond")
        }]
      }
    }
  };
  return reviews[type];
};

exports.reviewCommentList = reviewCommentList;