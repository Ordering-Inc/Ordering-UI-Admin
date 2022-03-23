"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SkeletonWrapper = exports.LogoImage = exports.InputWrapper = exports.HeaderImage = exports.FormInputInnerContainer = exports.FormInput = exports.DetailsHeader = exports.BusinessName = exports.BusinessDetailsContainer = exports.ActionsForm = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 20px 20px 20px;\n  position: relative;\n"])));

exports.BusinessDetailsContainer = BusinessDetailsContainer;

var DetailsHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));

exports.DetailsHeader = DetailsHeader;

var BusinessName = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 20px;\n  margin: 0px;\n  font-weight: 700;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});

exports.BusinessName = BusinessName;

var FormInput = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  height: calc(100% - 60px);\n"])));

exports.FormInput = FormInput;

var FormInputInnerContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  height: calc(100% - 60px);\n  padding: 0 5px;\n  overflow: auto;\n"])));

exports.FormInputInnerContainer = FormInputInnerContainer;

var HeaderImage = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 768px) {\n    height: 180px;\n  }\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return !disabled && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    pointer-event: none;\n  "])));
});

exports.HeaderImage = HeaderImage;

var SkeletonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  ", "\n"])), function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});

exports.UploadImageIconContainer = UploadImageIconContainer;

var UploadImageIcon = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n  }\n\n  svg {   \n    ", "\n  }\n"])), function (_ref3) {
  var small = _ref3.small;
  return small ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      width: 25px;\n      height: 25px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      width: 45px;\n      height: 45px;\n    "])));
});

exports.UploadImageIcon = UploadImageIcon;

var InputWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n\n  label {\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n\n  input,\n  textarea {\n    color: ", ";\n    font-size: 14px;\n  }\n\n  .select {\n    font-size: 14px;\n  }\n\n  .input-autocomplete {\n    width: 100%;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    font-size: 14px;\n    padding: 10px 15px;\n    outline: none;\n    ::placeholder {\n      color: #B1BCCC;\n    }\n\n    &:-ms-input-placeholder {\n      color: #B1BCCC;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #B1BCCC;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme$colors;

  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.borderColor;
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.InputWrapper = InputWrapper;

var ActionsForm = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  padding-top: 20px;\n  > button {\n    height: 42px;\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
});

exports.ActionsForm = ActionsForm;

var LogoImage = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  transform: translate3d(20px, -30px, 0px);\n  height: 60px;\n  width: 60px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref4) {
  var disabled = _ref4.disabled;
  return !disabled && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    pointer-event: none;\n  "])));
});

exports.LogoImage = LogoImage;

var WrapperMap = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  margin-top: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  @media (min-width: 768px) {\n    height: 200px;\n  }\n"])));

exports.WrapperMap = WrapperMap;