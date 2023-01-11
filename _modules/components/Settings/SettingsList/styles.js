"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitBtnWrapper = exports.SkeletonWrapper = exports.SettingsListContainer = exports.Required = exports.OptionsError = exports.GeneralTitle = exports.GeneralContainer = exports.FormGroupWrapper = exports.FormGroupText = exports.FormGroupCheck = exports.FormContainer = exports.Description = exports.CheckBoxWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SettingsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.SettingsListContainer = SettingsListContainer;
var GeneralContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.GeneralContainer = GeneralContainer;
var GeneralTitle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  p {\n    font-weight: bold;\n    font-size: 20px;\n    color: ", ";\n    margin-bottom: 6px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.GeneralTitle = GeneralTitle;
var FormContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
exports.FormContainer = FormContainer;
var OptionsError = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #d83520;\n"])));
exports.OptionsError = OptionsError;
var FormGroupText = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n\n  label {\n    font-weight: 600;\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: ", ";\n  }\n\n  input[type='text'] {\n    font-size: 14px;\n    height: 44px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.FormGroupText = FormGroupText;
var FormGroupCheck = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 10px;\n\n  input {\n    width: 16px;\n    height: 16px;\n    box-sizing: border-box;\n    border-radius: 2px;\n    margin-right: 10px;\n  }\n  label {\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    color: ", ";\n    text-transform: capitalize;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.FormGroupCheck = FormGroupCheck;
var FormGroupWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding-top: 10px;\n"])));
exports.FormGroupWrapper = FormGroupWrapper;
var Required = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 10px;\n  color: #E63757;\n"])));
exports.Required = Required;
var SkeletonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 52px;\n\n  div {\n    margin-bottom: 15px;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var CheckBoxWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  > label {\n    font-weight: 600;\n    margin: 0px;\n    font-size: 14px;\n    color: ", ";\n  }\n  > p {\n    font-size: 14px;\n    margin-bottom: 0px;\n    margin-top: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.CheckBoxWrapper = CheckBoxWrapper;
var SubmitBtnWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n\n  button {\n    height: 44px;\n    background: ", ";\n    color: white;\n    border-radius: 8px;\n    font-size: 14px;\n    margin: 20px 0 10px 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.SubmitBtnWrapper = SubmitBtnWrapper;
var Description = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin-top: 0px;\n  margin-bottom: 5px;\n"])));
exports.Description = Description;