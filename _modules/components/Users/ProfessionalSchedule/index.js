"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
    value: ((_formState$changes$ma = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.max_days_in_future) !== null && _formState$changes$ma !== void 0 ? _formState$changes$ma : user === null || user === void 0 ? void 0 : user.max_days_in_future) || '',
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
var ProfessionalSchedule = exports.ProfessionalSchedule = function ProfessionalSchedule(props) {
  var professionalScheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProfessionalScheduleUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProfessionalSchedule, professionalScheduleProps);
};