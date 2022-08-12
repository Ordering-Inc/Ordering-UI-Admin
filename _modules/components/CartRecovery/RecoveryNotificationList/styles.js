"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsPreviewWrapper = exports.SmsPreviewContentWrapper = exports.SmsPreviewContent = exports.SmsContentLayout = exports.PreviewContent = exports.PreivewEditWrapper = exports.PointGroup = exports.NotificationPreviewWrapper = exports.NotificationPreviewLayout = exports.NotificationMessageContent = exports.NotificationContentHeader = exports.NotificationContent = exports.NotificationBlock = exports.EmailPreviewWrapper = exports.EmailPreviewHeader = exports.EmailPreviewContent = exports.Container = exports.BlockHeader = exports.AddNewNotificationButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.Container = Container;

var NotificationBlock = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  padding: 40px 0px;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var noBorder = _ref.noBorder;
  return noBorder && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: none;\n    padding-top: 0px;\n  "])));
});

exports.NotificationBlock = NotificationBlock;

var BlockHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    text-transform: capitalize;\n  }\n\n  > label {\n    margin: 0px 15px;\n  }\n"])));

exports.BlockHeader = BlockHeader;

var PreivewEditWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-bottom: 15px;\n\n  > span {\n    font-size: 14px;\n    line-height: 24px;\n  }\n  > button {\n    height: 44px;\n  }\n"])));

exports.PreivewEditWrapper = PreivewEditWrapper;

var PreviewContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));

exports.PreviewContent = PreviewContent;

var EmailPreviewWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 317px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border: none;\n    background: ", ";\n    height: 200px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.EmailPreviewWrapper = EmailPreviewWrapper;

var EmailPreviewHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 18px;\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});

exports.EmailPreviewHeader = EmailPreviewHeader;

var PointGroup = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0px 4px;\n  height: 100%;\n  > div {\n    width: 7px;\n    height: 7px;\n    min-width: 7px;\n    border-radius: 50%;\n    background-color: #CED4DA;\n    margin: 0px 4px;\n  }\n"])));

exports.PointGroup = PointGroup;

var EmailPreviewContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 13px 30px;\n\n  > h2 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    text-align: center;\n    font-size: 10px;\n  }\n  p {\n    margin: 0px;\n    font-size: 7px;\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
});

exports.EmailPreviewContent = EmailPreviewContent;

var SmsPreviewWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  background-color: ", ";\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 212px;\n  padding: 20px 16px 0px 16px;\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});

exports.SmsPreviewWrapper = SmsPreviewWrapper;
var NotificationPreviewWrapper = (0, _styledComponents.default)(SmsPreviewWrapper)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])));
exports.NotificationPreviewWrapper = NotificationPreviewWrapper;

var NotificationPreviewLayout = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.NotificationPreviewLayout = NotificationPreviewLayout;

var SmsContentLayoutStyled = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n"])));

var SmsContentLayout = function SmsContentLayout(props) {
  return /*#__PURE__*/_react.default.createElement(SmsContentLayoutStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.SmsContentLayout = SmsContentLayout;

var NotificationContentHeaderStyled = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 51px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n"])));

var NotificationContentHeader = function NotificationContentHeader(props) {
  return /*#__PURE__*/_react.default.createElement(NotificationContentHeaderStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.NotificationContentHeader = NotificationContentHeader;

var NotificationContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background-color: #EAE1D8;\n  padding: 9px;\n  height: 145px;\n  max-height: 145px;\n  overflow: auto;\n"])));

exports.NotificationContent = NotificationContent;
var SmsPreviewContentWrapper = (0, _styledComponents.default)(NotificationContent)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  width: 100%;\n  padding: 9px;\n  margin-top: 30px;\n  height: 165px;\n  max-height: 165px;\n  overflow: auto;\n"])));
exports.SmsPreviewContentWrapper = SmsPreviewContentWrapper;

var SmsPreviewContent = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 10px 0px 0px 0px;\n  background: ", ";\n  border-radius: 7.6px;\n  padding: 10px;\n  height: fit-content;\n\n  > h2 {\n    font-size: 10px;\n    margin-top: 0px;\n    margin-bottom: 5px;\n  }\n  p {\n    font-size: 7px;\n    margin: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.SmsPreviewContent = SmsPreviewContent;
var NotificationMessageContent = (0, _styledComponents.default)(SmsPreviewContent)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  height: fit-content;\n  margin: 20px 0px 0px 0px;\n"])));
exports.NotificationMessageContent = NotificationMessageContent;

var AddNewNotificationButton = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  padding-bottom: 15px;\n  span {\n    cursor: pointer;\n  }\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddNewNotificationButton = AddNewNotificationButton;