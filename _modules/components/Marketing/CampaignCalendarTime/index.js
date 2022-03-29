"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCalendarTime = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("../../../styles");

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

require("react-datepicker/dist/react-datepicker.css");

var _moment = _interopRequireDefault(require("moment"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CampaignCalendarTime = function CampaignCalendarTime(props) {
  var showTime = props.showTime,
      dateTime = props.dateTime,
      handleChangeDateTime = props.handleChangeDateTime;

  var _useState = (0, _react.useState)(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var handleClickOutside = function handleClickOutside(e) {
    if (e.target.closest('.react-datepicker__tab-loop') || e.target.closest('.react-datepicker-wrapper') || e.target.closest('.calendar-box-btn') || !isOpen) return;
    setIsOpen(false);
  };

  var handleChangeDate = function handleChangeDate(date) {
    setStartDate(date);
    handleChangeDateTime && handleChangeDateTime((0, _moment.default)(date).format('YYYY-MM-DD HH:mm:ss'));
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  (0, _react.useEffect)(function () {
    if (dateTime) setStartDate(new Date(dateTime));
  }, [dateTime]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DateTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsOpen(true);
    },
    className: "calendar-box-btn"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4, null), showTime ? (0, _moment.default)(startDate).format('DD MMM, YYYY h:m A') : (0, _moment.default)(startDate).format('DD MMM, YYYY')), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: startDate,
    showTimeSelect: showTime,
    onChange: function onChange(date) {
      return handleChangeDate(date);
    },
    open: isOpen
  })));
};

exports.CampaignCalendarTime = CampaignCalendarTime;