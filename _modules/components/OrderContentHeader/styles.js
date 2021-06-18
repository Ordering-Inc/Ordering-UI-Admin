"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchAndFilter = exports.WrapperDeadlineAndSwitch = exports.FilterButton = exports.TopRightSection = exports.HeaderTitle = exports.WrapperHeaderRightSection = exports.HeaderSection = exports.OrderContentHeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderContentHeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 1200px) {\n    flex-direction: column;\n    row-gap: 10px;\n  }\n"])));

exports.OrderContentHeaderContainer = OrderContentHeaderContainer;

var HeaderSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 560px) {\n    flex-direction: column;\n  }\n"])));

exports.HeaderSection = HeaderSection;

var WrapperHeaderRightSection = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (max-width: 1200px) {\n    display: flex;\n  }\n\n  @media (max-width: 560px) {\n    width: 100%;\n    justify-content: space-between;\n  }\n"])));

exports.WrapperHeaderRightSection = WrapperHeaderRightSection;

var HeaderTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 32px;\n  font-weight: 500;\n  margin: 0px;\n  text-transform: capitalize;\n\n  @media (max-width: 560px) {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.textBlackContrast;
});

exports.HeaderTitle = HeaderTitle;

var TopRightSection = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    justify-content: flex-end;\n  }\n"])));

exports.TopRightSection = TopRightSection;

var FilterButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  margin-right: 40px;\n  margin-left: 10px;\n  font-size: 24px;\n  padding: 0px;\n  color: #1C202E;\n\n  &:active {\n    opacity: 0.5;\n  }\n\n  @media (max-width: 1400px) {\n    margin-right: 10px;\n  }\n"])));

exports.FilterButton = FilterButton;

var WrapperDeadlineAndSwitch = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 1200px) {\n    display: none;\n  }\n"])));

exports.WrapperDeadlineAndSwitch = WrapperDeadlineAndSwitch;

var WrapperSearchAndFilter = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n"])));

exports.WrapperSearchAndFilter = WrapperSearchAndFilter;