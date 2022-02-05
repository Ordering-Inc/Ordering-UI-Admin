"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserName = exports.SavedPlaces = exports.PersonalizationWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserName = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.UserName = UserName;

var SavedPlaces = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: center;\n  height: calc(100% - 100px);\n  margin-top: 25px;\n  padding-bottom: 0px;\n  overflow: auto;\n  display: flex;\n    \n  > div:first-child {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    flex: 1;\n\n    > button{\n      width: auto;\n      align-self: center;\n      position: absolute;\n      bottom: 0px;\n\n      ", "\n    }\n\n    > ul {\n      margin-top: 0px;\n      max-height: calc(100% - 70px);\n      overflow: auto;\n    }\n  }\n\n\n  @media (min-width: 768px){\n    ul{\n      width: 100%;\n    }\n    >div {\n      > button {\n        width: 65%;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        right: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        left: 0px;\n      "])));
});

exports.SavedPlaces = SavedPlaces;

var PersonalizationWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: calc(100% - 60px);\n  > div {\n    padding: 35px 0px 25px;\n  }\n"])));

exports.PersonalizationWrapper = PersonalizationWrapper;