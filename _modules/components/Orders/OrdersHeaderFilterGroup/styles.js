"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRow = exports.Option = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperRow = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100% !important;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-top: 10px;\n  padding-bottom: 0px;\n\n  & > div {\n    width: 100%;\n    height: 47px;\n    max-width: 1000px;\n    margin-right: 10px;\n    margin-bottom: 20px;\n    background-color: ", ";\n    border: none;\n    font-size: 14px;\n    border-radius: 8px;\n    > div:first-child {\n      height: 100%;\n    }\n  }\n\n  .order-status-multi-select {\n    p {\n      padding: 0;\n      color: ", " !important;\n    }\n  }\n\n  .date-filter-container {\n    z-index: 100;\n  }\n\n  input {\n    width: 100%;\n    height: 47px;\n    padding: 10px 25px;\n    box-sizing: border-box;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    -moz-appearance: textfield;\n  }\n\n  .close {\n    right: 8px;\n  }\n\n  .external_id {\n    @media (max-width: 1200px) {\n    flex: auto;\n  }\n\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var wrapperWidth = _ref.wrapperWidth,
    isSelectedOrders = _ref.isSelectedOrders;
  return wrapperWidth < 992 && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      flex-direction: column !important;\n      padding: ", ";\n  "])), !isSelectedOrders && '15px 10px 0 10px');
});
exports.WrapperRow = WrapperRow;
var Option = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  padding: 5px;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.Option = Option;