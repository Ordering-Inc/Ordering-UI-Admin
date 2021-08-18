"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsCalendarContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AnalyticsCalendarContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 15px;\n  background: #FFFFFF;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  z-index: 100;\n  position: absolute;\n  top: 100%;\n  right: -50px;\n  width: 300px;\n  margin-top: 18px;\n\n  @media (min-width: 576px) {\n    right: 0;\n  }\n\n  .DateRangePicker__PaginationArrow: hover {\n    background: none;\n    > div {\n      transition: all 0.3s;\n      transform: scale(1.1);\n    }\n    .DateRangePicker__PaginationArrowIcon--previous {\n      border-right: 8px solid ", ";\n    }\n    .DateRangePicker__PaginationArrowIcon--next {\n      border-left: 8px solid ", ";\n    }\n  }\n\n  .DateRangePicker__MonthHeader {\n    color: #748194;\n  }\n\n  table {\n    border-collapse: collapse;\n    border: none;\n\n    thead {\n      th {\n        border: none;\n      }\n    }\n\n    tbody {\n      td {\n        color: ", ";\n        .DateRangePicker__CalendarHighlight {\n          border: 1px solid ", ";\n        }\n      }\n    }\n\n    .DateRangePicker__Date {\n      border: none;\n    }\n\n    .DateRangePicker__CalendarSelection {\n      background: #E9F2FE;\n      color: ", ";\n      border: none;\n    }\n\n    .DateRangePicker__Date--weekend {\n      background-color: #FFFFFF;\n    }\n\n    .DateRangePicker__WeekdayHeading abbr[title] {\n      color: #909BA9;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.AnalyticsCalendarContainer = AnalyticsCalendarContainer;