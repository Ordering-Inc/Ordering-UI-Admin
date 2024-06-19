"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeBlock = exports.PreorderTimeWrapper = exports.Margin = exports.BusinessPreorderContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessPreorderContainer = exports.BusinessPreorderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  height: 100%;\n  margin-bottom: 20px;\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 5px;\n    margin-bottom: 48px;\n  }\n\n  > button {\n    height: 44px;\n    position: sticky;\n    top: 100%;\n    margin: 20px 0;\n  }\n"])));
var PreorderTimeWrapper = exports.PreorderTimeWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 5px 0;\n\n  p {\n    font-size: 14px;\n    &.name {\n      margin: 0;\n    }\n    &.description {\n      color: ", ";\n      margin: 5px 0 18px;\n    }\n  }\n  button {\n    margin-top: 20px;\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var TimeBlock = exports.TimeBlock = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  width: fit-content;\n  padding: 8px 11px;\n  color: ", ";\n  \n  > select {\n    margin: 0 5px;\n    border: none;\n    outline: none;\n    color: ", ";\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    &::-ms-expand {\n      display: none;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});
var Margin = exports.Margin = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 20px;\n"])));