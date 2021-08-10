"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingHelpButton = exports.FirstStoreToSellContent = exports.FirstStoreToSellWrapper = exports.IframeWrapper = exports.VideoOnBoardingContainer = exports.HideAndShowWrapper = exports.VideoOnBoardingWrapper = exports.VideoAndReportsWrapper = exports.GuideMsg = exports.WelcomeMsg = exports.HeaderContainer = exports.HomeContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media print {\n    display: none;\n  }\n\n  @media (min-width: 800px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-left: 100px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding-right: 100px;\n    "])));
});

exports.HomeContainer = HomeContainer;

var HeaderContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 30px 0;\n\n  h1 {\n    font-weight: bold;\n    font-size: 20px;\n    margin: 0;\n    color: ", ";\n  }\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});

exports.HeaderContainer = HeaderContainer;

var WelcomeMsg = _styledComponents.default.h1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 32px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.WelcomeMsg = WelcomeMsg;

var GuideMsg = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 25px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.GuideMsg = GuideMsg;

var VideoAndReportsWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media(min-width: 800px) {\n    flex-direction: ", "\n  }\n"])), function (_ref) {
  var isRowDirection = _ref.isRowDirection;
  return isRowDirection ? 'row' : 'column';
});

exports.VideoAndReportsWrapper = VideoAndReportsWrapper;

var VideoOnBoardingWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-right: 24px;\n  ", "\n  width: 100%;\n\n  @media (min-width: 800px) {\n    width: 53%;\n    height: inherit;\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 24px;\n    margin-right: 0;\n  "])));
});

exports.VideoOnBoardingWrapper = VideoOnBoardingWrapper;

var HideAndShowWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    margin-right: 12px;\n    ", "\n  }\n\n  svg {\n    font-size: 16px;\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n      margin-right: 0;\n    "])));
});

exports.HideAndShowWrapper = HideAndShowWrapper;

var VideoOnBoardingContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  height: 300px;\n\n  @media (min-width: 800px) {\n    height: calc(100% - 54px);\n  }\n"])));

exports.VideoOnBoardingContainer = VideoOnBoardingContainer;

var IframeWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"])));

exports.IframeWrapper = IframeWrapper;

var FirstStoreToSellWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin-top: 70px;\n\n  .home-store-title {\n    margin-bottom: 30px;\n  }\n"])));

exports.FirstStoreToSellWrapper = FirstStoreToSellWrapper;

var FirstStoreToSellContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  > div {\n    width: 100%;\n  }\n\n  @media (min-width: 800px) {\n    > div {\n      width: 45%;\n    }\n  }\n"])));

exports.FirstStoreToSellContent = FirstStoreToSellContent;

var OrderingHelpButton = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  p {\n    margin: 0;\n    font-weight: 500;\n    font-size: 12px;\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  button {\n    white-space: nowrap;\n    margin-left: 15px;\n    width: 105px;\n    min-width: 105px;\n    height: 44px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.headingColor;
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      margin-left: 0;\n    "])));
});

exports.OrderingHelpButton = OrderingHelpButton;