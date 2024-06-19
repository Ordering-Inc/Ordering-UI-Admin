"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.BusinessVideoPathWrapper = exports.BusinessAddVideoWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var BusinessVideoPathWrapper = exports.BusinessVideoPathWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #E9ECEF;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: ", ";\n  \n  span {\n    max-width: calc(100% - 40px);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 14px;\n  }\n  p {\n    color: ", ";\n    margin: 0px;\n    font-size: 14px;\n    cursor: pointer;\n    user-select: none;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.danger;
});
var BusinessAddVideoWrapper = exports.BusinessAddVideoWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  input {\n    width: calc(100% - 80px);\n  }\n\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));