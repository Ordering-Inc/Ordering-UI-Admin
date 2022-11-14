"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionsWrapper = exports.SessionItem = exports.SeessionDelete = exports.NoSessionsContainer = exports.NoMessage = exports.MoreInfoWrapper = exports.DurationWrapper = exports.Container = exports.ButtonsGroup = exports.ButtonGroupWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: 18px 24px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n    padding-bottom: 12px;\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
}, function (props) {
  return props.theme.colors.borderColor;
});
exports.Container = Container;
var NoSessionsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > button {\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
exports.NoSessionsContainer = NoSessionsContainer;
var NoMessage = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n"])));
exports.NoMessage = NoMessage;
var SessionItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 18px 0px;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  \n  > p.current {\n    flex: 1;\n    font-weight: 700;\n    font-size: 14px;\n    margin: 0 15px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.SessionItem = SessionItem;
var MoreInfoWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  span {\n    display: flex;\n    align-items: center;\n    color: ", ";\n    height: 24px;\n    padding: 0px;\n    border-radius: 0px;\n    margin-top: 18px;\n    cursor: pointer;\n    text-transform: capitalize;\n    font-size: 14px;\n    svg {\n      margin-left: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n        margin-left: 0px;\n      "])));
});
exports.MoreInfoWrapper = MoreInfoWrapper;
var SessionsWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));
exports.SessionsWrapper = SessionsWrapper;
var DurationWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  p {\n    margin: 0;\n    font-size: 14px;\n  }\n  > span {\n    display: none;\n    margin: 0 10px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    > span {\n      display: block;\n    }\n  }\n"])));
exports.DurationWrapper = DurationWrapper;
var SeessionDelete = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 3px;\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
});
exports.SeessionDelete = SeessionDelete;
var ButtonGroupWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));
exports.ButtonGroupWrapper = ButtonGroupWrapper;
var ButtonsGroup = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 600px;\n\n  > button {\n    height: 44px;\n    margin: 10px 0;\n    border-radius: 8px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n  }\n"])));
exports.ButtonsGroup = ButtonsGroup;