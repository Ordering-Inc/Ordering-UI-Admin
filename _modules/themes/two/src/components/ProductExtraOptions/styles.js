"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownWrapper = exports.EnableWrapper = exports.ActionsContainer = exports.UploadImageIconContainer = exports.OptionImage = exports.OptionNameContainer = exports.OptionsTable = exports.Header = exports.OptionsContainer = exports.MainContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto;\n  transition: 0.3s;\n\n  > button {\n    margin: 20px 0;\n  }\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "])));
});

exports.MainContainer = MainContainer;

var OptionsContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px;\n  border-bottom: 13px solid ", ";\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.OptionsContainer = OptionsContainer;

var Header = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  h1 {\n    font-size: 24px;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  > button {\n    display: none;\n  }\n\n  @media (min-width: 1000px) {\n    > button {\n      display: block;\n      cursor: pointer;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});

exports.Header = Header;

var OptionsTable = _styledComponents.default.table(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: auto;\n  th, td {\n    font-size: 14px;\n    color: ", ";\n    padding: 12px 0;\n    &:last-child {\n      width: 160px;\n    }\n\n    > input {\n      width: 60px;\n      padding: 5px;\n      ", "\n      border: none;\n      outline: none;\n      &:focus {\n        border: 1px dashed ", ";\n      }\n    }\n  }\n\n  th {\n    font-weight: 700;\n  }\n\n  thead, tbody {\n    border-bottom: 1px solid #E9ECEF;\n  }\n  tbody.add_option {\n    border-top: 13px solid #E9ECEF;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n      "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n      "])));
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.OptionsTable = OptionsTable;

var OptionNameContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > input {\n    flex: 1;\n    padding: 5px 0;\n    margin: 0 5px;\n    border: none;\n    outline: none;\n    &:focus {\n      border: 1px dashed ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.OptionNameContainer = OptionNameContainer;

var OptionImage = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])));

exports.OptionImage = OptionImage;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  svg {\n    color: #FFF;\n    width: 25px;\n    height: 25px;\n  }\n"])), function (_ref) {
  var small = _ref.small;
  return small ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});

exports.UploadImageIconContainer = UploadImageIconContainer;

var ActionsContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  > svg {\n    color: ", ";\n    font-size: 20px;\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ActionsContainer = ActionsContainer;

var EnableWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});

exports.EnableWrapper = EnableWrapper;

var DropDownWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  ", "\n  button {\n    background: #F8F9FA !important;\n    border: none;\n    padding: 0px;\n    svg {\n      color: ", ";\n    }\n\n    &:after {\n      display: none;\n    }\n  }\n\n  > div {\n    > div {\n      border: 1px solid #E9ECEF;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n      border-radius: 8px;\n\n      a:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    margin-right: 35px;\n    "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-left: 35px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.DropDownWrapper = DropDownWrapper;