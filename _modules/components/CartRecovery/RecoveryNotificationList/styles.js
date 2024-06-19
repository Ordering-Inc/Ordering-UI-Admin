"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsPreviewWrapper = exports.SmsPreviewContentWrapper = exports.SmsPreviewContent = exports.SmsContentLayout = exports.PreviewContent = exports.PreivewEditWrapper = exports.PointGroup = exports.NotificationPreviewWrapper = exports.NotificationPreviewLayout = exports.NotificationMessageContent = exports.NotificationContentHeader = exports.NotificationContent = exports.NotificationBlock = exports.EmailPreviewWrapper = exports.EmailPreviewHeader = exports.EmailPreviewContent = exports.Container = exports.BlockHeader = exports.AddNewNotificationButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var NotificationBlock = exports.NotificationBlock = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  padding: 40px 0px;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var noBorder = _ref.noBorder;
  return noBorder && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: none;\n    padding-top: 0px;\n  "])));
});
var BlockHeader = exports.BlockHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    text-transform: capitalize;\n  }\n\n  > label {\n    margin: 0px 15px;\n  }\n"])));
var PreivewEditWrapper = exports.PreivewEditWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-bottom: 15px;\n\n  > span {\n    font-size: 14px;\n    line-height: 24px;\n  }\n  > button {\n    height: 44px;\n  }\n"])));
var PreviewContent = exports.PreviewContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
var EmailPreviewWrapper = exports.EmailPreviewWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border: none;\n    background: ", ";\n    height: 200px;\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var EmailPreviewHeader = exports.EmailPreviewHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 18px;\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
var PointGroup = exports.PointGroup = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0px 4px;\n  height: 100%;\n  > div {\n    width: 7px;\n    height: 7px;\n    min-width: 7px;\n    border-radius: 50%;\n    background-color: #CED4DA;\n    margin: 0px 4px;\n  }\n"])));
var EmailPreviewContent = exports.EmailPreviewContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 13px 30px;\n\n  > h2 {\n    margin-top: 0px;\n    margin-bottom: 10px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  > div {\n    zoom: 0.4;\n    overflow: auto;\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
});
var SmsPreviewWrapper = exports.SmsPreviewWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  background-color: ", ";\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 212px;\n  padding: 20px 16px 0px 16px;\n"])), function (props) {
  return props.theme.colors.secundaryDarkContrast;
});
var NotificationPreviewWrapper = exports.NotificationPreviewWrapper = (0, _styledComponents.default)(SmsPreviewWrapper)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])));
var NotificationPreviewLayout = exports.NotificationPreviewLayout = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var SmsContentLayoutStyled = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n"])));
var SmsContentLayout = exports.SmsContentLayout = function SmsContentLayout(props) {
  return /*#__PURE__*/_react.default.createElement(SmsContentLayoutStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var NotificationContentHeaderStyled = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 51px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n"])));
var NotificationContentHeader = exports.NotificationContentHeader = function NotificationContentHeader(props) {
  return /*#__PURE__*/_react.default.createElement(NotificationContentHeaderStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var NotificationContent = exports.NotificationContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background-color: #EAE1D8;\n  padding: 9px;\n  height: 145px;\n  max-height: 145px;\n  overflow: auto;\n"])));
var SmsPreviewContentWrapper = exports.SmsPreviewContentWrapper = (0, _styledComponents.default)(NotificationContent)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  width: 100%;\n  padding: 9px;\n  margin-top: 30px;\n  height: 165px;\n  max-height: 165px;\n  overflow: auto;\n"])));
var SmsPreviewContent = exports.SmsPreviewContent = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 10px 0px 0px 0px;\n  background: ", ";\n  border-radius: 7.6px;\n  padding: 10px;\n  height: fit-content;\n\n  > h2 {\n    font-size: 10px;\n    margin-top: 0px;\n    margin-bottom: 5px;\n  }\n  p {\n    font-size: 7px;\n    margin: 0px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.lightGray;
});
var NotificationMessageContent = exports.NotificationMessageContent = (0, _styledComponents.default)(SmsPreviewContent)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  height: fit-content;\n  margin: 20px 0px 0px 0px;\n"])));
var AddNewNotificationButton = exports.AddNewNotificationButton = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  padding-bottom: 15px;\n"])));