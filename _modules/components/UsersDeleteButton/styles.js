"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperIndicator = exports.WrapperCheckPassword = exports.ErrorText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperCheckPassword = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 10px;\n  color: ", ";\n\n  h3 {\n    font-size: 24px;\n    margin: 0px;\n    font-weight: 600;\n  }\n\n  p {\n    margin-top: 25px;\n    margin-bottom: 10px;\n  }\n\n  input {\n    outline: none;\n    border-radius: 8px;\n    font-size: 16px;\n    border: 1px solid rgba(20, 20, 20, 0.2);\n    width: 100%;\n    padding: 10px 15px;\n    &:focus {\n      border: 1px solid ", ";\n    }\n  }\n\n  button {\n    margin-top: 40px;\n    width: 150px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.WrapperCheckPassword = WrapperCheckPassword;

var ErrorText = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 10px 0;\n"])));

exports.ErrorText = ErrorText;

var WrapperIndicator = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 100px;\n  height: 50px;\n  border-radius: 5px;\n  background: #151824;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 500;\n  font-size: 24px;\n"])));

exports.WrapperIndicator = WrapperIndicator;