"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleFormSide = exports.RedirectLink = exports.ReCAPTCHAWrapper = exports.InputWithIcon = exports.HeroSide = exports.HeroContainer = exports.FormSide = exports.FormInput = exports.ForgotPasswordContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ForgotPasswordContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: ", ";\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : '100vh';
});
exports.ForgotPasswordContainer = ForgotPasswordContainer;
var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var HeroSide = (0, _styledComponents.default)(Side)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: none;\n\n  ", "\n\n  @media (min-width: 992px) {\n    width: 50%;\n    text-align:  center;\n    display: block;\n    img {\n      width: 35%;\n      margin-top: 10%;\n      margin-left: -80px;\n    }\n  }\n"])), function (_ref2) {
  var bgimage = _ref2.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
exports.HeroSide = HeroSide;
var HeroContainer = function HeroContainer(props) {
  var style = {};
  style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(HeroSide, _extends({}, props, {
    style: style
  }), props.children);
};
exports.HeroContainer = HeroContainer;
var TitleFormSide = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #fff;\n  \n  h1 {\n    text-transform: uppercase;\n    font-size: 24px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 12px;\n    margin-top: 0px;\n    margin-bottom: 40px;\n  }\n\n  @media (min-width: 425px) {\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n\n  @media (min-width: 769px) {\n    h1 {\n      font-size: 32px;\n    }\n    p {\n      font-size: 16px;\n      margin-bottom: 60px;\n    }\n  }  \n"])));
exports.TitleFormSide = TitleFormSide;
var FormSide = (0, _styledComponents.default)(Side)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1C202E;\n  padding: 0 8%;\n  box-sizing: border-box;\n  height: 100vh;\n\n  @media (min-width: 769px) {\n    height: auto;     \n  }\n\n  @media (min-width: 992px) {\n    margin-left: -80px;\n    border-radius: 54px 0px 0px 54px;\n    width: calc(50% + 80px);\n  }\n"])));
exports.FormSide = FormSide;
var FormInput = _styledComponents.default.form(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  * {\n    padding: 8px 0px;\n  }\n\n  input:not(:last-child) {\n    margin-top: 15px;\n    margin-bottom: 15px;\n    padding-left: 60px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n\n  button {\n    position: relative;\n    margin-top: 40px;\n    padding: 9px 5px;\n\n    svg {\n      position: absolute;\n      right: 35px;\n      top: 8px;\n      font-size: 24px;\n    }\n  }\n"])), function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '90%' : '100%';
});
exports.FormInput = FormInput;
var RedirectLink = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 10px;\n  font-size: 17px;\n\n  span {\n    color: #FFF;\n    margin-right: 5px;\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
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
exports.RedirectLink = RedirectLink;
var InputWithIcon = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  input {\n    width: 100%;\n  }\n\n  img {\n    position: absolute;\n    width: 20px;\n    padding: 0px;\n    margin: 0 20px;\n  }\n\n  svg {\n    position: absolute;\n    font-size: 24px;\n    color: #707070;\n    padding: 0px;\n    margin: 0 20px;\n  }\n"])));
exports.InputWithIcon = InputWithIcon;
var ReCAPTCHAWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  * {\n    padding: 0;\n  }\n"])));
exports.ReCAPTCHAWrapper = ReCAPTCHAWrapper;