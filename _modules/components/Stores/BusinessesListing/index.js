"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsGrid = _interopRequireDefault(require("@meronex/icons/bs/BsGrid"));
var _BsViewList = _interopRequireDefault(require("@meronex/icons/bs/BsViewList"));
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _BusinessesList = require("../BusinessesList");
var _BusinessesListingHeader = require("../BusinessesListingHeader");
var _BusinessActiveStateFilter = require("../BusinessActiveStateFilter");
var _BusinessTypeFilter = require("../BusinessTypeFilter");
var _BusinessDetails = require("../BusinessDetails");
var _WizardBusiness = require("../WizardBusiness");
var _styles = require("./styles");
var _BusinessSync = require("../BusinessSync");
var _BusinessDelete = require("../BusinessDelete");
var _styles2 = require("../../../styles");
var _BusinessAddStore = require("../BusinessAddStore");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessesListingUI = function BusinessesListingUI(props) {
  var _configs$allow_busine;
  var businessList = props.businessList,
    pagination = props.pagination,
    searchValue = props.searchValue,
    selectedBusinessActiveState = props.selectedBusinessActiveState,
    handleChangeBusinessActiveState = props.handleChangeBusinessActiveState,
    handleChangeBusinessType = props.handleChangeBusinessType,
    loadMoreBusinesses = props.loadMoreBusinesses,
    handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
    handleSucessAddBusiness = props.handleSucessAddBusiness,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    loadBusinesses = props.loadBusinesses,
    onSearch = props.onSearch,
    onBusinessRedirect = props.onBusinessRedirect,
    getPageBusinesses = props.getPageBusinesses,
    businessIds = props.businessIds,
    handleChangeBusinessIds = props.handleChangeBusinessIds,
    handleEnableAllBusiness = props.handleEnableAllBusiness,
    handleDeleteMultiBusinesses = props.handleDeleteMultiBusinesses,
    setBusinessIds = props.setBusinessIds,
    countriesState = props.countriesState,
    handleChangeFilterValues = props.handleChangeFilterValues,
    filterValues = props.filterValues,
    businessTypeSelected = props.businessTypeSelected,
    inActiveBusinesses = props.inActiveBusinesses,
    citiesList = props.citiesList,
    isUseQuery = props.isUseQuery;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTutorialMode = _useState2[0],
    setIsTutorialMode = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    openTutorialSidebarState = _useState4[0],
    setOpenTutorialSidebarState = _useState4[1];
  var _useState5 = (0, _react.useState)('list'),
    _useState6 = _slicedToArray(_useState5, 2),
    viewMethod = _useState6[0],
    setViewMethod = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openBusinessDetails = _useState8[0],
    setOpenBusinessDetails = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    detailsBusiness = _useState10[0],
    setDetailsBusiness = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    detailsBusinessId = _useState12[0],
    setDetailsBusinessId = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openAddBusiness = _useState14[0],
    setOpenAddBusiness = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    businessTypes = _useState16[0],
    setBusinessTypes = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    openSync = _useState18[0],
    setOpenSync = _useState18[1];
  var _useState19 = (0, _react.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    moveDistance = _useState20[0],
    setMoveDistance = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isAdd = _useState22[0],
    setIsAdd = _useState22[1];
  var allowBusinessRegister = !(configs !== null && configs !== void 0 && configs.allow_business_owner_register_business) || (user === null || user === void 0 ? void 0 : user.level) !== 2 || (configs === null || configs === void 0 || (_configs$allow_busine = configs.allow_business_owner_register_business) === null || _configs$allow_busine === void 0 ? void 0 : _configs$allow_busine.value) === '1' && (user === null || user === void 0 ? void 0 : user.level) === 2;
  var noBusinesses = (0, _react.useMemo)(function () {
    var _businessList$busines;
    return !(businessList !== null && businessList !== void 0 && businessList.loading) && (businessList === null || businessList === void 0 || (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length) === 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === 1 && !searchValue && (!filterValues || Object.keys(filterValues).length === 0) && selectedBusinessActiveState && !businessTypeSelected && (inActiveBusinesses === null || inActiveBusinesses === void 0 ? void 0 : inActiveBusinesses.length) === 0;
  }, [businessList === null || businessList === void 0 ? void 0 : businessList.loading, businessList === null || businessList === void 0 ? void 0 : businessList.businesses, pagination, searchValue, filterValues, selectedBusinessActiveState, businessTypeSelected, inActiveBusinesses]);
  var handleGotToAdd = function handleGotToAdd() {
    if (countriesState !== null && countriesState !== void 0 && countriesState.enabled) setIsAdd(true);else events.emit('go_to_page', {
      page: 'business_add'
    });
  };
  var handleBackRedirect = function handleBackRedirect() {
    setOpenBusinessDetails(false);
    setDetailsBusiness(null);
    setDetailsBusinessId(null);
    onBusinessRedirect();
  };
  var handleOpenBusinessDetails = function handleOpenBusinessDetails(business) {
    setOpenAddBusiness(false);
    setDetailsBusiness(business);
    setDetailsBusinessId(business.id);
    setOpenBusinessDetails(true);
    onBusinessRedirect(business.id);
  };
  var handleOpenAddBusiness = function handleOpenAddBusiness() {
    var id = query.get('id');
    if (id) {
      handleBackRedirect();
    }
    setOpenAddBusiness(true);
  };

  // const onhandleSuccessAddBusiness = (business) => {
  //   handleSucessAddBusiness(business)
  //   setOpenAddBusiness(false)
  //   setDetailsBusiness(business)
  //   if (isTutorialMode) {
  //     setOpenTutorialSidebarState('schedule')
  //   } else {
  //     handleOpenBusinessDetails(business)
  //   }
  // }

  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null) setOpenBusinessDetails(false);else {
      setDetailsBusinessId(id);
      setOpenBusinessDetails(true);
    }
  }, []);
  var handleStartTutorial = function handleStartTutorial() {
    setIsTutorialMode(true);
    handleOpenAddBusiness();
  };
  var handleSetStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var preVisited, visited;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.getStorageItem)('visited', true);
          case 2:
            preVisited = _context.sent;
            if (preVisited !== null && preVisited !== void 0 && preVisited.businesses_page) {
              _context.next = 8;
              break;
            }
            visited = _objectSpread(_objectSpread({}, preVisited), {}, {
              businesses_page: true
            });
            _context.next = 7;
            return (0, _utils.setStorageItem)('visited', visited, true);
          case 7:
            setIsTutorialMode(true);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSetStorage() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleViewMethod = function handleViewMethod(method) {
    setViewMethod(method);
    if (method === 'list') {
      getPageBusinesses(10, 1);
    }
    if (method === 'card') {
      getPageBusinesses(50, 1);
      (0, _utils.removeQueryToUrl)(['page', 'pageSize']);
    }
  };
  var handleOpenSync = function handleOpenSync() {
    setOpenSync(true);
    (0, _utils.addQueryToUrl)({
      header: 'sync'
    });
  };
  var handleCloseSync = function handleCloseSync() {
    setMoveDistance(0);
    setOpenSync(false);
    (0, _utils.removeQueryToUrl)(['header', 'tab']);
  };
  (0, _react.useEffect)(function () {
    handleSetStorage();
  }, []);
  (0, _react.useEffect)(function () {
    var header = query.get('header');
    if (header === 'sync') {
      setOpenSync(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListingContainer, {
    isAdd: openAddBusiness
  }, /*#__PURE__*/_react.default.createElement(_BusinessesListingHeader.BusinessesListingHeader, {
    searchValue: searchValue,
    onSearch: onSearch,
    handleOpenAddBusiness: handleOpenAddBusiness,
    handleGotToAdd: handleGotToAdd,
    handleStartTutorial: handleStartTutorial,
    handleOpenSync: handleOpenSync,
    handleRefreshBusinesses: loadBusinesses,
    loading: businessList.loading,
    noBusinesses: noBusinesses,
    openAddBusiness: openAddBusiness,
    handleChangeFilterValues: handleChangeFilterValues,
    filterValues: filterValues,
    allowBusinessRegister: allowBusinessRegister
  }), !noBusinesses && /*#__PURE__*/_react.default.createElement(_styles.ViewContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessActiveStateFilter.BusinessActiveStateFilter, {
    isUseQuery: isUseQuery,
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleChangeBusinessActiveState: handleChangeBusinessActiveState
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperView, null, /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'card',
    onClick: function onClick() {
      return handleViewMethod('card');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsGrid.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'list',
    onClick: function onClick() {
      return handleViewMethod('list');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsViewList.default, null)))), !noBusinesses && /*#__PURE__*/_react.default.createElement(_styles.ButtonGroup, {
    isSelect: (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0
  }, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType,
    setBusinessTypes: setBusinessTypes
  }), (businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) > 0 && /*#__PURE__*/_react.default.createElement(_BusinessDelete.BusinessDelete, {
    handleDeleteMultiBusinesses: handleDeleteMultiBusinesses
  })), noBusinesses ? /*#__PURE__*/_react.default.createElement(_styles.EmptyBusinessWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.dummies.noBusinesses,
    alt: ""
  }), allowBusinessRegister && /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary",
    borderRadius: "7.6px",
    onClick: function onClick() {
      return handleGotToAdd();
    }
  }, t('ADD_NEW_STORE', 'Add new store'))) : /*#__PURE__*/_react.default.createElement(_BusinessesList.BusinessesList, {
    viewMethod: viewMethod,
    businessList: businessList,
    pagination: pagination,
    detailsBusinessId: detailsBusinessId,
    loadMoreBusinesses: loadMoreBusinesses,
    getPageBusinesses: getPageBusinesses,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleOpenBusinessDetails: handleOpenBusinessDetails,
    handleOpenAddBusiness: handleOpenAddBusiness,
    isTutorialMode: isTutorialMode,
    businessIds: businessIds,
    setBusinessIds: setBusinessIds,
    handleChangeBusinessIds: handleChangeBusinessIds,
    handleEnableAllBusiness: handleEnableAllBusiness,
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleGotToAdd: handleGotToAdd,
    citiesList: citiesList,
    isUseQuery: isUseQuery && viewMethod === 'list',
    allowBusinessRegister: allowBusinessRegister
  })), openBusinessDetails && /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    open: openBusinessDetails
    // business={detailsBusiness}
    ,
    businessTypes: businessTypes,
    businessId: detailsBusinessId,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    setBusinessTypes: setBusinessTypes,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), openSync && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "store_sync",
    open: openSync,
    onClose: function onClose() {
      return handleCloseSync();
    },
    defaultSideBarWidth: 550 + moveDistance,
    moveDistance: moveDistance
  }, /*#__PURE__*/_react.default.createElement(_BusinessSync.BusinessSync, {
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_WizardBusiness.WizardBusiness, {
    isTutorialMode: isTutorialMode,
    openTutorialSidebarState: openTutorialSidebarState,
    setOpenTutorialSidebarState: setOpenTutorialSidebarState,
    business: detailsBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "30px",
    open: isAdd,
    onClose: function onClose() {
      return setIsAdd(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessAddStore.BusinessAddStore, null)));
};
var BusinessesListing = exports.BusinessesListing = function BusinessesListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var defaultActive = query.get('active');
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    asDashboard: true,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    defaultActive: defaultActive ? defaultActive === 'true' : true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardBusinessList, businessListingProps);
};