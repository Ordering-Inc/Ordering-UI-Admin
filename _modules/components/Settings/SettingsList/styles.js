"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitBtnWrapper = exports.SkeletonWrapper = exports.SettingsListContainer = exports.Required = exports.OptionsError = exports.GeneralTitle = exports.GeneralContainer = exports.FormGroupWrapper = exports.FormGroupText = exports.FormGroupCheck = exports.FormContainer = exports.Description = exports.CheckBoxWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SettingsListContainer = exports.SettingsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var GeneralContainer = exports.GeneralContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
var GeneralTitle = exports.GeneralTitle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  p {\n    font-weight: bold;\n    font-size: 20px;\n    color: ", ";\n    margin-bottom: 6px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var FormContainer = exports.FormContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
var OptionsError = exports.OptionsError = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #d83520;\n"])));
var FormGroupText = exports.FormGroupText = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n\n  label {\n    font-weight: 600;\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: ", ";\n  }\n\n  input[type='text'] {\n    font-size: 14px;\n    height: 44px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var FormGroupCheck = exports.FormGroupCheck = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 10px;\n\n  input {\n    width: 16px;\n    height: 16px;\n    box-sizing: border-box;\n    border-radius: 2px;\n    margin-right: 10px;\n  }\n  label {\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    color: ", ";\n    text-transform: capitalize;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var FormGroupWrapper = exports.FormGroupWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding-top: 10px;\n"])));
var Required = exports.Required = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 10px;\n  color: #E63757;\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 52px;\n\n  div {\n    margin-bottom: 15px;\n  }\n"])));
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  > label {\n    font-weight: 600;\n    margin: 0px;\n    font-size: 14px;\n    color: ", ";\n  }\n  > p {\n    font-size: 14px;\n    margin-bottom: 0px;\n    margin-top: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var SubmitBtnWrapper = exports.SubmitBtnWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n\n  button {\n    height: 44px;\n    background: ", ";\n    color: white;\n    border-radius: 8px;\n    font-size: 14px;\n    margin: 20px 0 10px 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Description = exports.Description = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin-top: ", ";\n  margin-bottom: 5px;\n"])), function (_ref) {
  var typeSix = _ref.typeSix;
  return typeSix ? '20px' : '0px';
});