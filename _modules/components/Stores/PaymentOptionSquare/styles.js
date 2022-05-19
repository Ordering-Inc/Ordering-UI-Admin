"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SquareInfoContainer = exports.SquareButtonWrapper = exports.SandboxWrapper = exports.Header = exports.FormController = exports.FormContainer = exports.Container = exports.CloseButton = exports.ActionSelectorWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: auto;\n  transition: 0.3s;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.Container = Container;

var Header = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  h1 {\n    font-size: 20px;\n    color: ", ";\n    font-weight: 700;\n    flex: 1;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.Header = Header;

var ActionSelectorWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0 10px;\n  button {\n    background: transparent !important;\n    border: none;\n    padding: 0px 5px;\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:hover {\n      background: ", " !important;\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    button {\n      background: ", " !important;\n    }\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"])), function (props) {
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

var CloseButton = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 1000px) {\n    display: flex;\n    align-items: center;\n  }\n"])));

exports.CloseButton = CloseButton;

var SquareInfoContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n"])));

exports.SquareInfoContainer = SquareInfoContainer;

var SquareButtonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  > button {\n    height: 44px;\n    display: flex;\n    align-items: center;\n\n    svg {\n      font-size: 20px;\n      color: ", ";\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.black;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
});

exports.SquareButtonWrapper = SquareButtonWrapper;

var FormContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  > button {\n    height: 44px;\n    margin-top: 20px;\n  }\n"])));

exports.FormContainer = FormContainer;

var FormController = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n"])));

exports.FormController = FormController;

var SandboxWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 10px 0 25px;\n\n  > span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});

exports.SandboxWrapper = SandboxWrapper;