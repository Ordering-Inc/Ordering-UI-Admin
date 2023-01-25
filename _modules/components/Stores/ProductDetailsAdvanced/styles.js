"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRow = exports.WeightWrapper = exports.TypeSelectWrapper = exports.PropertyOptionWrapper = exports.PropertyOption = exports.PropertiesContainer = exports.PricePerUnit = exports.OptionCenter = exports.Option = exports.LabelCustom = exports.InputContainer = exports.FieldRow = exports.EditTaxContainer = exports.ButtonGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PropertiesContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  label:first-child{\n    margin-top: 0;\n  }\n\n  > input {\n    width: 100%;\n  }\n\n  > button {\n    height: 44px;\n    margin-top: 30px;\n  }\n"])));
exports.PropertiesContainer = PropertiesContainer;
var PropertyOption = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  max-width: 300px;\n\n  label:first-child {\n    margin: 0;\n    font-size: 14px;\n    width: calc(100% - 50px);\n  }\n"])));
exports.PropertyOption = PropertyOption;
var TypeSelectWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  > div {\n    max-width: 100%;\n    min-width: 100%;\n    padding: 3.5px 15px;\n  }\n"])));
exports.TypeSelectWrapper = TypeSelectWrapper;
var Option = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  /* white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 95%; */\n  ", "\n  ", "\n"])), function (_ref) {
  var padding = _ref.padding;
  return padding && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding: 5px 0;\n  "])));
}, function (_ref2) {
  var isWeight = _ref2.isWeight;
  return isWeight && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    font-weight: 600;\n  "])));
});
exports.Option = Option;
var OptionCenter = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  font-size: 16px;\n  font-weight: 600;\n  ", "\n  ", "\n"])), function (_ref3) {
  var padding = _ref3.padding;
  return padding && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 5px 0;\n  "])));
}, function (_ref4) {
  var isWeight = _ref4.isWeight;
  return isWeight && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    font-weight: 600;\n  "])));
});
exports.OptionCenter = OptionCenter;
var LabelCustom = _styledComponents.default.label(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  margin-bottom: 10px;\n  font-size: 14px;\n"])));
exports.LabelCustom = LabelCustom;
var ButtonGroup = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "])));
});
exports.ButtonGroup = ButtonGroup;
var EditTaxContainer = _styledComponents.default.form(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  & > div {\n    width: 48%;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n    & > div {\n      width: 100%;\n    }\n  }\n"])));
exports.EditTaxContainer = EditTaxContainer;
var WrapperRow = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100% !important;\n  flex-direction: column;\n  justify-content: space-between;\n\n  & > div {\n    width: 100%;\n    height: 100px;\n    margin-bottom: 20px;\n    border: none;\n  }\n\n  .date-filter-container {\n    z-index: 100;\n  }\n\n  > input {\n    width: 100%;\n    height: 57px;\n    margin-bottom: 20px;\n    padding: 10px 25px;\n    box-sizing: border-box;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    -moz-appearance: textfield;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    & > div {\n      width: 48%;\n    }\n\n    > input {\n      width: 48%;\n    }\n  }\n"])));
exports.WrapperRow = WrapperRow;
var FieldRow = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  label:first-child{\n    margin-top: 30px;\n  }\n  > div {\n    width: 100%;\n    padding: 0px;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    > div {\n      width: 48%;\n    }\n    ", "\n  }\n"])), function (_ref5) {
  var fullWidth = _ref5.fullWidth;
  return fullWidth && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      > div {\n        width: 100%;\n      }\n    "])));
});
exports.FieldRow = FieldRow;
var InputContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  padding: 0 10px;\n\n  &.growUnset {\n    flex-grow: unset;\n  }\n\n  &.showWeight {\n    width: 40%;\n  }\n"])));
exports.InputContainer = InputContainer;
var WeightWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  input {\n    width: 55%;\n  }\n\n  .select {\n    width: 40%;\n    padding-top: 3.5px;\n    font-size: 14px;\n\n    .list {\n      padding-top: 7px;\n      padding-bottom: 7px;\n      margin-bottom: 10px;\n    }\n  }\n"])));
exports.WeightWrapper = WeightWrapper;
var PropertyOptionWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: block;\n  margin-top: 30px;\n"])));
exports.PropertyOptionWrapper = PropertyOptionWrapper;
var PricePerUnit = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  label {\n    font-size: 14px;\n    margin: 0;\n    margin-right: 15px;\n    ", "\n  }\n  \n  .select {\n    font-size: 14px;\n    padding: 3.5px;\n    .list {\n      padding-top: 7px;\n      padding-bottom: 7px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-right: 0;\n    margin-left: 15px;\n    "])));
});
exports.PricePerUnit = PricePerUnit;