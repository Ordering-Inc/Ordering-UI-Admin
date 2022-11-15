"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SidebarMenuUI = function SidebarMenuUI(props) {
  var _sessionState$user, _sessionState$user2, _sessionState$user3, _sessionState$user4, _sessionState$user5, _sessionState$user6, _sessionState$user7, _configs$dashboard_lo, _theme$images, _theme$images$logos, _sessionState$user8, _sessionState$user9, _sessionState$user10, _sessionState$user11, _sessionState$user14, _sessionState$user15, _sessionState$user16, _sessionState$user17, _sessionState$user19, _sessionState$user20, _sessionState$user21, _sessionState$user22, _sessionState$user23, _sessionState$user24, _sessionState$user25, _sessionState$user26, _sessionState$user27, _sessionState$user28, _sessionState$user29, _sessionState$user30, _sessionState$user31, _sessionState$user32, _sessionState$user33, _sessionState$user34, _sessionState$user35, _sessionState$user36, _sessionState$user37;
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
  var ordersSubMenus = [{
    id: 1,
    title: t('ORDERS_LIST', 'Orders list'),
    pageName: 'orders',
    url: '/orders'
  }, {
    id: 2,
    title: t('DELIVERY_DASHBOARD', 'Deliveries dashboard'),
    pageName: 'deliveries'
  }, {
    id: 3,
    title: t('DRIVERS_DASHBOARD', 'Drivers Dashboard'),
    pageName: 'drivers'
  }, {
    id: 4,
    title: t('APPOINTMENTS', 'Appointments'),
    pageName: 'appointments'
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
    enabled: (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.level) === 5 || (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.level) === 0 || (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.level) === 2
  }, {
    id: 2,
    title: t('DRIVER_MANAGERS', 'Drivers manager'),
    pageName: 'drivers_managers',
    url: '/delivery/drivers-managers',
    enabled: (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user4 = sessionState.user) === null || _sessionState$user4 === void 0 ? void 0 : _sessionState$user4.level) === 0
  }, {
    id: 3,
    title: t('DELIVERY_COMPANIES', 'Delivery companies'),
    pageName: 'drivers_companies',
    url: '/delivery/drivers-companies',
    enabled: (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user5 = sessionState.user) === null || _sessionState$user5 === void 0 ? void 0 : _sessionState$user5.level) === 0
  }, {
    id: 4,
    title: t('DELIVERY_AUTOMATION', 'Delivery automation'),
    pageName: 'drivers_groups',
    url: '/delivery/drivers-groups',
    enabled: (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user6 = sessionState.user) === null || _sessionState$user6 === void 0 ? void 0 : _sessionState$user6.level) === 5 || (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user7 = sessionState.user) === null || _sessionState$user7 === void 0 ? void 0 : _sessionState$user7.level) === 0
  }];
  var marketingSubmenus = [{
    id: 1,
    title: t('PROMOTION_AUTOMATION', 'Promotions automation'),
    pageName: 'enterprise_promotions',
    url: '/marketing/promotions-enterprise'
  }, {
    id: 2,
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
    handleGoToLink("https://".concat(ordering.project, ".tryordering.com"));
  };
  (0, _react.useEffect)(function () {
    if (windowSize.width < 1024) {
      handleMenuCollapse(true);
    }
  }, [windowSize.width]);
  var handleClickBilling = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _billingState$result;
      var billingState, _billingState$result2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getBillingToken();
            case 2:
              billingState = _context.sent;
              if (!(billingState !== null && billingState !== void 0 && billingState.error) && billingState !== null && billingState !== void 0 && (_billingState$result = billingState.result) !== null && _billingState$result !== void 0 && _billingState$result.access_token) {
                window.open("".concat(billingUrl, "?token=").concat(billingState === null || billingState === void 0 ? void 0 : (_billingState$result2 = billingState.result) === null || _billingState$result2 === void 0 ? void 0 : _billingState$result2.access_token), '_blank');
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function handleClickBilling() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SidebarContainer, {
    id: "side_bar",
    isCollapse: isCollapse
  }, /*#__PURE__*/_react.default.createElement(_styles.SidebarInnerContainer, {
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement(_styles.SidebarHeader, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: (configs === null || configs === void 0 ? void 0 : (_configs$dashboard_lo = configs.dashboard_logo) === null || _configs$dashboard_lo === void 0 ? void 0 : _configs$dashboard_lo.value) || (theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype),
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
  })))), /*#__PURE__*/_react.default.createElement(_styles.SidebarMainContent, null, /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    className: "d-flex flex-column justify-content-between p-1 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column"
  }, (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user8 = sessionState.user) === null || _sessionState$user8 === void 0 ? void 0 : _sessionState$user8.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: false,
    onClick: handleOpenSite
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BoxArrowUpRight, null), /*#__PURE__*/_react.default.createElement("span", null, t('MY_WEBSITE', 'My Website'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user9 = sessionState.user) === null || _sessionState$user9 === void 0 ? void 0 : _sessionState$user9.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user10 = sessionState.user) === null || _sessionState$user10 === void 0 ? void 0 : _sessionState$user10.level) !== 8 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0",
    active: location.pathname === '/home',
    page: "home",
    handleGoToPage: handleGoToPage
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), /*#__PURE__*/_react.default.createElement("span", null, t('HOME', 'Home')))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user11 = sessionState.user) === null || _sessionState$user11 === void 0 ? void 0 : _sessionState$user11.level) !== 8 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1",
    active: location.pathname === '/orders' || location.pathname === '/deliveries' || location.pathname === '/drivers' || location.pathname === '/appointments' || location.pathname === '/gift-cards'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ListCheck, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ordersSubMenus.map(function (item) {
    var _sessionState$user12, _sessionState$user13;
    return !((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user12 = sessionState.user) === null || _sessionState$user12 === void 0 ? void 0 : _sessionState$user12.level) === 2 && item.pageName === 'drivers') && !((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user13 = sessionState.user) === null || _sessionState$user13 === void 0 ? void 0 : _sessionState$user13.level) === 5 && item.pageName === 'appointments') && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title));
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user14 = sessionState.user) === null || _sessionState$user14 === void 0 ? void 0 : _sessionState$user14.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user15 = sessionState.user) === null || _sessionState$user15 === void 0 ? void 0 : _sessionState$user15.level) !== 8 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2",
    page: "messages",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/messages'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), /*#__PURE__*/_react.default.createElement("span", null, t('MESSAGES', 'Messages')))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user16 = sessionState.user) === null || _sessionState$user16 === void 0 ? void 0 : _sessionState$user16.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user17 = sessionState.user) === null || _sessionState$user17 === void 0 ? void 0 : _sessionState$user17.level) !== 8 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3",
    active: location.pathname.includes('stores')
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null), /*#__PURE__*/_react.default.createElement("span", null, t('STORES', 'Stores'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, storesSubMenus.map(function (item) {
    var _sessionState$user18;
    return !((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user18 = sessionState.user) === null || _sessionState$user18 === void 0 ? void 0 : _sessionState$user18.level) === 2 && item.pageName === 'brand') && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user19 = sessionState.user) === null || _sessionState$user19 === void 0 ? void 0 : _sessionState$user19.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "4",
    active: location.pathname === '/users/customers' || location.pathname === '/users/managers' || location.pathname === '/users/operation' || location.pathname === '/users/professionals'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.People, null), /*#__PURE__*/_react.default.createElement("span", null, t('USERS', 'Users'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, usersSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user20 = sessionState.user) === null || _sessionState$user20 === void 0 ? void 0 : _sessionState$user20.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user21 = sessionState.user) === null || _sessionState$user21 === void 0 ? void 0 : _sessionState$user21.level) !== 8 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/intelligence/business' || location.pathname === '/intelligence/drivers' || location.pathname.includes('/intelligence/reviews') || location.pathname === '/intelligence/invoice' || location.pathname === '/intelligence/reports'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BarChartLine, null), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.firstLetterCapital)(t('BUSINESS_INTELLIGENCE', 'Business Intelligence')))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user22 = sessionState.user) === null || _sessionState$user22 === void 0 ? void 0 : _sessionState$user22.level) === 2 ? businessIntelligenceSubMenus.filter(function (menu) {
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
  })))), ((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user23 = sessionState.user) === null || _sessionState$user23 === void 0 ? void 0 : _sessionState$user23.level) === 0 || (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user24 = sessionState.user) === null || _sessionState$user24 === void 0 ? void 0 : _sessionState$user24.level) === 5 || (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user25 = sessionState.user) === null || _sessionState$user25 === void 0 ? void 0 : _sessionState$user25.level) === 2) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "7",
    active: location.pathname === '/delivery/drivers-list' || location.pathname === '/delivery/drivers-managers' || location.pathname === '/delivery/drivers-companies' || location.pathname === '/delivery/drivers-groups'
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
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user26 = sessionState.user) === null || _sessionState$user26 === void 0 ? void 0 : _sessionState$user26.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "8",
    active: location.pathname === '/marketing/promotions-enterprise' || location.pathname === '/marketing/campaign'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GraphUp, null), /*#__PURE__*/_react.default.createElement("span", null, t('MARKETING', 'Marketing'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
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
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user27 = sessionState.user) === null || _sessionState$user27 === void 0 ? void 0 : _sessionState$user27.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "9",
    active: location.pathname === '/loyalty/rewards-programs' || location.pathname === '/loyalty/levels' || location.pathname === '/loyalty/reports'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Award, null), /*#__PURE__*/_react.default.createElement("span", null, t('LOYALTY', 'Loyalty'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "9"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, loyaltySubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title));
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user28 = sessionState.user) === null || _sessionState$user28 === void 0 ? void 0 : _sessionState$user28.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "10",
    active: location.pathname === '/cart-recovery/open-carts' || location.pathname === '/cart-recovery/recovery-actions'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("span", null, t('CART_RECOVERY', 'Cart recovery'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "10"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, cartRecoveryMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, (0, _utils.firstLetterCapital)(item.title));
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user29 = sessionState.user) === null || _sessionState$user29 === void 0 ? void 0 : _sessionState$user29.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('SALES_CHANNELS_AND_PRODUCTS', 'Sales channels and products')), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "12",
    active: location.pathname === '/my-products/ordering-website' || location.pathname === '/my-products/customer-app' || location.pathname === '/my-products/store-app' || location.pathname === '/my-products/driver-app' || location.pathname === '/my-products/pos-app' || location.pathname === '/my-products/call-center-app' || location.pathname === '/my-products/kiosk-app'
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
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column mt-4"
  }, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user30 = sessionState.user) === null || _sessionState$user30 === void 0 ? void 0 : _sessionState$user30.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/settings/basic' || location.pathname === '/settings/operation' || location.pathname === '/settings/pages' || location.pathname === '/settings/integrations' || location.pathname === '/settings/places' || location.pathname === '/settings/advanced' || location.pathname === '/settings/language'
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
  }))))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user31 = sessionState.user) === null || _sessionState$user31 === void 0 ? void 0 : _sessionState$user31.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/ordering-products' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'ordering_products'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.WindowDock, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERING_PRODUCTS', 'Ordering products'))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user32 = sessionState.user) === null || _sessionState$user32 === void 0 ? void 0 : _sessionState$user32.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/support' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'support'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null), /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT', 'Support'))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user33 = sessionState.user) === null || _sessionState$user33 === void 0 ? void 0 : _sessionState$user33.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
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
  }, sessionState !== null && sessionState !== void 0 && (_sessionState$user34 = sessionState.user) !== null && _sessionState$user34 !== void 0 && _sessionState$user34.photo ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user35 = sessionState.user) === null || _sessionState$user35 === void 0 ? void 0 : _sessionState$user35.photo,
    width: "30px",
    height: "30px",
    roundedCircle: true
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null), /*#__PURE__*/_react.default.createElement("span", null, sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user36 = sessionState.user) === null || _sessionState$user36 === void 0 ? void 0 : _sessionState$user36.name, " ", sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user37 = sessionState.user) === null || _sessionState$user37 === void 0 ? void 0 : _sessionState$user37.lastname)), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, null))))));
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