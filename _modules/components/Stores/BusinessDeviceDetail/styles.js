"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.RightHeader = exports.Option = exports.Logo = exports.FormControl = exports.DetailHeder = exports.Container = exports.ActionSelectorWrapper = exports.ActionButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n"])));
exports.Container = Container;
var DetailHeder = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  ", "\n  > div:first-child {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    > span {\n      font-weight: bold;\n      font-size: 20px;\n    }\n    label {\n      margin: 0 20px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "])));
});
exports.DetailHeder = DetailHeder;
var RightHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
exports.RightHeader = RightHeader;
var ActionSelectorWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  .select {\n    border: none;\n\n    > div:first-child {\n      padding: 5px;\n      border-radius: 8px;\n      svg {\n        font-size: 20px;\n      }\n      &:hover {\n        background: ", " !important;\n      }\n      &:active {\n        background: ", " !important;\n      }\n    }\n    .select-arrow {\n      display: none;\n    }\n    .list {\n      .list-wrapper {\n        > div {\n          font-size: 14px;\n          color: #E63757;\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});
exports.ActionSelectorWrapper = ActionSelectorWrapper;
var ActionButtonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));
exports.ActionButtonWrapper = ActionButtonWrapper;
var FormControl = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    margin-bottom: 9px;\n  }\n  input {\n    width: 100%;\n    height: 44px;\n  }\n"])));
exports.FormControl = FormControl;
var SelectWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 25px 0;\n\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    margin-bottom: 9px;\n  }\n\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      background-color: ", ";\n      height: 43px;\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      color: ", ";\n    }\n    .list {\n      width: 100%;\n      background-color: ", ";\n      border: none;\n      \n      .search-bar-container {\n        padding: 10px;\n        input {\n          background-color: transparent;\n          height: 44px;\n        }\n      }\n\n      .list-wrapper {\n        max-height: 300px;\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
});
exports.SelectWrapper = SelectWrapper;
var Option = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n  word-break: break-all;\n  svg {\n    min-width: 25px;\n    height: 25px;\n    margin-right: 15px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n      margin-right: 0;\n    "])));
});
exports.Option = Option;
var Logo = _styledComponents.default.img(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  min-width: 25px;\n  border-radius: 8px;\n  margin-right: 15px;\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n    margin-right: 0;\n  "])));
});
exports.Logo = Logo;