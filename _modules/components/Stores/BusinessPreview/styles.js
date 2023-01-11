"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrapperBusinessLogo = exports.WrapLogo = exports.WrapAllCategories = exports.UserWrapper = exports.Tab = exports.SoldOut = exports.ProductsListing = exports.ProductInfoModalPreview = exports.PriceWrapper = exports.OrderTypeWrapper = exports.MomentWrapper = exports.MobileHeaderWrapper = exports.MobileContentMask = exports.MobileCartViewWrapper = exports.HeaderLogo = exports.HeaderInfo = exports.EmptyCart = exports.EmptyBtnWrapper = exports.DesktopHeader = exports.DesktopBackground = exports.Contentheader = exports.ContentWrapper = exports.Container = exports.CategoryWrapper = exports.CartWrapper = exports.CardLogo = exports.CardInfo = exports.CardContainer = exports.BusinessProductListWrapper = exports.BusinessProductList = exports.BusinessProductContainer = exports.BusinessMoreDetail = exports.BusinessLogo = exports.BusinessInfoItem = exports.BusinessInfoContent = exports.BusinessInfoContainer = exports.BusinessInfo = exports.BusinessDetail = exports.BusinessContent = exports.BusinessContainer = exports.BusinessCartWrapper = exports.BusinessCartContent = exports.AddressWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  ", "\n"])), function (_ref) {
  var isMobileView = _ref.isMobileView;
  return !isMobileView && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-radius: 8px;\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
exports.Container = Container;
var DesktopHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 25px;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  div {\n    background: ", ";\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    margin: 0 3px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.gray;
});
exports.DesktopHeader = DesktopHeader;
var DesktopBackground = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  display: flex;\n  justify-content: center;\n  max-height: calc(90vh - 50px);\n  overflow: auto;\n"])), function (_ref2) {
  var isMobileView = _ref2.isMobileView;
  return !isMobileView && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-radius: 0 0 8px 8px;\n  "])));
});
exports.DesktopBackground = DesktopBackground;
var ProductInfoModalPreview = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  position: relative;\n  \n  ", "\n\n  ", "\n"])), function (_ref3) {
  var isMobileView = _ref3.isMobileView;
  return !isMobileView && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.backgroundPage;
  });
}, function (_ref4) {
  var isMobileView = _ref4.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 270px;\n    height: 540px;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    padding: 29px;\n    @media (min-width: 576px) {\n      width: 325px;\n      height: 650px;\n      padding: 12px;\n    }\n  "])), function (_ref5) {
    var src = _ref5.src;
    return src;
  });
});
exports.ProductInfoModalPreview = ProductInfoModalPreview;
var MobileContentMask = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref6) {
  var isMobileView = _ref6.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    -webkit-mask-image: url(", ");\n    mask-image: url(", ");\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    -webkit-mask-position: center;\n    mask-position: center;\n    height: 495px;\n    overflow: auto;\n    ::-webkit-scrollbar {\n      width: 0px;\n    }\n    background: ", ";\n    @media (min-width: 576px) {\n      height: 630px;\n    }\n  "])), function (_ref7) {
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
var Contentheader = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-bottom: 1px solid #e9ecef;\n"])));
exports.Contentheader = Contentheader;
var HeaderLogo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([""])));
exports.HeaderLogo = HeaderLogo;
var HeaderInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  border-radius: 50px;\n  border: 1px solid ", ";\n  background: #f8f9fa;\n  flex: 1;\n  margin: 0px 20px;\n\n  @media (min-width: 850px) {\n    margin: 0px 50px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.HeaderInfo = HeaderInfo;
var AddressWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  flex: 1;\n\n  svg {\n    min-width: 16px;\n    color: rgb(177, 188, 204);\n    margin-right: 5px;\n    ", "\n  }\n\n  span {\n    font-size: 12px;\n    font-weight: bold;\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
exports.AddressWrapper = AddressWrapper;
var MomentWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n  justify-content: center;\n  padding: 10px 20px;\n  max-width: 150px;\n  width: 100%;\n  span {\n    color: #909ba9;\n    font-size: 12px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
});
exports.MomentWrapper = MomentWrapper;
var OrderTypeWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  max-width: 150px;\n  width: 100%;\n  span {\n    color: #909ba9;\n    font-size: 12px;\n  }\n"])));
exports.OrderTypeWrapper = OrderTypeWrapper;
var CartWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: white;\n  border-radius: 8px;\n  background: #2C7BE5;\n  padding: 5px;\n  height: 35px;\n  margin: 0px 15px;\n  svg {\n    margin-right: 5px;\n    ", "\n  }\n  span {\n    font-size: 12px;\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
exports.CartWrapper = CartWrapper;
var UserWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: 10px;\n    ", "\n  }\n\n  > div {\n    width: 35px;\n    height: 35px;\n    border-radius: 8px;\n    overflow: hidden;\n    img, svg {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "])));
});
exports.UserWrapper = UserWrapper;
var ContentWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  padding: 20px;\n"])));
exports.ContentWrapper = ContentWrapper;
var BusinessInfoContainer = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 700px) {\n    ", "\n  }\n"])), function (_ref9) {
  var isMobileView = _ref9.isMobileView;
  return !isMobileView && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      flex-direction: row;\n      align-items: flex-end;\n      justify-content: space-between;\n    "])));
});
exports.BusinessInfoContainer = BusinessInfoContainer;
var BusinessInfoContent = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([""])));
exports.BusinessInfoContent = BusinessInfoContent;
var BusinessInfo = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.BusinessInfo = BusinessInfo;
var BusinessInfoItem = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right:5px;\n  ", "\n\n  h2 {\n    font-weight: 500;\n    font-size: 20px;\n    margin: 0 0 10px 0;\n  }\n\n  .type {\n    font-size: 12px;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n\n  .preorder-Reviews {\n    span {\n      user-select: none;\n      cursor: pointer;\n      font-size: 12px;\n      color: ", ";\n      text-decoration: underline;\n      &:not(:last-child) {\n        margin-right: 5px;\n        ", "\n      }\n\n      &.dot {\n        font-size: 12px;\n        text-decoration: none;\n        color: #909BA9;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0;\n  "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.primary;
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n          margin-left: 5px;\n          margin-right: 0;\n        "])));
});
exports.BusinessInfoItem = BusinessInfoItem;
var BusinessDetail = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h5 {\n    font-size: 12px;\n    color: #909BA9;\n    margin: 0 5px 0 0;\n    font-weight: normal;\n    ", "\n\n    span {\n      margin-right: 5px;\n      ", "\n    }\n  }\n\n  .review {\n    color: #909BA9;\n    margin: 0;\n    display: flex;\n    align-items: center;\n\n    svg {\n      font-size: 15px;\n      margin-bottom: 1px;\n      margin-right: 5px;\n      ", "\n    }\n\n    p {\n      font-size: 12px;\n      margin: 0px;\n    }\n  }\n\n  .dot {\n    color: #909BA9;\n    font-size: 12px;\n    margin-right: 5px;\n    ", "\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  var _props$theme9;
  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  var _props$theme10;
  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (_ref10) {
  var isSkeleton = _ref10.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    > span {\n      display: flex;\n      margin-right: 5px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme11;
    return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
  });
});
exports.BusinessDetail = BusinessDetail;
var WrapperSearch = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  svg {\n    left: 0px;\n  }\n  input {\n    border-radius: 0px;\n    border: none;\n    border-bottom: 1px solid ", ";\n    padding: 8px;\n    padding-left: 25px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.WrapperSearch = WrapperSearch;
var BusinessContainer = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 250px;\n  height: 230px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 150px;\n  justify-content: center;\n  align-items: flex-end;\n  border-radius: 7.6px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0 10px;\n    padding: 0;\n  }\n\n  @media (min-width: 490px) {\n    justify-content: flex-start;\n  }\n\n  ", "\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    background-color: #cccccc;\n  "])));
}, function (props) {
  return props.bgimage && !props.isClosed && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isClosed && (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(", ");\n  "])), props.bgimage);
}, function (_ref11) {
  var isMobileView = _ref11.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n    margin-left: -20px;\n    width: calc(100% + 40px);\n    height: 150px;\n  "])));
});
exports.BusinessContainer = BusinessContainer;
var BusinessContent = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  margin: 10px;\n  max-height: 124px;\n  width: 124px;\n\n  @media (min-width: 426px) {\n    margin: 25px;\n  }\n"])));
exports.BusinessContent = BusinessContent;
var WrapperBusinessLogo = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  max-width: 124px;\n  max-height: 124px;\n  height: 90px;\n  width: 90px;\n\n  ", "\n"])), function (_ref12) {
  var isMobileView = _ref12.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n    height: 50px;\n    width: 50px;\n    margin-top: -25px;\n    margin-bottom: 20px;\n  "])));
});
exports.WrapperBusinessLogo = WrapperBusinessLogo;
var BusinessLogoStyled = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 45px;\n  border-radius: 7.6px;\n"])));
var BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessLogo = BusinessLogo;
var BusinessMoreDetail = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  top: 30px;\n  right: 30px;\n  position: absolute;\n  min-width: 24px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    font-size: 20px;\n    color: white;\n  }\n"])));
exports.BusinessMoreDetail = BusinessMoreDetail;
var BusinessProductContainer = _styledComponents.default.div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
exports.BusinessProductContainer = BusinessProductContainer;
var BusinessProductListWrapper = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 30px;\n\n  @media (min-width: 700px) {\n    width: 70%;\n    ", "\n  }\n"])), function (_ref13) {
  var isMobileView = _ref13.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n      width: 100%;\n    "])));
});
exports.BusinessProductListWrapper = BusinessProductListWrapper;
var BusinessCartWrapper = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 30px;\n\n  @media (min-width: 700px) {\n    width: 30%;\n    padding-left: 15px;\n    ", "\n    ", "\n  }\n"])), function (props) {
  var _props$theme12;
  return ((_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.rtl) && (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n      padding-left: 0px;\n      padding-right: 15px;\n    "])));
}, function (_ref14) {
  var isMobileView = _ref14.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n      width: 100%;\n      padding: 0px;\n    "])));
});
exports.BusinessCartWrapper = BusinessCartWrapper;
var CategoryWrapper = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  margin-bottom: 20px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.CategoryWrapper = CategoryWrapper;
var Tab = _styledComponents.default.div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  padding: 6px 0;\n  ", "\n  cursor: pointer;\n  color: ", ";\n  white-space: nowrap;\n  font-size: 12px;\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme13;
  return (_props$theme13 = props.theme) !== null && _props$theme13 !== void 0 && _props$theme13.rtl ? (0, _styledComponents.css)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (_ref15) {
  var active = _ref15.active;
  return active && (0, _styledComponents.css)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid;\n    font-weight: 500;\n  "])));
}, function (_ref16) {
  var active = _ref16.active;
  return !active && (0, _styledComponents.css)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
});
exports.Tab = Tab;
var CardContainer = _styledComponents.default.div(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  margin: 10px 0px;\n  border-radius: 7.6px;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n\n  background: ", ";\n\n  @media (min-width: 576px) {\n    margin: 10px;\n    width: calc(100% - 40px);\n  }\n\n  ", "\n  ", "\n"])), function (_ref17) {
  var soldOut = _ref17.soldOut;
  return soldOut ? '#6c757d33' : '#FFF';
}, function (_ref18) {
  var isCartOnProductsList = _ref18.isCartOnProductsList;
  return isCartOnProductsList ? (0, _styledComponents.css)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n    @media (min-width: 993px) {\n      width: calc(50% - 20px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme14;
    return ((_props$theme14 = props.theme) === null || _props$theme14 === void 0 ? void 0 : _props$theme14.rtl) && (0, _styledComponents.css)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
  }) : (0, _styledComponents.css)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n    @media (min-width: 681px) {\n      width: calc(50% - 20px);\n    }\n\n    @media (min-width: 993px) {\n      width: calc(33.3% - 15px);\n      margin: 10px 15px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme15;
    return ((_props$theme15 = props.theme) === null || _props$theme15 === void 0 ? void 0 : _props$theme15.rtl) && (0, _styledComponents.css)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 15px;\n      "])));
  });
}, function (_ref19) {
  var isMobileView = _ref19.isMobileView;
  return isMobileView && (0, _styledComponents.css)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n    width: 100% !important;\n    margin: 10px 0px !important;\n  "])));
});
exports.CardContainer = CardContainer;
var CardInfo = _styledComponents.default.div(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100% - 90px);\n  > * {\n    margin: 3px;\n  }\n\n  h1 {\n    font-size: 12px;\n    font-weight: 500;\n    text-align: left;\n    color: #263238;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    color: #909BA9;\n    text-align: left;\n    font-size: 8px;\n    ", "\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  span {\n    color: ", ";\n    font-size: 10px;\n  }\n\n  @media (min-width: 1024px) {\n    p {\n      font-size: 10px;\n    }\n\n    span {\n      font-size: 12px;\n    }\n  }\n"])), function (props) {
  var _props$theme16;
  return ((_props$theme16 = props.theme) === null || _props$theme16 === void 0 ? void 0 : _props$theme16.rtl) && (0, _styledComponents.css)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
});
exports.CardInfo = CardInfo;
var PriceWrapper = _styledComponents.default.div(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .off-price {\n    font-size: 10px;\n    color: #909BA9;\n    margin-left: 5px;\n    text-decoration: line-through;\n\n    ", "\n\n    @media (min-width: 1024px) {\n      font-size: 13px;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
});
exports.PriceWrapper = PriceWrapper;
var WrapLogo = _styledComponents.default.div(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  max-width: 65px;\n  max-height: 65px;\n  height: 65px;\n  width: 65px;\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme17;
  return ((_props$theme17 = props.theme) === null || _props$theme17 === void 0 ? void 0 : _props$theme17.rtl) && (0, _styledComponents.css)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.WrapLogo = WrapLogo;
var CardLogoStyled = _styledComponents.default.div(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 65px;\n  border-radius: 8px;\n"])));
var CardLogo = function CardLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)';
  }
  return /*#__PURE__*/_react.default.createElement(CardLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.CardLogo = CardLogo;
var SoldOut = _styledComponents.default.span(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #495057 0% 0% no-repeat padding-box;\n  padding: 3px 6px;\n  top: 5px;\n  border-radius: 2px 0px 0px 2px;\n  right: 0px;\n  color: white;\n  font-size: 10px;\n  ", "\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"])), function (props) {
  var _props$theme18;
  return ((_props$theme18 = props.theme) === null || _props$theme18 === void 0 ? void 0 : _props$theme18.rtl) && (0, _styledComponents.css)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
});
exports.SoldOut = SoldOut;
var BusinessProductList = _styledComponents.default.div(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral([""])));
exports.BusinessProductList = BusinessProductList;
var ProductsListing = _styledComponents.default.div(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 15px;\n"])));
exports.ProductsListing = ProductsListing;
var WrapAllCategories = _styledComponents.default.div(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n  .category-title {\n    display: flex;\n    align-items: center;\n    padding-top: 5px;\n    padding-bottom: 12px;\n    margin-left: 10px;\n    ", "\n\n    img {\n      border-radius: 7.6px;\n      min-width: 30px;\n      min-height: 30px;\n      height: 30px;\n      width: 30px;\n      margin-right: 8px;\n      ", "\n    }\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n\n  h3 {\n    font-weight: 500;\n    font-size: 18px;\n    color: ", ";\n    margin: 0px 0px 0px 10px;\n    ", "\n\n    @media (min-width: 993px) {\n      margin: 0px;\n    }\n  }\n"])), function (props) {
  var _props$theme19;
  return ((_props$theme19 = props.theme) === null || _props$theme19 === void 0 ? void 0 : _props$theme19.rtl) && (0, _styledComponents.css)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
}, function (props) {
  var _props$theme20;
  return ((_props$theme20 = props.theme) === null || _props$theme20 === void 0 ? void 0 : _props$theme20.rtl) && (0, _styledComponents.css)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n        margin-left: 8px;\n        margin-right: 0;\n      "])));
}, function (props) {
  var _props$theme21;
  return (_props$theme21 = props.theme) === null || _props$theme21 === void 0 ? void 0 : _props$theme21.colors.darkTextColor;
}, function (props) {
  var _props$theme22;
  return ((_props$theme22 = props.theme) === null || _props$theme22 === void 0 ? void 0 : _props$theme22.rtl) && (0, _styledComponents.css)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n      margin: 0px 10px 0px 0px;\n    "])));
});
exports.WrapAllCategories = WrapAllCategories;
var BusinessCartContent = _styledComponents.default.div(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 15px;\n  position: relative;\n  margin-bottom: 20px;\n\n  .product.accordion {\n    margin: 0;\n  }\n\n  ", "\n\n  @media (min-width: 768px) {\n    padding: 25px 20px;\n    position: sticky;\n    top: 0;\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
}, function (_ref20) {
  var isModal = _ref20.isModal;
  return !isModal && (0, _styledComponents.css)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\n    border: 1px solid #E9ECEF;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    border-radius: 7.6px;\n  "])));
});
exports.BusinessCartContent = BusinessCartContent;
var EmptyCart = _styledComponents.default.div(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n  .empty-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      font-size: 35px;\n      color: #B1BCCC;\n      margin-top: 10px;\n    }\n\n    p {\n      font-size: 12px;\n      color: #B1BCCC;\n      margin: 15px 0 0 0;\n    }\n  }\n"])));
exports.EmptyCart = EmptyCart;
var EmptyBtnWrapper = _styledComponents.default.div(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 15px;\n\n  span {\n    font-weight: 500;\n    font-size: 14px;\n    color: ", ";\n  }\n\n  button {\n    color: #748194;\n    background: #F8F9FA;\n    border: 1px solid #F8F9FA;\n    border-radius: 7.6px;\n    height: 35px;\n    font-size: 12px;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.EmptyBtnWrapper = EmptyBtnWrapper;
var MobileHeaderWrapper = _styledComponents.default.div(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin: 15px 0px;\n\n  svg {\n    color: #909BA9;\n  }\n"])));
exports.MobileHeaderWrapper = MobileHeaderWrapper;
var MobileCartViewWrapper = _styledComponents.default.div(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n  position: sticky;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n\n  span {\n    font-weight: 500;\n    font-size: 14px;\n  }\n\n  button {\n    height: 35px;\n    border-radius: 7px;\n  }\n"])));
exports.MobileCartViewWrapper = MobileCartViewWrapper;