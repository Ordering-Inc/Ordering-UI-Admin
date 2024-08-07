"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.UploadImageContainer = exports.Tab = exports.PhotosContainer = exports.GalleryList = exports.DeleteButton = exports.ContentWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PhotosContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 25px;\n  }\n"])));
exports.PhotosContainer = PhotosContainer;
var ContentWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.ContentWrapper = ContentWrapper;
var UploadImageContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 160px;\n  max-width: 415px;\n  width: 100%;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: contain;\n  }\n"])));
exports.UploadImageContainer = UploadImageContainer;
var UploadImageIconContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: ", ";\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
}, function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background: transparent;\n    svg, span {\n      color: ", ";\n    }\n    border: 1px dashed ", ";\n  "])), function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.secundaryDarkContrast;
  });
}, function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
exports.UploadImageIconContainer = UploadImageIconContainer;
var UploadImageIcon = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: ", ";\n  span {\n    margin-top: 14px;\n    font-size: 14px;\n  }\n\n  svg {   \n    width: 52px;\n    height: 45px;\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
});
exports.UploadImageIcon = UploadImageIcon;
var GalleryList = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 25px;\n"])));
exports.GalleryList = GalleryList;
var Tab = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 300px;\n  height: 160px;\n  img {\n   width: 100%;\n   height: 100%;\n   object-fit: cover;\n  }\n"])));
exports.Tab = Tab;
var DeleteButton = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background: ", ";\n  border-radius: 100%;\n  padding: 3px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.danger;
}, function (props) {
  return props.theme.colors.white;
});
exports.DeleteButton = DeleteButton;