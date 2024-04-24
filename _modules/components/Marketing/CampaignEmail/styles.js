"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperEditor = exports.Preview = exports.PointGroup = exports.InputWrapper = exports.EmailPreviewWrapper = exports.EmailPreviewHeader = exports.EmailPreviewContent = exports.Description = exports.Container = exports.ContactWrapper = exports.ButtonWrapper = exports.BottomSpace = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > label {\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  > input, textarea {\n    width: 100%;\n  }\n  > textarea {\n    height: 80px;\n  }\n  margin-bottom: 35px;\n\n  .select {\n    border: 1px solid ", ";\n  }\n"])), function (props) {
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
var EmailPreviewContent = exports.EmailPreviewContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 13px 30px;\n\n  > h2 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    text-align: center;\n    font-weight: 700;\n    font-size: 14px;\n  }\n  p {\n    margin: 0px;\n    font-weight: 400;\n    font-size: 12px;\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
var WrapperEditor = exports.WrapperEditor = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  .note-editor {\n    border-radius: 8px;\n    border: 1px solid ", ";\n\n    .note-toolbar {\n      border-bottom: 1px solid ", ";\n    }\n\n    .note-btn {\n      &:hover,\n      &:focus {\n        background-color: ", ";\n        box-shadow: none;\n      }\n    }\n\n    .note-dropdown-menu {\n      a {\n        color: #000;\n      }\n\n      h1 {\n        font-size: 36px;\n      }\n    }\n  }\n  .modal-header .close {\n    padding: 0px !important;\n    margin: 0px !important;\n  }\n  .modal-header {\n    align-items: center !important;\n  }\n  .checkbox input {\n    margin-right: 10px;\n    margin-top: 3px;\n  }\n  .modal-body {\n    > div:first-child {\n      display: none;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
var Preview = exports.Preview = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  overflow: hidden;\n"])));
var Description = exports.Description = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 10px 0px;\n  span {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var BottomSpace = exports.BottomSpace = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 1px;\n"])));
var ContactWrapper = exports.ContactWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    font-size: 14px;\n    text-align: center;\n    margin-bottom: 14px;\n  }\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));