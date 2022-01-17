"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionButtonWrapper = exports.ButtonWrapper = exports.CategoryAndActionWrapper = exports.VerticalProductImageWrapper = exports.VerticalProductBox = exports.GroceriesProductListContent = exports.GroceriesCategoryListWrapper = exports.GroceriesProductListWrapper = exports.GroceriesCart = exports.GroceriesCartWrapper = exports.GroceriesBoxContent = exports.HorzontalProductInfoList = exports.HorzontalProductImageWrapper = exports.HorzontalProductBox = exports.FoodProductListContent = exports.CategoryTitle = exports.CategoryImgWrapper = exports.CategoryWrapper = exports.FoodCategoryList = exports.FoodCart = exports.FoodProductList = exports.FoodProductListWrapper = exports.LogoWrapper = exports.BusinessImgBox = exports.BusinessImgBoxWrapper = exports.HeaderBoldLine = exports.HeaderLine = exports.FoodHeader = exports.FoodBoxContent = exports.LayoutTitle = exports.LayoutBoxContent = exports.LayoutBoxHeader = exports.LayoutBoxFooter = exports.LayoutBoxWrapper = exports.LayoutContentWrappper = exports.Title = exports.BusinessFrontLayoutContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessFrontLayoutContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  @media (min-width: 576px) {\n    padding: 20px 10px;\n  }\n"])));

exports.BusinessFrontLayoutContainer = BusinessFrontLayoutContainer;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n  margin-bottom: 30px;\n  margin-left: 10px;\n\n  ", "\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 10px;\n  "])));
});

exports.Title = Title;

var LayoutContentWrappper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));

exports.LayoutContentWrappper = LayoutContentWrappper;

var LayoutBoxWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n\n  ", "\n\n  @media (min-width: 576px) {\n    width: calc(50% - 20px)\n  }\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    > div {\n      border: 1px solid ", ";\n    }\n\n    > p {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});

exports.LayoutBoxWrapper = LayoutBoxWrapper;

var LayoutBoxFooter = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 0px 0px 7.6px 7.6px;\n  height: 28px;\n  border-top: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.borderColor;
});

exports.LayoutBoxFooter = LayoutBoxFooter;

var LayoutBoxHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 7.6px 7.6px 0px 0px;\n  height: 16px;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.borderColor;
});

exports.LayoutBoxHeader = LayoutBoxHeader;

var LayoutBoxContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  border: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.LayoutBoxContent = LayoutBoxContent;

var LayoutTitle = _styledComponents.default.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 24px;\n  margin-top: 20px;\n  margin-bottom: 0;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.LayoutTitle = LayoutTitle;

var FoodBoxContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  min-height: 256px;\n  padding: 8px 7px;\n"])));

exports.FoodBoxContent = FoodBoxContent;

var FoodHeader = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 53px;\n  margin-bottom: 5px;\n  padding: 0 4px;\n\n  > div {\n    margin-bottom: 3px;\n  }\n"])));

exports.FoodHeader = FoodHeader;

var HeaderLine = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n  \n  &.short-line {\n    width: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});

exports.HeaderLine = HeaderLine;

var HeaderBoldLine = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  height: 3px;\n  width: 100%;\n  background-color: #ADB5BD;\n"])));

exports.HeaderBoldLine = HeaderBoldLine;

var BusinessImgBoxWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding: 0 4px;\n"])));

exports.BusinessImgBoxWrapper = BusinessImgBoxWrapper;

var BusinessImgBox = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-bottom: 7px;\n\n  > svg {\n    max-width: 26px;\n    max-height: 24px;\n    height: 24px;\n    width: 26px;\n    color: #ADB5BD;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.BusinessImgBox = BusinessImgBox;

var LogoWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 6px;\n  bottom: 6px;\n  max-width: 18px;\n  max-height: 18px;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #DEE2E6;\n  box-sizing: border-box;\n  border-radius: 1px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ", "\n\n  > svg {\n    width: 9px;\n    height: 8px;\n    color: #ADB5BD;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    right: 6px;\n    left: initial;\n  "])));
});

exports.LogoWrapper = LogoWrapper;

var FoodProductListWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.FoodProductListWrapper = FoodProductListWrapper;

var FoodProductList = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));

exports.FoodProductList = FoodProductList;

var FoodCart = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 30%;\n  margin-left: 8px;\n  padding-right: 4px;\n\n  ", "\n\n  > div {\n    border: 1px solid #E9ECEF;\n    box-sizing: border-box;\n    border-radius: 1px;\n    height: 45px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 7px;\n      min-width: 7px;\n      height: 7px;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 8px;\n    padding-right: 0px;\n    padding-left: 4px;\n  "])));
}, function (props) {
  return props.theme.colors.disabled;
});

