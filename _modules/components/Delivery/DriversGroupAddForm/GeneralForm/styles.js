"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n\n  label {\n    font-size: 14px;\n  }\n\n  div {\n    font-size: 14px;\n  }\n\n  .select {\n    padding: 11px 0;\n    border: none;\n    background-color: ", ";\n  }\n  .list {\n    .options {\n      > div {\n        > div {\n          padding: 7px 10px;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});