"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _LogoutButton = require("../LogoutButton");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize = require("../../hooks/useWindowSize");
var _reactBootstrap = require("react-bootstrap");
var _LanguageSelector = require("../LanguageSelector");
var _InfoShareContext = require("../../contexts/InfoShareContext");
var _utils = require("../../utils");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SidebarMenuUI = function SidebarMenuUI(props) {
  var _configs$powered_by_o, _configs$appointments, _sessionState$user, _sessionState$user2, _sessionState$user3, _sessionState$user4, _sessionState$user5, _sessionState$user6, _sessionState$user7, _sessionState$user8, _sessionState$user9, _sessionState$user10, _sessionState$user11, _sessionState$user12, _ref, _configs$dashboard_lo, _theme$images, _sessionState$user13, _sessionState$user14, _sessionState$user15, _sessionState$user16, _sessionState$user21, _sessionState$user22, _sessionState$user23, _sessionState$user24, _sessionState$user26, _sessionState$user27, _sessionState$user28, _sessionState$user29, _sessionState$user30, _sessionState$user31, _sessionState$user32, _sessionState$user33, _sessionState$user34, _sessionState$user35, _sessionState$user36, _sessionState$user37, _sessionState$user38, _sessionState$user39, _sessionState$user40, _sessionState$user41, _sessionState$user42, _sessionState$user43;
  var getBillingToken = props.getBillingToken,
    billingUrl = props.billingUrl;
  var location = (0, _reactRouterDom.useLocation)();
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var _useSite = (0, _orderingComponentsAdmin.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var isPoweredByOrderingModule = configs === null || configs === void 0 || (_configs$powered_by_o = configs.powered_by_ordering_module) === null || _configs$powered_by_o === void 0 ? void 0 : _configs$powered_by_o.value;
  var isEnabledAppointmentsFeature = configs === null || configs === void 0 || (_configs$appointments = configs.appointments) === null || _configs$appointments === void 0 ? void 0 : _configs$appointments.value;
  var readOnlyBusinessOwner = sessionState === null || sessionState === void 0 || (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.readOnlyBusinessOwner;
  var readOnlyDeliveryManager = sessionState === null || sessionState === void 0 || (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.readOnlyDeliveryManager;
  var readOnlyAdmin = sessionState === null || sessionState === void 0 || (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.readOnlyAdmin;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMessage = _useState2[0],
    setShowMessage = _useState2[1];
  var ordersSubMenus = [{
    id: 1,
    title: t('ORDERS_LIST', 'Orders list'),
    pageName: 'orders',
    url: '/orders'
  }, {
    id: 2,
    title: t('DELIVERY_DASHBOARD', 'Deliveries dashboard'),
    pageName: 'deliveries',
    url: '/deliveries'
  }, {
    id: 3,
    title: t('DRIVERS_DASHBOARD', 'Drivers Dashboard'),
    pageName: 'drivers',
    url: '/drivers'
  }, {
    id: 4,
    title: t('ALL_IN_ONE', 'All in one'),
    pageName: 'all_in_one',
    url: '/all-in-one'
  }, {
    id: 5,
    title: t('APPOINTMENTS', 'Appointments'),
    pageName: 'appointments',
    url: '/appointments'
  }, {
    id: 6,
    title: t('GIFT_CARD_MANAGER', 'Gift card manager'),
    pageName: 'giftCards',
    url: '/gift-cards'
  }];
  var loyaltySubMenus = [{
    id: 1,
    title: t('LOYALTY_AUTOMATION', 'Loyalty automation'),
    pageName: 'rewards_programs',
    url: '/loyalty/rewards-programs'
  }
  // {
  //   id: 2,
  //   title: t('LOYALTY_LEVELS', 'Loyalty levels'),
  //   pageName: 'loyalty_levels',
  //   url: '/loyalty/levels'
  // },
  // {
  //   id: 3,
  //   title: t('REPORTS', 'Reports'),
  //   pageName: 'loyalty_reports',
  //   url: '/loyalty/reports'
  // }
  ];

  var cartRecoveryMenus = [{
    id: 1,
    title: t('OPEN_CARTS', 'Open carts'),
    pageName: 'open_carts',
    url: '/cart-recovery/open-carts'
  }, {
    id: 2,
    title: t('CART_RECOVERY_AUTOMATION', 'Cart recovery automation'),
    pageName: 'recovery_actions',
    url: '/cart-recovery/recovery-actions'
  }];
  var myProductMenus = [{
    id: 1,
    title: t('ORDERING_WEBSITE', 'Ordering website'),
    pageName: 'ordering_website',
    url: '/my-products/ordering-website'
  }, {
    id: 2,
    title: t('CUSTOMER_APP', 'Customer app'),
    pageName: 'customer_app',
    url: '/my-products/customer-app'
  }, {
    id: 3,
    title: t('STORE_APP', 'Store app'),
    pageName: 'store_app',
    url: '/my-products/store-app'
  }, {
    id: 4,
    title: t('DRIVER_APP', 'Driver app'),
    pageName: 'driver_app',
    url: '/my-products/driver-app'
  }, {
    id: 5,
    title: t('POS_APP', 'POS'),
    pageName: 'pos_app',
    url: '/my-products/pos-app'
  }, {
    id: 6,
    title: t('CALL_CENTER_APP', 'Call center'),
    pageName: 'call_center_app',
    url: '/my-products/call-center-app'
  }, {
    id: 7,
    title: t('KIOSK_APP', 'Kiosk'),
    pageName: 'kiosk_app',
    url: '/my-products/kiosk-app'
  }, {
    id: 8,
    title: t('CUSTOM_PROJECT', 'Custom Project'),
    pageName: 'custom_project',
    url: '/my-products/custom-project'
  }, {
    id: 9,
    title: t('ORDERING_WIDGETS', 'Ordering Widgets'),
    pageName: 'ordering_widgets',
    url: '/my-products/ordering-widgets'
  }];
  var storesSubMenus = [{
    id: 1,
    title: t('STORES', 'Stores'),
    pageName: 'businesses',
    url: '/stores/list'
  }, {
    id: 2,
    title: t('PRODUCTS', 'Products'),
    pageName: 'store',
    url: '/stores/products'
  }, {
    id: 3,
    title: t('BRANDS', 'Brands'),
    pageName: 'brand',
    url: '/stores/brand'
  }, {
    id: 4,
    title: t('DEVICES', 'Devices'),
    pageName: 'devices',
    url: '/stores/devices'
  }];
  var usersSubMenus = [{
    id: 1,
    title: t('CUSTOMERS', 'Customers'),
    pageName: 'customers',
    url: '/users/customers'
  }, {
    id: 2,
    title: t('MANAGERS', 'Managers'),
    pageName: 'managers',
    url: '/users/managers'
  }, {
    id: 3,
    title: t('PROFESSIONALS', 'Professionals'),
    pageName: 'professionals',
    url: '/users/professionals'
  }];
  var buisnessOwnerUsersMenuIncluded = [3];
  var settingsSubMenus = [{
    id: 1,
    title: t('BASIC_SETTINGS', 'Basic settings'),
    pageName: 'basic_settings',
    url: '/settings/basic'
  }, {
    id: 2,
    title: t('OPERATION_SETTINGS', 'Operation settings'),
    pageName: 'operation_settings',
    url: '/settings/operation'
  }, {
    id: 3,
    title: t('PLUGIN_SETTINGS', 'Plugin settings'),
    pageName: 'plugin_settings',
    url: '/settings/plugin'
  }, {
    id: 4,
    title: t('CMS_HEADING', 'CMS'),
    pageName: 'pages',
    url: '/settings/pages'
  }, {
    id: 5,
    title: t('INTEGRATION', 'Integrations'),
    pageName: 'integrations',
    url: '/settings/integrations'
  }, {
    id: 6,
    title: t('COUNTRIES_CITIES', 'Countries/Cities'),
    pageName: 'places',
    url: '/settings/places'
  }, {
    id: 7,
    title: t('LANGUAGE_MANAGER', 'Language manager'),
    pageName: 'language',
    url: '/settings/language'
  }, {
    id: 8,
    title: t('SETTINGS_LOGS', 'Settings logs'),
    pageName: 'logs',
    url: '/settings/logs'
  }];
  var businessIntelligenceSubMenus = [{
    id: 1,
    title: t('BUSINESS_ANALYTICS', 'Business analytics'),
    pageName: 'business_analytics',
    url: '/intelligence/business'
  }, {
    id: 2,
    title: t('DRIVERS_ANALYTICS', 'Drivers analytics'),
    pageName: 'drivers_analytics',
    url: '/intelligence/drivers'
  }, {
    id: 3,
    title: t('REVIEWS_MANAGER', 'Reviews manager'),
    pageName: 'reviews',
    url: '/intelligence/reviews'
  }, {
    id: 4,
    title: t('INVOICE_MANAGER', 'Invoice manager'),
    pageName: 'invoice',
    url: '/intelligence/invoice'
  }, {
    id: 5,
    title: t('ENTERPRISE_REPORTS', 'Enterprise reports'),
    pageName: 'reports',
    url: '/intelligence/reports'
  }];
  var businessOwnerIntelligencesIncluded = [1];
  var deliverySubmenus = [{
    id: 1,
    title: t('DRIVERS', 'Drivers'),
    pageName: 'delivery_drivers',
    url: '/delivery/drivers-list',
    enabled: (sessionState === null || sessionState === void 0 || (_sessionState$user4 = sessionState.user) === null || _sessionState$user4 === void 0 ? void 0 : _sessionState$user4.level) === 5 || (sessionState === null || sessionState === void 0 || (_sessionState$user5 = sessionState.user) === null || _sessionState$user5 === void 0 ? void 0 : _sessionState$user5.level) === 0 || (sessionState === null || sessionState === void 0 || (_sessionState$user6 = sessionState.user) === null || _sessionState$user6 === void 0 ? void 0 : _sessionState$user6.level) === 2
  }, {
    id: 2,
    title: t('DRIVER_MANAGERS', 'Drivers manager'),
    pageName: 'drivers_managers',
    url: '/delivery/drivers-managers',
    enabled: (sessionState === null || sessionState === void 0 || (_sessionState$user7 = sessionState.user) === null || _sessionState$user7 === void 0 ? void 0 : _sessionState$user7.level) === 0 && !(readOnlyAdmin || readOnlyDeliveryManager)
  }, {
    id: 3,
    title: t('DELIVERY_COMPANIES', 'Delivery companies'),
    pageName: 'drivers_companies',
    url: '/delivery/drivers-companies',
    enabled: (sessionState === null || sessionState === void 0 || (_sessionState$user8 = sessionState.user) === null || _sessionState$user8 === void 0 ? void 0 : _sessionState$user8.level) === 0 && !(readOnlyAdmin || readOnlyDeliveryManager)
  }, {
    id: 4,
    title: t('DELIVERY_AUTOMATION', 'Delivery automation'),
    pageName: 'drivers_groups',
    url: '/delivery/drivers-groups',
    enabled: ((sessionState === null || sessionState === void 0 || (_sessionState$user9 = sessionState.user) === null || _sessionState$user9 === void 0 ? void 0 : _sessionState$user9.level) === 5 || (sessionState === null || sessionState === void 0 || (_sessionState$user10 = sessionState.user) === null || _sessionState$user10 === void 0 ? void 0 : _sessionState$user10.level) === 0) && !(readOnlyAdmin || readOnlyDeliveryManager)
  }, {
    id: 5,
    title: t('DRIVERS_TIME_DISPLAY', 'Drivers time display'),
    pageName: 'drivers_time_display',
    url: '/delivery/drivers-time-display',
    enabled: ((sessionState === null || sessionState === void 0 || (_sessionState$user11 = sessionState.user) === null || _sessionState$user11 === void 0 ? void 0 : _sessionState$user11.level) === 5 || (sessionState === null || sessionState === void 0 || (_sessionState$user12 = sessionState.user) === null || _sessionState$user12 === void 0 ? void 0 : _sessionState$user12.level) === 0) && !(readOnlyAdmin || readOnlyDeliveryManager)
  }];
  var marketingSubmenus = [{
    id: 1,
    title: t('PROMOTION_AUTOMATION', 'Promotions automation'),
    pageName: 'enterprise_promotions',
    url: '/marketing/promotions-enterprise'
  }, {
    id: 2,
    title: t('AD_BANNERS', 'Ad banners'),
    pageName: 'ad_banners',
    url: '/marketing/ad-banners'
  }, {
    id: 3,
    title: t('LOYALTY_AUTOMATION', 'Loyalty automation'),
    pageName: 'rewards_programs',
    url: '/loyalty/rewards-programs'
  }, {
    id: 4,
    title: t('OPEN_CARTS', 'Open carts'),
    pageName: 'open_carts',
    url: '/cart-recovery/open-carts'
  }, {
    id: 5,
    title: t('CART_RECOVERY_AUTOMATION', 'Cart recovery automation'),
    pageName: 'recovery_actions',
    url: '/cart-recovery/recovery-actions'
  }, {
    id: 6,
    title: t('CAMPAIGN', 'Campaign'),
    pageName: 'campaign',
    url: '/marketing/campaign'
  }];
  var handleGoToPage = function handleGoToPage(data) {
    if (windowSize.width < 768) {
      handleMenuCollapse(true);
    }
    events.emit('go_to_page', data);
  };
  var handleGoToLink = function handleGoToLink(link) {
    window.open(link, '_blank');
  };
  var handleOpenSite = function handleOpenSite() {
    var _configs$site_url, _configs$site_url2;
    var siteUrl = site !== null && site !== void 0 && site.domain && (site === null || site === void 0 ? void 0 : site.ssl_process_status) === 'ended' ? "https://".concat(site === null || site === void 0 ? void 0 : site.domain) : configs !== null && configs !== void 0 && (_configs$site_url = configs.site_url) !== null && _configs$site_url !== void 0 && _configs$site_url.value ? configs === null || configs === void 0 || (_configs$site_url2 = configs.site_url) === null || _configs$site_url2 === void 0 ? void 0 : _configs$site_url2.value : "https://".concat(ordering.project, ".tryordering.com");
    handleGoToLink(siteUrl);
  };
  (0, _react.useEffect)(function () {
    if (windowSize.width < 1024) {
      handleMenuCollapse(true);
    }
  }, [windowSize.width]);
  var handleClickBilling = function handleClickBilling() {
    return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _billingState$result;
      var billingState, _billingState$result2, _billingState$result3, _billingState$result4;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getBillingToken();
          case 2:
            billingState = _context.sent;
            if (!(billingState !== null && billingState !== void 0 && billingState.error) && billingState !== null && billingState !== void 0 && (_billingState$result = billingState.result) !== null && _billingState$result !== void 0 && _billingState$result.access_token) {
              window.open("".concat(billingState !== null && billingState !== void 0 && (_billingState$result2 = billingState.result) !== null && _billingState$result2 !== void 0 && _billingState$result2.referer_url ? "https://".concat(billingState === null || billingState === void 0 || (_billingState$result3 = billingState.result) === null || _billingState$result3 === void 0 ? void 0 : _billingState$result3.referer_url) : billingUrl, "?token=").concat(billingState === null || billingState === void 0 || (_billingState$result4 = billingState.result) === null || _billingState$result4 === void 0 ? void 0 : _billingState$result4.access_token), '_blank');
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))).apply(this, arguments);
  };
  (0, _react.useEffect)(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setShowMessage(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showMessage && /*#__PURE__*/_react.default.createElement(_styles.MobileMessage, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.X, {
    onClick: function onClick() {
      return setShowMessage(false);
    }
  }), t('FOR_THE_BEST_EXPERIENCE_WHILE_SETTING_UP', 'For the best experience while setting up your project, we recommend using a computer.'))), /*#__PURE__*/_react.default.createElement(_styles.SidebarContainer, {
    id: "side_bar",
    isCollapse: isCollapse
  }, /*#__PURE__*/_react.default.createElement(_styles.SidebarInnerContainer, {
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement(_styles.SidebarHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: (configs === null || configs === void 0 || (_configs$dashboard_lo = configs.dashboard_logo) === null || _configs$dashboard_lo === void 0 ? void 0 : _configs$dashboard_lo.value) || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.logotype),
    onClick: function onClick() {
      return handleGoToPage({
        page: 'home'
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.BurgerButton, {
    onClick: function onClick() {
      return handleMenuCollapse(true);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 50 32"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2 c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z"
  })))), isPoweredByOrderingModule && /*#__PURE__*/_react.default.createElement(_styles.PoweredWrapper, null, t('POWERED_BY_ORDERING', 'Powered by Ordering.co'))), /*#__PURE__*/_react.default.createElement(_styles.SidebarMainContent, null, /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    className: "d-flex flex-column justify-content-between p-1 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column"
  }, (sessionState === null || sessionState === void 0 || (_sessionState$user13 = sessionState.user) === null || _sessionState$user13 === void 0 ? void 0 : _sessionState$user13.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: false,
    onClick: handleOpenSite
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BoxArrowUpRight, null), /*#__PURE__*/_react.default.createElement("span", null, t('MY_WEBSITE', 'My Website'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (sessionState === null || sessionState === void 0 || (_sessionState$user14 = sessionState.user) === null || _sessionState$user14 === void 0 ? void 0 : _sessionState$user14.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user15 = sessionState.user) === null || _sessionState$user15 === void 0 ? void 0 : _sessionState$user15.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0",
    active: location.pathname === '/home',
    page: "home",
    handleGoToPage: handleGoToPage
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), /*#__PURE__*/_react.default.createElement("span", null, t('HOME', 'Home')))), (sessionState === null || sessionState === void 0 || (_sessionState$user16 = sessionState.user) === null || _sessionState$user16 === void 0 ? void 0 : _sessionState$user16.level) !== 8 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1",
    active: location.pathname === '/orders' || location.pathname === '/deliveries' || location.pathname === '/drivers' || location.pathname === '/all-in-one' || location.pathname === '/appointments' || location.pathname === '/gift-cards'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ListCheck, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ordersSubMenus.map(function (item) {
    var _sessionState$user17, _sessionState$user18, _sessionState$user19, _sessionState$user20;
    return !((sessionState === null || sessionState === void 0 || (_sessionState$user17 = sessionState.user) === null || _sessionState$user17 === void 0 ? void 0 : _sessionState$user17.level) === 2 && item.pageName === 'drivers') && !(((sessionState === null || sessionState === void 0 || (_sessionState$user18 = sessionState.user) === null || _sessionState$user18 === void 0 ? void 0 : _sessionState$user18.level) === 2 || (sessionState === null || sessionState === void 0 || (_sessionState$user19 = sessionState.user) === null || _sessionState$user19 === void 0 ? void 0 : _sessionState$user19.level) === 5 || readOnlyAdmin) && item.pageName === 'giftCards') && !(((sessionState === null || sessionState === void 0 || (_sessionState$user20 = sessionState.user) === null || _sessionState$user20 === void 0 ? void 0 : _sessionState$user20.level) === 5 || readOnlyAdmin) && item.pageName === 'appointments') && (item.pageName === 'appointments' ? isEnabledAppointmentsFeature && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title)) : /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title)));
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user21 = sessionState.user) === null || _sessionState$user21 === void 0 ? void 0 : _sessionState$user21.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user22 = sessionState.user) === null || _sessionState$user22 === void 0 ? void 0 : _sessionState$user22.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2",
    page: "messages",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/messages'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), /*#__PURE__*/_react.default.createElement("span", null, t('MESSAGES', 'Messages')))), (sessionState === null || sessionState === void 0 || (_sessionState$user23 = sessionState.user) === null || _sessionState$user23 === void 0 ? void 0 : _sessionState$user23.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user24 = sessionState.user) === null || _sessionState$user24 === void 0 ? void 0 : _sessionState$user24.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3",
    active: location.pathname.includes('stores')
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null), /*#__PURE__*/_react.default.createElement("span", null, t('STORES', 'Stores'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, storesSubMenus.map(function (item) {
    var _sessionState$user25;
    return !((sessionState === null || sessionState === void 0 || (_sessionState$user25 = sessionState.user) === null || _sessionState$user25 === void 0 ? void 0 : _sessionState$user25.level) === 2 && item.pageName === 'brand') && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), ((sessionState === null || sessionState === void 0 || (_sessionState$user26 = sessionState.user) === null || _sessionState$user26 === void 0 ? void 0 : _sessionState$user26.level) === 0 || (sessionState === null || sessionState === void 0 || (_sessionState$user27 = sessionState.user) === null || _sessionState$user27 === void 0 ? void 0 : _sessionState$user27.level) === 2) && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "4",
    active: location.pathname === '/users/customers' || location.pathname === '/users/managers' || location.pathname === '/users/operation' || location.pathname === '/users/professionals'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.People, null), /*#__PURE__*/_react.default.createElement("span", null, t('USERS', 'Users'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ((sessionState === null || sessionState === void 0 || (_sessionState$user28 = sessionState.user) === null || _sessionState$user28 === void 0 ? void 0 : _sessionState$user28.level) === 2 ? usersSubMenus.filter(function (menu) {
    return buisnessOwnerUsersMenuIncluded.includes(menu.id);
  }) : usersSubMenus).map(function (item) {
    return item.pageName === 'professionals' ? isEnabledAppointmentsFeature && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title) : /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user29 = sessionState.user) === null || _sessionState$user29 === void 0 ? void 0 : _sessionState$user29.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user30 = sessionState.user) === null || _sessionState$user30 === void 0 ? void 0 : _sessionState$user30.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/intelligence/business' || location.pathname === '/intelligence/drivers' || location.pathname.includes('/intelligence/reviews') || location.pathname === '/intelligence/invoice' || location.pathname === '/intelligence/reports'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BarChartLine, null), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.firstLetterCapital)(t('BUSINESS_INTELLIGENCE', 'Business Intelligence')))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ((sessionState === null || sessionState === void 0 || (_sessionState$user31 = sessionState.user) === null || _sessionState$user31 === void 0 ? void 0 : _sessionState$user31.level) === 2 ? businessIntelligenceSubMenus.filter(function (menu) {
    return businessOwnerIntelligencesIncluded.includes(menu.id);
  }) : businessIntelligenceSubMenus).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title));
  })))), ((sessionState === null || sessionState === void 0 || (_sessionState$user32 = sessionState.user) === null || _sessionState$user32 === void 0 ? void 0 : _sessionState$user32.level) === 0 || (sessionState === null || sessionState === void 0 || (_sessionState$user33 = sessionState.user) === null || _sessionState$user33 === void 0 ? void 0 : _sessionState$user33.level) === 5) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "7",
    active: location.pathname === '/delivery/drivers-list' || location.pathname === '/delivery/drivers-managers' || location.pathname === '/delivery/drivers-companies' || location.pathname === '/delivery/drivers-groups' || location.pathname === '/delivery/drivers-time-display'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Truck, null), /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "7"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, deliverySubmenus.map(function (item) {
    return item.enabled && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title));
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user34 = sessionState.user) === null || _sessionState$user34 === void 0 ? void 0 : _sessionState$user34.level) === 0 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "8",
    active: location.pathname === '/marketing/promotions-enterprise' || location.pathname === '/marketing/campaign' || location.pathname === '/marketing/ad-banners' || location.pathname === '/loyalty/rewards-programs' || location.pathname === '/loyalty/levels' || location.pathname === '/loyalty/reports' || location.pathname === '/cart-recovery/open-carts' || location.pathname === '/cart-recovery/recovery-actions'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GraphUp, null), /*#__PURE__*/_react.default.createElement("span", null, t('MARKETING_LOYALTY', 'Marketing & Loyalty'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "8"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, marketingSubmenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title));
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user35 = sessionState.user) === null || _sessionState$user35 === void 0 ? void 0 : _sessionState$user35.level) === 0 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('SALES_CHANNELS_AND_PRODUCTS', 'Sales channels and products')), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "12",
    active: location.pathname === '/my-products/ordering-website' || location.pathname === '/my-products/customer-app' || location.pathname === '/my-products/store-app' || location.pathname === '/my-products/driver-app' || location.pathname === '/my-products/pos-app' || location.pathname === '/my-products/call-center-app' || location.pathname === '/my-products/kiosk-app' || location.pathname === '/my-products/custom-project'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BagCheck, null), /*#__PURE__*/_react.default.createElement("span", null, t('MY_PRODUCTS', 'My products'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "12"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, myProductMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))))), !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column mt-4"
  }, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)), (sessionState === null || sessionState === void 0 || (_sessionState$user36 = sessionState.user) === null || _sessionState$user36 === void 0 ? void 0 : _sessionState$user36.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/settings/basic' || location.pathname === '/settings/operation' || location.pathname === '/settings/plugin' || location.pathname === '/settings/pages' || location.pathname === '/settings/integrations' || location.pathname === '/settings/places' || location.pathname === '/settings/advanced' || location.pathname === '/settings/language' || location.pathname === '/settings/logs'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Gear, null), /*#__PURE__*/_react.default.createElement("span", null, t('SETTINGS', 'Settings'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, settingsSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title));
  }))))), (sessionState === null || sessionState === void 0 || (_sessionState$user37 = sessionState.user) === null || _sessionState$user37 === void 0 ? void 0 : _sessionState$user37.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/ordering-products' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'ordering_products'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.WindowDock, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERING_PRODUCTS', 'Ordering products'))), (sessionState === null || sessionState === void 0 || (_sessionState$user38 = sessionState.user) === null || _sessionState$user38 === void 0 ? void 0 : _sessionState$user38.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/support' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'support'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null), /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT', 'Support'))), (sessionState === null || sessionState === void 0 || (_sessionState$user39 = sessionState.user) === null || _sessionState$user39 === void 0 ? void 0 : _sessionState$user39.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: false,
    onClick: function onClick() {
      return handleClickBilling();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cash, null), /*#__PURE__*/_react.default.createElement("span", null, t('BILLING', 'Billing'))))), /*#__PURE__*/_react.default.createElement(_styles.UserInfo, {
    id: "user_info",
    className: "d-flex flex-column px-1"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-000flex align-items-center",
    variant: location.pathname === '/profile' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    }
  }, sessionState !== null && sessionState !== void 0 && (_sessionState$user40 = sessionState.user) !== null && _sessionState$user40 !== void 0 && _sessionState$user40.photo ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: sessionState === null || sessionState === void 0 || (_sessionState$user41 = sessionState.user) === null || _sessionState$user41 === void 0 ? void 0 : _sessionState$user41.photo,
    width: "30px",
    height: "30px",
    roundedCircle: true
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null), /*#__PURE__*/_react.default.createElement("span", null, sessionState === null || sessionState === void 0 || (_sessionState$user42 = sessionState.user) === null || _sessionState$user42 === void 0 ? void 0 : _sessionState$user42.name, " ", sessionState === null || sessionState === void 0 || (_sessionState$user43 = sessionState.user) === null || _sessionState$user43 === void 0 ? void 0 : _sessionState$user43.lastname)), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, null))))));
};
var ContextAwareToggle = function ContextAwareToggle(_ref2) {
  var children = _ref2.children,
    eventKey = _ref2.eventKey,
    callback = _ref2.callback,
    page = _ref2.page,
    handleGoToPage = _ref2.handleGoToPage,
    active = _ref2.active;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;
  var handleButtonClick = function handleButtonClick() {
    if (page) {
      handleGoToPage({
        page: page
      });
    }
    decoratedOnClick();
  };
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: active ? 'primary' : isCurrentEventKey && 'light',
    onClick: handleButtonClick
  }, children);
};
var SidebarMenu = function SidebarMenu(props) {
  var sidebarMenu = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SidebarMenuUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SidebarMenu, sidebarMenu);
};
exports.SidebarMenu = SidebarMenu;