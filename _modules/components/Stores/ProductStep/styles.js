"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportMenuContainer = exports.ImageContent = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var ImportMenuContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    text-align: center;\n    margin: 0;\n  }\n  p {\n    font-size: 20px;\n    text-align: center;\n    margin: 25px 0;\n  }\n"])));
exports.ImportMenuContainer = ImportMenuContainer;
var ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  button {\n    height: 44px;\n    width: 300px;\n    margin-top: 30px;\n    border-radius: 8px;\n  }\n"])));
exports.ButtonWrapper = ButtonWrapper;
var ImageContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));
exports.ImageContent = ImageContent;