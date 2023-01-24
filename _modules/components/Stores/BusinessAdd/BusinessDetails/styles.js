"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.GoogleMapContainer = exports.FormGroup = exports.FormControl = exports.ContentWrapper = exports.BusinessDetailsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0;\n  }\n"])));
exports.BusinessDetailsContainer = BusinessDetailsContainer;
var ContentWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 23px;\n"])));
exports.ContentWrapper = ContentWrapper;
var FormControl = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 23px;\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 12px;\n  }\n  input {\n    width: 100%;\n    height: 44px;\n  }\n  .input-autocomplete {\n    width: 100%;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    font-size: 14px;\n    padding: 10px 15px;\n    outline: none;\n    ::placeholder {\n      color: ", ";\n    }\n\n    &:-ms-input-placeholder {\n      color: ", ";\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n  ", "\n"])), function (props) {
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
}, function (_ref) {
  var noBottom = _ref.noBottom;
  return noBottom && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-bottom: 0px;\n  "])));
});
exports.FormControl = FormControl;
var GoogleMapContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-bottom: 23px;\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 12px;\n    margin-bottom: 9px;\n  }\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n    color: ", ";\n    word-break: break-all;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.GoogleMapContainer = GoogleMapContainer;
var WrapperMap = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  margin-top: 30px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  @media (min-width: 768px) {\n    height: 200px;\n  }\n"])));
exports.WrapperMap = WrapperMap;
var FormGroup = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  > div {\n    width: 100%;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    > div {\n      width: 48%;\n    }\n  }\n"])));
exports.FormGroup = FormGroup;