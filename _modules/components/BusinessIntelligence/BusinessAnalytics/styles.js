"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapWrraper = exports.HeaderTitleContainer = exports.HeaderFilterContainer = exports.BusinessFilterWrapper = exports.BusinessCalendarWrapper = exports.BusinessAnalyticsHeader = exports.BusinessAnalyticsContainer = exports.AnalyticsTimeZoneWrapper = exports.AnalyticsContentWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessAnalyticsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: all 0.5s;\n  padding: 20px;\n  box-sizing: border-box;\n  max-height: 100vh;\n  overflow: auto;\n"])));
exports.BusinessAnalyticsContainer = BusinessAnalyticsContainer;
var BusinessAnalyticsHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));
exports.BusinessAnalyticsHeader = BusinessAnalyticsHeader;
var HeaderTitleContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n\n  h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
exports.HeaderTitleContainer = HeaderTitleContainer;
var HeaderFilterContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  > div {\n    width: 100%;\n    margin-top: 10px;\n    > button {\n      width: 100%;\n    }\n  }\n\n  @media (min-width: 600px) {\n    flex-direction: row;\n    > div {\n      margin-top: 0px;\n      width: auto;\n    }\n  }\n"])));
exports.HeaderFilterContainer = HeaderFilterContainer;
var BusinessFilterWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  > button {\n    background: #F8F9FA;\n    border-radius: 7.6px;\n    padding: 7px 12px;\n    font-size: 14px;\n    color: ", ";\n    border: none;\n  }\n\n  @media (min-width: 600px) {\n    margin-left: 25px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 25px;\n      margin-left: 0;\n    "])));
});
exports.BusinessFilterWrapper = BusinessFilterWrapper;
var BusinessCalendarWrapper = (0, _styledComponents.default)(BusinessFilterWrapper)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n\n  > button {\n    svg {\n      font-size: 16px;\n      margin-right: 12px;\n      ", "\n    }\n  }\n\n  @media only screen and (min-width: 374px) and (max-width: 450px) {\n    .ordering-calendar {\n      right: calc((100vw - 374px) / 2);\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-left: 12px;\n        margin-right: 0;\n      "])));
});
exports.BusinessCalendarWrapper = BusinessCalendarWrapper;
var AnalyticsTimeZoneWrapper = (0, _styledComponents.default)(BusinessFilterWrapper)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));
exports.AnalyticsTimeZoneWrapper = AnalyticsTimeZoneWrapper;
var AnalyticsContentWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  > div {\n    margin-top: 40px;\n  }\n"])));
exports.AnalyticsContentWrapper = AnalyticsContentWrapper;
var MapWrraper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
exports.MapWrraper = MapWrraper;