"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logistics = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var LogisticsUI = function LogisticsUI(props) {
  var logisticList = props.logisticList;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    getTimeAgo = _useUtils2$.getTimeAgo,
    parseDistance = _useUtils2$.parseDistance;
  var getEventName = function getEventName(log) {
    var _log$data, _log$data2, _log$data3, _log$data4, _log$with_orders;
    switch (log.event) {
      case 'logistic_driver_found':
        return "Driver ".concat(log.driver.name, " found to the order at ").concat(parseDistance(((log === null || log === void 0 || (_log$data = log.data) === null || _log$data === void 0 ? void 0 : _log$data.distance) / 1000).toFixed(2)));
      case 'logistic_driver_found_group':
        return "Driver ".concat(log.driver.name, " found");
      case 'logistic_driver_not_found':
        return 'Drivers was not found.';
      case 'logistic_driver_not_found_group':
        return 'Drivers was not found to the group';
      case 'logistic_driver_found_in_coverage':
        return "Logistic: Driver ".concat(log.driver.name, " found to the order at ").concat(parseDistance(((log === null || log === void 0 || (_log$data2 = log.data) === null || _log$data2 === void 0 ? void 0 : _log$data2.distance) / 1000).toFixed(2)), " in ").concat(parseDistance((log.data.coverage / 1000).toFixed(2)), " of coverage.");
      case 'logistic_driver_found_in_coverage_group':
        return 'logistic driver found in coverage group';
      case 'logistic_driver_found_out_coverage':
        return "Driver ".concat(log.driver.name, " found to the order at ").concat(parseDistance(((log === null || log === void 0 || (_log$data3 = log.data) === null || _log$data3 === void 0 ? void 0 : _log$data3.distance) / 1000).toFixed(2)), " out of ").concat(parseDistance((log.data.coverage / 1000).toFixed(2)), " of coverage.");
      case 'logistic_driver_found_out_coverage_group':
        return 'logistic driver found out coverage group';
      case 'logistic_driver_autoaccepted':
        return "Order was auto-assigned and auto-accepted by driver ".concat(log.driver.name, " at ").concat(parseDistance(((log === null || log === void 0 || (_log$data4 = log.data) === null || _log$data4 === void 0 ? void 0 : _log$data4.distance) / 1000).toFixed(2)), ".");
      case 'logistic_driver_autoaccepted_group':
        return 'logisticdriver autoaccepted group';
      case 'logistic_request_autorejected':
        return "Request of the driver ".concat(log.driver.name, " was auto-rejected with order ").concat(log === null || log === void 0 || (_log$with_orders = log.with_orders) === null || _log$with_orders === void 0 ? void 0 : _log$with_orders.join(), " by process.");
      case 'logistic_request_autorejected_group':
        return 'logistic request autorejected group';
      case 'logistic_assign_request_accepted':
        return 'logistic assign request accepted';
      case 'logistic_assign_request_accepted_group':
        return 'logistic assign request accepted group';
      case 'logistic_assign_request_rejected':
        return 'logistic assign request rejected';
      case 'logistic_assign_request_rejected_group':
        return 'logistic assign request rejected group';
      case 'logistic_manual_driver_assignment':
        return 'logistic manual driver assignment';
      case 'logistic_manual_driver_unassignment':
        return 'LOG_LOGISTIC_MANUAL_DRIVER_UNASSIGNMENT';
      case 'logistic_driver_autoassigned_group':
        return 'logistic driver autoassigned group';
      case 'logistic_started':
        return 'Process started.';
      case 'logistic_finished':
        return 'Process finished.';
      case 'logistic_expired':
        return 'Logisitic expired';
      case 'logistic_resolved':
        return 'Logistic resolved.';
      case 'logistic_reset':
        return 'Logistic reset';
      case 'logistic_grouped':
        return "Order was grouped with order ".concat(log.data.with_orders.join());
      case 'logistic_cancelled':
        return 'Logistic cancelled';
      case 'logistic_not_grouped':
        return 'Order was not grouped.';
      case 'logistic_order_queued':
        return 'Order to queue.';
      case 'logistic_order_out_queue':
        return 'LOGISTIC_ORDER_OUT_QUEUE';
      default:
        return log.event;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonHitory, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 380,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 450,
      height: 50
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.WraaperLogs, null, logisticList.logs.map(function (log) {
    var _log$data5;
    return /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, {
      key: log.id
    }, getEventName(log), log.event === 'logistic_expired' && /*#__PURE__*/_react.default.createElement(_styles.Reason, null, "Reason: ", log === null || log === void 0 || (_log$data5 = log.data) === null || _log$data5 === void 0 ? void 0 : _log$data5.reason), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, getTimeAgo(log.updated_at)));
  })));
};
var Logistics = exports.Logistics = function Logistics(props) {
  var logisticsProps = _objectSpread(_objectSpread({}, props), {}, {
    orderId: props.orderId,
    UIComponent: LogisticsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Logistics, logisticsProps);
};