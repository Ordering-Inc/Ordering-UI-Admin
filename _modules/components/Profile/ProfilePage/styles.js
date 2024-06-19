"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoWrapper = exports.UserInfoContainer = exports.UserImage = exports.InfoWrapper = exports.InfoContent = exports.HeaderContainer = exports.Container = exports.ButtonsGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));
var HeaderContainer = exports.HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n"])));
var UserInfoContainer = exports.UserInfoContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  display: flex;\n  margin-bottom: 40px;\n"])));
var UserImage = exports.UserImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  width: 216px;\n  height: 216px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 8px;\n  }\n  svg {\n    width: 80%;\n    height: 80%;\n  }\n"])));
var UserInfoWrapper = exports.UserInfoWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0 26px;\n  p {\n    &.name {\n      font-size: 20px;\n      font-weight: 600;\n      margin: 0;\n    }\n    &.email {\n      font-size: 14px;\n      line-height: 24px;\n      margin: 12px 0;\n    }\n    &.phone {\n      font-size: 14px;\n      line-height: 24px;\n      margin: 0;\n    }\n  }\n"])));
var ButtonsGroup = exports.ButtonsGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 26px;\n\n  button {\n    height: 44px;\n    img {\n      width: 16px;\n      height: 16px;\n      margin-right: 8px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 8px;\n      "])));
});
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n\n  > button {\n    height: 25px;\n    svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n  &:hover > div {\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-right: -8px;\n    margin-left: 8px;\n  "])));
});
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: 0px;\n  ", "\n\n  @media (min-width: 576px) {\n    min-width: 350px;\n    padding: 12px 15px;\n    left: 0px;\n    ", "\n  }\n\n  @media (min-width: 993px) {\n    min-width: 535px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});