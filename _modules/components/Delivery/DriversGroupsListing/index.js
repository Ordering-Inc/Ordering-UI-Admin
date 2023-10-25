"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _utils = require("../../../utils");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _WizardDelivery = require("../WizardDelivery");
var _DriversGroupsList = require("../DriversGroupsList");
var _DriversGroupDetails = require("../DriversGroupDetails");
var _DriversGroupAddForm = require("../DriversGroupAddForm");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupsListingUI = function DriversGroupsListingUI(props) {
  var _history$location2, _ref;
  var driversGroupsState = props.driversGroupsState,
    setDriversGroupsState = props.setDriversGroupsState,
    driversManagersList = props.driversManagersList,
    businessesList = props.businessesList,
    paymethodsList = props.paymethodsList,
    driversList = props.driversList,
    selectedGroupList = props.selectedGroupList,
    handleSelectGroup = props.handleSelectGroup,
    handleAllSelectGroup = props.handleAllSelectGroup,
    handleDeleteSelectedGroups = props.handleDeleteSelectedGroups,
    actionState = props.actionState,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    handleDeleteDriversGroup = props.handleDeleteDriversGroup,
    driversCompanyList = props.driversCompanyList,
    actionDisabled = props.actionDisabled,
    isUseQuery = props.isUseQuery;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    moveDistance = _useState8[0],
    setMoveDistance = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    openDetails = _useState10[0],
    setOpenDetails = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    curDriversGroup = _useState12[0],
    setCurDriversGroup = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    curDriversGroupId = _useState14[0],
    setCurDriversGroupId = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isExtendExtraOpen = _useState16[0],
    setIsExtendExtraOpen = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isAddMode = _useState18[0],
    setIsAddMode = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isTourOpen = _useState20[0],
    setIsTourOpen = _useState20[1];
  var _useState21 = (0, _react.useState)(4),
    _useState22 = _slicedToArray(_useState21, 2),
    currentTourStep = _useState22[0],
    setCurrentTourStep = _useState22[1];
  var handleOpenDetails = function handleOpenDetails(driverGroup) {
    setMoveDistance(0);
    setCurDriversGroup(driverGroup);
    setCurDriversGroupId(driverGroup === null || driverGroup === void 0 ? void 0 : driverGroup.id);
    setOpenDetails(true);
    if (!driverGroup) {
      setIsAddMode(true);
      setTimeout(function () {
        setCurrentTourStep(5);
      }, 50);
      (0, _utils.removeQueryToUrl)(['id']);
    } else {
      (0, _utils.addQueryToUrl)({
        id: driverGroup.id
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  var onClickSelectedGroupsDelete = function onClickSelectedGroupsDelete() {
    setConfirm({
      open: true,
      content: t('CONFIRM_DELETE', 'Are you sure to delete?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSelectedGroups();
      }
    });
  };
  var handleOpenTour = function handleOpenTour() {
    setOpenDetails(false);
    setCurrentTourStep(4);
    setIsTourOpen(true);
  };
  (0, _react.useEffect)(function () {
    var _history$location;
    if ((_history$location = history.location) !== null && _history$location !== void 0 && (_history$location = _history$location.state) !== null && _history$location !== void 0 && _history$location.isFromTourDriversGroup) {
      handleOpenTour();
    }
  }, [(_history$location2 = history.location) === null || _history$location2 === void 0 || (_history$location2 = _history$location2.state) === null || _history$location2 === void 0 ? void 0 : _history$location2.isFromTourDriversGroup]);
  var handleNextTour = function handleNextTour() {
    setTimeout(function () {
      setCurrentTourStep(6);
    }, 50);
  };
  var handleDeliveryTourCompleted = function handleDeliveryTourCompleted() {
    setTimeout(function () {
      setCurrentTourStep(7);
    }, 50);
  };
  var getDataFromStorage = function getDataFromStorage() {
    return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var value;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.getStorageItem)('isFromDeliveryDriversGroup', true);
          case 2:
            value = _context.sent;
            if (value) {
              (0, _utils.removeStorageItem)('isFromDeliveryDriversGroup');
              handleOpenTour();
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))).apply(this, arguments);
  };
  var handleCloseDetail = function handleCloseDetail() {
    setCurDriversGroup(null);
    setOpenDetails(false);
    setIsTourOpen(false);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  (0, _react.useEffect)(function () {
    getDataFromStorage();
    var id = query.get('id');
    if (id) {
      setCurDriversGroupId(Number(id));
      setOpenDetails(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriversGroupsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderLeftContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERY_AUTOMATION', 'Delivery automation')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleOpenTour();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    "data-tour": "tour_add_group",
    onClick: function onClick() {
      return handleOpenDetails(null);
    },
    disabled: actionDisabled
  }, t('ADD_DRIVER_GROUP', 'Add driver group')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedGroupList.length === 0 || actionDisabled,
    onClick: function onClick() {
      return onClickSelectedGroupsDelete();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    },
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }))), !isAddMode ? /*#__PURE__*/_react.default.createElement(_DriversGroupsList.DriversGroupsList, {
    curDriversGroup: curDriversGroup,
    driversGroupsState: driversGroupsState,
    searchValue: searchValue,
    handleOpenDetails: handleOpenDetails,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    selectedGroupList: selectedGroupList,
    handleSelectGroup: handleSelectGroup,
    handleAllSelectGroup: handleAllSelectGroup,
    actionDisabled: actionDisabled,
    isUseQuery: isUseQuery
  }) : /*#__PURE__*/_react.default.createElement(_DriversGroupAddForm.DriversGroupAddForm, {
    driversGroupsState: driversGroupsState,
    setDriversGroupsState: setDriversGroupsState,
    curDriversGroup: curDriversGroup,
    driversGroupId: curDriversGroupId,
    driversManagers: driversManagersList === null || driversManagersList === void 0 ? void 0 : driversManagersList.managers,
    businesses: businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses,
    businessesLoading: businessesList === null || businessesList === void 0 ? void 0 : businessesList.loading,
    paymethods: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods,
    drivers: driversList === null || driversList === void 0 ? void 0 : driversList.drivers,
    companies: driversCompanyList === null || driversCompanyList === void 0 ? void 0 : driversCompanyList.companies,
    onClose: function onClose() {
      setOpenDetails(false);
      setIsAddMode(false);
    },
    actionDisabled: actionDisabled
  })), openDetails && !isAddMode && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "driver_group_details",
    defaultSideBarWidth: !isExtendExtraOpen ? 540 + moveDistance : 1040,
    open: openDetails,
    moveDistance: moveDistance,
    noAnimation: isTourOpen,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }, /*#__PURE__*/_react.default.createElement(_DriversGroupDetails.DriversGroupDetails, {
    driversGroupsState: driversGroupsState,
    setDriversGroupsState: setDriversGroupsState,
    curDriversGroup: curDriversGroup,
    driversGroupId: curDriversGroupId,
    driversManagers: driversManagersList === null || driversManagersList === void 0 ? void 0 : driversManagersList.managers,
    businesses: businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses,
    businessesLoading: businessesList === null || businessesList === void 0 ? void 0 : businessesList.loading,
    paymethods: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods,
    drivers: driversList === null || driversList === void 0 ? void 0 : driversList.drivers,
    companies: driversCompanyList === null || driversCompanyList === void 0 ? void 0 : driversCompanyList.companies,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    },
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    isExtendExtraOpen: isExtendExtraOpen,
    onClose: function onClose() {
      setOpenDetails(false);
      if (isTourOpen) {
        handleDeliveryTourCompleted();
      }
    },
    isTourOpen: isTourOpen,
    handleNextTour: handleNextTour,
    actionDisabled: actionDisabled
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), isTourOpen && /*#__PURE__*/_react.default.createElement(_WizardDelivery.WizardDelivery, {
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    currentStep: currentTourStep
  }));
};
var DriversGroupsListing = function DriversGroupsListing(props) {
  var driversGroupsListProps = _objectSpread(_objectSpread({}, props), {}, {
    isDriversMangersRequired: true,
    UIComponent: DriversGroupsListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupsList, driversGroupsListProps);
};
exports.DriversGroupsListing = DriversGroupsListing;