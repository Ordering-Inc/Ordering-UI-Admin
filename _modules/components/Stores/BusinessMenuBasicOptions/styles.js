"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleSection = exports.ScheduleContainer = exports.ScheduleCheckboxContainer = exports.OrderType = exports.FieldName = exports.BusinessMenuBasicContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessMenuBasicContainer = exports.BusinessMenuBasicContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n  padding: 0;\n  input:not([type='checkbox']),\n  textarea {\n    width: 100%;\n  }\n  > button {\n    height: 40px;\n    margin-top: 50px;\n  }\n  @media (min-width: 450px) {\n    padding: 0 5px;\n  }\n"])));
var FieldName = exports.FieldName = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  color: ", ";\n  padding: 30px 0 10px;\n  margin: 0;\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var isBorderBottom = _ref.isBorderBottom;
  return isBorderBottom && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #E9ECEF;\n  "])));
});
var OrderType = exports.OrderType = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  span {\n    font-size: 14px;\n    color: ", ";\n    ", "\n  }\n"])), function (props) {
  return !props.noBorder && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #E9ECEF;\n  "])));
}, function (_ref2) {
  var theme = _ref2.theme,
    active = _ref2.active;
  return active ? theme.colors.primary : theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
var ScheduleCheckboxContainer = exports.ScheduleCheckboxContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 20%;\n\n  h4 {\n    color: ", ";\n    font-size: 18px;\n    font-weight: 600;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin: 0 10px 0 0;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin: 0 0 0 10px;\n    "])));
});
var ScheduleContainer = exports.ScheduleContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n"])));
var ScheduleSection = exports.ScheduleSection = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n"])));