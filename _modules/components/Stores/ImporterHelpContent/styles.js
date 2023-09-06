"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.TitleNumber = exports.TitleHeader = exports.TitleContent = exports.SubjectTitle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TitleWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n"])));
exports.TitleWrapper = TitleWrapper;
var TitleNumber = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 0;\n"])));
exports.TitleNumber = TitleNumber;
var TitleHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  font-weight: 600;\n"])));
exports.TitleHeader = TitleHeader;
var TitleContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.TitleContent = TitleContent;
var SubjectTitle = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 24px;\n"])));
exports.SubjectTitle = SubjectTitle;