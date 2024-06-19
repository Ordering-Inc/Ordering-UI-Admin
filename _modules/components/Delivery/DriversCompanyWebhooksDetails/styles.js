"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitle = exports.InputWrapper = exports.FormContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var FormContainer = exports.FormContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: calc(100% - 120px);\n  button[type='submit'] {\n    position: sticky;\n    top: 100%;\n    height: 42px;\n  }\n"])));
var SubTitle = exports.SubTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n\n  label {\n    font-size: 14px;\n  }\n\n  div {\n    font-size: 14px;\n  }\n\n  .select {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    border: none;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});