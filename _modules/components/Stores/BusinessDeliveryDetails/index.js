"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BusinessDeliveryZoneList = require("../BusinessDeliveryZoneList");
var _Select = require("../../../styles/Select");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessDeliveryDetailsUI = function BusinessDeliveryDetailsUI(props) {
  var _business$cancel_orde, _business$order_defau, _business$order_defau2;
  var business = props.business,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    formState = props.formState,
    handleChangeForm = props.handleChangeForm,
    onDeliveryStateSave = props.onDeliveryStateSave,
    actionState = props.actionState,
    zoneListState = props.zoneListState,
    handleChangeZoneState = props.handleChangeZoneState,
    handleChangeAllZoneState = props.handleChangeAllZoneState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    hours = _useState2[0],
    setHours = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    minutes = _useState4[0],
    setMinutes = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    curDeliveryTime = _useState6[0],
    setCurDeliveryTime = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var priorityList = [{
    value: '2',
    content: t('URGENT', 'Urgent')
  }, {
    value: '1',
    content: t('HIGH', 'High')
  }, {
    value: '0',
    content: t('NORMAL', 'Normal')
  }, {
    value: '-1',
    content: t('LOW', 'Low')
  }];
  var setTimeList = function setTimeList() {
    var _hours = [];
    var _minutes = [];
    for (var i = 0; i < 24; i++) {
      var text = (i < 10 ? '0' : ' ') + i;
      _hours.push({
        text: text,
        hour: i
      });
    }
    for (var _i = 0; _i < 60; _i++) {
      var _text = (_i < 10 ? '0' : '') + _i;
      _minutes.push({
        text: _text,
        minute: _i
      });
    }
    setHours(_hours);
    setMinutes(_minutes);
  };
  var handleChangeDeliveryTime = function handleChangeDeliveryTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurDeliveryTime(_objectSpread(_objectSpread({}, curDeliveryTime), {}, _defineProperty({}, type, value)));
    var deliveryTime = '';
    if (type === 'hour') deliveryTime = value + ':' + (curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.minute);else deliveryTime = (curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.hour) + ':' + value;
    handleChangeForm({
      delivery_time: deliveryTime
    });
  };
  (0, _react.useEffect)(function () {
    var _business$delivery_ti, _business$delivery_ti2;
    setTimeList();
    setCurDeliveryTime({
      hour: business !== null && business !== void 0 && business.delivery_time ? (business === null || business === void 0 || (_business$delivery_ti = business.delivery_time) === null || _business$delivery_ti === void 0 ? void 0 : _business$delivery_ti.split(':')[0]) * 1 + '' : '0',
      minute: business !== null && business !== void 0 && business.delivery_time ? (business === null || business === void 0 || (_business$delivery_ti2 = business.delivery_time) === null || _business$delivery_ti2 === void 0 ? void 0 : _business$delivery_ti2.split(':')[1]) * 1 + '' : '0'
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('PREORDER_STEP_2_TIME', 'Order time')), /*#__PURE__*/_react.default.createElement(_styles2.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('DELIVERY_TIME', 'Delivery time')), /*#__PURE__*/_react.default.createElement(_styles2.TimeBlock, null, /*#__PURE__*/_react.default.createElement("select", {
    value: curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.hour,
    name: "hour",
    onChange: handleChangeDeliveryTime
  }, hours === null || hours === void 0 ? void 0 : hours.map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: hour.hour,
      key: i
    }, hour.text);
  })), ":", /*#__PURE__*/_react.default.createElement("select", {
    value: curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.minute,
    name: "minute",
    onChange: handleChangeDeliveryTime
  }, minutes === null || minutes === void 0 ? void 0 : minutes.map(function (minute, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: minute.minute,
      key: i
    }, minute.text);
  })))), /*#__PURE__*/_react.default.createElement(_BusinessDeliveryZoneList.BusinessDeliveryZoneList, {
    business: business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    onClose: function onClose() {
      return setIsExtendExtraOpen(false);
    },
    handleSuccessUpdate: handleUpdateBusinessState,
    zoneListState: zoneListState,
    handleChangeZoneState: handleChangeZoneState,
    handleChangeAllZoneState: handleChangeAllZoneState
  }), /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement(_styles2.AdvancedLogisticsSettingsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXPIRE_ORDER_AFTER_MINUTES', 'Expire order after minutes')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "cancel_order_after_minutes",
    defaultValue: (_business$cancel_orde = business === null || business === void 0 ? void 0 : business.cancel_order_after_minutes) !== null && _business$cancel_orde !== void 0 ? _business$cancel_orde : '',
    placeholder: t('EXPIRE_ORDER_AFTER_MINUTES', 'Expire order after minutes'),
    onChange: function onChange(e) {
      return handleChangeForm({
        cancel_order_after_minutes: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('ORDER_DEFAULT_PRIORITY', 'Order default priority')), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    isSecondIcon: true,
    notAsync: true,
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    defaultValue: (_business$order_defau = business === null || business === void 0 || (_business$order_defau2 = business.order_default_priority) === null || _business$order_defau2 === void 0 ? void 0 : _business$order_defau2.toString()) !== null && _business$order_defau !== void 0 ? _business$order_defau : '',
    options: priorityList,
    onChange: function onChange(val) {
      return handleChangeForm({
        order_default_priority: val
      });
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: actionState.loading || Object.keys(formState.changes).length === 0 && !zoneListState.isDirty,
    onClick: function onClick() {
      return onDeliveryStateSave();
    }
  }, t('SAVE', 'Save')), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var BusinessDeliveryDetails = exports.BusinessDeliveryDetails = function BusinessDeliveryDetails(props) {
  var businessDeliveryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessDeliveryDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDeliveryDetails, businessDeliveryProps);
};