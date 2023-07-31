"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecoveryActionAddUI = exports.RecoveryActionAdd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactHookForm = require("react-hook-form");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactNumericInput = _interopRequireDefault(require("react-numeric-input"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _Select = require("../../../styles/Select");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var RecoveryActionAddUI = function RecoveryActionAddUI(props) {
  var _formState$changes$na, _formState$changes4, _formState$changes$de, _formState$changes5, _formState$changes$ti, _formState$changes6, _formState$changes$ch, _formState$changes7, _formState$changes8, _formState$changes$bo, _formState$changes9;
  var onClose = props.onClose,
    formState = props.formState,
    handleAddRecoveryAction = props.handleAddRecoveryAction,
    handleChangeInput = props.handleChangeInput,
    handleChangeItem = props.handleChangeItem,
    actionState = props.actionState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors,
    setValue = _useForm.setValue;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    hours = _useState4[0],
    setHours = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    minutes = _useState6[0],
    setMinutes = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    seconds = _useState8[0],
    setSeconds = _useState8[1];
  var _useState9 = (0, _react.useState)({
      hour: '0',
      minute: '0',
      second: '0'
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    curPreorderTime = _useState10[0],
    setCurPreorderTime = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    curDayTime = _useState12[0],
    setCurDayTime = _useState12[1];
  var _useState13 = (0, _react.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    isTime = _useState14[0],
    setIsTime = _useState14[1];
  var channelList = [{
    value: 'email',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('EMAIL', 'Email'))
  }, {
    value: 'sms',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SMS', 'SMS'))
  }, {
    value: 'notification',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('PUSH_NOTIFICATION', 'Push notification'))
  }];
  var setTimeList = function setTimeList() {
    var _hours = [];
    var _minutes = [];
    var _seconds = [];
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
      _seconds.push({
        text: _text,
        second: _i2
      });
    }
    setHours(_hours);
    setMinutes(_minutes);
    setSeconds(_seconds);
  };
  var handleChangePreorderTime = function handleChangePreorderTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurPreorderTime(_objectSpread(_objectSpread({}, curPreorderTime), {}, _defineProperty({}, type, value)));
    var preorderTime = 0;
    if (type === 'hour') preorderTime = parseInt(value) * 3600 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute) * 60 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.second);else if (type === 'minute') preorderTime = parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour) * 3600 + parseInt(value) * 60 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.second);else preorderTime = parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour) * 3600 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute) * 60 + parseInt(value);
    handleChangeItem({
      times: [preorderTime],
      launch_type: 'times'
    });
  };
  var handleChangeDay = function handleChangeDay(value) {
    setCurDayTime(value);
    handleChangeItem({
      times: [value * 24 * 3600],
      launch_type: 'times'
    });
  };
  var onSubmit = function onSubmit() {
    var _formState$changes, _formState$changes2, _formState$changes3;
    if (!((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && (_formState$changes = _formState$changes.times) !== null && _formState$changes !== void 0 && _formState$changes[0])) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('TIME', 'Time'))]
      });
      return;
    }
    if (!((_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.channel)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('CHANNEL', 'Channel'))]
      });
      return;
    }
    if (!((_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.body)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('MESSAGE', 'Message'))]
      });
      return;
    }
    handleAddRecoveryAction();
  };
  var handleSwitchTime = function handleSwitchTime() {
    var preorderTime;
    if (!isTime) {
      preorderTime = parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour) * 3600 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute) * 60 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.second);
    } else {
      preorderTime = curDayTime * 24 * 3600;
    }
    handleChangeItem({
      times: [preorderTime],
      launch_type: 'times'
    });
    setIsTime(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    setTimeList();
  }, []);
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error) || actionState.loading) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.RecoveryActionAddContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.CardContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('GENERAL', 'General')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    type: "text",
    placeholder: t('NAME', 'name'),
    value: (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : '',
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))
    }),
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    placeholder: t('WRITE_LITTLE_DESCRIPTION', 'Write a little description'),
    name: "description",
    rows: 3,
    value: (_formState$changes$de = formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.LastTimeWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, t('LAST_TIME_CART_WAS_OPENED', 'Last time the cart was opened')), /*#__PURE__*/_react.default.createElement(_styles2.TypeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ParentCheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return handleSwitchTime();
    }
  }, isTime ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "checked-icon"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('TIME', 'Time')))), isTime && /*#__PURE__*/_react.default.createElement(_styles2.TimeContent, null, /*#__PURE__*/_react.default.createElement(_styles2.TimeBlock, null, /*#__PURE__*/_react.default.createElement("select", {
    value: curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour,
    name: "hour",
    onChange: handleChangePreorderTime
  }, hours === null || hours === void 0 ? void 0 : hours.map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: hour.hour,
      key: i
    }, hour.text);
  })), /*#__PURE__*/_react.default.createElement("span", null, ":"), /*#__PURE__*/_react.default.createElement("select", {
    value: curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute,
    name: "minute",
    onChange: handleChangePreorderTime
  }, minutes === null || minutes === void 0 ? void 0 : minutes.map(function (minute, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: minute.minute,
      key: i
    }, minute.text);
  })), /*#__PURE__*/_react.default.createElement("span", null, ":"), /*#__PURE__*/_react.default.createElement("select", {
    value: curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.second,
    name: "second",
    onChange: handleChangePreorderTime
  }, seconds === null || seconds === void 0 ? void 0 : seconds.map(function (second, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: second.second,
      key: i
    }, second.text);
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.TypeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ParentCheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return handleSwitchTime();
    }
  }, !isTime ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "checked-icon"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('DAYS', 'Days')))), !isTime && /*#__PURE__*/_react.default.createElement(_styles2.DaysContent, null, /*#__PURE__*/_react.default.createElement(_reactNumericInput.default, {
    placeholder: "00",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: curDayTime || '',
    onChange: function onChange(value) {
      return handleChangeDay(value);
    },
    min: 0
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.CardContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('NOTIFICATIONS', 'Notifications')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE', 'Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "title",
    placeholder: t('TITLE', 'Title'),
    defaultValue: (_formState$changes$ti = formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.title) !== null && _formState$changes$ti !== void 0 ? _formState$changes$ti : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('TITLE', 'Title'))
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CHANNEL', 'Channel')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SELECT_CHANNEL', 'Select a channel')),
    defaultValue: (_formState$changes$ch = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.channel) !== null && _formState$changes$ch !== void 0 ? _formState$changes$ch : '',
    options: channelList,
    onChange: function onChange(val) {
      setValue('body', '');
      handleChangeItem({
        channel: val,
        body: ''
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MESSAGE', 'Message')), ((_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.channel) === 'email' ? /*#__PURE__*/_react.default.createElement(_Shared.HtmlEditor, {
    handleChangeBody: function handleChangeBody(val) {
      return handleChangeItem({
        body: val
      });
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "body",
    rows: 3,
    placeholder: t('WRITE_MESSAGE', 'Write a message'),
    defaultValue: (_formState$changes$bo = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.body) !== null && _formState$changes$bo !== void 0 ? _formState$changes$bo : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('MESSAGE', 'Message'))
    })
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundary",
    onClick: function onClick() {
      return onClose();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState.changes).length === 0 || formState.loading
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('RECOVERY_ACTIONS', 'Recovery actions'),
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
exports.RecoveryActionAddUI = RecoveryActionAddUI;
var RecoveryActionAdd = function RecoveryActionAdd(props) {
  var recoveryActionDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: RecoveryActionAddUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.RecoveryActionDetail, recoveryActionDetailProps);
};
exports.RecoveryActionAdd = RecoveryActionAdd;