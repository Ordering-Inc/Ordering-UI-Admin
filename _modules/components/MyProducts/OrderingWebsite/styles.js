"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebsiteWrapper = exports.WebsiteButtonWrapper = exports.UploadImageIconContainer = exports.UploadImageIcon = exports.TemporalDomail = exports.Tabs = exports.TabWrapper = exports.Tab = exports.MoreSettingsHeader = exports.LogoImage = exports.InputFormWrapper = exports.InnerBlock = exports.InfoWrapper = exports.ImgInfoWrapper = exports.ImageFormGroup = exports.HeaderTitleContainer = exports.FormWrapper = exports.FormGroup = exports.ContentWrapper = exports.Container = exports.ColorPickerWrapper = exports.CheckBoxWrapper = exports.BackgroundImage = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));
exports.Container = Container;
var HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
exports.HeaderTitleContainer = HeaderTitleContainer;
var WebsiteWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n  > img {\n    width: 100%;\n    margin-top: 20px;\n    max-height: 600px;\n    object-fit: cover;\n  }\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n    padding: 40px;\n\n    img {\n      margin-top: 0px;\n      width: 42%;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    img {\n      width: 35%;\n    }\n    margin-right: 50px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 50px;\n      margin-right: 0px;\n    "])));
});
exports.WebsiteWrapper = WebsiteWrapper;
var InfoWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  h1 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 48px;\n    margin-top: 0px;\n    margin-bottom: 7px;\n    text-transform: capitalize;\n  }\n  p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n  }\n\n  @media (min-width: 769px) {\n    margin-right: 40px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n      margin-right: 0px;\n    "])));
});
exports.InfoWrapper = InfoWrapper;
var MoreSettingsHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-top: 70px;\n  margin-bottom: 35px;\n  h2 {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 36px;\n    margin-top: 0px;\n    margin-bottom: 8px;\n    text-align: center;\n    span {\n      color: ", ";\n    }\n  }\n  p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n    margin-bottom: 34px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.MoreSettingsHeader = MoreSettingsHeader;
var FormWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  > button {\n    height: 44px;\n    margin-top: 20px;\n  }\n"])));
exports.FormWrapper = FormWrapper;
var InputFormWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 25px 38px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  margin-bottom: 30px;\n  h4 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])));
exports.InputFormWrapper = InputFormWrapper;
var InnerBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 647px;\n"])));
exports.InnerBlock = InnerBlock;
var FormGroup = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 27px;\n  label {\n    display: block;\n    margin-bottom: 12px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  > input, textarea {\n    width: 100%;\n  }\n  .custom-domain {\n    width: 330px;\n  }\n  button {\n    height: 44px;\n  }\n"])));
exports.FormGroup = FormGroup;
var TemporalDomail = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  > a {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.TemporalDomail = TemporalDomail;
var ImageFormGroup = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n"])));
exports.ImageFormGroup = ImageFormGroup;
var LogoImage = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  max-width: 450px;\n  width: 100%;\n  height: 100px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: contain;\n  }\n"])));
exports.LogoImage = LogoImage;
var BackgroundImage = (0, _styledComponents.default)(LogoImage)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  height: 213px;\n  max-width: 320px;\n\n  @media (min-width: 768px) {\n    height: 427px;\n    max-width: 640px;\n  }\n"])));
exports.BackgroundImage = BackgroundImage;
var UploadImageIconContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: ", ";\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
}, function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    background: transparent;\n    svg, span {\n      color: ", ";\n    }\n    border: 1px dashed ", ";\n  "])), function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.secundaryDarkContrast;
  });
}, function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
exports.UploadImageIconContainer = UploadImageIconContainer;
var UploadImageIcon = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: ", ";\n  span {\n    margin-top: 14px;\n    font-size: 14px;\n  }\n\n  svg {   \n    width: 52px;\n    height: 45px;\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
});
exports.UploadImageIcon = UploadImageIcon;
var ImgInfoWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  h4 {\n    font-size: 14px;\n    line-height: 24px;\n    font-weight: 400;\n    margin: 0px;\n  }\n  p {\n    font-size: 12px;\n    line-height: 18px;\n    margin-top: 2px;\n    margin-bottom: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.ImgInfoWrapper = ImgInfoWrapper;
var CheckBoxWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: fit-content;\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 20px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    user-select: none;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0px;\n    "])));
});
exports.CheckBoxWrapper = CheckBoxWrapper;
var ColorPickerWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  padding-top: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > div {\n    margin-top: 25px;\n    > p {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      margin-top: 0px;\n      margin-bottom: 9px;\n    }\n  }\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n"])));
exports.ColorPickerWrapper = ColorPickerWrapper;
var ContentWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  padding-top: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > div {\n    margin-top: 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    > p {\n      font-weight: 600;\n      font-size: 16px;\n      line-height: 24px;\n      margin-top: 0px;\n      margin-bottom: 20px;\n    }\n    button {\n      width: 200px;\n      height: 44px;\n    }\n  }\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n"])));
exports.ContentWrapper = ContentWrapper;
var WebsiteButtonWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 20px;\n  button {\n    height: 44px;\n  }\n"])));
exports.WebsiteButtonWrapper = WebsiteButtonWrapper;
var TabWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));
exports.TabWrapper = TabWrapper;
var Tabs = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.Tabs = Tabs;
var Tab = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  padding-bottom: 14px;\n  transition: all 0.2s ease-out;\n  :not(:last-child) {\n    margin-right: 32px;\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    padding-bottom: 13px;\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});
exports.Tab = Tab;