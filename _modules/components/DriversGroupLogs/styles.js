"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.UserInfoContainer = exports.TableWrapper = exports.Table = exports.NoData = exports.DriversGroupLogsContainer = exports.DateTimeWrapper = exports.DataListTable = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DriversGroupLogsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: calc(100% - 180px);\n"])));

exports.DriversGroupLogsContainer = DriversGroupLogsContainer;

var TableWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: 100%;\n"])));

exports.TableWrapper = TableWrapper;

var Table = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: 1000px;\n  color: ", ";\n\n  thead {\n    tr {\n      border-bottom: solid 1px ", ";\n      th {\n        padding: 13px 0;\n        font-size: 12px;\n        &:first-child {\n          width: 10%;\n          ", "\n          box-sizing: border-box;\n        }\n        &:nth-child(2) {\n          width: 35%;\n          padding-left: 15px;\n          padding-right: 15px;\n          box-sizing: border-box;\n        }\n        &:nth-child(3) {\n          ", "\n          box-sizing: border-box;\n        }\n      }\n    }\n  }\n\n  > tbody {\n    border-bottom: 1px solid ", ";\n    td {\n      padding: 13px 0;\n      font-size: 12px;\n      &:first-child {\n        width: 10%;\n        ", "\n        box-sizing: border-box;\n      }\n      &:nth-child(2) {\n        width: 35%;\n      }\n      &:nth-child(3) {\n        ", "\n        box-sizing: border-box;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            padding-left: 15px;\n          "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            padding-right: 15px;\n          "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            padding-right: 15px;\n          "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            padding-left: 15px;\n          "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          padding-left: 15px;\n        "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          padding-right: 15px;\n        "])));
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          padding-right: 15px;\n        "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          padding-left: 15px;\n        "])));
});

exports.Table = Table;

var UserInfoContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  p {\n    color: ", ";\n    margin: 0px;\n    font-size: 12px;\n    &:first-child {\n      color: ", ";\n      font-weight: 500;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.UserInfoContainer = UserInfoContainer;

var DateTimeWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  font-size: 12px;\n  min-height: 36px;\n  display: flex;\n  align-items: center;\n\n  ", "\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    padding-left: 15px;\n    margin-left: 15px;\n    border-left: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    padding-right: 15px;\n    margin-right: 15px;\n    border-right: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.DateTimeWrapper = DateTimeWrapper;

var NoData = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-size: 16px;\n"])));

exports.NoData = NoData;

var WrapperPagination = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n"])));

exports.WrapperPagination = WrapperPagination;

var DataListTable = _styledComponents.default.table(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n\n  tbody {\n    border-bottom: none;\n    td {\n      box-sizing: border-box;\n      &:first-child {\n        width: 50% !important;\n        padding-left: 15px;\n        padding-right: 15px;\n        box-sizing: border-box;\n      }\n      &:not(:first-child) {\n        width: initial !important;\n      }\n      white-space: nowrap;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        padding-left: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        padding-right: 15px;\n      "])));
});

exports.DataListTable = DataListTable;