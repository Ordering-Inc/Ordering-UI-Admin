"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleOptions = exports.RaidoButton = exports.FormControl = exports.DetailsContainer = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DetailsContainer = exports.DetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 25px 20px;\n  overflow: auto;\n\n  > h2 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 20px;\n\n    ", "\n  }\n\n  h3 {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 4px;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 40px;\n    "])));
});
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  label {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    margin-bottom: 10px;\n    span {\n      font-size: 12px;\n      color: ", ";\n    }\n  }\n  input, textarea {\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var ToggleOptions = exports.ToggleOptions = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n"])));
var RaidoButton = exports.RaidoButton = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  cursor: pointer;\n\n  svg {\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    font-size: 16px;\n    min-width: 16px;\n    margin-right: 12px;\n    ", "\n  }\n  span {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 13px;\n      margin-right: 0px;\n    "])));
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));