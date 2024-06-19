"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrdersLateralBar = require("../../OrdersLateralBar");
var _GoogleMapsApiKeySettingButton = require("../../GoogleMapsApiKeySettingButton");
var _DriversOnlineOfflineFilter = require("../../DriversOnlineOfflineFilter");
var _DriversBusyStatusFilter = require("../../DriversBusyStatusFilter");
var _DriversList = require("../../DriversList");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriversManagerUI = function DriversManagerUI(props) {
  var _configState$configs;
  var driversIsOnline = props.driversIsOnline,
    driversList = props.driversList,
    handleChangeDriverIsOnline = props.handleChangeDriverIsOnline,
    driversSubfilter = props.driversSubfilter,
    handleChangeDriversSubFilter = props.handleChangeDriversSubFilter,
    onlineDrivers = props.onlineDrivers,
    offlineDrivers = props.offlineDrivers,
    setMapsData = props.setMapsData,
    selectedDriver = props.selectedDriver,
    setSelectedDriver = props.setSelectedDriver,
    assignedOrders = props.assignedOrders,
    handleUpdateAssignedOrders = props.handleUpdateAssignedOrders,
    showCompressedInfo = props.showCompressedInfo,
    handleEmtpyOrderSelected = props.handleEmtpyOrderSelected;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var numberOfonlineDrivers = onlineDrivers.length;
  var numberOfofflineDrivers = offlineDrivers.length;
  var numberOfbusyDrivers = driversIsOnline ? onlineDrivers.filter(function (ele) {
    return ele.busy;
  }).length : offlineDrivers.filter(function (ele) {
    return ele.busy;
  }).length;
  var numberOfnotBusyDrivers = driversIsOnline ? onlineDrivers.filter(function (ele) {
    return !ele.busy;
  }).length : offlineDrivers.filter(function (ele) {
    return !ele.busy;
  }).length;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenDriverOrders = _useState2[0],
    setIsOpenDriverOrders = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    openDriver = _useState4[0],
    setOpenDriver = _useState4[1];
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenDriverOrders(false);
  };
  var handleChangeDriver = function handleChangeDriver(driver) {
    handleEmtpyOrderSelected && handleEmtpyOrderSelected();
    if ((selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id) === driver.id) {
      setSelectedDriver(null);
    } else {
      setSelectedDriver(driver);
    }
  };
  var handleOpenDriverOrders = function handleOpenDriverOrders(driver) {
    setOpenDriver(driver);
    setIsOpenDriverOrders(true);
  };
  (0, _react.useEffect)(function () {
    setSelectedDriver(null);
  }, [driversIsOnline]);
  (0, _react.useEffect)(function () {
    setMapsData({
      driversIsOnline: driversIsOnline,
      onlineDrivers: onlineDrivers,
      offlineDrivers: offlineDrivers,
      selectedDriver: selectedDriver
    });
  }, [driversIsOnline, selectedDriver, onlineDrivers, offlineDrivers]);
  (0, _react.useEffect)(function () {
    handleUpdateAssignedOrders && handleUpdateAssignedOrders(assignedOrders);
  }, [assignedOrders]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DriversHeader, null, !googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_GoogleMapsApiKeySettingButton.GoogleMapsApiKeySettingButton, null)), /*#__PURE__*/_react.default.createElement(_styles.DriversContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverListContainer, {
    showCompressedInfo: showCompressedInfo
  }, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_DriversOnlineOfflineFilter.DriversOnlineOfflineFilter, {
    driversIsOnline: driversIsOnline,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline,
    numberOfonlineDrivers: numberOfonlineDrivers,
    numberOfofflineDrivers: numberOfofflineDrivers,
    showCompressedInfo: showCompressedInfo
  }), /*#__PURE__*/_react.default.createElement(_DriversBusyStatusFilter.DriversBusyStatusFilter, {
    driversSubfilter: driversSubfilter,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter,
    numberOfbusyDrivers: numberOfbusyDrivers,
    numberOfnotBusyDrivers: numberOfnotBusyDrivers,
    showCompressedInfo: showCompressedInfo
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversList, null, /*#__PURE__*/_react.default.createElement(_DriversList.DriversList, {
    hidePhoto: true,
    loading: driversList.loading,
    driversIsOnline: driversIsOnline,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    selectedDriver: selectedDriver,
    handleChangeDriver: handleChangeDriver,
    handleOpenDriverOrders: handleOpenDriverOrders,
    showCompressedInfo: showCompressedInfo
  })))), isOpenDriverOrders && openDriver && /*#__PURE__*/_react.default.createElement(_OrdersLateralBar.OrdersLateralBar, {
    isDriver: true,
    open: isOpenDriverOrders,
    user: openDriver,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  })));
};
var DriversManager = exports.DriversManager = function DriversManager(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification'],
    UIComponent: DriversManagerUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversList, DriversControlProps));
};