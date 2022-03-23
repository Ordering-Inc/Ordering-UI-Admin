"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchWrapper = exports.StatusPoint = exports.ScheduleForLateWrapper = exports.RulesWrapper = exports.RadioCheckWrapper = exports.Option = exports.InputWrapper = exports.FixedWrapper = exports.FixedStatusWrapper = exports.FixedContent = exports.DynamicWrapper = exports.DynamicContentWrapper = exports.Container = exports.CheckBoxWrapper = exports.ButtonWrapper = exports.AudienceWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.Container = Container;

var InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n\n  input {\n    width: 100%;\n  }\n\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      background-color: ", ";\n      height: 43px;\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      color: ", ";\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n      \n      .search-bar-container {\n        padding: 10px;\n        input {\n          background-color: transparent;\n          height: 44px;\n        }\n      }\n\n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
});

exports.InputWrapper = InputWrapper;

var Option = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});

exports.Option = Option;

var AudienceWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 15px;\n  }\n"])));

exports.AudienceWrapper = AudienceWrapper;

var DynamicWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  padding: 12px 0px;\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
});

exports.DynamicWrapper = DynamicWrapper;

var RadioCheckWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  ", "\n\n  svg {\n    margin-right: 15px;\n    ", "\n    color: ", ";\n    &.fill {\n      color: ", ";\n    }\n  }\n\n  span {\n    user-select: none;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (_ref) {
  var isBottom = _ref.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-bottom: 10px;\n  "])));
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});

exports.RadioCheckWrapper = RadioCheckWrapper;

var SwitchWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 22px;\n\n  > .campaign-enabled {\n    margin-bottom: 0px;\n    font-size: 14px;\n    line-height: 24px;\n    margin-right: 7px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n      margin-right: 0px;\n    "])));
});

exports.SwitchWrapper = SwitchWrapper;

var DynamicContentWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding-left: 30px;\n\n  ", "\n\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 5px;\n    margin-bottom: 0px;\n    color: ", ";\n\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.DynamicContentWrapper = DynamicContentWrapper;

var FixedWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: 12px 0px;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.FixedWrapper = FixedWrapper;

var FixedContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding-left: 30px;\n\n  ", "\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 5px;\n    margin-bottom: 0px;\n    color: ", ";\n  }\n  h3 {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 21px;\n    margin-top: 20px;\n    margin-bottom: 17px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.FixedContent = FixedContent;

var FixedStatusWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 18px;\n\n  > span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    text-transform: capitalize;\n  }\n"])));

exports.FixedStatusWrapper = FixedStatusWrapper;

var StatusPoint = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: #FFC700;\n  margin: 0px 13px;\n"])));

exports.StatusPoint = StatusPoint;

var ScheduleForLateWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  padding-left: 30px;\n  padding-top: 18px;\n\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0px;\n  "])));
});

exports.ScheduleForLateWrapper = ScheduleForLateWrapper;

var ButtonWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));

exports.ButtonWrapper = ButtonWrapper;

var RulesWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n    margin-bottom: 15px;\n  }\n  > p {\n    font-weight: 400;\n    margin: 0px;\n    font-size: 12px;\n    line-height: 18px;\n    margin-bottom: 20px;\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.RulesWrapper = RulesWrapper;

var CheckBoxWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 12px 0px;\n  border-bottom: 1px solid ", ";\n  ", "\n  justify-content: space-between;\n  > div {\n    display: flex;\n    align-items: center;\n    .rule-control {\n      svg {\n        color: ", ";\n        &.fill {\n          color: ", ";\n        }\n      }\n    }\n    p {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      margin: 0px 0px 0px 20px;\n\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var borderTop = _ref2.borderTop;
  return borderTop && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        margin: 0px 20px 0px 0px;\n      "])));
});

exports.CheckBoxWrapper = CheckBoxWrapper;