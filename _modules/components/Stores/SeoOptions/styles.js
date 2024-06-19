"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperShortDescription = exports.WrapperImage = exports.WrapperDescription = exports.UseSameInfoWrapper = exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SkipButton = exports.SkeletonWrapper = exports.SEOImage = exports.Container = exports.CameraWrapper = exports.ActionButtons = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: calc(100% - 130px);\n"])));
var WrapperShortDescription = exports.WrapperShortDescription = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  input,\n  textarea {\n    color: ", ";\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
});
var WrapperDescription = exports.WrapperDescription = (0, _styledComponents.default)(WrapperShortDescription)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n"])));
var WrapperImage = exports.WrapperImage = (0, _styledComponents.default)(WrapperShortDescription)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  padding-bottom: 52px;\n"])));
var SEOImage = exports.SEOImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 200px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref) {
  var isEdit = _ref.isEdit;
  return !isEdit && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    pointer-event: none;\n  "])));
});
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background-color: ", ";\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var isImage = _ref2.isImage;
  return isImage && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    opacity: 0.2;\n  "])));
}, function (_ref3) {
  var small = _ref3.small;
  return small ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #ADB5BD;\n  span {\n    margin: 0;\n  }\n\n  svg {\n    color: #CED4DA;\n    ", "\n  }\n"])), function (_ref4) {
  var small = _ref4.small;
  return small ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      width: 25px;\n      height: 25px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      width: 40px;\n      height: 35px;\n    "])));
});
var CameraWrapper = exports.CameraWrapper = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 8px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  position: absolute;\n  ", "\n  svg {\n    font-size: 18px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    left: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    right: 8px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryContrast;
});
var SkipButton = exports.SkipButton = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  ", "\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    margin-left: 60px;\n  "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin-right: 60px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});
var ActionButtons = exports.ActionButtons = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 50px;\n\n  > button {\n    height: 42px;\n  }\n"])));
var UseSameInfoWrapper = exports.UseSameInfoWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});