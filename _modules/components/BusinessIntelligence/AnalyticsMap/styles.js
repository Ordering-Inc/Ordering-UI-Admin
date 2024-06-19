"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > button {\n    position: sticky;\n    top: 100%;\n  }\n"])));
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 270px;\n  position: relative;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  button {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    font-size: 14px;\n  }\n\n  @media (min-width: 768px) {\n    height: 320px;\n  }\n"])));