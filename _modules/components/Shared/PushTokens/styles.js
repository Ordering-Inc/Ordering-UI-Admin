"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.TableWrapper = exports.Table = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  p.no-data {\n    font-size: 14px;\n    margin: 20px 0;\n  }\n"])));
var TableWrapper = exports.TableWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: auto;\n"])));
var Table = exports.Table = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: 900px;\n  color: ", ";\n\n  thead {\n    tr {\n      border-bottom: solid 1px ", ";\n      th {\n        padding: 13px 0;\n        font-size: 12px;\n        &:nth-child(2) {\n          width: 35%;\n          padding-left: 15px;\n          padding-right: 15px;\n          box-sizing: border-box;\n        }\n        &:nth-child(3),\n        &:nth-child(4),\n        &:nth-child(5)\n        {\n          width: 19%;\n        }\n      }\n    }\n  }\n\n  tbody {\n    border-bottom: 1px solid ", ";\n    td {\n      padding: 13px 0;\n      font-size: 12px;\n\n      &:nth-child(2) {\n        width: 35%;\n        padding-left: 15px;\n        padding-right: 15px;\n        box-sizing: border-box;\n      }\n\n      &:nth-child(3),\n      &:nth-child(4),\n      &:nth-child(5) {\n        width: 19%;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.borderColor;
});
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n"])));