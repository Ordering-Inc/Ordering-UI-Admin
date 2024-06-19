"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoContainer = exports.SubCategoryWrapper = exports.SkeletonWrapper = exports.MoreInfo = exports.IframeWrapper = exports.HeaderIcons = exports.DescriptionHeader = exports.DescriptionContent = exports.Description = exports.Content = exports.Container = exports.CategoryName = exports.CategoryExtraContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 0;\n  position: fixed;\n  box-shadow: -4px 0px 7px #ccc;\n\n  ", "\n  background: ", ";\n  height: calc(var(--vh, 1vh) * 100);\n  top: 0px;\n  z-index: 1001;\n  overflow-x: hidden;\n  transition: 0.3s;\n\n  ", "\n  @media print {\n    box-shadow: none;\n  }\n"])), function (_ref) {
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
var DescriptionContent = exports.DescriptionContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 26px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding: 26px 40px;\n  }\n"])));
var DescriptionHeader = exports.DescriptionHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var HeaderIcons = exports.HeaderIcons = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  top: 25px;\n  right: 20px;\n\n  > button:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
});
var Content = exports.Content = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  button.all-setting {\n    height: 44px;\n    user-select: none;\n    margin-top: 36px;\n    span {\n      font-weight: 600;\n      font-size: 14px;\n    }\n    svg {\n      margin-left: 5px;\n      transition: 0.2s linear;\n      ", "\n    }\n    &:hover {\n      svg {\n        transform: translateX(3px);\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n      "])));
});
var CategoryName = exports.CategoryName = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-right: 25px;\n  ", "\n\n  p {\n    font-weight: bold;\n    font-size: 20px;\n    margin-bottom: 6px;\n    width: 90%;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 0;\n    margin-left: 25px;\n  "])));
});
var CategoryExtraContent = exports.CategoryExtraContent = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 26px 26px 60px 26px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow: auto;\n\n  ", "\n\n  > button {\n    z-index: 100;\n    position: absolute;\n    top: 25px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n  "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n  "])));
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      right: 20px;\n    "])));
});
var Description = exports.Description = _styledComponents.default.p(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin-top: 40px;\n  font-size: 14px;\n  margin-bottom: 0px;\n  text-align: justify;\n\n  @media (min-width: 768px) {\n    text-align: initial;\n  }\n"])));
var VideoContainer = exports.VideoContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  position: relative;\n  margin-top: 48px;\n  height: 300px;\n  background: #E9ECEF;\n  border-radius: 7.6px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  video {\n    object-fit: cover;\n    height: 100%;\n    background: #E9ECEF;\n  }\n\n  svg {\n    top: 45%;\n    left: 45%;\n    position: absolute;\n    color: #748194;\n    font-size: 34px;\n  }\n"])));
var MoreInfo = exports.MoreInfo = _styledComponents.default.span(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  user-select: none;\n  color: ", ";\n  text-decoration: underline;\n  margin-top: 40px;\n  font-size: 14px;\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.primary;
});
var IframeWrapper = exports.IframeWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding-top: 35px;\n"])));
var SubCategoryWrapper = exports.SubCategoryWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([""])));