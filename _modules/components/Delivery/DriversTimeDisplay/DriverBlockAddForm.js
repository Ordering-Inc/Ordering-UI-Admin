"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverBlockAddFormUI = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _styles = require("../../../styles");
var _Inputs = require("../../../styles/Inputs");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _dist = require("react-bootstrap-icons/dist");
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverBlockAddFormUI = exports.DriverBlockAddFormUI = function DriverBlockAddFormUI(props) {
  var _scheduleState$state, _scheduleState$state2, _scheduleState$state3, _scheduleState$state$, _scheduleState$state4, _scheduleState$state$2, _scheduleState$state5, _scheduleState$state$3, _scheduleState$state6, _scheduleState$state$4, _scheduleState$state7, _scheduleState$state$5, _scheduleState$state8, _scheduleState$state$6, _scheduleState$state9, _scheduleState$state$7, _scheduleState$state10, _scheduleState$state$8, _scheduleState$state11, _scheduleState$state$9, _scheduleState$state12, _scheduleState$state13;
  var scheduleOptions = props.scheduleOptions,
    selectedBlock = props.selectedBlock,
    handleChangeScheduleTime = props.handleChangeScheduleTime,
    setScheduleState = props.setScheduleState,
    rruleList = props.rruleList,
    setRuleState = props.setRuleState,
    scheduleState = props.scheduleState,
    ruleState = props.ruleState,
    handleChangeStartDate = props.handleChangeStartDate,
    rruleDayList = props.rruleDayList,
    selectedDate = props.selectedDate,
    selectedUntilDate = props.selectedUntilDate,
    isEdit = props.isEdit,
    handleAddBlockTime = props.handleAddBlockTime,
    setOpenDeleteModal = props.setOpenDeleteModal,
    setShowBreakBlock = props.setShowBreakBlock,
    showBreakBlock = props.showBreakBlock,
    handleUntilDate = props.handleUntilDate,
    setOpenEditModal = props.setOpenEditModal,
    scheduleOptionValues = props.scheduleOptionValues;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var getHourOrMinute = function getHourOrMinute(block, isStart) {
    if (!block) {
      return isStart ? '00:00' : '23:59';
    }
    var hour = (0, _moment.default)(block).hour();
    var minute = (0, _moment.default)(block).minute();
    var time = hour === 23 && minute === 59 ? "".concat(hour, ":").concat(minute) : "".concat(hour < 10 ? "0".concat(hour) : hour, ":").concat(minute !== 0 ? parseInt(minute / 15 * 15) : '00');
    return time;
  };
  var handleChangeFrequency = function handleChangeFrequency(value) {
    setRuleState(_objectSpread(_objectSpread({}, ruleState), {}, {
      freq: value
    }));
  };
  var handleChangeInput = function handleChangeInput(e) {
    setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      state: _objectSpread(_objectSpread({}, scheduleState.state), {}, _defineProperty({}, e.target.name, e.target.value || ''))
    }));
  };
  var handleChangeDaily = function handleChangeDaily(e, value) {
    if (e.target.checked) {
      setRuleState(_objectSpread(_objectSpread({}, ruleState), {}, {
        byweekday: [].concat(_toConsumableArray(ruleState.byweekday), [value])
      }));
    } else {
      setRuleState(_objectSpread(_objectSpread({}, ruleState), {}, {
        byweekday: ruleState.byweekday.filter(function (day) {
          return day !== value;
        })
      }));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.FormWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('BLOCK_NAME', 'Block Name')), /*#__PURE__*/_react.default.createElement(_Inputs.InputPrimary, {
    name: "name",
    placeholder: t('BLOCK_NAME_OPTIONAL', 'Block name (Optional)'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    defaultValue: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.name
  }), /*#__PURE__*/_react.default.createElement("span", null, t('BLOCK_DESCRIPTION', 'Block Description')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    name: "description",
    placeholder: t('BLOCK_DESCRIPTION_OPTIONAL', 'Block description (Optional)'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    defaultValue: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.description
  }), /*#__PURE__*/_react.default.createElement(_styles2.BlocksWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DateBlockWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('BLOCK_DATE', 'Block date')), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state = scheduleState.state) !== null && _scheduleState$state !== void 0 && _scheduleState$state.start ? selectedDate === new Date(scheduleState === null || scheduleState === void 0 || (_scheduleState$state2 = scheduleState.state) === null || _scheduleState$state2 === void 0 ? void 0 : _scheduleState$state2.start) ? new Date(scheduleState === null || scheduleState === void 0 || (_scheduleState$state3 = scheduleState.state) === null || _scheduleState$state3 === void 0 ? void 0 : _scheduleState$state3.start) : selectedDate : selectedDate,
    placeholderText: "mm/dd/yyyy",
    className: "startDate",
    minDate: new Date(),
    onChange: function onChange(date) {
      return handleChangeStartDate(date);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShowBreakBlocksWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('SHOW_BREAK_BLOCK', 'Show break blocks')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: showBreakBlock,
    onChange: function onChange(enabled) {
      return setShowBreakBlock(enabled);
    },
    disabled: showBreakBlock && isEdit
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SelectsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectTitleWrappre, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectTitle, null, t('START_BLOCK_DATE', 'Start block date:')), scheduleOptionValues.includes(getHourOrMinute((_scheduleState$state$ = scheduleState === null || scheduleState === void 0 || (_scheduleState$state4 = scheduleState.state) === null || _scheduleState$state4 === void 0 ? void 0 : _scheduleState$state4.start) !== null && _scheduleState$state$ !== void 0 ? _scheduleState$state$ : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.start, true)) ? /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    noSelected: true,
    options: scheduleOptions.filter(function (option) {
      return !['break_start', 'end', 'break_end'].includes(option === null || option === void 0 ? void 0 : option.name);
    }),
    defaultValue: getHourOrMinute((_scheduleState$state$2 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state5 = scheduleState.state) === null || _scheduleState$state5 === void 0 ? void 0 : _scheduleState$state5.start) !== null && _scheduleState$state$2 !== void 0 ? _scheduleState$state$2 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.start, true),
    onChange: function onChange(val) {
      return handleChangeScheduleTime(val, true);
    },
    optionInnerMaxHeight: "300px"
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 34,
    width: 95
  })), /*#__PURE__*/_react.default.createElement(_styles2.SelectTitleWrappre, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectTitle, null, t('END_BLOCK_DATE', 'End block date:')), scheduleOptionValues.includes(getHourOrMinute((_scheduleState$state$3 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state6 = scheduleState.state) === null || _scheduleState$state6 === void 0 ? void 0 : _scheduleState$state6.end) !== null && _scheduleState$state$3 !== void 0 ? _scheduleState$state$3 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.end, true)) ? /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    noSelected: true,
    options: scheduleOptions.filter(function (option) {
      return !['break_start', 'start', 'break_end'].includes(option === null || option === void 0 ? void 0 : option.name);
    }),
    defaultValue: getHourOrMinute((_scheduleState$state$4 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state7 = scheduleState.state) === null || _scheduleState$state7 === void 0 ? void 0 : _scheduleState$state7.end) !== null && _scheduleState$state$4 !== void 0 ? _scheduleState$state$4 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.end),
    onChange: function onChange(val) {
      return handleChangeScheduleTime(val, false);
    },
    optionInnerMaxHeight: "300px"
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 34,
    width: 95
  })), showBreakBlock && /*#__PURE__*/_react.default.createElement(_styles2.SelectTitleWrappre, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectTitle, null, t('START_BREAK_BLOCK_DATE', 'Start break block date:')), scheduleOptionValues.includes(getHourOrMinute((_scheduleState$state$5 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state8 = scheduleState.state) === null || _scheduleState$state8 === void 0 ? void 0 : _scheduleState$state8.break_start) !== null && _scheduleState$state$5 !== void 0 ? _scheduleState$state$5 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.break_start, true)) ? /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    noSelected: true,
    options: scheduleOptions.filter(function (option) {
      return !['start', 'end', 'break_end'].includes(option === null || option === void 0 ? void 0 : option.name);
    }),
    defaultValue: getHourOrMinute((_scheduleState$state$6 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state9 = scheduleState.state) === null || _scheduleState$state9 === void 0 ? void 0 : _scheduleState$state9.break_start) !== null && _scheduleState$state$6 !== void 0 ? _scheduleState$state$6 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.break_start, true),
    onChange: function onChange(val) {
      return handleChangeScheduleTime(val, true, true);
    },
    optionInnerMaxHeight: "300px"
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 34,
    width: 95
  })), showBreakBlock && /*#__PURE__*/_react.default.createElement(_styles2.SelectTitleWrappre, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectTitle, null, t('END_BREAK_BLOCK_DATE', 'End break block date:')), scheduleOptionValues.includes(getHourOrMinute((_scheduleState$state$7 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state10 = scheduleState.state) === null || _scheduleState$state10 === void 0 ? void 0 : _scheduleState$state10.break_end) !== null && _scheduleState$state$7 !== void 0 ? _scheduleState$state$7 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.break_end, true)) || getHourOrMinute((_scheduleState$state$8 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state11 = scheduleState.state) === null || _scheduleState$state11 === void 0 ? void 0 : _scheduleState$state11.break_end) !== null && _scheduleState$state$8 !== void 0 ? _scheduleState$state$8 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.break_end) === scheduleOptionValues[(scheduleOptionValues === null || scheduleOptionValues === void 0 ? void 0 : scheduleOptionValues.length) - 1] ? /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    noSelected: true,
    options: scheduleOptions.filter(function (option) {
      return !['break_start', 'end', 'start'].includes(option === null || option === void 0 ? void 0 : option.name);
    }),
    defaultValue: getHourOrMinute((_scheduleState$state$9 = scheduleState === null || scheduleState === void 0 || (_scheduleState$state12 = scheduleState.state) === null || _scheduleState$state12 === void 0 ? void 0 : _scheduleState$state12.break_end) !== null && _scheduleState$state$9 !== void 0 ? _scheduleState$state$9 : selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.break_end),
    onChange: function onChange(val) {
      return handleChangeScheduleTime(val, false, true);
    },
    optionInnerMaxHeight: "300px"
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 34,
    width: 95
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("span", null, t('FREQUENCY', 'Frequency')), /*#__PURE__*/_react.default.createElement(_styles2.RrulesListWrapper, null, rruleList.map(function (rule) {
    return /*#__PURE__*/_react.default.createElement(_styles2.RrulesItem, {
      key: rule.value,
      onClick: function onClick() {
        return handleChangeFrequency(rule === null || rule === void 0 ? void 0 : rule.value);
      }
    }, (ruleState === null || ruleState === void 0 ? void 0 : ruleState.freq) === rule.value ? /*#__PURE__*/_react.default.createElement(_dist.RecordCircleFill, {
      className: "active"
    }) : /*#__PURE__*/_react.default.createElement(_dist.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, rule.name));
  }))), (ruleState === null || ruleState === void 0 ? void 0 : ruleState.freq) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, t('BY_WEEK_DAY', 'By week day')), /*#__PURE__*/_react.default.createElement(_styles2.ChecksWrapper, null, rruleDayList.map(function (day) {
    var _ruleState$byweekday;
    return /*#__PURE__*/_react.default.createElement(_styles2.WeekDayCheckWrapper, {
      key: day.value.weekday
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      defaultChecked: (_ruleState$byweekday = ruleState.byweekday) === null || _ruleState$byweekday === void 0 ? void 0 : _ruleState$byweekday.includes(day.value.weekday),
      onChange: function onChange(e) {
        return handleChangeDaily(e, day.value.weekday);
      }
    }), /*#__PURE__*/_react.default.createElement("h4", null, day.name));
  })), !isEdit && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, t('UNTIL_DATE', 'Until date')), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: selectedUntilDate,
    placeholderText: "mm/dd/yyyy",
    className: "endDate",
    minDate: new Date(),
    onChange: function onChange(date) {
      return handleUntilDate(date);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonsWrapper, null, isEdit && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    disabled: scheduleState.loading,
    onClick: function onClick() {
      return setOpenDeleteModal(true);
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: scheduleState.loading || (isEdit ? false : !(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state13 = scheduleState.state) !== null && _scheduleState$state13 !== void 0 && _scheduleState$state13.until) && scheduleState.rrule),
    onClick: function onClick() {
      return isEdit ? setOpenEditModal(true) : handleAddBlockTime();
    }
  }, scheduleState.loading ? t('LOADING', 'Loading') : isEdit ? t('EDIT', 'Edit') : t('ADD', 'Add'))));
};