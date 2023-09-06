"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardOrdersList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponentsAdmin = require("ordering-components-admin");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-prototype-builtins */
var DashboardOrdersList = function DashboardOrdersList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch,
    orders = props.orders,
    isOnlyDelivery = props.isOnlyDelivery,
    driverId = props.driverId,
    customerId = props.customerId,
    businessId = props.businessId,
    orderIds = props.orderIds,
    deletedOrderIds = props.deletedOrderIds,
    orderStatus = props.orderStatus,
    orderBy = props.orderBy,
    orderDirection = props.orderDirection,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    filterValues = props.filterValues,
    searchValue = props.searchValue,
    isSearchByOrderId = props.isSearchByOrderId,
    isSearchByCustomerEmail = props.isSearchByCustomerEmail,
    isSearchByCustomerPhone = props.isSearchByCustomerPhone,
    isSearchByBusinessName = props.isSearchByBusinessName,
    isSearchByDriverName = props.isSearchByDriverName,
    orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate,
    timeStatus = props.timeStatus,
    driversList = props.driversList,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)({
      loading: !orders,
      error: null,
      orders: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderList = _useState2[0],
    setOrderList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    pagination = _useState4[0],
    setPagination = _useState4[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var socket = (0, _orderingComponentsAdmin.useWebsocket)();
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    actionStatus = _useState6[0],
    setActionStatus = _useState6[1];
  var firstRender = (0, _react.useRef)(true);
  var sortOrdersArray = function sortOrdersArray(option, array) {
    var resArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (resArray) {
      if (option === 'id') {
        if (orderDirection === 'desc') {
          return array.sort(function (a, b) {
            return b.id - a.id;
          });
        }
        if (orderDirection === 'asc') {
          return array.sort(function (a, b) {
            return a.id - b.id;
          });
        }
      }
      if (option === 'last_direct_message_at') {
        return array.sort(function (a, b) {
          return new Date(b.last_direct_message_at) - new Date(a.last_direct_message_at);
        });
      }
      return array;
    } else {
      return sortOrdersObject(option, array);
    }
  };
  var sortOrdersObject = function sortOrdersObject(option, obj) {
    if (_typeof(obj) !== 'object') {
      if (Array.isArray(obj)) {
        obj = obj.reduce(function (acc, item) {
          acc[item.id] = item;
          return acc;
        }, {});
      }
    }
    var sortedKeys = Object.keys(obj);
    if (option === 'id') {
      sortedKeys.sort(function (a, b) {
        var idA = Number(a);
        var idB = Number(b);
        if (orderDirection === 'desc') {
          return idB - idA;
        }
        if (orderDirection === 'asc') {
          return idA - idB;
        }
        return 0;
      });
    } else if (option === 'last_direct_message_at') {
      sortedKeys.sort(function (a, b) {
        var dateA = new Date(obj[b].last_direct_message_at);
        var dateB = new Date(obj[a].last_direct_message_at);
        return dateB - dateA;
      });
    }
    var sortedObj = {};
    for (var _i = 0, _sortedKeys = sortedKeys; _i < _sortedKeys.length; _i++) {
      var key = _sortedKeys[_i];
      sortedObj[key] = obj[key];
    }
    return sortedObj;
  };
  var ArrayToObject = function ArrayToObject(array) {
    return array.reduce(function (res, item) {
      res[item.id] = item;
      return res;
    }, {});
  };

  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(order) {
      var source, _yield$ordering$setAc, content, _orders;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            source = {};
            requestsState.updateOrders = source;
            _context.next = 6;
            return ordering.setAccessToken(accessToken).orders(order === null || order === void 0 ? void 0 : order.id).save({
              status: order.newStatus
            }, {
              cancelToken: source
            });
          case 6:
            _yield$ordering$setAc = _context.sent;
            content = _yield$ordering$setAc.content;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              _orders = orderList.orders;
              (_orders === null || _orders === void 0 ? void 0 : _orders[order === null || order === void 0 ? void 0 : order.id]) && delete _orders[order === null || order === void 0 ? void 0 : order.id];
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                orders: _orders
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context.t0.message]
            });
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function handleUpdateOrderStatus(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get orders from API
   * @param {number} page page number
   */
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageSize, page) {
      var where, conditions, options, getFilterStatusInOrderStatus, searchConditions, _filterValues$metafie, filterConditons, metafieldConditions, source, functionFetch;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            where = [];
            conditions = [];
            options = {
              query: {
                orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
                page: page,
                page_size: pageSize
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
            if (orderIds) {
              conditions.push({
                attribute: 'id',
                value: orderIds
              });
            }
            if (Object.keys(filterValues).length === 0) {
              if (orderStatus) {
                conditions.push({
                  attribute: 'status',
                  value: orderStatus
                });
              }
            } else {
              if (filterValues.statuses.length > 0) {
                // const checkInnerContain = filterValues.statuses.every((el) => {
                //   return orderStatus.indexOf(el) !== -1
                // })
                // const checkOutContain = orderStatus.every((el) => {
                //   return filterValues.statuses.indexOf(el) !== -1
                // })
                // if (checkInnerContain) conditions.push({ attribute: 'status', value: filterValues.statuses })
                // if (checkOutContain) {
                //   if (orderStatus) {
                //     conditions.push({ attribute: 'status', value: orderStatus })
                //   }
                // }
                getFilterStatusInOrderStatus = filterValues.statuses.filter(function (status) {
                  return orderStatus.includes(status);
                });
                conditions.push({
                  attribute: 'status',
                  value: getFilterStatusInOrderStatus
                });
              } else {
                if (orderStatus) {
                  conditions.push({
                    attribute: 'status',
                    value: orderStatus
                  });
                }
              }
            }
            if (isOnlyDelivery) {
              conditions.push({
                attribute: 'delivery_type',
                value: 1
              });
            }
            if (driverId) {
              conditions.push({
                attribute: 'driver_id',
                value: driverId
              });
            }
            if (customerId) {
              conditions.push({
                attribute: 'customer_id',
                value: customerId
              });
            }
            if (businessId) {
              conditions.push({
                attribute: 'business_id',
                value: businessId
              });
            }
            if (timeStatus) {
              conditions.push({
                attribute: 'time_status',
                value: timeStatus
              });
            }
            if (searchValue) {
              searchConditions = [];
              if (isSearchByOrderId) {
                searchConditions.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
                searchConditions.push({
                  attribute: 'external_id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
                searchConditions.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
                searchConditions.push({
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByCustomerEmail) {
                searchConditions.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
              }
              if (isSearchByCustomerPhone) {
                searchConditions.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
              }
              if (isSearchByBusinessName) {
                searchConditions.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
              }
              if (isSearchByDriverName) {
                searchConditions.push({
                  attribute: 'driver',
                  conditions: [{
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (Object.keys(filterValues).length) {
              filterConditons = [];
              if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
                filterConditons.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId, "%"))
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus) !== null) {
                filterConditons.push({
                  attribute: 'logistic_status',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) !== null) {
                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) === 0) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: {
                      condition: '>=',
                      value: 0
                    }
                  });
                }
                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) === 1) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: null
                  });
                }
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
                filterConditons.push({
                  attribute: 'external_id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId, "%"))
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 || (_filterValues$metafie = filterValues.metafield) === null || _filterValues$metafie === void 0 ? void 0 : _filterValues$metafie.length) > 0) {
                metafieldConditions = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
                  return {
                    attribute: 'metafields',
                    conditions: [{
                      attribute: 'key',
                      value: item === null || item === void 0 ? void 0 : item.key
                    }, {
                      attribute: 'value',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(item === null || item === void 0 ? void 0 : item.value, "%"))
                      }
                    }],
                    conector: 'AND'
                  };
                });
                filterConditons.push({
                  conector: 'OR',
                  conditions: metafieldConditions
                });
              }
              if (filterValues.deliveryFromDatetime !== null) {
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '>=',
                    value: encodeURI(filterValues.deliveryFromDatetime)
                  }
                });
              }
              if (filterValues.deliveryEndDatetime !== null) {
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '<=',
                    value: filterValues.deliveryEndDatetime
                  }
                });
              }
              if (filterValues.businessIds.length !== 0) {
                filterConditons.push({
                  attribute: 'business_id',
                  value: filterValues.businessIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode.length) !== 0) {
                filterConditons.push({
                  attribute: 'country_code',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency.length) !== 0) {
                filterConditons.push({
                  attribute: 'currency',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency
                });
              }
              if (filterValues.driverIds.length !== 0) {
                filterConditons.push({
                  attribute: 'driver_id',
                  value: filterValues.driverIds
                });
              }
              if (filterValues.deliveryTypes.length !== 0) {
                filterConditons.push({
                  attribute: 'delivery_type',
                  value: filterValues.deliveryTypes
                });
              }
              if (filterValues.driverGroupIds.length !== 0) {
                filterConditons.push({
                  attribute: 'driver_id',
                  value: filterValues.driverGroupIds
                });
              }
              if (filterValues.paymethodIds.length !== 0) {
                filterConditons.push({
                  attribute: 'paymethod_id',
                  value: filterValues.paymethodIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'city_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds
                  }]
                });
              }
              if (filterConditons.length) {
                conditions.push({
                  conector: 'AND',
                  conditions: filterConditons
                });
              }
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            if (propsToFetch) {
              functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch).where(where);
            } else {
              functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().where(where);
            }
            _context2.next = 20;
            return functionFetch.get(options);
          case 20:
            return _context2.abrupt("return", _context2.sent);
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getOrders(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to detect if incoming order and update order belong to filter.
   * @param {Object} order incoming order and update order
   */
  var isFilteredOrder = function isFilteredOrder(order, lastHistoryData) {
    var _filterValues$country, _filterValues$cityIds, _filterValues$driverG, _filterValues$currenc, _filterValues$metafie2;
    var filterCheck = true;
    if (searchValue) {
      var searchCheck = false;
      var lowerCaseSearchValue = searchValue.toLowerCase();
      if (isSearchByOrderId) {
        var _order$id;
        if (((order === null || order === void 0 || (_order$id = order.id) === null || _order$id === void 0 ? void 0 : _order$id.toString()) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByCustomerEmail) {
        var _order$customer;
        if (((order === null || order === void 0 || (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.email) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByCustomerPhone) {
        var _order$customer2;
        if (((order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.cellphone) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByBusinessName) {
        var _order$business;
        if (((order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByDriverName) {
        var _order$driver;
        if (((order === null || order === void 0 || (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.name) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (!searchCheck) filterCheck = false;
    }
    if (orderStatus !== undefined && orderStatus.length > 0) {
      var _lastHistoryData$find;
      var lastStatus = lastHistoryData === null || lastHistoryData === void 0 || (_lastHistoryData$find = lastHistoryData.find(function (item) {
        return item.attribute === 'status';
      })) === null || _lastHistoryData$find === void 0 ? void 0 : _lastHistoryData$find.old;
      if (!orderStatus.includes(parseInt(order.status)) && !orderStatus.includes(parseInt(lastStatus))) {
        filterCheck = false;
      }
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
      var _order$id2;
      if (!(order !== null && order !== void 0 && (_order$id2 = order.id) !== null && _order$id2 !== void 0 && _order$id2.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
      var _order$external_id;
      if (!(order !== null && order !== void 0 && (_order$external_id = order.external_id) !== null && _order$external_id !== void 0 && _order$external_id.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.deliveryFromDatetime) {
      var isBefore = (0, _moment.default)(order === null || order === void 0 ? void 0 : order.delivery_datetime).isBefore(filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime, 'second');
      if (isBefore) filterCheck = false;
    }
    if (filterValues.deliveryEndDatetime) {
      var isAfter = (0, _moment.default)(order === null || order === void 0 ? void 0 : order.delivery_datetime).isAfter(filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime, 'second');
      if (isAfter) filterCheck = false;
    }
    if (filterValues.businessIds !== undefined && filterValues.businessIds.length > 0) {
      if (!filterValues.businessIds.includes(order.business_id)) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 || (_filterValues$country = filterValues.countryCode) === null || _filterValues$country === void 0 ? void 0 : _filterValues$country.length) > 0) {
      if (!filterValues.countryCode.includes(order === null || order === void 0 ? void 0 : order.country_code)) filterCheck = false;
    }
    if ((filterValues === null || filterValues === void 0 || (_filterValues$cityIds = filterValues.cityIds) === null || _filterValues$cityIds === void 0 ? void 0 : _filterValues$cityIds.length) > 0) {
      if (!filterValues.cityIds.includes(order.city_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.driverIds !== undefined && filterValues.driverIds.length > 0) {
      var _lastHistoryData$find2;
      var lastDriverId = lastHistoryData === null || lastHistoryData === void 0 || (_lastHistoryData$find2 = lastHistoryData.find(function (item) {
        return item.attribute === 'driver_id';
      })) === null || _lastHistoryData$find2 === void 0 ? void 0 : _lastHistoryData$find2.old;
      if (!filterValues.driverIds.includes(order.driver_id) && !filterValues.driverIds.includes(lastDriverId)) {
        filterCheck = false;
      }
    }
    if (filterValues.deliveryTypes !== undefined && filterValues.deliveryTypes.length > 0) {
      if (!filterValues.deliveryTypes.includes(order.delivery_type)) {
        filterCheck = false;
      }
    }
    if (filterValues.paymethodIds !== undefined && filterValues.paymethodIds.length > 0) {
      if (!filterValues.paymethodIds.includes(order.paymethod_id)) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 || (_filterValues$driverG = filterValues.driverGroupIds) === null || _filterValues$driverG === void 0 ? void 0 : _filterValues$driverG.length) > 0) {
      var _lastHistoryData$find3;
      var _lastDriverId = lastHistoryData === null || lastHistoryData === void 0 || (_lastHistoryData$find3 = lastHistoryData.find(function (item) {
        return item.attribute === 'driver_id';
      })) === null || _lastHistoryData$find3 === void 0 ? void 0 : _lastHistoryData$find3.old;
      if (!filterValues.driverGroupIds.includes(order.driver_id) && !filterValues.driverGroupIds.includes(_lastDriverId)) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 || (_filterValues$currenc = filterValues.currency) === null || _filterValues$currenc === void 0 ? void 0 : _filterValues$currenc.length) > 0) {
      if (!filterValues.currency.includes(order === null || order === void 0 ? void 0 : order.currency)) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.logisticStatus) {
      var _lastHistoryData$find4;
      var lastLogisticStatus = lastHistoryData === null || lastHistoryData === void 0 || (_lastHistoryData$find4 = lastHistoryData.find(function (item) {
        return item.attribute === 'logistic_status';
      })) === null || _lastHistoryData$find4 === void 0 ? void 0 : _lastHistoryData$find4.old;
      if ((order === null || order === void 0 ? void 0 : order.logistic_status) !== parseInt(filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus) && lastLogisticStatus !== parseInt(filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus)) filterCheck = false;
    }
    if ((filterValues === null || filterValues === void 0 || (_filterValues$metafie2 = filterValues.metafield) === null || _filterValues$metafie2 === void 0 ? void 0 : _filterValues$metafie2.length) > 0) {
      filterValues.metafield.forEach(function (item) {
        var _order$metafields;
        var found = order === null || order === void 0 || (_order$metafields = order.metafields) === null || _order$metafields === void 0 ? void 0 : _order$metafields.find(function (meta) {
          return meta.key === item.key && meta.value.includes(item.value);
        });
        if (!found) {
          filterCheck = false;
        }
      });
    }
    return filterCheck;
  };
  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (session.token) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context3.next = 6;
            return getOrders(pagination.pageSize, firstRender.current ? pagination.currentPage : 1);
          case 6:
            response = _context3.sent;
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            setOrderList({
              loading: false,
              orders: response.content.error ? {} : ArrayToObject(response.content.result),
              error: response.content.error ? response.content.result : null
            });
            firstRender.current = false;
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            if (_context3.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));
            }
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 12]]);
    }));
    return function loadOrders() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response, _orders;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context4.prev = 1;
            _context4.next = 4;
            return getOrders(pagination.pageSize, pagination.currentPage + 1);
          case 4:
            response = _context4.sent;
            _orders = orderList.orders;
            if (!response.content.error) {
              response.content.result.forEach(function (item) {
                _orders[item.id] = item;
              });
            }
            setOrderList({
              loading: false,
              orders: _orders,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            if (_context4.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));
            }
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 11]]);
    }));
    return function loadMoreOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  var getPageOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(pageSize, page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context5.prev = 1;
            _context5.next = 4;
            return getOrders(pageSize, page);
          case 4:
            response = _context5.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : ArrayToObject(response.content.result),
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            if (_context5.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 9]]);
    }));
    return function getPageOrders(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
  * Method to handle drag drop
  */
  var handleDrop = function handleDrop(event, columnName) {
    var _allowColumns$transfe, _allowColumns$columnN;
    event.preventDefault();
    var transferColumnName = event.dataTransfer.getData('transferColumnName');
    if (columnName === transferColumnName) return;
    var transferColumnOrder = (_allowColumns$transfe = allowColumns[transferColumnName]) === null || _allowColumns$transfe === void 0 ? void 0 : _allowColumns$transfe.order;
    var currentColumnOrder = (_allowColumns$columnN = allowColumns[columnName]) === null || _allowColumns$columnN === void 0 ? void 0 : _allowColumns$columnN.order;
    var _ref6 = transferColumnOrder < currentColumnOrder ? [transferColumnOrder, currentColumnOrder] : [currentColumnOrder, transferColumnOrder],
      _ref7 = _slicedToArray(_ref6, 2),
      lessOrder = _ref7[0],
      greaterOrder = _ref7[1];
    var _remainAllowColumns = {};
    var shouldUpdateColumns = Object.keys(allowColumns).filter(function (col) {
      var _allowColumns$col, _allowColumns$col2;
      return col !== transferColumnName && ((_allowColumns$col = allowColumns[col]) === null || _allowColumns$col === void 0 ? void 0 : _allowColumns$col.order) >= lessOrder && ((_allowColumns$col2 = allowColumns[col]) === null || _allowColumns$col2 === void 0 ? void 0 : _allowColumns$col2.order) <= greaterOrder;
    });
    shouldUpdateColumns.forEach(function (col) {
      var _allowColumns$col3;
      _remainAllowColumns[col] = _objectSpread(_objectSpread({}, allowColumns[col]), {}, {
        order: ((_allowColumns$col3 = allowColumns[col]) === null || _allowColumns$col3 === void 0 ? void 0 : _allowColumns$col3.order) + (transferColumnOrder < currentColumnOrder ? -1 : 1)
      });
    });
    var _allowColumnsUpdated = _objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, transferColumnName, _objectSpread(_objectSpread({}, allowColumns[transferColumnName]), {}, {
      order: currentColumnOrder
    })), _remainAllowColumns);
    saveUserSettings(_allowColumnsUpdated);
    setAllowColumns(_allowColumnsUpdated);
  };
  var saveUserSettings = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(allowColumnsUpdated) {
      var _session$user, _session$user2, _session$user3, _settings, _allowColumnsUpdated;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (session !== null && session !== void 0 && (_session$user = session.user) !== null && _session$user !== void 0 && _session$user.id) {
              _context6.next = 3;
              break;
            }
            return _context6.abrupt("return");
          case 3:
            _settings = session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.settings;
            _allowColumnsUpdated = _objectSpread(_objectSpread({}, allowColumnsUpdated), {}, {
              timer: _objectSpread(_objectSpread({}, allowColumnsUpdated === null || allowColumnsUpdated === void 0 ? void 0 : allowColumnsUpdated.timer), {}, {
                visable: false
              })
            });
            _context6.next = 7;
            return ordering.users(session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id).save({
              settings: _objectSpread(_objectSpread({}, _settings), {}, {
                orderColumns: _allowColumnsUpdated
              })
            }, {
              accessToken: accessToken
            });
          case 7:
            _context6.next = 12;
            break;
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.warn(_context6.t0, 'error');
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 9]]);
    }));
    return function saveUserSettings(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Listening order id to update for unread_count parameter
   */
  (0, _react.useEffect)(function () {
    if (orderIdForUnreadCountUpdate === null || Object.keys(orderList.orders).length === 0) return;
    var _orders = orderList.orders;
    _orders[orderIdForUnreadCountUpdate] = _objectSpread(_objectSpread({}, _orders[orderIdForUnreadCountUpdate]), {}, {
      unread_count: 0,
      unread_general_count: 0,
      unread_direct_count: 0
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: _orders
    }));
  }, [orderIdForUnreadCountUpdate]);

  /**
   * Listening deleted order
   */
  (0, _react.useEffect)(function () {
    if (!deletedOrderIds) return;
    var totalDeletedCount = 0;
    var _orders = {};
    for (var key in orderList.orders) {
      if (!deletedOrderIds.includes(key)) {
        _orders[key] = orderList.orders[key];
      } else {
        totalDeletedCount++;
      }
    }
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: _orders
    }));
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      total: (pagination === null || pagination === void 0 ? void 0 : pagination.total) - totalDeletedCount
    }));
  }, [JSON.stringify(deletedOrderIds)]);

  /**
   * Listening sesssion and filter values change
   */
  (0, _react.useEffect)(function () {
    if (session !== null && session !== void 0 && session.loading) return;
    if (orders) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: sortOrdersArray(orderBy, orders)
      }));
    } else {
      loadOrders();
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [session, searchValue, orderBy, filterValues, isOnlyDelivery, driverId, customerId, businessId, orders, orderStatus, timeStatus]);
  var handleUpdateOrder = function handleUpdateOrder(order) {
    var _order$products, _orderList$orders$upd, _orderList$orders;
    if ((order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 || (_order$products = _order$products[0]) === null || _order$products === void 0 ? void 0 : _order$products.type) === 'gift_card') return;
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    if (driverId && (order === null || order === void 0 ? void 0 : order.driver_id) !== driverId) return;
    if (isOnlyDelivery && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) return;
    if (typeof order.status === 'undefined') return;
    if (!isFilteredOrder(order)) {
      var _order$history, _order$history2;
      var length = order === null || order === void 0 || (_order$history = order.history) === null || _order$history === void 0 ? void 0 : _order$history.length;
      var lastHistoryData = order === null || order === void 0 || (_order$history2 = order.history[length - 1]) === null || _order$history2 === void 0 ? void 0 : _order$history2.data;
      if (isFilteredOrder(order, lastHistoryData)) {
        setPagination(function (prevPagination) {
          return _objectSpread(_objectSpread({}, prevPagination), {}, {
            total: prevPagination.total - 1
          });
        });
      }
      setOrderList(function (prevState) {
        var updatedOrders = prevState.orders;
        if (order !== null && order !== void 0 && order.id && updatedOrders.hasOwnProperty(order.id)) {
          delete updatedOrders[order.id];
        }
        return _objectSpread(_objectSpread({}, prevState), {}, {
          orders: updatedOrders
        });
      });
      return;
    }
    var updatedOrder = order;
    if (!(order !== null && order !== void 0 && order.driver) && order !== null && order !== void 0 && order.driver_id) {
      var updatedDriver = driversList === null || driversList === void 0 ? void 0 : driversList.drivers.find(function (driver) {
        return driver.id === (order === null || order === void 0 ? void 0 : order.driver_id);
      });
      if (updatedDriver) {
        updatedOrder.driver = _objectSpread({}, updatedDriver);
      }
    }
    var found = (_orderList$orders$upd = (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders[updatedOrder === null || updatedOrder === void 0 ? void 0 : updatedOrder.id]) !== null && _orderList$orders$upd !== void 0 ? _orderList$orders$upd : null;
    if (found) {
      var updatedOrders = orderList.orders;
      if (updatedOrders[order === null || order === void 0 ? void 0 : order.id]) {
        updatedOrders[order.id] = _objectSpread(_objectSpread({}, updatedOrders[order.id]), updatedOrder);
      }
      var _orders = sortOrdersArray(orderBy, updatedOrders);
      setOrderList(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          orders: _orders
        });
      });
    } else {
      var _order$history3, _order$history4;
      var statusChange = order === null || order === void 0 || (_order$history3 = order.history) === null || _order$history3 === void 0 || (_order$history3 = _order$history3[(order === null || order === void 0 || (_order$history4 = order.history) === null || _order$history4 === void 0 ? void 0 : _order$history4.length) - 1]) === null || _order$history3 === void 0 || (_order$history3 = _order$history3.data) === null || _order$history3 === void 0 ? void 0 : _order$history3.find(function (_ref9) {
        var attribute = _ref9.attribute;
        return attribute === 'status';
      });
      var _updatedOrders = _objectSpread(_objectSpread({}, orderList.orders), {}, _defineProperty({}, order === null || order === void 0 ? void 0 : order.id, order));
      var _orders2 = sortOrdersArray(orderBy, _updatedOrders);
      setOrderList(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          orders: Object.fromEntries(Object.entries(_orders2).slice(0, pagination.pageSize))
        });
      });
      if (statusChange) {
        var from = parseInt(statusChange.old);
        if (!orderStatus.includes(from)) {
          setPagination(function (prevPagination) {
            return _objectSpread(_objectSpread({}, prevPagination), {}, {
              total: prevPagination.total + 1
            });
          });
        }
      }
    }
  };
  var handleRegisterOrder = function handleRegisterOrder(order) {
    var _order$products2, _orderList$orders$ord, _orderList$orders2;
    if ((order === null || order === void 0 || (_order$products2 = order.products) === null || _order$products2 === void 0 || (_order$products2 = _order$products2[0]) === null || _order$products2 === void 0 ? void 0 : _order$products2.type) === 'gift_card') return;
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    if (driverId && (order === null || order === void 0 ? void 0 : order.driver_id) !== driverId) return;
    if (isOnlyDelivery && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) return;
    var found = (_orderList$orders$ord = (_orderList$orders2 = orderList.orders) === null || _orderList$orders2 === void 0 ? void 0 : _orderList$orders2[order === null || order === void 0 ? void 0 : order.id]) !== null && _orderList$orders$ord !== void 0 ? _orderList$orders$ord : null;
    if (found) return;
    if (!isFilteredOrder(order)) return;
    setPagination(function (prevPagination) {
      return _objectSpread(_objectSpread({}, prevPagination), {}, {
        total: prevPagination.total + 1
      });
    });
    setOrderList(function (prevState) {
      var _prevState$orders$ord, _prevState$orders;
      var found = (_prevState$orders$ord = (_prevState$orders = prevState.orders) === null || _prevState$orders === void 0 ? void 0 : _prevState$orders[order === null || order === void 0 ? void 0 : order.id]) !== null && _prevState$orders$ord !== void 0 ? _prevState$orders$ord : null;
      if (found) return prevState;
      var updatedOrders = _objectSpread(_objectSpread({}, prevState.orders), {}, _defineProperty({}, order === null || order === void 0 ? void 0 : order.id, order));
      var sortedOrders = sortOrdersArray(orderBy, updatedOrders);
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: Object.fromEntries(Object.entries(sortedOrders).slice(0, pagination.pageSize))
      });
    });
  };
  var handleNewMessage = function handleNewMessage(message) {
    var _message$order;
    if (Object.keys(orderList.orders).length === 0) return;
    var _orders = orderList.orders;
    var orderToUpdate = _orders[(_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id];
    if (orderToUpdate) {
      if (orderToUpdate.last_message_at !== message.created_at) {
        if (message.type === 1) {
          orderToUpdate.last_general_message_at = message.created_at;
          if (message.author.level !== 0) {
            orderToUpdate.unread_general_count += 1;
          }
        } else {
          orderToUpdate.last_direct_message_at = message.created_at;
          if (message.author.level !== 0) {
            orderToUpdate.unread_direct_count += 1;
          }
        }
        orderToUpdate.last_message_at = message.created_at;
        if (message.author.level !== 0) {
          orderToUpdate.unread_count += 1;
        }
        var updatedOrders = _objectSpread({}, _orders);
        updatedOrders[message.order.id] = orderToUpdate;
        var sortedOrders = sortOrdersArray(orderBy, updatedOrders);
        setOrderList(function (prevOrderList) {
          return _objectSpread(_objectSpread({}, prevOrderList), {}, {
            orders: sortedOrders
          });
        });
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;
    if ((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) !== 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== 0) {
      if (Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize) >= (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage)) {
        if (Object.keys(orderList.orders).length === 0) {
          getPageOrders(pagination.pageSize, pagination.currentPage);
        }
      } else {
        getPageOrders(pagination.pageSize, pagination.currentPage - 1);
      }
    }
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleRegisterOrder);
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleRegisterOrder);
      socket.off('message', handleNewMessage);
    };
  }, [orderList.orders, pagination, orderBy, socket, driversList, customerId, driverId]);

  // Listening for customer rating
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      var _orders = orderList.orders;
      var orderToUpdate = _orders[review.order_id];
      if (orderToUpdate) {
        orderToUpdate.user_review = review;
        var updatedOrders = _objectSpread({}, _orders);
        updatedOrders[review.order_id] = orderToUpdate;
        var sortedOrders = sortOrdersArray(orderBy, updatedOrders);
        setOrderList(function (prevOrderList) {
          return _objectSpread(_objectSpread({}, prevOrderList), {}, {
            orders: sortedOrders
          });
        });
      }
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderList, orderBy]);
  var reloadPageOrders = function reloadPageOrders() {
    getPageOrders(pagination.pageSize, pagination.currentPage);
  };
  (0, _react.useEffect)(function () {
    events.on('websocket_connected', reloadPageOrders);
    return function () {
      events.off('websocket_connected', reloadPageOrders);
    };
  }, [pagination]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    handleDrop: handleDrop,
    saveUserSettings: saveUserSettings
  })));
};
exports.DashboardOrdersList = DashboardOrdersList;
DashboardOrdersList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};