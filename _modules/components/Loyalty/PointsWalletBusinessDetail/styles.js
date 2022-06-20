"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleWrapper = exports.PointsRedemptionWrapper = exports.PointsInputWrapper = exports.PointsAccumulationContainer = exports.PaymentRulesWrapper = exports.PaymentOptionListWrapper = exports.OptionInputWrapper = exports.HeaderContainer = exports.ExPirationWrapper = exports.DetailContent = exports.Container = exports.CheckBoxWrapper = exports.ButtonWrapper = exports.AccumulationInputWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: calc(var(--vh, 1vh) * 100 - 150px);\n  ", "\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n"])), function (_ref) {
  var isBusiness = _ref.isBusiness;
  return isBusiness && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 20px;\n  "])));
});

exports.Container = Container;

var HeaderContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 35px;\n  margin-bottom: 23px;\n\n  ", "\n\n  h1 {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding-left: 35px;\n    padding-right: 0px;\n  "])));
});

exports.HeaderContainer = HeaderContainer;

var DetailContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));

exports.DetailContent = DetailContent;

var PointsRedemptionWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 5px;\n    line-height: 24px;\n  }\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 10px;\n  }\n"])));

exports.PointsRedemptionWrapper = PointsRedemptionWrapper;

var PointsInputWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  input {\n    max-width: 245px;\n    width: 100%;\n    margin-right: 14px;\n    ", "\n  }\n  span {\n    margin: 0px 14px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 14px;\n    "])));
});

exports.PointsInputWrapper = PointsInputWrapper;

var PaymentRulesWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  margin-top: 35px;\n\n  h2 {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n  }\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n    margin-top: 5px;\n    margin-bottom: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.PaymentRulesWrapper = PaymentRulesWrapper;

var PaymentOptionListWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n\n"])));

exports.PaymentOptionListWrapper = PaymentOptionListWrapper;

var CheckBoxWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n  cursor: pointer;\n\n  svg {\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    font-size: 16px;\n    min-width: 16px;\n    margin-right: 12px;\n    ", "\n  }\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 13px;\n      margin-right: 0px;\n    "])));
});

exports.CheckBoxWrapper = CheckBoxWrapper;

var OptionInputWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding-left: 20px;\n  margin-bottom: 18px;\n  ", "\n\n  input {\n    width: 100%;\n    max-width: 215px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    padding-left: 0px;\n    padding-right: 20px;\n  "])));
});

exports.OptionInputWrapper = OptionInputWrapper;

var PointsAccumulationContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 5px;\n  }\n  > p {\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 20px;\n    color: ", ";\n  }\n  > span {\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.PointsAccumulationContainer = PointsAccumulationContainer;

var AccumulationInputWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n  margin-top: 14px;\n\n  input {\n    max-width: 240px;\n    width: 100%;\n  }\n\n  .price {\n    margin-right: 14px;\n    font-size: 14px;\n    line-height: 24px;\n    ", "\n  }\n\n  .equal, input {\n    margin: 0px 14px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 14px;\n    "])));
});

exports.AccumulationInputWrapper = AccumulationInputWrapper;

var ToggleWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 11px;\n\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px 15px 0px 0px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin: 0px 0px 0px 15px;\n    "])));
});

exports.ToggleWrapper = ToggleWrapper;

var ButtonWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding: 20px 0;\n\n  button {\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));

exports.ButtonWrapper = ButtonWrapper;

var ExPirationWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 23px;\n  }\n"])));

exports.ExPirationWrapper = ExPirationWrapper;