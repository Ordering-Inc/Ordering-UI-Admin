"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.BusinessOwnerSelectorWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessOwnerSelectorWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  & > .select {\n    width: 100%;\n    & > .list {\n      width: 100%;\n      & > .list-wrapper > div > div {\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n    }\n  }\n"])));
exports.BusinessOwnerSelectorWrapper = BusinessOwnerSelectorWrapper;
var Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  white-space: nowrap;\n  font-size: 14px;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Option = Option;