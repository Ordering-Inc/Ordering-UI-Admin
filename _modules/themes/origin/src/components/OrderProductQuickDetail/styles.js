"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperProductImage = exports.WrapSkelton = exports.ProductTable = exports.ProductOptionsList = exports.ProductImageContainer = exports.ProductComment = exports.OrderProductsQuickDetailContainer = exports.OrderProductsInner = exports.AccordionImage = exports.AccordionContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WrapSkelton = exports.WrapSkelton = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  width: 100%;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 3px #00000029;\n  border-radius: 10px;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n"])));
var OrderProductsQuickDetailContainer = exports.OrderProductsQuickDetailContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 3px #00000029;\n  border-radius: 10px;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n  cursor: default;\n"])));
var OrderProductsInner = exports.OrderProductsInner = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px 40px;\n"])));
var ProductTable = exports.ProductTable = _styledComponents.default.table(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  thead {\n    th {\n      padding: 5px 0;\n      color: #707070;\n      font-size: 13px;\n      text-align: left;\n      \n      &:first-child {\n        padding-left: 60px;\n      }\n      \n      &:nth-child(2),\n      &:nth-child(3),\n      &:nth-child(4) {\n        width: 20%;\n      }\n      \n      &:last-child {\n        width: 60px;\n      }\n    }\n  }\n\n  tbody {\n    tr {\n      td {\n        color: #263238;\n        font-weight: 500;\n        font-size: 13px;\n        padding-top: 25px;\n        border-bottom: 1px solid #F2F2F2;\n        vertical-align: top;\n        \n        &:first-child {\n          padding: 10px 0;\n          ", "\n        }\n\n      }\n    }\n    \n    .subFee {\n      td {\n        border-bottom: none;\n        color: #263238;\n        font-weight: normal;\n        padding: 6px 0;\n      }\n    }\n    \n    .totalFee {\n      td {\n        color: #263238;\n        font-weight: 500;\n        padding: 10px 0;\n        border-bottom: none;\n        \n        &:nth-child(4),\n        &:nth-child(5) {\n          border-top: 1px solid #F2F2F2;         \n        }\n      }\n    }\n  }\n"])), function (_ref) {
  var skeleton = _ref.skeleton;
  return skeleton && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            padding-left: 60px;\n            & > span {\n              margin-right: 10px;\n            }\n          "])));
});
var ProductImageContainer = exports.ProductImageContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n"])));
var WrapperProductImage = exports.WrapperProductImage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 65px;\n  max-height: 50px;\n  height: 50px;\n  width: 65px;\n"])));
var AccordionImageStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var AccordionImage = exports.AccordionImage = function AccordionImage(props) {
  return /*#__PURE__*/_react.default.createElement(AccordionImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var AccordionContent = exports.AccordionContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n  margin: auto;\n\n  @media (min-width: 481px) {\n    width: 80%;\n  }\n"])));
var ProductOptionsList = exports.ProductOptionsList = _styledComponents.default.ul(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  list-style-type: none;\n\n  .suboption {\n    margin-left: -25px;\n    ", "\n  }\n\n  p:nth-child(1) {\n    margin-bottom: 0;\n    font-weight: 500;\n  }\n\n  p {\n    font-weight: 400;\n    margin: 0px;\n  }\n\n  li span {\n    font-weight: 300;\n  }\n\n  li.ingredient {\n    padding-left: 15px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: -25px;\n      margin-left: 0px;\n  "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      padding-left: 0px;\n    "])));
});
var ProductComment = exports.ProductComment = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding-left: 40px;\n  ", "\n  p {\n    font-weight: bold;\n    margin: 0px;\n  }\n\n  h3 {\n    font-weight: normal;\n    text-transform: capitalize;\n    margin: 0px 20px 0px 40px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    padding-right: 40px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin: 0px 40px 0px 20px\n    "])));
});