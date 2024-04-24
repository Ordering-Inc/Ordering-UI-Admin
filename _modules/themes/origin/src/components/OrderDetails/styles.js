"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeletonText = exports.WrapperSkeletonButton = exports.WrapperSkeletonBottom = exports.WrapperMoreInformationButton = exports.WrapperContainer = exports.WrapperButton = exports.StatusImage = exports.StatusBar = exports.SkeletonInnerBlock = exports.SkeletonInfoCell = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.SectionTitle = exports.SectionContainer = exports.PrintButtonContainer = exports.PhotoWrapper = exports.Photo = exports.PhoneNumber = exports.PaymethodCreatedDateContent = exports.PaymethodCreatedDate = exports.PaymethodContent = exports.Paymethod = exports.PayAndOrderTypeInfo = exports.OrderTypeInfo = exports.OrderTypeContent = exports.OrderStatus = exports.OrderProducts = exports.OrderInfoContent = exports.OrderInfo = exports.OrderDetailCloseButton = exports.OrderData = exports.OrderBill = exports.NotificationIcon = exports.MessageContactInfo = exports.InfonContent = exports.InfoBlock = exports.DriverSelectorContainer = exports.CustomerContactBlock = exports.Container = exports.ContactInfoHeader = exports.ContactInfoContent = exports.ContactBlock = exports.ChatContainer = exports.ButtonLink = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  height: 100%;\n\n  div.skeleton-loading {\n    justify-content: space-between;\n\n    > div {\n      width: ", ";\n    }\n  }\n\n  @media (max-width: 1200px) {\n    div.skeleton-loading {\n      > div {\n        width: 100%;\n      }\n    }\n  }\n"])), function (_ref) {
  var messageDashboardView = _ref.messageDashboardView;
  return messageDashboardView ? '100%' : '48%';
});
var WrapperContainer = exports.WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 92%;\n  margin: 0 auto;\n  display: flex;\n  position: relative;\n  max-width: 1200px;\n  box-sizing: border-box;\n  height: 100%;\n  @media (max-width: 1200px) {\n    padding: 30px 0;\n    flex-direction: column;\n    row-gap: 20px;\n    width: 92%;\n  }\n\n  ", "\n"])), function (_ref2) {
  var messageDashboardView = _ref2.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 0;\n  "])));
});
var OrderInfoContent = exports.OrderInfoContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 50px 35px 50px 0;\n  box-sizing: border-box;\n  max-height: 800px;\n  overflow: auto;\n  margin-right: 10px;\n  @media (max-width: 1200px) {\n    width: 100%;\n    padding: 20px 0;\n    max-height: initial;\n    overflow: initial;\n  }\n\n  ", "\n"])), function (_ref3) {
  var messageDashboardView = _ref3.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 0px 0px 0px 10px;\n    margin-right: 0px;\n    overflow: initial;\n    max-height: initial;\n\n    @media (max-width: 1200px) {\n      padding: 0;\n      overflow: auto;\n    }\n  "])));
});
var PhotoWrapper = exports.PhotoWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  max-width: 80px;\n  max-height: 80px;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    margin-right: 10px;\n    ", "\n  }\n\n  @media print {\n    display: none;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (_ref4) {
  var messageDashboardView = _ref4.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    height: 60px;\n    width: 60px;\n    svg {\n      height: 50px;\n      width: 50px;\n      margin-right: 0px;\n    }\n  "])));
});
var PhotoStyled = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var Photo = exports.Photo = function Photo(props) {
  return /*#__PURE__*/_react.default.createElement(PhotoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var OrderInfo = exports.OrderInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0px 20px;\n"])));
var OrderData = exports.OrderData = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  h1, p {\n    margin: 0px;\n  }\n  h1 {\n    margin-bottom: ", ";\n    font-size: ", ";\n  }\n  p {\n    font-size: 13px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  p:nth-child(1) {\n    opacity: 0.8;\n  }\n  p.date {\n    font-weight: bold;\n    font-size: 15px;\n  }\n  p.uuid {\n    display: none;\n  }\n\n  @media (min-width: 512px) {\n    p.uuid {\n      display: block;\n    }\n  }\n"])), function (_ref5) {
  var messageDashboardView = _ref5.messageDashboardView;
  return messageDashboardView ? '0px' : '5px';
}, function (_ref6) {
  var messageDashboardView = _ref6.messageDashboardView;
  return messageDashboardView ? '20px' : '24px';
});
var StatusBarStyled = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 5px;\n  margin: 10px 0px 0px;\n  background: ", ";\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.btnSecondary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
});
var StatusBar = exports.StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};
var OrderStatus = exports.OrderStatus = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  span {\n    padding: 2px 10px;\n    border: 1px solid ", ";\n    color: ", ";\n    text-align: center;\n    border-radius: 20px;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 13px;\n    max-width: 200px;\n  }\n\n  @media (min-width: 410px) {\n    span {\n      font-size: 13px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.btnSecondary;
}, function (props) {
  return props.theme.colors.btnSecondary;
});
var StatusImage = exports.StatusImage = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  img {\n    display: flex;\n    width: 40px;\n    height: 40px;\n    box-sizing: border-box;\n    position: relative;\n    background-repeat: no-repeat, repeat;\n    background-size: contain;\n    object-fit: contain;\n    border-radius: 10px;\n    margin-top: 15px;\n  }\n\n  @media (min-width: 410px) {\n    img {\n      width: 50px;\n      height: 50px;\n    }\n  }\n"])));
var SectionTitle = exports.SectionTitle = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 18px;\n  color: #151824;\n\n  ", "\n"])), function (_ref7) {
  var driver = _ref7.driver;
  return driver && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    @media print {\n      display: none;\n    }\n  "])));
});
var SectionContainer = exports.SectionContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  column-gap: 10px;\n  margin-bottom: 20px;\n"])));
var InfoBlock = exports.InfoBlock = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  text-transform: capitalize;\n  h1,\n  span {\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 20px;\n    color: #263238;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 15px;\n    opacity: 0.8;\n  }\n"])));
var CustomerContactBlock = exports.CustomerContactBlock = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n\n  button {\n    outline: none;\n    border: 1px solid #182964;\n    border-radius: 42px;\n    background-color: transparent;\n    cursor: pointer;\n    width: 90px;\n    height: 30px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n\n    &:active {\n      background: ", ";\n    }\n\n    svg {\n      display: flex;\n      align-items: center;\n      column-gap: 10px;\n      color: #182964;\n      margin-right: 10px;\n      font-size: 18px;\n    }\n  }\n\n  @media  print {\n    display: none;\n  }\n  \n  BsBell {\n    margin: 5px;\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
var OrderProducts = exports.OrderProducts = (0, _styledComponents.default)(SectionContainer)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
var OrderBill = exports.OrderBill = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 100%;\n    font-size: 15px;\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 16px;\n      td:nth-child(1) {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n        padding-top: 10px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
}, function (props) {
  return props.theme.colors.btnDarkBlue;
});
var SkeletonBlock = exports.SkeletonBlock = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n"])), function (_ref8) {
  var width = _ref8.width;
  return width && "".concat(width, "%");
});
var SkeletonBlockWrapp = exports.SkeletonBlockWrapp = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n"])));
var SkeletonInfoCell = exports.SkeletonInfoCell = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  column-gap: 10px;\n"])));
var SkeletonInnerBlock = exports.SkeletonInnerBlock = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n"])));
var WrapperSkeletonText = exports.WrapperSkeletonText = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
var WrapperSkeletonBottom = exports.WrapperSkeletonBottom = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 100px;\n\n  span {\n    width: 90%;\n    border-radius: 30px;\n  }\n"])));
var WrapperSkeletonButton = exports.WrapperSkeletonButton = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  span {\n    border-radius: 20px;\n  }\n"])));
var PayAndOrderTypeInfo = exports.PayAndOrderTypeInfo = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 5px;\n  border-top: 1px solid #D8D8D8;\n  border-bottom: 1px solid #D8D8D8;\n  margin-top: 30px;\n\n  @media (max-width: 576px) {\n    flex-direction:  column;\n  }\n"])));
var Paymethod = exports.Paymethod = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    color: #182964;\n    margin: 0px;\n    font-size: 13px;\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0;\n  }\n"])));
var PaymethodContent = exports.PaymethodContent = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;  \n  color: #151824;\n  font-size: 13px;\n\n  img {\n    width: 15px;\n  }\n"])));
var PaymethodCreatedDate = exports.PaymethodCreatedDate = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  width: 40%;\n  display: flex;\n  justify-content: center;\n  border-left: 1px solid #D8D8D8;\n  border-right: 1px solid #D8D8D8;\n\n  @media (max-width: 576px) {\n    width: 100%;\n    border-left: none;\n    border-right: none;\n    border-top: 1px solid #D8D8D8;\n    border-bottom: 1px solid #D8D8D8;\n    padding: 10px 0;\n  }\n"])));
var PaymethodCreatedDateContent = exports.PaymethodCreatedDateContent = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  p {\n    color: #182964;\n    margin: 0px;\n    font-size: 13px;\n\n    &:last-child {\n      color:  #151824;\n    }\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n"])));
var OrderTypeInfo = exports.OrderTypeInfo = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    color: #182964;\n    margin: 0px;\n    font-size: 13px;\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0;\n  }\n"])));
var OrderTypeContent = exports.OrderTypeContent = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;  \n  color: #151824;\n  font-size: 13px;\n\n  img {\n    width: 13px;\n  }\n"])));
var ContactInfoContent = exports.ContactInfoContent = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  width: 50%;\n  background: ", ";\n  border-radius: 20px;\n  padding: 30px 50px;\n  box-sizing: border-box;\n\n  @media (max-width: 1200px) {\n    padding: 20px 25px;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var ContactInfoHeader = exports.ContactInfoHeader = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  column-gap: 15px;\n  margin-bottom: 20px;\n\n  & > div {\n    &:first-child {\n      width: 270px;\n    }\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column-reverse;\n    row-gap: 15px;\n\n    & > div {\n      &:first-child {\n        width: 100%;\n      }\n    }\n  }\n\n  @media print {\n    display: none;\n  }\n"])));
var WrapperButton = exports.WrapperButton = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 15px;\n\n  @media (max-width: 576px) {\n    width: 100%;\n    justify-content: flex-end;\n  }\n"])));
var ButtonLink = exports.ButtonLink = _styledComponents.default.button(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  background: ", ";\n  outline: none;\n  border: none;\n  border-radius: 100%;\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n\n  &:active {\n    background: ", ";\n  }\n\n  svg {\n    color: white;\n    font-size: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.btnDarkBlue);
});
var DriverSelectorContainer = exports.DriverSelectorContainer = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  margin: 15px 0 0 0;\n  & > div {\n    width: 100%;\n  }\n\n  @media print {\n    display: none;\n  }\n"])));
var PrintButtonContainer = exports.PrintButtonContainer = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  margin-top: 3em;\n  padding: 10px 0;\n  button {\n    width: 100%;\n    padding: 10px 15px;\n    font-size: 20px;\n  }\n  @media print {\n    display: none;\n  }\n"])));
var ChatContainer = exports.ChatContainer = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  background: ", ";\n  height: 100%;\n  z-index: 1000;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 7px;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
var PhoneNumber = exports.PhoneNumber = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  display: none;\n  font-size: 15px;\n\n  @media print {\n    display: block;\n  }\n"])));
var OrderDetailCloseButton = exports.OrderDetailCloseButton = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  svg {\n    cursor: pointer;\n    font-size: 24px;\n    &:active {\n      background: ", ";\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#fff');
});
var MessageContactInfo = exports.MessageContactInfo = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n"])));
var ContactBlock = exports.ContactBlock = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n  padding: 5px;\n  cursor: pointer;\n\n  ", "\n"])), function (_ref9) {
  var active = _ref9.active;
  return active && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n    background: #c7cad6;\n  "])));
});
var InfonContent = exports.InfonContent = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  p {\n    margin: 0px;\n\n    &:first-child {\n      font-weight: 600;\n    }\n  }\n"])));
var WrapperMoreInformationButton = exports.WrapperMoreInformationButton = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  padding: 20px 10px 10px 10px;\n  button {\n    width: 100%;\n  }\n"])));
var NotificationIcon = exports.NotificationIcon = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  margin-top: 2px;\n  color: #182964;\n  font-size: 20px;\n"])));