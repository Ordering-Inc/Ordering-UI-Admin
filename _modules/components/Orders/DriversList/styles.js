"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperStar = exports.WrapperImage = exports.Timestatus = exports.Image = exports.DriversListContainer = exports.DriverInfo = exports.DriverCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DriversListContainer = exports.DriversListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  @media (min-width: 992px) {\n    ", "\n  }\n"])), function (_ref) {
  var showCompressedInfo = _ref.showCompressedInfo;
  return showCompressedInfo && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding: 0px 0px;\n    "])));
});
var DriverCard = exports.DriverCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-height: 66px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  padding: 10px 15px;\n\n  &:hover {\n    background-color: ", ";\n  }\n  \n  ", "\n\n  @media (min-width: 992px) {\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref3) {
  var showCompressedInfo = _ref3.showCompressedInfo;
  return showCompressedInfo && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-bottom: 5px;\n    "])));
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  border: 1px solid ", ";\n  border-radius: 8px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var ImageStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var WrapperStar = exports.WrapperStar = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  unicode-bidi: bidi-override;\n  color: #c5c5c5;\n  font-size: 17px;\n  position: relative;\n  width: fit-content;\n\n  &::before {\n    content: '\u2605\u2605\u2605\u2605\u2605';\n    opacity: .3;\n  }\n\n  &::after {\n    color: #F9D853;\n    content: '\u2605\u2605\u2605\u2605';\n    position: absolute;\n    z-index: 1;\n    display: block;\n    left: 0;\n    top:0;\n    width: ", ";\n    overflow: hidden;\n  }\n"])), function (_ref4) {
  var width = _ref4.width;
  return width;
});
var DriverInfo = exports.DriverInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  flex: 1;\n  ", "\n  > div:first-child {\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin: 0 5px;\n    }\n\n    p.name {\n      font-size: 14px;\n      color: ", ";\n      font-weight: 600;\n      margin: 0px;\n      flex: 1;\n    }\n    .text-red {\n      font-size: 14px;\n      color: red;\n      ", "\n    }\n    @media (min-width: 992px) {\n      ", "\n    }\n  }\n"])), function (_ref5) {
  var hidePhoto = _ref5.hidePhoto;
  return !hidePhoto && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
  });
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-right: 2px;\n      "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-left: 2px;\n      "])));
}, function (_ref6) {
  var showCompressedInfo = _ref6.showCompressedInfo;
  return showCompressedInfo && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        p.name {\n          font-size: 12px;\n        }\n        .text-red {\n          font-size: 11px;\n        }\n        .driver-orders {\n          font-size: 11px;\n        }\n      "])));
});
var Timestatus = exports.Timestatus = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 4px;\n  height: 42px;\n  border-radius: 20px;\n  margin-right: 10px;\n  ", "\n ", "\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 10px;\n "])));
}, function (_ref7) {
  var timeState = _ref7.timeState;
  return timeState === 'in_time' && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background-color: #00D27A;\n  "])));
}, function (_ref8) {
  var timeState = _ref8.timeState;
  return timeState === 'at_risk' && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    background-color: #FFC700;\n  "])));
}, function (_ref9) {
  var timeState = _ref9.timeState;
  return timeState === 'delayed' && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    background-color: #E63757;\n  "])));
});