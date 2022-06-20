"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWrapper = exports.OriginalImageWrapper = exports.LevelNameWrapper = exports.LastWrapper = exports.ImageWrapper = exports.Container = exports.ButtonWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 17px;\n  ", "\n  min-width: 450px;\n"])), function (_ref) {
  var isTitle = _ref.isTitle;
  return isTitle && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-bottom: 9px;\n  "])));
});

exports.Container = Container;

var OriginalImageWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 43px;\n  margin-right: 20px;\n\n  ", "\n\n  span {\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n    margin-right: 0px;\n  "])));
});

exports.OriginalImageWrapper = OriginalImageWrapper;
var ImageWrapper = (0, _styledComponents.default)(OriginalImageWrapper)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding-left: 2px;\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content:center;\n    box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);\n    height: 43px;\n    border-radius: 8px;\n    background-color: ", ";\n    position: relative;\n    cursor: -webkit-grab;\n    cursor: grab;\n    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n    svg {\n      color: #ADB5BD;\n      font-size: 16px;\n    }\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding-left: 0px;\n    padding-right: 2px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
exports.ImageWrapper = ImageWrapper;

var LevelNameWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex: 1;\n  > input {\n    width: 100%;\n  }\n  span {\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])));

exports.LevelNameWrapper = LevelNameWrapper;

var LastWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 95px;\n  margin: 0px 12px;\n\n  > input {\n    width: 100%;\n  }\n  span {\n    font-size: 14px;\n    line-height: 24px;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 576px) {\n    margin: 0px 24px;\n  }\n"])));

exports.LastWrapper = LastWrapper;

var PointsWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 60px;\n  > input {\n    width: 100%;\n  }\n  span {\n    font-size: 14px;\n    line-height: 24px;\n  }\n\n  @media (min-width: 576px) {\n    width: 95px;\n  }\n"])));

exports.PointsWrapper = PointsWrapper;

var ButtonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 30px;\n  margin-left: 10px;\n  ", "\n\n  @media (min-width: 576px) {\n    margin-left: 17px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 17px;\n      margin-left: 0px;\n    "])));
});

exports.ButtonWrapper = ButtonWrapper;