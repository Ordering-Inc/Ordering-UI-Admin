"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWrapper = exports.Description = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  input, textarea {\n    width: 100%;\n  }\n  textarea {\n    height: 80px;\n  }\n  margin-bottom: 35px;\n\n  .select {\n    border: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
var Description = exports.Description = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 10px 0px;\n  span {\n    color: ", ";\n    cursor: pointer;\n    transition: all 0.3s linear;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});