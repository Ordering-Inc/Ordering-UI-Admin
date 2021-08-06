"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchAndFilter = exports.TopRightSection = exports.HeaderTitle = exports.HeaderSection = exports.OrderContentHeaderContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderContentHeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 300px;\n  width: 100%;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n\n  @media (max-width: 1200px) {\n    ", "\n  }\n"])), function (_ref) {
  var isDisableControl = _ref.isDisableControl;
  return !isDisableControl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      flex-direction: column;\n    "])));
});

exports.OrderContentHeaderContainer = OrderContentHeaderContainer;

var HeaderSection = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 560px) {\n    flex-direction: column;\n  }\n"])));

exports.HeaderSection = HeaderSection;

var HeaderTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0px;\n  text-transform: capitalize;\n  white-space: nowrap;\n\n  @media (max-width: 560px) {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.HeaderTitle = HeaderTitle;

var TopRightSection = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  \n  @media (min-width: 992px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"])));

exports.TopRightSection = TopRightSection;

var WrapperSearchAndFilter = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n\n  ", "\n\n  input {\n    background: ", ";\n    border: none;\n  }\n\n  > button {\n    ", "\n  }\n\n  @media (min-width: 760px) {\n    margin: 20px 0 10px 0;\n  }\n\n  @media (min-width: 992px) {\n    margin: 0px;\n  }\n"])), function (_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 100%;\n    > div {\n      width: 100%;\n\n      input {\n        width: 100%;\n      }\n    }\n  "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "])));
});

exports.WrapperSearchAndFilter = WrapperSearchAndFilter;