"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagsListWrapper = exports.TagsListContainer = exports.TagImageWrapper = exports.SelectButtonGroup = exports.SearchBarWrapper = exports.ProductTagWrapper = exports.AddNewLabel = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var TagsListContainer = exports.TagsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 5px 0;\n"])));
var SearchBarWrapper = exports.SearchBarWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n"])));
var SelectButtonGroup = exports.SelectButtonGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid ", ";\n  button {\n    font-size: 12px;\n\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-left: 16px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 16px;\n      "])));
});
var TagsListWrapper = exports.TagsListWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n"])));
var ProductTagWrapper = exports.ProductTagWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ", "\n\n  ", "\n\n  > div {\n    display: flex;\n    align-items: center;\n  }\n\n  span.tag-name {\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    &:hover {\n      background-color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  });
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var TagImageWrapper = exports.TagImageWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin: 0 14px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n  }\n  svg {\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});
var AddNewLabel = exports.AddNewLabel = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 15px 0;\n"])));