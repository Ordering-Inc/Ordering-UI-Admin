"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBarWrapper = exports.ProductListWrapper = exports.ProductItem = exports.MenuProductsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  height: calc(100% - 50px);\n"])));

exports.MenuProductsContainer = MenuProductsContainer;

var SearchBarWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n"])));

exports.SearchBarWrapper = SearchBarWrapper;

var ProductListWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: calc(100% - 100px);\n  overflow: auto;\n"])));

exports.ProductListWrapper = ProductListWrapper;

var ProductItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 14px 0;\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  span {\n    font-size: 14px;\n    flex: 1;\n  }\n\n  > svg {\n    color: ", ";\n    font-size: 13px;\n    margin: 0 3px;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var isBorderTop = _ref.isBorderTop;
  return isBorderTop && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    input {\n      margin-left: 20px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    input {\n      margin-right: 20px;\n    }\n  "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.lightPrimary;
  });
});

exports.ProductItem = ProductItem;