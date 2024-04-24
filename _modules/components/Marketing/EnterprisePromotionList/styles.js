"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.WrapperImage = exports.VerticalLine = exports.SinglePromotionTbody = exports.PromotionTypeWrapper = exports.PromotionListTable = exports.PromotionListContainer = exports.PromotionListBottom = exports.PromotionHow = exports.PromotionDateRanageWrapper = exports.Image = exports.EnableWrapper = exports.DummyImageWrapper = exports.DragableContainer = exports.DragImageWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PromotionListContainer = exports.PromotionListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 230px);\n  overflow: auto;\n  margin-top: 30px;\n\n  \n  ", "\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 200px);\n  }\n"])), function (_ref) {
  var eventDisabled = _ref.eventDisabled;
  return eventDisabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var PromotionListTable = exports.PromotionListTable = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 950px;\n  color: ", ";\n  transition: all 0.3s;\n\n  td, th {\n    padding: 10px 0;\n    &.promotion {\n      width: 30%;\n    }\n\n    &.date_range {\n      width: 115px;\n    }\n\n    &:last-child {\n      width: 120px;\n    }\n  }\n\n  th {\n    font-size: 12px;\n    font-weight: 700;\n  }\n\n  td {\n    font-size: 12px;\n  }\n\n  thead {\n    tr {\n      th {\n        ", "\n        background: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (_ref2) {
  var noFixedHeader = _ref2.noFixedHeader;
  return !noFixedHeader && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          position: sticky;\n          top: 0px;\n          z-index: 100;\n        "])));
}, function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
});
var SinglePromotionTbody = exports.SinglePromotionTbody = _styledComponents.default.tbody(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  cursor: pointer;\n  &:hover {\n    background-color: ", ";\n  }\n  &.active {\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", ";\n      border-bottom: 1px solid ", ";\n    }\n  }\n\n  &:first-of-type {\n    ", "\n  }\n  &:last-of-type {\n    ", "\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref3) {
  var isAccept = _ref3.isAccept;
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-top: 1px solid ", ";\n    "])), function (props) {
    return isAccept ? props.theme.colors.primary : props.theme.colors.disabled;
  });
}, function (_ref4) {
  var isPromotionBottom = _ref4.isPromotionBottom;
  return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n    "])), function (props) {
    return isPromotionBottom ? props.theme.colors.primary : props.theme.colors.borderColor;
  });
}, function (_ref5) {
  var isAccept = _ref5.isAccept;
  return isAccept && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.secundary;
  });
});
var EnableWrapper = exports.EnableWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  span {\n    font-size: 12px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});
var DragableContainer = exports.DragableContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > div:first-child {\n    display: flex;\n    align-items: center;\n  \n    > span {\n      font-weight: 500;\n      flex: 1;\n    }\n  }\n"])));
var DragImageWrapper = exports.DragImageWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  img {\n    ", "\n    &:hover {\n      cursor: grab;\n    }\n  }\n\n  span {\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  max-width: 40px;\n  max-height: 40px;\n  height: 40px;\n  width: 40px;\n  ", "\n  border-radius: 8px;\n  margin: 0 10px;  \n"])), function (_ref6) {
  var isSkeleton = _ref6.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var VerticalLine = exports.VerticalLine = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 38px;\n  background-color: ", ";\n  margin: 0 20px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var PromotionDateRanageWrapper = exports.PromotionDateRanageWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  p {\n    margin: 0;\n  }\n"])));
var PromotionTypeWrapper = exports.PromotionTypeWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var PromotionHow = exports.PromotionHow = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var PromotionListBottom = exports.PromotionListBottom = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  margin-bottom: 38px;\n  @media (max-width: 450px) {\n    > div {\n      margin-bottom: 5px;\n    }\n  }\n  ", "\n"])), function (_ref7) {
  var eventDisabled = _ref7.eventDisabled;
  return eventDisabled && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n"])));
var DummyImageWrapper = exports.DummyImageWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  height: 40px;\n  width: 40px;\n  background-color: rgb(0 0 0 / 20%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    color: ", ";\n    font-size: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});