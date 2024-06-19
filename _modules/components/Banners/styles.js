"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Content = exports.Container = exports.ButtonWrap = exports.Banner = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n"])));
var Banner = exports.Banner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: ", ";\n  padding: 20px;\n  border-radius: 8px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    height: auto;\n  }\n"])), function (props) {
  return props.theme.colors.warning100;
});
var Icon = exports.Icon = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: 5%;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    margin-bottom: 10px;\n  }\n"])));
var Content = exports.Content = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 2;\n  max-width: 80%;\n  text-align: left;\n\n  h1, p {\n    font-size: 1rem;\n    margin: 0;\n    padding: 0;\n  }\n\n  h1 {\n    font-weight: bold;\n  }\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    text-align: center;\n    margin-bottom: 10px;\n  }\n"])));
var ButtonWrap = exports.ButtonWrap = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: 15%;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    margin-bottom: 10px;\n  }\n"])));