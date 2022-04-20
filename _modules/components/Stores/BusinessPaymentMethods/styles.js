"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBarWrapper = exports.PaymethodOptionContainer = exports.PaymethodOption = exports.PaymethodName = exports.PaymethodListWrapper = exports.PaymentMethodsContainer = exports.MainContainer = exports.ButtonGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));

exports.MainContainer = MainContainer;

var PaymentMethodsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: hidden;\n  flex: 1;\n  ", "\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 5px;\n  }\n  > button {\n    height: 44px;\n    margin: 20px 0;\n  }\n  @media (min-width: 576px) {\n    padding: 20px;\n  }\n"])), function (_ref) {
  var isOpenWalletDetails = _ref.isOpenWalletDetails;
  return isOpenWalletDetails && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    max-width: 500px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.PaymentMethodsContainer = PaymentMethodsContainer;

var PaymethodListWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.PaymethodListWrapper = PaymethodListWrapper;

var PaymethodOptionContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  > svg {\n    font-size: 13px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: initial;\n    svg {\n      cursor: pointer;\n    }\n  "])));
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.secundaryLight;
});

exports.PaymethodOptionContainer = PaymethodOptionContainer;

var PaymethodOption = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 16px 0;\n  color: ", ";\n  \n  > svg {\n    font-size: 20px;\n    &.fill {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.PaymethodOption = PaymethodOption;

var PaymethodName = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  flex: 1;\n  margin: 0 10px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.PaymethodName = PaymethodName;

var SearchBarWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  margin-top: 27px;\n"])));

exports.SearchBarWrapper = SearchBarWrapper;

var ButtonGroup = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  button {\n    height: 32px;\n    font-size: 12px;\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
});

exports.ButtonGroup = ButtonGroup;