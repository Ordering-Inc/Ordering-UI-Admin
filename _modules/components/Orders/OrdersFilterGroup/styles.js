"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRow = exports.WarningMessage = exports.SelectWrapper = exports.Option = exports.MultiSelectContainer = exports.FilterGroupListContainer = exports.ButtonGroup = exports.AddMetaFiled = exports.AddInputWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FilterGroupListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 15px 20px;\n  > h1 {\n    font-size: 24px;\n    font-weight: 600;\n    margin-top: 10px;\n    margin-bottom: 30px;\n  }\n\n  & > div {\n    width: 48%;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n    & > div {\n      width: 100%;\n    }\n  }\n\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n"])));
exports.FilterGroupListContainer = FilterGroupListContainer;
var WrapperRow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100% !important;\n  flex-direction: column;\n  justify-content: space-between;\n\n  & > div {\n    width: 100%;\n    height: 57px;\n    margin-bottom: 20px;\n    background-color: ", ";\n    border: none;\n    font-size: 14px;\n    border-radius: 8px;\n    > div:first-child {\n      height: 100%;\n    }\n  }\n\n  .order-status-multi-select {\n    p {\n      padding: 0;\n      color: ", " !important;\n    }\n  }\n\n  .date-filter-container {\n    z-index: 100;\n  }\n\n  > input {\n    width: 100%;\n    height: 57px;\n    margin-bottom: 20px;\n    padding: 10px 25px;\n    box-sizing: border-box;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    -moz-appearance: textfield;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    & > div {\n      width: 48%;\n    }\n\n    > input {\n      width: 48%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.WrapperRow = WrapperRow;
var MultiSelectContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      height: 54px;\n      > div:first-child {\n        padding: 5px;\n        border: none;\n      }\n    }\n\n    > div:not(:first-child) {\n      > div {\n        > div {\n          > div {\n            border: none;\n          }\n        }\n      }\n    }\n  }\n"])));
exports.MultiSelectContainer = MultiSelectContainer;
var ButtonGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "])));
});
exports.ButtonGroup = ButtonGroup;
var AddInputWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  background-color: transparent !important;\n  input {\n    flex: 1;\n    height: 57px;\n  }\n  button {\n    width: 30px;\n    height: 30px;\n    margin-left: 10px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
exports.AddInputWrapper = AddInputWrapper;
var AddMetaFiled = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  width: 100%;\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.AddMetaFiled = AddMetaFiled;
var SelectWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    > div {\n    width: 100%;\n    border: none;\n    height: 100%;\n\n    > div:first-child {\n      height: 100%;\n      background-color: ", ";\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      padding-left: 20px;\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n      \n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundary;
});
exports.SelectWrapper = SelectWrapper;
var Option = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  padding: 5px;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Option = Option;
var WarningMessage = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  z-index: 10;\n  top: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 6px 15px;\n  box-sizing: border-box;\n  margin: 10px 0px 0px 0px !important;\n\n  right: 0px;\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  span {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n    margin: 0 10px;\n    flex: 1;\n  }\n\n  a {\n    font-size: 12px;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 768px) {\n    padding: 8px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    right: 0px;\n    ", "\n\n    span {\n      white-space: nowrap;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.warning100;
}, function (props) {
  return props.theme.colors.warning;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.warning;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      left: 0px;\n      right: initial;\n    "])));
});
exports.WarningMessage = WarningMessage;