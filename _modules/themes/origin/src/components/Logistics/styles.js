"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WraaperLogs = exports.TimeofSent = exports.SkeletonHitory = exports.Reason = exports.BubbleConsole = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WraaperLogs = exports.WraaperLogs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8em;\n  border-radius: 97px;\n"])));
var BubbleConsole = exports.BubbleConsole = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  padding: 15px 25px;\n  max-width: 40%;\n  margin-bottom: 15px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  @media (min-width: 1024px){\n    max-width: 30%\n  }\n"])));
var TimeofSent = exports.TimeofSent = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: right;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    text-align: left;\n  "])));
});
var Reason = exports.Reason = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 0px;\n"])));
var SkeletonHitory = exports.SkeletonHitory = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  column-gap: 20px;\n\n  span {\n    border-radius: 30px;\n  }\n\n  @media (max-width: 576px) {\n    span {\n      width: 250px !important;\n    }\n  }\n"])));