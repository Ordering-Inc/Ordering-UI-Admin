"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SwitchWrapper = exports.SocialWrapper = exports.SocialItemWrapper = exports.SocialItemHeader = exports.SocialItemContent = exports.SkeletonWrapper = exports.ShapeWrapper = exports.ShapeContentWrapper = exports.ShapeBoxWrapper = exports.RibbonSwitchWrapper = exports.PriceFilterWrapper = exports.PriceFilterListWrapper = exports.PriceFilterItem = exports.PhoneWrapper = exports.Option = exports.LogoImage = exports.InputWrapper = exports.HeaderImage = exports.FormInput = exports.ColorWrapper = exports.ColorShapeWrapper = exports.ActionsForm = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  min-height: calc(100vh - 150px);\n"])));
var HeaderImage = exports.HeaderImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 768px) {\n    height: 180px;\n  }\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  ", "\n"])), function (_ref) {
  var small = _ref.small;
  return small ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding: 8px;\n  "])));
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n  }\n\n  svg {   \n    ", "\n  }\n"])), function (_ref2) {
  var small = _ref2.small;
  return small ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      width: 25px;\n      height: 25px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      width: 45px;\n      height: 45px;\n    "])));
});
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n\n  label {\n    color: ", ";\n    margin-bottom: 10px;\n    font-size: 14px;\n    position: relative;\n    > span {\n      position: absolute;\n      right: 0px;\n      font-size: 12px;\n      line-height: 18px;\n      color: #03459E;\n      top: 3px;\n      ", "\n    }\n  }\n\n  input,\n  textarea {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        left: 0px;\n        right: initial;\n      "])));
}, function (props) {
  return props.theme.colors.headingColor;
});
var ActionsForm = exports.ActionsForm = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  margin-top: 15px;\n  > button {\n    height: 44px;\n  }\n"])));
var LogoImage = exports.LogoImage = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  transform: translate3d(20px, -30px, 0px);\n  height: 60px;\n  width: 60px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref3) {
  var isEdit = _ref3.isEdit;
  return !isEdit && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    pointer-event: none;\n  "])));
});
var PhoneWrapper = exports.PhoneWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n  > div {\n    width: 100%;\n  }\n  @media (min-width: 576px) {\n    flex-direction: row;\n    justify-content: space-between;\n    > div {\n      width: 48%;\n    }\n  }\n"])));
var SwitchWrapper = exports.SwitchWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 120px;\n  width: 100%;\n  margin-bottom: 15px;\n  > span {\n    font-size: 14px;\n  }\n"])));
var RibbonSwitchWrapper = exports.RibbonSwitchWrapper = (0, _styledComponents.default)(SwitchWrapper)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  padding-top: 15px;\n  margin-bottom: 0px;\n  > span {\n    font-weight: 600;\n  }\n"])));
var ColorShapeWrapper = exports.ColorShapeWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));
var ColorWrapper = exports.ColorWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin-top: 24px;\n\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n    margin-bottom: 7px;\n  }\n"])));
var ShapeWrapper = exports.ShapeWrapper = (0, _styledComponents.default)(ColorWrapper)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n  }\n"])));
var ShapeContentWrapper = exports.ShapeContentWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var ShapeBoxWrapper = exports.ShapeBoxWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n\n  > div {\n    width: 76px;\n    height: 36px;\n    border: 1px solid ", ";\n    margin-bottom: 15px;\n    transition: all 0.3s linear;\n  }\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    transition: all 0.3s linear;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref4) {
  var shapeRect = _ref4.shapeRect;
  return shapeRect && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n     > div {\n       border-radius: 7.6px;\n     }\n    margin: 0px 20px;\n  "])));
}, function (_ref5) {
  var round = _ref5.round;
  return round && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n     > div {\n       border-radius: 50px;\n     }\n  "])));
}, function (_ref6) {
  var active = _ref6.active;
  return active && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    > div {\n      border: 1px solid ", ";\n    }\n\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var PriceFilterWrapper = exports.PriceFilterWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  > label {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-bottom: 0px;\n  }\n"])));
var PriceFilterListWrapper = exports.PriceFilterListWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  ", "\n\n  > div {\n    width: calc(33.33% - 20px);\n    margin: 10px;\n  }\n\n  @media (min-width: 576px) {\n    > div {\n      width: calc(20% - 20px);\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    margin-right: -10px;\n    margin-left: 0px;\n  "])));
});
var PriceFilterItem = exports.PriceFilterItem = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    transition: all 0.3s linear;\n    min-width: 16px;\n  }\n\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    margin-left: 8px;\n    text-wrap: nowrap;\n    ", "\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: 0px;\n    "])));
}, function (_ref7) {
  var active = _ref7.active;
  return active && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
var SocialWrapper = exports.SocialWrapper = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  padding-bottom: 20px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-bottom: 0px;\n  }\n"])));
var SocialItemWrapper = exports.SocialItemWrapper = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  margin-top: 37px;\n"])));
var SocialItemHeader = exports.SocialItemHeader = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 27px;\n    height: 27px;\n    border: 1px solid ", ";\n    border-radius: 3px;\n\n    svg {\n      height: 16px;\n      font-size: 16px;\n      color: ", ";\n    }\n  }\n\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-left: 12px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n      margin-left: 0px;\n      margin-right: 12px;\n    "])));
});
var SocialItemContent = exports.SocialItemContent = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  width: 100%;\n  input {\n    width: 100%;\n    border-radius: 8px;\n  }\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding: ", ";\n  white-space: nowrap;\n  ", "\n  ", "\n\n  img {\n    width: 45px;\n    border-radius: 8px;\n  }\n\n  ", "\n\n  span {\n    font-size: 14px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 350px;\n  }\n\n  @media (max-width: 576px) {\n    padding: ", ";\n    span {\n      max-width: 280px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (_ref8) {
  var padding = _ref8.padding;
  return padding || '5px 10px';
}, function (_ref9) {
  var isPhoneView = _ref9.isPhoneView;
  return isPhoneView && (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
}, function (_ref10) {
  var isRemove = _ref10.isRemove;
  return isRemove && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    color: ", ";\n    padding: 3px 10px;\n    font-size: 14px;\n  "])), function (props) {
    return props.theme.colors.danger;
  });
}, function (_ref11) {
  var small = _ref11.small;
  return small && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    padding: ", ";\n    img {\n      width: 25px;\n    }\n  "])), function (_ref12) {
    var padding = _ref12.padding;
    return padding || '5px 0px';
  });
}, function (_ref13) {
  var padding = _ref13.padding;
  return padding || '5px 0px';
});