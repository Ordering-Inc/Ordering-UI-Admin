"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonWrapper = exports.SettingsListContainer = exports.Required = exports.GeneralTitle = exports.GeneralContainer = exports.FormGroupText = exports.FormContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SettingsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 26px 20px;\n  overflow-x: hidden;\n"])));
exports.SettingsListContainer = SettingsListContainer;
var GeneralContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.GeneralContainer = GeneralContainer;
var GeneralTitle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  p {\n    font-weight: bold;\n    font-size: 20px;\n    color: ", ";\n    margin-bottom: 6px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.GeneralTitle = GeneralTitle;
var FormContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
exports.FormContainer = FormContainer;
var FormGroupText = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  label {\n    font-weight: 600;\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: ", ";\n  }\n\n  input[type='text'] {\n    font-size: 14px;\n    height: 44px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.FormGroupText = FormGroupText;
var Required = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 10px;\n  color: #E63757;\n"])));
exports.Required = Required;
var SkeletonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  div {\n    margin-bottom: 15px;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;