"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.NewImporter = exports.InputWrapper = exports.Header = exports.FormInput = exports.FiledListWrapper = exports.FieldValue = exports.FieldRow = exports.FieldName = exports.FieldAddForm = exports.ExampleCSV = exports.ButtonWrapper = exports.ActionsForm = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewImporter = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 35px 20px;\n  overflow-x: hidden;\n"])));

exports.NewImporter = NewImporter;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));

exports.Header = Header;

var Title = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  margin: 0px 10px 0px 0px;\n  font-weight: 700;\n"])));

exports.Title = Title;

var InputWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  position: relative;\n\n  label {\n    color: ", ";\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n\n  input,\n  textarea {\n    color: ", ";\n  }\n\n  button {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    font-size: 14px;\n    line-height: 21px;\n    padding: 10px 15px;\n  }\n\n  .select {\n    background-color: ", ";\n    border: none;\n\n    div {\n      font-size: 14px;\n      color: ", ";\n    }\n\n     >div:first-child {\n      padding: 5px 15px;\n     }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
});

exports.InputWrapper = InputWrapper;

var FormInput = _styledComponents.default.form(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));

exports.FormInput = FormInput;

var ActionsForm = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  > button {\n    height: 42px;\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
});

exports.ActionsForm = ActionsForm;

var FiledListWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 15px;\n  position: relative;\n  label {\n    font-size: 14px;\n  }\n"])));

exports.FiledListWrapper = FiledListWrapper;

var FieldAddForm = _styledComponents.default.form(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n\n"])));

exports.FieldAddForm = FieldAddForm;

var FieldRow = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  &>:first-child {\n    width: 85%;\n  }\n"])));

exports.FieldRow = FieldRow;

var FieldName = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  border: 1px solid #DEE2E6;\n  border-radius: 8px;\n  font-size: 14px;\n  padding: 10px 15px;\n  outline: none;\n  width: 98%;\n"])), function (props) {
  var _props$theme$colors;

  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});

exports.FieldName = FieldName;
var FieldValue = (0, _styledComponents.default)(FieldName)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 85%;\n"])));
exports.FieldValue = FieldValue;

var ButtonWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  margin-left: 15px;\n  ", "\n  \n  button {\n    outline: none;\n    background: transparent;\n    border: none;\n    padding: 0px;\n    height: fit-content;\n    svg {\n      color: ", ";\n    }\n  }\n\n  button[type='submit'] {\n    svg {\n      color: ", ";\n    }\n  } \n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n    margin-left: 0;\n "])));
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ButtonWrapper = ButtonWrapper;

var ExampleCSV = _styledComponents.default.span(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n  font-style: italic;\n  margin: 0 5px;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ExampleCSV = ExampleCSV;