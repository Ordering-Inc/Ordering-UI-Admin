"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DumyLogo = exports.AddNewBusinessBrandTitle = exports.AddNewBusinessBrandContainer = exports.BusinessBrand = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.Container = Container;

var BusinessBrand = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #E9ECEF;\n  padding: 15px;\n\n  img {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    margin: 0 10px;\n  }\n\n  ", "\n\n  svg.fill {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  span {\n    font-size: 14px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (_ref) {
  var isChecked = _ref.isChecked;
  return !isChecked && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    > svg {\n      color: #B1BCCC;\n      font-size: 22px;\n    }\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});

exports.BusinessBrand = BusinessBrand;

var AddNewBusinessBrandContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n"])));

exports.AddNewBusinessBrandContainer = AddNewBusinessBrandContainer;

var AddNewBusinessBrandTitle = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  padding: 15px;\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.AddNewBusinessBrandTitle = AddNewBusinessBrandTitle;

var DumyLogo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n\n  svg {\n    font-size: 28px;\n    color: #ADB5BD;\n  }\n"])));

exports.DumyLogo = DumyLogo;