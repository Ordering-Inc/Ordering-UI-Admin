"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldRowContainer = exports.MaxTimeBusinessInputContainer = exports.IconImage = exports.MaxTimeInputsContainer = exports.MapsApiDescriptionContainer = exports.UseMapsApiCheckboxContainer = exports.FieldWrapper = exports.GroupOrdersContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GroupOrdersContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 15px;\n  }\n"])));

exports.GroupOrdersContainer = GroupOrdersContainer;

var FieldWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n\n  > label {\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n"])));

exports.FieldWrapper = FieldWrapper;

var UseMapsApiCheckboxContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n\n  > input {\n    margin-top: 5px;\n  }\n"])));

exports.UseMapsApiCheckboxContainer = UseMapsApiCheckboxContainer;

var MapsApiDescriptionContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  p {\n    margin: 0px;\n    &:first-child {\n      font-size: 14px;\n    }\n    &:not(:first-child) {\n      font-size: 12px;\n      color: ", ";\n\n      a {\n        color: ", ";\n        margin: 0 7px;\n        white-space: nowrap;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.MapsApiDescriptionContainer = MapsApiDescriptionContainer;

var MaxTimeInputsContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  input {\n    width: 75px;\n  }\n\n  strong {\n    margin: 0 20px;\n  }\n"])));

exports.MaxTimeInputsContainer = MaxTimeInputsContainer;

var IconImage = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  -webkit-mask: url(", ") no-repeat center;\n  mask: url(", ") no-repeat center;\n  width: 92px;\n  height: 24px;\n  background-color: ", ";\n"])), function (_ref) {
  var url = _ref.url;
  return url;
}, function (_ref2) {
  var url = _ref2.url;
  return url;
}, function (props) {
  return props.theme.colors.secundaryLight;
});

exports.IconImage = IconImage;

var MaxTimeBusinessInputContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > input {\n    flex: 1;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 25px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 25px;\n    "])));
});

exports.MaxTimeBusinessInputContainer = MaxTimeBusinessInputContainer;

var FieldRowContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > div:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 25px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-right: 25px;\n    "])));
});

exports.FieldRowContainer = FieldRowContainer;