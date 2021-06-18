"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetailIconButton = exports.MessagesSearch = exports.SearchAndDetailControlContainer = exports.HeaderInfo = exports.WrapperLogisticInformation = exports.WrapperLogistics = exports.SkeletonHitory = exports.TabItem = exports.WrapperHitoryHeader = exports.WrapperSendMessageButton = exports.WrapperDeleteImage = exports.SendImage = exports.WrapperSendInput = exports.Send = exports.SendForm = exports.TimeofSent = exports.MyName = exports.PartnerName = exports.ChatImage = exports.SkeletonBubbleBusiness = exports.SkeletonBubbleCustomer = exports.BubbleCustomer = exports.BubbleBusines = exports.BubbleConsole = exports.MessageCustomer = exports.MessageBusiness = exports.MessageConsole = exports.Chat = exports.HeaderOnline = exports.Image = exports.Status = exports.HeaderName = exports.WrapperHeader = exports.HeaderProfile = exports.WrapperContainer = exports.MessagesContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"])));

exports.MessagesContainer = MessagesContainer;

var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n"])));

exports.WrapperContainer = WrapperContainer;

var HeaderProfile = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 20px 0px;\n\n  div {\n     p {\n       margin-left: 10px;\n       ", "\n      }\n     strong {\n      p{\n        margin-block-end: 0.1em;\n      }\n    }\n    p {\n      margin-block-start: 0.1em;\n      font-size: 0.7em\n    }\n  }\n\n  @media (max-width: 576px) {\n    padding: 10px 0;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n         margin-right: 10px;\n         margin-left: 0px;\n      "])));
});

exports.HeaderProfile = HeaderProfile;

var WrapperHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 91%;\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 576px) {\n    justify-content: center;\n    width: 90%;\n  }\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var messageDashboardView = _ref.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 92%;\n    border-bottom: 1px solid #D8D8D8;\n    padding-bottom: 5px;\n    flex-wrap: wrap;\n    row-gap: 10px;\n  "])));
}, function (_ref2) {
  var historyView = _ref2.historyView;
  return historyView && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 92%;\n  "])));
});

exports.WrapperHeader = WrapperHeader;

var HeaderName = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 1.1em;\n  margin-block-end: 0.1em;\n  margin-block-start: 0.1em;\n\n"])));

exports.HeaderName = HeaderName;

var Status = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"])));

exports.Status = Status;

var Image = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);\n  border-radius: 7.6px;\n  box-sizing: border-box;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: auto;\n    border-radius: 10px;\n    object-fit: cover;\n  }\n\n  img[name]{\n    border: 1px solid #182964;\n    border-radius: 50%;\n  }\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    padding: 6px;\n  }\n"])));

exports.Image = Image;

var HeaderOnline = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  line-height: 1.5;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  h1,\n  span {\n    margin: 0px;\n    max-width: 150px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 15px;\n    font-weight: 300;\n  }\n"])));

exports.HeaderOnline = HeaderOnline;

var Chat = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-direction: column;\n  > :first-child{\n    margin-top: 10px;\n  }\n  @media (min-width: 768px){\n  }\n"])));

exports.Chat = Chat;

var MessageConsole = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n"])));

exports.MessageConsole = MessageConsole;

var MessageBusiness = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n  width: 91%;\n  max-width: 400px;\n  margin: auto;\n"])));

exports.MessageBusiness = MessageBusiness;

var MessageCustomer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n  width: 91%;\n  max-width: 400px;\n  margin: auto;\n"])));

exports.MessageCustomer = MessageCustomer;

var BubbleConsole = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 10px 25px 10px 25px;\n  margin-bottom: 15px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  max-width: 80%;\n\n  @media (min-width: 1024px){\n    max-width: 80%;\n  }\n"])));

exports.BubbleConsole = BubbleConsole;

var BubbleBusines = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 10px 25px 10px 25px;\n  max-width: 80%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  &[name=image]{\n    width: 100%;\n  }\n"])));

exports.BubbleBusines = BubbleBusines;

var BubbleCustomer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 10px 25px 10px 25px;\n  max-width: 80%;\n  min-width: 80px;\n  height: auto;\n  margin-bottom: 10px;\n  background: ", ";\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n\n  p:last-child {\n    left: 10px;\n  }\n\n  &[name=image]{\n    border-radius: 40px 40px 0px 40px;\n    width: 100%;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    border-radius: 40px 40px 40px 0px;\n\n    p:last-child {\n      left: initial;\n      right: 10px;\n    }\n  "])));
});

exports.BubbleCustomer = BubbleCustomer;

var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 5px;\n  }\n"])));

exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;

