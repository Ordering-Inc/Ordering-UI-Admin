"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserListSection = exports.PageTitleText = exports.UserContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 769px){\n    flex-grow: 1;\n    padding-right: 50px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 32px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 0px 15px;\n\n  @media (min-width: 769px){\n    flex-direction: row;\n    padding: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserContainer = _styledComponents.default.div(_templateObject());

exports.UserContainer = UserContainer;

var PageTitleText = _styledComponents.default.h3(_templateObject2());

exports.PageTitleText = PageTitleText;

var UserListSection = _styledComponents.default.div(_templateObject3());

exports.UserListSection = UserListSection;