"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOrderListing = exports.WrapperDriverOrders = exports.WrapperDriverImage = exports.Header = exports.DriverInfo = exports.DriverImage = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WrapperDriverOrders = exports.WrapperDriverOrders = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    column-gap: 20px;\n    align-items: center;\n"])));
var DriverInfo = exports.DriverInfo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    h2 {\n        font-size: 24px;\n        color: #151824;\n        margin: 0px;\n    }\n\n    p {\n        margin: 0px;\n        color: #072DB2;\n    }\n"])));
var WrapperDriverImage = exports.WrapperDriverImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  border: 1px solid #E3E3E3;\n  border-radius: 10px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 5px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])));
var DriverImageStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var DriverImage = exports.DriverImage = function DriverImage(props) {
  return /*#__PURE__*/_react.default.createElement(DriverImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var WrapperOrderListing = exports.WrapperOrderListing = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding-top: 40px;\n"])));