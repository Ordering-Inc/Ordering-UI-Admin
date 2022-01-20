"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.ProdcutGalleryContainer = exports.GalleryItemBottom = exports.GalleryItem = exports.GalleryImagesContainer = exports.GalleryImage = exports.DropDownWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProdcutGalleryContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 10px;\n  position: relative;\n  overflow-x: hidden;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 30px;\n    padding: 0 10px;\n  }\n"])));

exports.ProdcutGalleryContainer = ProdcutGalleryContainer;

var GalleryImagesContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));

exports.GalleryImagesContainer = GalleryImagesContainer;

var GalleryItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 130px;\n  margin: 10px;\n"])));

exports.GalleryItem = GalleryItem;

var GalleryItemBottom = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 30px 0;\n\n  > input {\n    width: 100%;\n    font-size: 14px;\n    ", "\n    outline: none;\n  }\n"])), function (_ref) {
  var isAdd = _ref.isAdd;
  return isAdd ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border: none;\n    "])));
});

exports.GalleryItemBottom = GalleryItemBottom;

var GalleryImage = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 130px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])));

exports.GalleryImage = GalleryImage;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  svg {\n    color: #FFF;\n    font-size: 50px;\n    color: ", ";\n  }\n\n  p {\n    margin: 0px;\n    padding-top: 14px;\n    font-size: 12px;\n    color: ", ";\n    text-align: center;\n  }\n"])), function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
}, function (props) {
  return props.theme.colors.textGray;
}, function (props) {
  return props.theme.colors.textGray;
});

exports.UploadImageIconContainer = UploadImageIconContainer;

var DropDownWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  button {\n    background: #F8F9FA !important;\n    border: none;\n    padding: 0px;\n    svg {\n      color: ", ";\n    }\n\n    &:after {\n      display: none;\n    }\n  }\n\n  > div {\n    > div {\n      border: 1px solid #E9ECEF;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n      border-radius: 8px;\n\n      a:last-child {\n        color: #E63757;\n      }\n    }\n  }\n\n  .dropdown-item {\n    font-size: 14px;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.DropDownWrapper = DropDownWrapper;