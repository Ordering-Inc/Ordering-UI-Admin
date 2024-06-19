"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProdcutVideosContainer = exports.GalleryVideosContainer = exports.GalleryVideos = exports.GalleryURL = exports.GalleryItem = exports.AddNewVideo = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ProdcutVideosContainer = exports.ProdcutVideosContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  position: relative;\n  overflow-x: hidden;\n  \n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 20px;\n    padding: 10px 0;\n  }\n\n"])));
var GalleryVideosContainer = exports.GalleryVideosContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var GalleryVideos = exports.GalleryVideos = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 18px;\n  border-top: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var AddNewVideo = exports.AddNewVideo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  input {\n    flex: 1;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    font-size: 13px;\n    padding: 6px 12px;\n  }\n\n  button {\n    border-radius: 7.6px;\n    font-size: 13px;\n    height: 34pxpx;\n  }\n"])));
var GalleryItem = exports.GalleryItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 10px 0;\n  box-sizing: border-box;\n  border-bottom: 1px solid ", ";\n\n  button {\n    background: transparent !important;\n    border: none;\n    color: ", ";\n    font-size: 12px;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.danger);
}, function (props) {
  return props.theme.colors.danger;
});
var GalleryURL = exports.GalleryURL = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 80%;\n  text-overflow: ellipsis;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});