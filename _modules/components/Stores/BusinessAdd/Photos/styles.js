"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.UploadImageContainer = exports.Tab = exports.PhotosContainer = exports.GalleryList = exports.DeleteButton = exports.ContentWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var PhotosContainer = exports.PhotosContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 25px;\n  }\n"])));
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
var UploadImageContainer = exports.UploadImageContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 160px;\n  max-width: 415px;\n  width: 100%;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: contain;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: ", ";\n  ", "\n  ", "\n"])), function (props) {
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
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: ", ";\n  span {\n    margin-top: 14px;\n    font-size: 14px;\n  }\n\n  svg {   \n    width: 52px;\n    height: 45px;\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
});
var GalleryList = exports.GalleryList = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 25px;\n"])));
var Tab = exports.Tab = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 300px;\n  height: 160px;\n  img {\n   width: 100%;\n   height: 100%;\n   object-fit: cover;\n  }\n"])));
var DeleteButton = exports.DeleteButton = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background: ", ";\n  border-radius: 100%;\n  padding: 3px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.danger;
}, function (props) {
  return props.theme.colors.white;
});