"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.ProdcutGalleryContainer = exports.GalleryItemBottom = exports.GalleryItem = exports.GalleryImagesContainer = exports.GalleryImage = exports.DropDownWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProdcutGalleryContainer = exports.ProdcutGalleryContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 10px;\n  position: relative;\n  overflow-x: hidden;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 30px;\n    padding: 0 10px;\n  }\n"])));
var GalleryImagesContainer = exports.GalleryImagesContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var GalleryItem = exports.GalleryItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 130px;\n  margin: 10px;\n"])));
var GalleryItemBottom = exports.GalleryItemBottom = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 30px 0;\n\n  > input {\n    width: 100%;\n    font-size: 14px;\n    ", "\n    outline: none;\n  }\n"])), function (_ref) {
  var isAdd = _ref.isAdd;
  return isAdd ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border: none;\n    "])));
});
var GalleryImage = exports.GalleryImage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 130px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  svg {\n    color: #FFF;\n    font-size: 50px;\n    color: ", ";\n  }\n\n  p {\n    margin: 0px;\n    padding-top: 14px;\n    font-size: 12px;\n    color: ", ";\n    text-align: center;\n  }\n"])), function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
}, function (props) {
  return props.theme.colors.textGray;
}, function (props) {
  return props.theme.colors.textGray;
});
var DropDownWrapper = exports.DropDownWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  button {\n    display: flex;\n    background: transparent !important;\n    border: none;\n    padding: 5px;\n    border-radius: 8px;\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    &:after {\n      display: none;\n    }\n    &:hover {\n      background: ", " !important;\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        padding: 7px 20px;\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundaryDarkContrast);
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
}, function (props) {
  return props.theme.colors.danger;
});