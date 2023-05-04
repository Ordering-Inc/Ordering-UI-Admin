"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    for (var _i2 = 0; _i2 < 60; _i2++) {
      var _text = (_i2 < 10 ? '0' : '') + _i2;
      _minutes.push({
        text: _text,
        minute: _i2
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
      hour: business !== null && business !== void 0 && business.delivery_time ? (business === null || business === void 0 ? void 0 : (_business$delivery_ti = business.delivery_time) === null || _business$delivery_ti === void 0 ? void 0 : _business$delivery_ti.split(':')[0]) * 1 + '' : '0',
      minute: business !== null && business !== void 0 && business.delivery_time ? (business === null || business === void 0 ? void 0 : (_business$delivery_ti2 = business.delivery_time) === null || _business$delivery_ti2 === void 0 ? void 0 : _business$delivery_ti2.split(':')[1]) * 1 + '' : '0'
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
    defaultValue: (_business$order_defau = business === null || business === void 0 ? void 0 : (_business$order_defau2 = business.order_default_priority) === null || _business$order_defau2 === void 0 ? void 0 : _business$order_defau2.toString()) !== null && _business$order_defau !== void 0 ? _business$order_defau : '',
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
var BusinessDeliveryDetails = function BusinessDeliveryDetails(props) {
  var businessDeliveryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessDeliveryDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDeliveryDetails, businessDeliveryProps);
};
exports.BusinessDeliveryDetails = BusinessDeliveryDetails;