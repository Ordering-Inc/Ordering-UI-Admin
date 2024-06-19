"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsPreviewWrapper = exports.SmsPreviewContentWrapper = exports.SmsPreviewContent = exports.SmsContentLayout = exports.InputWrapper = exports.Description = exports.Container = exports.ContactWrapper = exports.ButtonWrapper = exports.BottomSpace = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  input, textarea {\n    width: 100%;\n  }\n  textarea {\n    height: 80px;\n  }\n  margin-bottom: 35px;\n\n  .select {\n    border: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
var SmsPreviewWrapper = exports.SmsPreviewWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  background-color: ", ";\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 212px;\n  padding: 20px 16px 0px 16px;\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
var SmsContentLayoutStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n"])));
var SmsContentLayout = exports.SmsContentLayout = function SmsContentLayout(props) {
  return /*#__PURE__*/_react.default.createElement(SmsContentLayoutStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var SmsPreviewContentWrapper = exports.SmsPreviewContentWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  width: 100%;\n  padding: 9px;\n  margin-top: 30px;\n  height: 165px;\n  max-height: 165px;\n  overflow: auto;\n"])));
var SmsPreviewContent = exports.SmsPreviewContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 10px 0px 0px 0px;\n  background: ", ";\n  border-radius: 7.6px;\n  padding: 10px;\n  height: fit-content;\n\n  > h2 {\n    font-size: 10px;\n    margin-top: 0px;\n    margin-bottom: 5px;\n  }\n  p {\n    font-size: 7px;\n    margin: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.lightGray;
});
var Description = exports.Description = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 10px 0px;\n  span {\n    color: ", ";\n    cursor: pointer;\n    transition: all 0.3s linear;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var BottomSpace = exports.BottomSpace = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 1px;\n"])));
var ContactWrapper = exports.ContactWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    font-size: 14px;\n    text-align: center;\n    margin-bottom: 14px;\n  }\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));