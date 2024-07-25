"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _utils = require("../../../utils");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("./styles");
var _Driver = require("./Driver");
var _Shared = require("../../Shared");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
  var _useState = (0, _react.useState)({
      currentPage: 1,
      pageSize: 10,
      totalItems: null,
      totalPages: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    pagination = _useState2[0],
    setPagination = _useState2[1];
  var drivers = driversIsOnline ? onlineDrivers : offlineDrivers;
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
  var filterFunction = function filterFunction(_, index) {
    var validation = (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === 1 ? index < pagination.pageSize * pagination.currentPage : index >= pagination.pageSize * (pagination.currentPage - 1) && index < pagination.pageSize * pagination.currentPage;
    return validation;
  };
  var handleChangePage = function handleChangePage(page) {
    setPagination(function (pagintaion) {
      return _objectSpread(_objectSpread({}, pagination), {}, {
        currentPage: page
      });
    });
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil((((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) - 1) * (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) + 1) / pageSize);
    setPagination(function (pagination) {
      return _objectSpread(_objectSpread({}, pagination), {}, {
        currentPage: expectedPage,
        pageSize: pageSize,
        totalPages: Math.ceil((drivers === null || drivers === void 0 ? void 0 : drivers.length) / pageSize)
      });
    });
  };
  (0, _react.useEffect)(function () {
    if (drivers !== null && drivers !== void 0 && drivers.length) {
      setPagination(function (pagination) {
        return _objectSpread(_objectSpread({}, pagination), {}, {
          totalItems: drivers === null || drivers === void 0 ? void 0 : drivers.length,
          totalPages: Math.ceil((drivers === null || drivers === void 0 ? void 0 : drivers.length) / 10)
        });
      });
    }
  }, [drivers === null || drivers === void 0 ? void 0 : drivers.length]);
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
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, drivers.filter(filterFunction).map(function (driver) {
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
  })), (drivers === null || drivers === void 0 ? void 0 : drivers.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.PaginationWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.currentPage,
    totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: pagination === null || pagination === void 0 ? void 0 : pagination.pageSize
  })));
};