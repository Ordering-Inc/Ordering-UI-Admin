"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeleton = exports.WrapperDriverAvailable = exports.SkeletonCell = exports.SkeletonCard = exports.SkeletonBlock = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperDriverAvailable = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px;\n\n  button {\n    width: 100%;\n    padding: 2px 15px;\n    display: flex;\n    column-gap: 10px;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      color: #fff;\n    }\n  }\n"])));

exports.WrapperDriverAvailable = WrapperDriverAvailable;

var WrapperSkeleton = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.WrapperSkeleton = WrapperSkeleton;

var SkeletonCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n  padding: 15px;\n  box-sizing: border-box;\n  column-gap: 10px;\n\n  > div {\n    &: last-child {\n      flex: 1;\n    }\n  }\n"])));

exports.SkeletonCard = SkeletonCard;

var SkeletonCell = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.SkeletonCell = SkeletonCell;

var SkeletonBlock = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));

exports.SkeletonBlock = SkeletonBlock;