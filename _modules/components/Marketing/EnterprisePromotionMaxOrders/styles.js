"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.InputWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 5px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n\n  > button {\n    height: 44px;\n    margin-top: 180px;\n  }\n"])));
exports.Container = Container;
var InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 27px 0;\n\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n\n  .select {\n    > div:first-child {\n      padding-top: 4px;\n      padding-bottom: 4px;\n      font-size: 14px;\n    }\n  }\n"])));
exports.InputWrapper = InputWrapper;
var Option = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  white-space: nowrap;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Option = Option;