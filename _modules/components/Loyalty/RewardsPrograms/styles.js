"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoyaltyListContainer = exports.LoyaltyItemWrapper = exports.LoyaltyItemContent = exports.InfoWrapper = exports.InfoContent = exports.IconWrapper = exports.HeaderTitleContainer = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 10px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var LoyaltyListContainer = exports.LoyaltyListContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var LoyaltyItemWrapper = exports.LoyaltyItemWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: calc(100% - 20px);\n  margin: 10px;\n  display: flex;\n  border-radius: 8px;\n  padding: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  @media (min-width: 576px) {\n    width: calc(50% - 20px);\n  }\n\n  @media (min-width: 992px) {\n    width: calc(33% - 20px);\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var IconWrapper = exports.IconWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 8px;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryLight;
});
var LoyaltyItemContent = exports.LoyaltyItemContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  ", "\n  h5 {\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 6px;\n  }\n  p {\n    color: ", ";\n    font-size: 12px;\n    margin: 0px;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-right: 13px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 13px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
});
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n\n  > button {\n    height: 25px;\n    svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n  &:hover > div {\n    /* display: block; */\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-right: -8px;\n    margin-left: 8px;\n  "])));
});
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: 0px;\n  ", "\n\n  @media (min-width: 576px) {\n    min-width: 330px;\n    padding: 12px 15px;\n    left: 0px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});