"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LateralMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BiChevronDown = _interopRequireDefault(require("@meronex/icons/bi/BiChevronDown"));

var _style = require("../Dropdown/style");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _BsListTask = _interopRequireDefault(require("@meronex/icons/bs/BsListTask"));

var _EnUsers = _interopRequireDefault(require("@meronex/icons/en/EnUsers"));

var _RiLogoutCircleRLine = _interopRequireDefault(require("@meronex/icons/ri/RiLogoutCircleRLine"));

var _HiMenu = _interopRequireDefault(require("@meronex/icons/hi/HiMenu"));

var _GrClose = _interopRequireDefault(require("@meronex/icons/gr/GrClose"));

var _EnLogin = _interopRequireDefault(require("@meronex/icons/en/EnLogin"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LateralMenu = function LateralMenu(props) {
  var _theme$images, _theme$images$logos, _theme$images2, _theme$images2$logos, _theme$images3, _theme$images3$logos, _sessionState$user, _sessionState$user2, _sessionState$user3;

  var isCollapse = props.isCollapse,
      setIsCollapse = props.setIsCollapse;

  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      sessionState = _useSession2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMobile = _useState2[0],
      setIsMobile = _useState2[1];

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MobileHeader, null, /*#__PURE__*/_react.default.createElement(_HiMenu.default, {
    onClick: function onClick() {
      return setIsMobile(true);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype
  })), /*#__PURE__*/_react.default.createElement(_styles.LateralMenuContainer, {
    isShowMenu: isMobile,
    colapse: isCollapse
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, /*#__PURE__*/_react.default.createElement(_styles.MainMenuList, null, /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders-deliveries'
      });
    }
  }, isCollapse ? /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotype
  }) : /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    className: "isotype",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.isotype
  })), /*#__PURE__*/_react.default.createElement(_styles.CloseMenu, null, /*#__PURE__*/_react.default.createElement(_GrClose.default, {
    onClick: function onClick() {
      return setIsMobile(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.UserAvatar, null, /*#__PURE__*/_react.default.createElement(_style.DropDownCircleImage, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), (isCollapse || isMobile) && /*#__PURE__*/_react.default.createElement(_styles.UserName, null, sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.name, " ", sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.lastname, /*#__PURE__*/_react.default.createElement(_BiChevronDown.default, null))), /*#__PURE__*/_react.default.createElement(_styles.MenuItem, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders-deliveries'
      });
    },
    active: window.location.pathname === '/orders-deliveries'
  }, /*#__PURE__*/_react.default.createElement(_BsListTask.default, null), (isCollapse || isMobile) && /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, t('ORDERS_MANAGER', 'Orders Manager'))), /*#__PURE__*/_react.default.createElement(_styles.MenuItem, {
    active: window.location.pathname === '/users',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders-deliveries'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_EnUsers.default, null), (isCollapse || isMobile) && /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, t('USERS', 'Users')))), /*#__PURE__*/_react.default.createElement(_styles.MenuBottom, null, /*#__PURE__*/_react.default.createElement(_styles.LogOutItem, null, /*#__PURE__*/_react.default.createElement(_RiLogoutCircleRLine.default, null), (isCollapse || isMobile) && /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, t('LOG_OUT', 'Log out'))), !isMobile && /*#__PURE__*/_react.default.createElement(_styles.SidbeBarControl, {
    colapse: isCollapse
  }, /*#__PURE__*/_react.default.createElement(_EnLogin.default, {
    onClick: function onClick() {
      return setIsCollapse(!isCollapse);
    }
  }))))));
};

exports.LateralMenu = LateralMenu;

var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage3 = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var handleClick = function handleClick() {
    props.handleLogoutClick();
    props.onClose && props.onClose();
  };

  return /*#__PURE__*/_react.default.createElement(PopoverListItem, {
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(FaSignOutAlt, null), " ", t('LOGOUT', 'Logout'));
};

var PopoverListItemLogout = function PopoverListItemLogout(props) {
  var logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  };
  return /*#__PURE__*/_react.default.createElement(LogoutActionController, logoutActionProps);
};