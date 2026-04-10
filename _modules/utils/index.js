"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgetURL = exports.verifyDecimals = exports.usePreventDoubleClick = exports.stringToSlug = exports.sortInputFields = exports.shape = exports.setStorageItem = exports.scrollTo = exports.ribbonValues = exports.reviewCommentList = exports.removeStorageItem = exports.removeQueryToUrl = exports.queryStringToObject = exports.orderStatus = exports.orderRejectCommentList = exports.optimizeImage = exports.getUniqueId = exports.getStorageItem = exports.getStarWidth = exports.getSeconds = exports.getOrderStatusPrefix = exports.getOrderStatus = exports.getOrderStatuPickUp = exports.getMinutes = exports.getLocale = exports.getIconCard = exports.getHours = exports.getCurrenySymbol = exports.getCurrentDiffDays = exports.getAttributeName = exports.getAgoMinutes = exports.formatUrlVideo = exports.formatSeconds = exports.firstLetterCapital = exports.findExitingCountryPhoneCode = exports.findExitingCode = exports.fieldsToSort = exports.disableReasons = exports.convertHoursToMinutes = exports.convertHMS = exports.checkValidUrlFormat = exports.checkSiteUrl = exports.checkPreSiteUrl = exports.capitalize = exports.bytesConverter = exports.addQueryToUrl = exports.TwentyFourHours = exports.TwelveHours = exports.DriverTipsOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FaCcMastercard = _interopRequireDefault(require("@meronex/icons/fa/FaCcMastercard"));
var _FaCcVisa = _interopRequireDefault(require("@meronex/icons/fa/FaCcVisa"));
var _FaCreditCard = _interopRequireDefault(require("@meronex/icons/fa/FaCreditCard"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _currency = require("../config/currency.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var optimizeImage = exports.optimizeImage = function optimizeImage(url, params, fallback) {
  if (!url && fallback) return fallback;
  params = params && params.length > 0 ? ",".concat(params) : '';
  if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
    var parts = url.split('upload');
    url = "".concat(parts[0], "upload/f_auto,q_auto").concat(params).concat(parts[1]);
  }
  return url;
};
var getIconCard = exports.getIconCard = function getIconCard() {
  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = brand === null || brand === void 0 ? void 0 : brand.toLowerCase();
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
 * Function to get unique id
 */
var getUniqueId = exports.getUniqueId = function getUniqueId() {
  var dateString = Date.now().toString(36);
  var randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */
var capitalize = exports.capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var DriverTipsOptions = exports.DriverTipsOptions = [0, 10, 15, 20, 25];

/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */
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
var scrollTo = exports.scrollTo = function scrollTo(element, to, duration) {
  var start = element.scrollTop;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;
  var _animateScroll = function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration && val > 0) {
      setTimeout(_animateScroll, increment);
    }
  };
  _animateScroll();
};

/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */
var formatUrlVideo = exports.formatUrlVideo = function formatUrlVideo(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  var id = match && match[7].length === 11 ? match[7] : false;
  return "https://www.youtube-nocookie.com/embed/".concat(id);
};

/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */
var convertHoursToMinutes = exports.convertHoursToMinutes = function convertHoursToMinutes(time) {
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
var getStarWidth = exports.getStarWidth = function getStarWidth(qualification) {
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
var getAgoMinutes = exports.getAgoMinutes = function getAgoMinutes(time) {
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
var bytesConverter = exports.bytesConverter = function bytesConverter(bytes) {
  return Math.floor(bytes / 1024);
};

/**
 * Function to get language settins by language code
 * @param {string} code // language code
 * @param {any} locales // language settings
 */
var getLocale = exports.getLocale = function getLocale(code, locales) {
  var locale = locales === null || locales === void 0 ? void 0 : locales[code];
  if (code === 'es-419-1' || code === 'es-419-2') locale = locales === null || locales === void 0 ? void 0 : locales.es;
  if (code === 'zh-CN') locale = locales === null || locales === void 0 ? void 0 : locales.zhCN;
  if (code === 'ar') locale = locales === null || locales === void 0 ? void 0 : locales.arSA;
  if (code === 'kn') locale = locales === null || locales === void 0 ? void 0 : locales.ta;
  if (code === 'km') locale = locales === null || locales === void 0 ? void 0 : locales.th;
  if (!locale) return locales === null || locales === void 0 ? void 0 : locales.enUS;
  return locale;
};

/**
 * List of fields with correct order
 */
var fieldsToSort = exports.fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email'];

/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */
var sortInputFields = exports.sortInputFields = function sortInputFields(_ref) {
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
var getHours = exports.getHours = function getHours(seconds) {
  return seconds * 1 / 3600 > 1 ? Math.floor(seconds * 1 / 3600) : 0;
};

/**
 * Function to covert seconds into remain Minutes
 * @param {Number} seconds
 */
var getMinutes = exports.getMinutes = function getMinutes(seconds) {
  return Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60);
};

/**
 * Function to covert seconds into remain Seconds
 * @param {Number} seconds
 */
var getSeconds = exports.getSeconds = function getSeconds(seconds) {
  var remain = seconds - Math.floor(seconds / 3600) * 3600;
  return Math.floor(remain - Math.floor(remain / 60) * 60);
};
var findExitingCode = exports.findExitingCode = function findExitingCode(countryCode) {
  var code = _orderingComponentsAdmin.CODES.find(function (code) {
    return code.countryCode === (countryCode || '').toUpperCase();
  });
  return code === null || code === void 0 ? void 0 : code.countryCode;
};
var findExitingCountryPhoneCode = exports.findExitingCountryPhoneCode = function findExitingCountryPhoneCode(countryCode) {
  var code = _orderingComponentsAdmin.CODES.find(function (code) {
    return code.countryCode === (countryCode || '').toUpperCase();
  });
  return code === null || code === void 0 ? void 0 : code.phoneCode;
};

/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */
var verifyDecimals = exports.verifyDecimals = function verifyDecimals(value, parser) {
  if (value % 1 === 0) {
    return value;
  } else {
    return parser(value);
  }
};

/**
 * Fuctions to control the local storage
 */
var getStorageItem = exports.getStorageItem = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(storageKey, isJson) {
    var value;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return window.localStorage.getItem(storageKey);
        case 1:
          value = _context.v;
          if (!(isJson && _typeof(value) !== 'object')) {
            _context.n = 2;
            break;
          }
          return _context.a(2, JSON.parse(value));
        case 2:
          return _context.a(2, value);
      }
    }, _callee);
  }));
  return function getStorageItem(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var setStorageItem = exports.setStorageItem = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key, val, isJson) {
    var value;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          value = isJson ? JSON.stringify(val) : val;
          _context2.n = 1;
          return window.localStorage.setItem(key, value);
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function setStorageItem(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var removeStorageItem = exports.removeStorageItem = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(key) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return window.localStorage.removeItem(key);
        case 1:
          return _context3.a(2);
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
var convertHMS = exports.convertHMS = function convertHMS(value) {
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
  return sec < 0 ? '-' : '' + (hours === '00' ? '' : hours + ':') + minutes + ':' + seconds; // Return is HH : MM : SS
};

/**
 * List shape for ribbon
 */
var shape = exports.shape = {
  rectangle: 'rectangle',
  rectangleRound: 'rectangle_round',
  capsuleShape: 'capsule_shape'
};

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
var checkPreSiteUrl = exports.checkPreSiteUrl = function checkPreSiteUrl(url, fallback) {
  if (!url) return fallback;
  return url[0] === '/' ? url : "/".concat(url);
};

/**
 * Function to validate URL
 * @param {string} url URL of page
 */
var checkValidUrlFormat = exports.checkValidUrlFormat = function checkValidUrlFormat(url) {
  if (!url) return;
  var pattern = new RegExp('^(https?:\\/\\/)?' +
  // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
  // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' +
  // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
  // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' +
  // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return pattern.test(url);
};

/**
 * default value for bitton
 */
var ribbonValues = exports.ribbonValues = {
  color: '#0083FE',
  text: 'ribbon',
  shape: 'rectangle',
  enabled: false
};
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */
var formatSeconds = exports.formatSeconds = function formatSeconds(seconds) {
  // Hours, minutes and seconds
  var hrs = Math.floor(seconds / 3600);
  var mins = Math.floor(seconds % 3600 / 60);
  var secs = Math.floor(seconds % 60);

  // Output like '1:01' or '4:03:59' or '123:03:59'
  var ret = '';
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }
  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
var checkSiteUrl = exports.checkSiteUrl = function checkSiteUrl(url, fallback) {
  if (!url) return fallback;
  return url[(url === null || url === void 0 ? void 0 : url.length) - 1] === '/' ? url : "".concat(url, "/");
};

/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */
var reviewCommentList = exports.reviewCommentList = function reviewCommentList(type) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var reviews = {
    1: {
      1: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_1_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_1_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_1_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_1_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_1_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_1_5', 'Not on-time')
        }]
      },
      2: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_2_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_2_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_2_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_2_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_2_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_2_5', 'Not on-time')
        }]
      },
      3: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_3_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_3_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_3_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_3_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_3_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_3_5', 'Not on-time')
        }]
      },
      4: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_4_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_4_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_4_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_4_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_4_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_4_5', 'Not on-time')
        }]
      },
      5: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_5_0', 'Good communication')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_5_1', 'Friendly')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_5_2', 'Above and beyond')
        }]
      }
    }
  };
  return reviews[type];
};
var orderStatus = exports.orderStatus = [{
  key: 0,
  value: 'Pending Order',
  slug: 'PENDING_ORDER',
  percentage: 10
}, {
  key: 1,
  value: 'Completed by admin',
  slug: 'COMPLETED_BY_ADMIN',
  percentage: 100
}, {
  key: 2,
  value: 'Reject by admin',
  slug: 'REJECT_BY_ADMIN',
  percentage: 0
}, {
  key: 3,
  value: 'Driver arrived by business',
  slug: 'DRIVER_IN_BUSINESS',
  percentage: 60
}, {
  key: 4,
  value: 'Preparation Completed',
  slug: 'PREPARATION_COMPLETED',
  percentage: 20
}, {
  key: 5,
  value: 'Reject by business',
  slug: 'REJECT_BY_BUSINESS',
  percentage: 0
}, {
  key: 6,
  value: 'Reject by driver',
  slug: 'REJECT_BY_DRIVER',
  percentage: 0
}, {
  key: 7,
  value: 'Accepted by business',
  slug: 'ACCEPTED_BY_BUSINESS',
  percentage: 15
}, {
  key: 8,
  value: 'Accepted by driver',
  slug: 'ACCEPTED_BY_DRIVER',
  percentage: 40
}, {
  key: 9,
  value: 'Pick up completed by driver',
  slug: 'PICK_UP_COMPLETED_BY_DRIVER',
  percentage: 70
}, {
  key: 10,
  value: 'Pick up Failed by driver',
  slug: 'PICK_UP_FAILED_BY_DRIVER',
  percentage: 0
}, {
  key: 11,
  value: 'Delivery completed by driver',
  slug: 'DELIVERY_COMPLETED_BY_DRIVER',
  percentage: 100
}, {
  key: 12,
  value: 'Delivery Failed by driver',
  slug: 'DELIVERY_FAILED_BY_DRIVER',
  percentage: 0
}, {
  key: 13,
  value: 'Preorder',
  slug: 'PREORDER',
  percentage: 0
}, {
  key: 14,
  value: 'Order not ready',
  slug: 'ORDER_NOT_READY',
  percentage: 15
}, {
  key: 15,
  value: 'Pickup completed by customer',
  slug: 'PICKUP_COMPLETED_BY_CUSTOMER',
  percentage: 100
}, {
  key: 16,
  value: 'Canceled by customer',
  slug: 'CANCELED_BY_CUSTOMER',
  percentage: 0
}, {
  key: 17,
  value: 'Not picked by customer',
  slug: 'NOT_PICKED_BY_CUSTOMER',
  percentage: 0
}, {
  key: 18,
  value: 'Driver almost arrived to business',
  slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS',
  percentage: 50
}, {
  key: 19,
  value: 'Driver almost arrived to customer',
  slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER',
  percentage: 90
}, {
  key: 20,
  value: 'Customer almost arrived to business',
  slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS',
  percentage: 90
}, {
  key: 21,
  value: 'Customer arrived to business',
  slug: 'CUSTOMER_ARRIVED_TO_BUSINESS',
  percentage: 90
}, {
  key: 22,
  value: 'Looking for driver',
  slug: 'ORDER_LOOKING_FOR_DRIVER',
  percentage: 30
}, {
  key: 23,
  value: 'Driver on way',
  slug: 'ORDER_DRIVER_ON_WAY',
  percentage: 80
}, {
  key: 24,
  value: 'Driver waiting for order',
  slug: 'ORDER_STATUS_DRIVER_WAITING_FOR_ORDER',
  percentage: 25
}, {
  key: 25,
  value: 'Accepted by driver company',
  slug: 'ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY',
  percentage: 15
}, {
  key: 26,
  value: 'Driver arrived to customer',
  slug: 'ORDER_DRIVER_ARRIVED_CUSTOMER',
  percentage: 80
}];
var getOrderStatusPrefix = exports.getOrderStatusPrefix = function getOrderStatusPrefix(s, dictionary) {
  var _dictionary, _dictionary2, _dictionary3, _dictionary4, _dictionary5, _dictionary6, _dictionary7, _dictionary8, _dictionary9, _dictionary0, _dictionary1, _dictionary10, _dictionary11, _dictionary12, _dictionary13, _dictionary14, _dictionary15, _dictionary16, _dictionary17, _dictionary18, _dictionary19, _dictionary20, _dictionary21, _dictionary22, _dictionary23, _dictionary24, _dictionary25, _dictionary26, _dictionary27, _dictionary28, _dictionary29, _orderStatus$Number;
  var prefixForVariable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (!dictionary) return s;
  var orderStatus = {
    0: (_dictionary = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_PENDING") : 'PENDING']) !== null && _dictionary !== void 0 ? _dictionary : 'Pending',
    1: (_dictionary2 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_COMPLETED_BY_ADMIN") : 'COMPLETED_BY_ADMIN']) !== null && _dictionary2 !== void 0 ? _dictionary2 : 'Completed by admin',
    2: (_dictionary3 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_REJECTED") : 'REJECTED']) !== null && _dictionary3 !== void 0 ? _dictionary3 : 'Rejected',
    3: (_dictionary4 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_STATUS_IN_BUSINESS") : 'ORDER_STATUS_IN_BUSINESS']) !== null && _dictionary4 !== void 0 ? _dictionary4 : 'Driver arrived to business',
    4: (_dictionary5 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_PREPARATION_COMPLETED") : 'PREPARATION_COMPLETED']) !== null && _dictionary5 !== void 0 ? _dictionary5 : 'Preparation Completed',
    5: (_dictionary6 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_REJECTED_BY_BUSINESS") : 'REJECTED_BY_BUSINESS']) !== null && _dictionary6 !== void 0 ? _dictionary6 : 'Rejected by business',
    6: (_dictionary7 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_REJECTED_BY_DRIVER") : 'REJECTED_BY_DRIVER']) !== null && _dictionary7 !== void 0 ? _dictionary7 : 'Rejected by Driver',
    7: (_dictionary8 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ACCEPTED_BY_BUSINESS") : 'ACCEPTED_BY_BUSINESS']) !== null && _dictionary8 !== void 0 ? _dictionary8 : 'Accepted by business',
    8: (_dictionary9 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ACCEPTED_BY_DRIVER") : 'ACCEPTED_BY_DRIVER']) !== null && _dictionary9 !== void 0 ? _dictionary9 : 'Accepted by driver',
    9: (_dictionary0 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_PICK_UP_COMPLETED_BY_DRIVER") : 'PICK_UP_COMPLETED_BY_DRIVER']) !== null && _dictionary0 !== void 0 ? _dictionary0 : 'Pick up completed by driver',
    10: (_dictionary1 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_PICK_UP_FAILED_BY_DRIVER") : 'PICK_UP_FAILED_BY_DRIVER']) !== null && _dictionary1 !== void 0 ? _dictionary1 : 'Pick up Failed by driver',
    11: (_dictionary10 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_DELIVERY_COMPLETED_BY_DRIVER") : 'DELIVERY_COMPLETED_BY_DRIVER']) !== null && _dictionary10 !== void 0 ? _dictionary10 : 'Delivery completed by driver',
    12: (_dictionary11 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_DELIVERY_FAILED_BY_DRIVER") : 'DELIVERY_FAILED_BY_DRIVER']) !== null && _dictionary11 !== void 0 ? _dictionary11 : 'Delivery Failed by driver',
    13: (_dictionary12 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_PREORDER") : 'PREORDER']) !== null && _dictionary12 !== void 0 ? _dictionary12 : 'PreOrder',
    14: (_dictionary13 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_NOT_READY") : 'ORDER_NOT_READY']) !== null && _dictionary13 !== void 0 ? _dictionary13 : 'Order not ready',
    15: (_dictionary14 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER") : 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER']) !== null && _dictionary14 !== void 0 ? _dictionary14 : 'Order picked up completed by customer',
    16: (_dictionary15 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_STATUS_CANCELLED_BY_CUSTOMER") : 'ORDER_STATUS_CANCELLED_BY_CUSTOMER']) !== null && _dictionary15 !== void 0 ? _dictionary15 : 'Order cancelled by customer',
    17: (_dictionary16 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_NOT_PICKEDUP_BY_CUSTOMER") : 'ORDER_NOT_PICKEDUP_BY_CUSTOMER']) !== null && _dictionary16 !== void 0 ? _dictionary16 : 'Order not picked up by customer',
    18: (_dictionary17 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS") : 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS']) !== null && _dictionary17 !== void 0 ? _dictionary17 : 'Driver almost arrived to business',
    19: (_dictionary18 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER") : 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER']) !== null && _dictionary18 !== void 0 ? _dictionary18 : 'Driver almost arrived to customer',
    20: (_dictionary19 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS") : 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS']) !== null && _dictionary19 !== void 0 ? _dictionary19 : 'Customer almost arrived to business',
    21: (_dictionary20 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_CUSTOMER_ARRIVED_BUSINESS") : 'ORDER_CUSTOMER_ARRIVED_BUSINESS']) !== null && _dictionary20 !== void 0 ? _dictionary20 : 'Customer arrived to business',
    22: (_dictionary21 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_LOOKING_FOR_DRIVER") : 'ORDER_LOOKING_FOR_DRIVER']) !== null && _dictionary21 !== void 0 ? _dictionary21 : 'Looking for driver',
    23: (_dictionary22 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_DRIVER_ON_WAY") : 'ORDER_DRIVER_ON_WAY']) !== null && _dictionary22 !== void 0 ? _dictionary22 : 'Driver on way',
    24: (_dictionary23 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_STATUS_DRIVER_WAITING_FOR_ORDER") : 'ORDER_STATUS_DRIVER_WAITING_FOR_ORDER']) !== null && _dictionary23 !== void 0 ? _dictionary23 : 'Driver waiting for order',
    25: (_dictionary24 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY") : 'ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY']) !== null && _dictionary24 !== void 0 ? _dictionary24 : 'Accepted by driver company',
    26: (_dictionary25 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_ORDER_DRIVER_ARRIVED_CUSTOMER") : 'ORDER_DRIVER_ARRIVED_CUSTOMER']) !== null && _dictionary25 !== void 0 ? _dictionary25 : 'Driver arrived to customer',
    50: (_dictionary26 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_DRIVER_ASSIGNED") : 'DRIVER_ASSIGNED']) !== null && _dictionary26 !== void 0 ? _dictionary26 : 'Driver assigned',
    51: (_dictionary27 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_DRIVER_CLOSE") : 'DRIVER_CLOSE']) !== null && _dictionary27 !== void 0 ? _dictionary27 : 'Driver is close',
    53: (_dictionary28 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_NEW_BUSINESS_OWNER_SIGNUP") : 'NEW_BUSINESS_OWNER_SIGNUP']) !== null && _dictionary28 !== void 0 ? _dictionary28 : 'New Business owner Signup',
    54: (_dictionary29 = dictionary === null || dictionary === void 0 ? void 0 : dictionary[prefixForVariable ? "".concat(prefixForVariable, "_NEW_DRIVER_SIGNUP") : 'NEW_DRIVER_SIGNUP']) !== null && _dictionary29 !== void 0 ? _dictionary29 : 'New Driver owner Signup'
  };
  return (_orderStatus$Number = orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus[Number(s)]) !== null && _orderStatus$Number !== void 0 ? _orderStatus$Number : s;
};
var getOrderStatus = exports.getOrderStatus = function getOrderStatus(status) {
  var objectStatus = orderStatus.find(function (o) {
    return o.key === status;
  });
  return objectStatus && objectStatus;
};
var getOrderStatuPickUp = exports.getOrderStatuPickUp = function getOrderStatuPickUp(status) {
  var orderStatus = [{
    key: 0,
    value: 'Pending Order',
    slug: 'PENDING_ORDER',
    percentage: 10
  }, {
    key: 1,
    value: 'Completed by admin',
    slug: 'COMPLETED_BY_ADMIN',
    percentage: 100
  }, {
    key: 2,
    value: 'Reject by admin',
    slug: 'REJECT_BY_ADMIN',
    percentage: 0
  }, {
    key: 4,
    value: 'Preparation Completed',
    slug: 'PREPARATION_COMPLETED',
    percentage: 50
  }, {
    key: 5,
    value: 'Reject by business',
    slug: 'REJECT_BY_BUSINESS',
    percentage: 0
  }, {
    key: 7,
    value: 'Accepted by business',
    slug: 'ACCEPTED_BY_BUSINESS',
    percentage: 30
  }, {
    key: 13,
    value: 'Preorder',
    slug: 'PREORDER',
    percentage: 0
  }, {
    key: 14,
    value: 'Order not ready',
    slug: 'ORDER_NOT_READY',
    percentage: 30
  }, {
    key: 15,
    value: 'Pickup completed by customer',
    slug: 'PICKUP_COMPLETED_BY_CUSTOMER',
    percentage: 100
  }, {
    key: 16,
    value: 'Canceled by customer',
    slug: 'CANCELED_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 17,
    value: 'Not picked by customer',
    slug: 'NOT_PICKED_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 20,
    value: 'Customer almost arrived to business',
    slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS',
    percentage: 70
  }, {
    key: 21,
    value: 'Customer arrived to business',
    slug: 'CUSTOMER_ARRIVED_TO_BUSINESS',
    percentage: 90
  }];
  var objectStatus = orderStatus.find(function (o) {
    return o.key === status;
  });
  return objectStatus && objectStatus;
};

/**
 * function to manage order reject comment list
 * @param {string} param0 type of orders to return
 * @returns object with orders dictionary
 */
var orderRejectCommentList = exports.orderRejectCommentList = function orderRejectCommentList(status) {
  var messages = {
    6: [
    // on reject order
    'very_far_away', 'driver_vehicle_incident', 'destination_unreacheable', 'unavailable_driver', 'other'],
    9: [
    // on force pickup status
    'forgot_complete_location', 'not_internet_conection', 'other'],
    10: [
    // on pickup failed by driver
    'very_far_away', 'driver_vehicle_incident', 'destination_unreacheable', 'store_closed', 'unavailable_driver', 'other'],
    11: [
    // on force delivery status
    'forgot_complete_location', 'not_internet_conection', 'other'],
    12: [
    // on delivery failed by driver
    'very_far_away', 'driver_vehicle_incident', 'destination_unreacheable', 'recipient_unavailable', 'incorrect_missing_items', 'refused_damage', 'other'],
    14: [
    // on order not ready
    'store_recieve_order_late', 'store_busy', 'other']
  };
  if (!messages[parseInt(status)]) return [];
  var list = messages[status].map(function (val, i) {
    return {
      key: i,
      value: val,
      content: val
    };
  });
  return list;
};
var widgetURL = exports.widgetURL = 'https://orderingweb.ordering.co/';
var getCurrentDiffDays = exports.getCurrentDiffDays = function getCurrentDiffDays(time) {
  var current = (0, _moment.default)().utc();
  var compared = (0, _moment.default)(time);
  return compared.diff(current, 'days');
};
var firstLetterCapital = exports.firstLetterCapital = function firstLetterCapital(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
var stringToSlug = exports.stringToSlug = function stringToSlug(str) {
  var _str;
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = (_str = str) === null || _str === void 0 ? void 0 : _str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '_') // collapse whitespace and replace by -
  .replace(/-+/g, '_') // collapse dashes
  .replace(/^-+/, '') // trim - from start of text
  .replace(/-+$/, ''); // trim - from end of text

  return str;
};
var getCurrenySymbol = exports.getCurrenySymbol = function getCurrenySymbol(code) {
  var _CURRENCY$code$symbol, _CURRENCY$code;
  return (_CURRENCY$code$symbol = _currency.CURRENCY === null || _currency.CURRENCY === void 0 || (_CURRENCY$code = _currency.CURRENCY[code]) === null || _CURRENCY$code === void 0 ? void 0 : _CURRENCY$code.symbol) !== null && _CURRENCY$code$symbol !== void 0 ? _CURRENCY$code$symbol : code;
};
var queryStringToObject = exports.queryStringToObject = function queryStringToObject(url) {
  var params = new URLSearchParams(url.split('?')[1]);
  return Object.fromEntries(params);
};
var addQueryToUrl = exports.addQueryToUrl = function addQueryToUrl(newObj) {
  var queryObj = queryStringToObject(location.href);
  for (var key in newObj) {
    queryObj[key] = newObj[key];
  }
  var query = new URLSearchParams(queryObj);
  history.replaceState(null, '', "".concat(location.pathname, "?").concat(query));
};
var removeQueryToUrl = exports.removeQueryToUrl = function removeQueryToUrl(removeKeys) {
  var queryObj = queryStringToObject(location.href);
  var _iterator = _createForOfIteratorHelper(removeKeys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      delete queryObj[key];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (Object.keys(queryObj).length) {
    var query = new URLSearchParams(queryObj);
    history.replaceState(null, '', "".concat(location.pathname, "?").concat(query));
  } else {
    history.replaceState(null, '', "".concat(location.pathname));
  }
};
var TwelveHours = exports.TwelveHours = ['12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'];
var TwentyFourHours = exports.TwentyFourHours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
var disableReasons = exports.disableReasons = function disableReasons() {
  var _useLanguage3 = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var disableReasonDictionary = {
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
  };
  return disableReasonDictionary;
};
var getAttributeName = exports.getAttributeName = function getAttributeName(key, functions) {
  var _useLanguage5 = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage6 = _slicedToArray(_useLanguage5, 2),
    t = _useLanguage6[1];
  var attributes = [{
    key: 'autoassign_amount_drivers',
    content: t('AUTO_ASSIGN_GROUP_ORDERS_TO_DRIVERS', 'Auto assign the order of group to this amount of drivers')
  }, {
    key: 'orders_group_max_orders',
    content: t('MAX_NUMBER_ORDERS', 'Maximum Number of Orders')
  }, {
    key: 'autoassign_autoaccept_by_driver',
    content: t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver')
  }, {
    key: 'orders_group_max_time_between',
    content: t('MAX_ORDER_TIME_BETWEEN', 'Maximum time between orders in seconds')
  }, {
    key: 'orders_group_max_distance_between_pickup',
    content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters')
  }, {
    key: 'orders_group_max_distance_between_delivery',
    content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters')
  }, {
    key: 'orders_group_use_maps_api',
    content: t('USE_MAPS_API', 'Use maps api')
  }, {
    key: 'orders_group_max_time_between_pickup',
    content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters')
  }, {
    key: 'orders_group_max_time_between_delivery',
    content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters')
  }, {
    key: 'autoassign_forced_assignment',
    content: t('AUTO_ASSIGN_FORCED_ASSIGNMENT', 'Forced assignment')
  }, {
    key: 'autoassign_customer_max_distance_from_business',
    content: t('MAX_CUSTOMER_DISTANCE_FROM_BUSINESS', 'Max distance between customer and business')
  }, {
    key: 'autoassign_initial_radius',
    content: t('INITIAL_RADIUS', 'Initial radius in meters')
  }, {
    key: 'autoassign_increment_radius',
    content: t('INCREMENT_RADIUS', 'Radius increase in meters')
  }, {
    key: 'autoassign_max_radius',
    content: t('MAX_RADIUS', 'Maximum radius in meters')
  }, {
    key: 'autoassign_autoreject_time',
    content: t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After')
  }, {
    key: 'autoassign_max_orders',
    content: t('MAX_AMOUNT_ORDERS_PER_DRIVER', 'Maximum amount of orders per drivers')
  }, {
    key: 'autoassign_max_in_pending',
    content: t('ORDER_PENDING', 'Pending')
  }, {
    key: 'available',
    content: t('AVAILABLE', 'Available')
  }, {
    key: 'enabled',
    content: t('ENABLED', 'Enabled')
  }, {
    key: 'last_available_at',
    content: t('LAST_AVAILABLE_AT', 'Last available at')
  }, {
    key: 'busy',
    content: t('BUSY', 'Busy')
  }];
  var found = attributes.find(function (attribute) {
    return attribute.key === key;
  });
  if (found) {
    return found.content;
  } else {
    if (functions !== null && functions !== void 0 && functions.parseDate && (0, _moment.default)(key).isValid()) {
      return functions === null || functions === void 0 ? void 0 : functions.parseDate(key);
    } else {
      return key;
    }
  }
};
var usePreventDoubleClick = exports.usePreventDoubleClick = function usePreventDoubleClick(_callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var clickTimeRef = (0, _react.useRef)(0);
  var handleClick = (0, _react.useCallback)(function () {
    var currentTime = new Date().getTime();
    if (currentTime - clickTimeRef.current < delay) {
      return;
    }
    clickTimeRef.current = currentTime;
    _callback.apply(void 0, arguments);
  }, [_callback, delay]);
  return handleClick;
};