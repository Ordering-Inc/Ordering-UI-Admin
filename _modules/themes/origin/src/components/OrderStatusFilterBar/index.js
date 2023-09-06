"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStatusFilterBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderStatusFilterBar = function OrderStatusFilterBar(props) {
  var _theme$images, _theme$images2, _theme$images3, _theme$images4;
  var selectedOrderStatus = props.selectedOrderStatus,
    changeOrderStatus = props.changeOrderStatus;
  var changeSelectedOrderStatus = function changeSelectedOrderStatus(orderStatus) {
    window.scrollTo(0, 0);
    changeOrderStatus(orderStatus);
  };
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterBarContainer, {
    className: "order-status-filterbar"
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterInner, null, /*#__PURE__*/_react.default.createElement(_styles.OrderStautsFilterItemContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterItem, {
    active: selectedOrderStatus === 'pending',
    onClick: function onClick() {
      return changeSelectedOrderStatus('pending');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.orderStatus) === null || _theme$images === void 0 ? void 0 : _theme$images.pending
  }), /*#__PURE__*/_react.default.createElement("span", null, t('PENDING', 'pending'))), /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterItem, {
    active: selectedOrderStatus === 'inProgress',
    onClick: function onClick() {
      return changeSelectedOrderStatus('inProgress');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.orderStatus) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.inProgress
  }), /*#__PURE__*/_react.default.createElement("span", null, t('IN_PROGRESS', 'in progress'))), /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterItem, {
    active: selectedOrderStatus === 'completed',
    onClick: function onClick() {
      return changeSelectedOrderStatus('completed');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.orderStatus) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.completed
  }), /*#__PURE__*/_react.default.createElement("span", null, t('COMPLETED', 'completed'))), /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterItem, {
    active: selectedOrderStatus === 'cancelled',
    onClick: function onClick() {
      return changeSelectedOrderStatus('cancelled');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.orderStatus) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.cancelled
  }), /*#__PURE__*/_react.default.createElement("span", null, t('CANCELLED', 'cancelled'))))));
};
exports.OrderStatusFilterBar = OrderStatusFilterBar;