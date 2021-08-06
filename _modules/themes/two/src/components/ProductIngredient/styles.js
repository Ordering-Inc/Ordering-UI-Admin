"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IngredientAddContainer = exports.AddIngredientButton = exports.IngredientOption = exports.Header = exports.IngredientContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  input {\n    width: 100%;\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #E9ECEF;\n    padding: 12px 0;\n\n    &::placeholder,\n    &::-webkit-input-placeholder {\n      color: #B1BCCC;\n    }\n    &:-ms-input-placeholder {\n      color: #B1BCCC;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 12px 0;\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #E9ECEF;\n  padding: 12px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n\n  input {\n    flex: 1;\n    border: none;\n    outline: none;\n  }\n\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #E9ECEF;\n  padding-bottom: 30px;\n  width: 100%;\n  h1 {\n    color: ", ";\n    font-size: 24px;\n    font-weight: 600;\n    margin: 0px;\n  }\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n    cursor: pointer;\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: hidden;\n\n  @media (min-width: 1000px) {\n    padding: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IngredientContainer = _styledComponents.default.div(_templateObject());

exports.IngredientContainer = IngredientContainer;

var Header = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject3()) : (0, _styledComponents.css)(_templateObject4());
});

exports.Header = Header;

var IngredientOption = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.headingColor;
});

exports.IngredientOption = IngredientOption;

var AddIngredientButton = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.lightGray;
});

exports.AddIngredientButton = AddIngredientButton;

var IngredientAddContainer = _styledComponents.default.div(_templateObject7());

exports.IngredientAddContainer = IngredientAddContainer;