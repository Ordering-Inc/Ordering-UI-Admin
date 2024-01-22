"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversTimeDisplay = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _Shared = require("../../Shared");
var _UserList = require("./UserList");
var _DriverGroupSelectorHeader = require("../DriverGroupSelectorHeader");
var _AnalyticsCalendar = require("../../BusinessIntelligence/AnalyticsCalendar");
var _DriverBlockAddForm = require("./DriverBlockAddForm");
var _rrule = require("rrule");
var _moment = _interopRequireDefault(require("moment"));
var _styles2 = require("./styles");
var _Select = require("../../../styles/Select");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversTimeDisplayUI = function DriversTimeDisplayUI(props) {
  var _configs$appointments, _configs$general_hour, _configs$general_hour2, _stackEventsState$eve;
  var driversList = props.driversList,
    paginationProps = props.paginationProps,
    getDrivers = props.getDrivers,
    setSelectedGroupId = props.setSelectedGroupId,
    setIsTimeChangeError = props.setIsTimeChangeError,
    isTimeChangeError = props.isTimeChangeError,
    handleChangeScheduleTime = props.handleChangeScheduleTime,
    scheduleState = props.scheduleState,
    selectedGroupId = props.selectedGroupId,
    setScheduleState = props.setScheduleState,
    setDate = props.setDate,
    setSelectedUntilDate = props.setSelectedUntilDate,
    selectedDate = props.selectedDate,
    selectedUntilDate = props.selectedUntilDate,
    setSelectedDate = props.setSelectedDate,
    setSelectedBlock = props.setSelectedBlock,
    selectedBlock = props.selectedBlock,
    timeErrorList = props.timeErrorList,
    openModal = props.openModal,
    setOpenModal = props.setOpenModal,
    handleAddBlockTime = props.handleAddBlockTime,
    deleteBlockTime = props.deleteBlockTime,
    setOpenDeleteModal = props.setOpenDeleteModal,
    openDeleteModal = props.openDeleteModal,
    setPropagation = props.setPropagation,
    propagation = props.propagation,
    setShowBreakBlock = props.setShowBreakBlock,
    showBreakBlock = props.showBreakBlock,
    date = props.date,
    editBlockTime = props.editBlockTime,
    setOpenEditModal = props.setOpenEditModal,
    openEditModal = props.openEditModal,
    setStackEventsState = props.setStackEventsState,
    stackEventsState = props.stackEventsState,
    setAlertState = props.setAlertState,
    alertState = props.alertState,
    handleSelectedUntilDate = props.handleSelectedUntilDate,
    ruleState = props.ruleState,
    setRuleState = props.setRuleState,
    handleSetInitialStates = props.handleSetInitialStates;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showSelectHeader = _useState2[0],
    setShowSelectHeader = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    scheduleOptions = _useState4[0],
    setScheduleOptions = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    scheduleOptionValues = _useState6[0],
    setScheduleOptionValues = _useState6[1];
  var rule = ruleState !== null && ruleState !== void 0 && ruleState.freq ? new _rrule.RRule(ruleState).toString() : null;
  var isEnabledAppointmentsFeature = configs === null || configs === void 0 || (_configs$appointments = configs.appointments) === null || _configs$appointments === void 0 ? void 0 : _configs$appointments.value;
  var is12Hours = configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 || (_configs$general_hour = _configs$general_hour.value) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.includes('hh:mm');
  var hourFormat = configs === null || configs === void 0 || (_configs$general_hour2 = configs.general_hour_format) === null || _configs$general_hour2 === void 0 ? void 0 : _configs$general_hour2.value;
  var rruleList = [{
    value: null,
    name: t('NONE', 'None')
  }, {
    value: _rrule.RRule.WEEKLY,
    name: t('WEEKLY', 'Weekly')
  }, {
    value: _rrule.RRule.DAILY,
    name: t('DAILY', 'Daily')
  }];
  var rruleDayList = [{
    value: _rrule.RRule.SU,
    name: t('SUN', 'Sun')
  }, {
    value: _rrule.RRule.MO,
    name: t('MON', 'Mon')
  }, {
    value: _rrule.RRule.TU,
    name: t('TUE', 'Tue')
  }, {
    value: _rrule.RRule.WE,
    name: t('WED', 'Wed')
  }, {
    value: _rrule.RRule.TH,
    name: t('THU', 'Thu')
  }, {
    value: _rrule.RRule.FR,
    name: t('FRI', 'Fri')
  }, {
    value: _rrule.RRule.SA,
    name: t('SAT', 'Sat')
  }];
  var propagationList = [{
    value: 'none',
    content: t('NONE', 'None')
  }, {
    value: 'all',
    content: t('ALL', 'All')
  }, {
    value: 'from_now',
    content: t('FROM_NOW', 'From now')
  }, {
    value: 'from_event',
    content: t('FROM_EVENT', 'From event')
  }];
  var changeDriverGroupState = function changeDriverGroupState(_driverGroup) {
    setShowSelectHeader(false);
    setSelectedGroupId(_driverGroup === null || _driverGroup === void 0 ? void 0 : _driverGroup.id);
  };
  var handleChangeDate = function handleChangeDate(date1, date2) {
    var diff = (0, _moment.default)(date2).diff(date1, 'days');
    if (diff > 31) {
      setIsTimeChangeError({
        state: true,
        error: 4
      });
    } else {
      setDate([(0, _moment.default)(date1).startOf('day').utc().format('YYYY-MM-DD HH:mm:ss'), (0, _moment.default)(date2).endOf('day').utc().format('YYYY-MM-DD HH:mm:ss')]);
    }
  };
  var handleUntilDate = function handleUntilDate(_date) {
    var diff = (0, _moment.default)(_date).diff(selectedDate, 'months', true);
    if ((0, _moment.default)(_date) < (0, _moment.default)(selectedDate) || diff > 2) {
      setIsTimeChangeError({
        state: true,
        error: 5
      });
    } else {
      handleSelectedUntilDate(_date);
      setSelectedUntilDate(_date);
    }
  };
  var closeAlert = function closeAlert() {
    setIsTimeChangeError({
      state: false,
      error: null
    });
    setAlertState({
      open: false,
      content: []
    });
  };
  var generateHourList = function generateHourList() {
    var _selectedBlock$block, _selectedBlock$block2, _selectedBlock$block3, _selectedBlock$block4, _selectedBlock$block5, _selectedBlock$block9, _selectedBlock$block10, _selectedBlock$block11;
    var _scheduleOptions = [];
    var isTodayOrPastDate = (0, _moment.default)(selectedDate).format('YYYY-MM-DD') <= (0, _moment.default)().format('YYYY-MM-DD');
    var now = new Date();
    for (var hour = 0; hour < 24; hour++) {
      /**
         * Continue if is today and hour is smaller than current hour
        */
      if (isTodayOrPastDate && hour < (now === null || now === void 0 ? void 0 : now.getHours())) continue;
      var hh = '';
      var meridian = '';
      if (!is12Hours) hh = hour < 10 ? "0".concat(hour) : hour;else {
        if (hour === 0) {
          hh = '12';
          meridian = ' ' + t('AM', 'AM');
        } else if (hour > 0 && hour < 12) {
          hh = hour < 10 ? '0' + hour : hour;
          meridian = ' ' + t('AM', 'AM');
        } else if (hour === 12) {
          hh = '12';
          meridian = ' ' + t('PM', 'PM');
        } else {
          hh = hour - 12 < 10 ? '0' + (hour - 12) : hour - 12;
          meridian = ' ' + t('PM', 'PM');
        }
      }
      for (var min = 0; min < 4; min++) {
        /**
           * Continue if is today and hour is equal to current hour and minutes is smaller than current minute
          */
        if (isTodayOrPastDate && hour === (now === null || now === void 0 ? void 0 : now.getHours()) && min * 15 <= now.getMinutes()) continue;
        _scheduleOptions.push({
          value: (hour < 10 ? "0".concat(hour) : hour) + ':' + (min === 0 ? '00' : min * 15),
          content: /*#__PURE__*/_react.default.createElement(_styles2.TimeOptions, null, is12Hours ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hh, ":", min === 0 ? '00' : min * 15, " ", meridian) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hh, " : ", min === 0 ? '00' : min * 15))
        });
      }
    }
    _scheduleOptions.push({
      value: '23:59',
      content: /*#__PURE__*/_react.default.createElement(_styles2.TimeOptions, null, is12Hours ? '11:59 PM' : '23 : 59')
    });
    var breakEnd = (selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block = selectedBlock.block) === null || _selectedBlock$block === void 0 ? void 0 : _selectedBlock$block.break_end) || (selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block2 = selectedBlock.block) === null || _selectedBlock$block2 === void 0 ? void 0 : _selectedBlock$block2.end);
    var breakStart = (selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block3 = selectedBlock.block) === null || _selectedBlock$block3 === void 0 ? void 0 : _selectedBlock$block3.break_start) || (selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block4 = selectedBlock.block) === null || _selectedBlock$block4 === void 0 ? void 0 : _selectedBlock$block4.start);
    if (selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block5 = selectedBlock.block) !== null && _selectedBlock$block5 !== void 0 && _selectedBlock$block5.end && !_scheduleOptions.some(function (option) {
      return (option === null || option === void 0 ? void 0 : option.name) === 'end';
    })) {
      var _selectedBlock$block6, _selectedBlock$block7, _selectedBlock$block8;
      _scheduleOptions.unshift({
        value: (0, _moment.default)(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block6 = selectedBlock.block) === null || _selectedBlock$block6 === void 0 ? void 0 : _selectedBlock$block6.end).format('HH:mm'),
        name: 'end',
        content: /*#__PURE__*/_react.default.createElement(_styles2.TimeOptions, null, is12Hours ? "".concat((0, _moment.default)(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block7 = selectedBlock.block) === null || _selectedBlock$block7 === void 0 ? void 0 : _selectedBlock$block7.end).format('hh:mm A')) : "".concat((0, _moment.default)(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block8 = selectedBlock.block) === null || _selectedBlock$block8 === void 0 ? void 0 : _selectedBlock$block8.end).format('HH : mm')))
      });
    }
    if (showBreakBlock && selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block9 = selectedBlock.block) !== null && _selectedBlock$block9 !== void 0 && _selectedBlock$block9.end && !_scheduleOptions.some(function (option) {
      return (option === null || option === void 0 ? void 0 : option.name) === 'break_end';
    })) {
      _scheduleOptions.unshift({
        value: (0, _moment.default)(breakEnd).format('HH:mm'),
        name: 'break_end',
        content: /*#__PURE__*/_react.default.createElement(_styles2.TimeOptions, null, is12Hours ? "".concat((0, _moment.default)(breakEnd).format('hh:mm A')) : "".concat((0, _moment.default)(breakEnd).format('HH : mm')))
      });
    }
    if (showBreakBlock && selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block10 = selectedBlock.block) !== null && _selectedBlock$block10 !== void 0 && _selectedBlock$block10.start) {
      _scheduleOptions.unshift({
        value: (0, _moment.default)(breakStart).format('HH:mm'),
        name: 'break_start',
        content: /*#__PURE__*/_react.default.createElement(_styles2.TimeOptions, null, is12Hours ? "".concat((0, _moment.default)(breakStart).format('hh:mm A')) : "".concat((0, _moment.default)(breakStart).format('HH : mm')))
      });
    }
    if (selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block11 = selectedBlock.block) !== null && _selectedBlock$block11 !== void 0 && _selectedBlock$block11.start && !_scheduleOptions.some(function (option) {
      return (option === null || option === void 0 ? void 0 : option.name) === 'start';
    })) {
      var _selectedBlock$block12, _selectedBlock$block13, _selectedBlock$block14;
      _scheduleOptions.unshift({
        value: (0, _moment.default)(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block12 = selectedBlock.block) === null || _selectedBlock$block12 === void 0 ? void 0 : _selectedBlock$block12.start).format('HH:mm'),
        name: 'start',
        content: /*#__PURE__*/_react.default.createElement(_styles2.TimeOptions, null, is12Hours ? "".concat((0, _moment.default)(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block13 = selectedBlock.block) === null || _selectedBlock$block13 === void 0 ? void 0 : _selectedBlock$block13.start).format('hh:mm A')) : "".concat((0, _moment.default)(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block14 = selectedBlock.block) === null || _selectedBlock$block14 === void 0 ? void 0 : _selectedBlock$block14.start).format('HH : mm')))
      });
    }
    setScheduleOptionValues(_scheduleOptions.map(function (option) {
      return option === null || option === void 0 ? void 0 : option.value;
    }));
    setScheduleOptions(_scheduleOptions);
  };
  (0, _react.useEffect)(function () {
    var isTodayOrPastDate = (0, _moment.default)(selectedDate).format('YYYY-MM-DD') <= (0, _moment.default)().format('YYYY-MM-DD');
    var date = (0, _moment.default)(selectedDate).format('YYYY-MM-DD');
    if ((scheduleOptions === null || scheduleOptions === void 0 ? void 0 : scheduleOptions.length) > 0 && isTodayOrPastDate) {
      var _scheduleOptions$find, _scheduleOptions$find2, _scheduleOptions$, _scheduleState$block, _scheduleState$block2;
      var state = _objectSpread(_objectSpread({}, scheduleState.state), {}, {
        start: "".concat(date, " ").concat((_scheduleOptions$find = scheduleOptions === null || scheduleOptions === void 0 || (_scheduleOptions$find2 = scheduleOptions.find(function (option) {
          return (option === null || option === void 0 ? void 0 : option.name) === 'start';
        })) === null || _scheduleOptions$find2 === void 0 ? void 0 : _scheduleOptions$find2.value) !== null && _scheduleOptions$find !== void 0 ? _scheduleOptions$find : (_scheduleOptions$ = scheduleOptions[0]) === null || _scheduleOptions$ === void 0 ? void 0 : _scheduleOptions$.value, ":00")
      });
      if (showBreakBlock) {
        var _scheduleOptions$find3, _scheduleOptions$find4, _scheduleOptions$2;
        state.break_start = "".concat(date, " ").concat((_scheduleOptions$find3 = scheduleOptions === null || scheduleOptions === void 0 || (_scheduleOptions$find4 = scheduleOptions.find(function (option) {
          return (option === null || option === void 0 ? void 0 : option.name) === 'break_start';
        })) === null || _scheduleOptions$find4 === void 0 ? void 0 : _scheduleOptions$find4.value) !== null && _scheduleOptions$find3 !== void 0 ? _scheduleOptions$find3 : (_scheduleOptions$2 = scheduleOptions[0]) === null || _scheduleOptions$2 === void 0 ? void 0 : _scheduleOptions$2.value, ":00");
      }
      if (!(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$block = scheduleState.block) !== null && _scheduleState$block !== void 0 && _scheduleState$block.end) && !selectedBlock) {
        state.end = "".concat(date, " 23:59:00");
      }
      if (!(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$block2 = scheduleState.block) !== null && _scheduleState$block2 !== void 0 && _scheduleState$block2.rrule) && !selectedBlock) {
        delete state.until;
      }
      setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
        state: state,
        loading: false,
        error: null
      }));
    }
  }, [JSON.stringify(scheduleOptions), selectedDate, showBreakBlock, selectedBlock, date]);
  (0, _react.useEffect)(function () {
    if (!(isTimeChangeError !== null && isTimeChangeError !== void 0 && isTimeChangeError.state)) return;
    setAlertState({
      open: true,
      content: timeErrorList[isTimeChangeError.error]
    });
  }, [isTimeChangeError === null || isTimeChangeError === void 0 ? void 0 : isTimeChangeError.state]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      var _selectedBlock$block15, _selectedBlock$block16;
      var diff = (0, _moment.default)(selectedDate).diff((0, _moment.default)(), 'day');
      if (diff <= 0 || selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block15 = selectedBlock.block) !== null && _selectedBlock$block15 !== void 0 && _selectedBlock$block15.start || selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block16 = selectedBlock.block) !== null && _selectedBlock$block16 !== void 0 && _selectedBlock$block16.end) {
        generateHourList();
      }
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [selectedDate, selectedBlock, showBreakBlock]);
  (0, _react.useEffect)(function () {
    var _scheduleState$state;
    setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
        rrule: rule,
        until: (scheduleState === null || scheduleState === void 0 || (_scheduleState$state = scheduleState.state) === null || _scheduleState$state === void 0 ? void 0 : _scheduleState$state.until) || "".concat((0, _moment.default)(selectedDate).format('YYYY-MM-DD'), " 23:59:00")
      })
    }));
  }, [rule]);
  (0, _react.useEffect)(function () {
    var _selectedBlock$block17;
    if (!(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block)) return;
    if (selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block17 = selectedBlock.block) !== null && _selectedBlock$block17 !== void 0 && _selectedBlock$block17.rrule) {
      var _selectedBlock$block18, _selectedBlock$block19, _selectedBlock$block20, _selectedBlock$block21;
      var _date = _rrule.RRule.fromString("DTSTART:".concat((0, _moment.default)(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block18 = selectedBlock.block) === null || _selectedBlock$block18 === void 0 ? void 0 : _selectedBlock$block18.start).toISOString().replaceAll('-', '').replaceAll(':', '').replaceAll('.', '')) + '\n' + (selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block19 = selectedBlock.block) === null || _selectedBlock$block19 === void 0 || (_selectedBlock$block19 = _selectedBlock$block19.rrule) === null || _selectedBlock$block19 === void 0 ? void 0 : _selectedBlock$block19.includes('RRULE:')) ? selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block20 = selectedBlock.block) === null || _selectedBlock$block20 === void 0 ? void 0 : _selectedBlock$block20.rrule : "RRULE:".concat(selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$block21 = selectedBlock.block) === null || _selectedBlock$block21 === void 0 ? void 0 : _selectedBlock$block21.rrule));
      setRuleState({
        freq: _date.options.freq,
        byweekday: _date.options.byweekday
      });
    }
  }, [selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.block]);
  var handleSelectDriver = function handleSelectDriver(_driver, _block) {
    setSelectedBlock({
      user: _driver,
      block: _block
    });
    _block && setSelectedDate(new Date(_block.start));
    _block && setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      state: {
        start: _block.start,
        end: _block.end
      }
    }));
    !_block && generateHourList();
    setOpenModal(true);
  };
  var onCloseModal = function onCloseModal() {
    setOpenModal(false);
    setScheduleOptionValues([]);
    handleSetInitialStates();
  };
  var handleCloseSecondModal = function handleCloseSecondModal() {
    setOpenDeleteModal(false);
    setOpenEditModal(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, driversList.loading && /*#__PURE__*/_react.default.createElement(_styles2.SpinnerLoaderWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, null)), /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement(_styles2.HeaderWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVERS_TIME_DISPLAY', 'Drivers time display')), isEnabledAppointmentsFeature && /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupName, {
    onClick: function onClick() {
      return setShowSelectHeader(!showSelectHeader);
    }
  }, t('SELECT_DRIVER_GROUP', 'Select a driver group')), showSelectHeader && /*#__PURE__*/_react.default.createElement(_DriverGroupSelectorHeader.DriverGroupSelectHeader, {
    close: function close() {
      return setShowSelectHeader(false);
    },
    isOpen: showSelectHeader,
    changeDriverGroupState: changeDriverGroupState
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null), /*#__PURE__*/_react.default.createElement("span", {
    className: "calendar"
  }, t('CALENDAR', 'Calendar')))), /*#__PURE__*/_react.default.createElement(_styles2.DriversGroupCalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, _extends({}, props, {
    handleChangeDate: handleChangeDate
  })))))), /*#__PURE__*/_react.default.createElement(_UserList.DeliveryUsersListing, {
    date: date,
    getDrivers: getDrivers,
    driversList: driversList,
    paginationProps: paginationProps,
    selectedGroupId: selectedGroupId,
    handleSelectDriver: handleSelectDriver,
    setStackEventsState: setStackEventsState
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block ? t('EDIT_BLOCK', 'Edit block') : t('ADD_NEW_BLOCK', 'Add new block'),
    open: openModal,
    onClose: onCloseModal
  }, /*#__PURE__*/_react.default.createElement(_DriverBlockAddForm.DriverBlockAddFormUI, {
    rruleList: rruleList,
    ruleState: ruleState,
    setRuleState: setRuleState,
    rruleDayList: rruleDayList,
    selectedDate: selectedDate,
    scheduleState: scheduleState,
    showBreakBlock: showBreakBlock,
    isEdit: !!(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block),
    handleUntilDate: handleUntilDate,
    scheduleOptions: scheduleOptions,
    deleteBlockTime: deleteBlockTime,
    setScheduleState: setScheduleState,
    setOpenEditModal: setOpenEditModal,
    selectedBlock: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.block,
    setShowBreakBlock: setShowBreakBlock,
    selectedUntilDate: selectedUntilDate,
    handleChangeStartDate: setSelectedDate,
    setOpenDeleteModal: setOpenDeleteModal,
    handleAddBlockTime: handleAddBlockTime,
    handleChangeScheduleTime: handleChangeScheduleTime,
    onCloseModal: onCloseModal,
    scheduleOptionValues: scheduleOptionValues
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "500px",
    height: "40vh",
    padding: "30px",
    title: openEditModal ? t('EDIT_BLOCK', 'Edit block') : t('DELETE_BLOCK', 'Delete block'),
    open: openDeleteModal || openEditModal,
    onClose: handleCloseSecondModal
  }, /*#__PURE__*/_react.default.createElement(_styles2.DeleteWrapper, null, openDeleteModal && /*#__PURE__*/_react.default.createElement(_styles2.DeleteBlock, null, t('DELETE_BLOCK_CONFIRMATION', 'Are you sure that you want to delete this block?')), openEditModal && /*#__PURE__*/_react.default.createElement(_styles2.DeleteBlock, null, t('EDIT_BLOCK_CONFIRMATION', 'Are you sure that you want to edit this block?')), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusTypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_PROPAGATION', 'Select a propagation option')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: propagation,
    options: propagationList,
    onChange: function onChange(option) {
      return setPropagation(option);
    },
    placeholder: t('CHANGE_PROPAGATION', 'Change Propagation'),
    notAsync: true
  }))), /*#__PURE__*/_react.default.createElement(_styles2.DeleteButtons, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleCloseSecondModal();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: scheduleState.loading,
    onClick: function onClick() {
      return openDeleteModal ? deleteBlockTime() : editBlockTime();
    }
  }, scheduleState.loading ? t('LOADING', 'Loading') : openDeleteModal ? t('DELETE', 'Delete') : t('EDIT', 'Edit')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "500px",
    height: "40vh",
    padding: "30px",
    title: t('STACKED_BLOCKS', 'Stacked blocks'),
    open: stackEventsState === null || stackEventsState === void 0 ? void 0 : stackEventsState.open,
    onClose: onCloseModal
  }, /*#__PURE__*/_react.default.createElement(_styles2.DeleteWrapper, null, stackEventsState === null || stackEventsState === void 0 || (_stackEventsState$eve = stackEventsState.events) === null || _stackEventsState$eve === void 0 ? void 0 : _stackEventsState$eve.map(function (event, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.StackedBlock, {
      key: i,
      onClick: function onClick() {
        return handleSelectDriver(stackEventsState === null || stackEventsState === void 0 ? void 0 : stackEventsState.user, event);
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, (0, _moment.default)(event.start).format(hourFormat), " - ", (0, _moment.default)(event.end).format(hourFormat)));
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var DriversTimeDisplay = function DriversTimeDisplay(props) {
  var driversTimeDisplayProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversTimeDisplayUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'pages'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CalendarDriversList, driversTimeDisplayProps);
};
exports.DriversTimeDisplay = DriversTimeDisplay;