var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 5px;\n  }\n"])));

exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;

var ChatImage = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  img{\n    width: 100%;\n    height: auto;\n    vertical-align: middle;\n    object-fit: contain;\n  }\n"])));

exports.ChatImage = ChatImage;

var PartnerName = _styledComponents.default.p(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.6em;\n  font-size: 1.1em;\n"])));

exports.PartnerName = PartnerName;

var MyName = _styledComponents.default.p(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.6em;\n    font-size: 1.1em;\n    text-align: right;\n\n    ", "\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      text-align: left;\n  "])));
});

exports.MyName = MyName;

var TimeofSent = _styledComponents.default.p(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: right;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n\n  ", "\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    text-align: left;\n  "])));
});

exports.TimeofSent = TimeofSent;

var SendForm = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  background: #FAFAFA;\n  border-top: 1px solid #EEEEEE;\n  height: 70px;\n\n  @media (min-width: 768px) {\n    height: 90px;\n  }\n"])));

exports.SendForm = SendForm;

var Send = _styledComponents.default.form(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 3px;\n  height: auto;\n  width: 91%;\n  max-width: 1200px;\n  margin: auto;\n  justify-content: space-between;\n  column-gap: 20px;\n  input {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100%;\n    flex: 1;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n\n  ", "\n"])), function (_ref3) {
  var messageDashboardView = _ref3.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    width: 92%;\n  "])));
});

exports.Send = Send;

var WrapperSendInput = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  flex: 1;\n  position: relative;\n  box-sizing: border-box;\n"])));

exports.WrapperSendInput = WrapperSendInput;

var SendImage = _styledComponents.default.label(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  \n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  input {\n    display: none;\n  }\n\n  svg {\n    color: #CFD0D0;\n    width: 25px;\n    height: 25px;\n    cursor: pointer\n  }\n"])));

exports.SendImage = SendImage;

var WrapperDeleteImage = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 7px;\n  right: -10px;\n\n  button{\n    &:disabled {\n    cursor: not-allowed;\n    }\n  }\n"])));

exports.WrapperDeleteImage = WrapperDeleteImage;

var WrapperSendMessageButton = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  width: fit-content;\n\n  button{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    svg {\n       width: 1.5em;\n       height: 1.5em; \n       vertical-align: middle;\n       color: white;\n       ", "\n    }\n\n    span {\n      display: none;\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 480px){\n    button{\n      svg {\n        margin-right: 10px;\n      }\n      span {\n        display: inline;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n        transform: rotate(270deg)\n      "])));
});

exports.WrapperSendMessageButton = WrapperSendMessageButton;

var WrapperHitoryHeader = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n"])));

exports.WrapperHitoryHeader = WrapperHitoryHeader;

var TabItem = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 5px 10px;\n  cursor: pointer;\n  text-align: center;\n  color: #909BA9;\n  \n  ", "\n\n  @media (max-width: 576px) {\n    padding: 5px 10px;\n    font-size: 14px;\n  }\n"])), function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n    color: ", ";\n    font-weight: 600;\n  "])), function (props) {
    var _props$theme$colors;

    return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
  }, function (props) {
    var _props$theme$colors2;

    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
  });
});

exports.TabItem = TabItem;

var SkeletonHitory = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  column-gap: 20px;\n\n  @media (max-width: 576px) {\n    span {\n      width: 250px !important;\n    }\n  }\n"])));

exports.SkeletonHitory = SkeletonHitory;

var WrapperLogistics = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([""])));

exports.WrapperLogistics = WrapperLogistics;

var WrapperLogisticInformation = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral([""])));

exports.WrapperLogisticInformation = WrapperLogisticInformation;

var HeaderInfo = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.HeaderInfo = HeaderInfo;

var SearchAndDetailControlContainer = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n"])));

exports.SearchAndDetailControlContainer = SearchAndDetailControlContainer;

var MessagesSearch = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  position: relative;\n\n  img {\n    position: absolute;\n    top: 13px;\n    left: 14px;\n  }\n\n  input {\n    width: 200px;\n    border: 1px solid #1C202E;\n    border-radius: 22px;\n    outline: none;\n    padding: 8px;\n    padding-left: 40px;\n    font-size: 15px;\n    background: transparent;\n\n    &::placeholder {\n      color: #182964;\n    }\n  }\n"])));

exports.MessagesSearch = MessagesSearch;

var OrderDetailIconButton = _styledComponents.default.button(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  background: #b9bcc7;\n  &:active {\n    background: ", ";\n  }\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n\n  svg {\n    font-size: 30px;\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#b9bcc7');
});

exports.OrderDetailIconButton = OrderDetailIconButton;