"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.TabWrapper = exports.Tab = exports.SettingsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var SettingsContainer = exports.SettingsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 60px;\n  > h2 {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 36px;\n    margin-bottom: 8px;\n    margin-top: 0;\n    text-align: center;\n    span {\n      color: ", ";\n    }\n  }\n  > p {\n    margin-top: 0;\n    margin-bottom: 30px;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var TabWrapper = exports.TabWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n"])));
var Tabs = exports.Tabs = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  padding-bottom: 14px;\n  transition: all 0.2s ease-out;\n  :not(:last-child) {\n    margin-right: 32px;\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    padding-bottom: 13px;\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});