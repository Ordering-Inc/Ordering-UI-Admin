"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebhooksContainer = exports.WebhookAddForm = exports.WebhookAddContainer = exports.UrlInputWrapper = exports.Title = exports.HookSelectWrapper = exports.DelaySelectWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WebhooksContainer = exports.WebhooksContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  @media (min-width: 576px) {\n    padding: 20px;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n  margin-bottom: 30px;\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});
var UrlInputWrapper = exports.UrlInputWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 0 10px;\n  box-sizing: border-box;\n\n  input {\n    width: 100%;\n    border: 1px solid #c2c2c2;\n    border-radius: 5px;\n    padding: 6px 10px;\n    outline: none;\n    font-size: 14px;\n    box-sizing: border-box;\n  }\n\n  ", "\n"])), function (_ref) {
  var inActive = _ref.inActive;
  return inActive && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    > input {\n      cursor: not-allowed;\n    }\n  "])));
});
var WebhookAddForm = exports.WebhookAddForm = _styledComponents.default.form(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
var WebhookAddContainer = exports.WebhookAddContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 20px;\n  color: ", ";\n  font-size: 13px;\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});
var HookSelectWrapper = exports.HookSelectWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 40%;\n\n  ", "\n\n  .select {\n    > div {\n      overflow: hidden;\n      > div {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: block;\n      }\n    }\n  }\n"])), function (_ref2) {
  var inActive = _ref2.inActive;
  return inActive && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    > div {\n      cursor: not-allowed;\n    }\n  "])));
});
var DelaySelectWrapper = exports.DelaySelectWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 30%;\n"])));