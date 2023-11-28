"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.UploadWrapper = exports.SingleListBusinessContainer = exports.ProductTypeImage = exports.InfoBlock = exports.DragableContainer = exports.DragImageWrapper = exports.BusinessGeneralInfo = exports.BusinessEnableWrapper = exports.BusinessActionContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessActionContainer = exports.BusinessActionContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n"])));
var SingleListBusinessContainer = exports.SingleListBusinessContainer = _styledComponents.default.tbody(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  &:hover {\n    .action-btn {\n      display: block;\n    }\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", ";\n      border-bottom: 1px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var isAccept = _ref2.isAccept;
  return isAccept && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    tr {\n      border-top: 1px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref3) {
  var isBorderBottom = _ref3.isBorderBottom;
  return isBorderBottom && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    tr {\n      border-bottom: 1px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
var BusinessGeneralInfo = exports.BusinessGeneralInfo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  ", "\n  p {\n    margin: 0;\n  }\n  div.product_name {\n    flex: 1;\n    font-weight: 500;\n    font-size: 14px;\n    color: ", ";\n    margin: 0 10px;\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-width: 38px;\n  max-height: 38px;\n  min-width: 38px;\n  height: 38px;\n  width: 38px;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  border-radius: 10px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});
var InfoBlock = exports.InfoBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  div {\n    font-size: 14px;\n    color: ", ";\n    transition: all 0.3s;\n    &.product_description {\n      word-break: break-word;\n      font-size: 10px;\n      color: ", ";\n      resize: none;\n      width: 100%;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      overflow: hidden;\n    }\n    &.product_price {\n      white-space: nowrap;\n    }\n    &.product_tax,\n    &.product_fee {\n      white-space: nowrap;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
});
var BusinessEnableWrapper = exports.BusinessEnableWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});
var ProductTypeImage = exports.ProductTypeImage = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  min-height: 38px;\n  min-width: 38px;\n  height: 38px;\n  width: 38px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  ", "\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var UploadWrapper = exports.UploadWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  background: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    color: white;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var DragableContainer = exports.DragableContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var DragImageWrapper = exports.DragImageWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  img {\n    ", "\n    &:hover {\n      cursor: grab;\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-left: 14px;\n    "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-right: 14px;\n    "])));
});