"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchAndFilter = exports.WrapperHeaderRightSection = exports.WrapperDeadlineAndSwitch = exports.TopRightSection = exports.OrderContentHeaderContainer = exports.HeaderTitle = exports.HeaderSection = exports.FilterButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var OrderContentHeaderContainer = exports.OrderContentHeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 1200px) {\n    flex-direction: column;\n    row-gap: 10px;\n  }\n"])));
var HeaderSection = exports.HeaderSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 560px) {\n    flex-direction: column;\n  }\n"])));
var WrapperHeaderRightSection = exports.WrapperHeaderRightSection = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (max-width: 1200px) {\n    display: flex;\n  }\n\n  @media (max-width: 560px) {\n    width: 100%;\n    justify-content: space-between;\n  }\n"])));
var HeaderTitle = exports.HeaderTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 32px;\n  font-weight: 500;\n  margin: 0px;\n  text-transform: capitalize;\n\n  @media (max-width: 560px) {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.textBlackContrast;
});
var TopRightSection = exports.TopRightSection = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    justify-content: flex-end;\n  }\n"])));
var FilterButton = exports.FilterButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  margin-right: 40px;\n  margin-left: 10px;\n  font-size: 24px;\n  padding: 0px;\n  color: #1C202E;\n\n  &:active {\n    opacity: 0.5;\n  }\n\n  @media (max-width: 1400px) {\n    margin-right: 10px;\n  }\n"])));
var WrapperDeadlineAndSwitch = exports.WrapperDeadlineAndSwitch = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    display: none;\n  }\n"])));
var WrapperSearchAndFilter = exports.WrapperSearchAndFilter = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n"])));