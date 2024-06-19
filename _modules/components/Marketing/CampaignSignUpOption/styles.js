"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.RadioCheckWrapper = exports.DateRangeWrapper = exports.Container = exports.CalendarWrapper = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 30px;\n  margin-top: 0px;\n  margin-bottom: 45px;\n"])));
var RadioCheckWrapper = exports.RadioCheckWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 28px;\n\n  > div {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    width: fit-content;\n\n    span {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n    }\n\n    svg {\n      margin-right: 13px;\n      ", "\n      color: ", ";\n      &.fill {\n        color:", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 13px;\n      "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n\n  button {\n    height: 44px;\n  }\n"])));
var DateRangeWrapper = exports.DateRangeWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n"])));
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n"])));