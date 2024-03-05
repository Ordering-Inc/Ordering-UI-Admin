"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  button {\n    height: 44px;\n    text-transform: lowercase;\n    &:first-letter {\n      text-transform: uppercase;\n    }\n  }\n"])));
exports.Container = Container;
var FormControl = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  label {\n    margin-bottom: 10px;\n  }\n  input {\n    height: 44px;\n    width: 100%;\n  }\n"])));
exports.FormControl = FormControl;