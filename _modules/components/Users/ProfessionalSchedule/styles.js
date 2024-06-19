"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleWrapper = exports.ScheduleContentWrapper = exports.RangeItem = exports.DateRangeWrapper = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 30px 0px 20px 0px;\n"])));
var DateRangeWrapper = exports.DateRangeWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > h1 {\n    font-weight: 600;\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 6px;\n  }\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    color: ", ";\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var RangeItem = exports.RangeItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 17px;\n  cursor: pointer;\n\n  > span {\n    margin-right: 12px;\n    ", "\n    svg {\n      color: ", ";\n      &.active {\n        color: ", ";\n      }\n    }\n  }\n\n  input {\n    width: 74px;\n    margin-right: 12px;\n    ", "\n  }\n\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n    margin-bottom: 0px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    &:hover {\n      color: #000;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n      margin-right: 0px;\n    "])));
});
var ScheduleWrapper = exports.ScheduleWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  > h1 {\n    font-weight: 600;\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 15px;\n  }\n"])));
var ScheduleContentWrapper = exports.ScheduleContentWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding: 20px 0 30px 0;\n\n  button {\n    height: 44px;\n  }\n"])));