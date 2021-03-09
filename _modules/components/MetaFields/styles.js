"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoMetaField = exports.RoundBorder = exports.MetaTable = exports.MetaTitle = exports.WrapMetaFields = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #c2c2c2;\n  border-radius: 20px;\n  padding: 5px 15px;\n  margin: 0 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  tr {\n    td {\n      vertical-align: baseline;\n      padding: 5px 0;\n      \n      &:nth-child(3) {\n        word-break: break-all;\n      }\n      svg {\n        color: darkRed;\n        cursor: pointer;\n      }\n    }\n  }\n\n  @media (min-width: 576px) {\n    tr {\n      td {\n        &:first-child {\n          min-width: 100px;\n        }\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 600;  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapMetaFields = _styledComponents.default.div(_templateObject());

exports.WrapMetaFields = WrapMetaFields;

var MetaTitle = _styledComponents.default.p(_templateObject2());

exports.MetaTitle = MetaTitle;

var MetaTable = _styledComponents.default.table(_templateObject3());

exports.MetaTable = MetaTable;

var RoundBorder = _styledComponents.default.div(_templateObject4());

exports.RoundBorder = RoundBorder;

var NoMetaField = _styledComponents.default.p(_templateObject5());

exports.NoMetaField = NoMetaField;