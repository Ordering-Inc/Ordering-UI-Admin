"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownWrapper = exports.EnableWrapper = exports.ActionsContainer = exports.UploadImageIconContainer = exports.OptionImage = exports.OptionNameContainer = exports.OptionsTable = exports.Header = exports.OptionsContainer = exports.MainContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 35px;\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 35px;\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  button {\n    background: #F8F9FA !important;\n    border: none;\n    padding: 0px;\n    svg {\n      color: ", ";\n    }\n\n    &:after {\n      display: none;\n    }\n  }\n\n  > div {\n    > div {\n      border: 1px solid #E9ECEF;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n      border-radius: 8px;\n\n      a:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n\n    ", "\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  > svg {\n    color: ", ";\n    font-size: 20px;\n    cursor: pointer;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    padding: 8px;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    padding: 4px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  svg {\n    color: #FFF;\n    width: 25px;\n    height: 25px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > input {\n    flex: 1;\n    padding: 5px 0;\n    margin: 0 5px;\n    border: none;\n    outline: none;\n    &:focus {\n      border: 1px dashed ", ";\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 5px;\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 5px;\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: auto;\n  th, td {\n    font-size: 14px;\n    color: ", ";\n    padding: 12px 0;\n    &:last-child {\n      width: 160px;\n    }\n\n    > input {\n      width: 60px;\n      padding: 5px;\n      ", "\n      border: none;\n      outline: none;\n      &:focus {\n        border: 1px dashed ", ";\n      }\n    }\n  }\n\n  th {\n    font-weight: 700;\n  }\n\n  thead, tbody {\n    border-bottom: 1px solid #E9ECEF;\n  }\n  tbody.add_option {\n    border-top: 13px solid #E9ECEF;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  h1 {\n    font-size: 24px;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  > svg {\n    display: none;\n  }\n\n  @media (min-width: 1000px) {\n    > svg {\n      display: block;\n      cursor: pointer;\n      font-size: 24px;\n      color: ", ";\n      ", "\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  border-bottom: 13px solid ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border-left: 1px solid #E9ECEF;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border-right: 1px solid #E9ECEF;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  transition: 0.3s;\n\n  > button {\n    margin: 20px 0;\n  }\n\n  @media (min-width: 1000px) {\n    width: 0;\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents.default.div(_templateObject(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject2()) : (0, _styledComponents.css)(_templateObject3());
});

exports.MainContainer = MainContainer;

var OptionsContainer = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.secundary;
});

exports.OptionsContainer = OptionsContainer;

var Header = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) ? (0, _styledComponents.css)(_templateObject6()) : (0, _styledComponents.css)(_templateObject7());
});

exports.Header = Header;

var OptionsTable = _styledComponents.default.table(_templateObject8(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject9()) : (0, _styledComponents.css)(_templateObject10());
}, function (props) {
  return props.theme.colors.lightGray;
});

exports.OptionsTable = OptionsTable;

var OptionNameContainer = _styledComponents.default.div(_templateObject11(), function (props) {
  return props.theme.colors.lightGray;
});

exports.OptionNameContainer = OptionNameContainer;

var OptionImage = _styledComponents.default.div(_templateObject12());

exports.OptionImage = OptionImage;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject13(), function (_ref) {
  var small = _ref.small;
  return small ? (0, _styledComponents.css)(_templateObject14()) : (0, _styledComponents.css)(_templateObject15());
});

exports.UploadImageIconContainer = UploadImageIconContainer;

var ActionsContainer = _styledComponents.default.div(_templateObject16(), function (props) {
  return props.theme.colors.primary;
});

exports.ActionsContainer = ActionsContainer;

var EnableWrapper = _styledComponents.default.div(_templateObject17(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) ? (0, _styledComponents.css)(_templateObject18()) : (0, _styledComponents.css)(_templateObject19());
});

exports.EnableWrapper = EnableWrapper;

var DropDownWrapper = _styledComponents.default.div(_templateObject20(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) ? (0, _styledComponents.css)(_templateObject21()) : (0, _styledComponents.css)(_templateObject22());
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.DropDownWrapper = DropDownWrapper;