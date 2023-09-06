"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastWrapper = exports.ModalContainer = exports.CheckBoxWrapper = exports.AlarmContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ModalContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 10px;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: fadeIn 200ms;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0px;\n  }\n\n  p {\n    text-align: center;\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 22px;\n\n    span {\n      color: ", ";\n      font-weight: 600;\n    }\n  }\n  img {\n    width: 250px;\n    height: 250px;\n    object-fit: contain;\n    margin: 40px 0;\n  }\n\n  @keyframes fadeIn {\n    from {\n      transform: scale(2);\n    }\n  \n    to {\n      transform: scale(1);\n    }\n  }\n\n  @media (min-width: 768px) {\n    img {\n      width: 290px;\n      height: 290px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.primary;
});
exports.ModalContainer = ModalContainer;
var ToastWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  img {\n    height: 39px;\n  }\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    color: #344050;\n    ", "\n    span {\n      &:first-child {\n        font-size: 14px;\n        line-height: 21px;\n        font-weight: 500;\n        margin-bottom: 2px;\n      }\n      &:last-child {\n        font-size: 12px;\n        line-height: 18px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
});
exports.ToastWrapper = ToastWrapper;
var AlarmContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  button {\n    height: 44px;\n    width: 100%;\n    border-radius: 8px;\n    margin-top: 20px;\n  }\n  > span {\n    font-weight: 500;\n  }\n"])));
exports.AlarmContent = AlarmContent;
var CheckBoxWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-top: 10px;\n  span {\n    font-size: 14px;\n  }\n  svg {\n    ", "\n    font-size: 16px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref) {
  var isChecked = _ref.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors2;
    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.primary;
  });
});
exports.CheckBoxWrapper = CheckBoxWrapper;