"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWrapper = exports.SingleEditConditionContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SingleEditConditionContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 5px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n\n  > button {\n    height: 44px;\n  }\n"])));

exports.SingleEditConditionContainer = SingleEditConditionContainer;

var InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 45px 0;\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n"])));

exports.InputWrapper = InputWrapper;