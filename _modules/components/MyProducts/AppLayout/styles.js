"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWrapper = exports.HeaderTitleContainer = exports.DownloadLink = exports.DownLoadWrapper = exports.ContentWrapper = exports.Container = exports.ButtonWRapper = exports.BoxWrapper = exports.AppInfoContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n  min-height: 100vh;\n"])));
exports.Container = Container;
var HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
exports.HeaderTitleContainer = HeaderTitleContainer;
var ContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n\n  > h1 {\n    font-size: 24px;\n    font-weight: 700;\n    margin: 0;\n  }\n  > p {\n    font-size: 14px;\n    margin: 8px 0;\n  }\n  @media (min-width: 1024px) {\n    > h1 {\n      font-size: 32px;\n      line-height: 48px;\n    }\n    > p {\n      font-size: 16px;\n      line-height: 24px;\n    }\n  }\n"])));
exports.ContentWrapper = ContentWrapper;
var BoxWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])));
exports.BoxWrapper = BoxWrapper;
var AppInfoContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 36px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 45px 25px;\n\n  h2 {\n    font-size: 24px;\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  p {\n    font-size: 14px;\n    margin-top: 16px;\n    margin-bottom: 0;\n  }\n  @media (min-width: 1024px) {\n    width: calc(50% - 23px);\n    h2 {\n      font-size: 32px;\n      line-height: 48px;\n    }\n    p {\n      font-size: 16px;\n      line-height: 24px;\n    }\n  }\n"])));
exports.AppInfoContainer = AppInfoContainer;
var ImageWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  img {\n    width: 100%;\n    max-width: 430px;\n  }\n  ", "\n"])), function (_ref) {
  var isDriver = _ref.isDriver;
  return isDriver && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    img {\n      max-width: 500px;\n    }\n  "])));
});
exports.ImageWrapper = ImageWrapper;
var DownloadLink = _styledComponents.default.a(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-decoration: underline;\n"])));
exports.DownloadLink = DownloadLink;
var ButtonWRapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  padding-top: 15px;\n  button {\n    height: 44px;\n    width: 100%;\n    margin-top: 16px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    button {\n      width: calc(50% - 10px);\n    }\n  }\n"])));
exports.ButtonWRapper = ButtonWRapper;
var DownLoadWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  img {\n    cursor: pointer;\n    &:last-child {\n      margin: 0px 15px;\n    }\n  }\n"])));
exports.DownLoadWrapper = DownLoadWrapper;