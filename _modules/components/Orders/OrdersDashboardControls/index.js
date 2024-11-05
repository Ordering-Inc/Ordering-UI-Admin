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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrdersDashboardControls = exports.OrdersDashboardControls = function OrdersDashboardControls(props) {
  var _configs$allow_driver;
  var selectedOrderNumber = props.selectedOrderNumber,
    filterValues = props.filterValues,
    handleDeleteMultiOrders = props.handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
    handleOpenCustomOrderDetail = props.handleOpenCustomOrderDetail,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    ordersStatusGroup = props.ordersStatusGroup,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    franchiseId = props.franchiseId;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderDashboardControlsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContnet, null, /*#__PURE__*/_react.default.createElement(_CreateCustomOrder.CreateCustomOrder, {
    handleOpenCustomOrderDetail: handleOpenCustomOrderDetail,
    handleOpenOrderDetail: handleOpenOrderDetail
  }), /*#__PURE__*/_react.default.createElement(_OrdersExportCSV.OrdersExportCSV, {
    filterValues: filterValues,
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    franchiseId: franchiseId
  }), selectedOrderNumber > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_OrderDelete.OrderDelete, {
    handleDeleteMultiOrders: handleDeleteMultiOrders
  }), ((user === null || user === void 0 ? void 0 : user.level) !== 5 || (configs === null || configs === void 0 || (_configs$allow_driver = configs.allow_driver_manager_batch_update_order_status) === null || _configs$allow_driver === void 0 ? void 0 : _configs$allow_driver.value) === '1') && /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusTypeSelector, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
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