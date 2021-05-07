"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersContainer = exports.ItemAmount = exports.ItemUnit = exports.ItemData = exports.ItemName = exports.ItemContainer = exports.VisitInfo = exports.ActivityRegisterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 25px;\n  font-weight: bold;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #e5e5e5;\n  font-size: 12px;\n  margin-top: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px 20px;\n  border: 1px solid #e5e5e5;\n  border-radius: 5px;\n  margin-bottom: 20px;\n\n  @media (min-width: 480px) {\n    flex-direction: row;\n    margin-right: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 480px) {\n    flex-direction: row;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActivityRegisterContainer = _styledComponents.default.div(_templateObject());

exports.ActivityRegisterContainer = ActivityRegisterContainer;

var VisitInfo = _styledComponents.default.div(_templateObject2());

exports.VisitInfo = VisitInfo;

var ItemContainer = _styledComponents.default.div(_templateObject3());

exports.ItemContainer = ItemContainer;

var ItemName = _styledComponents.default.p(_templateObject4());

exports.ItemName = ItemName;

var ItemData = _styledComponents.default.div(_templateObject5());

exports.ItemData = ItemData;

var ItemUnit = _styledComponents.default.span(_templateObject6());

exports.ItemUnit = ItemUnit;

var ItemAmount = _styledComponents.default.span(_templateObject7());

exports.ItemAmount = ItemAmount;

var OrdersContainer = _styledComponents.default.div(_templateObject8());

exports.OrdersContainer = OrdersContainer;