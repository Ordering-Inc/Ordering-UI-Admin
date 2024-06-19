"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.BusinessOwnerSelectorWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessOwnerSelectorWrapper = exports.BusinessOwnerSelectorWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  & > .select {\n    width: 100%;\n    & > .list {\n      width: 100%;\n      & > .list-wrapper > div > div {\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n    }\n  }\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  white-space: nowrap;\n  font-size: 14px;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});