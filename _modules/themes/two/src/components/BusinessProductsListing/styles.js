"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewMethodButton = exports.ActionIconList = exports.ProductHeader = exports.AddButton = exports.ProductListContainer = exports.CategoryListContainer = exports.CategoryProductsContent = exports.HeaderContainer = exports.CategoryProductsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 12px;\n  cursor: pointer;\n  color: ", ";\n\n  svg {\n    font-size: 16px;\n  }\n\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n\n  h1 {\n    font-weight: 600;\n    font-size: 14px;\n    margin: 0;\n  }\n\n  svg {\n    font-size: 16px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n\n  ", "\n\n  @media (max-width: 576px) {\n    margin: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  width: 100%;\n\n  @media (min-width: 769px) {\n    width: calc(100% - 250px);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  min-width: 250px;\n\n  @media (max-width: 576px) {\n    width:100%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 50px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    text-align: center;\n    font-size: 24px;\n    margin: 0 0 15px 0;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  input {\n    background: #E9ECEF;\n    border: none;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    h1 {\n      margin: 0 5px 0 0;\n      text-align: left;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: hidden;\n  margin-top: 60px;\n\n  @media print {\n    display: none;\n  }\n\n  @media (min-width: 760px) {\n    margin-top: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CategoryProductsContainer = _styledComponents.default.div(_templateObject());

exports.CategoryProductsContainer = CategoryProductsContainer;

var HeaderContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.headingColor;
});

exports.HeaderContainer = HeaderContainer;

var CategoryProductsContent = _styledComponents.default.div(_templateObject3());

exports.CategoryProductsContent = CategoryProductsContent;

var CategoryListContainer = _styledComponents.default.div(_templateObject4());

exports.CategoryListContainer = CategoryListContainer;

var ProductListContainer = _styledComponents.default.div(_templateObject5());

exports.ProductListContainer = ProductListContainer;

var AddButton = _styledComponents.default.span(_templateObject6(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject7()) : (0, _styledComponents.css)(_templateObject8());
});

exports.AddButton = AddButton;

var ProductHeader = _styledComponents.default.div(_templateObject9());

exports.ProductHeader = ProductHeader;

var ActionIconList = _styledComponents.default.div(_templateObject10());

exports.ActionIconList = ActionIconList;

var ViewMethodButton = _styledComponents.default.span(_templateObject11(), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject12(), function (props) {
    return props.theme.colors.primary;
  });
});

exports.ViewMethodButton = ViewMethodButton;