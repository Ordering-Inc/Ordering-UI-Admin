"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapWrapper = exports.HeaderTitleContainer = exports.ButtonWrapper = exports.BoxLayout = exports.AddNewBusinessContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddNewBusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media print {\n    display: none;\n  }\n"])));
exports.AddNewBusinessContainer = AddNewBusinessContainer;
var HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  margin-bottom: 25px;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
exports.HeaderTitleContainer = HeaderTitleContainer;
var BoxLayout = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 7.6px;\n  padding: 25px 0px;\n  margin-bottom: 35px;\n  > div {\n    width: 100%;\n    max-width: 558px;\n  }\n\n  @media (min-width: 450px) {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    padding: 25px 35px;\n  }\n"])), function (props) {
  return props.theme.colors.white;
});
exports.BoxLayout = BoxLayout;
var ButtonWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  padding-bottom: 30px;\n  button {\n    height: 44px;\n    border-radius: 8px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 30px;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    button {\n      width: 200px;\n      &:first-child {\n        margin-right: 30px;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          margin-right: 0;\n          margin-left: 30px;\n        "])));
});
exports.ButtonWrapper = ButtonWrapper;
var MapWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-height: 0px;\n  overflow: hidden;\n  display: none;\n"])));
exports.MapWrapper = MapWrapper;