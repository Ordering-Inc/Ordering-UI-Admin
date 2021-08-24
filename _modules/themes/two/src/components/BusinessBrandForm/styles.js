"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingWrapper = exports.CheckBoxWrapper = exports.UploadImageIcon = exports.UploadImageIconContainer = exports.SkeletonWrapper = exports.BusinessBrandImage = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #E9ECEF;\n  padding: 15px;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: ", ";\n    > input {\n      border: 1px solid ", ";\n    }\n  }\n\n  span {\n    svg {\n      color: #B1BCCC;\n      font-size: 22px;\n      &.fill {\n        color: ", ";\n        font-size: 22px;\n      }\n    }\n  }\n\n  > div {\n    margin: 0 10px;\n  }\n\n  > input {\n    flex: 1;\n    height: 100%;\n    border: 1px solid transparent;\n    outline: unset;\n    background: transparent;\n    font-size: 14px;\n    color: ", ";\n    transition: all 0.3s;\n    border-radius: 3px;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.lightPrimary;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.Container = Container;

var BusinessBrandImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 36px;\n  width: 36px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});

exports.BusinessBrandImage = BusinessBrandImage;

var SkeletonWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: #dce3e640;\n"])));

exports.UploadImageIconContainer = UploadImageIconContainer;

var UploadImageIcon = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  span {\n    margin: 0;\n  }\n\n  svg {   \n    width: 25px;\n    height: 25px;\n    color: #ADB5BD;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var CheckBoxWrapper = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", "\n"])), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});

exports.CheckBoxWrapper = CheckBoxWrapper;

var LoadingWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  left: 0;\n"])));

exports.LoadingWrapper = LoadingWrapper;