"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.ScheduleSection = exports.ScheduleContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScheduleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > button {\n    height: 44px;\n    margin-top: 50px;\n  }\n  @media (min-width: 1000px) {\n    padding: 20px;\n  }\n"])));

exports.ScheduleContainer = ScheduleContainer;

var ScheduleSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-top: 1px solid #E9ECEF;\n  margin-top: 30px;\n"])));

exports.ScheduleSection = ScheduleSection;

var Title = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.Title = Title;