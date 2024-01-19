"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.WrapperImage = exports.WeekHeader = exports.WeekDayCheckWrapper = exports.ViewButtonsWrapper = exports.VerifiedItemsContainer = exports.VerifiedItem = exports.UsersTable = exports.UsersListingContainer = exports.UsersConatiner = exports.UsersBottomContainer = exports.UserTypeWrapper = exports.UserTableWrapper = exports.UserRow = exports.UserName = exports.UserMainInfo = exports.UserIdWrapper = exports.UserEnableWrapper = exports.TimeOptions = exports.ThName = exports.ThId = exports.StackedBlock = exports.SplitLine = exports.SpinnerLoaderWrapper = exports.ShowBreakBlocksWrapper = exports.SelectsWrapper = exports.SelectWrapper = exports.SelectTitleWrappre = exports.SelectTitle = exports.RrulesListWrapper = exports.RrulesItem = exports.OrderStatusTypeSelectWrapper = exports.Option = exports.InfoBlock = exports.Image = exports.HoursHeader = exports.HeaderWrapper = exports.HeaderTitleContainer = exports.Header = exports.FormWrapper = exports.FormControl = exports.EventProfessionalPhoto = exports.EventContainer = exports.EmptyBlock = exports.DriversGroupFilterWrapper = exports.DriversGroupCalendarWrapper = exports.DriverGroupSelectorWrapper = exports.DriverGroupName = exports.DeleteWrapper = exports.DeleteButtons = exports.DeleteBlock = exports.DateBlockWrapper = exports.Container = exports.ChecksWrapper = exports.CheckBoxWrapper = exports.CalendarLabelContainer = exports.CalendarHeaderContainer = exports.ButtonsWrapper = exports.ButtonWrapper = exports.BlocksWrapper = exports.Block = exports.AnalyticsTimeZoneWrapper = exports.ActionsContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"])));
var SpinnerLoaderWrapper = exports.SpinnerLoaderWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 100;\n\n  > div {\n    height: 100%;\n  }\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  h1 {\n    font-size: 20px;\n    margin: 0px;\n    line-height: 30px;\n    font-weight: 700;\n  }\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var DriverGroupName = exports.DriverGroupName = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  cursor: pointer;\n"])));
var DriverGroupSelectorWrapper = exports.DriverGroupSelectorWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  width: fit-content;\n  margin: 3px 0;\n\n  > span {\n    font-size: 14px;\n    color: ", ";\n    &.calendar {\n      color: ", ";\n    }\n  }\n\n  > svg {\n    margin: 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});
var CalendarHeaderContainer = exports.CalendarHeaderContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"])));
var CalendarLabelContainer = exports.CalendarLabelContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  span.label {\n    font-weight: 600;\n    font-size: 16px;\n    margin: 0 3px;\n    color: ", ";\n  }\n  > button {\n    > svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var ViewButtonsWrapper = exports.ViewButtonsWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  button {\n    margin: 0 3px;\n  }\n"])));
var EventContainer = exports.EventContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid ", ";\n  padding: 2px 5px;\n  border-radius: 8px;\n  height: 100%;\n\n  > div.info {\n    width: calc(100% - 42px);\n    p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    p.name {\n      font-size: 12px;\n      font-weight: 500;\n      line-height: 18px;\n      margin: 0;\n    }\n    p.date {\n      font-size: 10px;\n      line-height: 15px;\n      color: ", ";\n      margin: 0;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.lightGray;
});
var HeaderWrapper = exports.HeaderWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n"])));
var EventProfessionalPhoto = exports.EventProfessionalPhoto = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    object-fit: cover;\n  }\n  svg {\n    width: 85%;\n    height: 85%;\n  }\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  column-gap: 5px;\n\n  p {\n    margin: 0px;\n    white-space: nowrap;\n    font-size: 14px;\n    line-height: 26px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (_ref) {
  var noPadding = _ref.noPadding;
  return noPadding && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    padding: 0px;\n  "])));
});
var DeleteWrapper = exports.DeleteWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"])));
var OrderStatusTypeSelectWrapper = exports.OrderStatusTypeSelectWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: relative;\n\n  .select {\n    font-size: 14px;\n    background: ", ";\n    height: 44px;\n    border: 1px solid ", ";\n  }\n\n  .list {\n    width: 100%;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.secundary;
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.secundary;
});
var DriversGroupFilterWrapper = exports.DriversGroupFilterWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  > button {\n    background: #F8F9FA;\n    border-radius: 7.6px;\n    padding: 7px 12px;\n    font-size: 14px;\n    color: #748194;\n    border: none;\n  }\n\n  @media (min-width: 600px) {\n    margin-left: 25px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-right: 25px;\n      margin-left: 0;\n    "])));
});
var DriversGroupCalendarWrapper = exports.DriversGroupCalendarWrapper = (0, _styledComponents.default)(DriversGroupFilterWrapper)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: relative;\n\n  > button {\n    svg {\n      font-size: 16px;\n      margin-right: 12px;\n      ", "\n    }\n  }\n\n  @media only screen and (min-width: 374px) and (max-width: 450px) {\n    .ordering-calendar {\n      right: calc((100vw - 374px) / 2);\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        margin-left: 12px;\n        margin-right: 0;\n      "])));
});
var AnalyticsTimeZoneWrapper = exports.AnalyticsTimeZoneWrapper = (0, _styledComponents.default)(DriversGroupFilterWrapper)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([""])));
var UsersConatiner = exports.UsersConatiner = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
var UserTableWrapper = exports.UserTableWrapper = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  overflow: auto;\n"])));
var UsersTable = exports.UsersTable = _styledComponents.default.table(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  color: ", ";\n  overflow: auto;\n\n  td {\n    padding: 10px 0;\n    font-size: 14px;\n    border-right: 1px solid ", ";\n  }\n\n  th {\n    padding: 10px 0;\n    font-size: 14px;\n    white-space: nowrap;\n    padding: 0 10px;\n    border-right: 1px solid ", ";\n    border-left: 1px solid ", ";\n    text-align: center;\n    &:first-child {\n      border-left: none;\n      border-right: none;\n    }\n  }\n\n  thead {\n    tr {\n      border-bottom: 1px solid ", ";\n    }\n  }\n\n  tbody {\n    border-bottom: 1px solid ", ";\n\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.borderColor;
});
var UserName = exports.UserName = _styledComponents.default.span(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 600;\n  max-width: 190px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var TimeOptions = exports.TimeOptions = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  font-size: 15px;\n"])));
var SplitLine = exports.SplitLine = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  height: 1px;\n  width: 8px;\n  margin: 0 8px;\n  background-color: ", ";\n"])), function (props) {
  return props.theme.colors.disabled;
});
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  width: 70px;\n  display: flex;\n  margin-left: 10px;\n  justify-content: center;\n  .select {\n    border: none;\n    svg {\n      display: none;\n    }\n    > div {\n      padding-left: 13px;\n      padding-right: 13px;\n      font-size: 13px;\n      > div:last-child {\n        margin: 0px;\n      }\n    }\n  }\n\n  .list {\n    .options {\n      > div {\n        > div {\n          min-width: initial;\n        }\n      }\n    }\n  }\n\n  @media (min-width: 450px) {\n    width: 95px;\n    .select {\n      > div {\n        font-size: 16px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var SelectTitleWrappre = exports.SelectTitleWrappre = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 300px;\n"])));
var SelectTitle = exports.SelectTitle = _styledComponents.default.span(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral([""])));
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  min-width: 45px;\n  ", "\n  border-radius: 10px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n\n  ", "\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    border: 1px solid #E3E3E3;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var UserMainInfo = exports.UserMainInfo = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  gap: 10px;\n\n  ", "\n\n  > div:last-child {\n    flex: 1;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n    padding-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    padding: 0px 5px;\n  "])));
});
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", "\n  svg {\n    font-size: 24px;\n    color: #B1BCCC;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
}, function (_ref3) {
  var isChecked = _ref3.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n"])), function (props) {
    var _props$theme$colors4;
    return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.primary;
  });
});
var DeleteBlock = exports.DeleteBlock = _styledComponents.default.span(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var DeleteButtons = exports.DeleteButtons = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n"])));
var InfoBlock = exports.InfoBlock = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  flex-direction: column;\n\n  span {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n    color: ", ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n  span.bold {\n    margin: 0px;\n    font-size: 14px;\n    font-weight: 600;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
});
var UserTypeWrapper = exports.UserTypeWrapper = _styledComponents.default.div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  ", "\n  > div {\n    display: flex;\n\n    .select {\n      border: none;\n      padding: 0px;\n\n      > div {\n        padding: 0px;\n      }\n    }\n\n    .list {\n      .options {\n        border: 1px solid #E9ECEF;\n        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n        border-radius: 8px;\n      }\n    }\n  }\n  > p {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n    border-left: 1px solid ", ";\n    margin-left: 20px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n    border-right: 1px solid ", ";\n    margin-right: 20px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (props) {
  return props.theme.colors.lightGray;
});
var UserEnableWrapper = exports.UserEnableWrapper = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var UsersBottomContainer = exports.UsersBottomContainer = _styledComponents.default.div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 38px;\n"])));
var VerifiedItem = exports.VerifiedItem = _styledComponents.default.span(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  font-size: 10px;\n  background-color: ", ";\n  padding: 3px 10px;\n  border-radius: 50px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    font-size: 12px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.lightGreen;
}, function (props) {
  return props.theme.colors.green;
}, function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n      margin-left: 3px;\n    "]))) : (0, _styledComponents.css)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n      margin-right: 3px;\n    "])));
});
var VerifiedItemsContainer = exports.VerifiedItemsContainer = _styledComponents.default.div(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n\n  ", "\n\n  > span {\n    &:not(:first-child) {\n      margin-top: 5px;\n    }\n  }\n"])), function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n    left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n    right: 10px;\n  "])));
});
var UserIdWrapper = exports.UserIdWrapper = _styledComponents.default.div(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n"])));
var ActionsContainer = exports.ActionsContainer = _styledComponents.default.div(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > div {\n    &:not(:first-child) {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme9;
  return (_props$theme9 = props.theme) !== null && _props$theme9 !== void 0 && _props$theme9.rtl ? (0, _styledComponents.css)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n        margin-right: 25px;\n      "]))) : (0, _styledComponents.css)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n        margin-left: 25px;\n      "])));
});
var UsersListingContainer = exports.UsersListingContainer = _styledComponents.default.div(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media print {\n    display: none;\n  }\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 70%;\n  top: 11px;\n  z-index: 80;\n\n  ", "\n"])), function (props) {
  return (props.rowPosition || props.rowPosition === 0) && (0, _styledComponents.css)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  left: ", "px;\n  "])), props.rowPosition * props.cellWidth + 285);
});
var StackedBlock = exports.StackedBlock = _styledComponents.default.div(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  border: 1px solid #B1BCCC;\n  border-radius: 6px;\n  padding: 6px;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 4px rgba(238,250,255);\n  }\n"])));
var Block = exports.Block = _styledComponents.default.div(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 70%;\n  border: 1px solid #B1BCCC;\n  border-radius: 6px;\n  min-height: 40px;\n  padding: 5px 10px;\n  background-color: #FFF;\n  cursor: pointer;\n  top: 11px;\n  z-index: 80;\n  ", "\n  ", "\n\n  &:hover {\n    box-shadow: 0px 0px 3px 4px rgba(238,250,255);\n    z-index: 90;\n  }\n\n  p {\n    margin: 0px;\n    font-size: 12px;\n    color: #B1BCCC;\n  }\n"])), function (props) {
  return props.innerWidth && (0, _styledComponents.css)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n    width: ", "px;\n  "])), props.innerWidth);
}, function (props) {
  return (props.rowPosition || props.rowPosition === 0) && (0, _styledComponents.css)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n    left: ", "px;\n  "])), props.rowPosition * props.cellWidth + 249 + (props.cellPosition === 0 ? 0 : props.cellSections * props.cellPosition));
});
var EmptyBlock = exports.EmptyBlock = _styledComponents.default.div(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n  height: 100%;\n  min-height: 50px;\n  cursor: pointer;\n"])));
var UserRow = exports.UserRow = _styledComponents.default.tr(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n  position: relative;\n\n  td {\n    max-width: 214.2px;\n  }\n"])));
var HoursHeader = exports.HoursHeader = _styledComponents.default.th(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n  max-width: 86px;\n  min-width: 86px;\n"])));
var ThId = exports.ThId = _styledComponents.default.th(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n  max-width: 34.6px;\n  min-width: 34.6px;\n"])));
var ThName = exports.ThName = _styledComponents.default.th(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n  max-width: 214.2px;\n  min-width: 214.2px;\n"])));
var WeekHeader = exports.WeekHeader = _styledComponents.default.th(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n  max-width: 160px;\n  min-width: 160px;\n\n  span {\n    text-transform: uppercase;\n    font-weight: 300;\n  }\n\n  h4 {\n    font-weight: bold;\n  }\n"])));
var FormWrapper = exports.FormWrapper = _styledComponents.default.div(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 10px;\n  position: relative;\n  margin-bottom: 20px;\n  min-height: 500px;\n  .react-datepicker-popper {\n    z-index: 1000;\n  }\n\n  span {\n    font-weight: 600;\n  }\n\n  input {\n    margin: 5px 0 10px 0;\n    border: 1px solid #DEE2E6;\n    color: ", ";\n    width: 100%;\n    &:focus {\n      border: 1px solid #B1BCCC;\n    }\n  }\n\n  textarea {\n    margin-bottom: 10px;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var FormControl = exports.FormControl = _styledComponents.default.div(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n  > label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n  input {\n    width: 100%;\n    height: 44px;\n  }\n"])));
var RrulesListWrapper = exports.RrulesListWrapper = _styledComponents.default.div(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 20px;\n"])));
var RrulesItem = exports.RrulesItem = _styledComponents.default.div(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n  cursor: pointer;\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n    &.active {\n      color: ", ";\n    }\n    margin-right: 10px;\n    ", "\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0px;\n    "])));
});
var ButtonsWrapper = exports.ButtonsWrapper = _styledComponents.default.div(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  position: absolute;\n  bottom: -20px;\n  right: 20px;\n"])));
var WeekDayCheckWrapper = exports.WeekDayCheckWrapper = _styledComponents.default.div(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  gap: 10px;\n\n  > input {\n    ", "\n  }\n  h4 {\n    font-size: 12px;\n    margin: 0px;\n    text-transform: capitalize;\n  }\n"])), function (props) {
  var _props$theme10;
  return (_props$theme10 = props.theme) !== null && _props$theme10 !== void 0 && _props$theme10.rtl ? (0, _styledComponents.css)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});
var ShowBreakBlocksWrapper = exports.ShowBreakBlocksWrapper = _styledComponents.default.div(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"])));
var ChecksWrapper = exports.ChecksWrapper = _styledComponents.default.div(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"])));
var SelectsWrapper = exports.SelectsWrapper = _styledComponents.default.div(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(2, 2fr);\n  gap: 20px;\n"])));
var BlocksWrapper = exports.BlocksWrapper = _styledComponents.default.div(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["\n  display: flex;\n  justifyContent: space-between;\n  gap: 60px;\n"])));
var DateBlockWrapper = exports.DateBlockWrapper = _styledComponents.default.div(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));