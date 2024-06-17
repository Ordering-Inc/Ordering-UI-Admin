"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetailsUI = exports.UserDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactBootstrap = require("react-bootstrap");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrdersManager = require("../../Orders/OrdersManager");
var _AddressList = require("../AddressList");
var _Shared = require("../../Shared");
var _UserDetailsMenu = require("../UserDetailsMenu");
var _UserProfileForm = require("../UserProfileForm");
var _Users = require("../../Users");
var _DriversLogs = require("../DriversLogs");
var _DriversGroupLogs = require("../DriversGroupLogs");
var _DriverGroupSetting = require("../DriverGroupSetting");
var _DriversAdvancedLogs = require("../DriversAdvancedLogs");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("../UserFormDetails/styles");
var _utils = require("../../../utils");
var _styles3 = require("./styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var UserDetailsUI = function UserDetailsUI(props) {
  var _configs$allow_driver, _configs$white_label_, _userState$user, _userState$user2, _userState$user3, _userState$user5, _userState$user7, _userState$user8, _userState$user9, _userState$user10, _userState$user11, _scheduleState$change, _userState$user12, _userState$user13, _userState$user14, _userState$user15, _userState$user16, _userState$user17;
  var isDriversPage = props.isDriversPage,
    isDriversManagersPage = props.isDriversManagersPage,
    userState = props.userState,
    setExtraOpen = props.setExtraOpen,
    handleSuccessUserUpdate = props.handleSuccessUserUpdate,
    handleDeleteUser = props.handleDeleteUser,
    handleChangeActiveUser = props.handleChangeActiveUser,
    scheduleState = props.scheduleState,
    handleScheduleState = props.handleScheduleState,
    handleScheduleUpdateUser = props.handleScheduleUpdateUser,
    actionDisabled = props.actionDisabled;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)('profile'),
    _useState2 = _slicedToArray(_useState, 2),
    currentMenuSelected = _useState2[0],
    setCurrentMenuSelected = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isCustomField = _useState4[0],
    setIsCustomField = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isPersonalization = _useState6[0],
    setIsPersonalization = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isExpand = _useState8[0],
    setIsExpand = _useState8[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var viewOnly = (user === null || user === void 0 ? void 0 : user.readOnlyAdmin) || (user === null || user === void 0 ? void 0 : user.readOnlyDeliveryManager);
  var disableSchedule = (configs === null || configs === void 0 || (_configs$allow_driver = configs.allow_driver_manager_update_driver_schedule) === null || _configs$allow_driver === void 0 ? void 0 : _configs$allow_driver.value) === '0' && (user === null || user === void 0 ? void 0 : user.level) === 5 || viewOnly;
  var isWhiteLabel = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('user_lateral_bar');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    setExtraOpen(false);
  }, [currentMenuSelected]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setCurrentMenuSelected(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick(currentMenuSelected);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles3.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles3.UserName, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  }) : /*#__PURE__*/_react.default.createElement("span", null, (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.name, " ", (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.lastname), userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50,
    style: {
      margin: '0px 5px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, handleChangeActiveUser && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    disabled: actionDisabled,
    defaultChecked: (userState === null || userState === void 0 || (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.enabled) || false,
    onChange: function onChange(enabled) {
      var _userState$user4;
      return handleChangeActiveUser({
        id: userState === null || userState === void 0 || (_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.id,
        enabled: enabled
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles3.RightHeader, null, width > 576 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), ((_userState$user5 = userState.user) === null || _userState$user5 === void 0 ? void 0 : _userState$user5.id) && /*#__PURE__*/_react.default.createElement(_styles3.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsCustomField(true);
    },
    disabled: actionDisabled
  }, t('CUSTOM_FIELDS', 'Custom fields')), !isWhiteLabel && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsPersonalization(true);
    },
    disabled: actionDisabled
  }, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      var _userState$user6;
      return handleDeleteUser((_userState$user6 = userState.user) === null || _userState$user6 === void 0 ? void 0 : _userState$user6.id);
    },
    disabled: actionDisabled
  }, t('DELETE', 'Delete')))))), /*#__PURE__*/_react.default.createElement(_UserDetailsMenu.UserDetailsMenu, {
    isDriverMenu: isDriversPage,
    currentMenuSelected: currentMenuSelected,
    handleChangeMenu: handleTabClick
  }), !(userState !== null && userState !== void 0 && userState.loading) && (userState === null || userState === void 0 ? void 0 : userState.user) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentMenuSelected === 'profile' && /*#__PURE__*/_react.default.createElement(_UserProfileForm.UserProfileForm, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    user: userState.user,
    handleSuccessUpdate: handleSuccessUserUpdate
  }), currentMenuSelected === 'driver_group' && /*#__PURE__*/_react.default.createElement(_DriverGroupSetting.DriverGroupSetting, {
    userId: userState === null || userState === void 0 || (_userState$user7 = userState.user) === null || _userState$user7 === void 0 ? void 0 : _userState$user7.id
  }), currentMenuSelected === 'saved_places' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (userState === null || userState === void 0 || (_userState$user8 = userState.user) === null || _userState$user8 === void 0 ? void 0 : _userState$user8.addresses) && /*#__PURE__*/_react.default.createElement(_styles3.SavedPlaces, null, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isSeletectedUserAddresses: true,
    userId: (_userState$user9 = userState.user) === null || _userState$user9 === void 0 ? void 0 : _userState$user9.id,
    addresses: (_userState$user10 = userState.user) === null || _userState$user10 === void 0 ? void 0 : _userState$user10.addresses,
    setExtraOpen: setExtraOpen,
    userState: userState,
    handleSuccessUpdate: handleSuccessUserUpdate
  }))), currentMenuSelected === 'schedule' && /*#__PURE__*/_react.default.createElement(_styles3.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_Shared.Schedule, {
    isShowDate: !!isDriversPage,
    scheduleList: userState === null || userState === void 0 || (_userState$user11 = userState.user) === null || _userState$user11 === void 0 ? void 0 : _userState$user11.schedule,
    handleChangeScheduleState: handleScheduleState,
    disableSchedule: disableSchedule
  }), !disableSchedule && /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    id: "form-btn",
    color: "primary",
    borderRadius: "5px",
    disabled: scheduleState.loading || (scheduleState === null || scheduleState === void 0 || (_scheduleState$change = scheduleState.change) === null || _scheduleState$change === void 0 ? void 0 : _scheduleState$change.length) === 0,
    style: {
      marginTop: 20
    },
    onClick: function onClick() {
      return handleScheduleUpdateUser();
    }
  }, scheduleState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')))), currentMenuSelected === 'logs' && /*#__PURE__*/_react.default.createElement(_DriversLogs.DriversLogs, {
    userId: (_userState$user12 = userState.user) === null || _userState$user12 === void 0 ? void 0 : _userState$user12.id,
    UIComponent: _DriversGroupLogs.DriversGroupLogsUI
  }), currentMenuSelected === 'advanced_logs' && /*#__PURE__*/_react.default.createElement(_DriversAdvancedLogs.DriversAdvancedLogs, {
    userId: (_userState$user13 = userState.user) === null || _userState$user13 === void 0 ? void 0 : _userState$user13.id,
    UIComponent: _DriversGroupLogs.DriversGroupLogsUI
  }), currentMenuSelected === 'orders' && /*#__PURE__*/_react.default.createElement(_OrdersManager.OrdersManager, {
    isSelectedOrders: true,
    customerId: (_userState$user14 = userState.user) === null || _userState$user14 === void 0 ? void 0 : _userState$user14.id,
    handleCustomOrderDetail: setExtraOpen
  }), currentMenuSelected === 'push_tokens' && /*#__PURE__*/_react.default.createElement(_Shared.PushTokens, {
    userId: userState === null || userState === void 0 || (_userState$user15 = userState.user) === null || _userState$user15 === void 0 ? void 0 : _userState$user15.id,
    pushTokens: (userState === null || userState === void 0 || (_userState$user16 = userState.user) === null || _userState$user16 === void 0 ? void 0 : _userState$user16.push_tokens) || []
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('CUSTOM_FIELDS', 'Custom fields'),
    open: isCustomField,
    onClose: function onClose() {
      return setIsCustomField(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_Users.UserMetaFields, {
    userId: (_userState$user17 = userState.user) === null || _userState$user17 === void 0 ? void 0 : _userState$user17.id
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('PERSONALIZATION', 'Personalization'),
    open: isPersonalization,
    onClose: function onClose() {
      return setIsPersonalization(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles3.PersonalizationWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.Personalization, null))));
};
exports.UserDetailsUI = UserDetailsUI;
var UserDetails = function UserDetails(props) {
  var userDetailsControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserDetails, userDetailsControlProps));
};
exports.UserDetails = UserDetails;