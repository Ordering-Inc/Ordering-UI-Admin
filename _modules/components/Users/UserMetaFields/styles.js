"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSpinnerLoader = exports.WrapMetaFields = exports.SkeletonItem = exports.RoundBorder = exports.NoMetaField = exports.MetaContainer = exports.MetaAddForm = exports.MetaAddContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WrapMetaFields = exports.WrapMetaFields = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 10px;\n  box-sizing: border-box;\n  input {\n    color: ", ";\n    &::placeholder,\n    &::-webkit-input-placeholder {\n      color: ", ";\n    }\n    &:-ms-input-placeholder {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightGray;
});
var MetaContainer = exports.MetaContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 20px;\n  color: ", ";\n\n  .meta_type {\n    width: 25%;\n    font-size: 14px;\n    margin-top: 10px;\n  }\n  .meta_key {\n    width: 25%;\n    padding: 0 10px;\n    box-sizing: border-box;\n  }\n\n  .meta_value {\n    flex: 1;\n    word-break: break-all;\n    display: flex;\n    column-gap: 10px;\n    > div {\n      width: 100%;\n    }\n    svg {\n      font-size: 16px;\n      margin-top: 14px;\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});
var MetaAddContainer = exports.MetaAddContainer = (0, _styledComponents.default)(MetaContainer)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  input {\n    border: 1px solid #DEE2E6;\n    border-radius: 8px;\n    padding: 10px 15px;\n    outline: none;\n    font-size: 14px;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .meta_type {\n    margin-top: 0px;\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n    }\n    div {\n      color: ", ";\n    }\n    .select {\n      background-color: ", ";\n      border: none;\n    }\n    ", "\n  }\n\n  button {\n    svg {\n      color: ", " !important;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      .list {\n        left: initial;\n      }\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      .list {\n        right: initial;\n      }\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});
var RoundBorder = exports.RoundBorder = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: 1px solid #DEE2E6;\n  border-radius: 8px;\n  padding: 10px 15px;\n  font-size: 14px;\n  color: ", ";\n  overflow: hidden;\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
});
var NoMetaField = exports.NoMetaField = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 14px;\n"])));
var MetaAddForm = exports.MetaAddForm = _styledComponents.default.form(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  button[type='submit'] {\n    outline: none;\n    background: transparent;\n    border: none;\n    padding: 0px;\n    height: fit-content\n  }\n\n  .select-input {\n    width: 100%;\n\n    svg {\n      color: #000;\n    }\n  }\n  \n  .json_editor {\n    width: 100%;\n    height: 300px;\n    > div {\n      height: 100%;\n    }\n    .jsoneditor {\n      border: 1px solid ", ";\n      > div.jsoneditor-menu {\n        background-color: ", ";\n        border-bottom: 1px solid ", ";\n      }\n    }\n    .jsoneditor-search {\n      display: none;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var SkeletonItem = exports.SkeletonItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n\n  span {\n    border-radius: 8px;\n  }\n"])));
var WrapperSpinnerLoader = exports.WrapperSpinnerLoader = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  > div {\n    position: absolute;\n    top: 0px;\n  }\n"])));