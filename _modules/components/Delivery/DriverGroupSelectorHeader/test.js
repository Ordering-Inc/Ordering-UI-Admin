"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _orderingComponentsAdmin = require("ordering-components-admin");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupsList = exports.DriversGroupsList = function DriversGroupsList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    isDriversMangersRequired = props.isDriversMangersRequired,
    isHeaderComponent = props.isHeaderComponent,
    paginationSettings = props.paginationSettings,
    propsToFetch = props.propsToFetch;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      groups: [],
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    driversGroupsState = _useState2[0],
    setDriversGroupsState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      managers: [],
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    driversManagersList = _useState4[0],
    setDriversManagersList = _useState4[1];
  var _useState5 = (0, _react.useState)({
      businesses: [],
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    businessesList = _useState6[0],
    setBusinessesList = _useState6[1];
  var _useState7 = (0, _react.useState)({
      paymethods: [],
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    paymethodsList = _useState8[0],
    setPaymethodsList = _useState8[1];
  var _useState9 = (0, _react.useState)({
      drivers: [],
      loading: false,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    driversList = _useState10[0],
    setDriversList = _useState10[1];
  var _useState11 = (0, _react.useState)({
      companies: [],
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    driversCompanyList = _useState12[0],
    setDriversCompanyList = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    searchValue = _useState14[0],
    setSearchValue = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    startSeveralDeleteStart = _useState16[0],
    setStartSeveralDeleteStart = _useState16[1];
  var _useState17 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    actionState = _useState18[0],
    setActionState = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedGroupList = _useState20[0],
    setSelectedGroupList = _useState20[1];
  var _useState21 = (0, _react.useState)(true),
    _useState22 = _slicedToArray(_useState21, 2),
    actionDisabled = _useState22[0],
    setActionDisabled = _useState22[1];
  var _useState23 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    paginationProps = _useState24[0],
    setPaginationProps = _useState24[1];

  /**
  * Method to get the driver groups from API
  */
  var getHeaderDriversGroups = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
      var requestOptions, where, conditions, searchConditions, response, content, result, pagination, error, nextPageItems, remainingItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            where = [];
            conditions = [];
            if (searchValue) {
              searchConditions = [];
              searchConditions.push({
                attribute: 'name',
                value: {
                  condition: 'ilike',
                  value: encodeURIComponent("%".concat(searchValue, "%"))
                }
              });
              searchConditions.push({
                attribute: 'lastname',
                value: {
                  condition: 'ilike',
                  value: encodeURI("%".concat(searchValue, "%"))
                }
              });
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
            _context.next = 9;
            return fetch("".concat(ordering.root, "/drivergroups?page=").concat(page, "&page_size=").concat(pageSize, "&params=").concat(propsToFetch, "&where=").concat(JSON.stringify(where)), requestOptions);
          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();
          case 12:
            content = _context.sent;
            result = content.result, pagination = content.pagination, error = content.error;
            if (!error) {
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: result,
                loading: false
              }));
            } else {
              driversGroupsState.groups = result;
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                loading: false
              }));
            }
            nextPageItems = 0;
            if (pagination.current_page !== pagination.total_pages) {
              remainingItems = pagination.total - pagination.page_size * pagination.current_page;
              nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
            }
            setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
              currentPage: pagination.current_page,
              pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
              totalPages: pagination.total_pages,
              totalItems: pagination.total,
              from: pagination.from,
              to: pagination.to,
              nextPageItems: nextPageItems
            }));
            _context.next = 23;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 20]]);
    }));
    return function getHeaderDriversGroups(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get the drivers groups from API
   */
  var getDriversGroups = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content, found;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context2.next = 5;
            return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            content = _context2.sent;
            if (!content.error) {
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: content.result,
                loading: false
              }));
              if ((user === null || user === void 0 ? void 0 : user.level) === 5) {
                found = content.result.find(function (group) {
                  return (group === null || group === void 0 ? void 0 : group.administrator_id) === (user === null || user === void 0 ? void 0 : user.id);
                });
                if (found) setActionDisabled(false);else setActionDisabled(true);
              } else {
                setActionDisabled(false);
              }
            }
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getDriversGroups() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to  get the driver managers from API
   */
  var getDriverManagers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _yield$ordering$setAc, _yield$ordering$setAc2, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
              loading: false
            }));
            _context3.next = 4;
            return ordering.setAccessToken(token).users().where([{
              attribute: 'level',
              value: 5
            }]).select(['name', 'email', 'photo']).get();
          case 4:
            _yield$ordering$setAc = _context3.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            if (!error) {
              setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
                loading: false,
                managers: result
              }));
            }
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function getDriverManagers() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses from API
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: true
            }));
            _context4.next = 4;
            return ordering.setAccessToken(token).businesses().select(['name', 'logo']).asDashboard().get();
          case 4:
            _yield$ordering$setAc3 = _context4.sent;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            if (!error) {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                businesses: result
              }));
            }
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    return function getBusinesses() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get drivers from API
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _yield$ordering$setAc5, _yield$ordering$setAc6, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false
            }));
            _context5.next = 4;
            return ordering.setAccessToken(token).users().where([{
              attribute: 'level',
              value: 4
            }]).select(['name', 'lastname', 'email', 'photo']).get();
          case 4:
            _yield$ordering$setAc5 = _context5.sent;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            if (!error) {
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                drivers: result
              }));
            }
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function getDrivers() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to get the paymethods from API
   */
  var getPaymethods = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context6.next = 5;
            return fetch("".concat(ordering.root, "/paymethods?params=name,gateway&where={%22enabled%22:true}"), requestOptions);
          case 5:
            response = _context6.sent;
            _context6.next = 8;
            return response.json();
          case 8:
            content = _context6.sent;
            if (!content.error) {
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                paymethods: content.result,
                loading: false
              }));
            }
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }));
    return function getPaymethods() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to get the drivers companies from API
   */
  var getDriversCompanies = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context7.next = 5;
            return fetch("".concat(ordering.root, "/driver_companies?params=name"), requestOptions);
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            content = _context7.sent;
            if (!content.error) {
              setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
                companies: content.result,
                loading: false
              }));
            }
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function getDriversCompanies() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to update selected drivers group from API
   * @param {Number} driverGroupId
   * @param {Object} changes
   */
  var handleUpdateDriversGroup = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(driverGroupId, changes) {
      var requestOptions, response, content, groups;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true,
              error: null
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context8.next = 6;
            return fetch("".concat(ordering.root, "/drivergroups/").concat(driverGroupId), requestOptions);
          case 6:
            response = _context8.sent;
            _context8.next = 9;
            return response.json();
          case 9:
            content = _context8.sent;
            if (!content.error) {
              setActionState({
                error: null,
                loading: false
              });
              groups = driversGroupsState.groups.filter(function (group) {
                if (group.id === driverGroupId) {
                  Object.assign(group, content.result);
                }
                return true;
              });
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: groups
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context8.next = 16;
            break;
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            setActionState({
              loading: false,
              error: [_context8.t0.message]
            });
          case 16:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 13]]);
    }));
    return function handleUpdateDriversGroup(_x3, _x4) {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the drivers group from API
   * @param {Number} driversGroupId
   */
  var handleDeleteDriversGroup = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(driversGroupId) {
      var requestOptions, response, content, groups, groupList;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true,
              error: null
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context9.next = 6;
            return fetch("".concat(ordering.root, "/drivergroups/").concat(driversGroupId), requestOptions);
          case 6:
            response = _context9.sent;
            _context9.next = 9;
            return response.json();
          case 9:
            content = _context9.sent;
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              groups = driversGroupsState.groups.filter(function (group) {
                return group.id !== driversGroupId;
              });
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: groups
              }));
              showToast(_orderingComponentsAdmin.ToastType.Success, t('DRIVER_GROUP_DELETED', 'Driver group deleted'));
              if (startSeveralDeleteStart) {
                groupList = _toConsumableArray(selectedGroupList);
                groupList.shift();
                if (groupList.length === 0) {
                  setStartSeveralDeleteStart(false);
                }
                setSelectedGroupList(groupList);
              }
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
              setStartSeveralDeleteStart(false);
            }
            _context9.next = 16;
            break;
          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            setActionState({
              loading: false,
              error: [_context9.t0.message]
            });
          case 16:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 13]]);
    }));
    return function handleDeleteDriversGroup(_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleSelectGroup = function handleSelectGroup(groupId) {
    var ids = [];
    if (selectedGroupList.includes(groupId)) {
      ids = selectedGroupList.filter(function (id) {
        return id !== groupId;
      });
    } else {
      ids = [].concat(_toConsumableArray(selectedGroupList), [groupId]);
    }
    setSelectedGroupList(ids);
  };
  var handleAllSelectGroup = function handleAllSelectGroup() {
    var _driversGroupsState$g;
    var allIds = (_driversGroupsState$g = driversGroupsState.groups) === null || _driversGroupsState$g === void 0 ? void 0 : _driversGroupsState$g.reduce(function (ids, group) {
      return [].concat(_toConsumableArray(ids), [group.id]);
    }, []);
    if (selectedGroupList.length === allIds.length) {
      setSelectedGroupList([]);
    } else {
      setSelectedGroupList(allIds);
    }
  };
  (0, _react.useEffect)(function () {
    if (!startSeveralDeleteStart || selectedGroupList.length === 0) return;
    handleDeleteDriversGroup(selectedGroupList[0]);
  }, [selectedGroupList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    getHeaderDriversGroups(paginationSettings.initialPage, paginationProps.pageSize);
    if (isHeaderComponent) return;
    getDriversGroups();
    if (isDriversMangersRequired) {
      getDriverManagers();
    }
    getDrivers();
    getBusinesses();
    getPaymethods();
    getDriversCompanies();
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversGroupsState: driversGroupsState,
    setDriversGroupsState: setDriversGroupsState,
    driversManagersList: driversManagersList,
    businessesList: businessesList,
    paymethodsList: paymethodsList,
    driversList: driversList,
    driversCompanyList: driversCompanyList,
    actionState: actionState,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    handleDeleteSelectedGroups: function handleDeleteSelectedGroups() {
      return setStartSeveralDeleteStart(true);
    },
    selectedGroupList: selectedGroupList,
    handleSelectGroup: handleSelectGroup,
    handleAllSelectGroup: handleAllSelectGroup,
    actionDisabled: actionDisabled,
    getHeaderDriversGroups: getHeaderDriversGroups,
    pagination: paginationProps,
    onSearch: setSearchValue,
    searchValue: searchValue
  })));
};
DriversGroupsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: []
};