exports.FoodCart = FoodCart;

var FoodCategoryList = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 6px;\n  width: 100%;\n  padding-left: 4px;\n\n  ", "\n\n  div {\n    margin-right: 2px;\n    width: 12%;\n    height: 1px;\n    background: ", ";\n\n    ", "\n\n    &:first-child {\n      height: 2px;\n      background: #CED4DA;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    padding-right: 4px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 2px;\n    "])));
});

exports.FoodCategoryList = FoodCategoryList;

var CategoryWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 4px;\n  align-items: center;\n"])));

exports.CategoryWrapper = CategoryWrapper;

var CategoryImgWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  margin-right: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 8px;\n  width: 8px;\n  height: 8px;\n  background: ", ";\n  border-radius: 1px;\n  \n  ", "\n\n  > svg {\n    width: 4px;\n    height: 3.5px;\n    min-width: 4px;\n    color: #ADB5BD;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    margin-left: 2px;\n    margin-right: 0;\n  "])));
});

exports.CategoryImgWrapper = CategoryImgWrapper;

var CategoryTitle = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 2px;\n  background-color: #CED4DA;\n"])));

exports.CategoryTitle = CategoryTitle;

var FoodProductListContent = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  > div {\n    width: calc(50% - 8px);\n  }\n"])));

exports.FoodProductListContent = FoodProductListContent;

var HorzontalProductBox = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border: 0.5px solid ", ";\n  box-sizing: border-box;\n  border-radius: 2px;\n  margin: 4px;\n  padding: 3.5px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.HorzontalProductBox = HorzontalProductBox;

var HorzontalProductImageWrapper = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  border-radius: 1px;\n  width: 14px;\n  height: 14px;\n  min-width: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 3.5px;\n\n  ", "\n\n  > svg {\n    width: 6px;\n    height: 5px;\n    min-width: 6px;\n    color: #ADB5BD;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    margin-right: 3.5px;\n    margin-left: 0;\n  "])));
});

exports.HorzontalProductImageWrapper = HorzontalProductImageWrapper;

var HorzontalProductInfoList = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  flex: 1;\n\n  > div {\n    height: 1.2px;\n    background: ", ";\n\n    &.title {\n      height: 2.3px;\n      background: #ADB5BD;\n    }\n    &.short-line {\n      width: 30%;\n      margin: 2.3px 0;\n    }\n\n    &:last-child {\n      margin-top: 1.2px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.HorzontalProductInfoList = HorzontalProductInfoList;
var GroceriesBoxContent = (0, _styledComponents.default)(FoodBoxContent)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral([""])));
exports.GroceriesBoxContent = GroceriesBoxContent;

var GroceriesCartWrapper = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -3px;\n  right: 3px;\n\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    left: 3px;\n    right: initial;\n  "])));
});

exports.GroceriesCartWrapper = GroceriesCartWrapper;

var GroceriesCart = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 55px;\n  height: 56px;\n  background: ", ";\n  border: 0.5px solid ", ";\n  box-sizing: border-box;\n  border-radius: 2px;\n\n  > svg {\n    width: 6px;\n    height: 6px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.btnSecondaryContrast;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.disabled;
});

exports.GroceriesCart = GroceriesCart;

var GroceriesProductListWrapper = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.GroceriesProductListWrapper = GroceriesProductListWrapper;

var GroceriesCategoryListWrapper = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([""])));

exports.GroceriesCategoryListWrapper = GroceriesCategoryListWrapper;
var GroceriesProductListContent = (0, _styledComponents.default)(FoodProductListContent)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  > div {\n    width: calc(33.3% - 8px);\n  }\n"])));
exports.GroceriesProductListContent = GroceriesProductListContent;

var VerticalProductBox = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 4px;\n"])));

exports.VerticalProductBox = VerticalProductBox;
var VerticalProductImageWrapper = (0, _styledComponents.default)(HorzontalProductImageWrapper)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  margin: 0 0 4px 0;\n  width: 23px;\n  height: 23px;\n  min-width: 23px;\n"])));
exports.VerticalProductImageWrapper = VerticalProductImageWrapper;

var CategoryAndActionWrapper = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));

exports.CategoryAndActionWrapper = CategoryAndActionWrapper;

var ButtonWrapper = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0.5px solid ", ";\n  box-sizing: border-box;\n  border-radius: 2px;\n  width: 12px;\n  height: 8px;\n\n  svg {\n    width: 5px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.ButtonWrapper = ButtonWrapper;

var ActionButtonWrapper = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n\n  button {\n    height: 44px;\n    background: ", ";\n    color: white;\n    border-radius: 8px;\n    font-size: 14px;\n    margin: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ActionButtonWrapper = ActionButtonWrapper;