"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SocialShareContainer = exports.ShadowWrapper = exports.ShadowInputGroup = exports.ShadowInputControl = exports.ShadowInfoWrapper = exports.SelectWrapper = exports.Option = exports.InnerShadowWrapper = exports.InnerShadow = exports.ImgInfoWrapper = exports.ImageGroup = exports.ImageBoxContainer = exports.HomePageWrapper = exports.HomeImageFullScreenWrapper = exports.HideCheckWrapper = exports.HeadingWrapper = exports.FormControlWithCheck = exports.FormControl = exports.FontWeightListWrapper = exports.FontWeightItem = exports.DropShadowWrapper = exports.DropShadow = exports.Container = exports.ButtonWrapper = exports.BoxLayout = exports.BodyWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var BoxLayout = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 25px 30px;\n  > div {\n    max-width: 653px;\n  }\n  h1, h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 20px;\n  }\n  > h1 {\n    margin-bottom: 30px;\n  }\n  h3 {\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    margin-top: 0px;\n    margin-bottom: 20px;\n  }\n"])));
exports.BoxLayout = BoxLayout;
var HomePageWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
exports.HomePageWrapper = HomePageWrapper;
var FormControlWithCheck = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 17px;\n  }\n"])));
exports.FormControlWithCheck = FormControlWithCheck;
var HideCheckWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: fit-content;\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 15px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    user-select: none;\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n      margin-right: 0px;\n    "])));
}, function (_ref) {
  var isBottom = _ref.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-bottom: 25px;\n  "])));
});
exports.HideCheckWrapper = HideCheckWrapper;
var ShadowWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n"])));
exports.ShadowWrapper = ShadowWrapper;
var InnerShadowWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
exports.InnerShadowWrapper = InnerShadowWrapper;
var DropShadowWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  /* @media (min-width: 576px) {\n    margin-top: 0;\n    margin-left: 35px;\n    ", "\n  } */\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 0px;\n      margin-right: 35px;\n    "])));
});
exports.DropShadowWrapper = DropShadowWrapper;
var ShadowInfoWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 7px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n      margin-right: 0px;\n    "])));
});
exports.ShadowInfoWrapper = ShadowInfoWrapper;
var InnerShadow = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 27px;\n  height: 18px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 1px;\n  margin-right: 13px;\n  ", "\n"])), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 13px;\n  "])));
});
exports.InnerShadow = InnerShadow;
var DropShadow = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 27px;\n  height: 18px;\n  border: 1px solid ", ";\n  border-radius: 1px;\n  margin-right: 13px;\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 13px;\n  "])));
});
exports.DropShadow = DropShadow;
var ShadowInputGroup = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 13px;\n"])));
exports.ShadowInputGroup = ShadowInputGroup;
var ShadowInputControl = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-right: 15px;\n  ", "\n  span {\n    font-weight: 400;\n    font-size: 12px;\n    margin-right: 5px;\n    ", "\n  }\n  input {\n    border: none;\n    outline: none;\n    border-bottom: 1px solid ", ";\n    width: 29px;\n    font-size: 12px;\n    text-align: center;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 15px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 5px;\n    "])));
}, function (props) {
  return props.theme.colors.gray;
});
exports.ShadowInputControl = ShadowInputControl;
var HeadingWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n"])));
exports.HeadingWrapper = HeadingWrapper;
var BodyWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([""])));
exports.BodyWrapper = BodyWrapper;
var FormControl = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n  input {\n    width: 100%;\n    height: 44px;\n  }\n"])));
exports.FormControl = FormControl;
var SelectWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      background-color: ", ";\n      height: 43px;\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      color: ", ";\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n\n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
});
exports.SelectWrapper = SelectWrapper;
var Option = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Option = Option;
var FontWeightListWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  &:last-child {\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.FontWeightListWrapper = FontWeightListWrapper;
var FontWeightItem = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n  border-top: 1px solid ", ";\n  cursor: pointer;\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 20px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0px;\n    "])));
});
exports.FontWeightItem = FontWeightItem;
var ImageBoxContainer = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 161px;\n  height: 161px;\n  ", "\n  background: ", ";\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: contain;\n  }\n"])), function (_ref2) {
  var isBig = _ref2.isBig;
  return isBig && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 190px;\n  "])));
}, function (props) {
  return props.theme.colors.borderColor;
});
exports.ImageBoxContainer = ImageBoxContainer;
var UploadImageIconContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: ", ";\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
}, function (_ref3) {
  var bgimage = _ref3.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    background: transparent;\n    svg, span {\n      color: ", ";\n    }\n    border: 1px dashed ", ";\n  "])), function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.secundaryDarkContrast;
  });
}, function (_ref4) {
  var small = _ref4.small;
  return small ? (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
exports.UploadImageIconContainer = UploadImageIconContainer;
var UploadImageIcon = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: ", ";\n  span {\n    margin-top: 14px;\n    font-size: 14px;\n  }\n\n  svg {   \n    width: 52px;\n    height: 45px;\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
});
exports.UploadImageIcon = UploadImageIcon;
var ImgInfoWrapper = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  margin-bottom: 25px;\n  h4 {\n    font-size: 14px;\n    line-height: 24px;\n    font-weight: 400;\n    margin: 0px;\n  }\n  p {\n    font-size: 12px;\n    line-height: 18px;\n    margin-top: 2px;\n    margin-bottom: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.ImgInfoWrapper = ImgInfoWrapper;
var HomeImageFullScreenWrapper = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 25px;\n  cursor: pointer;\n  width: fit-content;\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 20px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0px;\n    "])));
});
exports.HomeImageFullScreenWrapper = HomeImageFullScreenWrapper;
var ImageGroup = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 576px) {\n    flex-direction: row;\n    > div:first-child {\n      margin-right: 30px;\n    }\n  }\n"])));
exports.ImageGroup = ImageGroup;
var SocialShareContainer = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral([""])));
exports.SocialShareContainer = SocialShareContainer;
var ButtonWrapper = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  margin: 50px 0px 30px 0;\n  button {\n    height: 44px;\n  }\n"])));
exports.ButtonWrapper = ButtonWrapper;