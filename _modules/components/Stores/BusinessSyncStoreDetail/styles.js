"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWrapper = exports.LinkItemWrapper = exports.Header = exports.Content = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h2 {\n    margin-bottom: 30px;\n    margin-top: 0px;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 30px;\n  }\n"])));
var Content = exports.Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
var LinkItemWrapper = exports.LinkItemWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 28px;\n  border-bottom: 1px solid ", ";\n\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var LinkWrapper = exports.LinkWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 18px;\n\n  > a {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n  }\n  button {\n    svg {\n      width: 16px;\n      height: 16px;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
});