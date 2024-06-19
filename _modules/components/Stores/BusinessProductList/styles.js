"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperNotFound = exports.ProductListSpreadContainer = exports.ProductListContainer = exports.ProductListBottom = exports.ListContent = exports.BusinessProductListTable = exports.AddProductBtnWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ListContent = exports.ListContent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  border: none;\n  \n  @media (min-width: 768px) {\n    border-left: 1px solid #E9ECEF;\n  }\n"])));
var ProductListContainer = exports.ProductListContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0;\n  max-height: calc(100vh - 420px);\n  overflow: auto;\n\n  @media (min-width: 576px) {\n    ", "\n  }\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 350px);\n  }\n\n  @media (min-width: 993px) {\n    max-height: calc(100vh - 360px);\n  }\n"])), function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n    "])));
});
var ProductListSpreadContainer = exports.ProductListSpreadContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0;\n\n  @media (min-width: 576px) {\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n    "])));
});
var BusinessProductListTable = exports.BusinessProductListTable = _styledComponents.default.table(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n  color: ", ";\n  transition: all 0.3s;\n\n  th {\n    font-size: 12px;\n    font-weight: 700;\n  }\n\n  td, th {\n    padding: 15px;\n    &:first-child {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n  }\n\n  th.more {\n    width: 50px;\n  }\n\n  th.price {\n    max-width: 100px;\n  }\n\n  th.regular-price {\n    white-space: nowrap;\n  }\n\n  th.description {\n    width: 35%;\n  }\n\n  th.fee_fixed,\n  th.fee_percentage {\n    white-space: nowrap;\n  }\n\n  th.id,\n  td.id {\n    width: 10%;\n  }\n\n  thead {\n    border-bottom: 1px solid ", ";\n    tr {\n      th {\n        ", "\n        background: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var noFixedHeader = _ref.noFixedHeader;
  return !noFixedHeader && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          position: sticky;\n          top: 0px;\n          z-index: 100;\n        "])));
}, function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
});
var WrapperNotFound = exports.WrapperNotFound = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  text-align: center;\n  font-weight: 500;\n  margin: 20px;\n"])));
var AddProductBtnWrapper = exports.AddProductBtnWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-top: 12px;\n  margin-bottom: 15px;\n"])));
var ProductListBottom = exports.ProductListBottom = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  \n  @media (min-width: 768px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 30px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 30px;\n    "])));
});