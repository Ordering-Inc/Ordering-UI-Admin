"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWrapper = exports.Description = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  input, textarea {\n    width: 100%;\n  }\n  textarea {\n    height: 80px;\n  }\n  margin-bottom: 35px;\n\n  .select {\n    border: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});
exports.InputWrapper = InputWrapper;
var ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
exports.ButtonWrapper = ButtonWrapper;
var Description = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 10px 0px;\n  span {\n    color: ", ";\n    cursor: pointer;\n    transition: all 0.3s linear;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.Description = Description;