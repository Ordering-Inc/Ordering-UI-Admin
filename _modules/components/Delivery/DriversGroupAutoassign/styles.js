"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallArea = exports.RowGroupContainer = exports.MediumArea = exports.MaxDistanceCustomerContainer = exports.LargeArea = exports.InputsGroup = exports.IconImage = exports.ForcedAssignSettingWrapper = exports.FieldContainer = exports.CustomItem = exports.CheckboxWrapper = exports.AutoassignItem = exports.AutoassignContainer = exports.AreaWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AutoassignContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 30px;\n  }\n"])));

exports.AutoassignContainer = AutoassignContainer;

var AutoassignItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  p {\n    white-space: nowrap;\n    font-size: 12px;\n    margin-top: 10px;\n    color: ", ";\n  }\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    p {\n      color: ", ";\n    }\n    > div {\n      background-color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});

exports.AutoassignItem = AutoassignItem;

var IconImage = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  -webkit-mask: url(", ") no-repeat center;\n  mask: url(", ") no-repeat center;\n  width: 95px;\n  height: 95px;\n  background-color: ", ";\n"])), function (_ref2) {
  var url = _ref2.url;
  return url;
}, function (_ref3) {
  var url = _ref3.url;
  return url;
}, function (props) {
  return props.theme.colors.borderColor;
});

exports.IconImage = IconImage;

var CustomItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 10px;\n\n  ", "\n"])), function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n\n    p {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});

exports.CustomItem = CustomItem;

var ForcedAssignSettingWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n\n  p {\n    margin-bottom: 0px;\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
});

exports.ForcedAssignSettingWrapper = ForcedAssignSettingWrapper;

var MaxDistanceCustomerContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n\n  > div:first-child {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-bottom: 12px;\n\n    p {\n      margin-bottom: 0px;\n      &:first-child {\n        font-size: 14px;\n      }\n      &:not(:first-child) {\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.MaxDistanceCustomerContainer = MaxDistanceCustomerContainer;

var RowGroupContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  > div {\n    width: calc(50% - 10px);\n  }\n"])));

exports.RowGroupContainer = RowGroupContainer;

var CheckboxWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
});

exports.CheckboxWrapper = CheckboxWrapper;

var FieldContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_ref5) {
  var isPink = _ref5.isPink;
  return isPink && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    input {\n      &:focus {\n        border-color: #ff0095;\n      }\n    }\n  "])));
}, function (_ref6) {
  var isGreen = _ref6.isGreen;
  return isGreen && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    input {\n      &:focus {\n        border-color: #0b720b;\n      }\n    }\n  "])));
}, function (_ref7) {
  var isBlue = _ref7.isBlue;
  return isBlue && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    input {\n      &:focus {\n        border-color: ", ";\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.FieldContainer = FieldContainer;

var InputsGroup = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  input {\n    width: 75px;\n  }\n\n  strong {\n    margin: 0 20px;\n  }\n"])));

exports.InputsGroup = InputsGroup;

var AreaWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 70%;\n  margin: auto 0;\n"])));

exports.AreaWrapper = AreaWrapper;

var LargeArea = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid ", ";\n  border-radius: 50%;\n  position: absolute;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref8) {
  var active = _ref8.active;
  return active && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    border-color: #ff0095;\n  "])));
});

exports.LargeArea = LargeArea;

var MediumArea = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  width: 70%;\n  height: 70%;\n  border: 1px solid ", ";\n  border-radius: 50%;\n  position: absolute;\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref9) {
  var active = _ref9.active;
  return active && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    border-color: #0b720b;\n  "])));
});

exports.MediumArea = MediumArea;

var SmallArea = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 40%;\n  height: 40%;\n  border: 1px solid ", ";\n  border-radius: 50%;\n  position: absolute;\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref10) {
  var active = _ref10.active;
  return active && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    border-color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.SmallArea = SmallArea;