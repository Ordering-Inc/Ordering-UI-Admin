"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.Tabs = exports.Tab = exports.SwiperWrapper = exports.SuoptionText = exports.SuboptionPrice = exports.SubOptionThumbnail = exports.SkuContent = exports.SectionTitle = exports.QuantityControl = exports.ProductTabContainer = exports.ProductSuboptionContainer = exports.ProductInfoModalPreview = exports.ProductInfo = exports.ProductFormTitle = exports.ProductEdition = exports.ProductComment = exports.ProductActions = exports.PositionControl = exports.OptionWrapHeader = exports.OptionTitleContainer = exports.OptionTitle = exports.OptionThumbnail = exports.OptionFlag = exports.OptionContainer = exports.ModalHeader = exports.MobileContentMask = exports.IngredientContainer = exports.IconControl = exports.Divider = exports.DesktopHeader = exports.DesktopBackground = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  ", "\n"])), function (_ref) {
  var isMobileView = _ref.isMobileView;
  return !isMobileView && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-radius: 8px;\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.Container = Container;

var DesktopHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 25px;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  div {\n    background: ", ";\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    margin: 0 3px;\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});

exports.DesktopHeader = DesktopHeader;

var DesktopBackground = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  max-height: calc(90vh - 150px);\n  overflow: auto;\n"])), function (_ref2) {
  var isMobileView = _ref2.isMobileView;
  return !isMobileView && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background: ", ";\n    border-radius: 0 0 8px 8px;\n  "])), function (props) {
    return props.theme.colors.gray;
  });
});

exports.DesktopBackground = DesktopBackground;

var ProductInfoModalPreview = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  max-width: 500px;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  position: relative;\n  \n  ", "\n\n  ", "\n"])), function (_ref3) {
  var isMobileView = _ref3.isMobileView;
  return !isMobileView && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.backgroundPage;
  });
}, function (_ref4) {
  var isMobileView = _ref4.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 325px;\n    height: 650px;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    padding: 12px;\n  "])), function (_ref5) {
    var src = _ref5.src;
    return src;
  });
});

exports.ProductInfoModalPreview = ProductInfoModalPreview;

var MobileContentMask = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref6) {
  var isMobileView = _ref6.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    -webkit-mask-image: url(", ");\n    mask-image: url(", ");\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    -webkit-mask-position: center;\n    mask-position: center;\n    height: 630px;\n    overflow: auto;\n    ::-webkit-scrollbar {\n      width: 0px;\n    }\n    background: ", ";\n  "])), function (_ref7) {
    var src = _ref7.src;
    return src;
  }, function (_ref8) {
    var src = _ref8.src;
    return src;
  }, function (props) {
    return props.theme.colors.backgroundPage;
  });
});

exports.MobileContentMask = MobileContentMask;

var ModalHeader = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 20px;\n  svg {\n    color: ", ";\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});

exports.ModalHeader = ModalHeader;

var WrapperImage = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n"])));

exports.WrapperImage = WrapperImage;

var SwiperWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n\n  .mySwiper2 {\n    height: 250px;\n    width: 100%;\n    .swiper-slide-active {\n      border-radius: 0px;\n      img {\n        border-radius: 0px;\n      }\n    }\n    @media (min-width: 576px) {\n      height: 320px;\n    }\n    @media (min-width: 1201px) {\n    }\n  }\n  .swiper {\n    width: 100%;\n    height: 500px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .swiper-slide {\n    background-size: cover;\n    background-position: center;\n  }\n  .product-thumb {\n    box-sizing: border-box;\n    padding: 15px 0px;\n    margin: 0px 10px;\n\n    .swiper-slide {\n      opacity: 0.8;\n      border-radius: 7.6px;\n      height: 60px;\n\n      img {\n        border-radius: 7.6px;\n      }\n    }\n    .swiper-slide-thumb-active {\n      opacity: 1;\n    }\n  }\n  .swiper-slide img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .swiper-button-next {\n    background-image: url(", ");\n    background-color: rgba(0,0,0,0.2);\n    background-repeat: no-repeat;\n    background-position: 55% center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n  }\n  .swiper-button-prev {\n    background-image: url(", ");\n    background-color: rgba(0,0,0,0.2);\n    background-repeat: no-repeat;\n    background-position: 45% center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n  }\n  .swiper-button-next::after, .swiper-button-prev::after {\n    display: none;\n  }\n"])), function (props) {
  return props.theme.images.icons.rightArrow;
}, function (props) {
  return props.theme.images.icons.leftArrow;
});

