"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarDriversList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
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
var CalendarDriversList = exports.CalendarDriversList = function CalendarDriversList(props) {
  var _selectedBlock$block, _selectedBlock$block2, _paginationSettings$p, _selectedBlock$block14;
  var UIComponent = props.UIComponent,
    paginationSettings = props.paginationSettings,
    propsToFetch = props.propsToFetch;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      state: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isTimeChangeError = _useState2[0],
    setIsTimeChangeError = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedGroup = _useState4[0],
    setSelectedGroup = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showBreakBlock = _useState6[0],
    setShowBreakBlock = _useState6[1];
  var _useState7 = (0, _react.useState)('none'),
    _useState8 = _slicedToArray(_useState7, 2),
    propagation = _useState8[0],
    setPropagation = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    openDeleteModal = _useState10[0],
    setOpenDeleteModal = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: false,
      events: [],
      user: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    stackEventsState = _useState12[0],
    setStackEventsState = _useState12[1];
  var _useState13 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    alertState = _useState14[0],
    setAlertState = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openEditModal = _useState16[0],
    setOpenEditModal = _useState16[1];
  var _useState17 = (0, _react.useState)({
      driverIds: []
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    filterValues = _useState18[0],
    setFilterValues = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    filtOption = _useState20[0],
    setFiltOption = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    openModal = _useState22[0],
    setOpenModal = _useState22[1];
  var _useState23 = (0, _react.useState)([(0, _moment.default)().startOf('day').utc().format('YYYY-MM-DD HH:mm:ss'), (0, _moment.default)().endOf('day').utc().format('YYYY-MM-DD HH:mm:ss')]),
    _useState24 = _slicedToArray(_useState23, 2),
    date = _useState24[0],
    setDate = _useState24[1];
  var _useState25 = (0, _react.useState)({
      user: null,
      block: null
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedBlock = _useState26[0],
    setSelectedBlock = _useState26[1];
  var _useState27 = (0, _react.useState)(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block ? selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block = selectedBlock.block) === null || _selectedBlock$block === void 0 ? void 0 : _selectedBlock$block.start : new Date()),
    _useState28 = _slicedToArray(_useState27, 2),
    selectedDate = _useState28[0],
    setSelectedDate = _useState28[1];
  var actualDate = (0, _moment.default)(selectedDate).format('YYYY-MM-DD');
  var _useState29 = (0, _react.useState)(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block ? selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block2 = selectedBlock.block) === null || _selectedBlock$block2 === void 0 ? void 0 : _selectedBlock$block2.until : new Date()),
    _useState30 = _slicedToArray(_useState29, 2),
    selectedUntilDate = _useState30[0],
    setSelectedUntilDate = _useState30[1];
  var _useState31 = (0, _react.useState)({
      state: {
        start: "".concat(actualDate, " 00:00:00"),
        end: "".concat(actualDate, " 23:59:00")
      },
      error: null,
      loading: false
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    scheduleState = _useState32[0],
    setScheduleState = _useState32[1];
  var _useState33 = (0, _react.useState)({
      freq: null,
      byweekday: []
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    ruleState = _useState34[0],
    setRuleState = _useState34[1];
  var _useState35 = (0, _react.useState)({
      initialPage: 1,
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    paginationProps = _useState36[0],
    setPaginationProps = _useState36[1];
  var timeErrorList = [t('END_TIME_LATER', 'Choose an end time later than the start time.'), t('START_TIME_EARLY', 'Choose a start time earlier than the end time.'), t('BREAK_END_TIME_EARLY', 'Choose a break end time later than the start/break start time and earlier than end time.'), t('BREAK_START_TIME_LATER', 'Choose a break start time later than the start times and earlier than end/break end times.'), t('DATE_RANGE_ERROR', 'The difference between dates should not be greater than 31'), t('UNTIL_TIME_LATER', 'Choose an until time later than the start time with a difference of 2 months or less.')];

  /**
   * Get session
   */
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];

  /**
   * Array to save drivers
   */
  var _useState37 = (0, _react.useState)({
      users: [],
      loading: false,
      error: null
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    driversList = _useState38[0],
    setDriversList = _useState38[1];
  var handleSetInitialStates = function handleSetInitialStates() {
    setSelectedBlock({
      user: null,
      block: null
    });
    var initialState = {
      start: "".concat(actualDate, " 00:00:00"),
      end: "".concat(actualDate, " 23:59:00")
    };
    setScheduleState({
      state: initialState,
      loading: false,
      error: null
    });
    setShowBreakBlock(false);
    setRuleState({
      freq: null,
      byweekday: []
    });
    setPropagation('none');
    setSelectedDate(new Date(date[0]));
    setSelectedUntilDate(new Date(date[0]));
    setStackEventsState({
      open: false,
      events: [],
      user: null
    });
    setOpenModal(false);
  };
  /**
   * Method to get drivers from API
   * @param {Number} page change time
   * @param {Number} pageSize open or close time
   * @param {Number} selectedGroup
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize, selectedGroupId) {
      var _filterValues$driverI, conditions, where, requestOptions, endpoint, response, content, result, pagination, error, formattedUtcToLocalUsers, nextPageItems, remainingItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(page, pageSize, selectedGroup);
            _context.prev = 1;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: true
            }));
            conditions = [{
              attribute: 'level',
              value: '4'
            }];
            if ((filterValues === null || filterValues === void 0 || (_filterValues$driverI = filterValues.driverIds) === null || _filterValues$driverI === void 0 ? void 0 : _filterValues$driverI.length) > 0) {
              conditions.push({
                attribute: 'id',
                value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds
              });
            }
            where = "&where=".concat(JSON.stringify({
              conditions: conditions,
              conector: 'AND'
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            endpoint = selectedGroupId ? "".concat(ordering.root, "/drivergroups/").concat(selectedGroupId, "/drivers") : "".concat(ordering.root, "/users");
            _context.next = 10;
            return fetch("".concat(endpoint, "?delivery_block_from=").concat(date[0], "&delivery_block_to=").concat(date[1], "&page=").concat(page, "&page_size=").concat(pageSize, "&params=").concat(propsToFetch).concat(where), requestOptions);
          case 10:
            response = _context.sent;
            _context.next = 13;
            return response.json();
          case 13:
            content = _context.sent;
            result = content.result, pagination = content.pagination, error = content.error;
            if (error) {
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: result
              }));
            } else {
              formattedUtcToLocalUsers = result.map(function (user) {
                return _objectSpread(_objectSpread({}, user), {}, {
                  delivery_blocks: user.delivery_blocks.map(function (block) {
                    return _objectSpread(_objectSpread({}, block), {}, {
                      start: (0, _moment.default)(_moment.default.utc(block.start).toDate()).local().format('YYYY-MM-DD HH:mm:ss'),
                      end: (0, _moment.default)(_moment.default.utc(block.end).toDate()).local().format('YYYY-MM-DD HH:mm:ss'),
                      break_start: block.break_start ? (0, _moment.default)(_moment.default.utc(block.break_start).toDate()).local().format('YYYY-MM-DD HH:mm:ss') : null,
                      break_end: block.break_end ? (0, _moment.default)(_moment.default.utc(block.break_end).toDate()).local().format('YYYY-MM-DD HH:mm:ss') : null
                    });
                  })
                });
              });
              driversList.users = formattedUtcToLocalUsers;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false
              }));
              nextPageItems = 0;
              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - driversList.users.length;
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
            }
            _context.next = 21;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](1);
            if (_context.t0.constructor.name !== 'Cancel') {
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));
            }
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 18]]);
    }));
    return function getDrivers(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to validate time
   * @param {String} changeTime change time
   * @param {Boolean} isOpen open or close time
   * @param {Boolean} isBreak open break or close break time
   */
  var handleChangeScheduleTime = function handleChangeScheduleTime(changeTime, isOpen, isBreak) {
    var _date = (0, _moment.default)("".concat(actualDate, " ").concat(changeTime, ":00"));
    var _isTimeChangeError = false;
    if (isOpen) {
      var _scheduleState$state, _scheduleState$state2, _scheduleState$state3, _scheduleState$state4, _scheduleState$state5, _scheduleState$state6, _scheduleState$state7, _scheduleState$state8;
      _isTimeChangeError = !isBreak ? _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state = scheduleState.state) !== null && _scheduleState$state !== void 0 && _scheduleState$state.end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state2 = scheduleState.state) === null || _scheduleState$state2 === void 0 ? void 0 : _scheduleState$state2.end) : '23:59') : _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state3 = scheduleState.state) !== null && _scheduleState$state3 !== void 0 && _scheduleState$state3.break_end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state4 = scheduleState.state) === null || _scheduleState$state4 === void 0 ? void 0 : _scheduleState$state4.break_end) : '23:59') || _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state5 = scheduleState.state) !== null && _scheduleState$state5 !== void 0 && _scheduleState$state5.end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state6 = scheduleState.state) === null || _scheduleState$state6 === void 0 ? void 0 : _scheduleState$state6.end) : '23:59') || _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state7 = scheduleState.state) !== null && _scheduleState$state7 !== void 0 && _scheduleState$state7.start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state8 = scheduleState.state) === null || _scheduleState$state8 === void 0 ? void 0 : _scheduleState$state8.start) : '00:00');
      if (_isTimeChangeError) {
        setIsTimeChangeError({
          state: true,
          error: isBreak ? 3 : 1
        });
      } else {
        var _ref2, _scheduleState$break_, _selectedBlock$block3, _ref3, _scheduleState$end, _selectedBlock$block4;
        isBreak ? setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            break_start: "".concat(actualDate, " ").concat(changeTime, ":00"),
            break_end: (_ref2 = (_scheduleState$break_ = scheduleState === null || scheduleState === void 0 ? void 0 : scheduleState.break_end) !== null && _scheduleState$break_ !== void 0 ? _scheduleState$break_ : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block3 = selectedBlock.block) === null || _selectedBlock$block3 === void 0 ? void 0 : _selectedBlock$block3.break_end) !== null && _ref2 !== void 0 ? _ref2 : "".concat(actualDate, " 23:59:00")
          })
        })) : setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            start: "".concat(actualDate, " ").concat(changeTime, ":00"),
            end: (_ref3 = (_scheduleState$end = scheduleState === null || scheduleState === void 0 ? void 0 : scheduleState.end) !== null && _scheduleState$end !== void 0 ? _scheduleState$end : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block4 = selectedBlock.block) === null || _selectedBlock$block4 === void 0 ? void 0 : _selectedBlock$block4.end) !== null && _ref3 !== void 0 ? _ref3 : "".concat(actualDate, " 23:59:00")
          })
        }));
      }
    } else {
      var _scheduleState$state9, _scheduleState$state10, _scheduleState$state11, _scheduleState$state12, _scheduleState$state13, _scheduleState$state14, _scheduleState$state15, _scheduleState$state16;
      _isTimeChangeError = !isBreak ? _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state9 = scheduleState.state) !== null && _scheduleState$state9 !== void 0 && _scheduleState$state9.start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state10 = scheduleState.state) === null || _scheduleState$state10 === void 0 ? void 0 : _scheduleState$state10.start) : '00:00') : _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state11 = scheduleState.state) !== null && _scheduleState$state11 !== void 0 && _scheduleState$state11.break_start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state12 = scheduleState.state) === null || _scheduleState$state12 === void 0 ? void 0 : _scheduleState$state12.break_start) : '00:00') || _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state13 = scheduleState.state) !== null && _scheduleState$state13 !== void 0 && _scheduleState$state13.start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state14 = scheduleState.state) === null || _scheduleState$state14 === void 0 ? void 0 : _scheduleState$state14.start) : '00:00') || _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state15 = scheduleState.state) !== null && _scheduleState$state15 !== void 0 && _scheduleState$state15.end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 || (_scheduleState$state16 = scheduleState.state) === null || _scheduleState$state16 === void 0 ? void 0 : _scheduleState$state16.end) : '23:59');
      if (_isTimeChangeError && !(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block)) {
        setIsTimeChangeError({
          state: true,
          error: isBreak ? 2 : 0
        });
      } else {
        var _ref4, _scheduleState$state$, _scheduleState$state17, _selectedBlock$block5, _ref5, _scheduleState$state$2, _scheduleState$state18, _selectedBlock$block6;
        isBreak ? setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            break_start: (_ref4 = (_scheduleState$state$ = scheduleState === null || scheduleState === void 0 || (_scheduleState$state17 = scheduleState.state) === null || _scheduleState$state17 === void 0 ? void 0 : _scheduleState$state17.break_start) !== null && _scheduleState$state$ !== void 0 ? _scheduleState$state$ : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block5 = selectedBlock.block) === null || _selectedBlock$block5 === void 0 ? void 0 : _selectedBlock$block5.break_start) !== null && _ref4 !== void 0 ? _ref4 : "".concat(actualDate, " 00:00:00"),
            break_end: "".concat(actualDate, " ").concat(changeTime, ":00")
          })
        })) : setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            start: (_ref5 = (_scheduleState$state$2 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state18 = scheduleState.state) === null || _scheduleState$state18 === void 0 ? void 0 : _scheduleState$state18.start) !== null && _scheduleState$state$2 !== void 0 ? _scheduleState$state$2 : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block6 = selectedBlock.block) === null || _selectedBlock$block6 === void 0 ? void 0 : _selectedBlock$block6.start) !== null && _ref5 !== void 0 ? _ref5 : "".concat(actualDate, " 00:00:00"),
            end: "".concat(actualDate, " ").concat(changeTime, ":00")
          })
        }));
      }
    }
  };

  /**
  * Method to add block time
  */
  var handleAddBlockTime = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _selectedBlock$user, scheduleUtc, requestOptions, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            scheduleUtc = {
              start: (0, _moment.default)(scheduleState.state.start).utc().format('YYYY-MM-DD HH:mm:ss'),
              end: (0, _moment.default)(scheduleState.state.end).utc().format('YYYY-MM-DD HH:mm:ss')
            };
            if (scheduleState.state.rrule) {
              scheduleUtc.rrule = scheduleState.state.rrule;
            }
            if (scheduleState.state.until) {
              scheduleUtc.until = (0, _moment.default)(scheduleState.state.until).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_start && showBreakBlock) {
              scheduleUtc.break_start = (0, _moment.default)(scheduleState.state.break_start).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_end && showBreakBlock) {
              scheduleUtc.break_end = (0, _moment.default)(scheduleState.state.break_end).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.name) {
              scheduleUtc.name = scheduleState.state.name;
            }
            if (scheduleState.state.description) {
              scheduleUtc.description = scheduleState.state.description;
            }
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(scheduleUtc)
            };
            _context2.next = 12;
            return fetch("".concat(ordering.root, "/drivers/").concat(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$user = selectedBlock.user) === null || _selectedBlock$user === void 0 ? void 0 : _selectedBlock$user.id, "/delivery_blocks"), requestOptions);
          case 12:
            response = _context2.sent;
            _context2.next = 15;
            return response.json();
          case 15:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context2.next = 24;
              break;
            }
            _context2.next = 21;
            return getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
          case 21:
            handleSetInitialStates();
            _context2.next = 26;
            break;
          case 24:
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: result
            }));
            setAlertState({
              open: true,
              content: result
            });
          case 26:
            _context2.next = 31;
            break;
          case 28:
            _context2.prev = 28;
            _context2.t0 = _context2["catch"](0);
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 31:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 28]]);
    }));
    return function handleAddBlockTime() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
  * Method to delete block time
  */
  var deleteBlockTime = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _selectedBlock$user2, _selectedBlock$block7, requestOptions, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                propagation: propagation
              })
            };
            _context3.next = 5;
            return fetch("".concat(ordering.root, "/drivers/").concat(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$user2 = selectedBlock.user) === null || _selectedBlock$user2 === void 0 ? void 0 : _selectedBlock$user2.id, "/delivery_blocks/").concat(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block7 = selectedBlock.block) === null || _selectedBlock$block7 === void 0 ? void 0 : _selectedBlock$block7.id), requestOptions);
          case 5:
            response = _context3.sent;
            _context3.next = 8;
            return response.json();
          case 8:
            _yield$response$json2 = _context3.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (error) {
              _context3.next = 18;
              break;
            }
            _context3.next = 14;
            return getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
          case 14:
            handleSetInitialStates();
            setOpenDeleteModal(false);
            _context3.next = 19;
            break;
          case 18:
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: result
            }));
          case 19:
            _context3.next = 24;
            break;
          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 21]]);
    }));
    return function deleteBlockTime() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
  * Method to edit block time
  */
  var editBlockTime = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _selectedBlock$user3, _selectedBlock$block8, scheduleUtc, requestOptions, response, _yield$response$json3, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: true
            }));
            scheduleUtc = {
              start: (0, _moment.default)(scheduleState.state.start).utc().format('YYYY-MM-DD HH:mm:ss'),
              end: (0, _moment.default)(scheduleState.state.end).utc().format('YYYY-MM-DD HH:mm:ss')
            };
            if (scheduleState.state.rrule) {
              scheduleUtc.rrule = scheduleState.state.rrule;
            }
            if (scheduleState.state.until) {
              scheduleUtc.until = (0, _moment.default)(scheduleState.state.until).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_start) {
              scheduleUtc.break_start = (0, _moment.default)(scheduleState.state.break_start).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_end) {
              scheduleUtc.break_end = (0, _moment.default)(scheduleState.state.break_end).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.name) {
              scheduleUtc.name = scheduleState.state.name;
            }
            if (scheduleState.state.description) {
              scheduleUtc.description = scheduleState.state.description;
            }
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(_objectSpread(_objectSpread({}, scheduleUtc), {}, {
                propagation: propagation
              }))
            };
            _context4.next = 12;
            return fetch("".concat(ordering.root, "/drivers/").concat(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$user3 = selectedBlock.user) === null || _selectedBlock$user3 === void 0 ? void 0 : _selectedBlock$user3.id, "/delivery_blocks/").concat(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block8 = selectedBlock.block) === null || _selectedBlock$block8 === void 0 ? void 0 : _selectedBlock$block8.id), requestOptions);
          case 12:
            response = _context4.sent;
            _context4.next = 15;
            return response.json();
          case 15:
            _yield$response$json3 = _context4.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (error) {
              _context4.next = 25;
              break;
            }
            _context4.next = 21;
            return getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
          case 21:
            handleSetInitialStates();
            setOpenEditModal(false);
            _context4.next = 27;
            break;
          case 25:
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: result
            }));
            setAlertState({
              open: true,
              content: result
            });
          case 27:
            _context4.next = 32;
            break;
          case 29:
            _context4.prev = 29;
            _context4.t0 = _context4["catch"](0);
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 32:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 29]]);
    }));
    return function editBlockTime() {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleSelectedUntilDate = function handleSelectedUntilDate(date) {
    // if (moment(date).isSameOrBefore(selectedDate)) return
    setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
        until: (0, _moment.default)(date).endOf('day').format('YYYY-MM-DD HH:mm:ss')
      })
    }));
  };
  var handleChangeDriver = function handleChangeDriver(driverId) {
    var _driverIds = _toConsumableArray(filterValues.driverIds);
    if (!_driverIds.includes(driverId)) {
      _driverIds.push(driverId);
    } else {
      _driverIds = _driverIds.filter(function (id) {
        return id !== driverId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      driverIds: _driverIds
    }));
  };
  var handleClearFilters = function handleClearFilters() {
    setFilterValues({
      driverIds: []
    });
  };
  var handleClearDriversList = function handleClearDriversList() {
    setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
      users: []
    }));
  };
  (0, _react.useEffect)(function () {
    if (selectedGroup !== null && selectedGroup !== void 0 && selectedGroup.id && filtOption === 'driver_groups') {
      getDrivers(paginationProps.initialPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
    }
    if (filtOption === 'drivers') {
      getDrivers(paginationProps.initialPage, paginationProps.pageSize);
    }
  }, [selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id, date, filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds, filtOption]);
  (0, _react.useEffect)(function () {
    var _scheduleState$state$3, _scheduleState$state19, _selectedBlock$block9, _scheduleState$state$4, _scheduleState$state20, _selectedBlock$block10, _scheduleState$state$5, _scheduleState$state21, _selectedBlock$block11, _scheduleState$state$6, _scheduleState$state22, _selectedBlock$block12;
    var _startHour = (0, _moment.default)((_scheduleState$state$3 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state19 = scheduleState.state) === null || _scheduleState$state19 === void 0 ? void 0 : _scheduleState$state19.start) !== null && _scheduleState$state$3 !== void 0 ? _scheduleState$state$3 : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block9 = selectedBlock.block) === null || _selectedBlock$block9 === void 0 ? void 0 : _selectedBlock$block9.start).format('HH:mm');
    var _endHour = (0, _moment.default)((_scheduleState$state$4 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state20 = scheduleState.state) === null || _scheduleState$state20 === void 0 ? void 0 : _scheduleState$state20.end) !== null && _scheduleState$state$4 !== void 0 ? _scheduleState$state$4 : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block10 = selectedBlock.block) === null || _selectedBlock$block10 === void 0 ? void 0 : _selectedBlock$block10.end).format('HH:mm');
    var _breakStartHour = (0, _moment.default)((_scheduleState$state$5 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state21 = scheduleState.state) === null || _scheduleState$state21 === void 0 ? void 0 : _scheduleState$state21.break_start) !== null && _scheduleState$state$5 !== void 0 ? _scheduleState$state$5 : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block11 = selectedBlock.block) === null || _selectedBlock$block11 === void 0 ? void 0 : _selectedBlock$block11.break_start).format('HH:mm');
    var _breakEndHour = (0, _moment.default)((_scheduleState$state$6 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state22 = scheduleState.state) === null || _scheduleState$state22 === void 0 ? void 0 : _scheduleState$state22.break_end) !== null && _scheduleState$state$6 !== void 0 ? _scheduleState$state$6 : selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block12 = selectedBlock.block) === null || _selectedBlock$block12 === void 0 ? void 0 : _selectedBlock$block12.break_end).format('HH:mm');
    var changes = showBreakBlock ? {
      start: "".concat(actualDate, " ").concat(_startHour, ":00"),
      end: "".concat(actualDate, " ").concat(_endHour, ":00"),
      break_start: "".concat(actualDate, " ").concat(_breakStartHour, ":00"),
      break_end: "".concat(actualDate, " ").concat(_breakEndHour, ":00")
    } : {
      start: "".concat(actualDate, " ").concat(_startHour, ":00"),
      end: "".concat(actualDate, " ").concat(_endHour, ":00")
    };
    if (!(0, _moment.default)(selectedDate).isSameOrBefore(selectedUntilDate)) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        until: (0, _moment.default)(selectedDate).endOf('day').format('YYYY-MM-DD HH:mm:ss')
      });
      setSelectedUntilDate(selectedDate);
    }
    setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      state: _objectSpread(_objectSpread({}, scheduleState.state), changes)
    }));
  }, [selectedDate]);
  (0, _react.useEffect)(function () {
    var _selectedBlock$block13;
    setShowBreakBlock(!!(selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block13 = selectedBlock.block) !== null && _selectedBlock$block13 !== void 0 && _selectedBlock$block13.break_start));
  }, [selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block14 = selectedBlock.block) === null || _selectedBlock$block14 === void 0 ? void 0 : _selectedBlock$block14.break_start]);
  (0, _react.useEffect)(function () {
    if (date[0]) {
      handleSetInitialStates();
    }
  }, [date]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    date: date,
    setDate: setDate,
    openModal: openModal,
    getDrivers: getDrivers,
    alertState: alertState,
    driversList: driversList,
    propagation: propagation,
    setOpenModal: setOpenModal,
    selectedDate: selectedDate,
    scheduleState: scheduleState,
    selectedBlock: selectedBlock,
    setAlertState: setAlertState,
    timeErrorList: timeErrorList,
    editBlockTime: editBlockTime,
    openEditModal: openEditModal,
    setPropagation: setPropagation,
    showBreakBlock: showBreakBlock,
    selectedGroup: selectedGroup,
    paginationProps: paginationProps,
    ruleState: ruleState,
    setRuleState: setRuleState,
    actualDate: actualDate,
    setSelectedDate: setSelectedDate,
    deleteBlockTime: deleteBlockTime,
    openDeleteModal: openDeleteModal,
    setScheduleState: setScheduleState,
    setSelectedBlock: setSelectedBlock,
    setOpenEditModal: setOpenEditModal,
    stackEventsState: stackEventsState,
    isTimeChangeError: isTimeChangeError,
    selectedUntilDate: selectedUntilDate,
    setShowBreakBlock: setShowBreakBlock,
    setOpenDeleteModal: setOpenDeleteModal,
    handleAddBlockTime: handleAddBlockTime,
    setSelectedGroup: setSelectedGroup,
    setStackEventsState: setStackEventsState,
    setSelectedUntilDate: setSelectedUntilDate,
    setIsTimeChangeError: setIsTimeChangeError,
    handleChangeScheduleTime: handleChangeScheduleTime,
    handleSelectedUntilDate: handleSelectedUntilDate,
    handleSetInitialStates: handleSetInitialStates,
    filterValues: filterValues,
    handleChangeDriver: handleChangeDriver,
    handleClearFilters: handleClearFilters,
    handleClearDriversList: handleClearDriversList,
    setFiltOption: setFiltOption,
    filtOption: filtOption
  })));
};
CalendarDriversList.propTypes = {
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
CalendarDriversList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: []
};