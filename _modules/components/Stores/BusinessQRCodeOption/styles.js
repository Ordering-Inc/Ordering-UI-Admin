"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableNumberHintText = exports.QRCodeLayout = exports.Header = exports.FormControl = exports.Container = exports.CloseButton = exports.ButtonGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: auto;\n  transition: 0.3s;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n\n  > button {\n    margin-top: 20px;\n    position: sticky;\n    top: 100%;\n    width: fit-content;\n    height: 42px;\n    margin-bottom: 20px;\n  }\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n  > h4 {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "])));
});
exports.Container = Container;
var ButtonGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 27px;\n\n  button {\n    height: 44px;\n    border-radius: 8px;\n    width: 100%;\n    margin-bottom: 10px;\n    @media (min-width: 576px) {\n      margin-bottom: 0;\n      width: fit-content;\n      &:first-child {\n        margin-right: 15px;\n        ", "\n      }\n    }\n  }\n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          margin-right: 0;\n          margin-left: 15px;\n        "])));
});
exports.ButtonGroup = ButtonGroup;
var Header = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  h1 {\n    font-size: 20px;\n    color: ", ";\n    font-weight: 600;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.Header = Header;
var CloseButton = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 1000px) {\n    display: flex;\n    align-items: center;\n    > svg {\n      cursor: pointer;\n      font-size: 24px;\n      color: ", ";\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});
exports.CloseButton = CloseButton;
var FormControl = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 6px;\n  }\n  input {\n    width: 100%;\n    height: 44px;\n  }\n\n  ", "\n"])), function (_ref) {
  var isMargin = _ref.isMargin;
  return isMargin && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-top: 10px;\n  "])));
});
exports.FormControl = FormControl;
var QRCodeLayout = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"])));
exports.QRCodeLayout = QRCodeLayout;
var TableNumberHintText = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  margin-bottom: 15px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.TableNumberHintText = TableNumberHintText;