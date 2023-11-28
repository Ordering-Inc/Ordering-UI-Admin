"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperExportButton = exports.PopoverContainer = exports.Item = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperExportButton = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n"])));
exports.WrapperExportButton = WrapperExportButton;
var PopoverContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0px;\n  margin-top: 5px;\n  padding: 5px 0;\n  background: ", ";\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.PopoverContainer = PopoverContainer;
var Item = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 3px 20px;\n  white-space: nowrap;\n  cursor: pointer;\n  &:hover {\n    background-color: #F2F2F2;\n  }\n"])));
exports.Item = Item;