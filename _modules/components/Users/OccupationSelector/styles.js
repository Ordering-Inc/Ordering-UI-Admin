"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.Option = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 20px;\n\n  .select-wrapper {\n    .select {\n      border: 1px solid ", ";\n      padding: 6px 0;\n      font-size: 14px;\n\n      .header {\n        font-size: 14px;\n        padding: 4px 0;\n      }\n    }\n\n    .list .option {\n      font-size: 14px;\n      padding: 10px;\n    }\n\n    .custom-option {\n      border-top: 1px solid ", ";\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.primary;
});
var Option = exports.Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 4px 0;\n"])));