"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ScheduleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 30px;\n  }\n  > div {\n    border-top: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.ScheduleContainer = ScheduleContainer;