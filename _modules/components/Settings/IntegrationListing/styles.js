"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.TabWrapper = exports.Tab = exports.SpecialPartnerWrapper = exports.SettingList = exports.SettingItemContent = exports.SettingItemContainer = exports.IntegrationsContainer = exports.IconWrapper = exports.HubspotFormWrapper = exports.Header = exports.CloseButtonWrapper = exports.CategorySection = exports.CategorGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IntegrationsContainer = exports.IntegrationsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px 10px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 35px;\n\n  ", "\n\n  h1 {\n    flex: 1;\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0px;\n    line-height: 35px;\n    text-align: center;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-right: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding-left: 20px;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var CategorGroup = exports.CategorGroup = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n"])));
var CategorySection = exports.CategorySection = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n h2 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n  margin-left: 20px;\n }\n"])));
var SettingList = exports.SettingList = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  margin-bottom: 35px;\n"])));
var SpecialPartnerWrapper = exports.SpecialPartnerWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 14px;\n  margin-left: 20px;\n  button {\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
var SettingItemContainer = exports.SettingItemContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: calc(100% - 20px);\n  margin: 10px;\n  display: flex;\n  border-radius: 8px;\n  padding: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  @media (min-width: 576px) {\n    width: calc(50% - 20px);\n  }\n\n  @media (min-width: 992px) {\n    width: calc(33% - 20px);\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var IconWrapper = exports.IconWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 8px;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n  img{\n    width: 100%;\n    max-width: 90%;\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    img {\n      max-width: 100%;\n    }\n  "])));
});
var SettingItemContent = exports.SettingItemContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  flex: 1;\n  ", "\n  h5 {\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 6px;\n  }\n  p {\n    color: ", ";\n    font-size: 12px;\n    margin: 0px;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 13px;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-left: 13px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
});
var CloseButtonWrapper = exports.CloseButtonWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n\n  button {\n    height: 44px;\n    border-radius: 8px;\n    width: 100%;\n  }\n"])));
var HubspotFormWrapper = exports.HubspotFormWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  min-height: 445px;\n  position: relative;\n"])));
var TabWrapper = exports.TabWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));
var Tabs = exports.Tabs = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  padding-bottom: 14px;\n  color: ", ";\n  cursor: pointer;\n  &:not(:last-child) {\n    margin-right: 16px;\n    ", "\n  }\n  ", "\n\n  @media (min-width: 1024px) {\n    &:not(:last-child) {\n      margin-right: 32px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-right: 0;\n      margin-left: 16px;\n    "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    font-weight: 600;\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        margin-right: 0;\n        margin-left: 32px;\n      "])));
});