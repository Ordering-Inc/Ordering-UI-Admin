"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardControls = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");
var _OrdersExportCSV = require("../OrdersExportCSV");
var _OrderDelete = require("../OrderDelete");
var _CreateCustomOrder = require("../CreateCustomOrder");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersDashboardControls = function OrdersDashboardControls(props) {
  var selectedOrderNumber = props.selectedOrderNumber,
    filterValues = props.filterValues,
    handleDeleteMultiOrders = props.handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
    handleOpenCustomOrderDetail = props.handleOpenCustomOrderDetail,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    ordersStatusGroup = props.ordersStatusGroup,
    selectedSubOrderStatus = props.selectedSubOrderStatus;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderDashboardControlsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContnet, null, /*#__PURE__*/_react.default.createElement(_CreateCustomOrder.CreateCustomOrder, {
    handleOpenCustomOrderDetail: handleOpenCustomOrderDetail,
    handleOpenOrderDetail: handleOpenOrderDetail
  }), /*#__PURE__*/_react.default.createElement(_OrdersExportCSV.OrdersExportCSV, {
    filterValues: filterValues,
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus
  }), selectedOrderNumber > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_OrderDelete.OrderDelete, {
    handleDeleteMultiOrders: handleDeleteMultiOrders
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusTypeSelector, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    orderControl: true,
    isFirstSelect: true,
    noPadding: true,
    mutiOrdersChange: true,
    noSelected: true,
    defaultValue: "default",
    type: "primary",
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus
  }))))));
};
exports.OrdersDashboardControls = OrdersDashboardControls;