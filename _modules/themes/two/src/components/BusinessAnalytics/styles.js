"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapWrraper = exports.AnalyticsContentWrapper = exports.BusinessCalendarWrapper = exports.BusinessFilterWrapper = exports.HeaderFilterContainer = exports.BusinessAnalyticsHeader = exports.BusinessAnalyticsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  > div {\n    margin-top: 40px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 12px;\n        margin-left: 0;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 25px;\n    margin-left: 0;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 25px;\n  ", "\n\n  button {\n    svg {\n      font-size: 16px;\n      margin-right: 12px;\n      ", "\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  button {\n    background: #F8F9FA;\n    border-radius: 7.6px;\n    padding: 7px 12px;\n    font-size: 14px;\n    color: #748194;\n    border: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 15px;\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  h1 {\n    font-weight: bold;\n    font-size: 20px;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: all 0.5s;\n  padding: 20px;\n  overflow: hidden;\n  box-sizing: borer-box;\n  margin-top: 60px;\n\n  @media print {\n    display: none;\n  }\n\n  @media (min-width: 760px) {\n    margin-top: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessAnalyticsContainer = _styledComponents.default.div(_templateObject());

exports.BusinessAnalyticsContainer = BusinessAnalyticsContainer;

var BusinessAnalyticsHeader = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.headingColor;
});

exports.BusinessAnalyticsHeader = BusinessAnalyticsHeader;

var HeaderFilterContainer = _styledComponents.default.div(_templateObject3());

exports.HeaderFilterContainer = HeaderFilterContainer;

var BusinessFilterWrapper = _styledComponents.default.div(_templateObject4());

exports.BusinessFilterWrapper = BusinessFilterWrapper;
var BusinessCalendarWrapper = (0, _styledComponents.default)(BusinessFilterWrapper)(_templateObject5(), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6());
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7());
});
exports.BusinessCalendarWrapper = BusinessCalendarWrapper;

var AnalyticsContentWrapper = _styledComponents.default.div(_templateObject8());

exports.AnalyticsContentWrapper = AnalyticsContentWrapper;

var MapWrraper = _styledComponents.default.div(_templateObject9());

exports.MapWrraper = MapWrraper;