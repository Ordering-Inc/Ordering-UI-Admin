"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversDashboard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DriversLocation = require("../DriversLocation");

var _DriversList = require("../DriversList");

var _DriversOnlineOfflineFilter = require("../DriversOnlineOfflineFilter");

var _DriversBusyStatusFilter = require("../DriversBusyStatusFilter");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DriversDashboard = function DriversDashboard(props) {
  var driversList = props.driversList,
      onlineDrivers = props.onlineDrivers,
      offlineDrivers = props.offlineDrivers,
      driversIsOnline = props.driversIsOnline,
      driversSubfilter = props.driversSubfilter,
      selectedDriver = props.selectedDriver,
      handleChangeDriver = props.handleChangeDriver,
      handleChangeDriverIsOnline = props.handleChangeDriverIsOnline,
      handleChangeDriversSubFilter = props.handleChangeDriversSubFilter,
      handleOpenDriverOrders = props.handleOpenDriverOrders;
  return /*#__PURE__*/_react.default.createElement(_styles.DriversDashboardContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_DriversOnlineOfflineFilter.DriversOnlineOfflineFilter, {
    driversIsOnline: driversIsOnline,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline
  }), /*#__PURE__*/_react.default.createElement(_DriversBusyStatusFilter.DriversBusyStatusFilter, {
    driversSubfilter: driversSubfilter,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversList, {
    id: "driversList"
  }, /*#__PURE__*/_react.default.createElement(_DriversList.DriversList, {
    loading: driversList.loading,
    driversIsOnline: driversIsOnline,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    selectedDriver: selectedDriver,
    handleChangeDriver: handleChangeDriver,
    handleOpenDriverOrders: handleOpenDriverOrders
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversLocation, null, /*#__PURE__*/_react.default.createElement(_DriversLocation.DriversLocation, {
    driversIsOnline: driversIsOnline,
    selectedDriver: selectedDriver,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    driversList: driversList
  })));
};

exports.DriversDashboard = DriversDashboard;