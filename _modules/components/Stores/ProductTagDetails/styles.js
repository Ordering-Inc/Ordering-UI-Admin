"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.ProductTagImage = exports.Header = exports.FormInput = exports.FormController = exports.DetailsContainer = exports.ActionSelectorWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DetailsContainer = exports.DetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: auto;\n  width: 100%;\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 52px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n"])));
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-height: calc(100% - 100px);\n  > button {\n    position: sticky;\n    top: 100%;\n    height: 44px;\n  }\n"])));
var ProductTagImage = exports.ProductTagImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 200px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  ", "\n"])), function (_ref) {
  var small = _ref.small;
  return small ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n    text-align: center;\n    font-size: 14px;\n  }\n\n  svg {   \n    width: 45px;\n    height: 45px;\n  }\n"])));
var FormController = exports.FormController = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 38px 0;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 11px;\n  }\n"])));
var ActionSelectorWrapper = exports.ActionSelectorWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n  position: relative;\n  button {\n    background: transparent !important;\n    border: none;\n    padding: 5px;\n    border-radius: 8px;\n\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:hover {\n      background: ", " !important;\n      > svg {\n        color:  #151b26;\n      }\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n      transform: translate(0, 36px) !important;\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        padding: 7px 20px;\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 35px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 35px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryDarkContrast;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
}, function (props) {
  return props.theme.colors.danger;
});