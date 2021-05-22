"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButton = exports.AddUserContainer = exports.ExportContainer = exports.SearchContent = exports.FilterContainer = exports.ActionsSectionContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  outline: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  margin: 0 15px;\n  font-size: 24px;\n  padding: 0px;\n  color: #1C202E;\n\n  &:active {\n    opacity: 0.5;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  button {\n    width: 255px;\n    transition: all 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    @media (min-width: 576px) {\n      width: 150px;\n    }\n\n    > svg {\n      margin: 0px 10px;\n      color: ", ";\n      font-size: 22px;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 20px;\n  margin-bottom: 20px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        right: 10px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  img {\n    width: 18px;\n    position: absolute;\n    left: 10px;\n    ", ";\n    top: 11px;\n  }\n  input {\n    border-radius: 5px;\n    transition: all 0.3s;\n\n    @media (min-width: 576px) {\n      width: 150px;\n    }\n\n    @media (min-width: 769px) {\n      width: 170px;\n    }\n\n    @media (min-width: 1200px) {\n      width: 350px;\n    }\n\n    @media (min-width: 1366px) {\n      width: 550px;\n    }\n\n    &:focus {\n      border-color: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 15px 0px 15px;\n  margin-bottom: 20px;\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0px 2px 2px #00000029;\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n\n  > div {\n    @media(max-width: 576px) {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActionsSectionContainer = _styledComponents.default.div(_templateObject());

exports.ActionsSectionContainer = ActionsSectionContainer;

var FilterContainer = _styledComponents.default.div(_templateObject2());

exports.FilterContainer = FilterContainer;

var SearchContent = _styledComponents.default.div(_templateObject3(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4());
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});

exports.SearchContent = SearchContent;

var ExportContainer = _styledComponents.default.div(_templateObject5());

exports.ExportContainer = ExportContainer;

var AddUserContainer = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.btnDarkBlueContrast;
});

exports.AddUserContainer = AddUserContainer;

var FilterButton = _styledComponents.default.button(_templateObject7());

exports.FilterButton = FilterButton;