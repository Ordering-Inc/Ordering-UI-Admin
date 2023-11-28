"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SocialShareImage = exports.SkeletonWrapper = exports.SaveBtnWrapper = exports.LogoImage = exports.LabelHeader = exports.Label = exports.InfoWrapper = exports.InfoTitle = exports.InfoContent = exports.Info = exports.FormGroup = exports.FormControl = exports.FormContainer = exports.DetailContainer = exports.ContactUsContainer = exports.BusinessImg = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DetailContainer = exports.DetailContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var ContactUsContainer = exports.ContactUsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 8px;\n  padding: 20px 28px;\n\n  > p {\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 7px;\n  }\n\n  > button {\n    background: transparent;\n    height: 44px;\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
});
var FormContainer = exports.FormContainer = _styledComponents.default.form(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 38px;\n"])));
var BusinessImg = exports.BusinessImg = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  background: #E9ECEF;\n  border-radius: 7.6px;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 768px) {\n    height: 180px;\n  }\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  ", "\n"])), function (_ref) {
  var small = _ref.small;
  return small ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  span {\n    margin: 0;\n    color: #ADB5BD;\n    ", "\n  }\n\n  svg {\n    color: #CED4DA;\n    ", "\n  }\n"])), function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      font-size: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      font-size: 12px;\n    "])));
}, function (_ref3) {
  var small = _ref3.small;
  return small ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      width: 25px;\n      height: 25px;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      width: 32px;\n      height: 32px;\n    "])));
});
var LogoImage = exports.LogoImage = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n  height: 72px;\n  width: 72px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  background: #E9ECEF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    transform: translate3d(-30px,-45px,0px);\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    transform: translate3d(30px,-45px,0px);;\n  "])));
});
var FormGroup = exports.FormGroup = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n"])));
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  input, textarea {\n    box-sizing: border-box;\n    font-size: 14px;\n    width: 100%;\n  }\n\n  textarea {\n    width: 100%;\n  }\n\n  .select {\n    width: 100%;\n    background: #F8F9FA;\n    color: #748194;\n    border: none;\n\n    > div:first-child {\n      font-size: 14px;\n      padding-top: 5px;\n      padding-bottom: 5px;\n\n      div:first-child {\n        font-size: 14px;\n        padding: 1px 0;\n      }\n    }\n  }\n"])));
var Label = exports.Label = _styledComponents.default.label(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  margin-bottom: 10px;\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
});
var SaveBtnWrapper = exports.SaveBtnWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  button {\n    padding: 6px 20px;\n  }\n"])));
var SocialShareImage = exports.SocialShareImage = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  height: 72px;\n  width: 72px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  background: #E9ECEF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])));
var LabelHeader = exports.LabelHeader = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: fit-content;\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  ", "\n\n  &:hover > div {\n    /* display: block; */\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    margin-right: -8px;\n    margin-left: 8px;\n  "])));
});
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 300px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  left: 0px;\n  ", "\n\n  @media (min-width: 576px) {\n    min-width: 450px;\n    padding: 12px 15px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      right: 0px;\n      left: initial;\n    "])));
});
var InfoTitle = exports.InfoTitle = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"])));
var Info = exports.Info = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  padding: 3px 0;\n"])), function (props) {
  return props.theme.colors.borderColor;
});