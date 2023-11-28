"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserImage = exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SkeletonWrapper = exports.SkeletonForm = exports.InputWrapper = exports.Image = exports.Header = exports.FormInput = exports.FormContainer = exports.Camera = exports.CalendarWrapper = exports.ActionsForm = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormContainer = exports.FormContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    width: 100%;\n    margin-top: 3px;\n    margin-bottom: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var UserImage = exports.UserImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin: 20px auto;\n\n  @media (min-width: 768px) {\n    width: auto;\n  }\n"])));
var Image = exports.Image = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 200px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref) {
  var isImage = _ref.isImage,
    theme = _ref.theme;
  return isImage ? '#FFF' : "".concat(theme.colors.backgroundPage);
});
var Camera = exports.Camera = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  > * {\n    margin-top: 10px;\n    width: 30px;\n    height: 30px;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  padding: 4px;\n"])));
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n  }\n\n  svg {   \n    width: 45px;\n    height: 45px;\n  }\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  div.phone_number {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n  input {\n    color: ", ";\n  }\n  input.form {\n    padding: 10px 15px;\n    width: 100%;\n    box-sizing: border-box;\n    &:disabled {\n      background-color: rgba(239, 239, 239, 0.3);\n      cursor: not-allowed;\n    }\n  }\n  div.PhoneInput {\n    input {\n      border-radius: 8px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var ActionsForm = exports.ActionsForm = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n\n  button {\n    margin-bottom: 20px;\n    box-sizing: border-box;\n    height: 44px;\n\n    &:disabled {\n      cursor: not-allowed;\n    }\n  }\n"])));
var SkeletonForm = exports.SkeletonForm = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  justify-content: center;\n  height: auto;\n  display: inline-flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-top: 0px;\n  > * {\n    width: 100%;\n    margin: 10px 0;\n    display: inline;\n    height: 50px;\n    span{\n      border-radius: 16px;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media (min-width: 768px){\n    justify-content: flex-start;\n    > * {\n      width: calc(50% - 10px);\n      margin: 5px;\n    }\n  }\n"])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  width: 100%;\n\n  .email-input {\n    margin-bottom: 35px;\n  }\n\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 7px;\n  }\n\n  .PhoneInputCountry {\n    border: 1px solid ", ";\n    border-radius: 7.6px;\n    padding: 5px;\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 25px;\n\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 7px;\n  }\n"])));