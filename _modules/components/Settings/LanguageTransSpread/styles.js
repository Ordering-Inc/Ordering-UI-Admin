"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransSpreadContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TransSpreadContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 3px;\n  table {\n    th {\n      > div {\n        font-size: 12px;\n        padding: 15px 0 !important;\n      }\n    }\n    td {\n      font-size: 12px;\n      padding: 15px 0;\n    }\n  }\n"])));
exports.TransSpreadContainer = TransSpreadContainer;