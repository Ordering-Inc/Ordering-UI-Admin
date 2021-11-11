"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableContainer = exports.ActionSelectorWrapper = exports.CategoryEnableWrapper = exports.CategoryActionContainer = exports.CategoryContent = exports.SingleCategoryContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SingleCategoryContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 7.5px;\n  margin-bottom: 15px;\n  transition: all 0.3s;\n  cursor: pointer;\n  height: 75px;\n\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  .img-section {\n    min-width: 41px !important;\n    min-height: 41px !important;\n  }\n"])), function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid ", ";\n    box-sizing: border-box;\n    .actions-btn {\n      display: block;\n    }\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var isAccept = _ref2.isAccept;
  return isAccept && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.SingleCategoryContainer = SingleCategoryContainer;

var CategoryContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  color: ", ";\n  ", "\n  input {\n    width: 100%;\n    outline: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 12px;\n    border-radius: 3px;\n    transition: all 0.3s;\n    border: 1px solid transparent;\n    padding: 2px 5px;\n    color: ", ";\n    &:focus {\n      background-color: #FFF;\n      border: 1px solid ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.CategoryContent = CategoryContent;

var CategoryActionContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 4px;\n  > div:first-child {\n    padding: 0 5px;\n  }\n"])));

exports.CategoryActionContainer = CategoryActionContainer;

var CategoryEnableWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n    color: ", ";\n    font-size: 12px;\n    margin: 0px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});

exports.CategoryEnableWrapper = CategoryEnableWrapper;

var ActionSelectorWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  height: 26px;\n  button {\n    background: transparent !important;\n    border: none;\n    padding: 0px;\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n    }\n    &:after {\n      display: none;\n    }\n  }\n\n  .show {\n    button {\n      background: #F8F9FA !important;\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    > div {\n      border: 1px solid #E9ECEF;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    border-radius: 8px;\n    > div {\n      a:last-child {\n        color: #E63757;\n      }\n    }\n  }\n\n  .dropdown-item {\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.ActionSelectorWrapper = ActionSelectorWrapper;

var DraggableContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > img {\n    ", "\n\n    &:hover {\n      cursor: grab;\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});

exports.DraggableContainer = DraggableContainer;