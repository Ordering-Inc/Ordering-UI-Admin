"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.SelectContent = exports.SelectHeader = exports.SettingsSelectContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SettingsSelectContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"])));

exports.SettingsSelectContainer = SettingsSelectContainer;

var SelectHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n\n  p {\n    font-size: 14px;\n    color: ", ";\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.SelectHeader = SelectHeader;

var SelectContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  p {\n    font-size: 14px;\n    color: #748194;\n  }\n\n  .select {\n    border: none;\n    width: 100%;\n\n    > div: first-child {\n      padding: 8px 15px;\n      border-radius: 7.6px;\n      border: 1px solid #DEE2E6;\n    }\n  }\n"])));

exports.SelectContent = SelectContent;

var Option = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  font-size: 13px;\n  line-height: 2;\n  font-weight: 500;\n"])));

exports.Option = Option;