exports.SwiperWrapper = SwiperWrapper;

var ProductInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  position: relative;\n\n  h1 {\n    font-weight: 700;\n    font-size: 20px;\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n\n  .price-wrapper {\n    display: flex;\n    align-items: center;\n\n    span {\n      font-size: 14px;\n      margin-right: 5px;\n      ", "\n    }\n\n    .price-discount {\n      font-size: 12px;\n      color: ", ";\n    }\n  }\n  p {\n    font-size: 13px;\n    color: ", ";\n    margin-top: 0px;\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 5px;\n      "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.ProductInfo = ProductInfo;

var ProductFormTitle = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n  margin: 10px 15px;\n\n  .price-discount {\n    text-decoration: line-through;\n  }\n"])));

exports.ProductFormTitle = ProductFormTitle;

var SkuContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 0px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n"])));

exports.SkuContent = SkuContent;

var Divider = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  height: 6px;\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.Divider = Divider;

var ProductEdition = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 10px 15px;\n"])));

exports.ProductEdition = ProductEdition;

var ProductTabContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  position: sticky;\n  top: 50px;\n  background: white;\n  z-index: 900;\n\n  @media (min-width: 769px) {\n    top: -20px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.ProductTabContainer = ProductTabContainer;

var SectionTitle = _styledComponents.default.h3(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-size: 14px;\n  padding: 15px 0px;\n  margin: 0px;\n  font-weight: 600;\n"])));

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 50px;\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n"])));

exports.ProductComment = ProductComment;

var Tabs = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.Tabs = Tabs;

var Tab = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  ", "\n  cursor: pointer;\n  font-size: 12px;\n  ", "\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    padding: 5px 0 5px 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    padding: 5px 10px 5px 0;\n  "])));
}, function (_ref9) {
  var active = _ref9.active;
  return active ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: 600;\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  }) : (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
});

exports.Tab = Tab;

var WrapperIngredients = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref10) {
  var isProductSoldout = _ref10.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});

exports.WrapperIngredients = WrapperIngredients;

var IngredientContainer = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  input {\n    transform: scale(0.9);\n  }\n\n  > span {\n    color: ", ";\n    font-size: 12px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "])));
});

exports.IngredientContainer = IngredientContainer;

var OptionContainer = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  &.error {\n    background-color: orange;\n  }\n"])));

exports.OptionContainer = OptionContainer;

var OptionWrapHeader = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #FFF;\n"])));

exports.OptionWrapHeader = OptionWrapHeader;

var OptionTitleContainer = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 70%;\n  display: flex;\n  align-items: center;  \n\n  *:first-child {\n    margin-right: 8px;\n  }\n"])));

exports.OptionTitleContainer = OptionTitleContainer;

var OptionTitle = _styledComponents.default.h3(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n\n  span {\n    &:not(:first-child) {\n      color: ", ";\n      font-size: 12px;\n      font-weight: 400;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
});

exports.OptionTitle = OptionTitle;

var OptionFlag = _styledComponents.default.span(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin: 0px;\n  text-transform: capitalize;\n  color: #A52121;\n  font-weight: 500;\n"])));

exports.OptionFlag = OptionFlag;

var OptionThumbnail = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 8px;\n  background-image: url(", ");\n  background-repeat: no-repeat, repeat;\n  width: 40px;\n  height: 40px;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n"])), function (_ref11) {
  var src = _ref11.src;
  return src;
});

exports.OptionThumbnail = OptionThumbnail;

var WrapperSubOption = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  &.error {\n    background-color: ", ";\n  }\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])), (0, _polished.lighten)(0.58, '#A52121'));

exports.WrapperSubOption = WrapperSubOption;

