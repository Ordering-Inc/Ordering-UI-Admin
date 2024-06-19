"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitle = exports.SectionContainer = exports.ScheduleInnerContainer = exports.ScheduleContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ScheduleContainer = exports.ScheduleContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > button {\n    margin: 30px 0 20px;\n    height: 44px;\n  }\n"])));
var ScheduleInnerContainer = exports.ScheduleInnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n"])));
var SectionContainer = exports.SectionContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  padding-top: 10px;\n"])));
var SubTitle = exports.SubTitle = _styledComponents.default.h3(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0px;\n  padding-bottom: 6px;\n"])));