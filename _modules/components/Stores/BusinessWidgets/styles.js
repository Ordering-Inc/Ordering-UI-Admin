"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.PopupContainer = exports.InlineContainer = exports.GuideLink = exports.FormGroup = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var PopupContainer = exports.PopupContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 20px;\n  }\n"])));
var FormGroup = exports.FormGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  label {\n    display: block;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 11px;\n  }\n  input, textarea {\n    width: 100%;\n  }\n"])));
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  .select {\n    border: none;\n    background: ", ";\n    padding: 11px 0;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var InlineContainer = exports.InlineContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 20px;\n  }\n"])));
var GuideLink = exports.GuideLink = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));