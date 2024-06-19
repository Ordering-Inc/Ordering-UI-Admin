"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchWrapper = exports.PaginationWrapper = exports.CountryListWrapper = exports.CountryItem = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 30px;\n    margin-top: 0px;\n    margin-bottom: 24px;\n  }\n"])));
var SearchWrapper = exports.SearchWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  input {\n    width: 100%;\n  }\n"])));
var CountryListWrapper = exports.CountryListWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding-top: 17px;\n"])));
var CountryItem = exports.CountryItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0px;\n  cursor: pointer;\n  width: fit-content;\n\n  span.name {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 18px;\n    margin-left: 10px;\n    user-select: none;\n    ", "\n  }\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.checked {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  position: sticky;\n  top: 100%;\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));
var PaginationWrapper = exports.PaginationWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"])));