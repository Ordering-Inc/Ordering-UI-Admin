"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationTableContainer = exports.TranslationTable = exports.TransBottomContainer = exports.TableHeader = exports.TableBody = exports.AddNewTransButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TranslationTableContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.TranslationTableContainer = TranslationTableContainer;
var TranslationTable = _styledComponents.default.table(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: 800px;\n  overflow: auto;\n"])));
exports.TranslationTable = TranslationTable;
var TableHeader = _styledComponents.default.thead(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  th {\n    padding: 10px 0;\n    font-size: 12px;\n    font-weight: bold;\n    width: 50%;\n    &:first-child {\n      ", "\n    }\n\n    &:last-child {\n      padding-left: 25px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        padding-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding-right: 20px;\n      "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding-right: 25px;\n        padding-left: 0;\n      "])));
});
exports.TableHeader = TableHeader;
var TableBody = _styledComponents.default.tbody(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  td {\n    padding: 7px 0;\n    font-size: 12px;\n    width: 50%;\n\n    &:first-child {\n      ", "\n      > input {\n        border: none;\n        padding: 10px 0;\n      }\n    }\n\n    > input {\n      border: none;\n      width: 100%;\n      padding: 10px 0;\n      outline: none;\n\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        padding-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        padding-right: 20px;\n      "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        padding-right: 25px;\n        border-right: 1px solid ", ";\n      "])), function (props) {
    var _props$theme5;
    return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        padding-left: 25px;\n        border-left: 1px solid ", ";\n      "])), function (props) {
    var _props$theme6;
    return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.borderColor;
  });
});
exports.TableBody = TableBody;
var TransBottomContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  margin: 15px 0 38px 0;\n"])));
exports.TransBottomContainer = TransBottomContainer;
var AddNewTransButton = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 12px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.AddNewTransButton = AddNewTransButton;