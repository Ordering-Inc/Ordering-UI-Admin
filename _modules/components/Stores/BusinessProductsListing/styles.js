"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewMethodButton = exports.ProductListContainer = exports.ProductHeader = exports.HeaderTitleContainer = exports.HeaderContainer = exports.ColumnsAllowWrapper = exports.CategoryProductsContent = exports.CategoryProductsContainer = exports.CategoryListContainer = exports.BusinessSelector = exports.BusinessNameWrapper = exports.Breadcrumb = exports.ActionsGroup = exports.ActionIconList = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CategoryProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: hidden;\n\n  @media print {\n    display: none;\n  }\n"])));

exports.CategoryProductsContainer = CategoryProductsContainer;

var HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    background: ", ";\n    border: none;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
});

exports.HeaderContainer = HeaderContainer;

var HeaderTitleContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));

exports.HeaderTitleContainer = HeaderTitleContainer;

var ActionsGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n  flex-wrap: wrap;\n\n  > button {\n    height: 41px;\n    ", "\n  }\n\n  input {\n    background: ", ";\n  }\n\n  @media (min-width: 992px) {\n    margin-top: 0px;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
}, function (props) {
  return props.theme.colors.secundary;
});

exports.ActionsGroup = ActionsGroup;

var CategoryProductsContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 50px;\n  min-height: calc(100% - 150px);\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"])));

exports.CategoryProductsContent = CategoryProductsContent;

var CategoryListContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  min-width: 260px;\n\n  @media (max-width: 576px) {\n    width:100%;\n  }\n"])));

exports.CategoryListContainer = CategoryListContainer;

var ProductListContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  width: 100%;\n\n  @media (min-width: 769px) {\n    width: calc(100% - 260px);\n  }\n"])));

exports.ProductListContainer = ProductListContainer;

var ProductHeader = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n\n  ", "\n\n  h1 {\n    font-weight: 600;\n    font-size: 14px;\n    margin: 0;\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "])));
});

exports.ProductHeader = ProductHeader;

var ActionIconList = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  button.batch-image-upload {\n    border: 1px solid ", ";\n    background-color: transparent;\n    color: ", ";\n    padding: 4px 15px;\n    &:hover {\n      background: ", ";\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.primary);
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ActionIconList = ActionIconList;

var ViewMethodButton = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-left: 12px;\n  cursor: pointer;\n  color: ", ";\n\n  svg {\n    font-size: 16px;\n  }\n\n  &.batch {\n    svg {\n      font-size: 18px;\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.ViewMethodButton = ViewMethodButton;

var BusinessSelector = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: relative;\n  width: fit-content;\n"])));

exports.BusinessSelector = BusinessSelector;

var BusinessNameWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n  }\n  cursor: pointer;\n  h1 {\n    svg {\n      font-size: 0.7em;\n      transition: 0.2s ease-in-out;\n    }\n    svg.rotate-arrow {\n      transform: rotate(180deg);\n    }\n  }\n"])));

exports.BusinessNameWrapper = BusinessNameWrapper;

var Breadcrumb = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: ", ";\n\n  span {\n    &.business {\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n  svg {\n    margin: 0 9px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.Breadcrumb = Breadcrumb;

var ColumnsAllowWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0 5px;\n"])));

exports.ColumnsAllowWrapper = ColumnsAllowWrapper;