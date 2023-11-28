"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoneTbody = exports.ZoneContainer = exports.InfoBlock = exports.DeliveryZonesTableWrapper = exports.DeliveryZonesTable = exports.CheckboxWrapper = exports.CheckSkeleteon = exports.AddDeliveryZoneButton = exports.ActionsWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ZoneContainer = exports.ZoneContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 30px 0 20px 0;\n  @media (min-width: 1000px) {\n    max-width: 500px;\n  }\n"])));
var DeliveryZonesTable = exports.DeliveryZonesTable = _styledComponents.default.table(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-collapse: collapse;\n  thead {\n    border-bottom: 1px solid ", ";\n    tr {\n      th {\n        font-size: 12px;\n        font-weight: 700;\n        padding: 10px 0;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var DeliveryZonesTableWrapper = exports.DeliveryZonesTableWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 20px;\n"])));
var CheckSkeleteon = exports.CheckSkeleteon = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 18px;\n  height: 18px;\n  margin-right: 5px;\n"])));
var InfoBlock = exports.InfoBlock = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var ZoneTbody = exports.ZoneTbody = _styledComponents.default.tbody(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border-bottom: 1px solid ", ";\n  tr {\n    td {\n      font-size: 14px;\n      padding: 13px 0;\n      &.arrow {\n        font-size: 13px;\n        color: ", ";\n      }\n    }\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", ";\n      border-bottom: 1px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var ActionsWrapper = exports.ActionsWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var AddDeliveryZoneButton = exports.AddDeliveryZoneButton = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  padding: 10px 0;\n  cursor: pointer;\n  width: fit-content;\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});
var CheckboxWrapper = exports.CheckboxWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});