"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var PrintContainer = exports.PrintContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: none;\n  padding: 80px 50px;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n\n  @media print {\n    display: block;\n\n    @page { size: portrait; }\n  }\n"])));