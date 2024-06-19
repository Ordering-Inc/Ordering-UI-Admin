"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewMethodButton = exports.ProductListContainer = exports.ProductHeader = exports.HeaderTitleContainer = exports.HeaderContainer = exports.ColumnsAllowWrapper = exports.CategoryProductsContent = exports.CategoryProductsContainer = exports.CategoryListContainer = exports.ButtonWrapper = exports.BusinessSelector = exports.BusinessNameWrapper = exports.Breadcrumb = exports.ActionsGroup = exports.ActionIconList = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CategoryProductsContainer = exports.CategoryProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  width: calc(100% - 40px);\n\n  @media print {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    overflow: hidden;\n  }\n"])));
var HeaderContainer = exports.HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    background: ", ";\n    border: none;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
});
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n"])));
var ActionsGroup = exports.ActionsGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n  flex-wrap: wrap;\n\n  > button {\n    height: 41px;\n    width: 90px;\n    white-space: nowrap;\n    margin-top: 5px;\n    ", "\n    @media (min-width: 768px) {\n      width: unset;\n    }\n  }\n\n  input {\n    background: ", ";\n  }\n\n  > .searchBar {\n    min-width: 100px;\n    margin-top: 5px;\n  }\n  > .importerGroup {\n    margin-top: 5px;\n    ", "\n\n    > button {\n      width: 90px;\n      > svg {\n        display: none;\n        @media (min-width: 768px) {\n          display: inline;\n        }\n      }\n      @media (min-width: 768px) {\n        width: unset;\n      }\n    }\n  }\n\n  @keyframes spinner-content {\n    0% { transform: rotate(0) }\n    100% { transform: rotate(360deg) }\n  }\n\n  > .loading {\n    > svg {\n      animation: spinner-content 1.85s linear infinite;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
});
var CategoryProductsContent = exports.CategoryProductsContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  min-height: calc(100% - 150px);\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"])));
var CategoryListContainer = exports.CategoryListContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  min-width: 260px;\n\n  @media (max-width: 576px) {\n    width:100%;\n  }\n"])));
var ProductListContainer = exports.ProductListContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  width: 100%;\n\n  @media (min-width: 769px) {\n    width: calc(100% - 260px);\n  }\n"])));
var ProductHeader = exports.ProductHeader = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  h1 {\n    font-weight: 600;\n    font-size: 14px;\n    margin: 0;\n  }\n\n  @media (min-width: 768px) {\n    padding: 0 10px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "])));
});
var ActionIconList = exports.ActionIconList = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  button.batch-image-upload {\n    border: 1px solid ", ";\n    background-color: transparent;\n    color: ", ";\n    padding: 4px 15px;\n    &:hover {\n      background: ", ";\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.primary);
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
});
var ViewMethodButton = exports.ViewMethodButton = _styledComponents.default.span(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin-left: 12px;\n  cursor: pointer;\n  color: ", ";\n\n  svg {\n    font-size: 16px;\n  }\n\n  &.batch {\n    svg {\n      font-size: 18px;\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
var BusinessSelector = exports.BusinessSelector = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: relative;\n  width: fit-content;\n"])));
var BusinessNameWrapper = exports.BusinessNameWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n  }\n  cursor: pointer;\n  h1 {\n    svg {\n      font-size: 0.7em;\n      transition: 0.2s ease-in-out;\n    }\n    svg.rotate-arrow {\n      transform: rotate(180deg);\n    }\n  }\n"])));
var Breadcrumb = exports.Breadcrumb = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: ", ";\n\n  span {\n    &.business {\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n  svg {\n    margin: 0 9px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});
var ColumnsAllowWrapper = exports.ColumnsAllowWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0 5px;\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n  button {\n    height: 42px;\n  }\n"])));