var ProductSuboptionContainer = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px;\n  cursor: pointer;\n\n  -webkit-touch-callout: none;\n    -webkit-user-select: none;\n     -khtml-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n"])));

exports.ProductSuboptionContainer = ProductSuboptionContainer;

var IconControl = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  transform: scale(0.9);\n  display: flex;\n  color: ", ";\n  margin-right: 5px;\n  ", "\n  svg {\n    font-size: 25px;\n  }\n\n  svg[disabled] {\n    color: #CBCBCB;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0px;\n  "])));
});

exports.IconControl = IconControl;

var SubOptionThumbnail = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 8px;\n  background-image: url(", ");\n  background-repeat: no-repeat, repeat;\n  width: 30px;\n  height: 30px;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n"])), function (_ref12) {
  var src = _ref12.src;
  return src;
});

exports.SubOptionThumbnail = SubOptionThumbnail;

var SuoptionText = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  display: flex;\n  font-weight: 300;\n  color: #555;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0 5px;\n  font-size: 12px;\n\n  div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  span {\n    margin-left: 10px;\n    font-weight: 500;\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n      margin-left: 0;\n      margin-right: 10px;    \n    "])));
});

exports.SuoptionText = SuoptionText;

var QuantityControl = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #555;\n  align-items: center;\n  font-weight: 300;\n  font-size: 12px;\n  margin: 0 5px;\n\n  svg {\n    color: ", ";\n    font-size: 16px;\n    margin-right: 3px;\n    ", "\n  }\n\n  svg[disabled] {\n    color: #CBCBCB;\n  }\n\n  svg:last-child {\n    margin-left: 3px;\n    margin-right: 0;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n      margin-left: 3px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n      margin-right: 3px;\n      margin-left: 0px;\n  "])));
});

exports.QuantityControl = QuantityControl;

var PositionControl = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: #CBCBCB;\n  font-weight: 300;\n  font-size: 18px;\n  margin: 0 5px;\n\n  svg {\n    font-size: 16px;\n    margin-right: 3px;\n    ", "\n    &.reverse {\n      transform: rotate(180deg);\n    }\n\n    &.selected {\n      color: ", ";\n    }\n\n    &:last-child {\n      margin-right: 0;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n      margin-left: 3px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n        margin-left: 0;\n      "])));
});

exports.PositionControl = PositionControl;

var SuboptionPrice = _styledComponents.default.div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  display: flex;\n  white-space: nowrap;\n  font-weight: 300;\n  font-size: 14px;\n  color: #555;\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});

exports.SuboptionPrice = SuboptionPrice;

var ProductActions = _styledComponents.default.div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  ", "\n  width: 100%;\n  z-index: 999;\n  border-top: 1px solid ", ";\n  border-radius: 0 0 8px 8px;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n\n  div.price {\n    font-weight: 600;\n    font-size: 14px;\n  }\n\n  div.incdec-control {\n    width: 50%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    svg {\n      width: 22px;\n      height: 22px;\n      cursor: pointer;\n    }\n  }\n  div:last-child {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.5;\n  }\n\n  svg.disabled {\n    pointer-events: none;\n  }\n\n  button.add {\n    width: 90%;\n    margin-top: 10px;\n    position: relative;\n    font-size: 12px;\n\n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n\n  @media (min-width: 577px) {\n    position: sticky;\n  }\n\n  @media (min-width: 1200px) {\n    ", "\n    flex-direction: row;\n    justify-content: space-between;\n\n    div.price {\n      width: 25%;\n    }\n\n    button.add {\n      width: 40%;\n      margin-top: 0;\n    }\n\n    div.incdec-control {\n      width: 30%;\n    }\n  }\n"])), function (_ref13) {
  var isMobileView = _ref13.isMobileView;
  return isMobileView ? (0, _styledComponents.css)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n    padding: 15px;\n    button.add {\n      padding: 0px 5px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n    padding: 10px 15px;\n    button.add {\n      padding: 5px 10px;\n    }\n  "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (_ref14) {
  var isMobileView = _ref14.isMobileView;
  return isMobileView ? (0, _styledComponents.css)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n      bottom: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n      bottom: -21px;\n    "])));
});

exports.ProductActions = ProductActions;