"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schedule = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Confirm = require("../Confirm");
var _ScheduleCopyTimes = require("../ScheduleCopyTimes");
var _styles = require("../../../styles");
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
var ScheduleUI = function ScheduleUI(props) {
  var _configs$general_hour;
  var scheduleState = props.scheduleState,
    isConflict = props.isConflict,
    setIsConflict = props.setIsConflict,
    isTimeChangeError = props.isTimeChangeError,
    addScheduleTime = props.addScheduleTime,
    openAddSchedule = props.openAddSchedule,
    setIsTimeChangeError = props.setIsTimeChangeError,
    handleEnabledSchedule = props.handleEnabledSchedule,
    handleChangeScheduleTime = props.handleChangeScheduleTime,
    handleDeleteSchedule = props.handleDeleteSchedule,
    handleOpenAddSchedule = props.handleOpenAddSchedule,
    handleChangeAddScheduleTime = props.handleChangeAddScheduleTime,
    handleAddSchedule = props.handleAddSchedule,
    selectedCopyDays = props.selectedCopyDays,
    cleanSelectedCopyDays = props.cleanSelectedCopyDays,
    handleSelectCopyTimes = props.handleSelectCopyTimes,
    handleApplyScheduleCopyTimes = props.handleApplyScheduleCopyTimes,
    isShowDate = props.isShowDate,
    disableSchedule = props.disableSchedule;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var is12Hours = configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 || (_configs$general_hour = _configs$general_hour.value) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.includes('hh:mm');
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var minuteOptions = (0, _react.useRef)([]);
  var hourOptions = (0, _react.useRef)([]);
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenCopytimes = _useState6[0],
    setIsOpenCopytimes = _useState6[1];
  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tue'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thu'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];
  var closeAlert = function closeAlert() {
    setIsConflict(false);
    setIsTimeChangeError(false);
    setAlertState({
      open: false,
      content: []
    });
  };
  var onClickDelete = function onClickDelete(daysOfWeekIndex, index) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('SCHEDULE', 'Schedule')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSchedule(daysOfWeekIndex, index);
      }
    });
  };
  var getNextDate = function getNextDate(x) {
    var now = new Date();
    now.setDate(now.getDate() + (x + (7 - now.getDay())) % 7);
    return now;
  };
  (0, _react.useEffect)(function () {
    if (!isTimeChangeError) return;
    setAlertState({
      open: true,
      content: [t('END_TIME_LATER', 'Choose an end time later than the start time.')]
    });
  }, [isTimeChangeError]);
  (0, _react.useEffect)(function () {
    if (!isConflict) return;
    setAlertState({
      open: true,
      content: [t('SCHEDULE_CONFLICT', 'There is an schedule conflict')]
    });
  }, [isConflict]);
  (0, _react.useEffect)(function () {
    var generateOptions = function generateOptions(count, formatFn) {
      return Array.from({
        length: count
      }, function (_, i) {
        return {
          value: i,
          content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, formatFn(i))
        };
      });
    };
    var formatMinute = function formatMinute(i) {
      return i < 10 ? "0".concat(i) : i;
    };
    var formatHour = function formatHour(hour) {
      if (!is12Hours) return hour < 10 ? "0".concat(hour) : hour;
      if (hour === 0) return "12 ".concat(t('AM', 'AM'));
      if (hour < 12) return "".concat(hour, " ").concat(t('AM', 'AM'));
      if (hour === 12) return "12 ".concat(t('PM', 'PM'));
      return "".concat(hour - 12, " ").concat(t('PM', 'PM'));
    };
    minuteOptions.current = generateOptions(60, formatMinute);
    hourOptions.current = generateOptions(24, formatHour);
  }, [is12Hours]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleContainer, null, scheduleState.map(function (schedule, daysOfWeekIndex) {
    var _addScheduleTime$open, _addScheduleTime$open2, _addScheduleTime$clos, _addScheduleTime$clos2;
    return /*#__PURE__*/_react.default.createElement(_styles2.TimeScheduleItemContainer, {
      key: daysOfWeekIndex
    }, /*#__PURE__*/_react.default.createElement("div", null, !disableSchedule && /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: schedule === null || schedule === void 0 ? void 0 : schedule.enabled,
      onChange: function onChange(e) {
        return handleEnabledSchedule(daysOfWeekIndex, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.DateWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[daysOfWeekIndex]), isShowDate && /*#__PURE__*/_react.default.createElement("h4", {
      className: "date"
    }, parseDate(getNextDate(daysOfWeekIndex), {
      outputFormat: 'YYYY-MM-DD'
    })))), schedule !== null && schedule !== void 0 && schedule.enabled ? /*#__PURE__*/_react.default.createElement("div", null, schedule === null || schedule === void 0 ? void 0 : schedule.lapses.map(function (lapse, index) {
      var _lapse$open, _lapse$open2, _lapse$close, _lapse$close2;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
        noSelected: true,
        options: hourOptions.current,
        defaultValue: lapse === null || lapse === void 0 || (_lapse$open = lapse.open) === null || _lapse$open === void 0 ? void 0 : _lapse$open.hour,
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, true, 'hour');
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
        noSelected: true,
        options: minuteOptions.current,
        defaultValue: lapse === null || lapse === void 0 || (_lapse$open2 = lapse.open) === null || _lapse$open2 === void 0 ? void 0 : _lapse$open2.minute,
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, true, 'minute');
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.SplitLine, null), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
        noSelected: true,
        options: hourOptions.current,
        defaultValue: lapse === null || lapse === void 0 || (_lapse$close = lapse.close) === null || _lapse$close === void 0 ? void 0 : _lapse$close.hour,
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, false, 'hour');
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
        noSelected: true,
        options: minuteOptions.current,
        defaultValue: lapse === null || lapse === void 0 || (_lapse$close2 = lapse.close) === null || _lapse$close2 === void 0 ? void 0 : _lapse$close2.minute,
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, false, 'minute');
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.TrashIconWrapper, {
        isHide: (schedule === null || schedule === void 0 ? void 0 : schedule.lapses.length) <= 1
      }, !disableSchedule && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
        onClick: function onClick() {
          return onClickDelete(daysOfWeekIndex, index);
        }
      })));
    }), openAddSchedule[daysOfWeekIndex] && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      noSelected: true,
      options: hourOptions.current,
      defaultValue: addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open = addScheduleTime.open) === null || _addScheduleTime$open === void 0 ? void 0 : _addScheduleTime$open.hour,
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, true, 'hour');
      },
      optionInnerMaxHeight: "300px"
    })), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      noSelected: true,
      options: minuteOptions.current,
      defaultValue: addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open2 = addScheduleTime.open) === null || _addScheduleTime$open2 === void 0 ? void 0 : _addScheduleTime$open2.minute,
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, true, 'minute');
      },
      optionInnerMaxHeight: "300px"
    })), /*#__PURE__*/_react.default.createElement(_styles2.SplitLine, null), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      noSelected: true,
      options: hourOptions.current,
      defaultValue: addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos = addScheduleTime.close) === null || _addScheduleTime$clos === void 0 ? void 0 : _addScheduleTime$clos.hour,
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, false, 'hour');
      },
      optionInnerMaxHeight: "300px"
    })), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      noSelected: true,
      options: minuteOptions.current,
      defaultValue: addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos2 = addScheduleTime.close) === null || _addScheduleTime$clos2 === void 0 ? void 0 : _addScheduleTime$clos2.minute,
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, false, 'minute');
      },
      optionInnerMaxHeight: "300px"
    })), /*#__PURE__*/_react.default.createElement(_styles2.AddScheduleIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircleFill, {
      onClick: function onClick() {
        return handleAddSchedule(daysOfWeekIndex);
      }
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.DashCircleFill, {
      onClick: function onClick() {
        return handleOpenAddSchedule(null);
      }
    })))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('UNAVAILABLE', 'Unavailable'))), !disableSchedule && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, {
      isHide: !(schedule !== null && schedule !== void 0 && schedule.enabled)
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusSquare, {
      onClick: function onClick() {
        return handleOpenAddSchedule(daysOfWeekIndex);
      }
    })), /*#__PURE__*/_react.default.createElement(_ScheduleCopyTimes.ScheduleCopyTimes, {
      disabled: !(schedule !== null && schedule !== void 0 && schedule.enabled),
      cleanSelectedCopyDays: cleanSelectedCopyDays,
      open: isOpenCopytimes === daysOfWeekIndex,
      daysOfWeekIndex: daysOfWeekIndex,
      onClick: setIsOpenCopytimes,
      onClose: function onClose() {
        return setIsOpenCopytimes(null);
      },
      selectedCopyDays: selectedCopyDays,
      handleSelectDays: function handleSelectDays(value) {
        return handleSelectCopyTimes(value);
      },
      handleApplyScheduleCopyTimes: handleApplyScheduleCopyTimes
    })));
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var Schedule = exports.Schedule = function Schedule(props) {
  var scheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ScheduleUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Schedule, scheduleProps);
};