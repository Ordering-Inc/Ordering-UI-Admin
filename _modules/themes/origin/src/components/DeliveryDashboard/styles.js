"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperTab = exports.WrapperQuickShow = exports.WrapperOrdersAndDriver = exports.WrapperOrderlist = exports.Tab = exports.OrdersOpenButton = exports.OrdersCloseButton = exports.OrderAndDriverListContainer = exports.DeliveryDashboardContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DeliveryDashboardContainer = exports.DeliveryDashboardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  height: calc(100% - 20px);\n  background: #FAFAFA;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n\n  @media (max-width: 1200px) {\n    height: calc(100% - 30px);\n  }\n\n  @media (max-width: 576px) {\n    height: calc(100vh - 65px);\n  }\n"])));
var OrdersOpenButton = exports.OrdersOpenButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});
var OrdersCloseButton = exports.OrdersCloseButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n\n  @media (max-width: 576px) {\n    position: fixed;\n    z-index: 200;\n    top: 80px;\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});
var WrapperOrdersAndDriver = exports.WrapperOrdersAndDriver = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 350px;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 12px;\n  position: absolute;\n  background: ", ";\n  right: 10px;\n  top: 15px;\n  height: calc(100% - 30px);\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    position: fixed;\n    z-index: 100;\n    top: 75px;\n    height: calc(100vh - 80px);\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
var WrapperTab = exports.WrapperTab = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  border-bottom: 1px solid #F2F2F2;\n"])));
var Tab = exports.Tab = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 50%;\n  text-align: center;\n  color: #C3C3C3;\n  cursor: pointer;\n  font-weight: 500;\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    color: #1C202E;\n  "])));
});
var WrapperQuickShow = exports.WrapperQuickShow = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 56px;\n  padding: 5px 20px;\n  justify-content: flex-end;\n  column-gap: 10px;\n\n  svg {\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n  }\n"])));
var OrderAndDriverListContainer = exports.OrderAndDriverListContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: calc(100% - 91px);\n"])));
var WrapperOrderlist = exports.WrapperOrderlist = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n"])));