"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOrderListContent = exports.WrapperNoneConfigs = exports.SettingsListWrapper = exports.SettingItemWrapper = exports.InnerNoneConfigsContainer = exports.InfoWrapper = exports.InfoContent = exports.HeaderTitleContainer = exports.ContentWrapper = exports.BasicSettingsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BasicSettingsContainer = exports.BasicSettingsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
var SettingItemWrapper = exports.SettingItemWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
var SettingsListWrapper = exports.SettingsListWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 25px;\n  width: 100%;\n"])));
var WrapperNoneConfigs = exports.WrapperNoneConfigs = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  overflow: auto;\n"])));
var InnerNoneConfigsContainer = exports.InnerNoneConfigsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 15px;\n  img {\n    width: 250px;\n  }\n\n  p {\n    font-size: 16px;\n    margin: 0px 0 40px 0;\n  }\n\n  button {\n    height: 44px;\n  }\n\n  ", "\n\n  @media (min-width: 768px) {\n    img {\n      width: 305px;\n    }\n    ", "\n  }\n"])), function (_ref) {
  var small = _ref.small;
  return small && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    img {\n      width: 150px;\n    }\n  "])));
}, function (_ref2) {
  var small = _ref2.small;
  return small && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      img {\n        width: 250px;\n      }\n    "])));
});
var WrapperOrderListContent = exports.WrapperOrderListContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var maxHeight = _ref3.maxHeight;
  return maxHeight && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    height: 100%;\n  "])));
});
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n\n  > button {\n    height: 25px;\n    svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n  &:hover > div {\n    /* display: block; */\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-right: -8px;\n    margin-left: 8px;\n  "])));
});
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: 0px;\n  ", "\n  span {\n    display: block;\n    user-select: none;\n    color: ", ";\n    cursor: pointer;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  @media (min-width: 576px) {\n    min-width: 330px;\n    padding: 12px 15px;\n    left: 0px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});