"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessListBottomContainer = exports.AddNewButtonLink = exports.BusinessCardContainer = exports.WrapperPagination = exports.BusinessListTable = exports.BusinessListContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 400px);\n  overflow: auto;\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 300px);\n  }\n"])));

exports.BusinessListContainer = BusinessListContainer;

var BusinessListTable = _styledComponents.default.table(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n  color: ", ";\n  transition: all 0.3s;\n\n  td, th {\n    padding: 10px 0;\n  }\n\n  th {\n    font-size: 14px;\n    color: ", ";\n  }\n\n  th.business,\n  td.business {\n    width: 30%;\n  }\n\n  thead {\n    border-bottom: 1px solid ", ";\n    tr {\n      th {\n        position: sticky;\n        top: 0px;\n        z-index: 100;\n        background: #FFF;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
});

exports.BusinessListTable = BusinessListTable;

var WrapperPagination = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));

exports.WrapperPagination = WrapperPagination;

var BusinessCardContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 20px);\n  ", "\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    transform: translateX(10px);\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    transform: translateX(-10px);\n  "])));
});

exports.BusinessCardContainer = BusinessCardContainer;

var AddNewButtonLink = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: fit-content;\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.AddNewButtonLink = AddNewButtonLink;

var BusinessListBottomContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n"])));

exports.BusinessListBottomContainer = BusinessListBottomContainer;