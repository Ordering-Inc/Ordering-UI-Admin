"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStatusFilterBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _CgSpinnerTwoAlt = _interopRequireDefault(require("@meronex/icons/cg/CgSpinnerTwoAlt"));
var _reactRouterDom = require("react-router-dom");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderStatusFilterBar = /*#__PURE__*/(0, _react.memo)(function (props) {
  var _ordersAmountByStatus, _ordersAmountByStatus2, _ordersAmountByStatus3, _ordersAmountByStatus4;
  var isUseQuery = props.isUseQuery,
    selectedOrderStatus = props.selectedOrderStatus,
    changeOrderStatus = props.changeOrderStatus,
    ordersAmountByStatus = props.ordersAmountByStatus;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultStatus = query.get('status');
  var changeSelectedOrderStatus = function changeSelectedOrderStatus(orderStatus) {
    window.scrollTo(0, 0);
    changeOrderStatus(orderStatus);
    if (isUseQuery) {
      (0, _utils.addQueryToUrl)({
        status: orderStatus
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (!isUseQuery) return;
    if (defaultStatus) {
      changeOrderStatus(defaultStatus);
      return;
    }
    (0, _utils.addQueryToUrl)({
      status: 'pending'
    });
  }, []);
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
});
exports.OrderStatusFilterBar = OrderStatusFilterBar;