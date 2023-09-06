"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SwitchWrapper = exports.SkipButton = exports.SkeletonWrapper = exports.SkeletonImgWrapper = exports.ShapeWrapper = exports.ShapeContentWrapper = exports.ShapeBoxWrapper = exports.RightHeader = exports.RibbonTextWrapper = exports.ParentCategorySelectWrapper = exports.Option = exports.LogoImage = exports.InfoConatiner = exports.HeaderImage = exports.HeaderContainer = exports.GenerateButtonWrapper = exports.EditCategoryContent = exports.Container = exports.ColorWrapper = exports.ColorShapeWrapper = exports.CategoryTypeImage = exports.CategoryNameWrapper = exports.BusinessEnableWrapper = exports.BtnWrapper = exports.ActionSelectorWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.Container = Container;
var SkeletonWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  flex-direction: column;\n  > span {\n    width: 100%;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var EditCategoryContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n"])));
exports.EditCategoryContent = EditCategoryContent;
var HeaderContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
exports.HeaderContainer = HeaderContainer;
var BusinessEnableWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-weight: 700;\n    font-size: 20px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding-right: 20px;\n    "])));
});
exports.BusinessEnableWrapper = BusinessEnableWrapper;
var CategoryTypeImage = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-top: 48px;\n  height: 240px;\n  width: 240px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
exports.CategoryTypeImage = CategoryTypeImage;
var BtnWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n\n  button {\n    height: 42px;\n  }\n"])));
exports.BtnWrapper = BtnWrapper;
var UploadImageIconContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n"])));
exports.UploadImageIconContainer = UploadImageIconContainer;
var UploadImageIcon = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"])));
exports.UploadImageIcon = UploadImageIcon;
var CategoryNameWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  label {\n    width: 100%;\n    font-size: 14px;\n    color: ", ";\n    margin-bottom: 12px;\n  }\n\n  input, textarea {\n    font-size: 14px;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.CategoryNameWrapper = CategoryNameWrapper;
var RibbonTextWrapper = (0, _styledComponents.default)(CategoryNameWrapper)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
exports.RibbonTextWrapper = RibbonTextWrapper;
var ParentCategorySelectWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n  .select {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    border: none;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.ParentCategorySelectWrapper = ParentCategorySelectWrapper;
var Option = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  white-space: nowrap;\n  font-size: 14px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Option = Option;
var RightHeader = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
exports.RightHeader = RightHeader;
var ActionSelectorWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  button {\n    display: flex;\n    background: ", ";\n    border: none;\n    padding: 5px;\n    border-radius: 8px;\n\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n      font-size: 20px;\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:hover {\n      background: ", " !important;\n    }\n    &:active {\n      background: ", " !important;\n    }\n  }\n\n  .show {\n    button {\n      background: ", " !important;\n    }\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n      }\n      .dropdown-item:last-child {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.danger;
});
exports.ActionSelectorWrapper = ActionSelectorWrapper;
var InfoConatiner = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: hidden;\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    font-weight: 700;\n  }\n  @media (min-width: 1000px) {\n    padding: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.InfoConatiner = InfoConatiner;
var GenerateButtonWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n\n  > button {\n    height: 42px;\n  }\n"])));
exports.GenerateButtonWrapper = GenerateButtonWrapper;
var SkipButton = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  ", "\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-left: 60px;\n  "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-right: 60px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.SkipButton = SkipButton;
var HeaderImage = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  position: relative;\n  margin-top: 15px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 768px) {\n    height: 180px;\n  }\n"])), function (_ref2) {
  var isEdit = _ref2.isEdit;
  return !isEdit && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    pointer-event: none;\n  "])));
});
exports.HeaderImage = HeaderImage;
var LogoImage = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  transform: translate3d(20px, -30px, 0px);\n  height: 60px;\n  width: 60px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref3) {
  var isEdit = _ref3.isEdit;
  return !isEdit && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    pointer-event: none;\n  "])));
});
exports.LogoImage = LogoImage;
var SkeletonImgWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
exports.SkeletonImgWrapper = SkeletonImgWrapper;
var SwitchWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 35px;\n\n  > span {\n    font-size: 16px;\n    font-weight: 600;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
});
exports.SwitchWrapper = SwitchWrapper;
var ColorShapeWrapper = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));
exports.ColorShapeWrapper = ColorShapeWrapper;
var ColorWrapper = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  margin-top: 24px;\n\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n    margin-bottom: 7px;\n  }\n"])));
exports.ColorWrapper = ColorWrapper;
var ShapeWrapper = (0, _styledComponents.default)(ColorWrapper)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n  }\n"])));
exports.ShapeWrapper = ShapeWrapper;
var ShapeContentWrapper = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
exports.ShapeContentWrapper = ShapeContentWrapper;
var ShapeBoxWrapper = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n\n  > div {\n    width: 76px;\n    height: 36px;\n    border: 1px solid ", ";\n    margin-bottom: 15px;\n    transition: all 0.3s linear;\n  }\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    transition: all 0.3s linear;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref4) {
  var shapeRect = _ref4.shapeRect;
  return shapeRect && (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n     > div {\n       border-radius: 7.6px;\n     }\n    margin: 0px 20px;\n  "])));
}, function (_ref5) {
  var round = _ref5.round;
  return round && (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n     > div {\n       border-radius: 50px;\n     }\n  "])));
}, function (_ref6) {
  var active = _ref6.active;
  return active && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    > div {\n      border: 1px solid ", ";\n    }\n\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
exports.ShapeBoxWrapper = ShapeBoxWrapper;