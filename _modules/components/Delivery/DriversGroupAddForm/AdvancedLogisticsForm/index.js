"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedLogisticsForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _DriversGroupOrders = require("../../DriversGroupOrders");
var _DriversGroupAutoassign = require("../../DriversGroupAutoassign");
var _DriversMarkAsBusy = require("../../DriversMarkAsBusy");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AdvancedLogisticsForm = exports.AdvancedLogisticsForm = function AdvancedLogisticsForm(props) {
  var _driversGroupState$dr, _driversGroupState$dr2, _driversGroupState$dr3, _driversGroupState$dr4;
  var driversGroupState = props.driversGroupState,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    useAdvanced = _useState2[0],
    setUseAdvanced = _useState2[1];
  var handleLogistic = function handleLogistic(checked) {
    setUseAdvanced(checked);
    if (checked) return;
    var changes = {
      autoassign_amount_drivers: 0,
      orders_group_max_orders: 0
    };
    handleChangesState(changes);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.LogisticsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ADVANCED_LOGISTICS', 'Advanced logistics')), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: useAdvanced,
    onChange: function onChange(e) {
      return handleLogistic(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic')))), useAdvanced && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusWrapper, {
    onClick: function onClick() {
      return handleChangesState({
        orders_group_start_in_status: 7
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.RadioButton, {
    active: (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 7 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr = driversGroupState.driversGroup) === null || _driversGroupState$dr === void 0 ? void 0 : _driversGroupState$dr.orders_group_start_in_status) === 7
  }, changesState !== null && changesState !== void 0 && changesState.orders_group_start_in_status && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 7 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr2 = driversGroupState.driversGroup) === null || _driversGroupState$dr2 === void 0 ? void 0 : _driversGroupState$dr2.orders_group_start_in_status) === 7 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)), /*#__PURE__*/_react.default.createElement("span", null, t('ACCEPT_BY_BUSINESS', 'Accepted by Business.'))), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusWrapper, {
    onClick: function onClick() {
      return handleChangesState({
        orders_group_start_in_status: 4
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.RadioButton, {
    active: (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 4 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr3 = driversGroupState.driversGroup) === null || _driversGroupState$dr3 === void 0 ? void 0 : _driversGroupState$dr3.orders_group_start_in_status) === 4
  }, changesState !== null && changesState !== void 0 && changesState.orders_group_start_in_status && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 4 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr4 = driversGroupState.driversGroup) === null || _driversGroupState$dr4 === void 0 ? void 0 : _driversGroupState$dr4.orders_group_start_in_status) === 4 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)), /*#__PURE__*/_react.default.createElement("span", null, t('PREPARATION_COMPLETED', 'Preparation Completed'))), (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 && /*#__PURE__*/_react.default.createElement(_styles2.SubSectionContainer, null, /*#__PURE__*/_react.default.createElement(_DriversGroupOrders.DriversGroupOrders, props)), /*#__PURE__*/_react.default.createElement(_styles2.SubSectionContainer, null, /*#__PURE__*/_react.default.createElement(_DriversGroupAutoassign.DriversGroupAutoassign, props)), (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 && /*#__PURE__*/_react.default.createElement(_styles2.SubSectionContainer, null, /*#__PURE__*/_react.default.createElement(_DriversMarkAsBusy.DriversMarkAsBusy, props))));
};