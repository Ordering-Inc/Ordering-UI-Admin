"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOrderListContent = exports.WrapperNoneOrders = exports.WrapSkeltonCell = exports.SkeletonText = exports.SkeletonOrder = exports.SkeletonCell = exports.SkeletonCard = exports.SkeletonBlock = exports.OrderStatusTitle = exports.InnerOrderListContent = exports.InnerNoneOrdersContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperNoneOrders = exports.WrapperNoneOrders = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    overflow: auto;\n\n    img {\n        width: 250px;\n    }\n\n    ", "    \n"])), function (_ref) {
  var small = _ref.small;
  return small && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        img {\n            width: 150px;\n        }\n    "])));
});
var InnerNoneOrdersContainer = exports.InnerNoneOrdersContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n"])));
var OrderStatusTitle = exports.OrderStatusTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    font-size: 20px;\n    color: ", ";\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-weight: 500;\n    padding: 0 5px;\n\n    .rotate {\n        transform: rotate(-90deg);\n    }\n    .collapse_icon {\n        transition: transform 0.3s ease;\n        padding: 5px;\n        cursor: pointer;\n    }\n"])), function (_ref2) {
  var _theme$colors;
  var theme = _ref2.theme;
  return (theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.textBlackContrast) || '#000';
});
var SkeletonOrder = exports.SkeletonOrder = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    width: auto;\n    margin: 0 auto;\n"])));
var SkeletonCard = exports.SkeletonCard = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n    padding: 15px 10px;\n    box-shadow: 0px 0px 3px #00000029;\n    border-radius: 6px;\n    ", "\n    align-items: flex-start;\n\n    & > div {\n        &:first-child {\n            padding-top: 40px;\n        }\n    }\n"])), function (_ref3) {
  var small = _ref3.small;
  return small && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      flex-direction: column;\n      margin-bottom: 0px;\n    "])));
});
var SkeletonCell = exports.SkeletonCell = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    column-gap: 5px\n"])));
var SkeletonBlock = exports.SkeletonBlock = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n"])));
var SkeletonText = exports.SkeletonText = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    text-align: left\n    ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        text-align: right;\n    "])));
});
var InnerOrderListContent = exports.InnerOrderListContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding: 5px;\n    margin-bottom: 40px;\n\n    ", "\n"])), function (_ref4) {
  var small = _ref4.small;
  return small && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        overflow: initial;\n        max-height: initial;\n    "])));
});
var WrapperOrderListContent = exports.WrapperOrderListContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n"])));
var WrapSkeltonCell = exports.WrapSkeltonCell = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    align-items: flex-start;\n"])));