"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoContent = exports.ImageWrapper = exports.HeaderTitleContainer = exports.HeaderInfoWrapper = exports.DownloadLink = exports.DownLoadWrapper = exports.ContentWrapper = exports.Container = exports.ButtonWRapper = exports.BoxWrapper = exports.AppInfoContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n  min-height: 100vh;\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n\n  > h1 {\n    font-size: 24px;\n    font-weight: 700;\n    margin: 0;\n  }\n  > p {\n    font-size: 14px;\n    margin: 8px 0;\n  }\n  @media (min-width: 1024px) {\n    > h1 {\n      font-size: 32px;\n      line-height: 48px;\n    }\n    > p {\n      font-size: 16px;\n      line-height: 24px;\n    }\n  }\n"])));
var BoxWrapper = exports.BoxWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])));
var AppInfoContainer = exports.AppInfoContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 36px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 45px 25px;\n\n  h2 {\n    font-size: 24px;\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  p {\n    font-size: 14px;\n    margin-top: 16px;\n    margin-bottom: 0;\n  }\n  @media (min-width: 1024px) {\n    width: calc(50% - 23px);\n    h2 {\n      font-size: 32px;\n      line-height: 48px;\n    }\n    p {\n      font-size: 16px;\n      line-height: 24px;\n    }\n  }\n"])));
var ImageWrapper = exports.ImageWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  img {\n    width: 100%;\n    max-width: 430px;\n  }\n  ", "\n"])), function (_ref) {
  var isDriver = _ref.isDriver;
  return isDriver && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    img {\n      max-width: 500px;\n    }\n  "])));
});
var DownloadLink = exports.DownloadLink = _styledComponents.default.a(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-decoration: underline;\n"])));
var ButtonWRapper = exports.ButtonWRapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  padding-top: 15px;\n  button {\n    height: 44px;\n    width: 100%;\n    margin-top: 16px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    button {\n      width: calc(50% - 10px);\n    }\n  }\n"])));
var DownLoadWrapper = exports.DownLoadWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  img {\n    cursor: pointer;\n    &:last-child {\n      margin: 0px 15px;\n    }\n  }\n"])));
var HeaderInfoWrapper = exports.HeaderInfoWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n\n  > button {\n    height: 25px;\n    svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n  &:hover > div {\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: -8px;\n    margin-left: 8px;\n  "])));
});
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: 0px;\n  ", "\n\n  > a {\n    color: ", ";\n    margin: 0 5px;\n  }\n\n  @media (min-width: 576px) {\n    min-width: 350px;\n    padding: 12px 15px;\n    left: 0px;\n    ", "\n  }\n\n  @media (min-width: 993px) {\n    min-width: 535px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});