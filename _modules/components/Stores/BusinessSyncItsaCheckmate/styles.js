"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeVideoWrapper = exports.YoutubeVideoInner = exports.LogoWrapper = exports.GetStarted = exports.Description = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var LogoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 216px;\n  height: 216px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n\n  > img {\n    width: 100%;\n  }\n"])));
exports.LogoWrapper = LogoWrapper;
var Description = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 36px;\n  margin-bottom: 50px;\n  div.sub-header {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  div.menu-item {\n    display: flex;\n    align-items: center;\n    svg {\n      ", "\n    }\n    > p {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      margin: 0px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-left: 8px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 8px;\n      "])));
});
exports.Description = Description;
var GetStarted = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 10px;\n  }\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 8px;\n    color: ", ";\n  }\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.GetStarted = GetStarted;
var YoutubeVideoWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  padding-bottom: 30px;\n"])));
exports.YoutubeVideoWrapper = YoutubeVideoWrapper;
var YoutubeVideoInner = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  padding-bottom: 56.25%;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  background-color: ", ";\n\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
exports.YoutubeVideoInner = YoutubeVideoInner;