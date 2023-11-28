"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 0px 20px;\n  margin-top: 25px;\n  > img {\n    width: 100%;\n    max-height: 650px;\n    object-fit: cover;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    padding: 0px 40px;\n    img {\n      width: 40%;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    margin-right: 50px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: 50px;\n      margin-right: 0px;\n    "])));
});
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px 0px;\n  margin-left: 20px;\n  ", "\n\n  > h2 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 48px;\n    margin-top: 0px;\n    margin-bottom: 7px;\n    text-transform: capitalize;\n  }\n\n  > p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 30px;\n  }\n\n  @media (min-width: 576px) {\n    margin-left: 45px;\n    ", "\n  }\n\n  @media (min-width: 1440px) {\n    > h2 {\n      font-size: 36px;\n    }\n    > p {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n    margin-left: 0px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 45px;\n      margin-left: 0px;\n    "])));
});