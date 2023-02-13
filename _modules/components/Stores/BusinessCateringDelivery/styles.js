"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchContainer = exports.Section = exports.InputContainer = exports.CheckboxContainer = exports.CateringContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CateringContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h1{\n    margin: 10px 0px;\n    font-size: 16px;\n  }\n  p {\n    margin-bottom: 0;\n    font-size: 14px;\n  }\n"])));
exports.CateringContainer = CateringContainer;
var SwitchContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  p {\n    margin-right: 20px;\n  }\n  label {\n    margin-top: 3px;\n  }\n"])));
exports.SwitchContainer = SwitchContainer;
var Section = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])));
exports.Section = Section;
var InputContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  input {\n    text-align: center;\n    width: 80px;\n    margin-right: 10px;\n  }\n\n  p {\n    margin-right: 20px;\n  }\n"])));
exports.InputContainer = InputContainer;
var CheckboxContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  p{\n    margin-left: 20px;\n  }\n"])));
exports.CheckboxContainer = CheckboxContainer;