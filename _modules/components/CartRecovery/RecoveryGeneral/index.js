"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecoveryGeneral = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactNumericInput = _interopRequireDefault(require("react-numeric-input"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import { AnalyticsCalendar } from '../../BusinessIntelligence/AnalyticsCalendar'

var RecoveryGeneral = function RecoveryGeneral(props) {
  var _ref, _formState$changes$na, _formState$changes, _recoveryActionState$7, _ref2, _formState$changes$de, _formState$changes2, _recoveryActionState$8;
  var isAddMode = props.isAddMode,
    formState = props.formState,
    recoveryActionState = props.recoveryActionState,
    handleAddRecoveryAction = props.handleAddRecoveryAction,
    handleUpdateClick = props.handleUpdateClick,
    handleChangeInput = props.handleChangeInput,
    handleChangeItem = props.handleChangeItem;
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
    curPreorderTime = _useState6[0],
    setCurPreorderTime = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    curDayTime = _useState8[0],
    setCurDayTime = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    isTime = _useState10[0],
    setIsTime = _useState10[1];
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
  var handleChangePreorderTime = function handleChangePreorderTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurPreorderTime(_objectSpread(_objectSpread({}, curPreorderTime), {}, _defineProperty({}, type, value)));
    var preorderTime = 0;
    if (type === 'hour') preorderTime = parseInt(value) * 60 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute);else preorderTime = parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour) * 60 + parseInt(value);
    handleChangeItem({
      times: [preorderTime],
      launch_type: 'times'
    });
  };
  var handleChangeDay = function handleChangeDay(value) {
    setCurDayTime(value);
    handleChangeItem({
      times: [value * 24 * 60],
      launch_type: 'times'
    });
  };
  var handleSubmitBtnClick = function handleSubmitBtnClick() {
    if (Object.keys(formState.changes).length > 0) {
      if (isAddMode) {
        handleAddRecoveryAction();
      } else {
        handleUpdateClick();
      }
    }
  };
  var handleSwitchTime = function handleSwitchTime() {
    setIsTime(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    var _recoveryActionState$, _recoveryActionState$2, _recoveryActionState$3, _recoveryActionState$4, _recoveryActionState$5, _recoveryActionState$6;
    setTimeList();
    setCurPreorderTime({
      hour: recoveryActionState !== null && recoveryActionState !== void 0 && (_recoveryActionState$ = recoveryActionState.action) !== null && _recoveryActionState$ !== void 0 && _recoveryActionState$.times ? parseInt((recoveryActionState === null || recoveryActionState === void 0 ? void 0 : (_recoveryActionState$2 = recoveryActionState.action) === null || _recoveryActionState$2 === void 0 ? void 0 : _recoveryActionState$2.times[0]) / 60) : '0',
      minute: recoveryActionState !== null && recoveryActionState !== void 0 && (_recoveryActionState$3 = recoveryActionState.action) !== null && _recoveryActionState$3 !== void 0 && _recoveryActionState$3.times ? (recoveryActionState === null || recoveryActionState === void 0 ? void 0 : (_recoveryActionState$4 = recoveryActionState.action) === null || _recoveryActionState$4 === void 0 ? void 0 : _recoveryActionState$4.times[0]) % 60 : '0'
    });
    if (!(recoveryActionState !== null && recoveryActionState !== void 0 && (_recoveryActionState$5 = recoveryActionState.action) !== null && _recoveryActionState$5 !== void 0 && _recoveryActionState$5.times)) return;
    if ((recoveryActionState === null || recoveryActionState === void 0 ? void 0 : (_recoveryActionState$6 = recoveryActionState.action) === null || _recoveryActionState$6 === void 0 ? void 0 : _recoveryActionState$6.times[0]) / 60 < 24) {
      setIsTime(true);
    } else {
      setIsTime(false);
      setCurDayTime(parseInt((recoveryActionState === null || recoveryActionState === void 0 ? void 0 : recoveryActionState.action.times[0]) / 60 / 24));
    }
  }, [recoveryActionState === null || recoveryActionState === void 0 ? void 0 : recoveryActionState.action]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    type: "text",
    placeholder: t('NAME', 'name'),
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : recoveryActionState === null || recoveryActionState === void 0 ? void 0 : (_recoveryActionState$7 = recoveryActionState.action) === null || _recoveryActionState$7 === void 0 ? void 0 : _recoveryActionState$7.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    placeholder: t('WRITE_LITTLE_DESCRIPTION', 'Write a little description'),
    name: "description",
    rows: 3,
    value: (_ref2 = (_formState$changes$de = formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : recoveryActionState === null || recoveryActionState === void 0 ? void 0 : (_recoveryActionState$8 = recoveryActionState.action) === null || _recoveryActionState$8 === void 0 ? void 0 : _recoveryActionState$8.description) !== null && _ref2 !== void 0 ? _ref2 : '',
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
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleSubmitBtnClick();
    },
    disabled: Object.keys(formState.changes).length === 0 || formState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save'))));
};
exports.RecoveryGeneral = RecoveryGeneral;