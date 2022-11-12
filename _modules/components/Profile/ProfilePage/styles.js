"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoWrapper = exports.UserInfoContainer = exports.UserImage = exports.HeaderContainer = exports.Container = exports.ButtonsGroup = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n"])));
exports.Container = Container;
var HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n  }\n"])));
exports.HeaderContainer = HeaderContainer;
var UserInfoContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  display: flex;\n"])));
exports.UserInfoContainer = UserInfoContainer;
var UserImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  width: 216px;\n  height: 216px;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    border-radius: 8px;\n  }\n"])));
exports.UserImage = UserImage;
var UserInfoWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0 26px;\n  p {\n    &.name {\n      font-size: 20px;\n      font-weight: 600;\n      margin: 0;\n    }\n    &.email {\n      font-size: 14px;\n      line-height: 24px;\n      margin: 12px 0;\n    }\n    &.phone {\n      font-size: 14px;\n      line-height: 24px;\n      margin: 0;\n    }\n  }\n"])));
exports.UserInfoWrapper = UserInfoWrapper;
var ButtonsGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 26px;\n\n  button {\n    height: 44px;\n  }\n"])));
exports.ButtonsGroup = ButtonsGroup;