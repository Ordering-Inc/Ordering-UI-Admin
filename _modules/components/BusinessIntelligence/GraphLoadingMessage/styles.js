"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingMessage = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var LoadingMessage = exports.LoadingMessage = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  color: ", ";\n  margin-top: 10px;\n\n  @keyframes spinner-content {\n    0% { transform: rotate(0) }\n    100% { transform: rotate(360deg) }\n  }\n\n  svg {\n    margin: 0 5px;\n    animation: spinner-content 1.85s linear infinite;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});