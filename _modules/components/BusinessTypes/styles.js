"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewBusinessTypeTitle = exports.AddNewBusinessTypeContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.Container = Container;

var AddNewBusinessTypeContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

exports.AddNewBusinessTypeContainer = AddNewBusinessTypeContainer;

var AddNewBusinessTypeTitle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  padding: 15px;\n"])), function (props) {
  return props.theme.colors.lightGray;
});

exports.AddNewBusinessTypeTitle = AddNewBusinessTypeTitle;