"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.Option = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 50px 0 30px 0;\n\n  > p {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 11px;\n  }\n\n  .select {\n    width: 100%;\n    background: ", ";\n    border: none;\n    font-size: 14px;\n\n    > div:first-child {\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n    .list {\n      max-width: 100%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var Option = exports.Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > span {\n    font-size: 14px;\n    font-weight: 700;\n  }\n"])));