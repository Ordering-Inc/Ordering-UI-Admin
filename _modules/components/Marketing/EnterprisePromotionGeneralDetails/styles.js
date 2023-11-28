"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIconContainer = exports.UploadImageIcon = exports.StackableContainer = exports.SelectGroup = exports.PromotionImage = exports.OrderPriorityContainer = exports.LabelWrapper = exports.InputWrapper = exports.Image = exports.FormInput = exports.FormInnerContainer = exports.DetailsContainer = exports.DateRangeWrapper = exports.CalendarWrapper = exports.CalendarContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DetailsContainer = exports.DetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > button {\n    height: 44px;\n    top: 100%;\n    position: sticky;\n    margin: 30px 0 20px 0;\n  }\n"])));
var FormInnerContainer = exports.FormInnerContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));
var PromotionImage = exports.PromotionImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 20px auto;\n\n  @media (min-width: 768px){\n    width: auto;\n  }\n"])));
var Image = exports.Image = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 110px;\n  height: 110px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.1);\n  padding: 4px;\n"])));
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #ADB5BD;\n  span {\n    font-size: 12px;\n  }\n\n  svg {   \n    font-size: 25px;\n  }\n"])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n"])));
var DateRangeWrapper = exports.DateRangeWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n"])));
var CalendarContainer = exports.CalendarContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  > button {\n    height: 43px;\n    span {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  z-index: 100;\n  position: absolute;\n  margin-top: 18px;\n  overflow: hidden;\n  ", "\n  .rdrDateRangeWrapper {\n    .rdrDateDisplayWrapper {\n      background-color: transparent;\n    }\n\n    .rdrDateDisplayItem {\n      border: 1px solid ", ";\n      box-shadow: none;\n    }\n\n    button {\n      ", "\n    }\n\n    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    right: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var notSelected = _ref.notSelected;
  return notSelected ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        .rdrStartEdge,\n        .rdrEndEdge,\n        .rdrInRange {\n          color: transparent !important;\n        }\n      "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        .rdrStartEdge,\n        .rdrEndEdge,\n        .rdrInRange {\n          color: ", " !important;\n        }\n      "])), function (props) {
    return props.theme.colors.lightPrimary;
  });
}, function (props) {
  return props.theme.colors.headingColor;
});
var SelectGroup = exports.SelectGroup = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n\n  > div {\n    width: calc(50% - 24px);\n  }\n"])));
var LabelWrapper = exports.LabelWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 10px;\n    text-decoration: capitalize;\n  }\n"])));
var OrderPriorityContainer = exports.OrderPriorityContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  .select {\n    ", "\n    font-size: 14px;\n    background: ", ";\n    border: none;\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n    }\n    .list {\n      > div {\n        white-space: nowrap;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-left: 2px;\n    "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-right: 2px;\n    "])));
}, function (props) {
  return props.theme.colors.secundary;
});
var StackableContainer = exports.StackableContainer = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 24px;\n\n  > span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});