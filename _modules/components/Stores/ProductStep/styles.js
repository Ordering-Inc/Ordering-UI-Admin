"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportMenuContainer = exports.ImageContent = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var ImportMenuContainer = exports.ImportMenuContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    text-align: center;\n    margin: 0;\n  }\n  p {\n    font-size: 20px;\n    text-align: center;\n    margin: 25px 0;\n  }\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  button {\n    height: 44px;\n    width: 300px;\n    margin-top: 30px;\n    border-radius: 8px;\n  }\n"])));
var ImageContent = exports.ImageContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));