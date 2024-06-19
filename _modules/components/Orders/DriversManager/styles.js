"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningMessage = exports.HeaderTitleContainer = exports.DriversHeader = exports.DriversContent = exports.DriversContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DriversContainer = exports.DriversContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: all 0.5s;\n  padding: 20px;\n  box-sizing: border-box;\n  max-height: 100vh;\n  overflow-x: hidden;\n\n  @media print {\n    display: none;\n  }\n"])));
var DriversHeader = exports.DriversHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  > div:last-child {\n    margin-top: 20px;\n  }\n\n  input {\n    background: ", ";\n    border: none;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    > div:last-child {\n      margin-top: 0px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 30px;\n    margin: 0px;\n    text-transform: capitalize;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var DriversContent = exports.DriversContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n"])));
var WarningMessage = exports.WarningMessage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  z-index: 100;\n  top: 50px;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 0px 15px;\n  box-sizing: border-box;\n  margin: 10px 0px 0px 0px !important;\n\n  right: 0px;\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  span {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n    margin: 0 10px;\n    flex: 1;\n  }\n\n  a {\n    font-size: 12px;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 768px) {\n    padding: 0px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    right: 0px; \n    z-index: 10;\n    ", "\n\n    span {\n      white-space: nowrap;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.warning100;
}, function (props) {
  return props.theme.colors.warning;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.warning;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      left: 0px;\n      right: initial;\n    "])));
});