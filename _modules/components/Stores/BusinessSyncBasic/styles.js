"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeVideoWrapper = exports.YoutubeVideoInner = exports.LogoWrapper = exports.GetStarted = exports.Description = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var LogoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 216px;\n  height: 216px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n\n  > img {\n    width: 100%;\n  }\n"])));
exports.LogoWrapper = LogoWrapper;
var Description = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 36px;\n  margin-bottom: 50px;\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n    span {\n      font-weight: bold;\n    }\n  }\n"])));
exports.Description = Description;
var GetStarted = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 10px;\n  }\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 8px;\n    color: ", ";\n  }\n  button {\n    border-radius: 8px;\n    height: 44px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.GetStarted = GetStarted;
var YoutubeVideoWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  padding-bottom: 30px;\n"])));
exports.YoutubeVideoWrapper = YoutubeVideoWrapper;
var YoutubeVideoInner = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  padding-bottom: 56.25%;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  background-color: ", ";\n\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
exports.YoutubeVideoInner = YoutubeVideoInner;