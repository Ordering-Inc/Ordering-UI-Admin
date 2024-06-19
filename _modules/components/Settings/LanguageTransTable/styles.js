"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationTableContainer = exports.TranslationTable = exports.TransBottomContainer = exports.TableHeader = exports.TableBody = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var TranslationTableContainer = exports.TranslationTableContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var TranslationTable = exports.TranslationTable = _styledComponents.default.table(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: 800px;\n  overflow: auto;\n"])));
var TableHeader = exports.TableHeader = _styledComponents.default.thead(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  th {\n    padding: 10px 0;\n    font-size: 12px;\n    font-weight: bold;\n    width: 50%;\n    &:first-child {\n      ", "\n    }\n\n    &:last-child {\n      padding-left: 25px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        padding-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding-right: 20px;\n      "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding-right: 25px;\n        padding-left: 0;\n      "])));
});
var TableBody = exports.TableBody = _styledComponents.default.tbody(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  td {\n    padding: 7px 0;\n    font-size: 12px;\n    width: 50%;\n\n    &:first-child {\n      ", "\n      > input {\n        border: none;\n        padding: 10px 0;\n      }\n    }\n\n    > input {\n      border: none;\n      width: 100%;\n      padding: 10px 0;\n      outline: none;\n\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        padding-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        padding-right: 20px;\n      "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        padding-right: 25px;\n        border-right: 1px solid ", ";\n      "])), function (props) {
    var _props$theme5;
    return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        padding-left: 25px;\n        border-left: 1px solid ", ";\n      "])), function (props) {
    var _props$theme6;
    return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.borderColor;
  });
});
var TransBottomContainer = exports.TransBottomContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  margin: 15px 0 38px 0;\n"])));