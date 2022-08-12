"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsRowListContainer = exports.ProductRow = exports.ProductDetailsContainer = exports.HeaderTitleContainer = exports.FreeProductsListContainer = exports.DownloadLinksContainer = exports.DownloadLink = exports.AppImageWrapper = exports.AppHeaderTitle = exports.AppDownloadLinksWrapper = exports.AppDescriptionWarpper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FreeProductsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 25px 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));

exports.FreeProductsListContainer = FreeProductsListContainer;

var HeaderTitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > h1 {\n    font-weight: 700;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px;\n    line-height: 32px;\n  }\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});

exports.HeaderTitleContainer = HeaderTitleContainer;

var ProductDetailsContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 25px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    color: ", ";\n    ", "\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .description {\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n    margin-top: 59px;\n    margin-bottom: 43px;\n    white-space: pre-wrap;\n  }\n"])), function (props) {
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

var ProductsRowListContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  overflow: auto;\n"])));

exports.ProductsRowListContainer = ProductsRowListContainer;

var ProductRow = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  min-width: 600px;\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  padding: 18px 0;\n  ", "\n"])), function (_ref2) {
  var isHeader = _ref2.isHeader;
  return !isHeader && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    border: 1px solid ", ";\n    margin-bottom: 35px;\n    &:hover {\n      background-color: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }, function (props) {
    return props.theme.colors.lightPrimary;
  }, function (_ref3) {
    var active = _ref3.active;
    return active && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      border: 1px solid ", ";\n      background-color: ", ";\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.lightPrimary;
    });
  });
});

exports.ProductRow = ProductRow;

var AppImageWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  min-width: 155px;\n  width: 18%;\n\n  > img {\n    width: 105px;\n    height: 90px;\n    object-fit: contain;\n    margin: 0 auto;\n  }\n"])));

exports.AppImageWrapper = AppImageWrapper;

var AppDescriptionWarpper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  h3 {\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 500;\n    color: ", ";\n    margin: 0;\n  }\n  div {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n    color: ", ";\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (_ref4) {
  var isHeader = _ref4.isHeader;
  return !isHeader && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    height: 72px;\n    ", "\n  "])), function (props) {
    var _props$theme4;

    return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    }) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    });
  });
});

exports.AppDescriptionWarpper = AppDescriptionWarpper;

var AppDownloadLinksWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 145px;\n  padding: 0 24px;\n  justify-content: center;\n\n  > a {\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  ", "\n\n  @media (min-width: 992px) {\n    width: 263px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: initial;\n    > a {\n      &:not(:first-child) {\n        ", "\n      }\n    }\n  }\n"])), function (_ref5) {
  var isHeader = _ref5.isHeader;
  return !isHeader && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    height: 72px;\n    ", "\n  "])), function (props) {
    var _props$theme5;

    return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    }) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    });
  });
}, function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n          margin-right: 23px;\n        "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n          margin-left: 23px;\n        "])));
});

exports.AppDownloadLinksWrapper = AppDownloadLinksWrapper;

var AppHeaderTitle = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  font-weight: 700;\n  color: ", ";\n  line-height: 18px;\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.AppHeaderTitle = AppHeaderTitle;