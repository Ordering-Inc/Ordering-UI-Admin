"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 270px;\n  position: relative;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n\n  button {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    font-size: 14px;\n  }\n\n  @media (min-width: 768px) {\n    height: 320px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  > button {\n    position: sticky;\n    top: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var WrapperMap = _styledComponents.default.div(_templateObject2());

exports.WrapperMap = WrapperMap;