"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.TableWrapper = exports.TBoday = exports.SearchWrapper = exports.ModifiedWrapper = exports.Image = exports.Container = exports.CheckBoxWrapper = exports.CheckBoxInnerWrapper = exports.BusinessTable = exports.BusinessSelectOption = exports.BusinessInfoWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-bottom: 20px;\n"])));
var BusinessSelectOption = exports.BusinessSelectOption = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n\n  > button {\n    margin-right: 16px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 16px;\n    "])));
});
var SearchWrapper = exports.SearchWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"])));
var TableWrapper = exports.TableWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: auto;\n"])));
var BusinessTable = exports.BusinessTable = _styledComponents.default.table(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-collapse: collapse;\n  width: 100%;\n  min-width: 500px;\n\n  > thead {\n    border-bottom: 1px solid ", ";\n    tr{\n      th {\n        padding: 12px 5px;\n        :not(.business-info) {\n          text-align: center;\n        }\n        &:first-child, &:last-child {\n          padding: 12px 0px;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});
var TBoday = exports.TBoday = _styledComponents.default.tbody(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n  tr{\n    td {\n      padding: 12px 1px;\n    }\n  }\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: #F5F9FF;\n    td {\n      border-top: 1px solid ", ";\n      border-bottom: 1px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var BusinessInfoWrapper = exports.BusinessInfoWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > span {\n    font-size: 14px;\n    margin-left: 12px;\n    ", "\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 12px;\n      margin-left: 0;\n    "])));
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 38px;\n  min-width: 38px;\n  max-height: 38px;\n  height: 38px;\n  width: 38px;\n\n  ", "\n  border-radius: 8px;\n\n  > svg {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    background: #F8F9FA;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    color: ", ";\n    &.fill {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});
var ModifiedWrapper = exports.ModifiedWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n\n  svg {\n    font-size: 17px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    > span {\n      font-size: 12px;\n      padding: 2px 8px;\n      background: #F5F9FF;\n      border-radius: 50px;\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
var CheckBoxInnerWrapper = exports.CheckBoxInnerWrapper = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref4) {
  var noClick = _ref4.noClick;
  return noClick && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});