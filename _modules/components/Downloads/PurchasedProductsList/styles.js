"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsTableWrapper = exports.ProductsTable = exports.ProductsListContainer = exports.ProductTboday = exports.ProductDetailsContainer = exports.HeaderTitleContainer = exports.DownloadLinksContainer = exports.DownloadLink = exports.ButtonWrapper = exports.AppImageWrapper = exports.AppHeaderTitle = exports.AppDescriptionWarpper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));

exports.ProductsListContainer = ProductsListContainer;

var HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});

exports.HeaderTitleContainer = HeaderTitleContainer;

var ProductDetailsContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 25px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    color: ", ";\n    ", "\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n    margin-top: 59px;\n    margin-bottom: 43px;\n    white-space: pre-wrap;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 40px;\n    "])));
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.ProductDetailsContainer = ProductDetailsContainer;

var DownloadLink = _styledComponents.default.a(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  img {\n    width: 95px;\n    height: 28px;\n    object-fit: cover;\n  }\n\n  ", "\n"])), function (_ref) {
  var isSingle = _ref.isSingle;
  return isSingle && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin: 0 auto;\n  "])));
});

exports.DownloadLink = DownloadLink;

var DownloadLinksContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n\n  > a {\n    &:not(:first-child) {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-right: 24px;\n      "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: 24px;\n      "])));
});

exports.DownloadLinksContainer = DownloadLinksContainer;

var AppImageWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  min-width: 155px;\n\n  > img {\n    width: 105px;\n    height: 90px;\n    object-fit: contain;\n    margin: 0 auto;\n  }\n"])));

exports.AppImageWrapper = AppImageWrapper;

var AppDescriptionWarpper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  h3 {\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 500;\n    color: ", ";\n    margin: 0;\n  }\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n    color: ", ";\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (_ref2) {
  var isHeader = _ref2.isHeader;
  return !isHeader && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    height: 72px;\n    ", "\n  "])), function (props) {
    var _props$theme4;

    return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    }) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    });
  });
});

exports.AppDescriptionWarpper = AppDescriptionWarpper;

var ProductsTableWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  overflow: auto;\n  margin-bottom: 30px;\n"])));

exports.ProductsTableWrapper = ProductsTableWrapper;

var ProductsTable = _styledComponents.default.table(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  min-width: 700px;\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 35px;\n"])));

exports.ProductsTable = ProductsTable;

var ProductTboday = _styledComponents.default.tbody(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  &:hover {\n    td {\n      background-color: ", ";\n    }\n  }\n\n  tr {\n    > td {\n      padding: 16px 0;\n      border-top: 1px solid ", ";\n      border-bottom: 1px solid ", ";\n\n      &:first-child {\n        width: 18%;\n        min-width: 155px;\n  \n        ", "\n      }\n      &:last-child {\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n          border-top-right-radius: 8px;\n          border-bottom-right-radius: 8px;\n          border-right: 1px solid ", ";\n        "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n          border-top-left-radius: 8px;\n          border-bottom-left-radius: 8px;\n          border-left: 1px solid ", ";\n        "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n          border-top-left-radius: 8px;\n          border-bottom-left-radius: 8px;\n          border-left: 1px solid ", ";\n        "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n          border-top-right-radius: 8px;\n          border-bottom-right-radius: 8px;\n          border-right: 1px solid ", ";\n        "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.ProductTboday = ProductTboday;

var AppHeaderTitle = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  font-weight: 700;\n  color: ", ";\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 16px;\n    height: 16px;\n    object-fit: contain;\n    ", "\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme7;

  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      margin-left: 6px;\n    "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-right: 6px;\n    "])));
}, function (_ref3) {
  var isCenter = _ref3.isCenter;
  return isCenter && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    justify-content: center;\n  "])));
});

exports.AppHeaderTitle = AppHeaderTitle;

var ButtonWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 24px;\n  ", "\n\n  button {\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme8;

  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    border-right: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    border-left: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.ButtonWrapper = ButtonWrapper;