"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupContent = exports.PopupButtonWrapper = exports.PointGroup = exports.InputWrapper = exports.HeaderWrapper = exports.EmailPreviewWrapper = exports.EmailPreviewHeader = exports.EmailPreviewContent = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  input, textarea {\n    width: 100%;\n  }\n  textarea {\n    height: 80px;\n  }\n  margin-bottom: 35px;\n\n  .select {\n    border: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});
var EmailPreviewWrapper = exports.EmailPreviewWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  max-width: 317px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border: none;\n    background: ", ";\n    height: 200px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var EmailPreviewHeader = exports.EmailPreviewHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 17px;\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
var PointGroup = exports.PointGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0px 4px;\n  height: 100%;\n  > div {\n    width: 7px;\n    height: 7px;\n    min-width: 7px;\n    border-radius: 50%;\n    background-color: #CED4DA;\n    margin: 0px 4px;\n  }\n"])));
var EmailPreviewContent = exports.EmailPreviewContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: rgba(20, 20, 20, 0.17);\n  padding: 13px 30px;\n\n  > h2 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    text-align: center;\n    font-weight: 700;\n    font-size: 14px;\n  }\n  p {\n    margin: 0px;\n    font-weight: 400;\n    font-size: 12px;\n  }\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
var PopupContent = exports.PopupContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  padding: 12px;\n  background-color: ", ";\n\n  > p {\n    font-weight: 400;\n    font-size: 10px;\n    line-height: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.white;
});
var HeaderWrapper = exports.HeaderWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  > h1 {\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    margin: 0px;\n  }\n\n  svg {\n    min-width: 16px;\n    font-size: 16px;\n    margin-left: 10px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 0px;\n      margin-right: 10px;\n    "])));
});
var PopupButtonWrapper = exports.PopupButtonWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  button {\n    width: 100%;\n  }\n"])));