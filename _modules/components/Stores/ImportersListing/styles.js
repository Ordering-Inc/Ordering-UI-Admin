"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.NotFoundWrapper = exports.NewImporterWrapper = exports.ImportersListingContainer = exports.ImportersList = exports.ImportCSVForm = exports.Header = exports.ButtonAddNewImporter = exports.ActionButtons = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImportersListingContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n"])));

exports.ImportersListingContainer = ImportersListingContainer;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 94%;\n  justify-content: space-between;\n  margin-right: auto;\n  margin-bottom: 60px;\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: unset;\n    margin-left: auto;\n "])));
});

exports.Header = Header;

var Title = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: rgb(52, 64, 80);\n  font-size: 24px;\n  margin: 0px 10px 0px 0px;\n  font-weight: 600;\n"])));

exports.Title = Title;

var ActionButtons = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n\n  button {\n    height: 41px;\n    width: 90px;\n    white-space: nowrap;\n    ", "\n    \n    svg {\n      ", "      \n    }\n\n    @media (min-width: 768px) {\n      width: unset;\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 8px;\n      "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: 8px;\n      "])));
});

exports.ActionButtons = ActionButtons;

var NewImporterWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  height: 100%;\n  overflow-y: scroll;\n  padding: 35px 20px 20px;\n  box-sizing: border-box;\n  right: 0;\n  border-left: 1px solid ", ";\n  background-color: #fff;\n  ", "\n  @media (min-width: 768px) {\n    width: 500px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    right: unset;\n    left: 0;\n    border-left: none;\n    border-right: 1px solid ", ";\n "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.NewImporterWrapper = NewImporterWrapper;

var ImportersList = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n\n"])));

exports.ImportersList = ImportersList;

var NotFoundWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  #not-found-source {\n    height: auto;\n    h1 {\n      font-size: 18px;\n      margin-top: 25px;\n    }\n  }\n"])));

exports.NotFoundWrapper = NotFoundWrapper;

var ButtonAddNewImporter = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: fit-content;\n  cursor: pointer;\n  color: rgb(144, 155, 169);\n  font-size: 14px;\n  margin-top: 20px;\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.05, props.theme.colors.primary);
});

exports.ButtonAddNewImporter = ButtonAddNewImporter;

var ImportCSVForm = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    position: fixed;\n    width: 500px;\n    height: 100%;\n    right: 0;\n    top: 0;\n    background: #fff;\n"])));

exports.ImportCSVForm = ImportCSVForm;