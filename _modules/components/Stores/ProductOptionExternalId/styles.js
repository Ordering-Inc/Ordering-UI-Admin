"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  button {\n    height: 44px;\n    text-transform: lowercase;\n    &:first-letter {\n      text-transform: uppercase;\n    }\n  }\n"])));
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  label {\n    margin-bottom: 10px;\n  }\n  input {\n    height: 44px;\n    width: 100%;\n  }\n"])));