"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperIndicator = exports.WrapItemView = exports.OrdersListContainer = exports.OrdersInnerContent = exports.OrdersContent = exports.OrderNotification = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrdersListContainer = exports.OrdersListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  padding: 30px 20px;\n  box-sizing: border-box;\n\n  ", "\n\n  @media (max-width: 1400px) {\n    width: 100%;\n    padding-right: 0px;\n  }\n\n  @media (max-width: 600px) {\n    padding: 10px 0;\n  }\n\n  transition: all 0.5s;\n"])), function (_ref) {
  var deliveryAndMessageUI = _ref.deliveryAndMessageUI;
  return deliveryAndMessageUI && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
});
var OrdersContent = exports.OrdersContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(100% - 100px);\n  margin-left: 100px;\n  display: flex;\n  justify-content: center;\n  min-width: 300px;\n\n  @media (max-width: 992px) {\n    width: calc(100% - 42px);\n    margin-left: 42px;\n  }\n\n  @media (max-width: 600px) {\n    width: 95%;\n    margin: 0px auto;\n  }\n\n  ", "\n"])), function (_ref2) {
  var messageUI = _ref2.messageUI;
  return messageUI && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    width: 100%;\n    @media (max-width: 992px) {\n      width: 100%;\n      margin-left: 0px;\n    }\n  "])));
});
var OrdersInnerContent = exports.OrdersInnerContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 92%;\n\n  @media (max-width: 1400px) {\n    width: 95%;\n  }\n"])));
var WrapperIndicator = exports.WrapperIndicator = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 100px;\n  height: 50px;\n  border-radius: 5px;\n  background: #151824;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 500;\n  font-size: 24px;\n"])));
var OrderNotification = exports.OrderNotification = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n  p {\n    text-align: center;\n    font-size: 20px;\n    margin: 0px;\n\n    span {\n      color: #182964;\n      font-weight: 600;\n    }\n  }\n  animation: fadeIn 200ms;\n\n  @keyframes fadeIn {\n    from {\n      transform: scale(2);\n    }\n  \n    to {\n      transform: scale(1);\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
var WrapItemView = exports.WrapItemView = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100% - 50px);\n\n  @media (max-width: 1200px) {\n    height: calc(100% - 90px);\n  }\n"])));