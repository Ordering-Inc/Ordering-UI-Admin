"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOnlineDrivers = exports.WrapperMap = exports.WrapperDriverImage = exports.WrapDriverInfo = exports.OnlineDrivers = exports.DriverInfo = exports.DriverImage = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #EEE;\n  position: relative;\n"])));
var WrapperOnlineDrivers = exports.WrapperOnlineDrivers = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: ", ";\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px #00000029;\n  max-width: 60%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  overflow-y: hidden;\n  & > p {\n    font-weight: 600;\n    font-size: 14px;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.primary;
});
var OnlineDrivers = exports.OnlineDrivers = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var WrapDriverInfo = exports.WrapDriverInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n  margin: 0 10px;\n  color: ", ";\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});
var WrapperDriverImage = exports.WrapperDriverImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 6px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    border-radius: 100%;\n    padding: 3px;\n    box-sizing: border-box;\n    border: none;\n    background: none;\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return ((_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.backgroundPage) || '#FFF';
});
var DriverImgStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 5px;\n"])));
var DriverImage = exports.DriverImage = function DriverImage(props) {
  return /*#__PURE__*/_react.default.createElement(DriverImgStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var DriverInfo = exports.DriverInfo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  p {\n    margin: 0px;\n    &:first-child {\n      font-size: 14px;\n      font-weight: 600;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    &:last-child {\n      font-size: 12px;\n    }\n  }\n"])));