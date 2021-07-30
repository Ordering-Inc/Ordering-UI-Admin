"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenu = exports.MenuContent = exports.MenuContainer = exports.MenuClose = exports.IconContent = exports.CollapseButton = exports.UserInfo = exports.SidebarContent = exports.LogoWrap = exports.SidebarInnerContainer = exports.SidebarContainer = exports.Header = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n"])));

exports.Header = Header;

var SidebarContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  @media print {\n    display: none;\n  }\n  button.btn-primary {\n    background-color: ", ";\n  }\n  transition: width 0.4s ease;\n  position: fixed;\n  z-index: 1000;\n  background-color: #FFF;\n  width: 0px;\n  height: 100vh;\n  overflow: hidden;\n\n  @media (min-width: 760px) {\n    height: inherit;\n    overflow: inherit;\n    position: relative;\n    width: ", " !important;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isCollapse = _ref.isCollapse;
  return isCollapse ? '65px' : '240px';
});

exports.SidebarContainer = SidebarContainer;

var SidebarInnerContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n  @media (min-width: 760px) {\n    height: 100vh;\n    position: sticky;\n    top: 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.SidebarInnerContainer = SidebarInnerContainer;

var LogoWrap = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 60px;\n  box-sizing: border-box;\n  background-color: #FFF;\n\n  @media (min-width: 760px) {\n    height: 80px;\n  }\n"])));

exports.LogoWrap = LogoWrap;

var SidebarContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex: 1;\n  box-sizing: border-box;\n  transition: 0.1s;\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  button {\n    display: flex;\n    font-size: 14px;\n    box-sizing: border-box;\n    svg {\n      font-size: 20px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
});

exports.SidebarContent = SidebarContent;

var UserInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  transition: 0.1s;\n"])));

exports.UserInfo = UserInfo;

var CollapseButton = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  top: 25px;\n  ", "\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  cursor: pointer;\n  svg {\n    font-size: 18px;\n    transition: transform 0.4s ease;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    left: -15px;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    right: -15px;\n  "])));
}, function (_ref2) {
  var isCollapse = _ref2.isCollapse;
  return isCollapse && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    svg {\n      transform: rotate(180deg);\n    }\n  "])));
});

exports.CollapseButton = CollapseButton;

var IconContent = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  top: 9px;\n  ", "\n\n  ", "\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  background-color: rgb(247, 247, 247);\n  box-shadow: transparent 0px 0px 0px 1px inset;\n\n  svg {\n    flex-shrink: 0;\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    left: 10px;\n  "])));
}, function (_ref3) {
  var isClose = _ref3.isClose;
  return isClose && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (props) {
    var _props$theme4;

    return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      right: initial;\n      left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      left: initial;\n      right: 10px;\n    "])));
  });
});

exports.IconContent = IconContent;

var MenuClose = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 60px;\n"])));

exports.MenuClose = MenuClose;

var MenuContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin: 5px 0;\n  > button {\n    width: 100%;\n    text-align: initial;\n  }\n"])));

exports.MenuContainer = MenuContainer;

var MenuContent = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  padding: 5px 0;\n"])));

exports.MenuContent = MenuContent;

var SubMenu = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px 0;\n  font-size: 14px;\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "])));
});

exports.SubMenu = SubMenu;