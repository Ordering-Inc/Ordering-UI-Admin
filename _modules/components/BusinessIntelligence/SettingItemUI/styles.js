"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.Title = exports.SettingItemDescription = exports.SettingItemContent = exports.SettingItemContainer = exports.IconWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var SettingItemContainer = exports.SettingItemContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  margin: 15px 0;\n  padding: 20px 10px;\n  transition: all 0.3s;\n  border-radius: 8px;\n  cursor: pointer;\n  border: 1px solid transparent;\n\n  ", "\n\n  &:hover {\n    background: #E9F2FE;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 1px solid #2C7BE5 !important;\n  "])));
});
var IconWrapper = exports.IconWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  min-height: 64px;\n  background: #F8F9FA;\n  border-radius: 7.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  margin-bottom: 10px;\n  ", "\n\n  @media (min-width: 577px) {\n    align-self: flex-start;\n    margin-bottom: 0;\n  }\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.secundaryLight;
});
var SettingItemContent = exports.SettingItemContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var TitleContainer = exports.TitleContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var Title = exports.Title = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 13px;\n  color: ", ";\n  margin-bottom: 8px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var SettingItemDescription = exports.SettingItemDescription = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-weight: normal;\n  font-size: 12px;\n  color: ", ";\n\n  @media (min-width: 577px) {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});