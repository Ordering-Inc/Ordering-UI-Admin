"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _orderingComponentsAdmin = require("ordering-components-admin");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversList = function DriversList(props) {
  var _ref, _ref2, _ref4, _ref5, _ref6, _ref7;
  var drivers = props.drivers,
    UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch,
    isSearchByName = props.isSearchByName,
    isSearchByCellphone = props.isSearchByCellphone,
    isOrderDrivers = props.isOrderDrivers,
    isSearchFilterValue = props.isSearchFilterValue,
    orderId = props.orderId,
    setCommentInfostate = props.setCommentInfostate,
    disableSocketRoomDriver = props.disableSocketRoomDriver,
    useBatchSockets = props.useBatchSockets,
    filterValues = props.filterValues,
    searchFilterValue = props.searchFilterValue,
    driverGroupList = props.driverGroupList;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var requestsState = {};
  var _useState = (0, _react.useState)({
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    driverActionStatus = _useState2[0],
    setDriverActionStatus = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: true,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    companyActionStatus = _useState4[0],
    setCompanyActionStatus = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedDriver = _useState6[0],
    setSelectedDriver = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null,
      orders: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    assignedOrders = _useState8[0],
    setAssignedOrders = _useState8[1];
  var controller = new AbortController();
  var signal = controller.signal;
  var activeOrderStatuses = [0, 13, 7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23];
  var socket = (0, _orderingComponentsAdmin.useWebsocket)();

  /**
   * Get session
   */
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];

  /**
   * Array to save drivers
   */
  var _useState9 = (0, _react.useState)({
      drivers: [],
      loading: true,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    driversList = _useState10[0],
    setDriversList = _useState10[1];
  /**
   * Array to save companys
   */
  var _useState11 = (0, _react.useState)({
      companys: [],
      loading: true,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    companysList = _useState12[0],
    setCompanysList = _useState12[1];
  /**
   * Array to save online drivers
   */
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    onlineDrivers = _useState14[0],
    setOnlineDrivers = _useState14[1];
  /**
   * Array to save offline drivers
   */
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    offlineDrivers = _useState16[0],
    setOfflineDrivers = _useState16[1];
  /**
   * state for drivers online / offline filter
   */
  var _useState17 = (0, _react.useState)(true),
    _useState18 = _slicedToArray(_useState17, 2),
    driversIsOnline = _useState18[0],
    setDriversIsOnline = _useState18[1];
  /**
   * state for drivers busy / not busy sub filter
   */
  var _useState19 = (0, _react.useState)({
      busy: true,
      notBusy: true
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    driversSubfilter = _useState20[0],
    setDriversSubfilter = _useState20[1];
  /**
   * search value
   */
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    searchValue = _useState22[0],
    setSearchValue = _useState22[1];

  /**
   * Change text to search
   * @param {string} search Search value
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    if (search !== searchValue) {
      setSearchValue(search);
    }
  };

  /**
   * Method to assign driver to order from API
   * @param {object} assign assigned order id and driver id
   */
  var handleAssignDriver = function handleAssignDriver(_x) {
    return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(assign) {
      var source, _yield$ordering$setAc, content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setDriverActionStatus(_objectSpread(_objectSpread({}, driverActionStatus), {}, {
              loading: true
            }));
            source = {};
            requestsState.assignDriver = source;
            _context.next = 7;
            return ordering.setAccessToken(session.token).orders(assign.orderId).save({
              driver_id: assign.driverId
            }, {
              cancelToken: source
            });
          case 7:
            _yield$ordering$setAc = _context.sent;
            content = _yield$ordering$setAc.content;
            setDriverActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              if (assign.driverId) {
                showToast(_orderingComponentsAdmin.ToastType.Success, t('ORDER_DRIVER_ASSIGNED', 'Driver assigned to order'));
              } else {
                showToast(_orderingComponentsAdmin.ToastType.Success, t('ORDER_DRIVER_REMOVED', 'Driver removed from the order'));
              }
            }
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            setDriverActionStatus(_objectSpread(_objectSpread({}, driverActionStatus), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    }))).apply(this, arguments);
  };

  /**
   * Method to assign driver_company to order from API
   * @param {object} assign assigned order_id and driver_company_id
   */
  var handleAssignDriverCompany = function handleAssignDriverCompany(_x2) {
    return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(assign) {
      var requestOptions, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setCompanyActionStatus(_objectSpread(_objectSpread({}, companyActionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                driver_company_id: assign.companyId
              })
            };
            _context2.next = 6;
            return fetch("".concat(ordering.root, "/orders/").concat(assign.orderId), requestOptions);
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            setCompanyActionStatus({
              loading: false,
              error: result.error ? result.result : null
            });
            if (!error) {
              if (assign.driverId) {
                showToast(_orderingComponentsAdmin.ToastType.Success, t('ORDER_COMPANY_ASSIGNED', 'Company assigned to order'));
              } else {
                showToast(_orderingComponentsAdmin.ToastType.Success, t('ORDER_COMPANY_REMOVED', 'Company removed from the order'));
              }
            }
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            setCompanyActionStatus(_objectSpread(_objectSpread({}, companyActionStatus), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 16]]);
    }))).apply(this, arguments);
  };

  /**
   * change online state for drivers
   * @param {Boolean} isOnline
   */
  var handleChangeDriverIsOnline = function handleChangeDriverIsOnline(isOnline) {
    setDriversIsOnline(isOnline);
  };

  /**
   * sub filter for drivers
   * @param {Object} subFilter
   */
  var handleChangeDriversSubFilter = function handleChangeDriversSubFilter(subFilter) {
    setDriversSubfilter(subFilter);
  };

  /**
   * Method to get online/offline drivers
   * @param {Array} drivers
   */
  var getOnlineOfflineDrivers = function getOnlineOfflineDrivers(drivers) {
    var _filterValues$driverI;
    var _onlineDrivers;
    var _offlineDrivers;
    var driversFiltered = drivers;
    if ((filterValues === null || filterValues === void 0 || (_filterValues$driverI = filterValues.driverIds) === null || _filterValues$driverI === void 0 ? void 0 : _filterValues$driverI.length) > 0) {
      driversFiltered = driversFiltered.filter(function (driver) {
        var _filterValues$driverI2;
        return filterValues === null || filterValues === void 0 || (_filterValues$driverI2 = filterValues.driverIds) === null || _filterValues$driverI2 === void 0 ? void 0 : _filterValues$driverI2.includes(driver === null || driver === void 0 ? void 0 : driver.id);
      });
    }
    if (isSearchFilterValue && searchFilterValue) {
      var _driverGroupList$grou;
      var driverGroupFilter = driverGroupList === null || driverGroupList === void 0 || (_driverGroupList$grou = driverGroupList.groups) === null || _driverGroupList$grou === void 0 ? void 0 : _driverGroupList$grou.find(function (_ref3) {
        var name = _ref3.name;
        return name.toLowerCase().includes(searchFilterValue.toLowerCase());
      });
      if (driverGroupFilter) {
        driversFiltered = driversFiltered.filter(function (driver) {
          return driverGroupFilter.drivers.includes(driver.id);
        });
      }
    }
    if (driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = driversFiltered.filter(function (driver) {
        return driver.enabled && driver.available;
      });
      _offlineDrivers = driversFiltered.filter(function (driver) {
        return driver.enabled && !driver.available;
      });
    } else if (driversSubfilter.busy && !driversSubfilter.notBusy) {
      _onlineDrivers = driversFiltered.filter(function (driver) {
        return driver.enabled && driver.available && driver.busy;
      });
      _offlineDrivers = driversFiltered.filter(function (driver) {
        return driver.enabled && !driver.available && driver.busy;
      });
    } else if (!driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = driversFiltered.filter(function (driver) {
        return driver.enabled && driver.available && !driver.busy;
      });
      _offlineDrivers = driversFiltered.filter(function (driver) {
        return driver.enabled && !driver.available && !driver.busy;
      });
    } else {
      _onlineDrivers = [];
      _offlineDrivers = [];
    }
    setOnlineDrivers(_onlineDrivers);
    setOfflineDrivers(_offlineDrivers);
  };

  /**
   * Method to get drivers from API
   */
  var getDrivers = function getDrivers() {
    return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var source, where, conditions, searchConditions, _yield$ordering$setAc2, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: true
            }));
            source = {};
            requestsState.drivers = source;
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'level',
              value: [4]
            });
            if (searchValue) {
              searchConditions = [];
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
                searchConditions.push({
                  attribute: 'lastname',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByCellphone) {
                searchConditions.push({
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            _context3.next = 11;
            return ordering.setAccessToken(session.token).users().select(propsToFetch).where(where).get({
              cancelToken: source
            });
          case 11:
            _yield$ordering$setAc2 = _context3.sent;
            result = _yield$ordering$setAc2.content.result;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              drivers: result
            }));
            getOnlineOfflineDrivers(result);
            _context3.next = 20;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              error: _context3.t0.message
            }));
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 17]]);
    }))).apply(this, arguments);
  };

  /**
   * Method to get the drivers of order from API
   */
  var getOrderDrivers = function getOrderDrivers() {
    return (_ref5 = _ref5 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _result$drivers, requestOptions, response, _yield$response$json2, error, result, _drivers2;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: true
            }));
            setCompanysList(_objectSpread(_objectSpread({}, companysList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              signal: signal
            };
            _context4.next = 6;
            return fetch("".concat(ordering.root, "/controls/orders/").concat(orderId), requestOptions);
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            _yield$response$json2 = _context4.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            _drivers2 = result === null || result === void 0 || (_result$drivers = result.drivers) === null || _result$drivers === void 0 ? void 0 : _result$drivers.map(function (driver) {
              return _objectSpread(_objectSpread({}, driver), {}, {
                enabled: true
              });
            });
            setDriversList({
              loading: false,
              drivers: error ? [] : _drivers2,
              error: error ? result : null
            });
            setCompanysList({
              loading: false,
              companys: error ? [] : result === null || result === void 0 ? void 0 : result.driver_companies,
              error: error ? result : null
            });
            _context4.next = 21;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](0);
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              error: _context4.t0.message
            }));
            setCompanysList(_objectSpread(_objectSpread({}, companysList), {}, {
              loading: false,
              error: _context4.t0.message
            }));
          case 21:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 17]]);
    }))).apply(this, arguments);
  };
  var getOrders = function getOrders() {
    return (_ref6 = _ref6 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var options, where, conditions, source, functionFetch;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            options = null;
            where = [];
            conditions = [];
            options = {
              query: {
                orderBy: '-id'
              }
            };
            conditions.push({
              attribute: 'products',
              conditions: [{
                attribute: 'type',
                value: {
                  condition: '=',
                  value: 'item'
                }
              }]
            });
            conditions.push({
              attribute: 'status',
              value: activeOrderStatuses
            });
            conditions.push({
              attribute: 'delivery_type',
              value: 1
            });
            conditions.push({
              attribute: 'driver_id',
              value: selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id
            });
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            functionFetch = ordering.setAccessToken(session.token).orders().asDashboard().select(['business', 'customer']).where(where);
            _context5.next = 15;
            return functionFetch.get(options);
          case 15:
            return _context5.abrupt("return", _context5.sent);
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))).apply(this, arguments);
  };

  /**
   * Method to get the orders assigned to the driver
   */
  var loadAssignedOrders = function loadAssignedOrders() {
    return (_ref7 = _ref7 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setAssignedOrders(_objectSpread(_objectSpread({}, assignedOrders), {}, {
              loading: true
            }));
            _context6.next = 4;
            return getOrders();
          case 4:
            response = _context6.sent;
            setAssignedOrders({
              loading: false,
              orders: response.content.error ? [] : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            _context6.next = 11;
            break;
          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            setAssignedOrders(_objectSpread(_objectSpread({}, assignedOrders), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 8]]);
    }))).apply(this, arguments);
  };
  (0, _react.useEffect)(function () {
    if (selectedDriver !== null && selectedDriver !== void 0 && selectedDriver.id) {
      loadAssignedOrders();
    } else {
      setAssignedOrders({
        loading: false,
        orders: [],
        error: null
      });
    }
  }, [selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id]);

  /**
   * listen for busy/not busy filter
   */
  (0, _react.useEffect)(function () {
    getOnlineOfflineDrivers(driversList.drivers);
  }, [driversSubfilter, filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds, searchFilterValue]);
  (0, _react.useEffect)(function () {
    if (drivers) {
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers,
        loading: false
      }));
      getOnlineOfflineDrivers(drivers);
    } else {
      if (isOrderDrivers) {
        getOrderDrivers();
      } else {
        getDrivers();
      }
    }
    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
      if (isOrderDrivers) {
        controller === null || controller === void 0 || controller.abort();
      }
    };
  }, [drivers, searchValue, orderId]);

  /**
   * Listening driver change
   */
  (0, _react.useEffect)(function () {
    if (session !== null && session !== void 0 && session.loading) return;
    var handleUpdateDriver = function handleUpdateDriver(driver) {
      var found = driversList.drivers.find(function (_driver) {
        return _driver.id === driver.id;
      });
      var _drivers = [];
      if (found) {
        _drivers = driversList.drivers.filter(function (_driver) {
          if (_driver.id === driver.id) {
            Object.assign(_driver, driver);
          }
          return true;
        });
      } else {
        if (!isOrderDrivers) {
          _drivers = [].concat(_toConsumableArray(driversList.drivers), [driver]);
        } else {
          _drivers = _toConsumableArray(driversList.drivers);
        }
      }
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: _drivers
      }));
    };
    var handleTrackingDriver = function handleTrackingDriver(trackingData) {
      var drivers = [];
      drivers = driversList.drivers.filter(function (_driver) {
        if (_driver.id === trackingData.driver_id) {
          if (typeof trackingData.location === 'string') {
            var trackingLocation = trackingData.location;
            var _location = trackingLocation.replaceAll('\\', '');
            var location = JSON.parse(_location);
            _driver.location = location;
          } else {
            _driver.location = trackingData.location;
          }
        }
        return true;
      });
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers
      }));
    };
    var handleBatchDriverChanges = function handleBatchDriverChanges(changes) {
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
      setDriversList(function (prevState) {
        var updatedDrivers = prevState.drivers.map(function (driver) {
          var locationData = locations.find(function (location) {
            return location.driver_id === driver.id;
          });
          if (locationData) {
            var updatedDriver = _objectSpread({}, driver);
            updatedDriver.location = locationData.location;
            return updatedDriver;
          }
          return driver;
        });
        return _objectSpread(_objectSpread({}, prevState), {}, {
          drivers: updatedDrivers
        });
      });
    };
    if (!disableSocketRoomDriver) {
      if (!useBatchSockets) {
        socket.on('drivers_update', handleUpdateDriver);
        socket.on('tracking_driver', handleTrackingDriver);
      } else {
        socket.on('batch_driver_locations', handleBatchDriverLocations);
        socket.on('batch_driver_changes', handleBatchDriverChanges);
      }
    }
    return function () {
      if (!disableSocketRoomDriver) {
        if (!useBatchSockets) {
          socket.off('drivers_update', handleUpdateDriver);
          socket.off('tracking_driver', handleTrackingDriver);
        } else {
          socket.off('batch_driver_locations', handleBatchDriverLocations);
          socket.off('batch_driver_changes', handleBatchDriverChanges);
        }
      }
    };
  }, [socket, session === null || session === void 0 ? void 0 : session.loading, driversList.drivers]);
  var handleJoinMainRooms = function handleJoinMainRooms() {
    if (!useBatchSockets) {
      socket.join('drivers');
    } else {
      var _session$user, _session$user2;
      socket.join({
        room: 'driver_locations',
        user_id: session === null || session === void 0 || (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id,
        role: 'manager'
      });
      socket.join({
        room: 'drivers',
        user_id: session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id,
        role: 'manager'
      });
    }
  };
  var handleLeaveMainRooms = function handleLeaveMainRooms() {
    if (!useBatchSockets) {
      socket.leave('drivers');
    } else {
      var _session$user3, _session$user4;
      socket.leave({
        room: 'driver_locations',
        user_id: session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id,
        role: 'manager'
      });
      socket.leave({
        room: 'drivers',
        user_id: session === null || session === void 0 || (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.id,
        role: 'manager'
      });
    }
  };
  var handleSocketDisconnect = function handleSocketDisconnect() {
    socket.socket.on('connect', handleJoinMainRooms);
  };
  (0, _react.useEffect)(function () {
    if (!(session !== null && session !== void 0 && session.auth) || session !== null && session !== void 0 && session.loading || !(socket !== null && socket !== void 0 && socket.socket) || disableSocketRoomDriver) return;
    handleJoinMainRooms();
    socket.socket.on('disconnect', handleSocketDisconnect);
    return function () {
      handleLeaveMainRooms();
      socket.socket.off('disconnect', handleSocketDisconnect);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, session === null || session === void 0 ? void 0 : session.auth, session === null || session === void 0 ? void 0 : session.loading, disableSocketRoomDriver, useBatchSockets]);
  (0, _react.useEffect)(function () {
    getOnlineOfflineDrivers(driversList.drivers);
  }, [driversList.drivers]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversList: driversList,
    companysList: companysList,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    driverActionStatus: driverActionStatus,
    companyActionStatus: companyActionStatus,
    driversIsOnline: driversIsOnline,
    driversSubfilter: driversSubfilter,
    searchValue: searchValue,
    handleAssignDriverCompany: handleAssignDriverCompany,
    handleChangeSearch: handleChangeSearch,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter,
    handleAssignDriver: handleAssignDriver,
    selectedDriver: selectedDriver,
    setSelectedDriver: setSelectedDriver,
    assignedOrders: assignedOrders
  })));
};
exports.DriversList = DriversList;
DriversList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
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
DriversList.defaultProps = {
  propsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};