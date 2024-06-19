"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeSelectContainer = exports.TimeBlock = exports.SelectWrapper = exports.SectionTitle = exports.FormControl = exports.Container = exports.AdvancedLogisticsSettingsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: calc(100% - 130px);\n  > button {\n    position: sticky;\n    top: 100%;\n    margin-top: 30px;\n    height: 44px;\n  }\n"])));
var SectionTitle = exports.SectionTitle = _styledComponents.default.h2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  margin-top: 0;\n"])));
var TimeSelectContainer = exports.TimeSelectContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 11px;\n  }\n"])));
var TimeBlock = exports.TimeBlock = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  width: fit-content;\n  padding: 8px 11px;\n  color: ", ";\n  \n  > select {\n    margin: 0 5px;\n    border: none;\n    outline: none;\n    color: ", ";\n    background: transparent;\n\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    &::-ms-expand {\n      display: none;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
});
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  .select {\n    border: none;\n    background: ", ";\n    padding: 11px 0;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var AdvancedLogisticsSettingsContainer = exports.AdvancedLogisticsSettingsContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n\n  label {\n    margin-bottom: 15px;\n    font-size: 14px;\n  }\n"])));