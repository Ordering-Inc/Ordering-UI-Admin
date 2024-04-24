"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BsArrowUp = _interopRequireDefault(require("@meronex/icons/bs/BsArrowUp"));
var _DriverCard = require("../DriverCard");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversModal = exports.DriversModal = function DriversModal(props) {
  var driversList = props.driversList,
    handleChangeDriverAvailable = props.handleChangeDriverAvailable,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    handleOpenOrderDetail = props.handleOpenOrderDetail;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('online'),
    _useState2 = _slicedToArray(_useState, 2),
    driverAvailable = _useState2[0],
    setDriverAvailable = _useState2[1];
  var handleDriverAvailable = function handleDriverAvailable() {
    if (driverAvailable === 'online') setDriverAvailable('offline');else setDriverAvailable('online');
  };
  (0, _react.useEffect)(function () {
    handleChangeDriverAvailable(driverAvailable);
  }, [driverAvailable]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !driversList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverAvailable, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: driverAvailable === 'online' ? 'darkBlue' : 'offline',
    onClick: function onClick() {
      return handleDriverAvailable();
    }
  }, /*#__PURE__*/_react.default.createElement(_BsArrowUp.default, null), driverAvailable === 'online' ? t('ONLINE', 'Online') : t('INACTIVE_DRIVERS', 'Offline'))), driversList.drivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: driver.id
    }, driverAvailable === 'online' ? driver.enabled && driver.available && !driver.busy && /*#__PURE__*/_react.default.createElement(_DriverCard.DriverCard, {
      driver: driver,
      driversList: driversList,
      handleSelectedOrderIds: handleSelectedOrderIds,
      handleOpenOrderDetail: handleOpenOrderDetail
    }) : !(driver.enabled && driver.available && !driver.busy) && /*#__PURE__*/_react.default.createElement(_DriverCard.DriverCard, {
      offline: true,
      driver: driver,
      driversList: driversList,
      handleSelectedOrderIds: handleSelectedOrderIds,
      handleOpenOrderDetail: handleOpenOrderDetail
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.WrapperSkeleton, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60,
      height: 60
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 20,
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 20,
      width: 80
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 10
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 10
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 30
    })))));
  })));
};