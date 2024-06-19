"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.TabContainer = exports.Tab = exports.RightHeader = exports.InfoBlock = exports.Image = exports.HeaderTitleContainer = exports.HeaderContainer = exports.EnableWrapper = exports.DetailHeder = exports.BrandListingContainer = exports.BrandListTableWrapper = exports.BrandListTable = exports.BrandListBottomContainer = exports.BrandGeneralInfo = exports.BrandDetailContainer = exports.BrandBody = exports.ActionsGroup = exports.ActionsContainer = exports.ActionSelectorWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BrandListingContainer = exports.BrandListingContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: auto;\n  max-height: 100vh;\n\n  @media print {\n    display: none;\n  }\n"])));
var HeaderContainer = exports.HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n\n  input {\n    background: #E9ECEF;\n    border: none;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));
var RightHeader = exports.RightHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  h1 {\n    font-size: 24px;\n    margin: 0;\n    font-weight: 600;\n    color: ", ";\n  }\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var ActionsGroup = exports.ActionsGroup = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n  flex-wrap: wrap;\n\n  > button {\n    height: 41px;\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    margin-top: 0px;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
});
var BrandListTable = exports.BrandListTable = _styledComponents.default.table(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: 500px;\n\n  thead {\n    border-bottom: 1px solid ", ";\n    th {\n      padding: 10px 0;\n      font-size: 12px;\n    }\n  }\n\n  tr {\n    display: flex;\n    align-items: center;\n    th, td {\n      &:first-child {\n        flex: 1;\n      }\n      &:last-child {\n        min-width: 200px;\n      }\n    }\n  }\n\n  th:last-child {\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-left: 15px;\n    "])));
});
var BrandBody = exports.BrandBody = _styledComponents.default.tbody(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border-bottom: 1px solid ", ";\n\n  td {\n    padding: 7px 0;\n    font-size: 12px;\n    input {\n      border: none;\n      width: 100%;\n      padding: 3px 0;\n      outline: none;\n      &:focus {\n        border: 1px solid ", ";\n      }      \n    }\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  });
});
var ActionsContainer = exports.ActionsContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 8px;\n  padding-bottom: 8px;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-right: 1px solid ", ";\n    padding-right: 15px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border-left: 1px solid ", ";\n    padding-left: 15px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var EnableWrapper = exports.EnableWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 12px;\n    color: ", ";\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  max-width: 32px;\n  max-height: 32px;\n  height: 32px;\n  width: 32px;\n  ", "\n  border-radius: 7.6px;\n\n  ", "\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 7.6px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var BrandGeneralInfo = exports.BrandGeneralInfo = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var InfoBlock = exports.InfoBlock = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  p {\n    font-size: 14px;\n    margin: 0;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.headingColor;
});
var BrandListTableWrapper = exports.BrandListTableWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  overflow: auto;\n  margin-top: 20px;\n  width: 100%;\n"])));
var BrandListBottomContainer = exports.BrandListBottomContainer = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n"])));
var BrandDetailContainer = exports.BrandDetailContainer = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n"])));
var DetailHeder = exports.DetailHeder = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  ", "\n  > div:first-child {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    > span {\n      font-weight: bold;\n      font-size: 20px;\n    }\n    label {\n      margin: 0 20px;\n    }\n  }\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    margin-right: 40px;\n  "])));
});
var TabContainer = exports.TabContainer = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.colors.borderColor;
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  font-size: 14px;\n  cursor: pointer;\n  color: ", ";\n  white-space: nowrap;\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "])));
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid;\n    font-weight: 500;\n  "])));
}, function (_ref4) {
  var active = _ref4.active;
  return !active && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 12px;\n  "])), function (props) {
    var _props$theme9;
    return (_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.colors.lightGray;
  });
});
var ActionSelectorWrapper = exports.ActionSelectorWrapper = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  .select {\n    border: none;\n\n    > div:first-child {\n      padding: 5px;\n      border-radius: 8px;\n      svg {\n        font-size: 20px;\n      }\n      &:hover {\n        background: ", " !important;\n      }\n      &:active {\n        background: ", " !important;\n      }\n    }\n    .select-arrow {\n      display: none;\n    }\n    .list {\n      .list-wrapper {\n        > div {\n          font-size: 14px;\n          color: #E63757;\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.04, props.theme.colors.secundary);
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});