"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetailsUI = exports.UserDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Orders = require("../../Orders");

var _AddressList = require("../AddressList");

var _Shared = require("../../Shared");

var _UserDetailsMenu = require("../UserDetailsMenu");

var _UserProfileForm = require("../UserProfileForm");

var _Users = require("../../Users");

var _DriverGroupSetting = require("../DriverGroupSetting");

var _styles = require("./styles");

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
  var _userState$user, _userState$user2, _userState$user3, _userState$user4, _userState$user5, _userState$user6, _userState$user7, _userState$user8;

  var isDriversPage = props.isDriversPage,
      isDriversManagersPage = props.isDriversManagersPage,
      userState = props.userState,
      setExtraOpen = props.setExtraOpen,
      handleSuccessUserUpdate = props.handleSuccessUserUpdate;

  var _useState = (0, _react.useState)('profile'),
      _useState2 = _slicedToArray(_useState, 2),
      currentMenuSelected = _useState2[0],
      setCurrentMenuSelected = _useState2[1];

  (0, _react.useEffect)(function () {
    setExtraOpen(false);
  }, [currentMenuSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UserName, null, userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  }) : /*#__PURE__*/_react.default.createElement("span", null, userState === null || userState === void 0 ? void 0 : (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.name, " ", userState === null || userState === void 0 ? void 0 : (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.lastname)), /*#__PURE__*/_react.default.createElement(_UserDetailsMenu.UserDetailsMenu, {
    isDriverMenu: isDriversPage,
    currentMenuSelected: currentMenuSelected,
    handleChangeMenu: setCurrentMenuSelected
  }), !(userState !== null && userState !== void 0 && userState.loading) && (userState === null || userState === void 0 ? void 0 : userState.user) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentMenuSelected === 'profile' && /*#__PURE__*/_react.default.createElement(_UserProfileForm.UserProfileForm, {
    isDriversPage: isDriversPage,
    isDriversManagersPage: isDriversManagersPage,
    user: userState.user,
    handleSuccessUpdate: handleSuccessUserUpdate
  }), currentMenuSelected === 'driver_group' && /*#__PURE__*/_react.default.createElement(_DriverGroupSetting.DriverGroupSetting, {
    userId: userState === null || userState === void 0 ? void 0 : (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.id
  }), currentMenuSelected === 'saved_places' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (userState === null || userState === void 0 ? void 0 : (_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.addresses) && /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isSeletectedUserAddresses: true,
    userId: (_userState$user5 = userState.user) === null || _userState$user5 === void 0 ? void 0 : _userState$user5.id,
    addresses: (_userState$user6 = userState.user) === null || _userState$user6 === void 0 ? void 0 : _userState$user6.addresses,
    setExtraOpen: setExtraOpen,
    userState: userState,
    handleSuccessUpdate: handleSuccessUserUpdate
  }))), currentMenuSelected === 'orders' && /*#__PURE__*/_react.default.createElement(_Orders.OrdersManager, {
    isSelectedOrders: true,
    customerId: (_userState$user7 = userState.user) === null || _userState$user7 === void 0 ? void 0 : _userState$user7.id,
    handleCustomOrderDetail: setExtraOpen
  }), currentMenuSelected === 'metafields' && /*#__PURE__*/_react.default.createElement(_Users.UserMetaFields, {
    userId: (_userState$user8 = userState.user) === null || _userState$user8 === void 0 ? void 0 : _userState$user8.id
  }), currentMenuSelected === 'personalization' && /*#__PURE__*/_react.default.createElement(_styles.PersonalizationWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.Personalization, null))));
};

exports.UserDetailsUI = UserDetailsUI;

var UserDetails = function UserDetails(props) {
  var userDetailsControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserDetails, userDetailsControlProps));
};

exports.UserDetails = UserDetails;