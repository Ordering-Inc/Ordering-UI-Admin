"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepItem = exports.InputWrapper = exports.DotLine = exports.Container = exports.CheckboxWrapper = exports.AdvancedOptionContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 15px;\n  }\n"])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n"])));
var CheckboxWrapper = exports.CheckboxWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 50px;\n\n  input {\n    margin-top: 5px;\n  }\n  div {\n    p {\n      margin: 0px;\n      &:first-child {\n        font-size: 14px;\n      }\n      &:last-child {\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
var AdvancedOptionContainer = exports.AdvancedOptionContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n  > div:not(:last-child) {\n    margin-bottom: 45px;\n  }\n"])));
var DotLine = exports.DotLine = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 1px;\n  background-color: ", ";\n  height: calc(100% - 20px);\n  top: 10px;\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    right: 18px;\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    left: 18px;\n  "])));
});
var StepItem = exports.StepItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  div.number {\n    border-radius: 50%;\n    border: 1px solid ", ";\n    width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    z-index: 10;\n    background: ", ";\n  }\n\n  span {\n    font-size: 14px;\n    margin: 0 18px;\n    width: 200px;\n  }\n\n  input {\n    width: 120px;\n  }\n\n  img {\n    max-width: 65px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 50px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 50px;\n    "])));
});