"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletBalaceContainer = exports.SectionContainer = exports.FormController = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WalletBalaceContainer = exports.WalletBalaceContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 38px;\n  display: flex;\n  flex-direction: column;\n  > span {\n    &:first-child {\n      font-size: 24px;\n      font-weight: 500;\n      line-height: 36px;\n    }\n    &:last-child {\n      font-size: 14px;\n    }\n  }\n"])));
var SectionContainer = exports.SectionContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 54px;\n  margin-bottom: 30px;\n  > p {\n    font-size: 16px;\n    font-weight: 600;\n    margin-top: 0;\n    margin-bottom: 22px;\n  }\n  > button {\n    height: 44px;\n  }\n"])));
var FormController = exports.FormController = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 26px;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n\n  input,\n  textarea {\n    font-size: 14px;\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n"])));