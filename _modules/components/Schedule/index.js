"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schedule = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Confirm = require("../Confirm");

var _BusinessScheduleCopyTimes = require("../BusinessScheduleCopyTimes");

var _styles = require("../../styles");

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

var ScheduleUI = function ScheduleUI(props) {
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
      handleApplyScheduleCopyTimes = props.handleApplyScheduleCopyTimes;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      scheduleOptions = _useState4[0],
      setScheduleOptions = _useState4[1];

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
    var _scheduleOptions = [];

    for (var hour = 0; hour < 24; hour++) {
      for (var min = 0; min < 4; min++) {
        _scheduleOptions.push({
          value: hour + ':' + min * 15,
          content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, hour < 10 ? "0".concat(hour) : hour, " : ", min === 0 ? '00' : min * 15)
        });
      }
    }

    setScheduleOptions(_scheduleOptions);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleContainer, null, scheduleState.map(function (schedule, daysOfWeekIndex) {
    var _addScheduleTime$open, _addScheduleTime$open2, _addScheduleTime$clos, _addScheduleTime$clos2;

    return /*#__PURE__*/_react.default.createElement(_styles2.TimeScheduleItemContainer, {
      key: daysOfWeekIndex
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: schedule === null || schedule === void 0 ? void 0 : schedule.enabled,
      onChange: function onChange(e) {
        return handleEnabledSchedule(daysOfWeekIndex, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[daysOfWeekIndex])), schedule !== null && schedule !== void 0 && schedule.enabled ? /*#__PURE__*/_react.default.createElement("div", null, schedule === null || schedule === void 0 ? void 0 : schedule.lapses.map(function (lapse, index) {
      var _lapse$open, _lapse$open2, _lapse$close, _lapse$close2;

      return /*#__PURE__*/_react.default.createElement("div", {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
        noSelected: true,
        options: scheduleOptions,
        defaultValue: "".concat(lapse === null || lapse === void 0 ? void 0 : (_lapse$open = lapse.open) === null || _lapse$open === void 0 ? void 0 : _lapse$open.hour, ":").concat(parseInt((lapse === null || lapse === void 0 ? void 0 : (_lapse$open2 = lapse.open) === null || _lapse$open2 === void 0 ? void 0 : _lapse$open2.minute) / 15) * 15),
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, true);
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.SplitLine, null), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
        noSelected: true,
        options: scheduleOptions,
        defaultValue: "".concat(lapse === null || lapse === void 0 ? void 0 : (_lapse$close = lapse.close) === null || _lapse$close === void 0 ? void 0 : _lapse$close.hour, ":").concat(parseInt((lapse === null || lapse === void 0 ? void 0 : (_lapse$close2 = lapse.close) === null || _lapse$close2 === void 0 ? void 0 : _lapse$close2.minute) / 15) * 15),
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, false);
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, {
        isHide: (schedule === null || schedule === void 0 ? void 0 : schedule.lapses.length) <= 1
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
        onClick: function onClick() {
          return handleDeleteSchedule(daysOfWeekIndex, index);
        }
      })));
    }), openAddSchedule[daysOfWeekIndex] && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
      noSelected: true,
      options: scheduleOptions,
      defaultValue: "".concat(addScheduleTime === null || addScheduleTime === void 0 ? void 0 : (_addScheduleTime$open = addScheduleTime.open) === null || _addScheduleTime$open === void 0 ? void 0 : _addScheduleTime$open.hour, ":").concat(parseInt((addScheduleTime === null || addScheduleTime === void 0 ? void 0 : (_addScheduleTime$open2 = addScheduleTime.open) === null || _addScheduleTime$open2 === void 0 ? void 0 : _addScheduleTime$open2.minute) / 15) * 15),
      optionInnerMaxHeight: "300px",
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, true);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.SplitLine, null), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
      noSelected: true,
      options: scheduleOptions,
      defaultValue: "".concat(addScheduleTime === null || addScheduleTime === void 0 ? void 0 : (_addScheduleTime$clos = addScheduleTime.close) === null || _addScheduleTime$clos === void 0 ? void 0 : _addScheduleTime$clos.hour, ":").concat(parseInt((addScheduleTime === null || addScheduleTime === void 0 ? void 0 : (_addScheduleTime$clos2 = addScheduleTime.close) === null || _addScheduleTime$clos2 === void 0 ? void 0 : _addScheduleTime$clos2.minute) / 15) * 15),
      optionInnerMaxHeight: "300px",
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, false);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.AddScheduleIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircleFill, {
      onClick: function onClick() {
        return handleAddSchedule(daysOfWeekIndex);
      }
    })))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('UNAVAILABLE', 'Unavailable'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, {
      isHide: !(schedule !== null && schedule !== void 0 && schedule.enabled)
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusSquare, {
      onClick: function onClick() {
        return handleOpenAddSchedule(daysOfWeekIndex);
      }
    })), /*#__PURE__*/_react.default.createElement(_BusinessScheduleCopyTimes.BusinessScheduleCopyTimes, {
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
  }));
};

var Schedule = function Schedule(props) {
  var scheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ScheduleUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Schedule, scheduleProps);
};

exports.Schedule = Schedule;