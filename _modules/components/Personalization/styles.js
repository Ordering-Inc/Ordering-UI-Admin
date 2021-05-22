"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = exports.Link = exports.Description = exports.Title = exports.PersonalizationContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 98%;\n    margin: auto;\n    height: auto;\n    @media(min-width: 576px) {\n      width: 50%;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #38a1f4;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PersonalizationContainer = _styledComponents.default.div(_templateObject());

exports.PersonalizationContainer = PersonalizationContainer;

var Title = _styledComponents.default.h2(_templateObject2());

exports.Title = Title;

var Description = _styledComponents.default.p(_templateObject3());

exports.Description = Description;

var Link = _styledComponents.default.span(_templateObject4());

exports.Link = Link;

var ImageContainer = _styledComponents.default.div(_templateObject5());

exports.ImageContainer = ImageContainer;