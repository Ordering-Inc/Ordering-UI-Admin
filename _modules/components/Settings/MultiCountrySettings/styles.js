"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SitesWrapper = exports.SitesListContainer = exports.SiteItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var SitesListContainer = exports.SitesListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 26px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n\n  h1 {\n    font-weight: 700;\n    font-size: 20px;\n    margin: 0;\n  }\n"])));
var SitesWrapper = exports.SitesWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  overflow: hidden;\n  > div:first-child {\n    border-top: none !important;\n  }\n\n  > div:last-child {\n    border-bottom: none !important;\n  } \n"])), function (props) {
  return props.theme.colors.borderColor;
});
var SiteItem = exports.SiteItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 12px 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: ", ";\n  border-bottom: 1px solid ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n  span {\n    font-size: 14px;\n  }\n  svg {\n    font-size: 20px;\n  }\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", " !important;\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.lightPrimary;
  });
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    cursor: not-allowed;\n    background-color: ", " !important;\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
});