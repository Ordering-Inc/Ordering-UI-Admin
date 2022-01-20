"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadCsvInputContainer = exports.InputWrapper = exports.Header = exports.FormWrapper = exports.FormInput = exports.CloseButtonWrapper = exports.ActionsForm = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  position: relative;\n"])));

exports.FormWrapper = FormWrapper;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  color: ", ";\n  font-size: 24px;\n  margin: 0px;\n  font-weight: 600;\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});

exports.Header = Header;

var FormInput = _styledComponents.default.form(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));

exports.FormInput = FormInput;

var InputWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  position: relative;\n\n  label {\n    color: ", ";\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n\n  input,\n  textarea {\n    color: ", ";\n  }\n\n  button {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    font-size: 14px;\n    line-height: 21px;\n    padding: 10px 15px;\n  }\n\n  .select {\n    background-color: ", ";\n    border: none;\n\n    div {\n      font-size: 14px;\n      color: ", ";\n    }\n\n     >div:first-child {\n      padding: 5px 15px;\n     }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
});

exports.InputWrapper = InputWrapper;

var ActionsForm = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 100px;\n  > button {\n    height: 42px;\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
});

exports.ActionsForm = ActionsForm;

var UploadCsvInputContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  input {\n    width: 100%;\n    &:read-only{\n      cursor: pointer;\n      color: #748194;\n    }\n  }\n"])));

exports.UploadCsvInputContainer = UploadCsvInputContainer;

var CloseButtonWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 30px;\n\n  ", "\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    right: 10px;\n  "])));
});

exports.CloseButtonWrapper = CloseButtonWrapper;