"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOwnerSelector = exports.OwnerItem = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var OwnerItem = exports.OwnerItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  border-bottom: 1px solid #E9ECEF;\n  padding: 15px 0;\n\n  span {\n    font-size: 14px;\n  }\n\n  p {\n    color: ", ";\n    margin: 0px;\n    font-size: 14px;\n    cursor: pointer;\n    user-select: none;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.danger;
});
var WrapperOwnerSelector = exports.WrapperOwnerSelector = (0, _styledComponents.default)(OwnerItem)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-bottom: none;\n\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n\n  > div:first-child {\n    width: calc(100% - 80px);\n    background: #F8F9FA;\n    border: none;\n    .list {\n      > div {\n        max-height: 300px;\n      }\n    }\n\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n    }\n  }\n"])));