"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminContent = exports.AdminMainContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 0px;\n\n  @media (min-width: 769px){\n    padding-left: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 65px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AdminMainContainer = _styledComponents.default.div(_templateObject());

exports.AdminMainContainer = AdminMainContainer;

var AdminContent = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var collapse = _ref.collapse;
  return collapse ? '200px' : '65px';
});

exports.AdminContent = AdminContent;