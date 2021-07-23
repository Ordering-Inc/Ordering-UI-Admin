"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddProductBtn = exports.WrapperNotFound = exports.BusinessProductListTable = exports.ProductListSpreadContainer = exports.ProductListContainer = exports.ListContent = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  user-select: none;\n  font-size: 12px;\n  color: #909BA9;\n  margin-top: 12px;\n  cursor: pointer;\n  margin-bottom: 15px;\n  display: inline-block;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  height: 500px;\n  > div{\n    height: 100%;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n  color: ", ";\n  transition: all 0.3s;\n\n  td, th {\n    padding: 15px;\n  }\n\n  th.more {\n    width: 50px;\n  }\n\n  th.description {\n    width: 30%;\n  }\n\n  th.id,\n  td.id {\n    width: 10%;\n  }\n\n  thead {\n    tr {\n      th {\n        position: sticky;\n        top: 0px;\n        z-index: 100;\n        background: #FFF;\n        border-bottom: 1px solid #B1BCCC;\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 30px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 30px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n\n  @media (min-width: 576px) {\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 30px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 30px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  max-height: calc(100vh - 380px);\n  min-height: 200px;\n  overflow: auto;\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 230px);\n  }\n  \n  @media (min-width: 576px) {\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  height: 100%;\n  border: none;\n  \n  @media (min-width: 768px) {\n    border-left: 1px solid #E9ECEF;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListContent = _styledComponents.default.div(_templateObject());

exports.ListContent = ListContent;

var ProductListContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject3()) : (0, _styledComponents.css)(_templateObject4());
});

exports.ProductListContainer = ProductListContainer;

var ProductListSpreadContainer = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject6()) : (0, _styledComponents.css)(_templateObject7());
});

exports.ProductListSpreadContainer = ProductListSpreadContainer;

var BusinessProductListTable = _styledComponents.default.table(_templateObject8(), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.BusinessProductListTable = BusinessProductListTable;

var WrapperNotFound = _styledComponents.default.div(_templateObject9());

exports.WrapperNotFound = WrapperNotFound;

var AddProductBtn = _styledComponents.default.div(_templateObject10());

exports.AddProductBtn = AddProductBtn;