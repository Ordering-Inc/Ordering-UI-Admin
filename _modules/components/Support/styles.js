"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportList = exports.SupportContent = exports.SupportContainer = exports.HeaderTitleContainer = exports.HeaderContentWrapper = exports.ActionBtnWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SupportContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));

exports.SupportContainer = SupportContainer;

var HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});

exports.HeaderTitleContainer = HeaderTitleContainer;

var HeaderContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n\n  h1 {\n    font-weight: bold;\n    font-size: 24px;\n    color: ", ";\n    margin-top: 0;\n    margin-bottom: 5px;\n    text-align: center;\n    \n    span {\n      color: ", ";\n    }\n  }\n\n  p {\n    text-align: center;\n    font-weight: 500;\n    font-size: 16px;\n    margin: 0;\n  }\n\n  @media (min-width: 769px) {\n    margin-top: 150px;\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.primary;
});

exports.HeaderContentWrapper = HeaderContentWrapper;

var SupportList = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n\n  @media (min-width: 769px) {\n    margin-top: 65px;\n    flex-direction: row;\n  }\n"])));

exports.SupportList = SupportList;

var SupportContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 35px;\n  color: ", ";\n  padding: 0;\n\n  h3 {\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 10px;\n\n    span {\n      text-transform: capitalize;\n      text-decoration: underline;\n    }\n  }\n\n  p {\n    text-align: center;\n    font-size: 14px;\n    margin: 0;\n  }\n\n  @media (min-width: 769px) {\n    width: 50%;\n    padding: 0 10px;\n  }\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.headingColor;
});

exports.SupportContent = SupportContent;

var ActionBtnWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-top: 25px;\n\n  button {\n    min-width: 100%;\n    height: 44px;\n\n    @media (min-width: 576px) {\n      min-width: 290px;\n    }\n  }\n\n  @media (min-width: 769px) {\n    margin-top: 45px;\n  }\n"])));

exports.ActionBtnWrapper = ActionBtnWrapper;