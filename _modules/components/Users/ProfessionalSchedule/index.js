"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalSchedule = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Schedule = require("./Schedule");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
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
var ProfessionalScheduleUI = function ProfessionalScheduleUI(props) {
  var _formState$changes$ma, _formState$changes;
  var formState = props.formState,
    user = props.user,
    handleChangeInput = props.handleChangeInput,
    handleChangeItem = props.handleChangeItem,
    handleUpdateClick = props.handleUpdateClick;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMaxDays = _useState2[0],
    setIsMaxDays = _useState2[1];
  var handleIndefinitelyClick = function handleIndefinitelyClick() {
    handleChangeItem({
      max_days_in_future: null
    });
    setIsMaxDays(false);
  };
  var handlClickFutureDay = function handlClickFutureDay(e) {
    if (e.target.closest('.max_days_in_future')) return;
    setIsMaxDays(true);
  };
  var onSubmit = function onSubmit() {
    handleUpdateClick && handleUpdateClick();
  };
  var changeSchedule = (0, _react.useCallback)(function (val) {
    return handleChangeItem({
      schedule: val
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (typeof (user === null || user === void 0 ? void 0 : user.max_days_in_future) === 'number') setIsMaxDays(true);
  }, [user]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.DateRangeWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DATE_RANGE', 'Date range')), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMERS_CAN_SCHEDULE', 'Customers can schedule...')), /*#__PURE__*/_react.default.createElement(_styles2.RangeItem, {
    onClick: handlClickFutureDay
  }, /*#__PURE__*/_react.default.createElement("span", null, isMaxDays ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "00",
    className: "max_days_in_future",
    name: "max_days_in_future",
    value: ((_formState$changes$ma = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.max_days_in_future) !== null && _formState$changes$ma !== void 0 ? _formState$changes$ma : user === null || user === void 0 ? void 0 : user.max_days_in_future) || '',
    onChange: handleChangeInput,
    disabled: !isMaxDays,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement("label", null, t('DAYS_INTO_THE_FUTURE', 'days into the future'))), /*#__PURE__*/_react.default.createElement(_styles2.RangeItem, {
    onClick: handleIndefinitelyClick
  }, /*#__PURE__*/_react.default.createElement("span", null, !isMaxDays ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)), /*#__PURE__*/_react.default.createElement("label", null, t('INDEFINITELY_INTO_THE_FUTURE', 'Indefinitely into the future')))), /*#__PURE__*/_react.default.createElement(_Schedule.Schedule, {
    key: user === null || user === void 0 ? void 0 : user.id,
    scheduleList: user === null || user === void 0 ? void 0 : user.schedule,
    handleChangeScheduleState: changeSchedule
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: (formState === null || formState === void 0 ? void 0 : formState.loading) || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: onSubmit
  }, t('SAVE', 'Save'))));
};
var ProfessionalSchedule = function ProfessionalSchedule(props) {
  var professionalScheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProfessionalScheduleUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProfessionalSchedule, professionalScheduleProps);
};
exports.ProfessionalSchedule = ProfessionalSchedule;