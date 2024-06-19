"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialBlock = exports.SalesContainer = exports.Container = exports.ConnectingContainer = exports.BlockHeader = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));
var SalesContainer = exports.SalesContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: hidden;\n  flex: 1;\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 45px;\n  }\n  @media (min-width: 576px) {\n    padding: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var SocialBlock = exports.SocialBlock = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 48px;\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n  }\n  button {\n    height: 44px;\n    border-radius: 8px;\n    margin-top: 12px;\n  }\n"])));
var BlockHeader = exports.BlockHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n\n  img {\n    width: 32px;\n    height: 32px;\n    object-fit: cover;\n    margin-right: 18px;\n    ", "\n  }\n\n  p {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 18px;\n      margin-right: 0;\n    "])));
});
var ConnectingContainer = exports.ConnectingContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 40px;\n  }\n\n  > button {\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));