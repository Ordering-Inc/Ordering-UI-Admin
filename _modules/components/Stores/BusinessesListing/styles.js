"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperView = exports.ViewMethodButton = exports.ViewContainer = exports.EmptyBusinessWrapper = exports.ButtonGroup = exports.BusinessListingContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessListingContainer = exports.BusinessListingContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: hidden;\n\n  ", "\n\n  @media print {\n    display: none;\n  }\n"])), function (_ref) {
  var isAdd = _ref.isAdd;
  return isAdd && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    max-height: 100vh;\n    overflow: auto;\n  "])));
});
var ViewContainer = exports.ViewContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  margin-top: 10px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var WrapperView = exports.WrapperView = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  > span:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});
var ViewMethodButton = exports.ViewMethodButton = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n\n  svg {\n    font-size: 20px;\n    transition: all .2s ease-in;\n  }\n\n  ", "\n\n  &:hover {\n    svg {\n      font-size: 24px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
var ButtonGroup = exports.ButtonGroup = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-direction: column;\n  > div {\n    width: 100%;\n  }\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n    align-items: center;\n    ", "\n  }\n\n  > button {\n    height: 42px;\n    display: flex;\n    align-items: center;\n    svg {\n      min-width: 14px;\n      margin-left: 5px;\n      ", "\n    }\n  }\n"])), function (_ref3) {
  var isSelect = _ref3.isSelect;
  return isSelect && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      > div {\n        width: calc(100% - 100px);\n      }\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n        margin-right: 5px;\n      "])));
});
var EmptyBusinessWrapper = exports.EmptyBusinessWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 140px);\n\n  > img {\n    width: 90%;\n    max-width: 500px;\n  }\n\n  button {\n    height: 44px;\n    margin-top: 30px;\n  }\n  @media (min-width: 576px) {\n    > img {\n      width: 60%;\n    }\n  }\n"])));