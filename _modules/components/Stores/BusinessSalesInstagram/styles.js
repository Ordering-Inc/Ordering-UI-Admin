"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = exports.Step = exports.LeftHeader = exports.InstagramGeneralContainer = exports.InstagramAdvancedContainer = exports.ImageWrapper = exports.Header = exports.CopyInputWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: auto;\n  transition: 0.3s;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
exports.Container = Container;
var Header = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"])));
exports.Header = Header;
var LeftHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 32px;\n    height: 32px;\n    object-fit: cover;\n    margin-right: 18px;\n    ", "\n  }\n\n  h2 {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 30px;\n    margin: 0;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 18px;\n      margin-right: 0;\n    "])));
});
exports.LeftHeader = LeftHeader;
var Tabs = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 24px;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.Tabs = Tabs;
var Tab = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding-bottom: 13px;\n  margin-right: 30px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  color: ", ";\n  cursor: pointer;\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n    margin-right: 0;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    font-weight: 600;\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});
exports.Tab = Tab;
var InstagramGeneralContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n    margin-bottom: 23px;\n    margin-top: 0;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.InstagramGeneralContainer = InstagramGeneralContainer;
var Step = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-bottom: 27px;\n  h3 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 12px;\n  }\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 20px;\n    color: ", ";\n  }\n  > img {\n    width: 100%;\n  }\n\n  @media (min-width: 576px) {\n    > img {\n      display: block;\n      width: 90%;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 24px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.Step = Step;
var CopyInputWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  input {\n    flex: 1;\n    height: 44px;\n  }\n  button {\n    margin-left: 15px;\n    ", "\n  }\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 0;\n      margin-right: 15px;\n    "])));
}, function (_ref2) {
  var isBottom = _ref2.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-bottom: 24px;\n  "])));
});
exports.CopyInputWrapper = CopyInputWrapper;
var InstagramAdvancedContainer = (0, _styledComponents.default)(InstagramGeneralContainer)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([""])));
exports.InstagramAdvancedContainer = InstagramAdvancedContainer;
var ImageWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  img {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    img {\n      width: 48%;\n      margin-bottom: 0px;\n    }\n  }\n"])));
exports.ImageWrapper = ImageWrapper;