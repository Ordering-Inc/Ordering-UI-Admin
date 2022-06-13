"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhatsAppPreviewWrapper = exports.WhatsAppPreviewLayout = exports.WhatsAppMessageContent = exports.WhatsAppContentHeader = exports.WhatsAppContent = exports.InputWrapper = exports.Container = exports.ButtonWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.Container = Container;

var InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n  input, textarea {\n    width: 100%;\n  }\n  textarea {\n    height: 80px;\n  }\n  margin-bottom: 35px;\n\n  .select {\n    border: 1px solid ", ";\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});

exports.InputWrapper = InputWrapper;

var WhatsAppPreviewWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  background-color: ", ";\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 212px;\n  padding: 20px 16px 0px 16px;\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});

exports.WhatsAppPreviewWrapper = WhatsAppPreviewWrapper;

var ButtonWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));

exports.ButtonWrapper = ButtonWrapper;

var WhatsAppPreviewLayout = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.WhatsAppPreviewLayout = WhatsAppPreviewLayout;

var WhatsAppContentHeaderStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 51px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n"])));

var WhatsAppContentHeader = function WhatsAppContentHeader(props) {
  return /*#__PURE__*/_react.default.createElement(WhatsAppContentHeaderStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.WhatsAppContentHeader = WhatsAppContentHeader;

var WhatsAppContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: #EAE1D8;\n  padding: 9px;\n  height: 145px;\n  max-height: 145px;\n  overflow: auto;\n"])));

exports.WhatsAppContent = WhatsAppContent;

var WhatsAppMessageContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 20px 0px 0px 0px;\n  background: ", ";\n  border-radius: 7.6px;\n  padding: 10px;\n  height: fit-content;\n\n  > h2 {\n    font-size: 10px;\n    margin-top: 0px;\n    margin-bottom: 5px;\n  }\n  p {\n    font-size: 7px;\n    margin: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.WhatsAppMessageContent = WhatsAppMessageContent;