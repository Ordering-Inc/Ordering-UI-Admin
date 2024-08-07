"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperTab = exports.WrapperQuickShow = exports.WrapperOrdersAndDriver = exports.WrapperOrderlist = exports.Tab = exports.OrdersOpenButton = exports.OrdersCloseButton = exports.OrderAndDriverListContainer = exports.DeliveryDashboardContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DeliveryDashboardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  height: calc(100% - 20px);\n  background: #FAFAFA;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n\n  @media (max-width: 1200px) {\n    height: calc(100% - 30px);\n  }\n\n  @media (max-width: 576px) {\n    height: calc(100vh - 65px);\n  }\n"])));
exports.DeliveryDashboardContainer = DeliveryDashboardContainer;
var OrdersOpenButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});
exports.OrdersOpenButton = OrdersOpenButton;
var OrdersCloseButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  border: none;\n  outline: none;\n  background: transparent;\n  z-index: 100;\n  cursor: pointer;\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n  }\n\n  @media (max-width: 576px) {\n    position: fixed;\n    z-index: 200;\n    top: 80px;\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});
exports.OrdersCloseButton = OrdersCloseButton;
var WrapperOrdersAndDriver = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 350px;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 12px;\n  position: absolute;\n  background: ", ";\n  right: 10px;\n  top: 15px;\n  height: calc(100% - 30px);\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    position: fixed;\n    z-index: 100;\n    top: 75px;\n    height: calc(100vh - 80px);\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.WrapperOrdersAndDriver = WrapperOrdersAndDriver;
var WrapperTab = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  border-bottom: 1px solid #F2F2F2;\n"])));
exports.WrapperTab = WrapperTab;
var Tab = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 50%;\n  text-align: center;\n  color: #C3C3C3;\n  cursor: pointer;\n  font-weight: 500;\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    color: #1C202E;\n  "])));
});
exports.Tab = Tab;
var WrapperQuickShow = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 56px;\n  padding: 5px 20px;\n  justify-content: flex-end;\n  column-gap: 10px;\n\n  svg {\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n  }\n"])));
exports.WrapperQuickShow = WrapperQuickShow;
var OrderAndDriverListContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: calc(100% - 91px);\n"])));
exports.OrderAndDriverListContainer = OrderAndDriverListContainer;
var WrapperOrderlist = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n"])));
exports.WrapperOrderlist = WrapperOrderlist;