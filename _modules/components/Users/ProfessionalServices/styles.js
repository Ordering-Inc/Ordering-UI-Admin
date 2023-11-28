"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeNodeWrapper = exports.SkeletonItem = exports.SkeletonCheckWrapper = exports.SearchWrapper = exports.Divider = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  padding: 35px 20px;\n  width: 100%;\n  position: relative;\n  > h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0px;\n  }\n"])));
var TreeNodeWrapper = exports.TreeNodeWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  "])));
var Divider = exports.Divider = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var SkeletonItem = exports.SkeletonItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n"])));
var SkeletonCheckWrapper = exports.SkeletonCheckWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var SearchWrapper = exports.SearchWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"])));