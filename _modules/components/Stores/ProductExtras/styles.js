"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtrasContainer = exports.OptionNameWrapper = exports.MoreContainer = exports.MainContainer = exports.Header = exports.FormControl = exports.ExtraOptionEditContainer = exports.ExtraOption = exports.ExtraAddForm = exports.DragImageWrapper = exports.Details = exports.CheckboxContainer = exports.AddButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));
exports.MainContainer = MainContainer;
var ProductExtrasContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: hidden;\n  flex: 1;\n\n  @media (min-width: 1000px) {\n    padding: 20px;\n  }\n"])));
exports.ProductExtrasContainer = ProductExtrasContainer;
var Header = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  padding-bottom: 20px;\n  width: 100%;\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0px;\n  }\n\n  button {\n    height: 42px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 40px;\n    "])));
});
exports.Header = Header;
var ExtraOption = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  padding: 12px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover {\n    background: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.lightPrimary;
  });
}, function (_ref2) {
  var isDragOver = _ref2.isDragOver;
  return isDragOver && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref3) {
  var isBorderBottom = _ref3.isBorderBottom;
  return isBorderBottom && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.lightPrimary;
});
exports.ExtraOption = ExtraOption;
var CheckboxContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
exports.CheckboxContainer = CheckboxContainer;
var MoreContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  svg {\n    cursor: pointer;\n    font-size: 20px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.MoreContainer = MoreContainer;
var OptionNameWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > span.name {\n    font-size: 14px;\n    padding: 0 10px;\n  }\n  button {\n    width: 24px;\n    min-width: 24px;\n    height: 24px;\n    svg {\n      font-size: 14px;\n    }\n  }\n"])));
exports.OptionNameWrapper = OptionNameWrapper;
var ExtraOptionEditContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: 20px;\n\n  > h2 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 30px;\n  }\n  button {\n    display: block;\n    margin-top: 30px;\n    height: 44px;\n    border-radius: 8px;\n    margin-left: auto;\n  }\n"])));
exports.ExtraOptionEditContainer = ExtraOptionEditContainer;
var FormControl = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  label {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  input {\n    width: 100%;\n    height: 44px;\n  }\n"])));
exports.FormControl = FormControl;
var Details = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n\n  svg {\n    margin: 0 5px;\n    font-size: 13px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.secundaryLight;
});
exports.Details = Details;
var AddButtonWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  padding: 12px 0;\n"])));
exports.AddButtonWrapper = AddButtonWrapper;
var ExtraAddForm = _styledComponents.default.form(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  input {\n    width: 100%;\n    border: none;\n    outline: none;\n    border-bottom: 1px solid ", ";\n    background: ", ";\n    padding: 12px 0;\n\n    &::placeholder,\n    &::-webkit-input-placeholder {\n      color: #B1BCCC;\n    }\n    &:-ms-input-placeholder {\n      color: #B1BCCC;\n    }\n    &:read-only {\n      background-color: #F8F9FA;\n      cursor: not-allowed;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.ExtraAddForm = ExtraAddForm;
var DragImageWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  img {\n    ", "\n    &:hover {\n      cursor: grab;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
});
exports.DragImageWrapper = DragImageWrapper;