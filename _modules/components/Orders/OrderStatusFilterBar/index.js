"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStatusFilterBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _CgSpinnerTwoAlt = _interopRequireDefault(require("@meronex/icons/cg/CgSpinnerTwoAlt"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderStatusFilterBar = function OrderStatusFilterBar(props) {
  var _ordersAmountByStatus, _ordersAmountByStatus2, _ordersAmountByStatus3, _ordersAmountByStatus4;
  var selectedOrderStatus = props.selectedOrderStatus,
    changeOrderStatus = props.changeOrderStatus,
    ordersAmountByStatus = props.ordersAmountByStatus;
  var changeSelectedOrderStatus = function changeSelectedOrderStatus(orderStatus) {
    window.scrollTo(0, 0);
    changeOrderStatus(orderStatus);
  };
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterContainer, {
    className: "order_status_filter"
  }, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedOrderStatus === 'pending',
    onClick: function onClick() {
      return changeSelectedOrderStatus('pending');
    }
  }, t('PENDING', 'pending'), /*#__PURE__*/_react.default.createElement("span", null, "(", !isNaN(ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.pending) && (ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.pending) !== null ? (_ordersAmountByStatus = ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.pending) !== null && _ordersAmountByStatus !== void 0 ? _ordersAmountByStatus : 0 : /*#__PURE__*/_react.default.createElement(_CgSpinnerTwoAlt.default, null), ")")), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedOrderStatus === 'inProgress',
    onClick: function onClick() {
      return changeSelectedOrderStatus('inProgress');
    }
  }, t('IN_PROGRESS', 'in progress'), /*#__PURE__*/_react.default.createElement("span", null, "(", !isNaN(ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.inProgress) && (ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.inProgress) !== null ? (_ordersAmountByStatus2 = ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.inProgress) !== null && _ordersAmountByStatus2 !== void 0 ? _ordersAmountByStatus2 : 0 : /*#__PURE__*/_react.default.createElement(_CgSpinnerTwoAlt.default, null), ")")), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedOrderStatus === 'completed',
    onClick: function onClick() {
      return changeSelectedOrderStatus('completed');
    }
  }, t('COMPLETED', 'completed'), /*#__PURE__*/_react.default.createElement("span", null, "(", !isNaN(ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.completed) && (ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.completed) !== null ? (_ordersAmountByStatus3 = ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.completed) !== null && _ordersAmountByStatus3 !== void 0 ? _ordersAmountByStatus3 : 0 : /*#__PURE__*/_react.default.createElement(_CgSpinnerTwoAlt.default, null), ")")), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedOrderStatus === 'cancelled',
    onClick: function onClick() {
      return changeSelectedOrderStatus('cancelled');
    }
  }, t('CANCELLED', 'cancelled'), /*#__PURE__*/_react.default.createElement("span", null, "(", !isNaN(ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.cancelled) && (ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.cancelled) !== null ? (_ordersAmountByStatus4 = ordersAmountByStatus === null || ordersAmountByStatus === void 0 ? void 0 : ordersAmountByStatus.cancelled) !== null && _ordersAmountByStatus4 !== void 0 ? _ordersAmountByStatus4 : 0 : /*#__PURE__*/_react.default.createElement(_CgSpinnerTwoAlt.default, null), ")")))));
};
exports.OrderStatusFilterBar = OrderStatusFilterBar;