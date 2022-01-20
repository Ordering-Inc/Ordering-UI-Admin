"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.TypeSelectWrapper = exports.FieldName = exports.ErrorText = exports.BasicContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BasicContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100% - 90px);\n\n  > input {\n    color: ", ";\n  }\n\n  > button {\n    width: fit-content;\n    position: sticky;\n    top: 100%;\n    height: 42px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.BasicContainer = BasicContainer;

var FieldName = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  padding-top: 20px;\n  font-size: 14px;\n  margin-bottom: 9px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.FieldName = FieldName;

var TypeSelectWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  > div {\n    background: ", ";\n    min-width: 50%;\n    border: none;\n    div {\n      color: ", ";\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.TypeSelectWrapper = TypeSelectWrapper;

var WrapperMap = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 20px 0;\n  position: relative;\n  > div {\n    position: relative !important; \n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  > button {\n    position: absolute;\n    font-size: 14px;\n    padding: 0 5px;\n    background: #FFF;\n    top: 10px;\n    z-index: 10;\n    border: none;\n    box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;\n    color: ", ";\n    ", "\n    &:hover {\n      background: #eee;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      left: 10px;\n    "])));
});

exports.WrapperMap = WrapperMap;

var ErrorText = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  margin: 20px 0;\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.ErrorText = ErrorText;