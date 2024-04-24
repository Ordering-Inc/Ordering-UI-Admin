"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebsiteWrapper = exports.WebsiteThemeBlock = exports.WebsitePriviewImageWrapper = exports.WebsiteButtonWrapper = exports.UploadImageIconContainer = exports.UploadImageIcon = exports.TitleWrapper = exports.TemporalDomail = exports.Tabs = exports.TabWrapper = exports.Tab = exports.SelectWrapper = exports.RadioItem = exports.Option = exports.MoreSettingsHeader = exports.LogoImage = exports.InputFormWrapper = exports.InnerBlock = exports.InfoWrapper = exports.InfoContent = exports.ImgInfoWrapper = exports.ImageFormGroup = exports.HeaderTitleContainer = exports.HeaderInfoWrapper = exports.FormWrapper = exports.FormGroup = exports.CustomeDomainDesc = exports.CustomDomainInfoContent = exports.CustomDomainInfo = exports.ContentWrapper = exports.Container = exports.ColorPickerWrapper = exports.CheckBoxWrapper = exports.BackgroundImage = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var WebsiteWrapper = exports.WebsiteWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n  > img {\n    width: 100%;\n    margin-top: 20px;\n    max-height: 600px;\n    object-fit: cover;\n  }\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n    padding: 40px;\n\n    img {\n      margin-top: 0px;\n      width: 42%;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    img {\n      width: 35%;\n    }\n    margin-right: 50px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 50px;\n      margin-right: 0px;\n    "])));
});
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  h1 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 48px;\n    margin-top: 0px;\n    margin-bottom: 7px;\n    text-transform: capitalize;\n  }\n  p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n  }\n\n  @media (min-width: 769px) {\n    margin-right: 40px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n      margin-right: 0px;\n    "])));
});
var MoreSettingsHeader = exports.MoreSettingsHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-top: 70px;\n  margin-bottom: 35px;\n  h2 {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 36px;\n    margin-top: 0px;\n    margin-bottom: 8px;\n    text-align: center;\n    span {\n      color: ", ";\n    }\n  }\n  p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n    margin-bottom: 34px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var FormWrapper = exports.FormWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  > button {\n    height: 44px;\n    margin-top: 20px;\n  }\n"])));
var InputFormWrapper = exports.InputFormWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 25px 38px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  margin-bottom: 30px;\n  h4 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])));
var InnerBlock = exports.InnerBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 647px;\n"])));
var FormGroup = exports.FormGroup = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 27px;\n  label {\n    display: block;\n    margin-bottom: 12px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  > input, textarea {\n    width: 100%;\n  }\n  .custom-domain {\n    width: 330px;\n  }\n  button {\n    height: 44px;\n  }\n"])));
var TemporalDomail = exports.TemporalDomail = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  > a {\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    color: ", ";\n    > a {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.disabled;
  }, function (props) {
    return props.theme.colors.disabled;
  });
}, function (_ref2) {
  var marginBottom = _ref2.marginBottom;
  return marginBottom && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-bottom: 10px;\n  "])));
});
var ImageFormGroup = exports.ImageFormGroup = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n"])));
var LogoImage = exports.LogoImage = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  max-width: 450px;\n  width: 100%;\n  height: 100px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: contain;\n  }\n"])));
var BackgroundImage = exports.BackgroundImage = (0, _styledComponents.default)(LogoImage)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  height: 213px;\n  max-width: 320px;\n\n  @media (min-width: 768px) {\n    height: 427px;\n    max-width: 640px;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: ", ";\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
}, function (_ref3) {
  var bgimage = _ref3.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    background: transparent;\n    svg, span {\n      color: ", ";\n    }\n    border: 1px dashed ", ";\n  "])), function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.secundaryDarkContrast;
  });
}, function (_ref4) {
  var small = _ref4.small;
  return small ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: ", ";\n  span {\n    margin-top: 14px;\n    font-size: 14px;\n  }\n\n  svg {   \n    width: 52px;\n    height: 45px;\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
});
var ImgInfoWrapper = exports.ImgInfoWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  h4 {\n    font-size: 14px;\n    line-height: 24px;\n    font-weight: 400;\n    margin: 0px;\n  }\n  p {\n    font-size: 12px;\n    line-height: 18px;\n    margin-top: 2px;\n    margin-bottom: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: fit-content;\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 20px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    user-select: none;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0px;\n    "])));
});
var ColorPickerWrapper = exports.ColorPickerWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > div {\n    > p {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      margin-top: 0px;\n      margin-bottom: 9px;\n    }\n  }\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n"])));
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  padding-top: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > div {\n    margin-top: 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    > p {\n      font-weight: 600;\n      font-size: 16px;\n      line-height: 24px;\n      margin-top: 0px;\n      margin-bottom: 20px;\n    }\n    button {\n      width: 200px;\n      height: 44px;\n    }\n  }\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n"])));
var WebsiteButtonWrapper = exports.WebsiteButtonWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 20px;\n  button {\n    height: 44px;\n  }\n"])));
var TabWrapper = exports.TabWrapper = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));
var Tabs = exports.Tabs = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  padding-bottom: 14px;\n  transition: all 0.2s ease-out;\n  :not(:last-child) {\n    margin-right: 32px;\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref5) {
  var active = _ref5.active;
  return active && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    padding-bottom: 13px;\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});
