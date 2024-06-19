"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.ToggleItemWrapper = exports.ReviewWrapper = exports.ReviewButton = exports.PhotoWrapper = exports.Photo = exports.InfoContent = exports.DriverSelectorContainer = exports.DriverInfoContainer = exports.DriverInfo = exports.CutsomerDetail = exports.CustomerInfoTable = exports.CustomerInfo = exports.CustomerEditWrapper = exports.CompanySelectorContainer = exports.BusinessInfo = exports.ActionIconWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  position: relative;\n\n  > svg {\n    position: absolute;\n    top: 32px;\n    right: 10px;\n    transition: all 0.3s;\n  }\n"])));
var PhotoWrapper = exports.PhotoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 48px;\n  max-height: 48px;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n  }\n"])));
var PhotoStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var Photo = exports.Photo = function Photo(props) {
  return /*#__PURE__*/_react.default.createElement(PhotoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  > div {\n    display: flex;\n    align-items: center;\n\n    > p {\n      display: flex;\n      margin: 0px;\n      font-weight: 400;\n      color: ", ";\n    }\n\n    > button {\n      ", "\n    }\n  }\n\n  > p {\n    color: ", ";\n    font-size: 12px;\n    margin: 0px;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 8px;\n      "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 8px;\n      "])));
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "])));
});
var CustomerInfo = exports.CustomerInfo = (0, _styledComponents.default)(BusinessInfo)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
var ActionIconWrapper = exports.ActionIconWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  right: 0;\n  top: 0;\n  > .down-arrow {\n    transition: all 0.3s;\n    margin: 0 10px;\n  }\n  .edit-icon {\n    color: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});
var ReviewWrapper = exports.ReviewWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-top: 23px;\n  label {\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 12px;\n  }\n  textarea {\n    width: 100%;\n  }\n"])));
var DriverInfoContainer = exports.DriverInfoContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var DriverInfo = exports.DriverInfo = (0, _styledComponents.default)(BusinessInfo)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])));
var CompanySelectorContainer = exports.CompanySelectorContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 23px;\n  margin-bottom: 13px;\n  > p {\n    font-size: 14px;\n    margin-top: 0;\n    margin-bottom: 15px;\n  }\n  > div {\n    width: 100%;\n    border-radius: 8px;\n    background-color: ", ";\n\n    > div {\n      &:first-child {\n        border: none;\n        height: 50px;\n      }\n      > div:first-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.secundary;
}, function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.headingColor;
});
var DriverSelectorContainer = exports.DriverSelectorContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 23px;\n  margin-bottom: 13px;\n  > p {\n    font-size: 14px;\n    margin-top: 0;\n    margin-bottom: 15px;\n  }\n  > div {\n    width: 100%;\n    border-radius: 8px;\n    background-color: ", ";\n\n    > div {\n      > div {\n        &:first-child {\n          border: none;\n          height: 50px;\n        }\n        > div:first-child {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors5;
  return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.secundary;
}, function (props) {
  var _props$theme$colors6;
  return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.headingColor;
});
var CutsomerDetail = exports.CutsomerDetail = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  width: 100%;\n"])), function (props) {
  var _props$theme$colors7;
  return (_props$theme$colors7 = props.theme.colors) === null || _props$theme$colors7 === void 0 ? void 0 : _props$theme$colors7.secundary;
});
var CustomerInfoTable = exports.CustomerInfoTable = _styledComponents.default.table(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  tr {\n    td {\n      color: ", ";\n      font-size: 12px;\n      margin: 0px;\n\n      &:first-child {\n        color: ", ";\n      }\n\n      > a {\n        color: ", ";\n        transition: all 0.3s linear;\n        &:hover {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors8;
  return (_props$theme$colors8 = props.theme.colors) === null || _props$theme$colors8 === void 0 ? void 0 : _props$theme$colors8.lightGray;
}, function (props) {
  var _props$theme$colors9;
  return (_props$theme$colors9 = props.theme.colors) === null || _props$theme$colors9 === void 0 ? void 0 : _props$theme$colors9.headingColor;
}, function (props) {
  var _props$theme$colors10;
  return (_props$theme$colors10 = props.theme.colors) === null || _props$theme$colors10 === void 0 ? void 0 : _props$theme$colors10.primary;
}, function (props) {
  var _props$theme$colors11;
  return (_props$theme$colors11 = props.theme.colors) === null || _props$theme$colors11 === void 0 ? void 0 : _props$theme$colors11.headingColor;
});
var ToggleItemWrapper = exports.ToggleItemWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n\n  ", "\n"])), function (props) {
  var _props$theme$colors12;
  return (_props$theme$colors12 = props.theme.colors) === null || _props$theme$colors12 === void 0 ? void 0 : _props$theme$colors12.secundary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    border-bottom: none;\n    .down-arrow {\n      transform: rotateZ(180deg);\n    }\n  "])));
});
var ReviewButton = exports.ReviewButton = _styledComponents.default.span(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  text-decoration: underline;\n"])), function (props) {
  return props.theme.colors.primary;
});
var CustomerEditWrapper = exports.CustomerEditWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  input {\n    width: 100%;\n    margin-bottom: 12px;\n  }\n  .input-autocomplete {\n    width: 100%;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n    font-size: 14px;\n    padding: 10px 15px;\n    outline: none;\n    ::placeholder {\n      color: ", ";\n    }\n\n    &:-ms-input-placeholder {\n      color: ", ";\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n  button {\n    margin-top: 10px;\n    display: block;\n    height: 44px;\n    border-radius: 8px;\n    margin-left: auto;\n  }\n"])), function (props) {
  var _props$theme$colors13;
  return ((_props$theme$colors13 = props.theme.colors) === null || _props$theme$colors13 === void 0 ? void 0 : _props$theme$colors13.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  margin-bottom: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  @media (min-width: 768px) {\n    height: 200px;\n  }\n"])));