"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = exports.PlaceItemContainer = exports.PlaceContainer = exports.Header = exports.Content = exports.Container = exports.CheckWrapper = exports.AddBtn = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));

exports.Container = Container;

var PlaceContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  transition: 0.3s;\n  @media (min-width: 576px) {\n    ", "\n  }\n"])), function (_ref) {
  var isHide = _ref.isHide;
  return isHide ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 0px;\n    overflow: hidden;\n    flex: initial;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex: 1;\n  "])));
}, function (_ref2) {
  var isHide = _ref2.isHide;
  return isHide ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding: 20px;\n    "])));
});

exports.PlaceContainer = PlaceContainer;

var Header = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 0px;\n    margin-bottom: 18px;\n  }\n\n  button {\n    margin-bottom: 18px;\n    height: 44px;\n    margin-right: 40px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n      margin-right: 0px;\n    "])));
});

exports.Header = Header;

var Content = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));

exports.Content = Content;

var AddBtn = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  display: block;\n  margin: 10px 0px;\n  cursor: pointer;\n  user-select: none;\n  color: ", ";\n  transition: color 0.2s ease;\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddBtn = AddBtn;

var TableHead = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 8px;\n  border-bottom: 1px solid ", ";\n\n  label {\n    font-weight: 700;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});

exports.TableHead = TableHead;

var CheckWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .check-box {\n    cursor: pointer !important;\n  }\n\n  span {\n    svg {\n      cursor: pointer !important;\n      font-size: 16px;\n      color: ", ";\n\n      &.active {\n        color: ", ";\n      }\n    }\n  }\n\n  > label {\n    margin-bottom: 0;\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    margin-left: 20px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n      margin-left: 0px;\n    "])));
});

exports.CheckWrapper = CheckWrapper;

var PlaceItemContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid ", ";\n  border-top: 1px solid transparent;\n  justify-content: space-between;\n  transition: all 0.3s linear;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  > svg {\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.backgroundInfo;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref4) {
  var notAllow = _ref4.notAllow;
  return notAllow && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    cursor: not-allowed;\n    * {\n      cursor: not-allowed;\n    }\n  "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
});

exports.PlaceItemContainer = PlaceItemContainer;