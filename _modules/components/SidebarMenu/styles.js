"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfo = exports.SubMenu = exports.SidebarMainContent = exports.SidebarInnerContainer = exports.SidebarHeader = exports.SidebarContent = exports.SidebarContainer = exports.PoweredWrapper = exports.MobileMessage = exports.MenuContent = exports.MenuContainer = exports.LogoWrapper = exports.LanguageSelectorContainer = exports.BurgerButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SidebarContainer = exports.SidebarContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media print {\n    display: none;\n  }\n\n  position: fixed;\n  background: ", ";\n  z-index: 1000;\n  transition: all 0.25s ease;\n  height: calc(var(--vh, 1vh) * 100);\n  overflow: auto;\n  width: 100vw;\n  ", "\n\n  @media (min-width: 768px) {\n    position: relative;\n    width: 240px;\n    ", "\n  }\n\n  button.btn-primary {\n    background-color: ", ";\n  }\n\n  button {\n    display: flex;\n    font-size: 14px;\n    box-sizing: border-box;\n    border-radius: 8px;\n    font-weight: 500;\n    &:hover {\n      background-color: ", ";\n    }\n    &.btn-primary {\n      &:hover {\n        background-color: ", ";\n      }\n    }\n\n    span {\n      ", "\n    }\n\n    svg {\n      font-size: 20px;\n    }\n  }\n\n"])), function (props) {
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
var SidebarInnerContainer = exports.SidebarInnerContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 100%;\n  @media (min-width: 760px) {\n    position: sticky;\n    top: 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var SidebarHeader = exports.SidebarHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n"])));
var LogoWrapper = exports.LogoWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  > img {\n    max-width: 150px;\n    max-height: 100px;\n    object-fit: contain;\n  }\n"])));
var BurgerButton = exports.BurgerButton = _styledComponents.default.button(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  border-radius: 6px;\n  height: 32px;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all .2s ease-in;\n\n  > svg {\n    width: 25px;\n    height: 16px;\n    color: #B1BCCC;\n  }\n\n  &:hover {\n    background-color: #1507260a !important;\n\n    > svg {\n      color:  #151b26;\n    }\n  }\n\n  &:active {\n    background-color: #1507261a !important;\n  }\n"])));
var SidebarMainContent = exports.SidebarMainContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"])));
var SidebarContent = exports.SidebarContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  flex: 1;\n  box-sizing: border-box;\n  transition: 0.1s;\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
});
var UserInfo = exports.UserInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  transition: 0.1s;\n  > button:first-child {\n    margin: 5px 0;\n    ", "\n    span {\n      max-width: calc(100% - 40px);\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      ", "\n      font-weight: 600;\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      padding-right: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      padding-left: 8px;\n    "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});
var MenuContainer = exports.MenuContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 5px 0;\n  > span {\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 15px;\n    padding: 0px 13px;\n    color: ", ";\n  }\n  > button {\n    width: 100%;\n    text-align: initial;\n  }\n\n  > span {\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 15px;\n    padding: 20px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (_ref3) {
  var disabledFeature = _ref3.disabledFeature;
  return disabledFeature && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    cursor: not-allowed;\n    > button {\n      pointer-events: none;\n    }\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
});
var MenuContent = exports.MenuContent = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  padding: 5px 0;\n"])));
var SubMenu = exports.SubMenu = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px 0;\n  font-size: 14px;\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-radius: 8px;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref5) {
  var disabledFeature = _ref5.disabledFeature;
  return disabledFeature && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    background-color: ", "!important;\n    cursor: not-allowed;\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    padding-right: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    padding-left: 40px;\n  "])));
});
var LanguageSelectorContainer = exports.LanguageSelectorContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  position: relative;\n  border-radius: 8px;\n  min-height: 35px;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  .options {\n    > div {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
});
var PoweredWrapper = exports.PoweredWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n"])));
var MobileMessage = exports.MobileMessage = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 130px);\n  z-index: 999;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  width: 260px;\n  > div {\n    padding: 15px 15px 10px 15px;\n    font-size: 12px;\n    line-height: 18px;\n    position: relative;\n    > svg {\n      position: absolute;\n      top: 3px;\n      right: 3px;\n      cursor: pointer;\n      font-size: 21px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
});