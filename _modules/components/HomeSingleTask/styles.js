"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.ThatsIt = exports.StoreContent = exports.HomeSingleStoreContainer = exports.Description = exports.BoxNumberWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeSingleStoreContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 50px;\n"])));

exports.HomeSingleStoreContainer = HomeSingleStoreContainer;

var BoxNumberWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  border-radius: 7.5px;\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  max-width: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 16px;\n\n  ", "\n\n  p {\n    font-weight: 600;\n    font-size: 20px;\n    margin: 0;\n    color: #909BA9;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 16px;\n    margin-right: 0;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background: #E9F2FE;\n    p {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme2;

    return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.primary;
  });
});

exports.BoxNumberWrapper = BoxNumberWrapper;

var StoreContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 100%;\n"])));

exports.StoreContent = StoreContent;

var TitleContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  p {\n    font-weight: 500;\n    font-size: 12px;\n    color: ", ";\n    margin: 0;\n  }\n\n  svg {\n    font-size: 16px;\n    color: #B1BCCC;\n    cursor: pointer;\n\n    &.fill {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.primary;
});

exports.TitleContainer = TitleContainer;

var Description = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 10px;\n  color: #909BA9;\n  margin-top: 7px;\n  margin-bottom: 0;\n"])));

exports.Description = Description;

var ThatsIt = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-bottom: 0;\n  margin-top: 5px;\n  font-weight: 500;\n  font-size: 12px;\n  color: ", ";\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.headingColor;
});

exports.ThatsIt = ThatsIt;