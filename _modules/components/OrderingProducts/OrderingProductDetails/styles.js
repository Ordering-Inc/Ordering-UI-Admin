"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.Tabs = exports.Tab = exports.RightHeader = exports.DetailHeaderContainer = exports.Container = exports.ActionSelectorWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  padding: 20px;\n"])));
var RightHeader = exports.RightHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var Tabs = exports.Tabs = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 1px solid ", ";\n  margin-bottom: 20px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  user-select: none;\n  padding: 10px 0px;\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  white-space: nowrap;\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border-bottom: 2px solid;\n    font-weight: 500;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return !active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
});
var DetailHeaderContainer = exports.DetailHeaderContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 25px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 25px;\n  "])));
});
var ActionSelectorWrapper = exports.ActionSelectorWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  .select {\n    border: none;\n\n    > div:first-child {\n      padding: 5px;\n      border-radius: 8px;\n      svg {\n        font-size: 20px;\n      }\n      &:hover {\n        background: ", " !important;\n      }\n      &:active {\n        background: ", " !important;\n      }\n    }\n    .select-arrow {\n      display: none;\n    }\n    .list {\n      border: none;\n      box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n      .list-wrapper {\n        > div {\n          font-size: 14px;\n          color: #E63757;\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});
var TitleWrapper = exports.TitleWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n\n  h2 {\n    font-weight: bold;\n    font-size: 20px;\n    color: ", ";\n    margin: 0;\n    margin-right: 20px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0;\n    "])));
});