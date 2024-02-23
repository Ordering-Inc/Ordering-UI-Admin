"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchAndFilter = exports.WrapperHeaderFilterGroup = exports.TopRightSection = exports.SLAControlsWrapper = exports.OrderContentHeaderContainer = exports.HeaderTitle = exports.HeaderSection = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderContentHeaderContainer = exports.OrderContentHeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 300px;\n  width: 100%;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n\n  @media (max-width: 1200px) {\n    ", "\n  }\n"])), function (_ref) {
  var isDisableControl = _ref.isDisableControl;
  return !isDisableControl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      flex-direction: column;\n    "])));
});
var HeaderSection = exports.HeaderSection = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: fit-content;\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n\n    &.tour_btn {\n      ", "\n      svg {\n        width: 20px;\n        height: 20px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: -8px;\n        margin-right: 8px;\n      "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: -8px;\n        margin-left: 8px;\n      "])));
});
var HeaderTitle = exports.HeaderTitle = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0px;\n  text-transform: capitalize;\n  white-space: nowrap;\n\n  @media (max-width: 560px) {\n    width: calc(100% - 50px);\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var TopRightSection = exports.TopRightSection = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: nowrap;\n  margin: 5px 0px 10px 15px;\n  overflow: auto;\n\n  ", "\n\n  ", "\n\n  @media (min-width: 799px) {\n    flex-direction: ", ";\n    align-items: ", ";\n  }\n"])), function (_ref2) {
  var isCustomLayout = _ref2.isCustomLayout;
  return !isCustomLayout && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n  "])));
}, function (_ref3) {
  var isCustomLayout = _ref3.isCustomLayout;
  return isCustomLayout && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    .websocket-container {\n      padding-bottom: 10px;\n    }\n  "])));
}, function (_ref4) {
  var isCustomLayout = _ref4.isCustomLayout;
  return isCustomLayout ? 'column-reverse' : 'row';
}, function (_ref5) {
  var isCustomLayout = _ref5.isCustomLayout;
  return isCustomLayout ? 'flex-start' : 'center';
});
var WrapperHeaderFilterGroup = exports.WrapperHeaderFilterGroup = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 850px\n"])));
var SLAControlsWrapper = exports.SLAControlsWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n\n  @media (min-width: 768px) {\n    margin-top: 0px;\n  }\n"])));
var WrapperSearchAndFilter = exports.WrapperSearchAndFilter = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n\n  ", "\n\n  input {\n    background: ", ";\n    border: none;\n  }\n\n  > button {\n    ", "\n  }\n\n  @media (min-width: 760px) {\n    margin: 20px 0 10px 0;\n  }\n\n  @media (min-width: 992px) {\n    ", "\n  }\n"])), function (_ref6) {
  var fullWidth = _ref6.fullWidth;
  return fullWidth && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    width: 100%;\n    > div {\n      width: 100%;\n\n      input {\n        width: 100%;\n      }\n    }\n  "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "])));
}, function (_ref7) {
  var fullWidth = _ref7.fullWidth;
  return !fullWidth && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin: 0px;\n    "])));
});