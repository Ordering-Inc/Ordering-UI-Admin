"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceManagerContainer = exports.InvoiceListDetailsWrapper = exports.InvoiceListContainer = exports.InvoiceItemContainer = exports.IconWrapper = exports.HeaderContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var InvoiceManagerContainer = exports.InvoiceManagerContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: auto;\n"])));
var HeaderContainer = exports.HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 30px 0;\n\n  h1 {\n    font-weight: bold;\n    font-size: 20px;\n    margin: 0;\n    color: ", ";\n  }\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var InvoiceListContainer = exports.InvoiceListContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  display: flex;\n  flex-wrap: wrap;\n"])));
var InvoiceItemContainer = exports.InvoiceItemContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  margin-top: 15px;\n  padding: 10px;\n  border-radius: 7.6px;\n  width: 100%;\n  transition: all 0.3s;\n\n  &:hover {\n    background: ", ";\n  }\n\n  @media (min-width: 768px) {\n    width: 45%;\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    width: 30%;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.lightPrimary;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
});
var IconWrapper = exports.IconWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  min-height: 64px;\n  background: #F8F9FA;\n  border-radius: 7.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "])));
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.secundaryLight;
});
var InvoiceListDetailsWrapper = exports.InvoiceListDetailsWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 500;\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ", ";\n    margin: 0;\n  }\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.lightGray;
});