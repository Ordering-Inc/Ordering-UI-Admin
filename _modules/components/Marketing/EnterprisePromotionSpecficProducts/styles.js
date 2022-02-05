"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.NoSelectedBusiness = exports.Label = exports.Container = exports.BusinessSelectorContainer = exports.BusinessSelectWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 500px;\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 26px;\n  }\n\n  > button {\n    height: 44px;\n    position: sticky;\n    top: 100%;\n    margin-top: 30px;\n  }\n"])));

exports.Container = Container;

var BusinessSelectorContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-bottom: 29px;\n  \n  > div:not(:first-child) {\n    width: 100%;\n    margin-top: 5px;\n  }\n"])));

exports.BusinessSelectorContainer = BusinessSelectorContainer;

var Label = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 24px;\n  margin-bottom: 16px;\n"])));

exports.Label = Label;

var NoSelectedBusiness = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n"])));

exports.NoSelectedBusiness = NoSelectedBusiness;

var Option = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  \n  img {\n    min-height: 38px;\n    min-width: 38px;\n    height: 38px;\n    width: 38px;\n    border-radius: 8px;\n    object-fit: cover;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    border: 1px solid ", ";\n    margin-right: 8px;\n    ", "\n  }\n  span {\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    max-width: 170px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    color: ", ";\n    b {\n      font-size: 14px;\n      line-height: 20px;\n      font-weight: 400;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 8px;\n    "])));
}, function (props) {
  return props.theme.colors.textGray;
}, function (props) {
  return props.theme.colors.textBlack;
});

exports.Option = Option;

var BusinessSelectWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  .select {\n    width: 100%;\n    > div:first-child {\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  }\n"])));

exports.BusinessSelectWrapper = BusinessSelectWrapper;