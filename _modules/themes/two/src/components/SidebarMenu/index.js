"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _reactBootstrap = require("react-bootstrap");

var _LanguageSelector = require("../LanguageSelector");

var _InfoShareContext = require("../../../../../contexts/InfoShareContext");

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
  var _theme$images, _theme$images$logos, _sessionState$user, _sessionState$user2, _sessionState$user3, _sessionState$user4, _sessionState$user5;

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
    title: t('DELIVERIES_DASHBOARD', 'Deliveries dashboard'),
    pageName: 'deliveries'
  }, {
    id: 3,
    title: t('DRIVERS_DASHBOARD', 'Drivers Dashboard'),
    pageName: 'drivers'
  }];
  var marketingSubMenus = [{
    id: 1,
    title: t('MARKET_SUITE', 'Market suite'),
    pageName: 'marketSuite'
  }, {
    id: 2,
    title: t('ANALYTICS', 'Analytics'),
    pageName: 'marketAnalytics'
  }, {
    id: 3,
    title: t('PROMOTIONS', 'Promotions'),
    pageName: 'promotions',
    url: '/marketing/promotions'
  }, {
    id: 4,
    title: t('PROMOTIONS_ENTERPRISE', 'Promotions enterprise'),
    pageName: 'promotionsEnterprise'
  }, {
    id: 5,
    title: t('CAMPAIGN', 'Campaign'),
    pageName: 'campaign'
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
  }];
  var analyticsSubMenus = [{
    id: 1,
    title: t('CONTROL_PANEL_BUSINESS', 'Business'),
    pageName: 'business_analytics',
    url: '/analytics/business'
  }, {
    id: 2,
    title: t('DRIVERS', 'Drivers'),
    pageName: 'drivers_analytics',
    url: '/analytics/drivers'
  }, {
    id: 3,
    title: t('PROMOTIONS', 'Promotions'),
    pageName: 'promotions_analytics',
    url: '/analytics/promotions'
  }, {
    id: 4,
    title: t('BUSINESS_INTELLIGENCE', 'Business Intelligence'),
    pageName: 'intelligence_analytics',
    url: '/analytics/business_intelligence'
  }];

  var handleGoToPage = function handleGoToPage(data) {
    if (windowSize.width < 768) {
      handleMenuCollapse(true);
    }

    events.emit('go_to_page', data);
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
  }, /*#__PURE__*/_react.default.createElement(_styles.SidebarHeader, {
    className: "p-1",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype,
    fluid: true,
    width: "150px",
    height: "45px"
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
  })))), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    className: "d-flex flex-column justify-content-between p-1 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), /*#__PURE__*/_react.default.createElement("span", null, t('HOME', 'Home')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1",
    active: location.pathname === '/orders' || location.pathname === '/deliveries' || location.pathname === '/drivers'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ListCheck, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ordersSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2",
    page: "messages",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/messages'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), /*#__PURE__*/_react.default.createElement("span", null, t('MESSAGES', 'Messages')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3",
    page: "businesses",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/businesses' || location.pathname.includes('/store/')
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null), /*#__PURE__*/_react.default.createElement("span", null, t('STORES', 'Stores')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "4",
    page: "users",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/users'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.People, null), /*#__PURE__*/_react.default.createElement("span", null, t('USERS', 'Users')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/analytics/business' || location.pathname === '/analytics/drivers' || location.pathname === '/analytics/promotions' || location.pathname === '/analytics/business_intelligence'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BarChartLine, null), /*#__PURE__*/_react.default.createElement("span", null, t('ANALYTICS', 'Analytics'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, analyticsSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "6",
    active: location.pathname === '/marketing/promotions'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GraphUp, null), /*#__PURE__*/_react.default.createElement("span", null, t('MARKETING', 'Marketing'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "6"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, marketingSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName) || location.pathname.includes(item === null || item === void 0 ? void 0 : item.url),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Globe2, null), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.level) === 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/settings/basic' || location.pathname === '/settings/operation'
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
  }))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/support' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'support'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null), /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT', 'Support'))))), /*#__PURE__*/_react.default.createElement(_styles.UserInfo, {
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
  }, sessionState !== null && sessionState !== void 0 && (_sessionState$user2 = sessionState.user) !== null && _sessionState$user2 !== void 0 && _sessionState$user2.photo ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.photo,
    width: "30px",
    height: "30px",
    roundedCircle: true
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null), /*#__PURE__*/_react.default.createElement("span", null, sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user4 = sessionState.user) === null || _sessionState$user4 === void 0 ? void 0 : _sessionState$user4.name, " ", sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user5 = sessionState.user) === null || _sessionState$user5 === void 0 ? void 0 : _sessionState$user5.lastname)), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, null)))));
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