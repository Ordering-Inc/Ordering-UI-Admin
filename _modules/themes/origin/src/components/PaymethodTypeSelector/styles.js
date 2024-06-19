"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceholderTitle = exports.Option = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n"])));
var PlaceholderTitle = exports.PlaceholderTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  padding: 5px 10px;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"])));