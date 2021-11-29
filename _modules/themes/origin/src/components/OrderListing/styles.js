"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOrderListContent = exports.WrapperNoneOrders = exports.WrapSkeltonCell = exports.SkeletonText = exports.SkeletonOrder = exports.SkeletonCell = exports.SkeletonCard = exports.SkeletonBlock = exports.OrderStatusTitle = exports.InnerOrderListContent = exports.InnerNoneOrdersContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperNoneOrders = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    overflow: auto;\n\n    img {\n        width: 250px;\n    }\n\n    ", "    \n"])), function (_ref) {
  var small = _ref.small;
  return small && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        img {\n            width: 150px;\n        }\n    "])));
});

exports.WrapperNoneOrders = WrapperNoneOrders;

var InnerNoneOrdersContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n"])));

exports.InnerNoneOrdersContainer = InnerNoneOrdersContainer;

var OrderStatusTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    font-size: 20px;\n    color: ", ";\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-weight: 500;\n    padding: 0 5px;\n\n    .rotate {\n        transform: rotate(-90deg);\n    }\n    .collapse_icon {\n        transition: transform 0.3s ease;\n        padding: 5px;\n        cursor: pointer;\n    }\n"])), function (_ref2) {
  var _theme$colors;

  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.textBlackContrast) || '#000';
});

exports.OrderStatusTitle = OrderStatusTitle;

var SkeletonOrder = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    width: auto;\n    margin: 0 auto;\n"])));

exports.SkeletonOrder = SkeletonOrder;

var SkeletonCard = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n    padding: 15px 10px;\n    box-shadow: 0px 0px 3px #00000029;\n    border-radius: 6px;\n    ", "\n    align-items: flex-start;\n\n    & > div {\n        &:first-child {\n            padding-top: 40px;\n        }\n    }\n"])), function (_ref3) {
  var small = _ref3.small;
  return small && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      flex-direction: column;\n      margin-bottom: 0px;\n    "])));
});

exports.SkeletonCard = SkeletonCard;

var SkeletonCell = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    column-gap: 5px\n"])));

exports.SkeletonCell = SkeletonCell;

var SkeletonBlock = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n"])));

exports.SkeletonBlock = SkeletonBlock;

var SkeletonText = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    text-align: left\n    ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        text-align: right;\n    "])));
});

exports.SkeletonText = SkeletonText;

var InnerOrderListContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding: 5px;\n    margin-bottom: 40px;\n\n    ", "\n"])), function (_ref4) {
  var small = _ref4.small;
  return small && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        overflow: initial;\n        max-height: initial;\n    "])));
});

exports.InnerOrderListContent = InnerOrderListContent;

var WrapperOrderListContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n"])));

exports.WrapperOrderListContent = WrapperOrderListContent;

var WrapSkeltonCell = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    align-items: flex-start;\n"])));

exports.WrapSkeltonCell = WrapSkeltonCell;