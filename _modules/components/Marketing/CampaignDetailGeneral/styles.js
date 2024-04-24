"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchWrapper = exports.StatusPoint = exports.SelectWrapper = exports.ScheduleForLateWrapper = exports.RulesWrapper = exports.RadioCheckWrapper = exports.Option = exports.InputWrapper = exports.FixedWrapper = exports.FixedStatusWrapper = exports.FixedContent = exports.EndDateWrapper = exports.DynamicWrapper = exports.DynamicContentWrapper = exports.Container = exports.CheckBoxWrapper = exports.CheckBoxListWrapper = exports.ButtonWrapper = exports.AudienceWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      background-color: ", ";\n      height: 43px;\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      color: ", ";\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n      \n      .search-bar-container {\n        padding: 10px;\n        input {\n          background-color: transparent;\n          height: 44px;\n        }\n      }\n\n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
});
var Option = exports.Option = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n\n  input {\n    width: 100%;\n  }\n"])));
var AudienceWrapper = exports.AudienceWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 15px;\n  }\n"])));
var DynamicWrapper = exports.DynamicWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  padding: 12px 0px;\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
});
var RadioCheckWrapper = exports.RadioCheckWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  ", "\n\n  svg {\n    margin-right: 15px;\n    ", "\n    color: ", ";\n    &.fill {\n      color: ", ";\n    }\n  }\n\n  span {\n    user-select: none;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (_ref) {
  var isBottom = _ref.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-bottom: 10px;\n  "])));
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});
var SwitchWrapper = exports.SwitchWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 22px;\n\n  > .campaign-enabled {\n    margin-bottom: 0px;\n    font-size: 14px;\n    line-height: 24px;\n    margin-right: 7px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n      margin-right: 0px;\n    "])));
});
var DynamicContentWrapper = exports.DynamicContentWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  padding-left: 30px;\n\n  ", "\n\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 5px;\n    margin-bottom: 0px;\n    color: ", ";\n\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
});
var FixedWrapper = exports.FixedWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding: 12px 0px;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var FixedContent = exports.FixedContent = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding-left: 30px;\n\n  ", "\n  > p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 5px;\n    margin-bottom: 0px;\n    color: ", ";\n  }\n  h3 {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 21px;\n    margin-top: 20px;\n    margin-bottom: 17px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
});
var FixedStatusWrapper = exports.FixedStatusWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 18px;\n\n  > span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    text-transform: capitalize;\n  }\n"])));
var StatusPoint = exports.StatusPoint = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: #FFC700;\n  margin: 0px 13px;\n"])));
var ScheduleForLateWrapper = exports.ScheduleForLateWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  padding-left: 30px;\n  padding-top: 18px;\n\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0px;\n  "])));
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 100%;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 20px;\n    height: 44px;\n    border-radius: 8px;\n  }\n"])));
var RulesWrapper = exports.RulesWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin-top: 35px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n    margin-bottom: 5px;\n  }\n  > p {\n    font-weight: 400;\n    margin: 0px;\n    font-size: 12px;\n    line-height: 18px;\n    margin-bottom: 5px;\n    span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var CheckBoxListWrapper = exports.CheckBoxListWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"])));
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 12px 0px;\n  border-bottom: 1px solid ", ";\n  ", "\n  justify-content: space-between;\n  > div {\n    display: flex;\n    align-items: center;\n    .rule-control {\n      svg {\n        color: ", ";\n        &.fill {\n          color: ", ";\n        }\n      }\n    }\n    p {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      margin: 0px 0px 0px 20px;\n\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var borderTop = _ref2.borderTop;
  return borderTop && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n        margin: 0px 20px 0px 0px;\n      "])));
});
var EndDateWrapper = exports.EndDateWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n\n  > div {\n    margin-top: 5px;\n  }\n"])));