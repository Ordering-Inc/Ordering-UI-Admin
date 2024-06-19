"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSecundary = exports.InputPrimary = exports.InputGroupRight = exports.InputGroupPrimary = exports.InputGroupLeft = exports.InputGroup = exports.Input = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _Buttons = require("../Buttons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Input = exports.Input = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  color: #707070;\n  border: 1px solid #707070;\n  border-radius: 30px;\n  font-size: 16px;\n  padding: 7px 15px;\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  ", "\n\n  &::placeholder,\n  &::-webkit-input-placeholder {\n    color: #959595;\n  }\n  &:-ms-input-placeholder {\n    color: #959595;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var w = _ref.w;
  return w && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 20%;\n  "])));
});
var InputGroup = exports.InputGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n\n  & > ", ":not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-left: 0;\n    padding-left: 0;\n  }\n\n  & > ", ":not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: 0;\n    padding-right: 0;\n  }\n\n"])), Input, Input);
var InputGroupLeft = exports.InputGroupLeft = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-radius: 34px 0 0 34px;\n  line-height: 34px;\n  padding-left: 7px;\n  padding-right: 7px;\n  font-size: 16px;\n  border-width: 1px;\n  height: 34px;\n  border-style: solid;\n  border-right-width: 0;\n  ", "\n\n  & ", " {\n    margin-left: -7px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        border-left-width: 0;\n        border-right-width: initial;\n    "])));
}, _Buttons.Button, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: -7px;\n        margin-left: 0\n    "])));
});
var InputGroupRight = exports.InputGroupRight = (0, _styledComponents.default)(InputGroupLeft)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-radius: 0 34px 34px 0;\n  line-height: 34px;\n  border-right-width: 1px;\n  border-left-width: 0;\n\n  ", "\n\n  & ", " {\n    margin-left: 0;\n    margin-right: -7px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        border-left-width: 1px;\n        border-right-width: 0;\n    "])));
}, _Buttons.Button, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: -7px;\n        margin-right: 0\n    "])));
});
var InputPrimary = exports.InputPrimary = (0, _styledComponents.default)(Input)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.primary);
});
var InputSecundary = exports.InputSecundary = (0, _styledComponents.default)(Input)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return ((_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});
var InputGroupPrimary = exports.InputGroupPrimary = (0, _styledComponents.default)(InputGroup)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  & > ", " {\n    color: ", ";\n    border-color: ", ";\n  }\n"])), InputGroupLeft, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});