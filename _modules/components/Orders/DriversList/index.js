"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversList = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _utils = require("../../../utils");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("./styles");
var _Driver = require("./Driver");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var DriversList = exports.DriversList = function DriversList(props) {
  var loading = props.loading,
    driversIsOnline = props.driversIsOnline,
    onlineDrivers = props.onlineDrivers,
    offlineDrivers = props.offlineDrivers,
    selectedDriver = props.selectedDriver,
    handleChangeDriver = props.handleChangeDriver,
    handleOpenDriverOrders = props.handleOpenDriverOrders,
    hidePhoto = props.hidePhoto,
    showCompressedInfo = props.showCompressedInfo;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var handleClickDriver = function handleClickDriver(e, driver) {
    var isInvalid = e.target.closest('.driver-orders');
    if (isInvalid) return;
    handleChangeDriver(driver);
    var element = document.getElementById('driverDashboard');
    if (width < 993 && element) element.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  var onOpenDriverOrdersDetail = function onOpenDriverOrdersDetail(driver) {
    if ((selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id) !== driver.id) {
      handleChangeDriver(driver);
    }
    handleOpenDriverOrders(driver);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.DriversListContainer, {
    showCompressedInfo: showCompressedInfo
  }, loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.DriverCard, {
      key: i
    }, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (driversIsOnline ? onlineDrivers : offlineDrivers).map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_Driver.Driver, {
      key: driver === null || driver === void 0 ? void 0 : driver.id,
      driver: driver,
      handleClickDriver: handleClickDriver,
      selectedDriver: selectedDriver,
      hidePhoto: hidePhoto,
      onOpenDriverOrdersDetail: onOpenDriverOrdersDetail,
      getStarWidth: _utils.getStarWidth,
      showCompressedInfo: showCompressedInfo
    });
  })));
};