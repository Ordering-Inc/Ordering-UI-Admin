"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.TitleNumber = exports.TitleHeader = exports.TitleContent = exports.SubjectTitle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var TitleWrapper = exports.TitleWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n"])));
var TitleNumber = exports.TitleNumber = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 0;\n"])));
var TitleHeader = exports.TitleHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  font-weight: 600;\n"])));
var TitleContent = exports.TitleContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var SubjectTitle = exports.SubjectTitle = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 24px;\n"])));