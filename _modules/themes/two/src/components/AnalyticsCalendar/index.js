"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsCalendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

var _reactDaterangePicker = _interopRequireDefault(require("react-daterange-picker"));

var _FiCalendar = _interopRequireDefault(require("@meronex/icons/fi/FiCalendar"));

var _momentRange = require("moment-range");

var _moment = _interopRequireDefault(require("moment"));

require("react-daterange-picker/dist/css/react-calendar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AnalyticsCalendar = function AnalyticsCalendar(props) {
  var _dates$start2, _dates$end2;

  var handleChangeDate = props.handleChangeDate,
      defaultValue = props.defaultValue;
  var moment = (0, _momentRange.extendMoment)(_moment.default);

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      dates = _useState2[0],
      setDates = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowCalendar = _useState4[0],
      setIsShowCalendar = _useState4[1];

  var calendarRef = (0, _react.useRef)();

  var onSelect = function onSelect(dates) {
    return setDates(dates);
  };

  var handleClickOutside = function handleClickOutside(e) {
    var _calendarRef$current;

    if (!isShowCalendar) return;
    var outsideCalendar = !((_calendarRef$current = calendarRef.current) !== null && _calendarRef$current !== void 0 && _calendarRef$current.contains(e.target));

    if (outsideCalendar) {
      setIsShowCalendar(false);
    }
  };

  var handleOpenCalendar = function handleOpenCalendar(evt) {
    evt.preventDefault();
    setIsShowCalendar(true);
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isShowCalendar]);
  (0, _react.useEffect)(function () {
    if (dates) {
      var _dates$start, _dates$end;

      handleChangeDate(dates === null || dates === void 0 ? void 0 : (_dates$start = dates.start) === null || _dates$start === void 0 ? void 0 : _dates$start.format('YYYY-MM-DD'), dates === null || dates === void 0 ? void 0 : (_dates$end = dates.end) === null || _dates$end === void 0 ? void 0 : _dates$end.format('YYYY-MM-DD'));
    }
  }, [dates]);
  (0, _react.useEffect)(function () {
    if (defaultValue && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.from) !== '' && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.to) !== '') {
      setDates(moment.range(moment(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.from), moment(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.to)));
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleOpenCalendar
  }, /*#__PURE__*/_react.default.createElement(_FiCalendar.default, null), dates ? "".concat(dates === null || dates === void 0 ? void 0 : (_dates$start2 = dates.start) === null || _dates$start2 === void 0 ? void 0 : _dates$start2.format('YYYY-MM-DD'), "~").concat(dates === null || dates === void 0 ? void 0 : (_dates$end2 = dates.end) === null || _dates$end2 === void 0 ? void 0 : _dates$end2.format('YYYY-MM-DD')) : t('SELECT_DATE_RANGE', 'Select Date Range')), isShowCalendar && /*#__PURE__*/_react.default.createElement(_styles.AnalyticsCalendarContainer, {
    ref: calendarRef
  }, /*#__PURE__*/_react.default.createElement(_reactDaterangePicker.default, {
    onSelect: onSelect,
    value: dates
  })));
};

exports.AnalyticsCalendar = AnalyticsCalendar;