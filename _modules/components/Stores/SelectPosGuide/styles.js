"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectPosWrapper = exports.PosItem = exports.Option = exports.Container = exports.CheckMateAndDeliverectList = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 35px;\n    &.other {\n      text-align: left;\n    }\n  }\n"])));
var SelectPosWrapper = exports.SelectPosWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n\n  > div {\n    width: 100%;\n    border: none;\n\n    > div:first-child {\n      background-color: ", ";\n      height: 43px;\n      border: none;\n      border-radius: 7.6px;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 24px;\n      color: ", ";\n    }\n    .list {\n      background-color: ", ";\n      border: none;\n      \n      .search-bar-container {\n        padding: 10px;\n        input {\n          background-color: transparent;\n          height: 44px;\n        }\n      }\n\n      .list-wrapper {\n        > div {\n          padding: 6px 10px;\n          &:hover {\n            background-color: #f2f5f7;\n          }\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.secundary;
});
var Option = exports.Option = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n  }\n  img {\n    margin-right: 15px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n      margin-right: 0;\n    "])));
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 80px;\n  button {\n    width: 100%;\n    border-radius: 8px;\n    height: 44px;\n    position: relative;\n    svg {\n      position: absolute;\n      right: 15px;\n      top: 10px;\n      font-size: 21px;\n    }\n  }\n\n  ", "\n"])), function (_ref) {
  var hasOther = _ref.hasOther;
  return hasOther && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-top: 15px;\n  "])));
});
var CheckMateAndDeliverectList = exports.CheckMateAndDeliverectList = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -12px;\n  width: calc(100% + 24px);\n  max-height: 68vh;\n  overflow: auto;\n  > div {\n    margin: 6px 12px;\n    width: calc(33.33% - 24px);\n  }\n"])));
var PosItem = exports.PosItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  min-height: 78px;\n  cursor: pointer;\n  ", "\n  img {\n    margin-right: 5px;\n    ", "\n  }\n  > div {\n    h3 {\n      font-weight: 600;\n      font-size: 14px;\n      line-height: 21px;\n      margin: 0;\n    }\n    p {\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 18px;\n      margin: 0;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0;\n    "])));
});