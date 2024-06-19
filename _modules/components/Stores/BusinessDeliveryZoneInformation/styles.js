"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.TypeSelectWrapper = exports.Row = exports.KmlButtonWrapper = exports.FormControl = exports.FormContainer = exports.ErrorText = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var FormContainer = exports.FormContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100% - 130px);\n\n  > button {\n    width: fit-content;\n    position: sticky;\n    top: 100%;\n    margin-top: 30px;\n    height: 42px;\n  }\n"])));
var TypeSelectWrapper = exports.TypeSelectWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .select {\n    background: ", ";\n    width: 100%;\n    border: none;\n    font-size: 14px;\n    color: ", ";\n    > div:first-child {\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
});
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 29px 0 20px 0;\n  position: relative;\n  > div {\n    position: relative !important; \n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  > button {\n    position: absolute;\n    font-size: 14px;\n    padding: 0 5px;\n    background: ", ";\n    top: 10px;\n    z-index: 10;\n    border: none;\n    box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;\n    color: ", ";\n    ", "\n    &:hover {\n      background: #eee;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      left: 10px;\n    "])));
});
var ErrorText = exports.ErrorText = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  margin: 20px 0;\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  label {\n    font-size: 14px;\n    margin-bottom: 9px;\n  }\n  input {\n    width: 100%;\n  }\n"])));
var Row = exports.Row = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 29px;\n\n  > div {\n    width: 45%;\n  }\n"])));
var KmlButtonWrapper = exports.KmlButtonWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 20px 0px;\n"])));