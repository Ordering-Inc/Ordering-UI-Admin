"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UreadMessageAlert = exports.StripeLink = exports.PrinterSelectContainer = exports.PrinterSelect = exports.OrderDetailsHeaderContainer = exports.ButtonGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var OrderDetailsHeaderContainer = exports.OrderDetailsHeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column-reverse;\n    h1 {\n      width: 100%;\n      font-size: 20px;\n      margin: 0px;\n      font-weight: 700;\n      word-break: break-word;\n    }\n    h2 {\n      width: 100%;\n      font-size: 18px;\n      margin: 0px;\n      font-weight: 700;\n      word-break: break-word;\n    }\n    > div {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      margin-bottom: 20px;\n    }\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0px;\n    padding: 5px 0;\n  }\n\n  @media (min-width: 768px) {\n    > div {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n    > div {\n      > div {\n        margin-bottom: 0px;\n      }\n    }\n  }\n"])));
var ButtonGroup = exports.ButtonGroup = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > button {\n    position: relative;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n      "])));
});
var UreadMessageAlert = exports.UreadMessageAlert = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -9px;\n\n  ", "\n  svg {\n    font-size: 40px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: -13px;\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    right: -13px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});
var StripeLink = exports.StripeLink = _styledComponents.default.a(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var PrinterSelectContainer = exports.PrinterSelectContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-right: 8px;\n"])));
var PrinterSelect = exports.PrinterSelect = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n  padding: 0.5rem 0;\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0,0,0,0.12);\n  z-index: 12;\n  background-color: ", ";\n\n  button {\n    height: auto;\n    padding: 0.25rem 1.5rem;\n    font-size: 12px;\n    border-radius: 0px;\n    font-weight: 400;\n    color: ", ";\n    &:hover {\n      background-color: #f5f5f5;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.headingColor;
});