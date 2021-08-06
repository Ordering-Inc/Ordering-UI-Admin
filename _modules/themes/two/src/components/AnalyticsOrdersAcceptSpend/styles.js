"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyContent = exports.ReviewBlock = exports.OrdersAcceptSpendContent = exports.TimeContentWrapper = exports.ReviewContentWrapper = exports.OrdersAcceptSpendHeader = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  height: 80px;\n  border-radius: 7.6px;\n  background: #FFF4CC;\n\n  svg {\n    font-size: 32px;\n    path {\n      fill: #FFC700;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 30px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  \n  h1{\n    font-weight: 500;\n    font-size: 52px;\n    margin: 0;\n    color: ", "\n  }\n  p {\n    margin: 0;\n    font-size: 14px;\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  p {\n    margin: 0;\n    font-size: 14px;\n    color: #909BA9;\n    text-align: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n\n  p {\n    margin: 0;\n    font-size: 14px;\n    color: ", ";\n    text-transform: uppercase;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var OrdersAcceptSpendHeader = _styledComponents.default.div(_templateObject2(), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});

exports.OrdersAcceptSpendHeader = OrdersAcceptSpendHeader;

var ReviewContentWrapper = _styledComponents.default.div(_templateObject3());

exports.ReviewContentWrapper = ReviewContentWrapper;

var TimeContentWrapper = _styledComponents.default.div(_templateObject4(), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});

exports.TimeContentWrapper = TimeContentWrapper;

var OrdersAcceptSpendContent = _styledComponents.default.div(_templateObject5());

exports.OrdersAcceptSpendContent = OrdersAcceptSpendContent;

var ReviewBlock = _styledComponents.default.div(_templateObject6());

exports.ReviewBlock = ReviewBlock;

var EmptyContent = _styledComponents.default.div(_templateObject7());

exports.EmptyContent = EmptyContent;