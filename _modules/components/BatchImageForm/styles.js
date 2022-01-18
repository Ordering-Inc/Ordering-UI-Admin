"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadedImages = exports.IssueBoard = exports.Action = exports.UploadImageIcon = exports.UploadImageIconContainer = exports.SkeletonWrapper = exports.BatchImages = exports.ImageInput = exports.ImageIssue = exports.BatchUploadForm = exports.FormContainer = exports.Conditions = exports.ConditionTitle = exports.UploadConditions = exports.Title = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.Container = Container;

var Title = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  h2 {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 30px;\n    margin: 0;\n    color: ", ";\n  }\n  @media (min-width: 768px) {\n    margin-bottom: 25px;\n    h2 {\n      font-size: 24px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.Title = Title;

var UploadConditions = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n"])));

exports.UploadConditions = UploadConditions;

var ConditionTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-bottom: 9px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: ", ";\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 28px;\n  }\n"])), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});

exports.ConditionTitle = ConditionTitle;

var Conditions = _styledComponents.default.ol(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  li {\n    margin: 0;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n  }\n  @media (min-width: 768px) {\n    padding-left: 20px;\n    li {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
});

exports.Conditions = Conditions;

var FormContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    margin-top: 30px;\n  }\n"])));

exports.FormContainer = FormContainer;

var BatchUploadForm = _styledComponents.default.form(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  margin: 0 auto;\n\n  @media (min-width: 768px) {\n    width: 50%;\n  }\n"])));

exports.BatchUploadForm = BatchUploadForm;

var ImageIssue = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  p {\n    margin: 0;\n    margin-bottom: 9px;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 21px;\n  }\n  ul {\n    padding-left: 0px;\n    margin-bottom: 0;\n    list-style-type: circle;\n    li {\n      display: block;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      line-height: 24px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: 50%;\n    padding: 0 20px;\n    border-left: 1px solid #E9ECEF;\n    margin-left: 25px;\n    &:after {\n      content:'';\n      position: absolute;\n      left: -1px;\n      bottom: 0;\n      background-color: #fff;\n      width: 2px;\n      height: 55px;\n    }\n  }\n  \n"])));

exports.ImageIssue = ImageIssue;

var ImageInput = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 20px;\n  @media (min-width: 768px) {\n    padding: 0px;\n  }\n"])));

exports.ImageInput = ImageInput;

var BatchImages = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position:relative;\n  width: 100%;\n  .multiple-image-uploader {\n    position: relative;\n    width: 100%;\n    padding-top: 75%; \n  }\n"])));

exports.BatchImages = BatchImages;

var SkeletonWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 11px;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 20;\n  .loader-wrapper {\n    width: 40px;\n    height: 40px;\n    justify-content: center;\n    align-items: center;\n  }\n  .loader {\n      width: 30px;\n      height: 30px;\n      top: 50%;\n      left: 50%;\n      border-radius: 60px;\n      animation: loader 0.8s linear infinite;\n      -webkit-animation: loader 0.8s linear infinite;\n  }\n\n  @keyframes loader {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n      border: 4px solid #2C7BE5;\n      border-left-color: transparent;\n    }\n    50% {\n      -webkit-transform: rotate(180deg);\n      transform: rotate(180deg);\n      border: 4px solid ", ";\n      border-left-color: transparent;\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n      border: 4px solid ", ";\n      border-left-color: transparent;\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.06, '#2C7BE5');
}, function () {
  return (0, _polished.darken)(0.03, '#2C7BE5');
});

exports.SkeletonWrapper = SkeletonWrapper;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background: #E9ECEF;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n  position:  absolute;\n  padding:10px;\n  border-radius: 7.6px;\n"])));

exports.UploadImageIconContainer = UploadImageIconContainer;

var UploadImageIcon = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #ADB5BD;\n  border: 1px dashed #fff;\n  width: 100%;\n  height: 100%;\n  span {\n    margin: 0;\n  }\n  svg {   \n    width: 45px;\n    height: 45px;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var Action = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n  padding-top: 0;\n\n  button {\n    width: 100%;\n    @media (min-width: 768px) {\n      width: fit-content;\n    }\n  }\n\n  @media (min-width: 768px) {\n    padding: 0px;\n    padding-top: 20px;\n  }\n"])));

exports.Action = Action;

var IssueBoard = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: fit-content;\n  border-radius: 7.6px;\n  padding: 10px;\n  border: 1px ridge #f2f2f2;\n  max-height: 150px;\n  overflow-y: auto;\n  ", "\n"])), function (props) {
  return props.emptyboard && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    min-height: 75px;\n  "])));
});

exports.IssueBoard = IssueBoard;

var UploadedImages = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  padding: 11px;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  z-index: 20;\n  img {\n    width: 18.6%;\n    min-height: 24%;\n    object-fit: cover;\n    margin: 2px;\n  }\n\n"])));

exports.UploadedImages = UploadedImages;