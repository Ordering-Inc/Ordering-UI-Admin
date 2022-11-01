"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperTab = exports.WrapperSortContainer = exports.WrapperOrdersAndUser = exports.WrapperMessage = exports.Tab = exports.OrdersOpenButton = exports.OrdersCloseButton = exports.OrderAndUserListContainer = exports.MessagesManagerContainer = exports.MessageOrderDetailContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MessagesManagerContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 20px;\n  height: calc(100vh - 224px);;\n  background: #FAFAFA;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 15px;\n\n  @media (max-width: 1200px) {\n    height: calc(100vh - 274px);;\n  }\n\n  @media (max-width: 576px) {\n    height: calc(100vh - 65px);\n  }\n"])));
exports.MessagesManagerContainer = MessagesManagerContainer;
var OrdersOpenButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n\n  @media (min-width: 992px) {\n    display: none;\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});
exports.OrdersOpenButton = OrdersOpenButton;
var OrdersCloseButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n\n  @media (min-width: 992px) {\n    display: none;\n  }\n  @media (max-width: 576px) {\n    position: absolute;\n    top: 20px\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});
exports.OrdersCloseButton = OrdersCloseButton;
var WrapperOrdersAndUser = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 350px;\n  background: ", ";\n  left: 10px;\n  top: 15px;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 12px;\n\n  @media (max-width: 992px) {\n    position: absolute;\n    z-index: 10;\n    height: calc(100% - 30px);\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.WrapperOrdersAndUser = WrapperOrdersAndUser;
var WrapperTab = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  border-bottom: 1px solid #F2F2F2;\n"])));
exports.WrapperTab = WrapperTab;
var Tab = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 50%;\n  text-align: center;\n  color: #C3C3C3;\n  cursor: pointer;\n  font-weight: 500;\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    color: #1C202E;\n  "])));
});
exports.Tab = Tab;
var WrapperSortContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  > div {\n    border-radius: 3px;\n    &:first-child {\n      border: 1px solid #F2F2F2;\n      padding: 0 10px;\n    }\n    &:last-child {\n      border: none;\n    }\n  }\n"])));
exports.WrapperSortContainer = WrapperSortContainer;
var OrderAndUserListContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: calc(100% - 90px);\n"])));
exports.OrderAndUserListContainer = OrderAndUserListContainer;
var WrapperMessage = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));
exports.WrapperMessage = WrapperMessage;
var MessageOrderDetailContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 420px;\n  border-left: 1px solid #D8D8D8;\n  overflow: auto;\n\n  @media(max-width: 1300px) {\n    display: block;\n    position: absolute;\n    right: 0px;\n    background: ", ";\n    height: calc(100% - 30px);\n    border: 1px solid #D8D8D8;\n    box-shadow: -3px 3px 6px #00000029;\n    z-index: 100;\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
});
exports.MessageOrderDetailContainer = MessageOrderDetailContainer;