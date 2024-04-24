"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversMarkAsBusy = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversMarkAsBusy = exports.DriversMarkAsBusy = function DriversMarkAsBusy(props) {
  var _ref, _changesState$autoass, _ref2, _changesState$autoass2, _ref3, _changesState$autoass3, _ref4, _changesState$autoass4, _ref5, _changesState$autoass5, _ref6, _changesState$autoass6, _ref7, _changesState$autoass7, _ref8, _changesState$autoass8, _ref9, _changesState$autoass9;
  var curDriversGroup = props.curDriversGroup,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowAdvancedOption = _useState2[0],
    setIsShowAdvancedOption = _useState2[1];
  var handleChangeInput = function handleChangeInput(e) {
    var value = e.target.value;
    var changeValue = value === '' ? 0 : parseInt(value);
    var regExp = /^[0-9\b]+$/;
    if (changeValue === '' || regExp.test(changeValue)) {
      handleChangesState(_defineProperty({}, e.target.name, changeValue));
    }
  };
  (0, _react.useEffect)(function () {
    if (typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_pending) !== 'undefined' || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_accepted_by_business) !== 'undefined' || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_ready_for_pickup) !== 'undefined' || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_accepted_by_driver) !== 'undefined' || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_driver_in_business) !== 'undefined' || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_pickup_completed) !== 'undefined' || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_driver_almost_arrived_to_customer) !== 'undefined' || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_driver_on_way) !== 'undefined') {
      setIsShowAdvancedOption(true);
    }
  }, [changesState]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MARK_DRIVER_BUSY', 'Mark Drivers As Busy')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_AMOUNT_ORDERS_PER_DRIVER', 'Maximum amount of orders per drivers')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_orders",
    value: (_ref = (_changesState$autoass = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_orders) !== null && _changesState$autoass !== void 0 ? _changesState$autoass : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_orders) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: isShowAdvancedOption,
    onChange: function onChange(e) {
      return setIsShowAdvancedOption(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('ADVANCED_OPTION', 'Advanced Options')), /*#__PURE__*/_react.default.createElement("p", null, t('LIMITED_MAX_PER_ORDER_AMOUNT', 'Limited maximum per orders amount status')))), isShowAdvancedOption && /*#__PURE__*/_react.default.createElement(_styles2.AdvancedOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DotLine, null), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "1"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_STATUS_PENDING', 'Pending')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_pending",
    value: (_ref2 = (_changesState$autoass2 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_pending) !== null && _changesState$autoass2 !== void 0 ? _changesState$autoass2 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_pending) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status0
  })), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "2"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_STATUS_ACCEPTEDBYRESTAURANT', 'Accepted by Business')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_accepted_by_business",
    value: (_ref3 = (_changesState$autoass3 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_accepted_by_business) !== null && _changesState$autoass3 !== void 0 ? _changesState$autoass3 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_accepted_by_business) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status7
  })), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "3"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_READY', 'Ready for pickup')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_ready_for_pickup",
    value: (_ref4 = (_changesState$autoass4 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_ready_for_pickup) !== null && _changesState$autoass4 !== void 0 ? _changesState$autoass4 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_ready_for_pickup) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status4
  })), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "4"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_accepted_by_driver",
    value: (_ref5 = (_changesState$autoass5 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_accepted_by_driver) !== null && _changesState$autoass5 !== void 0 ? _changesState$autoass5 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_accepted_by_driver) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status8
  })), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "5"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_driver_in_business",
    value: (_ref6 = (_changesState$autoass6 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_driver_in_business) !== null && _changesState$autoass6 !== void 0 ? _changesState$autoass6 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_driver_in_business) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status3
  })), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "6"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_DRIVER_ON_WAY', 'Driver on way')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_driver_on_way",
    value: (_ref7 = (_changesState$autoass7 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_driver_on_way) !== null && _changesState$autoass7 !== void 0 ? _changesState$autoass7 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_driver_on_way) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status8
  })), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "7"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_driver_almost_arrived_to_customer",
    value: (_ref8 = (_changesState$autoass8 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_driver_almost_arrived_to_customer) !== null && _changesState$autoass8 !== void 0 ? _changesState$autoass8 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_driver_almost_arrived_to_customer) !== null && _ref8 !== void 0 ? _ref8 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status19
  })), /*#__PURE__*/_react.default.createElement(_styles2.StepItem, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "number"
  }, "8"), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_PICKUP_COMPLETED_BY_DRIVER', 'Pickup Completed By Driver')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_in_pickup_completed",
    value: (_ref9 = (_changesState$autoass9 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_in_pickup_completed) !== null && _changesState$autoass9 !== void 0 ? _changesState$autoass9 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_in_pickup_completed) !== null && _ref9 !== void 0 ? _ref9 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.order.status9
  }))));
};