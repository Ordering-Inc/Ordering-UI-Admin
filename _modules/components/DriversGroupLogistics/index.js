"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupLogistics = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("../../styles");

var _SideBar = require("../SideBar");

var _Modal = require("../Modal");

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _DriversGroupOrders = require("../DriversGroupOrders");

var _DriversGroupAutoassign = require("../DriversGroupAutoassign");

var _DriversMarkAsBusy = require("../DriversMarkAsBusy");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupLogistics = function DriversGroupLogistics(props) {
  var _driversGroupState$dr, _driversGroupState$dr2, _driversGroupState$dr3, _driversGroupState$dr4, _driversGroupState$dr5, _driversGroupState$dr6, _driversGroupState$dr7;

  var driversGroupState = props.driversGroupState,
      changesState = props.changesState,
      handleChangesState = props.handleChangesState,
      handleParentSidebarMove = props.handleParentSidebarMove,
      handleUpdateDriversGroup = props.handleUpdateDriversGroup;

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

  var handleOpenConfig = function handleOpenConfig(option) {
    setShowConfig(option);
    setOpenConfig(true);

    if (width >= 1200) {
      handleParentSidebarMove(700);
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
  return /*#__PURE__*/_react.default.createElement(_styles2.LogisticsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusWrapper, {
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
  }, changesState !== null && changesState !== void 0 && changesState.orders_group_start_in_status && (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 4 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_start_in_status) === 'undefined' && ((_driversGroupState$dr5 = driversGroupState.driversGroup) === null || _driversGroupState$dr5 === void 0 ? void 0 : _driversGroupState$dr5.orders_group_start_in_status) === 4 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)), /*#__PURE__*/_react.default.createElement("span", null, t('READY_FOR_PICKUP', 'Ready for Pickup'))), /*#__PURE__*/_react.default.createElement(_styles2.LogisticsConfigsContainer, null, ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && ((_driversGroupState$dr6 = driversGroupState.driversGroup) === null || _driversGroupState$dr6 === void 0 ? void 0 : _driversGroupState$dr6.type) === 0) && /*#__PURE__*/_react.default.createElement(_styles2.LogisticsConfigItem, {
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
  }, t('SAVE', 'Save')), width >= 1200 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openConfig && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    isBorderShow: true,
    sidebarId: "logistic-details",
    defaultSideBarWidth: 700,
    open: openConfig,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, showConfig === 'GROUP_ORDERS' && /*#__PURE__*/_react.default.createElement(_DriversGroupOrders.DriversGroupOrders, props), showConfig === 'AUTOASSIGN_SETTINGS' && /*#__PURE__*/_react.default.createElement(_DriversGroupAutoassign.DriversGroupAutoassign, props), showConfig === 'MARK_DRIVER_BUSY' && /*#__PURE__*/_react.default.createElement(_DriversMarkAsBusy.DriversMarkAsBusy, props))) : /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    height: "70vh",
    open: openConfig,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, showConfig === 'GROUP_ORDERS' && /*#__PURE__*/_react.default.createElement(_DriversGroupOrders.DriversGroupOrders, props), showConfig === 'AUTOASSIGN_SETTINGS' && /*#__PURE__*/_react.default.createElement(_DriversGroupAutoassign.DriversGroupAutoassign, props), showConfig === 'MARK_DRIVER_BUSY' && /*#__PURE__*/_react.default.createElement(_DriversMarkAsBusy.DriversMarkAsBusy, props)));
};

exports.DriversGroupLogistics = DriversGroupLogistics;