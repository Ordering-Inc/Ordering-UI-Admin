"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperTimezone = exports.WrapperMap = exports.WrapperGoogleAutoCompleteInput = exports.WrapperCitySelector = exports.WrapperAddressnotes = exports.Section = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: calc(100vh - 150px);\n  > button {\n    position: sticky;\n    top: 100%;\n    height: 42px;\n  }\n"])));
exports.Container = Container;
var WrapperMap = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  @media (min-width: 768px) {\n    height: 180px;\n  }\n"])));
exports.WrapperMap = WrapperMap;
var Section = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0;\n  > div {\n    width: 48%;\n  }\n"])));
exports.Section = Section;
var WrapperCitySelector = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  > p {\n    color: ", ";\n    margin-bottom: 5px;\n  }\n  > div {\n    width: 100%;\n    background: #F8F9FA;\n    border: none;\n  }\n  font-size: 14px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.WrapperCitySelector = WrapperCitySelector;
var WrapperTimezone = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  p {\n    font-size: 14px;\n    &:first-child {\n      color: ", ";\n      margin-bottom: 5px;\n    }\n    &:last-child {\n      margin: 0;\n      padding: 10px 0;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.WrapperTimezone = WrapperTimezone;
var WrapperGoogleAutoCompleteInput = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  label {\n    color: ", ";\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .input-autocomplete {\n    width: 100%;\n    background: ", ";\n    border: 1px solid #DEE2E6;\n    border-radius: 8px;\n    font-size: 14px;\n    padding: 10px 15px;\n    outline: none;\n    ::placeholder {\n      color: #B1BCCC;\n    }\n\n    &:-ms-input-placeholder {\n      color: #B1BCCC;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #B1BCCC;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.WrapperGoogleAutoCompleteInput = WrapperGoogleAutoCompleteInput;
var WrapperAddressnotes = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  label {\n    color: ", ";\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n\n  textarea {\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.WrapperAddressnotes = WrapperAddressnotes;