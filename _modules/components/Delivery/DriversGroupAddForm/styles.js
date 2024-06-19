"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionContainer = exports.Container = exports.ButtonsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0 0 29px 0;\n  }\n"])));
var SectionContainer = exports.SectionContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 25px 38px;\n  margin: 25px 20px 34px 20px;\n\n  > div {\n    max-width: 1024px;\n  }\n"])));
var ButtonsContainer = exports.ButtonsContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  position: sticky;\n  z-index: 100;\n  bottom: 0;\n  background-color: ", ";\n\n  > button {\n    border-radius: 8px;\n    height: 44px;\n    &:last-child {\n      margin: 0 10px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});