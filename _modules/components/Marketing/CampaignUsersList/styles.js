"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TableContainer = exports.Table = exports.THead = exports.TBody = exports.PaginationWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var Title = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n\n  h1 {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 30px;\n    margin: 0px;\n    > span {\n      display: inline-flex;\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 24px;\n      margin: 0px 16px;\n    }\n  }\n"])));
exports.Title = Title;
var TableContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
exports.TableContainer = TableContainer;
var Table = _styledComponents.default.table(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  th,\n  td {\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n\n    &:first-child {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n  }\n"])));
exports.Table = Table;
var THead = _styledComponents.default.thead(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  tr {\n    width: 100%;\n    border-bottom: solid 1px ", ";\n    th {\n      color: ", ";\n      white-space: nowrap;\n      z-index: 100;\n      background: ", ";\n      padding-top: 0px;\n      font-weight: 700;\n      font-size: 12px;\n      padding: 5px 15px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
});
exports.THead = THead;
var TBody = _styledComponents.default.tbody(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  tr {\n    td {\n      &.underline {\n        text-decoration: underline;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.TBody = TBody;
var PaginationWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n"])));
exports.PaginationWrapper = PaginationWrapper;