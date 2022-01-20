"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainer = exports.SkeletonCard = exports.OverViewTitle = exports.OverViewStatusValue = exports.OverViewStatusTitle = exports.OverViewItemContent = exports.OverViewItem = exports.OverViewContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OverViewContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 140px;\n  right: 0px;\n  top: 68px;\n  min-height: calc(100vh - 68px);\n  background-color: ", ";\n  padding: 0px 15px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  z-index: 100;\n  \n  @media (max-width: 1400px) {\n    right: -140px;\n    box-shadow: -2px 2px 5px #00000029;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});

exports.OverViewContainer = OverViewContainer;

var OverViewTitle = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  text-transform: capitalize;\n  font-size: 15px;\n  padding: 30px 0;\n  margin: 0px;\n"])), function (_ref2) {
  var _theme$colors;

  var theme = _ref2.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.textBlack;
});

exports.OverViewTitle = OverViewTitle;

var OverViewItemContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 45px;\n"])));

exports.OverViewItemContent = OverViewItemContent;

var OverViewItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n"])));

exports.OverViewItem = OverViewItem;

var OverViewStatusTitle = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n  text-transform: capitalize;\n  font-weight: 500;\n  margin: 0px;\n"])), function (_ref3) {
  var _theme$colors2;

  var theme = _ref3.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.textBlackContrast;
});

exports.OverViewStatusTitle = OverViewStatusTitle;

var OverViewStatusValue = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0px;\n"])), function (_ref4) {
  var _theme$colors3;

  var theme = _ref4.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.textBlack;
});

exports.OverViewStatusValue = OverViewStatusValue;

var SkeletonContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  > span {\n    margin: 30px 0;\n  }\n\n  > div {\n    margin-bottom: 30px;\n  }\n"])));

exports.SkeletonContainer = SkeletonContainer;

var SkeletonCard = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.SkeletonCard = SkeletonCard;