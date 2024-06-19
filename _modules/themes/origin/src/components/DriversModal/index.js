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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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