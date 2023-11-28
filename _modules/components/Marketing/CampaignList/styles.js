"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tbody = exports.Table = exports.SwitchWrapper = exports.StatusWrapper = exports.StatusPoint = exports.PagesBottomContainer = exports.LinkText = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 410px);\n  overflow: auto;\n\n  ", "\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 385px);\n  }\n\n  @media (min-width: 992px) {\n    max-height: calc(100vh - 305px);\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    max-height: calc(100vh - 273px);\n    ", "\n  }\n"])), function (_ref) {
  var noScroll = _ref.noScroll;
  return noScroll && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    overflow: hidden;\n  "])));
}, function (_ref2) {
  var isSelectedOrders = _ref2.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      max-height: calc(100vh - 345px);\n    "])));
}, function (_ref3) {
  var isSelectedOrders = _ref3.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      max-height: calc(100vh - 345px);\n    "])));
});
var Table = exports.Table = _styledComponents.default.table(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 700px;\n\n  th,\n  td {\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n\n    &:first-child {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n    &.action {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n  }\n\n  td {\n    &.right-border {\n      height: 0px;\n      > div {\n        padding: 5px 0px;\n        width: 100%;\n        height: 100%;\n        ", "\n      }\n    }\n  }\n\n  th {\n    padding-top: 0px;\n    font-weight: 700;\n    font-size: 12px;\n    padding: 5px 15px;\n    &.allow-colums {\n      width: 50px;\n    }\n  }\n\n  thead {\n    tr {\n      width: 100%;\n      border-bottom: solid 1px ", ";\n      th {\n        color: ", ";\n        white-space: nowrap;\n        z-index: 100;\n        background: ", ";\n      }\n    }\n  }\n\n  ", "\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0px;\n    &.bold {\n      font-weight: 500;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          border-left: 1px solid #E9ECEF;\n          padding-left: 15px;\n        "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          border-right: 1px solid #E9ECEF;\n          padding-right: 15px;\n        "])));
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref4) {
  var isRelative = _ref4.isRelative;
  return isRelative && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    thead {\n      tr {\n        th {\n          position: sticky;\n          top: 0px;\n        }\n      }\n    }\n  "])));
});
var Tbody = exports.Tbody = _styledComponents.default.tbody(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n  &.active {\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", " !important;\n      border-bottom: 1px solid ", " !important;\n\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref5) {
  var isCustomStyle = _ref5.isCustomStyle;
  return isCustomStyle && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        &:first-child {\n          ", "\n        }\n        &:last-child {\n          ", "\n        }\n      "])), function (props) {
    var _props$theme2;
    return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n            border-right: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    }) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n            border-left: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    });
  }, function (props) {
    var _props$theme3;
    return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n            border-left: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    }) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n            border-right: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    });
  });
});
var SwitchWrapper = exports.SwitchWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > .campaign-enabled {\n    margin-bottom: 0px;\n    font-size: 14px;\n    line-height: 24px;\n    margin-right: 7px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n      margin-right: 0px;\n    "])));
});
var StatusWrapper = exports.StatusWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  p {\n    text-transform: capitalize;\n    margin-right: 12px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n      margin-right: 0px;\n    "])));
});
var StatusPoint = exports.StatusPoint = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: #E9ECEF;\n"])));
var PagesBottomContainer = exports.PagesBottomContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  margin: 15px 0;\n"])));
var LinkText = exports.LinkText = _styledComponents.default.span(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});