"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlugFormControl = exports.SlugEditWrapper = exports.MapWrapper = exports.HeaderTitleContainer = exports.ButtonWrapper = exports.BoxLayout = exports.AddNewBusinessContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var AddNewBusinessContainer = exports.AddNewBusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media print {\n    display: none;\n  }\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  margin-bottom: 25px;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var BoxLayout = exports.BoxLayout = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 7.6px;\n  padding: 25px 0px;\n  margin-bottom: 35px;\n  > div {\n    width: 100%;\n    max-width: 558px;\n  }\n\n  @media (min-width: 450px) {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    padding: 25px 35px;\n  }\n"])), function (props) {
  return props.theme.colors.white;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding-bottom: 30px;\n  button {\n    height: 44px;\n    border-radius: 8px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 30px;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    button {\n      width: 200px;\n      &:first-child {\n        margin-right: 30px;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          margin-right: 0;\n          margin-left: 30px;\n        "])));
});
var MapWrapper = exports.MapWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-height: 0px;\n  overflow: hidden;\n  display: none;\n"])));
var SlugEditWrapper = exports.SlugEditWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  p {\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n  button {\n    width: 100%;\n    height: 44px;\n    margin-top: 25px;\n    margin-left: auto;\n  }\n"])));
var SlugFormControl = exports.SlugFormControl = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 12px;\n  }\n  input {\n    height: 44px;\n    width: 100%;\n  }\n"])));