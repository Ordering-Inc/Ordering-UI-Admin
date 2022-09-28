"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoContainer = exports.SubCategoryWrapper = exports.SkeletonWrapper = exports.MoreInfo = exports.IframeWrapper = exports.HeaderIcons = exports.DescriptionHeader = exports.DescriptionContent = exports.Description = exports.Content = exports.Container = exports.CategoryName = exports.CategoryExtraContent = exports.AllSetting = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 0;\n  position: fixed;\n  box-shadow: -4px 0px 7px #ccc;\n\n  ", "\n  background: ", ";\n  height: calc(var(--vh, 1vh) * 100);\n  top: 0px;\n  z-index: 1001;\n  overflow-x: hidden;\n  transition: 0.3s;\n\n  ", "\n  @media print {\n    box-shadow: none;\n  }\n"])), function (_ref) {
  var isDriverOrders = _ref.isDriverOrders;
  return isDriverOrders && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    box-shadow: none;\n\n    ", "\n  "])), function (props) {
    var _props$theme;

    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-right: 1px solid #CCC;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-left: 1px solid #CCC;\n    "])));
  });
}, function (props) {
  var _props$theme$colors;

  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    right: 0px;\n  "])));
});

exports.Container = Container;

var DescriptionContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 26px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding: 26px 40px;\n  }\n"])));

exports.DescriptionContent = DescriptionContent;

var DescriptionHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"])));

exports.DescriptionHeader = DescriptionHeader;

var HeaderIcons = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  top: 25px;\n  right: 20px;\n\n  > button:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
});

exports.HeaderIcons = HeaderIcons;

var Content = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([""])));

exports.Content = Content;

var CategoryName = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  p {\n    font-weight: bold;\n    font-size: 20px;\n    color: #344050;\n    margin-bottom: 6px;\n  }\n"])));

exports.CategoryName = CategoryName;

var CategoryExtraContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 26px 26px 60px 26px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow: auto;\n\n  ", "\n\n  > button {\n    z-index: 100;\n    position: absolute;\n    top: 25px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n  "])));
}, function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      right: 20px;\n    "])));
});

exports.CategoryExtraContent = CategoryExtraContent;

var Description = _styledComponents.default.p(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin-top: 40px;\n  font-size: 14px;\n  margin-bottom: 0px;\n  text-align: justify;\n\n  @media (min-width: 768px) {\n    text-align: initial;\n  }\n"])));

exports.Description = Description;

var VideoContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-top: 48px;\n  height: 300px;\n  background: #E9ECEF;\n  border-radius: 7.6px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  video {\n    object-fit: cover;\n    height: 100%;\n    background: #E9ECEF;\n  }\n\n  svg {\n    top: 45%;\n    left: 45%;\n    position: absolute;\n    color: #748194;\n    font-size: 34px;\n  }\n"])));

exports.VideoContainer = VideoContainer;

var AllSetting = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  user-select: none;\n  cursor: pointer;\n  margin-top: 36px;\n  ", "\n  span {\n    font-weight: 600;\n    font-size: 14px;\n    ", "\n  }\n  svg {\n    ", "\n  }\n"])), function (_ref2) {
  var isDisabledFeature = _ref2.isDisabledFeature;
  return (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    cursor: ", ";\n  "])), function (props) {
    return isDisabledFeature ? 'not-allowed' : 'pointer';
  });
}, function (_ref3) {
  var isDisabledFeature = _ref3.isDisabledFeature;
  return (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
    var _props$theme$colors2;

    return isDisabledFeature ? (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.disabled : '#03459E';
  });
}, function (_ref4) {
  var isDisabledFeature = _ref4.isDisabledFeature;
  return (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
    var _props$theme$colors3;

    return isDisabledFeature ? (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.disabled : '#03459E';
  });
});

exports.AllSetting = AllSetting;

var MoreInfo = _styledComponents.default.span(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  user-select: none;\n  color: ", ";\n  text-decoration: underline;\n  margin-top: 40px;\n  font-size: 14px;\n"])), function (props) {
  var _props$theme$colors4;

  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.primary;
});

exports.MoreInfo = MoreInfo;

var IframeWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding-top: 35px;\n"])));

exports.IframeWrapper = IframeWrapper;

var SubCategoryWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n"])));

exports.SubCategoryWrapper = SubCategoryWrapper;

var SkeletonWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral([""])));

exports.SkeletonWrapper = SkeletonWrapper;