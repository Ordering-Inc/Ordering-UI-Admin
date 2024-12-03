"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersManage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _orderingComponentsAdmin = require("ordering-components-admin");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrdersManage = exports.OrdersManage = function OrdersManage(props) {
  var _mapsData$selectedDri2;
  var UIComponent = props.UIComponent,
    statusGroup = props.statusGroup,
    driversPropsToFetch = props.driversPropsToFetch,
    disableSocketRoomDriver = props.disableSocketRoomDriver,
    useFranchiseImages = props.useFranchiseImages,
    defaultFilterValues = props.defaultFilterValues,
    getDriversByControls = props.getDriversByControls,
    disableDriverLocationsSockets = props.disableDriverLocationsSockets;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _orderingComponentsAdmin.useWebsocket)();
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user,
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var requestsState = {};
  var orderStatuesList = {
    pending: [0, 13],
    inProgress: [7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17]
  };
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(statusGroup || 'pending'),
    _useState4 = _slicedToArray(_useState3, 2),
    ordersStatusGroup = _useState4[0],
    setOrdersStatusGroup = _useState4[1];
  var _useState5 = (0, _react.useState)(defaultFilterValues || {}),
    _useState6 = _slicedToArray(_useState5, 2),
    filterValues = _useState6[0],
    setFilterValues = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    timeStatus = _useState8[0],
    setTimeStatus = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    updateStatus = _useState10[0],
    setUpdateStatus = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    startMulitOrderStatusChange = _useState12[0],
    setStartMulitOrderStatusChange = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    actionStatus = _useState14[0],
    setActionStatus = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    deletedOrderIds = _useState16[0],
    setDeletedOrderIds = _useState16[1];
  var _useState17 = (0, _react.useState)({
      driversIsOnline: true,
      onlineDrivers: [],
      offlineDrivers: [],
      selectedDriver: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    mapsData = _useState18[0],
    setMapsData = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    detailsOrder = _useState20[0],
    setDetailsOrder = _useState20[1];
  var allowColumnsModel = {
    slaBar: {
      visable: false,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: -2
    },
    orderNumber: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: -1
    },
    dateTime: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: 0
    },
    externalId: {
      visable: false,
      title: t('EXTERNAL_ID', 'External id'),
      className: 'externalId',
      draggable: true,
      colSpan: 1,
      order: 1
    },
    status: {
      visable: true,
      title: t('STATUS', 'Status'),
      className: 'statusInfo',
      draggable: true,
      colSpan: 1,
      order: 2
    },
    agent: {
      visable: false,
      title: t('AGENT', 'Agent'),
      className: 'agent',
      draggable: true,
      colSpan: 1,
      order: 3
    },
    cartGroupId: {
      visable: true,
      title: t('GROUP_ORDER', 'Group Order'),
      className: 'groupOrderId',
      draggable: true,
      colSpan: 1,
      order: 4
    },
    driverGroupId: {
      visable: true,
      title: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id'),
      className: 'driverGroupId',
      draggable: true,
      colSpan: 1,
      order: 5
    },
    business: {
      visable: true,
      title: t('BUSINESS', 'Business'),
      className: 'businessInfo',
      draggable: true,
      colSpan: 1,
      order: 6
    },
    customer: {
      visable: true,
      title: t('CUSTOMER', 'Customer'),
      className: 'customerInfo',
      draggable: true,
      colSpan: 1,
      order: 7
    },
    driver: {
      visable: true,
      title: t('DRIVER', 'Driver'),
      className: 'driverInfo',
      draggable: true,
      colSpan: 1,
      order: 8
    },
    advanced: {
      visable: true,
      title: t('ADVANCED_LOGISTICS', 'Advanced logistics'),
      className: 'advanced',
      draggable: true,
      colSpan: 3,
      order: 9
    },
    timer: {
      visable: false,
      title: t('SLA_TIMER', 'SLA’s timer'),
      className: 'timer',
      draggable: true,
      colSpan: 1,
      order: 10
    },
    eta: {
      visable: true,
      title: t('ETA', 'ETA'),
      className: 'eta',
      draggable: true,
      colSpan: 1,
      order: 11
    },
    channel: {
      visable: false,
      title: t('CHANNEL', 'Channel'),
      className: 'channelInfo',
      draggable: true,
      colSpan: 1,
      order: 12
    },
    pod: {
      visable: true,
      title: t('PODS', 'Pod'),
      className: 'podInfo',
      draggable: true,
      colSpan: 1,
      order: 13
    },
    total: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: 14
    }
  };
  var _useState21 = (0, _react.useState)(allowColumnsModel),
    _useState22 = _slicedToArray(_useState21, 2),
    allowColumns = _useState22[0],
    setAllowColumns = _useState22[1];
  var _useState23 = (0, _react.useState)({
      loading: false,
      franchises: [],
      error: null
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    franchisesList = _useState24[0],
    setFranchisesList = _useState24[1];

  /**
   * Object to save driver group list
   */
  var _useState25 = (0, _react.useState)({
      groups: [],
      loading: false,
      error: null
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    driverGroupList = _useState26[0],
    setDriverGroupList = _useState26[1];
  /**
  * Object to save driver group list
  */
  var _useState27 = (0, _react.useState)({
      groups: [],
      loading: false,
      error: null
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    assignableDriverGroupList = _useState28[0],
    setAssignableDriverGroupList = _useState28[1];
  /**
   * Object to save drivers
   */
  var _useState29 = (0, _react.useState)({
      drivers: [],
      loading: true,
      error: null
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    driversList = _useState30[0],
    setDriversList = _useState30[1];
  /**
  * Object to save admins
  */
  var _useState31 = (0, _react.useState)({
      admins: [],
      loading: true,
      error: null
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    adminsList = _useState32[0],
    setAdminsList = _useState32[1];
  /**
   * Object to save paymethods
   */
  var _useState33 = (0, _react.useState)({
      paymethods: [],
      loading: true,
      error: null
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    paymethodsList = _useState34[0],
    setPaymethodsList = _useState34[1];
  /**
   * Object to save businesses
   */
  var _useState35 = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    businessesList = _useState36[0],
    setBusinessesList = _useState36[1];
  /**
   * Array to save the cities
   */
  var _useState37 = (0, _react.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    citiesList = _useState38[0],
    setCitiesList = _useState38[1];

  /**
   * Object to save selected order ids
   */
  var _useState39 = (0, _react.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    selectedOrderIds = _useState40[0],
    setSelectedOrderIds = _useState40[1];
  /**
   * Object to save order substatuses
   */
  var _useState41 = (0, _react.useState)({
      pending: orderStatuesList === null || orderStatuesList === void 0 ? void 0 : orderStatuesList.pending,
      inProgress: orderStatuesList === null || orderStatuesList === void 0 ? void 0 : orderStatuesList.inProgress,
      completed: orderStatuesList === null || orderStatuesList === void 0 ? void 0 : orderStatuesList.completed,
      cancelled: orderStatuesList === null || orderStatuesList === void 0 ? void 0 : orderStatuesList.cancelled,
      all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    selectedSubOrderStatus = _useState42[0],
    setSelectedSubOrderStatus = _useState42[1];

  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */
  var handleSelectedOrderIds = function handleSelectedOrderIds(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);
    if (!_ids.includes(orderId)) {
      _ids.push(orderId);
    } else {
      _ids = _ids.filter(function (_id) {
        return _id !== orderId;
      });
    }
    setSelectedOrderIds(_ids);
  };
  /**
   * Remove id of order updated or delected
   * @param {string} orderId order id
   */
  var handleRemoveSelectedOrderId = function handleRemoveSelectedOrderId(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);
    _ids = _ids.filter(function (_id) {
      return _id !== orderId;
    });
    setSelectedOrderIds(_ids);
  };

  /**
   * Change orders filter by statuses selected
   * @param {string} ordersStatusGroup orders status
   */
  var handleOrdersStatusGroupFilter = function handleOrdersStatusGroupFilter(statusGroup) {
    if (statusGroup === ordersStatusGroup) return;
    setOrdersStatusGroup(statusGroup);
    setSelectedOrderIds([]);
  };
  /**
   * Change text to search
   * @param {string} search Search value
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  /**
   * Save filter type values
   * @param {object} types
   */
  var handleChangeFilterValues = function handleChangeFilterValues(types) {
    setFilterValues(types);
  };

  /**
   * save status for multi orders selected
   * @param {number} status order status
   */
  var handleChangeMultiOrdersStatus = function handleChangeMultiOrdersStatus(status) {
    setUpdateStatus(status);
    setStartMulitOrderStatusChange(true);
  };
  /**
   * Method to change multi orders status from API
   */
  var handleChangeMultiOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(orderId) {
      var requestOptions, response, _yield$response$json, result, error, _ordersIds;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                status: updateStatus
              })
            };
            _context.next = 5;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (parseInt(result.status) === updateStatus) {
              _ordersIds = _toConsumableArray(selectedOrderIds);
              _ordersIds.shift();
              if (_ordersIds.length === 0) {
                setStartMulitOrderStatusChange(false);
              }
              setSelectedOrderIds(_ordersIds);
            }
            setActionStatus({
              loading: false,
              error: error ? result : null
            });
            _context.next = 19;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context.t0.message]
            });
            setStartMulitOrderStatusChange(false);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 15]]);
    }));
    return function handleChangeMultiOrderStatus(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Delete orders for orders selected
   */
  var handleDeleteMultiOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(code) {
      var payload, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            payload = {
              orders_id: selectedOrderIds
            };
            if (code) {
              payload.deleted_action_code = code;
            }
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(payload)
            };
            _context2.next = 8;
            return fetch("".concat(ordering.root, "/orders"), requestOptions);
          case 8:
            response = _context2.sent;
            _context2.next = 11;
            return response.json();
          case 11:
            content = _context2.sent;
            if (!content.error) {
              setDeletedOrderIds(selectedOrderIds);
              setSelectedOrderIds([]);
              showToast(_orderingComponentsAdmin.ToastType.Success, t('ORDERS_DELETED', 'Orders deleted'));
            } else {
              setActionStatus({
                loading: true,
                error: content.result
              });
            }
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context2.t0.message]
            });
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return function handleDeleteMultiOrders(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get drivers from API
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var source, _yield$ordering$setAc, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            source = {};
            requestsState.drivers = source;
            _context3.next = 5;
            return ordering.setAccessToken(token).users().select(driversPropsToFetch).where([{
              attribute: 'level',
              value: [4]
            }]).get({
              cancelToken: source
            });
          case 5:
            _yield$ordering$setAc = _context3.sent;
            result = _yield$ordering$setAc.content.result;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              drivers: result
            }));
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              error: _context3.t0.message
            }));
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    return function getDrivers() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getControlsOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context4.next = 5;
            return fetch("".concat(ordering.root, "/controls/orders?version=v2"), requestOptions);
          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();
          case 8:
            content = _context4.sent;
            if (!content.error) {
              setCitiesList(content.result.cities);
              setDriverGroupList(_objectSpread(_objectSpread({}, driverGroupList), {}, {
                loading: false,
                groups: content.result.driver_groups
              }));
              setAssignableDriverGroupList(_objectSpread(_objectSpread({}, assignableDriverGroupList), {}, {
                loading: false,
                groups: content.result.assignable_driver_groups
              }));
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: content.result.paymethods
              }));
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                businesses: content.result.businesses
              }));
              setAdminsList(_objectSpread(_objectSpread({}, adminsList), {}, {
                loading: false,
                admins: content.result.agents
              }));
              if (getDriversByControls) {
                setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                  loading: false,
                  drivers: content.result.drivers
                }));
              }
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false
              }));
            } else {
              setActionStatus({
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              });
            }
            _context4.next = 15;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context4.t0.message]
            });
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 12]]);
    }));
    return function getControlsOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  var getFranchises = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var where, conditions, requestOptions, functionFetch, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
              loading: true
            }));
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'enabled',
              value: true
            });
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = "".concat(ordering.root, "/franchises?where=").concat(JSON.stringify(where));
            _context5.next = 10;
            return fetch(functionFetch, requestOptions);
          case 10:
            response = _context5.sent;
            _context5.next = 13;
            return response.json();
          case 13:
            _yield$response$json2 = _context5.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
                loading: false,
                franchises: result
              }));
            } else {
              setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
                loading: false,
                error: result
              }));
            }
            _context5.next = 22;
            break;
          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](0);
            setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
              loading: false,
              error: _context5.t0
            }));
          case 22:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 19]]);
    }));
    return function getFranchises() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleJoinMainRooms = function handleJoinMainRooms() {
    if (!disableDriverLocationsSockets) {
      socket.join({
        room: 'driver_locations',
        user_id: user === null || user === void 0 ? void 0 : user.id,
        role: 'manager'
      });
    }
    socket.join({
      room: 'drivers',
      user_id: user === null || user === void 0 ? void 0 : user.id,
      role: 'manager'
    });
  };
  var handleLeaveMainRooms = function handleLeaveMainRooms() {
    socket.leave({
      room: 'driver_locations',
      user_id: user === null || user === void 0 ? void 0 : user.id,
      role: 'manager'
    });
    socket.leave({
      room: 'drivers',
      user_id: user === null || user === void 0 ? void 0 : user.id,
      role: 'manager'
    });
  };
  var handleSocketDisconnect = function handleSocketDisconnect(reason) {
    var disconnectReasons = ['io server disconnect', 'io client disconnect'];
    if (disconnectReasons.includes(reason)) {
      socket.socket.connect();
    }
  };

  /**
   * Listening driver change
   */
  (0, _react.useEffect)(function () {
    if (loading) return;
    var handleBatchDriverChanges = function handleBatchDriverChanges(changes) {
      console.log(changes);
      setDriversList(function (prevState) {
        var updatedDrivers = prevState.drivers.map(function (driver) {
          var changeData = changes.find(function (change) {
            return change.driver_id === driver.id;
          });
          if (changeData) {
            var updatedDriver = _objectSpread({}, driver);
            var _iterator = _createForOfIteratorHelper(changeData.changes),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var change = _step.value;
                updatedDriver[change.attribute] = change.new;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            console.log('driver', updatedDriver);
            return updatedDriver;
          }
          return driver;
        });
        return _objectSpread(_objectSpread({}, prevState), {}, {
          drivers: updatedDrivers
        });
      });
    };
    var handleBatchDriverLocations = function handleBatchDriverLocations(locations) {
      var _mapsData$selectedDri;
      var locationMap = new Map(locations.map(function (location) {
        return [location.driver_id, location.location];
      }));
      setDriversList(function (prevState) {
        var updatedDrivers = prevState.drivers.map(function (driver) {
          if (locationMap.has(driver.id)) {
            return _objectSpread(_objectSpread({}, driver), {}, {
              location: locationMap.get(driver.id)
            });
          }
          return driver;
        });
        return _objectSpread(_objectSpread({}, prevState), {}, {
          drivers: updatedDrivers
        });
      });
      if (detailsOrder !== null && detailsOrder !== void 0 && detailsOrder.id && detailsOrder !== null && detailsOrder !== void 0 && detailsOrder.driver_id) {
        var selectedDriverLocation = locationMap.get(detailsOrder.driver_id);
        if (selectedDriverLocation) {
          setDetailsOrder(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              driver: _objectSpread(_objectSpread({}, prevState.driver), {}, {
                location: selectedDriverLocation
              })
            });
          });
        }
      }
      if (mapsData !== null && mapsData !== void 0 && (_mapsData$selectedDri = mapsData.selectedDriver) !== null && _mapsData$selectedDri !== void 0 && _mapsData$selectedDri.id) {
        var _selectedDriverLocation = locationMap.get(mapsData.selectedDriver.id);
        if (_selectedDriverLocation) {
          setMapsData(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              selectedDriver: _objectSpread(_objectSpread({}, prevState.selectedDriver), {}, {
                location: _selectedDriverLocation
              })
            });
          });
        }
      } else {
        setMapsData(function (prevState) {
          var updateDriverLocation = function updateDriverLocation(driver) {
            if (locationMap.has(driver.id)) {
              return _objectSpread(_objectSpread({}, driver), {}, {
                location: locationMap.get(driver.id)
              });
            }
            return driver;
          };
          return _objectSpread(_objectSpread({}, prevState), {}, {
            onlineDrivers: prevState.onlineDrivers.map(updateDriverLocation),
            offlineDrivers: prevState.offlineDrivers.map(updateDriverLocation)
          });
        });
      }
    };
    if (!disableSocketRoomDriver) {
      socket.on('batch_driver_locations', handleBatchDriverLocations);
      socket.on('batch_driver_changes', handleBatchDriverChanges);
    }
    return function () {
      if (!disableSocketRoomDriver) {
        socket.off('batch_driver_locations', handleBatchDriverLocations);
        socket.off('batch_driver_changes', handleBatchDriverChanges);
      }
    };
  }, [socket, loading, mapsData === null || mapsData === void 0 || (_mapsData$selectedDri2 = mapsData.selectedDriver) === null || _mapsData$selectedDri2 === void 0 ? void 0 : _mapsData$selectedDri2.id, detailsOrder === null || detailsOrder === void 0 ? void 0 : detailsOrder.id]);
  (0, _react.useEffect)(function () {
    if (!auth || loading || !(socket !== null && socket !== void 0 && socket.socket) || disableSocketRoomDriver) return;
    handleJoinMainRooms();
    socket.socket.on('disconnect', handleSocketDisconnect);
    return function () {
      handleLeaveMainRooms();
      socket.socket.off('disconnect', handleSocketDisconnect);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, auth, loading, disableSocketRoomDriver]);

  /**
   * Listening multi orders action start to change status
   */
  (0, _react.useEffect)(function () {
    if (!startMulitOrderStatusChange || selectedOrderIds.length === 0) return;
    handleChangeMultiOrderStatus(selectedOrderIds[0]);
  }, [selectedOrderIds, startMulitOrderStatusChange]);
  (0, _react.useEffect)(function () {
    if (loading) return;
    if (!getDriversByControls && ((user === null || user === void 0 ? void 0 : user.level) === 0 || (user === null || user === void 0 ? void 0 : user.level) === 2 || (user === null || user === void 0 ? void 0 : user.level) === 5)) {
      getDrivers();
    }
    getControlsOrders();
    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
    };
  }, [user, loading]);
  (0, _react.useEffect)(function () {
    if (!user.id || configState !== null && configState !== void 0 && configState.loading) return;
    var getUser = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _result$settings, _configState$configs, _configState$configs2, response, _response$content, error, result, _result$settings2, _configState$configs3, _configState$configs4;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return ordering.users(user.id).select(['settings']).get();
            case 3:
              response = _context6.sent;
              _response$content = response.content, error = _response$content.error, result = _response$content.result;
              if (!(!error && (_result$settings = result.settings) !== null && _result$settings !== void 0 && _result$settings.orderColumns)) {
                _context6.next = 8;
                break;
              }
              setAllowColumns((_result$settings2 = result.settings) === null || _result$settings2 === void 0 ? void 0 : _result$settings2.orderColumns);
              return _context6.abrupt("return");
            case 8:
              setAllowColumns(_objectSpread(_objectSpread({}, allowColumnsModel), {}, {
                slaBar: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.slaBar), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_deadlines_enabled) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1'
                }),
                timer: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.timer), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.order_deadlines_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1'
                })
              }));
              _context6.next = 14;
              break;
            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](0);
              setAllowColumns(_objectSpread(_objectSpread({}, allowColumnsModel), {}, {
                slaBar: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.slaBar), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.order_deadlines_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1'
                }),
                timer: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.timer), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.order_deadlines_enabled) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.value) === '1'
                })
              }));
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 11]]);
      }));
      return function getUser() {
        return _ref6.apply(this, arguments);
      };
    }();
    getUser();
  }, [user, configState]);
  (0, _react.useEffect)(function () {
    if (!ordering || !token || !useFranchiseImages) return;
    getFranchises();
  }, [ordering, token, useFranchiseImages]);
  console.log(driversList);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    citiesList: citiesList,
    ordersStatusGroup: ordersStatusGroup,
    filterValues: filterValues,
    multiOrderUpdateStatus: updateStatus,
    selectedOrderIds: selectedOrderIds,
    deletedOrderIds: deletedOrderIds,
    startMulitOrderStatusChange: startMulitOrderStatusChange,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedSubOrderStatus: setSelectedSubOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleRemoveSelectedOrderId: handleRemoveSelectedOrderId,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    handleOrdersStatusGroupFilter: handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    setSelectedOrderIds: setSelectedOrderIds,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    timeStatus: timeStatus,
    setTimeStatus: setTimeStatus,
    franchisesList: franchisesList,
    adminsList: adminsList,
    assignableDriverGroupList: assignableDriverGroupList,
    mapsData: mapsData,
    setMapsData: setMapsData,
    detailsOrder: detailsOrder,
    setDetailsOrder: setDetailsOrder
  })));
};
OrdersManage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrdersManage.defaultProps = {
  driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups.name', 'driver_groups.id', 'assigned_orders_count', 'photo'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};