"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.TogglePassword = exports.TitleFormSide = exports.Tabs = exports.Tab = exports.SocialButtons = exports.ResendCode = exports.RedirectLink = exports.ReCAPTCHAWrapper = exports.PhoneNumberWrapper = exports.OtpWrapper = exports.LoginWith = exports.LoginHeroContainer = exports.LoginContainer = exports.InputWithIcon = exports.HeroSide = exports.FormSide = exports.FormInput = exports.CountdownTimer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LoginContainer = exports.LoginContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : '100vh';
});
var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var HeroSide = exports.HeroSide = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: none;\n\n  ", "\n\n  @media (min-width: 992px) {\n    width: 50%;\n    text-align:  center;\n    display: block;\n    img {\n      width: 35%;\n      margin-top: 18vh;\n      margin-left: -80px;\n      max-height: 100px;\n      object-fit: contain;\n    }\n  }\n"])), function (_ref2) {
  var bgimage = _ref2.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
var LoginHeroContainer = exports.LoginHeroContainer = function LoginHeroContainer(props) {
  var style = {};
  style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(HeroSide, _extends({}, props, {
    style: style
  }), props.children);
};
var FormSide = exports.FormSide = (0, _styledComponents.default)(Side)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1C202E;\n  padding: 30px 8%;\n  box-sizing: border-box;\n  height: 100vh;\n\n  button {\n    padding: 9px 5px;\n  }\n\n  @media (min-width: 769px) {\n    height: auto;     \n  }\n\n  @media (min-width: 992px) {\n    margin-left: -80px;\n    border-radius: 54px 0px 0px 54px;\n    width: calc(50% + 80px);\n  }\n"])));
var LoginWith = exports.LoginWith = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 14px;\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 18px;\n  }\n"])));
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  * {\n    padding: 8px 0px;\n  }\n\n  input:not(:last-child) {\n    margin-top: 15px;\n    margin-bottom: 15px;\n    padding-left: 60px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n\n  button {\n    position: relative;\n    margin-top: 40px;\n    padding: 9px 5px;\n\n    svg {\n      position: absolute;\n      right: 35px;\n      top: 12px;\n      font-size: 24px;\n      padding: 0px;\n    }\n  }\n"])), function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '90%' : '100%';
});
var RedirectLink = exports.RedirectLink = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 10px;\n  font-size: 17px;\n\n  span {\n    color: #FFF;\n    margin-right: 5px;\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref4) {
  var register = _ref4.register;
  return register && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "])), function (_ref5) {
    var isPopup = _ref5.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)';
  });
}, function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      font-size: 16px;\n    "])));
});
var SocialButtons = exports.SocialButtons = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n   width: calc(100% - 40px);\n   margin-top: 5px;\n\n  button {\n    display: flex;\n    justify-content: start;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n    }\n  }\n"])));
var TitleFormSide = exports.TitleFormSide = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  color: ", ";\n  \n  h1 {\n    text-transform: uppercase;\n    font-size: 24px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 60px;\n  }\n\n  @media (min-width: 425px) {\n    h1 {\n      font-size: 40px;\n    }\n    p {\n      font-size: 20px;\n    }\n  }\n\n  @media (min-width: 769px) {\n    h1 {\n      font-size: 50px;\n    }\n    p {\n      font-size: 24px;\n      margin-bottom: 80px;\n    }\n  }  \n"])), function (props) {
  return props.theme.colors.white;
});
var InputWithIcon = exports.InputWithIcon = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  input {\n    width: 100%;\n  }\n\n  img {\n    position: absolute;\n    width: 20px;\n    padding: 0px;\n    margin: 0 20px;\n  }\n\n  svg {\n    position: absolute;\n    font-size: 24px;\n    color: #707070;\n    padding: 0px;\n    margin: 0 20px;\n  }\n"])));
var PhoneNumberWrapper = exports.PhoneNumberWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  .PhoneInputInput {\n    height: 47px;\n    border-radius: 8px !important;\n  }\n  .PhoneInputCountry {\n    padding: 8px;\n    border-radius: 8px;\n    background-color: ", ";\n    * {\n      padding: 0px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var WrapperPassword = exports.WrapperPassword = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n\n  input {\n    width: 100%;\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  > svg {\n    position: absolute;\n    font-size: 24px;\n    color: #707070;\n    padding: 0px;\n    margin: 0 20px;\n  }\n"])));
var TogglePassword = exports.TogglePassword = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  color: #333;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n\n  svg {\n    padding: 0;\n    color: #707070;\n  }\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    right: 15px;\n  "])));
});
var ReCAPTCHAWrapper = exports.ReCAPTCHAWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  * {\n    padding: 0;\n  }\n"])));
var Tabs = exports.Tabs = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;  \n"])));
var Tab = exports.Tab = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  cursor: pointer;\n  ", "\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "])));
}, function (_ref8) {
  var active = _ref8.active;
  return active && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.white;
  });
}, function (_ref9) {
  var active = _ref9.active;
  return !active && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
});
var CountdownTimer = exports.CountdownTimer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  \n  span {\n    font-size: 30px;\n    font-weight: 700;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.white;
});
var OtpWrapper = exports.OtpWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n  .otp-container{\n    display: flex;\n    justify-content: space-evenly;\n    margin: 20px;\n    \n    .otp-input{\n      width: 50px !important;\n      height: 45px;\n      border-radius: 8px;\n      background-color: ", ";\n      outline: none;\n      border: none;\n      font-size: 20px;\n      font-weight: bold; \n\n      &:focus{\n        border-color: ", " !important;\n      }\n\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: #DBDCDB;\n      }\n      &:-ms-input-placeholder {\n        color: #DBDCDB;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
var ResendCode = exports.ResendCode = _styledComponents.default.span(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 20px;\n  align-self: center;\n  margin-bottom: 10px;\n  cursor: ", ";\n"])), function (props) {
  return props.disabled ? props.theme.colors.disabled : props.theme.colors.primary;
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});