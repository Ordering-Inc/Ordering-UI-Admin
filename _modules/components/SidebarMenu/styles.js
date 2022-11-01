"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfo = exports.SubMenu = exports.SidebarMainContent = exports.SidebarInnerContainer = exports.SidebarHeader = exports.SidebarContent = exports.SidebarContainer = exports.MenuContent = exports.MenuContainer = exports.LanguageSelectorContainer = exports.BurgerButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SidebarContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media print {\n    display: none;\n  }\n\n  position: fixed;\n  background: ", ";\n  z-index: 1000;\n  transition: all 0.25s ease;\n  height: calc(var(--vh, 1vh) * 100);\n  overflow: auto;\n  width: 100vw;\n  ", "\n\n  @media (min-width: 768px) {\n    position: relative;\n    width: 240px;\n    ", "\n  }\n\n  button.btn-primary {\n    background-color: ", ";\n  }\n\n  button {\n    display: flex;\n    font-size: 14px;\n    box-sizing: border-box;\n    border-radius: 8px;\n    font-weight: 500;\n    &:hover {\n      background-color: ", ";\n    }\n    &.btn-primary {\n      &:hover {\n        background-color: ", ";\n      }\n    }\n\n    span {\n      text-transform: capitalize;\n      ", "\n    }\n\n    svg {\n      font-size: 20px;\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref) {
  var isCollapse = _ref.isCollapse;
  return isCollapse && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: -100vw;\n  "])));
}, function (_ref2) {
  var isCollapse = _ref2.isCollapse;
  return isCollapse && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: -240px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "])));
});
exports.SidebarContainer = SidebarContainer;
var SidebarInnerContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 100%;\n  @media (min-width: 760px) {\n    position: sticky;\n    top: 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
exports.SidebarInnerContainer = SidebarInnerContainer;
var SidebarHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n\n  > img {\n    max-width: 150px;\n    max-height: 100px;\n    object-fit: contain;\n  }\n"])));
exports.SidebarHeader = SidebarHeader;
var BurgerButton = _styledComponents.default.button(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  border-radius: 6px;\n  height: 32px;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all .2s ease-in;\n\n  > svg {\n    width: 25px;\n    height: 16px;\n    color: #B1BCCC;\n  }\n\n  &:hover {\n    background-color: #1507260a !important;\n\n    > svg {\n      color:  #151b26;\n    }\n  }\n\n  &:active {\n    background-color: #1507261a !important;\n  }\n"])));
exports.BurgerButton = BurgerButton;
var SidebarMainContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"])));
exports.SidebarMainContent = SidebarMainContent;
var SidebarContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  flex: 1;\n  box-sizing: border-box;\n  transition: 0.1s;\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
});
exports.SidebarContent = SidebarContent;
var UserInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  transition: 0.1s;\n  > button:first-child {\n    margin: 5px 0;\n    ", "\n    span {\n      max-width: calc(100% - 40px);\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      ", "\n      font-weight: 600;\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      padding-right: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      padding-left: 8px;\n    "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});
exports.UserInfo = UserInfo;
var MenuContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin: 5px 0;\n  > button {\n    width: 100%;\n    text-align: initial;\n  }\n\n  ", "\n"])), function (_ref3) {
  var disabledFeature = _ref3.disabledFeature;
  return disabledFeature && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    cursor: not-allowed;\n    > button {\n      pointer-events: none;\n    }\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
});
exports.MenuContainer = MenuContainer;
var MenuContent = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  padding: 5px 0;\n"])));
exports.MenuContent = MenuContent;
var SubMenu = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px 0;\n  font-size: 14px;\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-radius: 8px;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref5) {
  var disabledFeature = _ref5.disabledFeature;
  return disabledFeature && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    background-color: ", "!important;\n    cursor: not-allowed;\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    padding-right: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    padding-left: 40px;\n  "])));
});
exports.SubMenu = SubMenu;
var LanguageSelectorContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  position: relative;\n  border-radius: 8px;\n  min-height: 35px;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  .options {\n    > div {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
});
exports.LanguageSelectorContainer = LanguageSelectorContainer;