"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.FeaturedWrapper = exports.CheckBoxWrapper = exports.BusinessListTable = exports.BusinessListContainer = exports.BusinessListBottomContainer = exports.BusinessIdWrapper = exports.BusinessCardContainer = exports.AddNewButtonLink = exports.AddFirstStoreContainer = exports.ActionWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 330px);\n  overflow: auto;\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 320px);\n  }\n"])));
exports.BusinessListContainer = BusinessListContainer;
var BusinessListTable = _styledComponents.default.table(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 650px;\n  color: ", ";\n  transition: all 0.3s;\n\n  td, th {\n    padding: 10px 0;\n  }\n\n  th {\n    font-size: 14px;\n    color: ", ";\n  }\n\n  th.business,\n  td.business {\n    width: 35%;\n  }\n\n  th.action {\n    width: 10%;\n  }\n\n  td.business-id {\n    font-size: 13px;\n    font-weight: 500;\n  }\n\n  thead {\n    border-bottom: 1px solid ", ";\n    tr {\n      th {\n        position: sticky;\n        top: 0px;\n        z-index: 100;\n        background: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme$colors2;
  return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
});
exports.BusinessListTable = BusinessListTable;
var WrapperPagination = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));
exports.WrapperPagination = WrapperPagination;
var BusinessCardContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 20px);\n  ", "\n  max-height: calc(100vh - 210px);\n  overflow: auto;\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    transform: translateX(10px);\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    transform: translateX(-10px);\n  "])));
});
exports.BusinessCardContainer = BusinessCardContainer;
var AddNewButtonLink = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: fit-content;\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.AddNewButtonLink = AddNewButtonLink;
var BusinessListBottomContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n"])));
exports.BusinessListBottomContainer = BusinessListBottomContainer;
var AddFirstStoreContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 0 20px 0;\n\n  > img {\n    width: 200px;\n    margin-bottom: 12px;\n  }\n\n  > button {\n    height: 44px;\n  }\n\n  @media (min-width: 768px) {\n    > img {\n      width: 370px;\n    }\n  }\n"])));
exports.AddFirstStoreContainer = AddFirstStoreContainer;
var CheckBoxWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  ", "\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref) {
  var isChecked = _ref.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors3;
    return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.primary;
  });
});
exports.CheckBoxWrapper = CheckBoxWrapper;
var BusinessIdWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
exports.BusinessIdWrapper = BusinessIdWrapper;
var ActionWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  > label {\n    margin-left: 5px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0px;\n    "])));
});
exports.ActionWrapper = ActionWrapper;
var FeaturedWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  label {\n    margin-right: 5px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 5px;\n    "])));
});
exports.FeaturedWrapper = FeaturedWrapper;