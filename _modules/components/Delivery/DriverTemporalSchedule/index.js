"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverTemporalSchedule = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var _moment = _interopRequireDefault(require("moment"));
var locales = _interopRequireWildcard(require("react-date-range/dist/locale"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _utils = require("../../../utils");
var _styles2 = require("../../../styles");
var _styles3 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriverTemporalSchedule = exports.DriverTemporalSchedule = function DriverTemporalSchedule(props) {
  var _state$language;
  var driverSchedule = props.driverSchedule,
    handleSelectDriverTemporary = props.handleSelectDriverTemporary,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    state = _useLanguage2[0],
    t = _useLanguage2[1];
  var datePickerRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(driverSchedule !== null && driverSchedule !== void 0 && driverSchedule.temporary_at ? _moment.default.utc(driverSchedule === null || driverSchedule === void 0 ? void 0 : driverSchedule.temporary_at).local().toDate() : new Date()),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var handleSelect = function handleSelect(date) {
    setSelectedDate(date);
    handleSelectDriverTemporary(driverSchedule === null || driverSchedule === void 0 ? void 0 : driverSchedule.id, true, (0, _moment.default)(date).utc().format('YYYY-MM-DD HH:mm:ss'));
  };
  var handleOnClick = function handleOnClick() {
    onClose();
  };
  (0, _react.useEffect)(function () {
    datePickerRef.current.setOpen(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles3.Container, null, /*#__PURE__*/_react.default.createElement(_styles3.DateContainer, null, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    ref: datePickerRef,
    locale: (0, _utils.getLocale)(state === null || state === void 0 || (_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.code, locales),
    selected: selectedDate,
    minDate: new Date(),
    onChange: handleSelect,
    onCalendarClose: onClose,
    showTimeSelect: true,
    timeFormat: "HH:mm",
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "MMMM d, yyyy HH:mm"
  })), /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    onClick: function onClick() {
      return handleOnClick();
    }
  }, t('SAVE', 'Save')));
};