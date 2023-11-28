"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.EditButton = exports.ConditionsContainer = exports.ConditionItem = exports.CheckboxWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ConditionsContainer = exports.ConditionsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  padding: 20px;\n  box-sizing: border-box;\n  \n  > button {\n    height: 44px;\n    margin: 30px 0;\n  }\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding-bottom: 25px;\n  border-bottom: 1px solid ", ";\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var ConditionItem = exports.ConditionItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  padding: 12px 0;\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    span {\n      font-size: 14px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "])));
});
var EditButton = exports.EditButton = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 2px 7px;\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n  &:hover {\n    background-color: #1507260a;\n  }\n  &:active {\n    background-color: #1507261a;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var CheckboxWrapper = exports.CheckboxWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    color: #FFF;\n    font-size: 16px;\n  }\n  ", "\n\n  ", "\n"])), function (_ref) {
  var isCursorAllowed = _ref.isCursorAllowed;
  return !isCursorAllowed && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    cursor: not-allowed;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    /* cursor: pointer; */\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    border: 1px solid #B1BCCC;\n  "])));
});