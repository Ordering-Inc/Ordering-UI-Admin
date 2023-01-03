"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.InfoWrapper = exports.InfoContent = exports.FormControl = exports.Container = exports.ButtonGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    margin: 0;\n  }\n"])));
exports.Container = Container;
var FormControl = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  input {\n    width: 100%;\n    height: 44px;\n  }\n  > p {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n    margin-top: 10px;\n    margin-bottom: 0;\n  }\n  .input-autocomplete {\n    width: 100%;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    font-size: 14px;\n    padding: 10px 15px;\n    outline: none;\n    ::placeholder {\n      color: ", ";\n    }\n\n    &:-ms-input-placeholder {\n      color: ", ";\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
exports.FormControl = FormControl;
var Label = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n  }\n"])));
exports.Label = Label;
var ButtonGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-top: 55px;\n  > span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n  button {\n    border-radius: 8px;\n    height: 44px;\n    position: relative;\n    width: 100%;\n    margin-top: 15px;\n    svg {\n      position: absolute;\n      right: 15px;\n      top: 10px;\n      font-size: 21px;\n    }\n  }\n  @media (min-width: 576px) {\n    flex-direction: row;\n    > button {\n      width: 50%;\n      margin-top: 0px;\n    }\n  }\n"])));
exports.ButtonGroup = ButtonGroup;
var InfoWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n\n  > button {\n    height: 21px;\n    svg {\n      width: 13px;\n      height: 13px;\n      color: ", ";\n    }\n  }\n  &:hover > div {\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.InfoWrapper = InfoWrapper;
var InfoContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  color: ", ";\n  background: ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: 0px;\n  ", "\n\n  @media (min-width: 576px) {\n    min-width: 350px;\n    padding: 10px 16px;\n    left: 0px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});
exports.InfoContent = InfoContent;