"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinimumLimitContainer = exports.DiscountContainer = exports.PromotionTypeWrapper = exports.PromotionTypeContainer = exports.CalendarWrapper = exports.CalendarContainer = exports.DateRangeWrapper = exports.Label = exports.ItemWrapper = exports.SkeletonWrapper = exports.UploadImageIcon = exports.Camera = exports.Image = exports.PromotionImage = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px 0;\n\n  > button {\n    height: 42px;\n    margin-top: 10px;\n  }\n"])));

exports.Container = Container;

var PromotionImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n\n  @media (min-width: 768px) {\n    width: auto;\n  }\n"])));

exports.PromotionImage = PromotionImage;

var Image = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 90px;\n  height: 90px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  margin-bottom: 5px;\n\n  img,\n  div:first-child {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.Image = Image;

var Camera = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #FFF;\n  border-radius: 8px;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 7px;\n  ", "\n  svg {\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    left: 7px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    right: 7px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryContrast;
});

exports.Camera = Camera;

var UploadImageIcon = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n    font-size: 10px;\n    color: #ADB5BD;\n  }\n\n  svg {\n    width: 25px;\n    height: 25px;\n    color: #ADB5BD;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var SkeletonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var ItemWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 24px;\n"])));

exports.ItemWrapper = ItemWrapper;

var Label = _styledComponents.default.label(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin-bottom: 10px;\n"])));

exports.Label = Label;

var DateRangeWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.DateRangeWrapper = DateRangeWrapper;

var CalendarContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  > button {\n    height: 42px;\n    span {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});

exports.CalendarContainer = CalendarContainer;

var CalendarWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding-top: 15px;\n  background: #FFFFFF;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  z-index: 100;\n  position: absolute;\n  top: 100%;\n  width: 300px;\n  margin-top: 18px;\n  ", "\n\n  .DateRangePicker__PaginationArrow:hover {\n    background: none;\n    > div {\n      transition: all 0.3s;\n      transform: scale(1.1);\n    }\n    .DateRangePicker__PaginationArrowIcon--previous {\n      border-right: 8px solid ", ";\n    }\n    .DateRangePicker__PaginationArrowIcon--next {\n      border-left: 8px solid ", ";\n    }\n  }\n\n  .DateRangePicker__MonthHeader {\n    color: #748194;\n  }\n\n  table {\n    border-collapse: collapse;\n    border: none;\n\n    thead {\n      th {\n        border: none;\n      }\n    }\n\n    tbody {\n      td {\n        color: ", ";\n        .DateRangePicker__CalendarHighlight {\n          border: 1px solid ", ";\n        }\n      }\n    }\n\n    .DateRangePicker__Date {\n      border: none;\n    }\n\n    .DateRangePicker__CalendarSelection {\n      background: #E9F2FE;\n      color: ", ";\n      border: none;\n    }\n\n    .DateRangePicker__Date--weekend {\n      background-color: #FFFFFF;\n    }\n\n    .DateRangePicker__WeekdayHeading abbr[title] {\n      color: #909BA9;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    right: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    left: 0px;\n  "])));
}, function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.headingColor;
}, function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.CalendarWrapper = CalendarWrapper;

var PromotionTypeContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 40px 0 25px 0;\n  > div {\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme7;

  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
});

exports.PromotionTypeContainer = PromotionTypeContainer;

var PromotionTypeWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  flex: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n\n  svg {\n    color: ", ";\n\n    ", "\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme8;

  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});

exports.PromotionTypeWrapper = PromotionTypeWrapper;

var DiscountContainer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 30px;\n\n  > div {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      display: none;\n    }\n    \n    &:first-child {\n      ", "\n\n      .select {\n        padding-top: 4px;\n        padding-bottom: 4px;\n        font-size: 14px;\n        border: none;\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme9;

  return (_props$theme9 = props.theme) !== null && _props$theme9 !== void 0 && _props$theme9.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
}, function (props) {
  return props.theme.colors.secundary;
});

exports.DiscountContainer = DiscountContainer;

var MinimumLimitContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 30px;\n\n  > div {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      display: none;\n    }\n    \n    &:first-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme10;

  return (_props$theme10 = props.theme) !== null && _props$theme10 !== void 0 && _props$theme10.rtl ? (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
});

exports.MinimumLimitContainer = MinimumLimitContainer;