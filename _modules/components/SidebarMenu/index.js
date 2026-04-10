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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SidebarMenuUI = function SidebarMenuUI(props) {
  var _configs$powered_by_o, _configs$appointments, _sessionState$user, _sessionState$user2, _sessionState$user3, _sessionState$user4, _sessionState$user5, _sessionState$user6, _sessionState$user7, _sessionState$user8, _sessionState$user9, _sessionState$user0, _sessionState$user1, _sessionState$user10, _configs$dashboard_lo, _theme$images, _sessionState$user11, _sessionState$user12, _sessionState$user13, _sessionState$user14, _sessionState$user19, _sessionState$user20, _sessionState$user21, _sessionState$user22, _sessionState$user24, _sessionState$user25, _sessionState$user26, _sessionState$user27, _sessionState$user28, _sessionState$user29, _sessionState$user30, _sessionState$user31, _sessionState$user32, _sessionState$user33, _sessionState$user34, _sessionState$user35, _sessionState$user36, _sessionState$user37, _sessionState$user38, _sessionState$user39, _sessionState$user40, _sessionState$user41;
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
    enabled: ((sessionState === null || sessionState === void 0 || (_sessionState$user9 = sessionState.user) === null || _sessionState$user9 === void 0 ? void 0 : _sessionState$user9.level) === 5 || (sessionState === null || sessionState === void 0 || (_sessionState$user0 = sessionState.user) === null || _sessionState$user0 === void 0 ? void 0 : _sessionState$user0.level) === 0) && !(readOnlyAdmin || readOnlyDeliveryManager)
  }, {
    id: 5,
    title: t('DRIVERS_TIME_DISPLAY', 'Drivers time display'),
    pageName: 'drivers_time_display',
    url: '/delivery/drivers-time-display',
    enabled: ((sessionState === null || sessionState === void 0 || (_sessionState$user1 = sessionState.user) === null || _sessionState$user1 === void 0 ? void 0 : _sessionState$user1.level) === 5 || (sessionState === null || sessionState === void 0 || (_sessionState$user10 = sessionState.user) === null || _sessionState$user10 === void 0 ? void 0 : _sessionState$user10.level) === 0) && !(readOnlyAdmin || readOnlyDeliveryManager)
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
  var handleClickBilling = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _billingState$result;
      var billingState, _billingState$result2, _billingState$result3, _billingState$result4;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return getBillingToken();
          case 1:
            billingState = _context.v;
            if (!(billingState !== null && billingState !== void 0 && billingState.error) && billingState !== null && billingState !== void 0 && (_billingState$result = billingState.result) !== null && _billingState$result !== void 0 && _billingState$result.access_token) {
              window.open("".concat(billingState !== null && billingState !== void 0 && (_billingState$result2 = billingState.result) !== null && _billingState$result2 !== void 0 && _billingState$result2.referer_url ? "https://".concat(billingState === null || billingState === void 0 || (_billingState$result3 = billingState.result) === null || _billingState$result3 === void 0 ? void 0 : _billingState$result3.referer_url) : billingUrl, "?token=").concat(billingState === null || billingState === void 0 || (_billingState$result4 = billingState.result) === null || _billingState$result4 === void 0 ? void 0 : _billingState$result4.access_token), '_blank');
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleClickBilling() {
      return _ref.apply(this, arguments);
    };
  }();
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
  }, (sessionState === null || sessionState === void 0 || (_sessionState$user11 = sessionState.user) === null || _sessionState$user11 === void 0 ? void 0 : _sessionState$user11.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: false,
    onClick: handleOpenSite
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BoxArrowUpRight, null), /*#__PURE__*/_react.default.createElement("span", null, t('MY_WEBSITE', 'My Website'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (sessionState === null || sessionState === void 0 || (_sessionState$user12 = sessionState.user) === null || _sessionState$user12 === void 0 ? void 0 : _sessionState$user12.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user13 = sessionState.user) === null || _sessionState$user13 === void 0 ? void 0 : _sessionState$user13.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0",
    active: location.pathname === '/home',
    page: "home",
    handleGoToPage: handleGoToPage
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), /*#__PURE__*/_react.default.createElement("span", null, t('HOME', 'Home')))), (sessionState === null || sessionState === void 0 || (_sessionState$user14 = sessionState.user) === null || _sessionState$user14 === void 0 ? void 0 : _sessionState$user14.level) !== 8 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1",
    active: location.pathname === '/orders' || location.pathname === '/deliveries' || location.pathname === '/drivers' || location.pathname === '/all-in-one' || location.pathname === '/appointments' || location.pathname === '/gift-cards'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ListCheck, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ordersSubMenus.map(function (item) {
    var _sessionState$user15, _sessionState$user16, _sessionState$user17, _sessionState$user18;
    return !((sessionState === null || sessionState === void 0 || (_sessionState$user15 = sessionState.user) === null || _sessionState$user15 === void 0 ? void 0 : _sessionState$user15.level) === 2 && item.pageName === 'drivers') && !(((sessionState === null || sessionState === void 0 || (_sessionState$user16 = sessionState.user) === null || _sessionState$user16 === void 0 ? void 0 : _sessionState$user16.level) === 2 || (sessionState === null || sessionState === void 0 || (_sessionState$user17 = sessionState.user) === null || _sessionState$user17 === void 0 ? void 0 : _sessionState$user17.level) === 5 || readOnlyAdmin) && item.pageName === 'giftCards') && !(((sessionState === null || sessionState === void 0 || (_sessionState$user18 = sessionState.user) === null || _sessionState$user18 === void 0 ? void 0 : _sessionState$user18.level) === 5 || readOnlyAdmin) && item.pageName === 'appointments') && (item.pageName === 'appointments' ? isEnabledAppointmentsFeature && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
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
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user19 = sessionState.user) === null || _sessionState$user19 === void 0 ? void 0 : _sessionState$user19.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user20 = sessionState.user) === null || _sessionState$user20 === void 0 ? void 0 : _sessionState$user20.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2",
    page: "messages",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/messages'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), /*#__PURE__*/_react.default.createElement("span", null, t('MESSAGES', 'Messages')))), (sessionState === null || sessionState === void 0 || (_sessionState$user21 = sessionState.user) === null || _sessionState$user21 === void 0 ? void 0 : _sessionState$user21.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user22 = sessionState.user) === null || _sessionState$user22 === void 0 ? void 0 : _sessionState$user22.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3",
    active: location.pathname.includes('stores')
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null), /*#__PURE__*/_react.default.createElement("span", null, t('STORES', 'Stores'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, storesSubMenus.map(function (item) {
    var _sessionState$user23;
    return !((sessionState === null || sessionState === void 0 || (_sessionState$user23 = sessionState.user) === null || _sessionState$user23 === void 0 ? void 0 : _sessionState$user23.level) === 2 && item.pageName === 'brand') && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), ((sessionState === null || sessionState === void 0 || (_sessionState$user24 = sessionState.user) === null || _sessionState$user24 === void 0 ? void 0 : _sessionState$user24.level) === 0 || (sessionState === null || sessionState === void 0 || (_sessionState$user25 = sessionState.user) === null || _sessionState$user25 === void 0 ? void 0 : _sessionState$user25.level) === 2) && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "4",
    active: location.pathname === '/users/customers' || location.pathname === '/users/managers' || location.pathname === '/users/operation' || location.pathname === '/users/professionals'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.People, null), /*#__PURE__*/_react.default.createElement("span", null, t('USERS', 'Users'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ((sessionState === null || sessionState === void 0 || (_sessionState$user26 = sessionState.user) === null || _sessionState$user26 === void 0 ? void 0 : _sessionState$user26.level) === 2 ? usersSubMenus.filter(function (menu) {
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
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user27 = sessionState.user) === null || _sessionState$user27 === void 0 ? void 0 : _sessionState$user27.level) !== 5 && (sessionState === null || sessionState === void 0 || (_sessionState$user28 = sessionState.user) === null || _sessionState$user28 === void 0 ? void 0 : _sessionState$user28.level) !== 8 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/intelligence/business' || location.pathname === '/intelligence/drivers' || location.pathname.includes('/intelligence/reviews') || location.pathname === '/intelligence/invoice' || location.pathname === '/intelligence/reports'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BarChartLine, null), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.firstLetterCapital)(t('BUSINESS_INTELLIGENCE', 'Business Intelligence')))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ((sessionState === null || sessionState === void 0 || (_sessionState$user29 = sessionState.user) === null || _sessionState$user29 === void 0 ? void 0 : _sessionState$user29.level) === 2 ? businessIntelligenceSubMenus.filter(function (menu) {
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
  })))), ((sessionState === null || sessionState === void 0 || (_sessionState$user30 = sessionState.user) === null || _sessionState$user30 === void 0 ? void 0 : _sessionState$user30.level) === 0 || (sessionState === null || sessionState === void 0 || (_sessionState$user31 = sessionState.user) === null || _sessionState$user31 === void 0 ? void 0 : _sessionState$user31.level) === 5) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user32 = sessionState.user) === null || _sessionState$user32 === void 0 ? void 0 : _sessionState$user32.level) === 0 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
  })))), (sessionState === null || sessionState === void 0 || (_sessionState$user33 = sessionState.user) === null || _sessionState$user33 === void 0 ? void 0 : _sessionState$user33.level) === 0 && !(readOnlyAdmin || readOnlyDeliveryManager || readOnlyBusinessOwner) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('SALES_CHANNELS_AND_PRODUCTS', 'Sales channels and products')), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
  }, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)), (sessionState === null || sessionState === void 0 || (_sessionState$user34 = sessionState.user) === null || _sessionState$user34 === void 0 ? void 0 : _sessionState$user34.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
  }))))), (sessionState === null || sessionState === void 0 || (_sessionState$user35 = sessionState.user) === null || _sessionState$user35 === void 0 ? void 0 : _sessionState$user35.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/ordering-products' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'ordering_products'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.WindowDock, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERING_PRODUCTS', 'Ordering products'))), (sessionState === null || sessionState === void 0 || (_sessionState$user36 = sessionState.user) === null || _sessionState$user36 === void 0 ? void 0 : _sessionState$user36.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/support' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'support'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null), /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT', 'Support'))), (sessionState === null || sessionState === void 0 || (_sessionState$user37 = sessionState.user) === null || _sessionState$user37 === void 0 ? void 0 : _sessionState$user37.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
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
  }, sessionState !== null && sessionState !== void 0 && (_sessionState$user38 = sessionState.user) !== null && _sessionState$user38 !== void 0 && _sessionState$user38.photo ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: sessionState === null || sessionState === void 0 || (_sessionState$user39 = sessionState.user) === null || _sessionState$user39 === void 0 ? void 0 : _sessionState$user39.photo,
    width: "30px",
    height: "30px",
    roundedCircle: true
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null), /*#__PURE__*/_react.default.createElement("span", null, sessionState === null || sessionState === void 0 || (_sessionState$user40 = sessionState.user) === null || _sessionState$user40 === void 0 ? void 0 : _sessionState$user40.name, " ", sessionState === null || sessionState === void 0 || (_sessionState$user41 = sessionState.user) === null || _sessionState$user41 === void 0 ? void 0 : _sessionState$user41.lastname)), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, null))))));
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
var SidebarMenu = exports.SidebarMenu = function SidebarMenu(props) {
  var sidebarMenu = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SidebarMenuUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SidebarMenu, sidebarMenu);
};