"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeConnectButton = exports.InputWrapper = exports.InputGroup = exports.Header = exports.FieldName = exports.Container = exports.CloseButton = exports.ActionSelectorWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: auto;\n  transition: 0.3s;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n\n  > button:last-child {\n    margin-top: 20px;\n    position: sticky;\n    top: 100%;\n    width: fit-content;\n    height: 42px;\n    margin-bottom: 20px;\n  }\n\n  > input {\n    background: ", ";\n  }\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "])));
});

exports.Container = Container;

var FieldName = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 30px 0 10px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.FieldName = FieldName;

var Header = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  h1 {\n    font-size: 20px;\n    color: ", ";\n    font-weight: 700;\n    flex: 1;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.Header = Header;

var CloseButton = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 1000px) {\n    display: flex;\n    align-items: center;\n  }\n"])));

exports.CloseButton = CloseButton;

var InputGroup = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));

exports.InputGroup = InputGroup;

var InputWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 48%;\n"])));

exports.InputWrapper = InputWrapper;

var StripeConnectButton = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background: #D4F2FF;\n  border-radius: 7.6px;\n  color: #27BCFD;\n  width: fit-content;\n  padding: 7px 15px;\n  display: flex;\n  align-items: center;\n\n  &:active {\n    background: #258cb9;\n    color: #FFF;\n    span {\n      &:first-child {\n        background: ", ";\n        svg {\n          color: #27BCFD;\n        }\n      }\n    }\n  }\n\n  span {\n    &:first-child {\n      background: #27BCFD;\n      padding: 2px;\n      border-radius: 5px;\n      svg {\n        font-size: 20px;\n        color: #FFF;\n      }\n    }\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;

  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "])));
});

exports.StripeConnectButton = StripeConnectButton;

var ActionSelectorWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: 0 10px;\n  button {\n    background: transparent !important;\n    border: none;\n    padding: 0px 5px;\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:hover {\n      background: ", " !important;\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    button {\n      background: ", " !important;\n    }\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});

exports.ActionSelectorWrapper = ActionSelectorWrapper;