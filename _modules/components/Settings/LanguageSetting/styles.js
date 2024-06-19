"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioWrapper = exports.LanguageDetailsContainer = exports.FieldContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var LanguageDetailsContainer = exports.LanguageDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 26px 40px 70px 40px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n\n  h1 {\n    font-weight: 700;\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n"])));
var FieldContainer = exports.FieldContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  ", "\n\n  .name {\n    flex: 1;\n    font-size: 14px;\n  }\n\n  .default {\n    width: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    svg {\n      cursor: pointer;\n      font-size: 20px;\n    }\n  }\n\n  .checked {\n    svg {\n      color: ", ";\n    }\n  }\n\n  .status {\n    width: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])), function (_ref) {
  var isHeader = _ref.isHeader;
  return isHeader && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n    margin-bottom: 15px;\n    > div {\n      font-weight: 700;\n      font-size: 14px;\n    }\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (props) {
  return props.theme.colors.primary;
});
var RadioWrapper = exports.RadioWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var isDisabled = _ref2.isDisabled;
  return isDisabled && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    svg {\n      color: ", ";\n      opacity: 0.6;\n    }\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
});