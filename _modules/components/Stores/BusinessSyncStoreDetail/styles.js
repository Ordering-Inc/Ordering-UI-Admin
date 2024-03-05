"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWrapper = exports.LinkItemWrapper = exports.Header = exports.Content = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n"])));
exports.Container = Container;
var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h2 {\n    margin-bottom: 30px;\n    margin-top: 0px;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 30px;\n  }\n"])));
exports.Header = Header;
var Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
exports.Content = Content;
var LinkItemWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 28px;\n  border-bottom: 1px solid ", ";\n\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.LinkItemWrapper = LinkItemWrapper;
var LinkWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 18px;\n\n  > a {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n  }\n  button {\n    svg {\n      width: 16px;\n      height: 16px;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.LinkWrapper = LinkWrapper;