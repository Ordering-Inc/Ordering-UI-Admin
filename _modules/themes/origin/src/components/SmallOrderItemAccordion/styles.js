"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOrderStatus = exports.WrapperInfo = exports.WrapperDriverSelector = exports.WrapperAccordionImage = exports.WrapIndicator = exports.UnreadMessageIndicator = exports.TimeAgo = exports.OrderLabelItem = exports.OrderItemContainer = exports.MoreDetailsButton = exports.DriverInfo = exports.DeliveryType = exports.DeliveryName = exports.DeliveryInfo = exports.DeliveryIcon = exports.CustomerInfo = exports.CustomerContent = exports.BusinessInfo = exports.BusinessContent = exports.AccordionImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderItemContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-left: 5px solid;\n  border-color: ", ";\n  padding: 10px;\n  border-bottom: 1px solid #F2F2F2;\n  width: 100%;\n  box-sizing: border-box;\n  cursor: pointer;\n  ", "\n  ", "\n\n  ", "\n"])), function (_ref) {
  var filterColor = _ref.filterColor;
  return filterColor || '#0E9B55';
}, function (_ref2) {
  var deliveryUI = _ref2.deliveryUI;
  return deliveryUI && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (_ref3) {
    var deliveryUIActive = _ref3.deliveryUIActive;
    return deliveryUIActive && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background: #e8e8e8;\n    "])));
  });
}, function (_ref4) {
  var messageUI = _ref4.messageUI;
  return messageUI && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (_ref5) {
    var messageUIActive = _ref5.messageUIActive;
    return messageUIActive && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      background: #e8e8e8;\n    "])));
  });
}, function (_ref6) {
  var isOrdersListView = _ref6.isOrdersListView;
  return isOrdersListView && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: initial;\n  "])));
});

exports.OrderItemContainer = OrderItemContainer;

var WrapperInfo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0px;\n\n  ", "\n"])), function (_ref7) {
  var border = _ref7.border;
  return border && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #F2F2F2;\n    border-top: 1px solid #F2F2F2;\n    margin: 5px 0;\n    padding: 10px 0;\n  "])));
});

exports.WrapperInfo = WrapperInfo;

var WrapperAccordionImage = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-width: 50px;\n  max-height: 50px;\n  height: 50px;\n  width: 50px;\n  border: 1px solid #e3e3e3;\n  border-radius: 5px;\n  margin: 0px;\n\n  ", "\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 3px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])), function (_ref8) {
  var small = _ref8.small;
  return small && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    width: 25px;\n    height: 25px;\n    border-radius: 5px;\n  "])));
});

exports.WrapperAccordionImage = WrapperAccordionImage;

var AccordionImageStyled = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 5px;\n"])));

var AccordionImage = function AccordionImage(props) {
  return /*#__PURE__*/_react.default.createElement(AccordionImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.AccordionImage = AccordionImage;

var BusinessInfo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 8px;\n"])));

exports.BusinessInfo = BusinessInfo;

var BusinessContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  h1 {\n    color: #000000;\n    font-size: 14px;\n    margin: 0px;\n    line-height: 13px;\n  }\n  p {\n    color: #000000;\n    font-size: 12px;\n    margin: 0px;\n    max-width: 90px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"])));

exports.BusinessContent = BusinessContent;

var DeliveryInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    color: #343434;\n    font-size: 12px;\n    margin: 0px;\n  }\n"])));

exports.DeliveryInfo = DeliveryInfo;

var DeliveryType = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  justify-content: flex-end;\n"])));

exports.DeliveryType = DeliveryType;

var DeliveryIcon = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  display: flex;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"])));

exports.DeliveryIcon = DeliveryIcon;

var DeliveryName = _styledComponents.default.p(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin: 0px;\n  color: #343434;\n  font-size: 12px;\n"])));

exports.DeliveryName = DeliveryName;

var CustomerInfo = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 8px;\n  border: 1px solid;\n  border-color: #1c202e;\n  border-radius: 28px;\n  align-items: center;\n  padding: 5px 10px;\n  width: 48%;\n  box-sizing: border-box;\n"])));

exports.CustomerInfo = CustomerInfo;

var DriverInfo = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 8px;\n  width: 48%;\n  font-size: 11px;\n  box-sizing: border-box;\n\n  > div {\n    width: 100%;\n  }\n"])));

exports.DriverInfo = DriverInfo;

var CustomerContent = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  p {\n    color: #000;\n    margin: 0px;\n    white-space: nowrap;\n    max-width: 80px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    &:first-child {\n      font-size: 11px;\n      font-weight: 500;\n    }\n    &:last-child {\n      font-size: 8px;\n    }\n  }\n"])));

exports.CustomerContent = CustomerContent;

var WrapperOrderStatus = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  padding-top: 10px;\n  > div {\n    width: 100%;\n    border-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.WrapperOrderStatus = WrapperOrderStatus;

var WrapperDriverSelector = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  > div {\n    width: 100%;\n    > div {\n      padding: 0 10px;\n    }\n  }\n"])));

exports.WrapperDriverSelector = WrapperDriverSelector;

var UnreadMessageIndicator = _styledComponents.default.span(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: #fff;\n  padding: 0px 3px;\n  border-radius: 12px;\n  min-width: 12px;\n  font-size: 12px;\n  text-align: center;\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.UnreadMessageIndicator = UnreadMessageIndicator;

var OrderLabelItem = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 5px;\n  font-size: 12px;\n"])));

exports.OrderLabelItem = OrderLabelItem;

var MoreDetailsButton = _styledComponents.default.p(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: ", " !important;\n  text-decoration: underline;\n  cursor: pointer;\n  font-weight: 600;\n\n  &:hover {\n    color: ", " !important;\n  }\n"])), function (props) {
  return props.theme.colors.btnDarkBlue;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.btnDarkBlue);
});

exports.MoreDetailsButton = MoreDetailsButton;

var TimeAgo = _styledComponents.default.p(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  text-align: right;\n"])));

exports.TimeAgo = TimeAgo;

var WrapIndicator = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"])));

exports.WrapIndicator = WrapIndicator;