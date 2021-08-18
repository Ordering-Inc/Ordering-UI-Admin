"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOwnerSelector = exports.OwnerItem = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.Container = Container;

var OwnerItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  border-bottom: 1px solid #E9ECEF;\n  padding: 15px 0;\n\n  span {\n    font-size: 14px;\n  }\n\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.OwnerItem = OwnerItem;
var WrapperOwnerSelector = (0, _styledComponents.default)(OwnerItem)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-bottom: none;\n\n  > svg {\n    color: ", ";\n  }\n\n  > div:first-child {\n    width: calc(100% - 50px);\n    background: #F8F9FA;\n    border: none;\n\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WrapperOwnerSelector = WrapperOwnerSelector;