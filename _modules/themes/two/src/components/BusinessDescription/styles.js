"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDescription = exports.WrapperShortDescription = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: calc(100% - 130px);\n  > button {\n    position: sticky;\n    top: 100%;\n  }\n"])));

exports.Container = Container;

var WrapperShortDescription = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  input,\n  textarea {\n    color: ", ";\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.WrapperShortDescription = WrapperShortDescription;
var WrapperDescription = (0, _styledComponents.default)(WrapperShortDescription)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n"])));
exports.WrapperDescription = WrapperDescription;