"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddScheduleButton = exports.ScheduleActionBlock = exports.AddButton = exports.DeleteButton = exports.TimeSelectContainer = exports.TimeSelect = exports.TimeSection = exports.TimeSectionContainer = exports.CheckboxContainer = exports.CheckBoxWrapper = exports.ScheduleBlock = exports.Title = exports.ScheduleSection = exports.ScheduleContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScheduleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media (min-width: 1000px) {\n    padding: 20px;\n  }\n"])));

exports.ScheduleContainer = ScheduleContainer;

var ScheduleSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-top: 1px solid #E9ECEF;\n  margin-top: 30px;\n"])));

exports.ScheduleSection = ScheduleSection;

var Title = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.Title = Title;

var ScheduleBlock = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  border-bottom: 1px solid #E9ECEF;\n"])));

exports.ScheduleBlock = ScheduleBlock;

var CheckBoxWrapper = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  ", "\n\n  svg {\n    font-size: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.CheckBoxWrapper = CheckBoxWrapper;

var CheckboxContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 20%;\n\n  h4 {\n    color: ", ";\n    font-size: 18px;\n    font-weight: 600;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin: 0 10px 0 0;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin: 0 0 0 10px;\n    "])));
});

exports.CheckboxContainer = CheckboxContainer;

var TimeSectionContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: center;\n  > p {\n    margin: 0px;\n    color: ", ";\n  }\n  > div:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.TimeSectionContainer = TimeSectionContainer;

var TimeSection = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.TimeSection = TimeSection;

var TimeSelect = _styledComponents.default.select(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-progress-appearance: none;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.TimeSelect = TimeSelect;

var TimeSelectContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 7px;\n  padding: 5px 15px;\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.TimeSelectContainer = TimeSelectContainer;

var DeleteButton = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  svg {\n    color: ", ";\n  }\n"])), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    opacity: 0.6;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.DeleteButton = DeleteButton;

var AddButton = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  svg {\n    color: ", ";\n    font-size: 20px;\n  }\n"])), function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    opacity: 0.6;\n  "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddButton = AddButton;

var ScheduleActionBlock = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.ScheduleActionBlock = ScheduleActionBlock;

var AddScheduleButton = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  svg {\n    color: ", ";\n  }\n"])), function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    opacity: 0.6;\n  "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "])));
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "]))) : (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddScheduleButton = AddScheduleButton;