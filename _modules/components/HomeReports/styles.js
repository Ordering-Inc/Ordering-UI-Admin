"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartHeaderContainer = exports.BoxIconContainer = exports.DetailsContent = exports.OrdersOrSalesContainer = exports.SalesChartWrapper = exports.OrdersAndSalesWrapper = exports.ReportsContent = exports.HomeReportsHeader = exports.HomeReportsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeReportsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 23px;\n  width: 100%;\n\n  @media (min-width: 800px) {\n    width: 45%;\n    ", "\n  }\n"])), function (_ref) {
  var isDirection = _ref.isDirection;
  return isDirection ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-top: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-top: 23px;\n      width: 100%;\n    "])));
});

exports.HomeReportsContainer = HomeReportsContainer;

var HomeReportsHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  p {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    border-radius: 7.6px;\n    height: 44px;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});

exports.HomeReportsHeader = HomeReportsHeader;

var ReportsContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 800px) {\n    ", "\n  }\n"])), function (_ref2) {
  var isDirection = _ref2.isDirection;
  return isDirection ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      flex-direction: column;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      flex-direction: row-reverse;\n      justify-content: space-between;\n    "])));
});

exports.ReportsContent = ReportsContent;

var OrdersAndSalesWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n\n  > div {\n    width: 100%;\n  }\n\n  @media (min-width: 800px) {\n    ", "\n  }\n"])), function (_ref3) {
  var isDirection = _ref3.isDirection;
  return isDirection ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      flex-direction: row;\n      > div {\n        width: 48%;\n      }\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      width: 45%;\n      flex-direction: column;\n      > div {\n        width: 100%;\n      }\n    "])));
});

exports.OrdersAndSalesWrapper = OrdersAndSalesWrapper;

var SalesChartWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-top: 21px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 17px 25px;\n\n  @media (min-width: 800px) {\n    ", "\n  }\n\n"])), function (_ref4) {
  var isFullWidth = _ref4.isFullWidth;
  return isFullWidth ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      width: 100%;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      width: 45%;\n    "])));
});

exports.SalesChartWrapper = SalesChartWrapper;

var OrdersOrSalesContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 21px;\n  padding: 14px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n"])));

exports.OrdersOrSalesContainer = OrdersOrSalesContainer;

var DetailsContent = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  p {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: ", ";\n    margin-bottom: 8px;\n  }\n\n  h2 {\n    font-weight: 500;\n    font-size: 28px;\n    color: ", ";\n    margin: 0;\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});

exports.DetailsContent = DetailsContent;

var BoxIconContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 63px;\n  height: 63px;\n  background: #D4F2FF;\n  border-radius: 7.6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    font-size: 27px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.primary;
}, function (_ref5) {
  var isSales = _ref5.isSales;
  return isSales && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background: #E3FEF3;\n    svg {\n      color: #00D27A;\n    }\n  "])));
});

exports.BoxIconContainer = BoxIconContainer;

var ChartHeaderContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  \n  p {\n    text-transform: uppercase;\n    margin: 0;\n    font-size: 14px;\n    color: ", ";\n    margin-bottom: 15px;\n  }\n\n  h3 {\n    margin: 0;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n    margin-bottom: 15px;\n  }\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.headingColor;
}, function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.headingColor;
});

exports.ChartHeaderContainer = ChartHeaderContainer;