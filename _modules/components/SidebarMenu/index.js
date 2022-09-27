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

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SidebarMenu = function SidebarMenu(props) {
  var _configs$dashboard_lo, _theme$images, _theme$images$logos, _sessionState$user, _sessionState$user4, _sessionState$user5, _sessionState$user7, _sessionState$user8, _sessionState$user9, _sessionState$user10, _sessionState$user11, _sessionState$user12, _sessionState$user13, _sessionState$user14, _sessionState$user15, _sessionState$user16, _sessionState$user17, _sessionState$user18, _sessionState$user19, _sessionState$user20, _sessionState$user21, _sessionState$user22, _sessionState$user23, _sessionState$user24, _sessionState$user25, _sessionState$user26, _sessionState$user27, _sessionState$user28;

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

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var windowSize = (0, _useWindowSize.useWindowSize)();
  var ordersSubMenus = [{
    id: 1,
    title: t('ORDERS_MANAGER', 'Orders manager'),
    pageName: 'orders'
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
    title: t('REWARDS_PROGRAMS', 'Rewards programs'),
    pageName: 'rewards_programs',
    url: '/loyalty/rewards-programs'
  } // {
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
    title: t('RECOVERY_ACTIONS', 'Recovery actions'),
    pageName: 'recovery_actions',
    url: '/cart-recovery/recovery-actions'
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
    pageName: 'basicSettings',
    url: '/settings/basic'
  }, {
    id: 2,
    title: t('OPERATION_SETTINGS', 'Operation settings'),
    pageName: 'operationSettings',
    url: '/settings/operation'
  }, {
    id: 3,
    title: t('CMS_HEADING', 'CMS'),
    pageName: 'pages',
    url: '/settings/pages'
  }, {
    id: 4,
    title: t('INTEGRATION', 'Integrations'),
    pageName: 'integrations',
    url: '/settings/integrations'
  }, {
    id: 5,
    title: t('COUNTRIES_CITIES', 'Countries/Cities'),
    pageName: 'places',
    url: '/settings/places'
  }, {
    id: 6,
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
    title: t('ADVANCED_REPORTS', 'Advanced Reports'),
    pageName: 'reports',
    url: '/intelligence/reports'
  }];
  var businessOwnerIntelligencesIncluded = [1];
  var deliverySubmenus = [{
    id: 1,
    title: t('DRIVERS', 'Drivers'),
    pageName: 'delivery_drivers',
    url: '/delivery/drivers-list'
  }, {
    id: 2,
    title: t('DRIVER_MANAGERS', 'Drivers manager'),
    pageName: 'drivers_managers',
    url: '/delivery/drivers-managers'
  }, {
    id: 3,
    title: t('DRIVERS_COMPANIES', 'Drivers companies'),
    pageName: 'drivers_companies',
    url: '/delivery/drivers-companies'
  }, {
    id: 4,
    title: t('DRIVERS_GROUPS', 'Drivers groups'),
    pageName: 'drivers_groups',
    url: '/delivery/drivers-groups'
  }];
  var driverManagerSubMenus = [{
    id: 1,
    title: t('DRIVERS', 'Drivers'),
    pageName: 'delivery_drivers',
    url: '/delivery/drivers-list'
  }, {
    id: 2,
    title: t('DRIVERS_GROUPS', 'Drivers groups'),
    pageName: 'drivers_groups',
    url: '/delivery/drivers-groups'
  }];
  var marketingSubmenus = [{
    id: 1,
    title: t('PROMOTIONS_ENTERPRISE', 'Promotions enterprise'),
    pageName: 'enterprise_promotions',
    url: '/marketing/promotions-enterprise'
  }, {
    id: 2,
    title: t('CAMPAIGN', 'Campaign'),
    pageName: 'campaign',
    url: '/marketing/campaign'
  }];
  var downloadsSubMenus = [{
    id: 1,
    title: t('FREE_PRODUCTS', 'Free products'),
    pageName: 'free_products',
    url: '/downloads/free-products'
  }, {
    id: 2,
    title: t('PURCHASED_PRODUCTS', 'Purchased products'),
    pageName: 'purchased_products',
    url: '/downloads/purchased-products'
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

  (0, _react.useEffect)(function () {
    if (windowSize.width < 1024) {
      handleMenuCollapse(true);
    }
  }, [windowSize.width]);
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
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0",
    active: location.pathname === '/home',
    page: "home",
    handleGoToPage: handleGoToPage
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), /*#__PURE__*/_react.default.createElement("span", null, t('HOME', 'Home')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1",
    active: location.pathname === '/orders' || location.pathname === '/deliveries' || location.pathname === '/drivers' || location.pathname === '/appointments'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ListCheck, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ordersSubMenus.map(function (item) {
    var _sessionState$user2, _sessionState$user3;

    return !((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.level) === 2 && item.pageName === 'drivers') && !((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.level) === 5 && item.pageName === 'appointments') && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user4 = sessionState.user) === null || _sessionState$user4 === void 0 ? void 0 : _sessionState$user4.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2",
    page: "messages",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/messages'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), /*#__PURE__*/_react.default.createElement("span", null, t('MESSAGES', 'Messages')))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user5 = sessionState.user) === null || _sessionState$user5 === void 0 ? void 0 : _sessionState$user5.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3",
    active: location.pathname.includes('stores')
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null), /*#__PURE__*/_react.default.createElement("span", null, t('STORES', 'Stores'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, storesSubMenus.map(function (item) {
    var _sessionState$user6;

    return !((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user6 = sessionState.user) === null || _sessionState$user6 === void 0 ? void 0 : _sessionState$user6.level) === 2 && item.pageName === 'brand') && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user7 = sessionState.user) === null || _sessionState$user7 === void 0 ? void 0 : _sessionState$user7.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user8 = sessionState.user) === null || _sessionState$user8 === void 0 ? void 0 : _sessionState$user8.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/intelligence/business' || location.pathname === '/intelligence/drivers' || location.pathname.includes('/intelligence/reviews') || location.pathname === '/intelligence/invoice' || location.pathname === '/intelligence/reports'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BarChartLine, null), /*#__PURE__*/_react.default.createElement("span", null, t('BUSINESS_INTELLIGENCE', 'Business Intelligence'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user9 = sessionState.user) === null || _sessionState$user9 === void 0 ? void 0 : _sessionState$user9.level) === 2 ? businessIntelligenceSubMenus.filter(function (menu) {
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
    }, item.title);
  })))), ((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user10 = sessionState.user) === null || _sessionState$user10 === void 0 ? void 0 : _sessionState$user10.level) === 0 || (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user11 = sessionState.user) === null || _sessionState$user11 === void 0 ? void 0 : _sessionState$user11.level) === 5) && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "7",
    active: location.pathname === '/delivery/drivers-list' || location.pathname === '/delivery/drivers-managers' || location.pathname === '/delivery/drivers-companies' || location.pathname === '/delivery/drivers-groups'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Truck, null), /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "7"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ((sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user12 = sessionState.user) === null || _sessionState$user12 === void 0 ? void 0 : _sessionState$user12.level) === 5 ? driverManagerSubMenus : deliverySubmenus).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user13 = sessionState.user) === null || _sessionState$user13 === void 0 ? void 0 : _sessionState$user13.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user14 = sessionState.user) === null || _sessionState$user14 === void 0 ? void 0 : _sessionState$user14.level) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user15 = sessionState.user) === null || _sessionState$user15 === void 0 ? void 0 : _sessionState$user15.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user16 = sessionState.user) === null || _sessionState$user16 === void 0 ? void 0 : _sessionState$user16.level) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
    }, item.title);
  })))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user17 = sessionState.user) === null || _sessionState$user17 === void 0 ? void 0 : _sessionState$user17.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user18 = sessionState.user) === null || _sessionState$user18 === void 0 ? void 0 : _sessionState$user18.level) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
    }, item.title);
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column mt-4"
  }, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user19 = sessionState.user) === null || _sessionState$user19 === void 0 ? void 0 : _sessionState$user19.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
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
    }, item.title);
  }))))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user20 = sessionState.user) === null || _sessionState$user20 === void 0 ? void 0 : _sessionState$user20.level) !== 5 && (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user21 = sessionState.user) === null || _sessionState$user21 === void 0 ? void 0 : _sessionState$user21.level) !== 2 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/ordering-products' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'ordering_products'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.WindowDock, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERING_PRODUCTS', 'Ordering products'))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user22 = sessionState.user) === null || _sessionState$user22 === void 0 ? void 0 : _sessionState$user22.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/support' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'support'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null), /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT', 'Support'))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user23 = sessionState.user) === null || _sessionState$user23 === void 0 ? void 0 : _sessionState$user23.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: false,
    onClick: function onClick() {
      return handleGoToLink('https://apps.tryordering.com/store/marketplace');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BoxArrowUpRight, null), /*#__PURE__*/_react.default.createElement("span", null, t('MARKETPLACE', 'Marketplace'))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user24 = sessionState.user) === null || _sessionState$user24 === void 0 ? void 0 : _sessionState$user24.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "11",
    active: location.pathname === '/downloads/free-products' || location.pathname === '/downloads/purchased-products'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CloudDownload, null), /*#__PURE__*/_react.default.createElement("span", null, t('DOWNLOADS', 'Downloads'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "11"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, downloadsSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  }))))))), /*#__PURE__*/_react.default.createElement(_styles.UserInfo, {
    id: "user_info",
    className: "d-flex flex-column px-1"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    },
    variant: location.pathname === '/profile' && 'primary'
  }, sessionState !== null && sessionState !== void 0 && (_sessionState$user25 = sessionState.user) !== null && _sessionState$user25 !== void 0 && _sessionState$user25.photo ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user26 = sessionState.user) === null || _sessionState$user26 === void 0 ? void 0 : _sessionState$user26.photo,
    width: "30px",
    height: "30px",
    roundedCircle: true
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null), /*#__PURE__*/_react.default.createElement("span", null, sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user27 = sessionState.user) === null || _sessionState$user27 === void 0 ? void 0 : _sessionState$user27.name, " ", sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user28 = sessionState.user) === null || _sessionState$user28 === void 0 ? void 0 : _sessionState$user28.lastname)), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, null))))));
};

exports.SidebarMenu = SidebarMenu;

var ContextAwareToggle = function ContextAwareToggle(_ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      callback = _ref.callback,
      page = _ref.page,
      handleGoToPage = _ref.handleGoToPage,
      active = _ref.active;
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