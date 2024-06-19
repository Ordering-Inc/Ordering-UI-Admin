"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimezoneListItem = exports.TimeZoneSelectWrapper = exports.TimeZoneSearchWrapper = exports.TimeZoneSearchInput = exports.TimeZoneListContainer = exports.SearchIconWrapper = exports.AnalyticsTimeZoneContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var AnalyticsTimeZoneContainer = exports.AnalyticsTimeZoneContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  > button {\n    background: #F8F9FA;\n    border-radius: 7.6px;\n    padding: 7px 12px;\n    font-size: 14px;\n    color: ", ";\n    border: none;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
var TimeZoneSelectWrapper = exports.TimeZoneSelectWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 300px;\n  top: 100%;\n  right: 0;\n  padding: 25px;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  z-index: 100;\n  margin-top: 18px;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.borderColor;
});
var TimeZoneSearchWrapper = exports.TimeZoneSearchWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var SearchIconWrapper = exports.SearchIconWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  ", "\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    right: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
});
var TimeZoneSearchInput = exports.TimeZoneSearchInput = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border: 1px solid #DEE2E6;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n  font-size: 13px;\n  padding: 8px 30px 8px 14px;\n  width: 100%;\n  outline: none;\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 8px 14px 8px 30px;\n  "])));
});
var TimeZoneListContainer = exports.TimeZoneListContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  max-height: 350px;\n  overflow: auto;\n"])));
var TimezoneListItem = exports.TimezoneListItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding: 10px 3px;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n  color: ", ";\n  cursor: pointer;\n  transition: all 0.3s;\n  &:hover {\n    background: #E9ECEF;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});