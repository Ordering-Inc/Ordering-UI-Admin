"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.OrdersOrderByOptionContainer = exports.OrdersContainer = exports.MessagesOptionTabs = exports.MessagesListingContainer = exports.MessagesContent = exports.MessageContainer = exports.InnerTabsContainer = exports.FilterContainer = exports.ContactsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MessagesListingContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: all 0.5s;\n  padding: 20px;\n  box-sizing: border-box;\n  max-height: 100vh;\n  overflow: auto;\n  min-height: 100vh;\n"])));
exports.MessagesListingContainer = MessagesListingContainer;
var MessagesContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  margin-top: 0px;\n\n  @media (min-width: 760px) {\n    margin-top: 15px\n  }\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    height: calc(var(--vh, 1vh) * 100 - 105px);\n  }\n"])));
exports.MessagesContent = MessagesContent;
var OrdersContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  height: 100%;\n  margin-top: 20px;\n  overflow: hidden;\n\n  @media (min-width: 1024px) {\n    width: 330px;\n    max-width: 330px;\n    margin-top: 0px;\n  }\n\n  @media (min-width: 1300px) {\n    max-width: 500px;\n    width: 500px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.OrdersContainer = OrdersContainer;
var FilterContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0px;\n  background: ", ";\n  padding: 0 12px;\n  z-index: 100;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.FilterContainer = FilterContainer;
var MessagesOptionTabs = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n  overflow-x: auto;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.MessagesOptionTabs = MessagesOptionTabs;
var Tab = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  ", "\n  cursor: pointer;\n  color: ", ";\n  white-space: nowrap;\n  font-size: 14px;\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "])));
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border-bottom: 3px solid;\n    font-weight: 500;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return !active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
});
exports.Tab = Tab;
var OrdersOrderByOptionContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 15px 0 35px;\n  display: flex;\n  overflow-x: auto;\n\n  button {\n    ", "\n    font-size: 14px;\n    white-space: nowrap;\n\n    svg {\n      font-size: 20px;\n\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n      "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n      "])));
});
exports.OrdersOrderByOptionContainer = OrdersOrderByOptionContainer;
var MessageContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  height: 80vh;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-top: 20px;\n  \n  @media (min-width: 1024px) {\n    margin-top: 0px;\n    height: 100%;\n    flex: 1;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
});
exports.MessageContainer = MessageContainer;
var ContactsContainer = (0, _styledComponents.default)(OrdersOrderByOptionContainer)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n"])));
exports.ContactsContainer = ContactsContainer;
var InnerTabsContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.InnerTabsContainer = InnerTabsContainer;