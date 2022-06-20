"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = exports.PointsWrapper = exports.PointsWalletContainer = exports.LoyaltyLevelContent = exports.LoyaltyLevel = exports.LevelWrapper = exports.EqualWrapper = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 7px;\n  }\n"])));

exports.Container = Container;

var PointsWalletContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 30px;\n"])));

exports.PointsWalletContainer = PointsWalletContainer;

var PointsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 36px;\n    margin: 0px;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n    line-height: 24px;\n  }\n"])));

exports.PointsWrapper = PointsWrapper;

var EqualWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  margin: 0px 30px;\n"])));

exports.EqualWrapper = EqualWrapper;

var LevelWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  > h1 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin-bottom: 25px;\n    margin-top: 0px;\n  }\n  img {\n    object-fit: cover;\n    max-width: 350px;\n    width: 100%;\n  }\n"])));

exports.LevelWrapper = LevelWrapper;

var Tabs = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 1px solid ", ";\n  > div {\n    &:not(:last-child) {\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 32px;\n      "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 32px;\n      "])));
});

exports.Tabs = Tabs;

var Tab = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  padding: 13px 0;\n  position: relative;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: 600;\n    &:after {\n      content: \"\";\n      background: ", ";\n      height: 2px;\n      width: 100%;\n      position: absolute;\n      bottom: -1px;\n      ", "\n    }\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    var _props$theme2;

    return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        right: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        left: 0px;\n      "])));
  });
});

exports.Tab = Tab;

var LoyaltyLevel = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    margin-top: 50px;\n    margin-bottom: 25px;\n  }\n"])));

exports.LoyaltyLevel = LoyaltyLevel;

var LoyaltyLevelContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 359px;\n\n  img {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  h3 {\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 42px;\n    color: ", ";\n    margin-top: 15px;\n    text-align: center;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.LoyaltyLevelContent = LoyaltyLevelContent;