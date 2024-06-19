"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsSelectContainer = exports.SelectHeader = exports.SelectContent = exports.OptionsError = exports.Option = exports.InputWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var SettingsSelectContainer = exports.SettingsSelectContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n"])));
var SelectHeader = exports.SelectHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 5px;\n\n  label {\n    font-size: 14px;\n    font-weight: 600;\n    color: ", ";\n    margin: 0;\n  }\n  p {\n    margin-top: 10px;\n    margin-bottom: 0px;\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var SelectContent = exports.SelectContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  p {\n    font-size: 14px;\n    color: #748194;\n  }\n\n  .select {\n    border: none;\n    width: 100%;\n    line-height: 26px;\n    padding: 0;\n\n    > div:first-child {\n      padding: 8px 15px;\n      border-radius: 7.6px;\n      border: 1px solid ", ";\n      font-size: 14px;\n    }\n\n    .list {\n      max-height: 300px;\n      overflow: auto;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var Option = exports.Option = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  font-size: 13px;\n  line-height: 2;\n  font-weight: 500;\n"])));
var OptionsError = exports.OptionsError = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #d83520;\n"])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 26px;\n\n  > input {\n    position: absolute;\n    top: 0;\n    height: 42px;\n    width: calc(100% - 40px);\n    border: none;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      right: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      left: 0px;\n    "])));
});