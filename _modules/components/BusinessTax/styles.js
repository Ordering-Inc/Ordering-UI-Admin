"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.Label = exports.FormControl = exports.BusinessTaxContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessTaxContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 10px;\n"])));

exports.BusinessTaxContainer = BusinessTaxContainer;

var FormControl = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  input[type=text] {\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    height: 44px;\n    width: 100%;\n  }\n"])));

exports.FormControl = FormControl;

var Label = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: ", ";\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});

exports.Label = Label;

var SelectWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n\n  .select {\n    font-size: 14px;\n    background: ", ";\n    height: 44px;\n    border: 1px solid ", ";\n  }\n\n  .list {\n    width: 100%;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.secundary;
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.secundary;
});

exports.SelectWrapper = SelectWrapper;