"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.UpdateButtonWrapper = exports.ThemeStructureContainer = exports.SelectThemeContainer = exports.PageSelectWrapper = exports.PageHiddenCheckWrapper = exports.PageBlockTitle = exports.OptionHeader = exports.OptionContainer = exports.Option = exports.Container = exports.ComponentImage = exports.ComponentHeader = exports.ComponentContainer = exports.ColorPickerContainer = exports.BlockContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 3px 0;\n  ", "\n"])), function (_ref) {
  var isPlaceholder = _ref.isPlaceholder;
  return !isPlaceholder && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-transform: capitalize;\n  "])));
});
var ThemeStructureContainer = exports.ThemeStructureContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: calc(var(--vh, 1vh) * 100 - 220px);\n  .select-wrapper {\n    background: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var SelectThemeContainer = exports.SelectThemeContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  button {\n    height: 42px;\n    margin: 30px 0 20px 0;\n  }\n"])));
var PageBlockTitle = exports.PageBlockTitle = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 10px 5px;\n  font-weight: 600;\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  background: ", ";\n  font-size: 16px;\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundary;
});
var BlockContainer = exports.BlockContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 20px 5px;\n  border-bottom: 5px solid ", ";\n\n  h3 {\n    font-size: 14px;\n    font-weight: 600;\n    margin-top: 0px;\n    margin-bottom: 8px;\n    text-transform: capitalize;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var ComponentContainer = exports.ComponentContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  ", "\n  h4 {\n    font-size: 12px;\n    margin: 0px;\n    text-transform: capitalize;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding-left: 10px;\n  "])));
});
var ComponentHeader = exports.ComponentHeader = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n  > input {\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});
var OptionContainer = exports.OptionContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: 10px;\n  h5 {\n    font-size: 12px;\n    margin: 0;\n    text-transform: capitalize;\n  }\n  > input {\n    width: 100%;\n  }\n  .select-wrapper,\n  > input {\n    margin-top: 8px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var OptionHeader = exports.OptionHeader = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > input {\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});
var UpdateButtonWrapper = exports.UpdateButtonWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  padding-top: 20px;\n  button {\n    height: 42px;\n  }\n"])));
var ColorPickerContainer = exports.ColorPickerContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin-top: 8px;\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  padding: 8px;\n"])));
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  span {\n    margin: 0;\n    color: #ADB5BD;\n    font-size: 12px;\n  }\n\n  svg {\n    color: #CED4DA;\n    width: 32px;\n    height: 32px;\n  }\n"])));
var ComponentImage = exports.ComponentImage = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  height: 160px;\n  width: 160px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  background: ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n  };\n\n  img{\n    object-fit: contain;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var isMarginTop = _ref2.isMarginTop;
  return isMarginTop && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-top: 10px;\n  "])));
});
var PageSelectWrapper = exports.PageSelectWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  padding: 20px 0 30px 0;\n"])));
var PageHiddenCheckWrapper = exports.PageHiddenCheckWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n\n  > input {\n    ", "\n  }\n  h4 {\n    font-size: 12px;\n    margin: 0px;\n    text-transform: capitalize;\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});