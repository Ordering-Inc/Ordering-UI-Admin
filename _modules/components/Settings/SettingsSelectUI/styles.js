"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsSelectContainer = exports.SelectHeader = exports.SelectContent = exports.OptionsError = exports.Option = exports.InputWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SettingsSelectContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n"])));
exports.SettingsSelectContainer = SettingsSelectContainer;
var SelectHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 5px;\n\n  label {\n    font-size: 14px;\n    font-weight: 600;\n    color: ", ";\n    margin: 0;\n  }\n  p {\n    margin-top: 10px;\n    margin-bottom: 0px;\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.SelectHeader = SelectHeader;
var SelectContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  p {\n    font-size: 14px;\n    color: #748194;\n  }\n\n  .select {\n    border: none;\n    width: 100%;\n    line-height: 26px;\n    padding: 0;\n\n    > div:first-child {\n      padding: 8px 15px;\n      border-radius: 7.6px;\n      border: 1px solid ", ";\n      font-size: 14px;\n    }\n\n    .list {\n      max-height: 300px;\n      overflow: auto;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.SelectContent = SelectContent;
var Option = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  font-size: 13px;\n  line-height: 2;\n  font-weight: 500;\n"])));
exports.Option = Option;
var OptionsError = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #d83520;\n"])));
exports.OptionsError = OptionsError;
var InputWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 26px;\n\n  > input {\n    position: absolute;\n    top: 0;\n    height: 42px;\n    width: calc(100% - 40px);\n    border: none;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      right: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      left: 0px;\n    "])));
});
exports.InputWrapper = InputWrapper;