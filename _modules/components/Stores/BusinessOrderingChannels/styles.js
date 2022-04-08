"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleItemWrapper = exports.Title = exports.Label = exports.FormControl = exports.BusinessOrderingChannelsContainer = exports.BusinessCustomSlugContainer = exports.AccordionTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessOrderingChannelsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  @media (min-width: 576px) {\n    padding: 20px;\n  }\n"])));

exports.BusinessOrderingChannelsContainer = BusinessOrderingChannelsContainer;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n  margin-bottom: 30px;\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.Title = Title;

var ToggleItemWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 10px;\n  border-bottom: 1px solid #E9ECEF;\n  font-weight: 500;\n"])));

exports.ToggleItemWrapper = ToggleItemWrapper;

var AccordionTitle = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n"])));

exports.AccordionTitle = AccordionTitle;

var BusinessCustomSlugContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 10px;\n\n  button {\n    border-radius: 7.6px;\n    height: 44px;\n  }\n"])));

exports.BusinessCustomSlugContainer = BusinessCustomSlugContainer;

var FormControl = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  input[type=text] {\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    height: 44px;\n    width: 100%;\n  }\n"])));

exports.FormControl = FormControl;

var Label = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: ", ";\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});

exports.Label = Label;