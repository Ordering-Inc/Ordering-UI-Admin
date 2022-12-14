"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.TypeSelectWrapper = exports.Row = exports.KmlButtonWrapper = exports.FormControl = exports.ErrorText = exports.DeliveryZoneContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DeliveryZoneContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100% - 130px);\n\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-bottom: 23px;\n  }\n"])));
exports.DeliveryZoneContainer = DeliveryZoneContainer;
var TypeSelectWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .select {\n    background: ", ";\n    width: 100%;\n    border: none;\n    font-size: 14px;\n    color: ", ";\n    > div:first-child {\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.TypeSelectWrapper = TypeSelectWrapper;
var WrapperMap = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 29px 0 20px 0;\n  position: relative;\n  > div {\n    position: relative !important; \n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  > button {\n    position: absolute;\n    font-size: 14px;\n    padding: 0 5px;\n    background: ", ";\n    top: 10px;\n    z-index: 10;\n    border: none;\n    box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;\n    color: ", ";\n    ", "\n    &:hover {\n      background: #eee;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      left: 10px;\n    "])));
});
exports.WrapperMap = WrapperMap;
var ErrorText = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  margin: 20px 0;\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.ErrorText = ErrorText;
var FormControl = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  label {\n    font-size: 14px;\n    margin-bottom: 9px;\n  }\n  input {\n    width: 100%;\n  }\n"])));
exports.FormControl = FormControl;
var Row = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 29px;\n\n  > div {\n    width: 45%;\n  }\n"])));
exports.Row = Row;
var KmlButtonWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 20px 0px;\n"])));
exports.KmlButtonWrapper = KmlButtonWrapper;