"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOrderListContent = exports.WrapperNoneOrders = exports.InnerNoneOrdersContainer = exports.InfoMessage = exports.ColumnPopoverContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperNoneOrders = exports.WrapperNoneOrders = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto;\n\n  "])));
var InnerNoneOrdersContainer = exports.InnerNoneOrdersContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 15px;\n  img {\n    width: 250px;\n  }\n\n  p {\n    font-size: 16px;\n    margin: 0px 0 40px 0;\n  }\n\n  button {\n    height: 44px;\n  }\n\n  ", "\n\n  @media (min-width: 768px) {\n    img {\n      width: 305px;\n    }\n    ", "\n  }\n"])), function (_ref) {
  var small = _ref.small;
  return small && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    img {\n      width: 150px;\n    }\n  "])));
}, function (_ref2) {
  var small = _ref2.small;
  return small && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      img {\n        width: 250px;\n      }\n    "])));
});
var WrapperOrderListContent = exports.WrapperOrderListContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var maxHeight = _ref3.maxHeight;
  return maxHeight && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    height: 100%;\n  "])));
});
var InfoMessage = exports.InfoMessage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  z-index: 100;\n  bottom: 40px;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 6px 15px;\n  box-sizing: border-box;\n  margin: 10px 0px 0px 0px !important;\n  max-width: 300px;\n  right: 0px;\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  span {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n    margin: 0 10px;\n    flex: 1;\n  }\n\n  a {\n    font-size: 12px;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 768px) {\n    padding: 8px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    ", "\n    ", "\n    ", "\n\n    span {\n      white-space: nowrap;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.info;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.info;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (_ref4) {
  var isLateralBar = _ref4.isLateralBar;
  return isLateralBar ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      right: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      right: 270px;\n    "])));
}, function (_ref5) {
  var isLateralBar = _ref5.isLateralBar;
  return isLateralBar ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      bottom: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      bottom: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      left: 0px;\n      right: initial;\n    "])));
});
var ColumnPopoverContainer = exports.ColumnPopoverContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  button {\n    right: 0px;\n    position: absolute;\n    transform: translateY(-3px);\n    z-index: 1000;\n    background: white;\n    padding: 0 10px;\n  }\n"])));