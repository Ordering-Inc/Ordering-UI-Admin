"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebhookListTable = exports.WebhookListContainer = exports.SelectorWrapper = exports.PagesBottomContainer = exports.Header = exports.DropdownButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WebhookListContainer = exports.WebhookListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n\n  ", "\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0px;\n  }\n\n  button {\n    height: 42px;\n  }\n\n  @media (min-width: 576px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 35px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 35px;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 65px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 65px;\n    "])));
});
var WebhookListTable = exports.WebhookListTable = _styledComponents.default.table(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 25px;\n\n  thead {\n    border-bottom: 1px solid ", ";\n    th {\n      padding: 10px 0;\n    }\n  }\n  tr {\n    width: 100%;\n  }\n\n  th {\n    &:nth-child(2) {\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n    &:nth-child(3) {\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n  }\n\n  th,\n  td {\n    &:not(:last-child) {\n      > div {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n    font-size: 12px;\n    max-width: 200px;\n  \n    &:first-child {\n      width: 40%;\n      box-sizing: border-box;\n      > div {\n        ", "\n\n        input {\n          width: 100%;\n          padding: 3px;\n          border: 1px solid ", ";\n          outline: none;\n        }\n      }\n    }\n    &:nth-child(2) {\n      width: 24%;\n      > div {\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n    }\n    &:nth-child(3) {\n      width: 26%;\n      > div {\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n    }\n  }\n\n  tbody {\n    border-bottom: 1px solid ", ";\n    td {\n      padding-top: 9px;\n      padding-bottom: 9px;\n      &:not(:first-child) {\n        > div {\n          height: 40px;\n          display: flex;\n          align-items: center;\n          ", "\n        }\n      }\n      &:last-child {\n        > div {\n          display: flex;\n          justify-content: flex-end;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          padding-left: 20px;\n        "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          padding-right: 20px;\n        "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n            border-right: 1px solid ", ";\n          "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n            border-left: 1px solid ", ";\n          "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var DropdownButtonWrapper = exports.DropdownButtonWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  button {\n    background: transparent !important;\n    border: none;\n    padding: 0px;\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n    }\n\n    &:after {\n      display: none;\n    }\n  }\n\n  .show {\n    button {\n      background: ", " !important;\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n      }\n      .dropdown-item:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
});
var SelectorWrapper = exports.SelectorWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .select {\n    border: none;\n    > div {\n      padding: 0;\n    }\n  }\n"])));
var PagesBottomContainer = exports.PagesBottomContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  margin: 15px 0;\n\n  > button {\n    height: 44px;\n  }\n"])));