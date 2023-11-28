"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SubTitle = exports.RadioCheckWrapper = exports.DaysContent = exports.Container = exports.ButtonWrapper = exports.ArrowIconsWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 30px;\n  margin-top: 0px;\n  margin-bottom: 30px;\n"])));
var RadioCheckWrapper = exports.RadioCheckWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 24px;\n\n  > div {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    width: fit-content;\n\n    span {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n    }\n\n    svg {\n      margin-right: 13px;\n      ", "\n      color: ", ";\n      &.fill {\n        color:", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 13px;\n      "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n\n  button {\n    height: 44px;\n  }\n"])));
var ArrowIconsWrapper = exports.ArrowIconsWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 10px;\n  right: 0px;\n  ", "\n  svg {\n    color: ", ";\n    font-size: 12px;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    right: initial;\n    left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
});
var DaysContent = exports.DaysContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 15px 0px 10px 0px;\n\n  input {\n    width: 100%;\n    height: 44px;\n    border-radius: 8px !important;\n    padding: 0px 15px !important;\n    outline: none !important;\n    border: 1px solid ", " !important;\n    padding-right: 25px;\n    ", "\n    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n      color: ", ";\n      opacity: 1; /* Firefox */\n    }\n\n    &:-ms-input-placeholder { /* Internet Explorer 10-11 */\n      color: ", ";\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: ", ";\n    }\n  }\n\n  b {\n    border: none !important;\n    background: transparent !important;\n    box-shadow: none !important;\n    &:nth-child(2) {\n      i {\n        border: none !important;\n        box-shadow: -1px 1px 0 ", ";\n        transform: rotate(135deg);\n        width: 7px !important;\n        height: 7px !important;\n        margin: 0ex 0px 0px -0.56ex !important;\n      }\n    }\n    &:last-child {\n      i {\n        border: none !important;\n        box-shadow: -1px 1px 0 ", ";\n        transform: rotate(-45deg);\n        width: 7px !important;\n        height: 7px !important;\n        margin: -0.9ex 0px 0px -0.56ex !important;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      padding-left: 25px;\n      padding-right: 15px;\n    "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
});
var SubTitle = exports.SubTitle = _styledComponents.default.h2(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0px;\n"])));