"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolWrapper = exports.RightHeader = exports.ProductSummaryContent = exports.ProductSales = exports.ProductPrice = exports.ProductPreviewHeader = exports.ProductName = exports.ProductImageWrapper = exports.ProductImage = exports.ProductDetailsContent = exports.ProductDetailsContainer = exports.ProductDetails = exports.ProductDescription = exports.ProductConfigsContainer = exports.ProductConfigOption = exports.PriceDuration = exports.LeftHeader = exports.FieldsItem = exports.DetailsHeader = exports.ActionSelectorWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  position: relative;\n  overflow-x: hidden;\n\n  ", "\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});

exports.ProductDetailsContainer = ProductDetailsContainer;

var DetailsHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n"])));

exports.DetailsHeader = DetailsHeader;

var ProductName = _styledComponents.default.h1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  color: ", ";\n  font-size: 20px;\n  margin: 0px;\n  font-weight: 700;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});

exports.ProductName = ProductName;

var LeftHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.RightHeader = RightHeader;

var ProductImageWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 150px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ", ";\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  margin-bottom: 20px;\n\n  > svg {\n    width: 70%;\n    height: 70%;\n    color: white;\n  }\n\n  @media (min-width: 768px) {\n    width: 200px;\n    height: 200px;\n    margin-bottom: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.ProductImageWrapper = ProductImageWrapper;

var ProductImageStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n"])));

var ProductImage = function ProductImage(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(ProductImageStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.ProductImage = ProductImage;

var ProductDetailsContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 20px 0;\n"])));

exports.ProductDetailsContent = ProductDetailsContent;

var ProductPrice = _styledComponents.default.p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 30px 0 15px;\n  color: ", ";\n  span {\n    font-size: 18px;\n    font-weight: 300;\n    color: ", ";\n    text-decoration: line-through;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
});

exports.ProductPrice = ProductPrice;

var ProductDescription = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  word-break: break-word;\n  font-size: 14px;\n  color: ", ";\n  margin-bottom: 27px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.ProductDescription = ProductDescription;

var ProductConfigsContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  margin-bottom: 50px;\n  overflow: hidden;\n  > div:first-child {\n    border-top: none !important;\n  }\n\n  > div:last-child {\n    border-bottom: none !important;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.ProductConfigsContainer = ProductConfigsContainer;

var ProductConfigOption = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 13px 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: ", ";\n  border-bottom: 1px solid ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n  \n  ", "\n\n  span {\n    font-size: 12px;\n  }\n  svg {\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    border-bottom: 1px solid ", " !important;\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});

exports.ProductConfigOption = ProductConfigOption;

var ActionSelectorWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  button {\n    display: flex;\n    background: transparent !important;\n    border: none;\n    padding: 5px;\n    border-radius: 8px;\n\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:hover {\n      background: ", " !important;\n      > svg {\n        color:  #151b26;\n      }\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        padding: 7px 20px;\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
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

exports.ActionSelectorWrapper = ActionSelectorWrapper;

var ProductPreviewHeader = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-right: 1px solid ", ";\n  ", "\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n  > div {\n    display: flex;\n    button {\n      margin: 0 5px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "])));
});

exports.ProductPreviewHeader = ProductPreviewHeader;

var ProductSummaryContent = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));

exports.ProductSummaryContent = ProductSummaryContent;

var ProductSales = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 90px;\n  padding: 10px;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n\n  @media (min-width: 768px) {\n    width: 230px;\n  }\n"])));

exports.ProductSales = ProductSales;

var RolWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin-left: 20px;\n  ", "\n\n  h4 {\n    font-size: 20px;\n    font-weight: 600;\n    margin: 0;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    ", ";\n  }\n\n  p {\n    margin: 0;\n    font-size: 12px;\n    line-height: 18px;\n    ", ";\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n    margin-left: 0;\n "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.RolWrapper = RolWrapper;

var ProductDetails = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 10px 0;\n"])));

exports.ProductDetails = ProductDetails;

var FieldsItem = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 48%;\n  margin-bottom: 25px;\n  \n  h4 {\n    margin: 0;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    ", ";\n  }\n\n  p {\n    margin: 0;\n    font-size: 12px;\n    line-height: 18px;\n    ", ";\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.FieldsItem = FieldsItem;

var PriceDuration = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  font-weight: 600;\n  font-size: 20px;\n  margin-bottom: 15px;\n\n  .dot {\n    margin: 0px 5px;\n  }\n"])));

exports.PriceDuration = PriceDuration;