"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetailsUI = exports.UserDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _reactBootstrap = require("react-bootstrap");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Orders = require("../../Orders");

var _AddressList = require("../AddressList");

var _Shared = require("../../Shared");

var _UserDetailsMenu = require("../UserDetailsMenu");

var _UserProfileForm = require("../UserProfileForm");

var _Users = require("../../Users");

var _DriverGroupSetting = require("../DriverGroupSetting");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("../../../styles");

var _styles2 = require("../UserFormDetails/styles");

var _styles3 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserDetailsUI = function UserDetailsUI(props) {
  var _userState$user, _userState$user2, _userState$user3, _userState$user5, _userState$user7, _userState$user8, _userState$user9, _userState$user10, _userState$user11, _scheduleState$change, _userState$user12, _userState$user13;

  var isDriversPage = props.isDriversPage,
      isDriversManagersPage = props.isDriversManagersPage,
      userState = props.userState,
      setExtraOpen = props.setExtraOpen,
      handleSuccessUserUpdate = props.handleSuccessUserUpdate,
      handleDeleteUser = props.handleDeleteUser,
      handleChangeActiveUser = props.handleChangeActiveUser,
      scheduleState = props.scheduleState,
      handleScheduleState = props.handleScheduleState,
      handleScheduleUpdateUser = props.handleScheduleUpdateUser;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

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

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      isDriverSchedule = _useState8[0],
      setIsDriverSchedule = _useState8[1];

  (0, _react.useEffect)(function () {
    setExtraOpen(false);
  }, [currentMenuSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles3.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles3.UserName, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  }) : /*#__PURE__*/_react.default.createElement("span", null, (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.name, " ", (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.lastname), userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50,
    style: {
      margin: '0px 5px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, handleChangeActiveUser && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (userState === null || userState === void 0 ? void 0 : (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.enabled) || false,
    onChange: function onChange(enabled) {
      var _userState$user4;

      return handleChangeActiveUser({
        id: userState === null || userState === void 0 ? void 0 : (_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.id,
        enabled: enabled
      });
    }
  }))), ((_userState$user5 = userState.user) === null || _userState$user5 === void 0 ? void 0 : _userState$user5.id) && /*#__PURE__*/_react.default.createElement(_styles3.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsCustomField(true);
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsPersonalization(true);
    }
  }, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      var _userState$user6;

      return handleDeleteUser((_userState$user6 = userState.user) === null || _userState$user6 === void 0 ? void 0 : _userState$user6.id);
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_UserDetailsMenu.UserDetailsMenu, {
    isDriverMenu: isDriversPage,
    currentMenuSelected: currentMenuSelected,
    handleChangeMenu: setCurrentMenuSelected
  }), !(userState !== null && userState !== void 0 && userState.loading) && (userState === null || userState === void 0 ? void 0 : userState.user) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentMenuSelected === 'profile' && /*#__PURE__*/_react.default.createElement(_UserProfileForm.UserProfileForm, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    user: userState.user,
    handleSuccessUpdate: handleSuccessUserUpdate
  }), currentMenuSelected === 'driver_group' && /*#__PURE__*/_react.default.createElement(_DriverGroupSetting.DriverGroupSetting, {
    userId: userState === null || userState === void 0 ? void 0 : (_userState$user7 = userState.user) === null || _userState$user7 === void 0 ? void 0 : _userState$user7.id
  }), currentMenuSelected === 'saved_places' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (userState === null || userState === void 0 ? void 0 : (_userState$user8 = userState.user) === null || _userState$user8 === void 0 ? void 0 : _userState$user8.addresses) && /*#__PURE__*/_react.default.createElement(_styles3.SavedPlaces, null, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isSeletectedUserAddresses: true,
    userId: (_userState$user9 = userState.user) === null || _userState$user9 === void 0 ? void 0 : _userState$user9.id,
    addresses: (_userState$user10 = userState.user) === null || _userState$user10 === void 0 ? void 0 : _userState$user10.addresses,
    setExtraOpen: setExtraOpen,
    userState: userState,
    handleSuccessUpdate: handleSuccessUserUpdate
  }))), currentMenuSelected === 'schedule' && /*#__PURE__*/_react.default.createElement(_styles3.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_styles3.DriverScheduleWraper, null, /*#__PURE__*/_react.default.createElement(_styles3.DriverSchedule, null, t('DRIVER_SCHEDULES', 'Driver schedules')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isDriverSchedule,
    onChange: function onChange(enabled) {
      return setIsDriverSchedule(enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Schedule, {
    scheduleList: userState === null || userState === void 0 ? void 0 : (_userState$user11 = userState.user) === null || _userState$user11 === void 0 ? void 0 : _userState$user11.schedule,
    handleChangeScheduleState: handleScheduleState
  }), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    id: "form-btn",
    color: "primary",
    borderRadius: "5px",
    disabled: scheduleState.loading || (scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$change = scheduleState.change) === null || _scheduleState$change === void 0 ? void 0 : _scheduleState$change.length) === 0,
    style: {
      marginTop: 20
    },
    onClick: function onClick() {
      return handleScheduleUpdateUser();
    }
  }, scheduleState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')))), currentMenuSelected === 'orders' && /*#__PURE__*/_react.default.createElement(_Orders.OrdersManager, {
    isSelectedOrders: true,
    customerId: (_userState$user12 = userState.user) === null || _userState$user12 === void 0 ? void 0 : _userState$user12.id,
    handleCustomOrderDetail: setExtraOpen
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
    userId: (_userState$user13 = userState.user) === null || _userState$user13 === void 0 ? void 0 : _userState$user13.id
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