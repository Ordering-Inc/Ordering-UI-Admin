"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.SelectWrapper = exports.Option = exports.InfoWrapper = exports.InfoContent = exports.FieldContainer = exports.CheckoutFieldsDetailsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CheckoutFieldsDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 26px 15px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n\n  @media (min-width: 768px) {\n    padding: 26px 40px;\n  }\n"])));
exports.CheckoutFieldsDetailsContainer = CheckoutFieldsDetailsContainer;
var SelectWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  margin-bottom: 20px;\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      background-color: ", ";\n      height: 43px;\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      color: ", ";\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n\n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
});
exports.SelectWrapper = SelectWrapper;
var Option = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n  text-transform: lowercase;\n  &::first-letter {\n    text-transform: uppercase;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Option = Option;
var FieldContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  ", "\n\n  .name {\n    flex: 1;\n    font-size: 14px;\n  }\n\n  .required {\n    width: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .status {\n    width: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])), function (_ref) {
  var isHeader = _ref.isHeader;
  return isHeader && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n    margin-bottom: 15px;\n    > div {\n      font-weight: 700;\n      font-size: 14px;\n    }\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
exports.FieldContainer = FieldContainer;
var TitleWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  ", "\n\n  h1 {\n    font-weight: 700;\n    font-size: 20px;\n    margin-bottom: 0;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "])));
});
exports.TitleWrapper = TitleWrapper;
var InfoWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n\n  > button {\n    height: 25px;\n    svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n  &:hover > div {\n    /* display: block; */\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: -8px;\n    margin-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: -8px;\n    margin-left: 8px;\n  "])));
});
exports.InfoWrapper = InfoWrapper;
var InfoContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  min-width: 150px;\n  transition: all 0.3s linear;\n  visibility: hidden;\n  opacity: 0;\n  right: 0px;\n  ", "\n\n  @media (min-width: 576px) {\n    min-width: 330px;\n    padding: 12px 15px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
});
exports.InfoContent = InfoContent;