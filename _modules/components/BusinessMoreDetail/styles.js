"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionTitle = exports.ToggleItemWrapper = exports.Title = exports.BusinessMoreDetailContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessMoreDetailContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  @media (min-width: 576px) {\n    padding: 20px;\n  }\n"])));

exports.BusinessMoreDetailContainer = BusinessMoreDetailContainer;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n  margin-bottom: 30px;\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.Title = Title;

var ToggleItemWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 10px;\n  border-bottom: 1px solid #E9ECEF;\n  font-weight: 500;\n"])));

exports.ToggleItemWrapper = ToggleItemWrapper;

var AccordionTitle = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n"])));

exports.AccordionTitle = AccordionTitle;