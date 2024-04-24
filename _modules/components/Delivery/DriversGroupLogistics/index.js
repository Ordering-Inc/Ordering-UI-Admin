"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupLogistics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _DriversGroupOrders = require("../DriversGroupOrders");
var _DriversGroupAutoassign = require("../DriversGroupAutoassign");
var _DriversMarkAsBusy = require("../DriversMarkAsBusy");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupLogistics = exports.DriversGroupLogistics = function DriversGroupLogistics(props) {
  var _driversGroupState$dr, _driversGroupState$dr2, _driversGroupState$dr3, _driversGroupState$dr4, _driversGroupState$dr5, _driversGroupState$dr6, _driversGroupState$dr7;
  var driversGroupState = props.driversGroupState,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState,
    handleParentSidebarMove = props.handleParentSidebarMove,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    actionDisabled = props.actionDisabled;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showConfig = _useState2[0],
    setShowConfig = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openConfig = _useState4[0],
    setOpenConfig = _useState4[1];
  var handleOpenConfig = function handleOpenConfig(option, isInitialRender) {
    setShowConfig(option);
    setOpenConfig(true);
    if (width >= 1200) {
      handleParentSidebarMove(700);
    }
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        config: option
      });
    }
  };
  var handleCloseSidebar = function handleCloseSidebar() {
    handleParentSidebarMove(0);
    setShowConfig(null);
    setOpenConfig(false);
  };
  (0, _react.useEffect)(function () {
    if (width < 1200) {
      handleParentSidebarMove(0);
    } else {
      if (openConfig) handleParentSidebarMove(700);
    }
  }, [width, openConfig]);
  (0, _react.useEffect)(function () {
    setOpenConfig(false);
  }, [(_driversGroupState$dr = driversGroupState.driversGroup) === null || _driversGroupState$dr === void 0 ? void 0 : _driversGroupState$dr.id]);
  (0, _react.useEffect)(function () {
    var config = query.get('config');
    if (config) {
      handleOpenConfig(config, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.LogisticsContainer, {
    disabled: actionDisabled
  }, /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusWrapper, {
    onClick: function onClick() {
      return handleChangesState({
        orders_group_start_in_status: 7
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.RadioButton, {
    active: (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 7 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr2 = driversGroupState.driversGroup) === null || _driversGroupState$dr2 === void 0 ? void 0 : _driversGroupState$dr2.orders_group_start_in_status) === 7
  }, changesState !== null && changesState !== void 0 && changesState.orders_group_start_in_status && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 7 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr3 = driversGroupState.driversGroup) === null || _driversGroupState$dr3 === void 0 ? void 0 : _driversGroupState$dr3.orders_group_start_in_status) === 7 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)), /*#__PURE__*/_react.default.createElement("span", null, t('ACCEPT_BY_BUSINESS', 'Accepted by Business.'))), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusWrapper, {
    onClick: function onClick() {
      return handleChangesState({
        orders_group_start_in_status: 4
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.RadioButton, {
    active: (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 4 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr4 = driversGroupState.driversGroup) === null || _driversGroupState$dr4 === void 0 ? void 0 : _driversGroupState$dr4.orders_group_start_in_status) === 4
  }, changesState !== null && changesState !== void 0 && changesState.orders_group_start_in_status && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 4 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr5 = driversGroupState.driversGroup) === null || _driversGroupState$dr5 === void 0 ? void 0 : _driversGroupState$dr5.orders_group_start_in_status) === 4 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)), /*#__PURE__*/_react.default.createElement("span", null, t('PREPARATION_COMPLETED', 'Preparation Completed'))), /*#__PURE__*/_react.default.createElement(_styles2.LogisticsConfigsContainer, null, ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && ((_driversGroupState$dr6 = driversGroupState.driversGroup) === null || _driversGroupState$dr6 === void 0 ? void 0 : _driversGroupState$dr6.type) === 0) && /*#__PURE__*/_react.default.createElement(_styles2.LogisticsConfigItem, {
    active: showConfig === 'GROUP_ORDERS',
    onClick: function onClick() {
      return handleOpenConfig('GROUP_ORDERS');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('GROUP_ORDERS', 'Group Orders')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)), /*#__PURE__*/_react.default.createElement(_styles2.LogisticsConfigItem, {
    active: showConfig === 'AUTOASSIGN_SETTINGS',
    onClick: function onClick() {
      return handleOpenConfig('AUTOASSIGN_SETTINGS');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('AUTOASSIGN_SETTINGS', 'Autoassign settings')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)), ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && ((_driversGroupState$dr7 = driversGroupState.driversGroup) === null || _driversGroupState$dr7 === void 0 ? void 0 : _driversGroupState$dr7.type) === 0) && /*#__PURE__*/_react.default.createElement(_styles2.LogisticsConfigItem, {
    active: showConfig === 'MARK_DRIVER_BUSY',
    onClick: function onClick() {
      return handleOpenConfig('MARK_DRIVER_BUSY');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('MARK_DRIVER_BUSY', 'Mark drivers as busy')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: Object.keys(changesState).length === 0,
    onClick: function onClick() {
      return handleUpdateDriversGroup(changesState);
    }
  }, t('SAVE', 'Save')), width >= 1200 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openConfig && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    sidebarId: "logistic-details",
    defaultSideBarWidth: 700,
    open: openConfig,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, showConfig === 'GROUP_ORDERS' && /*#__PURE__*/_react.default.createElement(_DriversGroupOrders.DriversGroupOrders, props), showConfig === 'AUTOASSIGN_SETTINGS' && /*#__PURE__*/_react.default.createElement(_DriversGroupAutoassign.DriversGroupAutoassign, props), showConfig === 'MARK_DRIVER_BUSY' && /*#__PURE__*/_react.default.createElement(_DriversMarkAsBusy.DriversMarkAsBusy, props))) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "70vh",
    open: openConfig,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, showConfig === 'GROUP_ORDERS' && /*#__PURE__*/_react.default.createElement(_DriversGroupOrders.DriversGroupOrders, props), showConfig === 'AUTOASSIGN_SETTINGS' && /*#__PURE__*/_react.default.createElement(_DriversGroupAutoassign.DriversGroupAutoassign, props), showConfig === 'MARK_DRIVER_BUSY' && /*#__PURE__*/_react.default.createElement(_DriversMarkAsBusy.DriversMarkAsBusy, props)));
};