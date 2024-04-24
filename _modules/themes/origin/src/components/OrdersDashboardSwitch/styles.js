"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchPane = exports.SwitchItem = exports.SwitchContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SwitchContainer = exports.SwitchContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid #D3D3D3;\n  border-radius: 6px;\n  padding: 5px;\n  margin-left: 60px;\n  position: relative;\n\n  @media (max-width: 1400px) {\n    margin-left: 20px;\n  }\n\n  @media (max-width: 600px) {\n    margin-left: 0px;\n  }\n"])));
var SwitchItem = exports.SwitchItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 110px;\n  text-align: center;\n  font-size: 13px;\n  text-transform: capitalize;\n  padding: 4px 0;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  @media (max-width: 560px) {\n    width: 80px;\n  }\n"])), function (_ref) {
  var horizontalBorder = _ref.horizontalBorder;
  return horizontalBorder && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-left: 1px solid;\n    border-right: 1px solid;\n    border-color: #C3C3C3;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: #fff;\n  "])));
});
var SwitchPane = exports.SwitchPane = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #000;\n  width: 110px;\n  height: 28px;\n  z-index: -1;\n  border-radius: 2px;\n  transition: all 0.3s ease;\n  ", "\n  ", "\n\n  @media (max-width: 560px) {\n    width: 80px;\n\n    ", "\n    ", "\n  }\n"])), function (_ref3) {
  var deliveryDashboard = _ref3.deliveryDashboard;
  return deliveryDashboard && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 110px;\n  "])));
}, function (_ref4) {
  var messages = _ref4.messages;
  return messages && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 220px;\n  "])));
}, function (_ref5) {
  var deliveryDashboard = _ref5.deliveryDashboard;
  return deliveryDashboard && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 80px;\n    "])));
}, function (_ref6) {
  var messages = _ref6.messages;
  return messages && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 160px;\n    "])));
});