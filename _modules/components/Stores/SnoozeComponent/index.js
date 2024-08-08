"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnoozeComponent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var _moment = _interopRequireDefault(require("moment"));
var locales = _interopRequireWildcard(require("react-date-range/dist/locale"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var SnoozeComponent = exports.SnoozeComponent = function SnoozeComponent(props) {
  var isAutomaticUpdate = props.isAutomaticUpdate,
    dataState = props.dataState,
    handleUpdate = props.handleUpdate,
    onClose = props.onClose,
    setFormState = props.setFormState,
    handleChangeFormState = props.handleChangeFormState,
    formState = props.formState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    state = _useLanguage2[0],
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(function () {
      var today = new Date();
      today.setDate(today.getDate() + 1);
      return today;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openCalendar = _useState4[0],
    setOpenCalendar = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOption = _useState6[0],
    setSelectedOption = _useState6[1];
  var handleRemoveSnooze = function handleRemoveSnooze() {
    handleChangeFormState && handleChangeFormState({
      snooze_until: null
    });
    setFormState && setFormState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
          snooze_until: null
        })
      });
    });
  };
  var handleChangeOption = function handleChangeOption(value) {
    setSelectedOption(value);
    if (value === 'until_date') return;
    var currentDate = new Date();
    var newDate = null;
    if (value === 'off') {
      handleRemoveSnooze();
      return;
    }
    if (value === '1') {
      newDate = new Date(currentDate.getTime() + 60 * 60 * 1000);
    } else if (value === '2') {
      newDate = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000);
    } else if (value === '4') {
      newDate = new Date(currentDate.getTime() + 4 * 60 * 60 * 1000);
    } else if (value === '6') {
      newDate = new Date(currentDate.getTime() + 6 * 60 * 60 * 1000);
    } else if (value === '12') {
      newDate = new Date(currentDate.getTime() + 12 * 60 * 60 * 1000);
    } else if (value === 'indefinitely') {
      newDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 2));
    }
    if (newDate) {
      handleChangeFormState && handleChangeFormState({
        snooze_until: (0, _moment.default)(newDate).utc().format('YYYY-MM-DD HH:mm:ss')
      });
      setFormState && setFormState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
            snooze_until: (0, _moment.default)(newDate).utc().format('YYYY-MM-DD HH:mm:ss')
          })
        });
      });
    }
  };
  var handleSelectDate = function handleSelectDate(date) {
    var currentDate = new Date();
    var diffInHours = Math.abs((date - currentDate) / 36e5);
    var tolerance = .15; // 10 minutes tolerance

    var matchedOption = '';
    if (Math.abs(diffInHours - 1) <= tolerance) {
      matchedOption = '1';
    } else if (Math.abs(diffInHours - 2) <= tolerance) {
      matchedOption = '2';
    } else if (Math.abs(diffInHours - 4) <= tolerance) {
      matchedOption = '4';
    } else if (Math.abs(diffInHours - 6) <= tolerance) {
      matchedOption = '6';
    } else if (Math.abs(diffInHours - 12) <= tolerance) {
      matchedOption = '12';
    }
    setSelectedDate(date);
    if (matchedOption) {
      setSelectedOption(matchedOption);
    }
    handleChangeFormState && handleChangeFormState({
      snooze_until: (0, _moment.default)(date).utc().format('YYYY-MM-DD HH:mm:ss')
    });
    setFormState && setFormState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), {}, {
          snooze_until: (0, _moment.default)(date).utc().format('YYYY-MM-DD HH:mm:ss')
        })
      });
    });
  };
  var handleUpdateClick = function handleUpdateClick() {
    var _Object$keys;
    onClose && onClose();
    if (isAutomaticUpdate) {
      handleUpdate && handleUpdate(formState === null || formState === void 0 ? void 0 : formState.changes);
      return;
    }
    if ((_Object$keys = Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes)) !== null && _Object$keys !== void 0 && _Object$keys.length) {
      handleUpdate && handleUpdate();
    }
  };
  var dateOptions = ['or', 'until_date'];
  var snoozeOptions = [{
    value: 'off',
    content: t('SNOOZE_OFF', 'Off')
  }, {
    value: '1',
    content: t('SNOOZE_ONE_HOUR', '1H')
  }, {
    value: '2',
    content: t('SNOOZE_TWO_HOUR', '2H')
  }, {
    value: '4',
    content: t('SNOOZE_FOUR_HOUR', '4H')
  }, {
    value: '6',
    content: t('SNOOZE_SIX_HOUR', '6H')
  }, {
    value: '12',
    content: t('SNOOZE_TWELVE_HOUR', '12H')
  }, {
    value: 'indefinitely',
    content: t('SNOOZE_INDEFINITELY', 'Indefinitely')
  }, {
    value: 'or',
    content: t('SNOOZE_OR', 'or')
  }, {
    value: 'until_date'
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SnoozeContainer, {
    openCalendar: openCalendar
  }, /*#__PURE__*/_react.default.createElement(_styles2.SnoozeTitle, null, t('SNOOZE_TITLE', 'Disable for:')), /*#__PURE__*/_react.default.createElement(_styles2.SnoozeWrapper, null, snoozeOptions === null || snoozeOptions === void 0 ? void 0 : snoozeOptions.map(function (option, i) {
    var _state$language;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, option.value === 'until_date' && /*#__PURE__*/_react.default.createElement(_styles2.DateContainer, {
      active: option.value === selectedOption || openCalendar
    }, /*#__PURE__*/_react.default.createElement(_styles2.IconContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4, null)), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
      locale: (0, _utils.getLocale)(state === null || state === void 0 || (_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.code, locales),
      selected: selectedDate,
      minDate: new Date(),
      onChange: handleSelectDate,
      onCalendarOpen: function onCalendarOpen() {
        setSelectedOption('until_date');
        setOpenCalendar(true);
      },
      onCalendarClose: function onCalendarClose() {
        return setOpenCalendar(false);
      },
      showTimeSelect: true,
      timeFormat: "HH:mm",
      timeIntervals: 15,
      timeCaption: "Time",
      dateFormat: "MMMM d, yyyy HH:mm"
    })), option.value === 'or' && /*#__PURE__*/_react.default.createElement("p", null, option.content), !dateOptions.includes(option.value) && /*#__PURE__*/_react.default.createElement(_styles2.ButtonOptions, {
      onClick: function onClick() {
        return handleChangeOption(option.value);
      },
      active: option.value === selectedOption
    }, option.content));
  })), /*#__PURE__*/_react.default.createElement(_styles2.InfoContainer, {
    hasSnooze: dataState === null || dataState === void 0 ? void 0 : dataState.snooze_until
  }, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleUpdateClick();
    }
  }, selectedOption === 'off' ? t('DISABLE_SNOOZE', 'Disable Snooze') : t('SNOOZE_SAVE', 'Snooze')), /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    onClick: function onClick() {
      return onClose();
    }
  }, t('CANCEL', 'Cancel'))), (dataState === null || dataState === void 0 ? void 0 : dataState.snooze_until) && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, t('SNOOZED_UNTIL', 'Snoozed until:')), " ", _moment.default.utc(dataState === null || dataState === void 0 ? void 0 : dataState.snooze_until).local().format('YYYY-MM-DD HH:mm')))));
};