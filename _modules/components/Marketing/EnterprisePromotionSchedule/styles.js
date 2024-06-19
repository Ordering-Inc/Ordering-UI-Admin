"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ScheduleContainer = exports.ScheduleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 5px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    border-bottom: 1px solid ", ";\n    padding-bottom: 32px;\n    margin: 0;\n  }\n\n  > button {\n    height: 44px;\n    margin-top: 36px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});