"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SubOptionImage = exports.SubOptionContainer = exports.SelectboxGroup = exports.RightSubOptionContent = exports.RightOptionContent = exports.OptionSettings = exports.OptionSettingItem = exports.OptionInfoContainer = exports.OptionImage = exports.OptionContent = exports.OptionContainer = exports.ModifierOptionsContainer = exports.MainContainer = exports.LeftSubOptionContent = exports.InputWrapper = exports.Header = exports.EnableWrapper = exports.Dvider = exports.CheckboxWrapper = exports.AdddSubOptionForm = exports.AddNewOptionButton = exports.ActionsContainer = exports.ActionSelectorWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.MainContainer = MainContainer;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  h1 {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 0px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "])));
});

exports.Header = Header;

var ActionSelectorWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  button {\n    display: flex;\n    background: transparent !important;\n    border: none;\n    padding: 5px;\n    border-radius: 8px;\n\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:hover {\n      background: ", " !important;\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        padding: 7px 20px;\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundaryDarkContrast);
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
}, function (props) {
  return props.theme.colors.danger;
});

exports.ActionSelectorWrapper = ActionSelectorWrapper;

var OptionContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));

exports.OptionContainer = OptionContainer;

var OptionImage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 95px;\n  height: 95px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])));

exports.OptionImage = OptionImage;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  padding: 4px;\n"])));

exports.UploadImageIconContainer = UploadImageIconContainer;

var UploadImageIcon = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n  }\n\n  svg {   \n    font-size: ", ";\n  }\n"])), function (_ref) {
  var small = _ref.small;
  return small ? '16px' : '32px';
});

exports.UploadImageIcon = UploadImageIcon;

var OptionInfoContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  flex: 1;\n  ", "\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "])));
});

exports.OptionInfoContainer = OptionInfoContainer;

var OptionContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"])));

exports.OptionContent = OptionContent;

var RightOptionContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  > div:not(:last-child) {\n    width: 100px;\n  }\n  @media (min-width: 1200px) {\n    margin-top: 0px;\n  }\n"])));

exports.RightOptionContent = RightOptionContent;

var InputWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  input {\n    border-color: ", ";\n  }\n  label {\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  .default {\n    min-width: 50px;\n    width: 65px;\n    text-align: center;\n    svg {\n      color: ", ";\n    }\n  }\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n  \n  .checked {\n    svg {\n      color: ", ";\n    }\n  }\n"])), function (_ref2) {
  var isMaxError = _ref2.isMaxError,
      theme = _ref2.theme;
  return isMaxError ? "".concat(theme.colors.danger, " !important") : '#DEE2E6';
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref3) {
  var primary = _ref3.primary;
  return !primary && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    label {\n      display: none;\n    }\n  "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
}, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    div{\n      pointer-events: none;\n    }\n  "])));
}, function (props) {
  return props.maxHeight && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    height: 100%;\n    div {\n      margin-top: 10px;\n    }\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.InputWrapper = InputWrapper;

var ActionsContainer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 27px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  width: 150px;\n  \n  ", "\n\n  ", "\n\n  ", "\n\n  > svg {\n    cursor: pointer;\n    font-size: 16px;\n    ", "\n  }\n"])), function (_ref4) {
  var primary = _ref4.primary;
  return !primary && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-top: 0px;\n  "])));
}, function (_ref5) {
  var top = _ref5.top;
  return top && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-top: 30px;\n  "])));
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n    padding-right: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n    padding-left: 20px;\n  "])));
}, function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      margin-right: 35px;\n    "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-left: 35px;\n    "])));
});

exports.ActionsContainer = ActionsContainer;

var EnableWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n    color: ", ";\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});

exports.EnableWrapper = EnableWrapper;

var OptionSettings = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 20px 0;\n  flex-direction: column;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"])));

exports.OptionSettings = OptionSettings;

var OptionSettingItem = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));

exports.OptionSettingItem = OptionSettingItem;

var CheckboxWrapper = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n\n  label {\n    cursor: pointer;\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 0px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme7;

  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "])));
});

exports.CheckboxWrapper = CheckboxWrapper;

var Dvider = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  height: 13px;\n  background: #F8F9FA;\n  margin: 10px 0 30px;\n"])));

exports.Dvider = Dvider;

var ModifierOptionsContainer = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h2 {\n    font-size: 18px;\n    font-weight: 600;\n    color: ", ";\n    margin-bottom: 30px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.ModifierOptionsContainer = ModifierOptionsContainer;

var SubOptionContainer = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-top: 15px;\n"])));

exports.SubOptionContainer = SubOptionContainer;

var SubOptionImage = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref6) {
  var primary = _ref6.primary;
  return primary && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    margin-top: 27px;\n  "])));
}, function (props) {
  var _props$theme8;

  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});

exports.SubOptionImage = SubOptionImage;

var LeftSubOptionContent = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n"])));

exports.LeftSubOptionContent = LeftSubOptionContent;

var RightSubOptionContent = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  input {\n    max-width: 100px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme9;

  return (_props$theme9 = props.theme) !== null && _props$theme9 !== void 0 && _props$theme9.rtl ? (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
});

exports.RightSubOptionContent = RightSubOptionContent;

var AdddSubOptionForm = _styledComponents.default.form(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-top: 15px;\n"])));

exports.AdddSubOptionForm = AdddSubOptionForm;

var SelectboxGroup = _styledComponents.default.div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: 50%;\n  \n  > div {\n    background: #F8F9FA;\n    &:first-child {\n      margin-bottom: 20px;\n    }\n  }\n\n  > p {\n    font-size: 14px;\n    margin: 0;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: initial;\n  }\n"])));

exports.SelectboxGroup = SelectboxGroup;

var AddNewOptionButton = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  font-size: 14px;\n  color: ", ";\n  span {\n    cursor: pointer;\n  }\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddNewOptionButton = AddNewOptionButton;