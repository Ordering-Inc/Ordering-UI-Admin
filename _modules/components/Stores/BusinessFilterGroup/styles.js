"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchWrapper = exports.RangeSelectWrapper = exports.Option = exports.FormGroup = exports.FormControl = exports.Container = exports.ButtonGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var FormGroup = exports.FormGroup = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > div {\n    width: 100%;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    > div {\n      width: 48%;\n    }\n  }\n"])));
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  > label {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  > input {\n    width: 100%;\n    height: 54px;\n  }\n\n  & > div:not(.range) {\n    width: 100%;\n    height: 54px;\n    background-color: ", ";\n    border: none;\n    font-size: 14px;\n    border-radius: 8px;\n  }\n\n  .full-select {\n    > div:first-child {\n      height: 100%;\n      border-radius: 8px;\n    }\n    .list {\n      left: 0px;\n      right: auto;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var RangeSelectWrapper = exports.RangeSelectWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 54px;\n  .select {\n    height: 100%;\n    > div:first-child {\n      width: 75px;\n      height: 100%;\n      padding-top: 4px;\n      padding-bottom: 4px;\n      background-color: ", ";\n      font-size: 14px;\n      border-radius: 8px;\n    }\n    .list {\n      left: 0px;\n      right: auto;\n    }\n  }\n  input {\n    width: calc(100% - 65px);\n    margin-left: 15px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 0;\n      margin-right: 15px;\n    "])));
});
var Option = exports.Option = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  white-space: nowrap;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
var SwitchWrapper = exports.SwitchWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  label {\n    margin-bottom: 0px;\n    font-size: 14px;\n  }\n"])));
var ButtonGroup = exports.ButtonGroup = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "])));
});