"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgeBlock = exports.WelcomeMsg = exports.VideoOnBoardingWrapper = exports.VideoOnBoardingContainer = exports.VideoAndReportsWrapper = exports.SalesGraphContainer = exports.Reports = exports.ParagraphHeaders = exports.OrdersOrSalesContainer = exports.OrdersAndSalesWrapper = exports.OrderingHelpButton = exports.IframeWrapper = exports.HomeContainer = exports.HideAndShowWrapper = exports.HeaderContainer = exports.GuideMsg = exports.FirstStoreToSellWrapper = exports.FirstStoreToSellContent = exports.FeedbackWidgets = exports.FeedbackContainer = exports.DetailsContent = exports.ChartHeaderContainer = exports.ButtonWrapper = exports.Breadcrumb = exports.BoxIconContainer = exports.AssistanceWidgets = exports.AssistanceTitle = exports.AssistanceBody = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HomeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  max-height: 100vh;\n  overflow: auto;\n  @media print {\n    display: none;\n  }\n  @media (min-width: 768px) {\n    padding: 20px 25px;\n  }\n  @media (min-width: 800px) {\n    ", "\n  }\n  @media (min-width: 1440px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-left: 100px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding-right: 100px;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding-left: 180px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding-right: 180px;\n    "])));
});
exports.HomeContainer = HomeContainer;
var Breadcrumb = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 30px 0;\n  h1 {\n    font-weight: bold;\n    font-size: 20px;\n    margin: 0;\n    color: ", ";\n  }\n  > button {\n    ", "\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
exports.Breadcrumb = Breadcrumb;
var HeaderContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n"])));
exports.HeaderContainer = HeaderContainer;
var WelcomeMsg = _styledComponents.default.h1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 28px;\n  color: ", ";\n  @media(min-width: 768px) {\n    font-size: 32px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.WelcomeMsg = WelcomeMsg;
var GuideMsg = _styledComponents.default.p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 25px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.GuideMsg = GuideMsg;
var Reports = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 21px;\n  margin-bottom: 5vw;\n  @media(min-width: 800px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  @media(min-width: 1400px) {\n    margin-bottom: 65px;\n  }\n"])));
exports.Reports = Reports;
var VideoAndReportsWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  @media(min-width: 800px) {\n    flex-direction: ", "\n  }\n"])), function (_ref) {
  var isRowDirection = _ref.isRowDirection;
  return isRowDirection ? 'row' : 'column';
});
exports.VideoAndReportsWrapper = VideoAndReportsWrapper;
var VideoOnBoardingWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-right: 24px;\n  ", "\n  width: 100%;\n  @media (min-width: 800px) {\n    width: 53%;\n    height: inherit;\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-left: 24px;\n    margin-right: 0;\n  "])));
});
exports.VideoOnBoardingWrapper = VideoOnBoardingWrapper;
var HideAndShowWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    margin-right: 12px;\n    ", "\n  }\n  svg {\n    font-size: 16px;\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n      margin-right: 0;\n    "])));
});
exports.HideAndShowWrapper = HideAndShowWrapper;
var VideoOnBoardingContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  height: 300px;\n  @media (min-width: 800px) {\n    height: calc(100% - 54px);\n  }\n"])));
exports.VideoOnBoardingContainer = VideoOnBoardingContainer;
var IframeWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"])));
exports.IframeWrapper = IframeWrapper;
var FirstStoreToSellWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin-top: 70px;\n  .home-store-title {\n    margin-bottom: 30px;\n  }\n"])));
exports.FirstStoreToSellWrapper = FirstStoreToSellWrapper;
var FirstStoreToSellContent = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  transition: max-height 0.6s ease 0s;\n  max-height: 0;\n  overflow: hidden;\n  ", "\n  > div {\n    width: 100%;\n  }\n  @media (min-width: 800px) {\n    > div {\n      width: 45%;\n    }\n  }\n"])), function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    max-height: 1000px;\n  "])));
});
exports.FirstStoreToSellContent = FirstStoreToSellContent;
var OrderingHelpButton = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  p {\n    margin: 0;\n    font-weight: 500;\n    font-size: 12px;\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  button {\n    white-space: nowrap;\n    margin-left: 15px;\n    width: 105px;\n    min-width: 105px;\n    height: 44px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.headingColor;
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      margin-left: 0;\n    "])));
});
exports.OrderingHelpButton = OrderingHelpButton;
var SalesGraphContainer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 10px;\n  padding-top: 20px;\n  padding-bottom: 6px;\n  @media (min-width: 768px) {\n    padding: 20px 20px 10px;\n  }\n  @media (min-width: 800px) {\n    ", "\n  }\n"])), function (_ref3) {
  var isFullWidth = _ref3.isFullWidth;
  return isFullWidth ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      width: 100%;\n    "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      width: 49%;\n    "])));
});
exports.SalesGraphContainer = SalesGraphContainer;
var ChartHeaderContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  p {\n    text-transform: uppercase;\n    margin: 0;\n    font-size: 14px;\n    color: ", ";\n    margin-bottom: 15px;\n  }\n  h3 {\n    margin: 0;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n    margin-bottom: 15px;\n  }\n"])), function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.colors.headingColor;
}, function (props) {
  var _props$theme9;
  return (_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.colors.headingColor;
});
exports.ChartHeaderContainer = ChartHeaderContainer;
var OrdersAndSalesWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 20px;\n  > div {\n    width: 100%;\n  }\n  @media (min-width: 800px) {\n    margin-top: 0px;\n    ", "\n  }\n"])), function (_ref4) {
  var isDirection = _ref4.isDirection;
  return isDirection ? (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      flex-direction: row;\n      > div {\n        width: 48%;\n      }\n    "]))) : (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      width: 46%;\n      flex-direction: column;\n      > div {\n        width: 100%;\n      }\n    "])));
});
exports.OrdersAndSalesWrapper = OrdersAndSalesWrapper;
var OrdersOrSalesContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  padding: 13px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  margin-bottom: 20px;\n  @media (min-width: 800px) {\n    margin-bottom: 0px;\n  }\n\n  @media (min-width: 1200px) {\n    padding: 20px;\n  }\n"])));
exports.OrdersOrSalesContainer = OrdersOrSalesContainer;
var DetailsContent = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  p {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: ", ";\n    margin-bottom: 8px;\n  }\n  h2 {\n    font-weight: 500;\n    font-size: 24px;\n    color: ", ";\n    margin: 0;\n    @media (min-width: 800px) {\n      font-size: 28px;\n    }\n  }\n"])), function (props) {
  var _props$theme10;
  return (_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.colors.headingColor;
}, function (props) {
  var _props$theme11;
  return (_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.colors.headingColor;
});
exports.DetailsContent = DetailsContent;
var BoxIconContainer = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  width: 63px;\n  height: 63px;\n  background: #D4F2FF;\n  border-radius: 7.6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    font-size: 28px;\n    color: ", ";\n  }\n  ", "\n\n  @media (min-width: 1200px) {\n    width: 5vw;\n    height: 5vw;\n\n    svg {\n      font-size: 2vw;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme12;
  return (_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.colors.primary;
}, function (_ref5) {
  var isSales = _ref5.isSales;
  return isSales && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    background: #E3FEF3;\n    svg {\n      color: #00D27A;\n    }\n  "])));
}, function (props) {
  var _props$theme13;
  return (_props$theme13 = props.theme) === null || _props$theme13 === void 0 ? void 0 : _props$theme13.colors.primary;
});
exports.BoxIconContainer = BoxIconContainer;
var ParagraphHeaders = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  p {\n    font-weight: 600;\n    font-size: 16px;\n    margin: 0;\n    color: ", ";\n  }\n  button {\n    border-radius: 7.6px;\n    height: 44px;\n  }\n"])), function (props) {
  var _props$theme14;
  return (_props$theme14 = props.theme) === null || _props$theme14 === void 0 ? void 0 : _props$theme14.colors.headingColor;
});
exports.ParagraphHeaders = ParagraphHeaders;
var AssistanceWidgets = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  margin-top: 20px;\n"])));
exports.AssistanceWidgets = AssistanceWidgets;
var AssistanceTitle = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-bottom: 55px;\n  h1 {\n    font-size: 24px;\n    span {\n      color: ", ";\n    }\n  }\n  @media (min-width: 800px) {\n    h1 {\n      font-size: 28px;\n    }\n  }\n"])), function (props) {
  var _props$theme15;
  return (_props$theme15 = props.theme) === null || _props$theme15 === void 0 ? void 0 : _props$theme15.colors.primary;
});
exports.AssistanceTitle = AssistanceTitle;
var AssistanceBody = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n"])));
exports.AssistanceBody = AssistanceBody;
var WidgeBlock = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-bottom: 20px;\n  h3 {\n    font-size: 20px;\n  }\n  p {\n    font-size: 14px;\n  }\n  button {\n    border-radius: 7.6px;\n    width: 296px;\n    padding: 10px;\n    line-height: 20px;\n  }\n\n  @media (min-width: 1024px) {\n    max-width:45%;\n  }\n"])));
exports.WidgeBlock = WidgeBlock;
var FeedbackWidgets = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  > a {\n    margin-top: 20px;\n    border-radius: 7.6px;\n    color: ", ";\n    transition: all 0.3s linear;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.FeedbackWidgets = FeedbackWidgets;
var FeedbackContainer = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  margin: 20px auto 0px auto;\n  margin-bottom: 30px;\n  width: fit-content;\n  h2 {\n    font-size: 24px;\n    text-align: center;\n  }\n  p {\n    font-size: 14px;\n    text-align: center;\n    margin-bottom: 3px;\n  }\n  button {\n    border-radius: 7.6px;\n    height: 44px;\n    margin: 0 auto;\n  }\n  @media (min-width: 800px) {\n    h2 {\n      font-size: 28px;\n    }\n    p {\n      font-size: 16px;\n      text-align: left;\n      &.center {\n        text-align: center;\n      }\n    }\n  }\n"])));
exports.FeedbackContainer = FeedbackContainer;
var ButtonWrapper = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])));
exports.ButtonWrapper = ButtonWrapper;