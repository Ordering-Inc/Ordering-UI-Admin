"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserActionSelector = exports.UserEnableWrapper = exports.NotFoundWrapper = exports.ImpotersTable = exports.ImportersTableWrapper = exports.ImportersBottomContainer = exports.ImportListContainer = exports.ImoportTbody = exports.AddNewImporterButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ImportListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.ImportListContainer = ImportListContainer;
var ImportersTableWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n"])));
exports.ImportersTableWrapper = ImportersTableWrapper;
var ImpotersTable = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  color: ", ";\n\n  td, th {\n    padding: 10px 0;\n    font-size: 14px;\n    &:first-child {\n      width: 50%;\n    }\n  }\n\n  thead {\n    border-bottom: solid 1px ", ";\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
});
exports.ImpotersTable = ImpotersTable;
var ImoportTbody = _styledComponents.default.tbody(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  tr {\n    td {\n      padding-right: 10px;\n      .importer-name {\n        display: flex;\n        width: 100%;\n        border-right: 1px solid ", ";\n      }\n    }\n  }\n  cursor: pointer;\n  border-bottom: 1px solid ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", ";\n      border-bottom: 1px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
exports.ImoportTbody = ImoportTbody;
var UserEnableWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});
exports.UserEnableWrapper = UserEnableWrapper;
var WrapperUserActionSelector = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  button {\n    background: transparent !important;\n    border: none;\n    padding: 0px;\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n    }\n    &:after {\n      display: none;\n    }\n  }\n  .show {\n    button {\n      background: #F8F9FA !important;\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    >div {\n      border: 1px solid #E9ECEF;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n  > div {\n    border-radius: 8px;\n    ", "\n    > div {\n      a:last-child {\n        color: #E63757;\n      }\n    }\n    .dropdown-item {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});
exports.WrapperUserActionSelector = WrapperUserActionSelector;
var ImportersBottomContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n"])));
exports.ImportersBottomContainer = ImportersBottomContainer;
var AddNewImporterButton = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: fit-content;\n  cursor: pointer;\n  color: rgb(144, 155, 169);\n  font-size: 14px;\n  margin-top: 20px;\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.05, props.theme.colors.primary);
});
exports.AddNewImporterButton = AddNewImporterButton;
var NotFoundWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  #not-found-source {\n    height: auto;\n    h1 {\n      font-size: 18px;\n      margin-top: 25px;\n    }\n  }\n"])));
exports.NotFoundWrapper = NotFoundWrapper;