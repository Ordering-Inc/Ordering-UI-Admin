"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductComment = exports.ProductOptionsList = exports.AccordionContent = exports.AccordionImage = exports.WrapperProductImage = exports.ProductImageContainer = exports.ProductTable = exports.OrderProductsInner = exports.OrderProductsQuickDetailContainer = exports.WrapSkelton = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapSkelton = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  width: 100%;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 3px #00000029;\n  border-radius: 10px;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n"])));

exports.WrapSkelton = WrapSkelton;

var OrderProductsQuickDetailContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 3px #00000029;\n  border-radius: 10px;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n  cursor: default;\n"])));

exports.OrderProductsQuickDetailContainer = OrderProductsQuickDetailContainer;

var OrderProductsInner = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px 40px;\n"])));

exports.OrderProductsInner = OrderProductsInner;

var ProductTable = _styledComponents.default.table(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  thead {\n    th {\n      padding: 5px 0;\n      color: #707070;\n      font-size: 13px;\n      text-align: left;\n      \n      &:first-child {\n        padding-left: 60px;\n      }\n      \n      &:nth-child(2),\n      &:nth-child(3),\n      &:nth-child(4) {\n        width: 20%;\n      }\n      \n      &:last-child {\n        width: 60px;\n      }\n    }\n  }\n\n  tbody {\n    tr {\n      td {\n        color: #263238;\n        font-weight: 500;\n        font-size: 13px;\n        padding-top: 25px;\n        border-bottom: 1px solid #F2F2F2;\n        vertical-align: top;\n        \n        &:first-child {\n          padding: 10px 0;\n          ", "\n        }\n\n      }\n    }\n    \n    .subFee {\n      td {\n        border-bottom: none;\n        color: #263238;\n        font-weight: normal;\n        padding: 6px 0;\n      }\n    }\n    \n    .totalFee {\n      td {\n        color: #263238;\n        font-weight: 500;\n        padding: 10px 0;\n        border-bottom: none;\n        \n        &:nth-child(4),\n        &:nth-child(5) {\n          border-top: 1px solid #F2F2F2;         \n        }\n      }\n    }\n  }\n"])), function (_ref) {
  var skeleton = _ref.skeleton;
  return skeleton && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            padding-left: 60px;\n            & > span {\n              margin-right: 10px;\n            }\n          "])));
});

exports.ProductTable = ProductTable;

var ProductImageContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n"])));

exports.ProductImageContainer = ProductImageContainer;

var WrapperProductImage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 65px;\n  max-height: 50px;\n  height: 50px;\n  width: 65px;\n"])));

exports.WrapperProductImage = WrapperProductImage;

var AccordionImageStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));

var AccordionImage = function AccordionImage(props) {
  return /*#__PURE__*/_react.default.createElement(AccordionImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.AccordionImage = AccordionImage;

var AccordionContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n  margin: auto;\n\n  @media (min-width: 481px) {\n    width: 80%;\n  }\n"])));

exports.AccordionContent = AccordionContent;

var ProductOptionsList = _styledComponents.default.ul(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  list-style-type: none;\n\n  .suboption {\n    margin-left: -25px;\n    ", "\n  }\n\n  p:nth-child(1) {\n    margin-bottom: 0;\n    font-weight: 500;\n  }\n\n  p {\n    font-weight: 400;\n    margin: 0px;\n  }\n\n  li span {\n    font-weight: 300;\n  }\n\n  li.ingredient {\n    padding-left: 15px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: -25px;\n      margin-left: 0px;\n  "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      padding-left: 0px;\n    "])));
});

exports.ProductOptionsList = ProductOptionsList;

var ProductComment = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding-left: 40px;\n  ", "\n  p {\n    font-weight: bold;\n    margin: 0px;\n  }\n\n  h3 {\n    font-weight: normal;\n    text-transform: capitalize;\n    margin: 0px 20px 0px 40px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    padding-right: 40px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin: 0px 40px 0px 20px\n    "])));
});

exports.ProductComment = ProductComment;