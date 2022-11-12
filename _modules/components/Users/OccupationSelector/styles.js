"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.Option = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SelectWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 20px;\n\n  .select-wrapper {\n    .select {\n      border: 1px solid ", ";\n      padding: 6px 0;\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.SelectWrapper = SelectWrapper;
var Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 4px 0;\n"])));
exports.Option = Option;