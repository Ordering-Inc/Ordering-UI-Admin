"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressText = exports.AddressItem = exports.AddressListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border-bottom: 1px solid #b7b4b4;\n  padding: 15px 0px;\n"]);

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

var AddressListContainer = _styledComponents.default.div(_templateObject());

exports.AddressListContainer = AddressListContainer;

var AddressItem = _styledComponents.default.div(_templateObject2());

exports.AddressItem = AddressItem;

var AddressText = _styledComponents.default.div(_templateObject3());

exports.AddressText = AddressText;