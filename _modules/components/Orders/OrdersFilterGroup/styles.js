"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRow = exports.WarningMessage = exports.SelectWrapper = exports.Option = exports.MultiSelectContainer = exports.FilterGroupListContainer = exports.ButtonGroup = exports.AddMetaFiled = exports.AddInputWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var FilterGroupListContainer = exports.FilterGroupListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 15px 20px;\n  > h1 {\n    font-size: 24px;\n    font-weight: 600;\n    margin-top: 10px;\n    margin-bottom: 30px;\n  }\n\n  & > div {\n    width: 48%;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n    & > div {\n      width: 100%;\n    }\n  }\n\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n"])));
var WrapperRow = exports.WrapperRow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100% !important;\n  flex-direction: column;\n  justify-content: space-between;\n\n  & > div {\n    width: 100%;\n    height: 57px;\n    margin-bottom: 20px;\n    background-color: ", ";\n    border: none;\n    font-size: 14px;\n    border-radius: 8px;\n    > div:first-child {\n      height: 100%;\n    }\n  }\n\n  .order-status-multi-select {\n    p {\n      padding: 0;\n      color: ", " !important;\n    }\n  }\n\n  .date-filter-container {\n    z-index: 100;\n  }\n\n  > input {\n    width: 100%;\n    height: 57px;\n    margin-bottom: 20px;\n    padding: 10px 25px;\n    box-sizing: border-box;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    -moz-appearance: textfield;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    & > div {\n      width: 48%;\n    }\n\n    > input {\n      width: 48%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
});
var MultiSelectContainer = exports.MultiSelectContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      height: 54px;\n      > div:first-child {\n        padding: 5px;\n        border: none;\n      }\n    }\n\n    > div:not(:first-child) {\n      > div {\n        > div {\n          > div {\n            border: none;\n          }\n        }\n      }\n    }\n  }\n"])));
var ButtonGroup = exports.ButtonGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "])));
});
var AddInputWrapper = exports.AddInputWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  background-color: transparent !important;\n  input {\n    flex: 1;\n    height: 57px;\n  }\n  button {\n    width: 30px;\n    height: 30px;\n    margin-left: 10px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var AddMetaFiled = exports.AddMetaFiled = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  width: 100%;\n"])), function (props) {
  return props.theme.colors.primary;
});
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    > div {\n    width: 100%;\n    border: none;\n    height: 100%;\n\n    > div:first-child {\n      height: 100%;\n      background-color: ", ";\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      padding-left: 20px;\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n      \n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundary;
});
var Option = exports.Option = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  padding: 5px;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
var WarningMessage = exports.WarningMessage = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  z-index: 100;\n  bottom: 40px;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 0px 15px;\n  box-sizing: border-box;\n  margin: 10px 0px 0px 0px !important;\n\n  right: 0px;\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  span {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n    margin: 0 10px;\n    flex: 1;\n  }\n\n  a {\n    font-size: 12px;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 768px) {\n    padding: 0px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    ", "\n    ", "\n    ", "\n\n    span {\n      white-space: nowrap;\n    }\n  }\n"])), function (props) {
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
}, function (_ref) {
  var isLateralBar = _ref.isLateralBar;
  return isLateralBar ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      right: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      right: 0px;\n    "])));
}, function (_ref2) {
  var isLateralBar = _ref2.isLateralBar;
  return isLateralBar ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      bottom: -25px;\n    "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      bottom: -20px;\n    "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      left: 0px;\n      right: initial;\n    "])));
});