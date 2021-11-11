"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessConfigItem = exports.BusinessConfigsContainer = exports.BusinessDescription = exports.BusinessDetailsContent = exports.BusinessLogo = exports.BusinessHeader = exports.RightHeader = exports.LeftHeader = exports.BusinessName = exports.DetailsHeader = exports.BusinessDetailsContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  position: relative;\n  overflow-x: hidden;\n  @media (min-width: 768px) {\n    min-width: 500px;\n  }\n"])));

exports.BusinessDetailsContainer = BusinessDetailsContainer;

var DetailsHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));

exports.DetailsHeader = DetailsHeader;

var BusinessName = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 20px;\n  margin: 0px;\n  font-weight: 700;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});

exports.BusinessName = BusinessName;

var LeftHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > button:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rlt ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
});

exports.RightHeader = RightHeader;

var BusinessHeaderStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background: #CCC;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  height: 150px;\n  border-radius: 8px;\n  margin-top: 20px;\n  ", "\n\n  @media (min-width: 768px) {\n    height: 180px;\n  }\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background: #E9ECEF;\n  "])));
});

var BusinessHeader = function BusinessHeader(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(BusinessHeaderStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessHeader = BusinessHeader;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 60px;\n  height: 60px;\n  box-sizing: border-box;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 60px;\n  border-radius: 8px;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  position: absolute;\n  bottom: -30px;\n  ", "\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    right: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    left: 20px;\n  "])));
});

var BusinessLogo = function BusinessLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var BusinessDetailsContent = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-top: 60px;\n\n  > button {\n    height: 42px;\n  }\n"])));

exports.BusinessDetailsContent = BusinessDetailsContent;

var BusinessDescription = _styledComponents.default.p(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 25px 0;\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.BusinessDescription = BusinessDescription;

var BusinessConfigsContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  margin-bottom: 50px;\n  overflow: hidden;\n  > div:last-child {\n    border-bottom: none;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var isLoading = _ref2.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});

exports.BusinessConfigsContainer = BusinessConfigsContainer;

var BusinessConfigItem = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  color: ", ";\n  border-bottom: 1px solid ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n  span {\n    font-size: 14px;\n  }\n\n  ", "\n  \n  svg {\n    font-size: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", " !important;\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.lightPrimary;
  });
});

exports.BusinessConfigItem = BusinessConfigItem;