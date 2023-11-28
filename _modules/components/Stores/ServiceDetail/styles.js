"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.TimeContent = exports.TimeBlock = exports.SkeletonWrapper = exports.SelectWrapper = exports.PropertyOptionWrapper = exports.PropertyOption = exports.ProductImage = exports.Option = exports.InputWrapper = exports.FormInput = exports.FieldRow = exports.Container = exports.ActionsForm = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: hidden;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 0px;\n    margin-bottom: 30px;\n  }\n\n  ", "\n\n  @media (min-width: 1000px) {\n    padding: 20px;\n  }\n"])), function (_ref) {
  var maxLimit = _ref.maxLimit;
  return maxLimit && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    max-width: 500px;\n  "])));
});
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));
var ProductImage = exports.ProductImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 200px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref2) {
  var isEdit = _ref2.isEdit;
  return !isEdit && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    pointer-event: none;\n  "])));
});
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  ", "\n"])), function (_ref3) {
  var small = _ref3.small;
  return small ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n    text-align: center;\n    font-size: 14px;\n  }\n\n  svg {   \n    ", "\n  }\n"])), function (_ref4) {
  var small = _ref4.small;
  return small ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      width: 25px;\n      height: 25px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      width: 45px;\n      height: 45px;\n    "])));
});
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 24px;\n  justify-content: flex-end;\n\n  label {\n    color: ", ";\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n\n  input,\n  textarea {\n    color: ", ";\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
});
var ActionsForm = exports.ActionsForm = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  position: sticky;\n  top: 100%;\n  > button {\n    height: 42px;\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
});
var FieldRow = exports.FieldRow = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  > div {\n    width: calc(50% - 10px);\n  }\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n  span {\n    text-transform: lowercase;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n\n  label {\n    color: ", ";\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      background-color: ", ";\n      height: 43px;\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      color: ", ";\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n      \n      .search-bar-container {\n        padding: 10px;\n        input {\n          background-color: transparent;\n          height: 44px;\n        }\n      }\n\n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
}, function (_ref5) {
  var notAllow = _ref5.notAllow;
  return notAllow && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    cursor: not-allowed;\n    > div {\n      pointer-events: none;\n    }\n  "])));
});
var TimeBlock = exports.TimeBlock = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 7.6px;\n  width: fit-content;\n  align-items: center;\n  overflow: hidden;\n\n  > span {\n    color: ", ";\n  }\n  \n  > select {\n    height: 40px;\n    padding: 0px 10px;\n    border: none;\n    outline: none;\n    font-size: 14px;\n    color: ", ";\n    appearance: none;\n  }\n"])), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.secundaryLight;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.secundaryLight;
});
var TimeContent = exports.TimeContent = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([""])));
var PropertyOptionWrapper = exports.PropertyOptionWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n"])));
var PropertyOption = exports.PropertyOption = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  max-width: 250px;\n\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    margin: 0px;\n  }\n"])));