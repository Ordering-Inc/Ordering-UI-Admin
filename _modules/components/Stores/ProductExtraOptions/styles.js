"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsList = exports.OptionsContainer = exports.OptionNameContainer = exports.OptionItem = exports.OptionImage = exports.MinimumPurchase = exports.MaxPurchase = exports.MainContainer = exports.Header = exports.ArrowWrpper = exports.AddOptionForm = exports.ActionSelectorWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto;\n  transition: 0.3s;\n\n  > button {\n    margin: 20px 0;\n  }\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "])));
});

exports.MainContainer = MainContainer;

var OptionsContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px;\n"])));

exports.OptionsContainer = OptionsContainer;

var Header = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    color: ", ";\n    margin: 5px 0;\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n    > button {\n      display: none;\n    }\n  }\n\n  @media (min-width: 1000px) {\n    > div {\n      > button {\n        display: block;\n        cursor: pointer;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          margin-right: 10px;\n        "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          margin-left: 10px;\n        "])));
});

exports.Header = Header;

var OptionNameContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  width: 70%;\n  margin: 12px 0;\n  font-size: 14px;\n  > input {\n    flex: 1;\n    height: 32px;\n    padding: 5px;\n    border: none;\n    outline: none;\n    &:focus {\n      border: 1px dashed ", ";\n    }\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "])));
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    border-left: 1px solid ", ";\n    margin-left: 20px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    border-right: 1px solid ", ";\n    margin-right: 20px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (_ref) {
  var isHeader = _ref.isHeader;
  return isHeader && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    font-size: 12px;\n    font-weight: 700;\n    border-right: none;\n    border-left: none;\n  "])));
});

exports.OptionNameContainer = OptionNameContainer;

var OptionImage = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n\n  img {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    object-fit: cover;\n    overflow: hidden;\n  }\n\n  svg {\n    font-size: 20px;\n    color: #ADB5BD;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "])));
});

exports.OptionImage = OptionImage;

var ActionSelectorWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  button {\n    display: flex;\n    background: transparent !important;\n    border: none;\n    padding: 5px;\n    border-radius: 8px;\n\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:hover {\n      background: ", " !important;\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n        padding: 7px 20px;\n        &:active {\n          background: ", " !important;\n        }\n      }\n      .dropdown-item:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryDarkContrast;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
}, function (props) {
  return props.theme.colors.danger;
});

exports.ActionSelectorWrapper = ActionSelectorWrapper;

var AddOptionForm = _styledComponents.default.form(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-top: 13px solid ", ";\n  border-bottom: 1px solid ", ";\n\n  > input {\n    width: 80px;\n    height: 32px;\n    padding: 5px;\n    border: none;\n    outline: none;\n    font-size: 14px;\n\n    &:focus {\n      border: 1px dashed ", ";\n    }\n  }\n  > button {\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});

exports.AddOptionForm = AddOptionForm;

var OptionsList = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n"])));

exports.OptionsList = OptionsList;

var OptionItem = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var isHeader = _ref2.isHeader;
  return !isHeader && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    &:hover {\n      background-color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  });
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});

exports.OptionItem = OptionItem;

var MinimumPurchase = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  min-width: 80px;\n  ", "\n"])), function (_ref4) {
  var isHeader = _ref4.isHeader;
  return isHeader ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    font-size: 12px;\n    font-weight: 700;\n  "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    font-size: 14px;\n  "])));
});

exports.MinimumPurchase = MinimumPurchase;

var MaxPurchase = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  min-width: 80px;\n  ", "\n"])), function (_ref5) {
  var isHeader = _ref5.isHeader;
  return isHeader ? (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    font-size: 12px;\n    font-weight: 700;\n  "]))) : (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    font-size: 14px;\n  "])));
});

exports.MaxPurchase = MaxPurchase;

var ArrowWrpper = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  svg {\n    font-size: 13px;\n    color: ", ";\n    margin: 0 5px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});

exports.ArrowWrpper = ArrowWrpper;