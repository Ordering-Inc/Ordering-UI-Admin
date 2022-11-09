"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.PopupContainer = exports.InlineContainer = exports.GuideLink = exports.FormGroup = exports.Container = exports.ConfigMessage = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.Container = Container;

var PopupContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 20px;\n  }\n"])));

exports.PopupContainer = PopupContainer;

var FormGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  label {\n    display: block;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 11px;\n  }\n  input, textarea {\n    width: 100%;\n  }\n"])));

exports.FormGroup = FormGroup;

var SelectWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  .select {\n    border: none;\n    background: ", ";\n    padding: 11px 0;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.SelectWrapper = SelectWrapper;

var InlineContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 20px;\n  }\n"])));

exports.InlineContainer = InlineContainer;

var GuideLink = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));

exports.GuideLink = GuideLink;

var ConfigMessage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  span {\n    color: ", ";\n    text-decoration: underline;\n    cursor: pointer;\n    display: block;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ConfigMessage = ConfigMessage;