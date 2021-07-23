"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBoxWrapper = exports.SkeletonWrapper = exports.Required = exports.FormGroupWrapper = exports.FormGroupCheck = exports.FormGroupText = exports.FormContainer = exports.GeneralTitle = exports.GeneralContainer = exports.SettingsListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  p {\n    font-weight: 600;\n    margin: 20px 0 0;\n    font-size: 14px;\n    color: ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 52px;\n\n  div {\n    margin-bottom: 15px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 10px;\n  color: #E63757;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 20px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n\n  input {\n    width: 16px;\n    height: 16px;\n    box-sizing: border-box;\n    border-radius: 2px;\n    margin-right: 10px;\n  }\n  label {\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  label {\n    font-weight: 600;\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: ", ";\n  }\n\n  input[type='text'] {\n    font-size: 14px;\n    height: 44px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  button {\n    background: ", ";\n    color: white;\n    border-radius: 8px;\n    font-size: 14px;\n    margin: 20px 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  p {\n    font-weight: bold;\n    font-size: 20px;\n    color: ", ";\n    margin-bottom: 6px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 53px;\n"]);

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

var SettingsListContainer = _styledComponents.default.div(_templateObject());

exports.SettingsListContainer = SettingsListContainer;

var GeneralContainer = _styledComponents.default.div(_templateObject2());

exports.GeneralContainer = GeneralContainer;

var GeneralTitle = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.colors.headingColor;
});

exports.GeneralTitle = GeneralTitle;

var FormContainer = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.primary;
});

exports.FormContainer = FormContainer;

var FormGroupText = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.headingColor;
});

exports.FormGroupText = FormGroupText;

var FormGroupCheck = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.headingColor;
});

exports.FormGroupCheck = FormGroupCheck;

var FormGroupWrapper = _styledComponents.default.div(_templateObject7());

exports.FormGroupWrapper = FormGroupWrapper;

var Required = _styledComponents.default.span(_templateObject8());

exports.Required = Required;

var SkeletonWrapper = _styledComponents.default.div(_templateObject9());

exports.SkeletonWrapper = SkeletonWrapper;

var CheckBoxWrapper = _styledComponents.default.div(_templateObject10(), function (props) {
  return props.theme.colors.headingColor;
});

exports.CheckBoxWrapper = CheckBoxWrapper;