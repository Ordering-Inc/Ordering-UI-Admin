"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSpreadSheetContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessSpreadSheetContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  span.product-id {\n    background: ", ";\n    padding: 5px 8px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.BusinessSpreadSheetContainer = BusinessSpreadSheetContainer;