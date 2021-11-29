"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Label = exports.InvoiceGeneralDetailContainer = exports.FormControl = exports.CheckBoxWrapper = exports.CalendarWrapper = exports.ActionBtnWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InvoiceGeneralDetailContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 30px;\n"])));

exports.InvoiceGeneralDetailContainer = InvoiceGeneralDetailContainer;

var FormControl = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n\n  input, textarea {\n    background: #FFFFFF;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    font-size: 14px;\n    padding: 10px 15px;\n    outline: none;\n    width: 100%;\n  }\n\n  textarea {\n    width: 100%;\n  }\n\n  .select {\n    width: 100%;\n    background: #F8F9FA;\n    color: #748194;\n    border: none;\n\n    > div:first-child {\n      font-size: 14px;\n      padding-top: 5px;\n      padding-bottom: 5px;\n\n      div:first-child {\n        font-size: 14px;\n        padding: 1px 0;\n      }\n    }\n\n    .list {\n      > div {\n        max-height: 250px;\n      }\n    }\n  }\n"])));

exports.FormControl = FormControl;

var Label = _styledComponents.default.label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  margin-bottom: 10px;\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});

exports.Label = Label;

var Option = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  font-size: 13px;\n  line-height: 2;\n  font-weight: 500;\n"])));

exports.Option = Option;

var CalendarWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n\n  > div {\n    left: 0 !important;\n    right: initial !important;\n\n    ", "\n  }\n\n  > button {\n    padding: 7px 15px;\n    width: 100%;\n    color: #748194;\n    background: #F8F9FA;\n    border-radius: 7.6px;\n    border: none;\n    text-align: left;\n\n    svg {\n      font-size: 16px;\n      margin-right: 12px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      left: initial;\n      right: 0 !important;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: 12px;\n        margin-left: 0;\n      "])));
});

exports.CalendarWrapper = CalendarWrapper;

var ActionBtnWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  margin-bottom: 20px;\n\n  > button {\n    height: 44px;\n  }\n"])));

exports.ActionBtnWrapper = ActionBtnWrapper;

var CheckBoxWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  user-select: none;\n\n  label {\n    font-size: 14px;\n    color: ", ";\n    margin-bottom: 0;\n    margin-left: 15px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      margin-left: 0;\n    "])));
});

exports.CheckBoxWrapper = CheckBoxWrapper;