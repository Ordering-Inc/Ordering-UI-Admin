"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIcon = exports.StackableContainer = exports.ShowInCartContainer = exports.SectionTitle = exports.PromotionTypeWrapper = exports.PromotionTypeContainer = exports.PromotionImage = exports.PoromotionTargetWrapper = exports.MinimumLimitContainer = exports.Label = exports.ItemWrapper = exports.Image = exports.DiscountOption = exports.DiscountContainer = exports.DateRangeWrapper = exports.CouponHeader = exports.CouponContent = exports.CouponContainer = exports.CouponCodeContainer = exports.Container = exports.Camera = exports.CalendarWrapper = exports.CalendarContainer = exports.AutomaticDiscountEnableWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px 0;\n\n  > button {\n    height: 42px;\n    margin-top: 10px;\n  }\n"])));
var PromotionImage = exports.PromotionImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 29px;\n"])));
var Image = exports.Image = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 187px;\n  height: 187px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  margin-bottom: 5px;\n\n  img,\n  div:first-child {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var Camera = exports.Camera = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  background: ", ";\n  border-radius: 8px;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 7px;\n  ", "\n  svg {\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    left: 7px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    right: 7px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryContrast;
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n    font-size: 12px;\n    color: #ADB5BD;\n  }\n\n  svg {\n    font-size: 32px;\n    color: #ADB5BD;\n    margin-bottom: 6px;\n  }\n"])));
var ItemWrapper = exports.ItemWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 24px;\n"])));
var Label = exports.Label = _styledComponents.default.label(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin-bottom: 10px;\n"])));
var DateRangeWrapper = exports.DateRangeWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var CalendarContainer = exports.CalendarContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  > button {\n    height: 42px;\n    span {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  z-index: 100;\n  position: absolute;\n  margin-top: 18px;\n  overflow: hidden;\n  ", "\n  .rdrDateRangeWrapper {\n    .rdrDateDisplayWrapper {\n      background-color: transparent;\n    }\n\n    .rdrDateDisplayItem {\n      border: 1px solid ", ";\n      box-shadow: none;\n    }\n\n    button {\n      ", "\n    }\n\n    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {\n      color: ", ";\n    }\n  }  \n"])), function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    right: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var notSelected = _ref.notSelected;
  return notSelected ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        .rdrStartEdge,\n        .rdrEndEdge,\n        .rdrInRange {\n          color: transparent !important;\n        }\n      "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        .rdrStartEdge,\n        .rdrEndEdge,\n        .rdrInRange {\n          color: ", " !important;\n        }\n      "])), function (props) {
    return props.theme.colors.lightPrimary;
  });
}, function (props) {
  return props.theme.colors.headingColor;
});
var PromotionTypeContainer = exports.PromotionTypeContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 40px 0 25px 0;\n  > div {\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
});
var PromotionTypeWrapper = exports.PromotionTypeWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  flex: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n\n  svg {\n    color: ", ";\n\n    ", "\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
var DiscountContainer = exports.DiscountContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n\n  > div {\n    width: calc(50% - 10px);\n    display: flex;\n    flex-direction: column;\n\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      display: none;\n    }\n    \n    &:first-child {\n      .select {\n        padding-top: 4px;\n        padding-bottom: 4px;\n        font-size: 14px;\n        border: none;\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var MinimumLimitContainer = exports.MinimumLimitContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n\n  > div {\n    width: calc(50% - 10px);\n    display: flex;\n    flex-direction: column;\n\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      display: none;\n    }    \n  }\n"])));
var PoromotionTargetWrapper = exports.PoromotionTargetWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 24px 0;\n\n  .select {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    font-size: 14px;\n    border: none;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var CouponContainer = exports.CouponContainer = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";  \n"])), function (props) {
  return props.theme.colors.borderColor;
});
var CouponHeader = exports.CouponHeader = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  cursor: pointer;\n\n  ", "\n\n  > span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n      margin-right: 13px;\n    "]))) : (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n      margin-left: 13px;\n    "])));
});
var CouponCodeContainer = exports.CouponCodeContainer = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  margin-top: 26px;\n  margin-bottom: 17px;\n  display: flex;\n  flex-direction: column;\n\n  ", "\n\n  label {\n    font-size: 14px;\n    margin-bottom: 8px;\n  }\n"])), function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "])));
});
var CouponContent = exports.CouponContent = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([""])));
var ShowInCartContainer = exports.ShowInCartContainer = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n\n  ", "\n\n  > div {\n    p {\n      margin: 0;\n      &:first-child {\n        font-size: 14px;\n      }\n      &:last-child {\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n    ", "\n  }\n"])), function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme9;
  return (_props$theme9 = props.theme) !== null && _props$theme9 !== void 0 && _props$theme9.rtl ? (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
var DiscountOption = exports.DiscountOption = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var AutomaticDiscountEnableWrapper = exports.AutomaticDiscountEnableWrapper = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  ", "\n\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme10;
  return (_props$theme10 = props.theme) !== null && _props$theme10 !== void 0 && _props$theme10.rtl ? (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "])));
}, function (props) {
  var _props$theme11;
  return (_props$theme11 = props.theme) !== null && _props$theme11 !== void 0 && _props$theme11.rtl ? (0, _styledComponents.css)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
var SectionTitle = exports.SectionTitle = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n  margin: 30px 0 18px 0;\n"])));
var StackableContainer = exports.StackableContainer = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 24px 0;\n\n  > span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme12;
  return (_props$theme12 = props.theme) !== null && _props$theme12 !== void 0 && _props$theme12.rtl ? (0, _styledComponents.css)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});