var HeaderInfoWrapper = exports.HeaderInfoWrapper = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n\n  > button {\n    height: 25px;\n    svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n  &:hover > div {\n    /* display: block; */\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    margin-right: -8px;\n    margin-left: 8px;\n  "])));
});
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: 0px;\n  ", "\n\n  > a {\n    color: ", ";\n    margin: 0 5px;\n  }\n\n  @media (min-width: 576px) {\n    min-width: 350px;\n    padding: 12px 15px;\n    left: 0px;\n    ", "\n  }\n\n  @media (min-width: 993px) {\n    min-width: 535px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});
var RadioItem = exports.RadioItem = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n  cursor: pointer;\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 20px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0px;\n    "])));
});
var CustomeDomainDesc = exports.CustomeDomainDesc = _styledComponents.default.p(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  margin-bottom: 0px;\n  font-weight: 400;\n  font-size: 12px;\n"])));
var TitleWrapper = exports.TitleWrapper = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  ", "\n"])), function (_ref6) {
  var isMargin = _ref6.isMargin;
  return isMargin && (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n    margin-bottom: 20px;\n  "])));
});
var CustomDomainInfo = exports.CustomDomainInfo = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  position: relative;\n\n  > button {\n    height: 21px;\n    svg {\n      width: 13px;\n      height: 13px;\n      color: ", ";\n    }\n  }\n  &:hover > div {\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var CustomDomainInfoContent = exports.CustomDomainInfoContent = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: -100px;\n  ", "\n\n  span {\n    display: block;\n  }\n\n  a {\n    color: ", ";\n    padding-left: 5px;\n  }\n\n  @media (min-width: 576px) {\n    min-width: 350px;\n    padding: 10px 16px;\n    left: 0px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n    left: 0px;s\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});
var Option = exports.Option = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 7.6px;\n  img {\n    min-height: 38px;\n    min-width: 38px;\n    height: 38px;\n    width: 38px;\n    border-radius: 8px;\n    object-fit: cover;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    ", "\n  }\n  > span {\n    max-width: 200px;\n    font-size: 14px;\n    font-weight: 700;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  @media (min-width: 768px) {\n    > span {\n      max-width: 560px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
});
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  .select {\n    width: 100%;\n    background: ", ";\n    border: none;\n    font-size: 14px;\n\n    > div:first-child {\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var WebsiteThemeBlock = exports.WebsiteThemeBlock = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  margin-top: 20px;\n\n  .select {\n    .list {\n      left: 0;\n      right: initial;\n    }\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])));
var WebsitePriviewImageWrapper = exports.WebsitePriviewImageWrapper = _styledComponents.default.div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  box-shadow: 0px 1px 4px rgba(0,0,0,0.1);\n  img {\n    height: auto;\n    width: 100%;\n    margin-bottom: 15px;\n  }\n  @media (min-width: 768px) {\n    img {\n      height: 200px;\n      margin-bottom: 0;\n    }\n  }\n"])));