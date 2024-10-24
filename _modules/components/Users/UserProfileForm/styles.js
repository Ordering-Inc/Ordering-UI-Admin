"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperForm = exports.UserProfileContainer = exports.UserImage = exports.UploadImageIcon = exports.SkeletonWrapper = exports.Image = exports.Container = exports.Camera = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto;\n  padding-bottom: 20px;\n  padding: 0 5px;\n\n  ", "\n\n  > button {\n    height: 44px;\n    margin: 40px 0;\n    display: block;\n  }\n"])), function (_ref) {
  var isCalcHeight = _ref.isCalcHeight;
  return isCalcHeight && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: calc(100% - 100px);\n  "])));
});
exports.Container = Container;
var UserProfileContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n  overflow-x: hidden;\n  margin: 20px 0;\n  width: 100%;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    align-items: flex-start;\n    flex-direction: row;\n  }\n"])));
exports.UserProfileContainer = UserProfileContainer;
var UserImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n\n  @media (min-width: 768px){\n    width: auto;\n  }\n"])));
exports.UserImage = UserImage;
var Image = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 216px;\n  height: 216px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  border: 1px solid ", ";\n  img,\n  div:first-child {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    > div {\n      height: 100%;\n    }\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref2) {
  var isImage = _ref2.isImage,
    theme = _ref2.theme;
  return isImage ? '#FFF' : "".concat(theme.colors.backgroundPage);
}, function (props) {
  return props.theme.colors.borderColor;
});
exports.Image = Image;
var Camera = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  background: ", ";\n  border-radius: 8px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 7px;\n  ", "\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    left: 7px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    right: 7px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Camera = Camera;
var UploadImageIcon = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 120px;\n    height: 120px;\n  }\n"])));
exports.UploadImageIcon = UploadImageIcon;
var SkeletonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var WrapperForm = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  @media (min-width: 768px) {\n    width: 100%;\n  }\n"])));
exports.WrapperForm = WrapperForm;