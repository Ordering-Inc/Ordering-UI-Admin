"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEOContainer = exports.Label = exports.FormGroup = exports.FormControl = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SEOContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 30px;\n"])));

exports.SEOContainer = SEOContainer;

var FormGroup = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

exports.FormGroup = FormGroup;

var FormControl = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n\n  input, textarea {\n    background: #FFFFFF;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    font-size: 14px;\n    padding: 10px 15px;\n    outline: none;\n    width: 100%;\n  }\n\n  textarea {\n    width: 100%;\n  }\n\n  .select {\n    width: 100%;\n    background: #F8F9FA;\n    color: #748194;\n    border: none;\n\n    > div:first-child {\n      font-size: 14px;\n      padding-top: 5px;\n      padding-bottom: 5px;\n\n      div:first-child {\n        font-size: 14px;\n        padding: 1px 0;\n      }\n    }\n  }\n"])));

exports.FormControl = FormControl;

var Label = _styledComponents.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  margin-bottom: 10px;\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});

exports.Label = Label;