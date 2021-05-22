"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.ActionButtons = exports.Label = exports.InputWrapper = exports.Title = exports.InputForm = exports.UserFilterListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  font-size: 13px;\n  line-height: 2;\n  font-weight: 500;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  button:first-child {\n    margin: 0px 20px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-weight: bold;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    width: 49%;\n  }\n\n  input {\n    width: 100%;\n    box-sizing: border-box;\n    margin-bottom: 20px;\n  }\n\n  .rectangle-select > div:first-child {\n    padding: 7px 15px;\n    font-size: 13px;\n    height: 26px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  margin-top: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  @media (min-width: 769px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"]);

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

var UserFilterListContainer = _styledComponents.default.div(_templateObject());

exports.UserFilterListContainer = UserFilterListContainer;

var InputForm = _styledComponents.default.form(_templateObject2());

exports.InputForm = InputForm;

var Title = _styledComponents.default.h2(_templateObject3());

exports.Title = Title;

var InputWrapper = _styledComponents.default.div(_templateObject4());

exports.InputWrapper = InputWrapper;

var Label = _styledComponents.default.label(_templateObject5());

exports.Label = Label;

var ActionButtons = _styledComponents.default.div(_templateObject6());

exports.ActionButtons = ActionButtons;

var Option = _styledComponents.default.div(_templateObject7());

exports.Option = Option;