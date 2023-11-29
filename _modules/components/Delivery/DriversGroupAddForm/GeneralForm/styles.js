"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n\n  label {\n    font-size: 14px;\n  }\n\n  div {\n    font-size: 14px;\n  }\n\n  .select {\n    padding: 11px 0;\n    border: none;\n    background-color: ", ";\n  }\n  .list {\n    .options {\n      > div {\n        > div {\n          padding: 7px 10px;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.InputWrapper = InputWrapper;