"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tbody = exports.Table = exports.SwitchWrapper = exports.PagesBottomContainer = exports.DragImageWrapper = exports.Container = exports.AddNewPageButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 410px);\n  overflow: auto;\n\n  ", "\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 385px);\n  }\n\n  @media (min-width: 992px) {\n    max-height: calc(100vh - 305px);\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    max-height: calc(100vh - 275px);\n    ", "\n  }\n"])), function (_ref) {
  var noScroll = _ref.noScroll;
  return noScroll && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    overflow: hidden;\n  "])));
}, function (_ref2) {
  var isSelectedOrders = _ref2.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      max-height: calc(100vh - 345px);\n    "])));
}, function (_ref3) {
  var isSelectedOrders = _ref3.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      max-height: calc(100vh - 345px);\n    "])));
});

exports.Container = Container;

var Table = _styledComponents.default.table(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 700px;\n\n  th,\n  td {\n    padding: 10px 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n\n    &:first-child {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n    &.action {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n  }\n\n  td {\n    &.actionInfo {\n      height: 0px;\n      > div {\n        width: 100%;\n        height: 100%;\n        ", "\n      }\n    }\n    .drag-wrapper {\n      min-height: 38px;\n      display: flex;\n      align-items: center;\n\n      > p {\n        font-weight: 500;\n        margin-bottom: 0px;\n        ", "\n      }\n    }\n    .description {\n      height: 100%;\n      display: flex;\n      align-items: center;\n    }\n  }\n\n  th {\n    padding-top: 0px;\n    .bold {\n      font-weight: 600;\n    }\n    &.allow-colums {\n      width: 50px;\n    }\n  }\n\n  thead {\n    tr {\n      width: 100%;\n      border-bottom: solid 1px ", ";\n      th {\n        color: ", ";\n        white-space: nowrap;\n        position: sticky;\n        top: 0px;\n        z-index: 100;\n        background: ", ";\n      }\n    }\n  }\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          border-left: 1px solid #E9ECEF;\n          padding-left: 15px;\n        "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          border-right: 1px solid #E9ECEF;\n          padding-right: 15px;\n        "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          margin-right: 14px;\n        "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          margin-left: 14px;\n        "])));
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
});

exports.Table = Table;

var Tbody = _styledComponents.default.tbody(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n  &.active {\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", " !important;\n      border-bottom: 1px solid ", " !important;\n\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref4) {
  var isCustomStyle = _ref4.isCustomStyle;
  return isCustomStyle && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        &:first-child {\n          ", "\n        }\n        &:last-child {\n          ", "\n        }\n      "])), function (props) {
    var _props$theme3;

    return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n            border-right: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    }) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n            border-left: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    });
  }, function (props) {
    var _props$theme4;

    return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n            border-left: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    }) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n            border-right: 1px solid ", " !important;\n          "])), function (props) {
      return props.theme.colors.primary;
    });
  });
});

exports.Tbody = Tbody;

var SwitchWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  > .recovery-enabled {\n    margin-bottom: 0px;\n    font-size: 14px;\n    line-height: 24px;\n    margin-right: 7px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n      margin-right: 0px;\n    "])));
});

exports.SwitchWrapper = SwitchWrapper;

var DragImageWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  img {\n    &:hover {\n      cursor: grab;\n    }\n  }\n"])));

exports.DragImageWrapper = DragImageWrapper;

var PagesBottomContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  margin: 15px 0;\n"])));

exports.PagesBottomContainer = PagesBottomContainer;

var AddNewPageButton = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddNewPageButton = AddNewPageButton;