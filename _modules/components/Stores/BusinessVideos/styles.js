"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.BusinessVideoPathWrapper = exports.BusinessAddVideoWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
exports.Container = Container;
var BusinessVideoPathWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #E9ECEF;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: ", ";\n  \n  span {\n    max-width: calc(100% - 40px);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 14px;\n  }\n  p {\n    color: ", ";\n    margin: 0px;\n    font-size: 14px;\n    cursor: pointer;\n    user-select: none;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.danger;
});
exports.BusinessVideoPathWrapper = BusinessVideoPathWrapper;
var BusinessAddVideoWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  input {\n    width: calc(100% - 80px);\n  }\n\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));
exports.BusinessAddVideoWrapper = BusinessAddVideoWrapper;