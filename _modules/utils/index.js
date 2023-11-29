"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgetURL = exports.verifyDecimals = exports.stringToSlug = exports.sortInputFields = exports.shape = exports.setStorageItem = exports.scrollTo = exports.ribbonValues = exports.reviewCommentList = exports.removeStorageItem = exports.removeQueryToUrl = exports.queryStringToObject = exports.orderStatus = exports.orderRejectCommentList = exports.optimizeImage = exports.getUniqueId = exports.getStorageItem = exports.getStarWidth = exports.getSeconds = exports.getOrderStatus = exports.getOrderStatuPickUp = exports.getMinutes = exports.getLocale = exports.getIconCard = exports.getHours = exports.getCurrenySymbol = exports.getCurrentDiffDays = exports.getAgoMinutes = exports.formatUrlVideo = exports.formatSeconds = exports.firstLetterCapital = exports.findExitingCountryPhoneCode = exports.findExitingCode = exports.fieldsToSort = exports.convertHoursToMinutes = exports.convertHMS = exports.checkValidUrlFormat = exports.checkSiteUrl = exports.checkPreSiteUrl = exports.capitalize = exports.bytesConverter = exports.addQueryToUrl = exports.DriverTipsOptions = void 0;
var _react = _interopRequireDefault(require("react"));
var _FaCcMastercard = _interopRequireDefault(require("@meronex/icons/fa/FaCcMastercard"));
var _FaCcVisa = _interopRequireDefault(require("@meronex/icons/fa/FaCcVisa"));
var _FaCreditCard = _interopRequireDefault(require("@meronex/icons/fa/FaCreditCard"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _currency = require("../config/currency.js");
var _ref2, _ref3, _ref4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
exports.getIconCard = getIconCard;
var getUniqueId = function getUniqueId() {
  var dateString = Date.now().toString(36);
  var randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */
exports.getUniqueId = getUniqueId;
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
 * Function to get language settins by language code
 * @param {string} code // language code
 * @param {any} locales // language settings
 */
exports.bytesConverter = bytesConverter;
var getLocale = function getLocale(code, locales) {
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
exports.getLocale = getLocale;
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
exports.getSeconds = getSeconds;
var findExitingCode = function findExitingCode(countryCode) {
  var code = _orderingComponentsAdmin.CODES.find(function (code) {
    return code.countryCode === (countryCode || '').toUpperCase();
  });
  return code === null || code === void 0 ? void 0 : code.countryCode;
};
exports.findExitingCode = findExitingCode;
var findExitingCountryPhoneCode = function findExitingCountryPhoneCode(countryCode) {
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
exports.findExitingCountryPhoneCode = findExitingCountryPhoneCode;
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
var getStorageItem = function getStorageItem(_x, _x2) {
  return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(storageKey, isJson) {
    var value;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
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
    }, _callee);
  }))).apply(this, arguments);
};
exports.getStorageItem = getStorageItem;
var setStorageItem = function setStorageItem(_x3, _x4, _x5) {
  return (_ref3 = _ref3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, val, isJson) {
    var value;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          value = isJson ? JSON.stringify(val) : val;
          _context2.next = 3;
          return window.localStorage.setItem(key, value);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))).apply(this, arguments);
};
exports.setStorageItem = setStorageItem;
var removeStorageItem = function removeStorageItem(_x6) {
  return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return window.localStorage.removeItem(key);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }))).apply(this, arguments);
};

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
  return sec < 0 ? '-' : '' + (hours === '00' ? '' : hours + ':') + minutes + ':' + seconds; // Return is HH : MM : SS
};

/**
 * List shape for ribbon
 */
exports.convertHMS = convertHMS;
var shape = {
  rectangle: 'rectangle',
  rectangleRound: 'rectangle_round',
  capsuleShape: 'capsule_shape'
};

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
exports.shape = shape;
var checkPreSiteUrl = function checkPreSiteUrl(url, fallback) {
  if (!url) return fallback;
  return url[0] === '/' ? url : "/".concat(url);
};

/**
 * Function to validate URL
 * @param {string} url URL of page
 */
exports.checkPreSiteUrl = checkPreSiteUrl;
var checkValidUrlFormat = function checkValidUrlFormat(url) {
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
exports.checkValidUrlFormat = checkValidUrlFormat;
var ribbonValues = {
  color: '#0083FE',
  text: 'ribbon',
  shape: 'rectangle',
  enabled: false
};
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */
exports.ribbonValues = ribbonValues;
var formatSeconds = function formatSeconds(seconds) {
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
exports.formatSeconds = formatSeconds;
var checkSiteUrl = function checkSiteUrl(url, fallback) {
  if (!url) return fallback;
  return url[(url === null || url === void 0 ? void 0 : url.length) - 1] === '/' ? url : "".concat(url, "/");
};

/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */
exports.checkSiteUrl = checkSiteUrl;
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
exports.orderStatus = orderStatus;
var getOrderStatus = function getOrderStatus(status) {
  var objectStatus = orderStatus.find(function (o) {
    return o.key === status;
  });
  return objectStatus && objectStatus;
};
exports.getOrderStatus = getOrderStatus;
var getOrderStatuPickUp = function getOrderStatuPickUp(status) {
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
exports.getOrderStatuPickUp = getOrderStatuPickUp;
var orderRejectCommentList = function orderRejectCommentList(status) {
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
exports.orderRejectCommentList = orderRejectCommentList;
var widgetURL = 'https://orderingweb.ordering.co/';
exports.widgetURL = widgetURL;
var getCurrentDiffDays = function getCurrentDiffDays(time) {
  var current = (0, _moment.default)().utc();
  var compared = (0, _moment.default)(time);
  return compared.diff(current, 'days');
};
exports.getCurrentDiffDays = getCurrentDiffDays;
var firstLetterCapital = function firstLetterCapital(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
exports.firstLetterCapital = firstLetterCapital;
var stringToSlug = function stringToSlug(str) {
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
exports.stringToSlug = stringToSlug;
var getCurrenySymbol = function getCurrenySymbol(code) {
  var _CURRENCY$code$symbol, _CURRENCY$code;
  return (_CURRENCY$code$symbol = _currency.CURRENCY === null || _currency.CURRENCY === void 0 || (_CURRENCY$code = _currency.CURRENCY[code]) === null || _CURRENCY$code === void 0 ? void 0 : _CURRENCY$code.symbol) !== null && _CURRENCY$code$symbol !== void 0 ? _CURRENCY$code$symbol : code;
};
exports.getCurrenySymbol = getCurrenySymbol;
var queryStringToObject = function queryStringToObject(url) {
  var params = new URLSearchParams(url.split('?')[1]);
  return Object.fromEntries(params);
};
exports.queryStringToObject = queryStringToObject;
var addQueryToUrl = function addQueryToUrl(newObj) {
  var queryObj = queryStringToObject(location.href);
  for (var key in newObj) {
    queryObj[key] = newObj[key];
  }
  var query = new URLSearchParams(queryObj);
  history.replaceState(null, '', "".concat(location.pathname, "?").concat(query));
};
exports.addQueryToUrl = addQueryToUrl;
var removeQueryToUrl = function removeQueryToUrl(removeKeys) {
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
exports.removeQueryToUrl = removeQueryToUrl;