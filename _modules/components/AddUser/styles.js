"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsForm = exports.FormContainer = exports.InputWrapper = exports.Label = exports.Option = exports.UploadImageIcon = exports.Camera = exports.SideForm = exports.Image = exports.UserImage = exports.InputForm = exports.Title = exports.AddUserContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    button {\n      &:nth-child(1) {\n        margin-right: 0px;\n      }\n      &:last-child {\n        margin-right: 5px;\n      }\n    }\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  button {\n    padding: 7px 0px;\n    width: 40%;\n    box-sizing: border-box;\n\n    &:disabled {\n      cursor: not-allowed;\n    }\n    margin-left: 10px;\n  }\n\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    div.phone_number  {\n      width: 49%;\n    }\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nwidth: 100%;\nmargin: 0 auto;\ndiv.phone_number {\n  margin-bottom: 20px;\n  width: 100%;\n}\ninput.form {\n  color: black;\n  padding: 10px 15px;\n  width: 100%;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  &:disabled {\n    background-color: rgba(239, 239, 239, 0.3);\n    cursor: not-allowed;\n  }\n}\nbutton {\n  width: 100%;\n  padding: 7px 0;\n}\n@media (min-width: 769px) {\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  input.form {\n    width: 49%;\n  }\n  ", "\n}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  width: 100%;\n  input {\n    border-radius: 5px !important;\n  }\n\n  .PhoneInputCountry {\n    border: 1px solid #707070;\n    border-radius: 5px;\n    padding: 5px 15px;\n  }\n\n  input[type=tel] {\n    border: 1px solid #707070 !important;\n  }\n\n  span {\n    color: red;\n  }\n  @media (min-width: 769px) {\n    width: 49%;\n    input {\n      width: 100% !important;\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-weight: bold;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n    font-size: 13px;\n    line-height: 2;\n    font-weight: 500;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n    text-align: center;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width:212px;\n  > * {\n    margin-top: 10px;\n    width: 30px;\n    height: 30px;\n  }\n\n  @media (min-width: 480px){\n    width:242px;\n  }\n\n  @media (min-width: 768px){\n    width:212px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      margin: auto 30px auto 0px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 769px) {\n    width: 70%;\n    display: flex;\n    align-items: center;\n    margin: 30px 0px 0px 30px;\n    ", "\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 150px;\n  height: 150px;\n  border: 2px solid #e8f0fe;\n  border-radius: 20px;\n  overflow: hidden;\n  padding: 20px;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 20px;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 480px){\n    width: 200px;\n    height: 200px;\n  }\n\n  @media (min-width: 768px){\n    width: 150px;\n    height: 150px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n\n  @media (min-width: 769px){\n    width: 30%;\n    align-items: flex-end;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 769px){\n    flex-direction: row;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  margin-top: 0px;\n"]);

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

var AddUserContainer = _styledComponents.default.div(_templateObject());

exports.AddUserContainer = AddUserContainer;

var Title = _styledComponents.default.h2(_templateObject2());

exports.Title = Title;

var InputForm = _styledComponents.default.form(_templateObject3());

exports.InputForm = InputForm;

var UserImage = _styledComponents.default.div(_templateObject4());

exports.UserImage = UserImage;

var Image = _styledComponents.default.div(_templateObject5(), function (_ref) {
  var isImage = _ref.isImage,
      theme = _ref.theme;
  return isImage ? '#FFF' : "".concat(theme.colors.backgroundPage);
});

exports.Image = Image;

var SideForm = _styledComponents.default.div(_templateObject6(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7());
});

exports.SideForm = SideForm;

var Camera = _styledComponents.default.div(_templateObject8());

exports.Camera = Camera;

var UploadImageIcon = _styledComponents.default.div(_templateObject9());

exports.UploadImageIcon = UploadImageIcon;

var Option = _styledComponents.default.div(_templateObject10());

exports.Option = Option;

var Label = _styledComponents.default.label(_templateObject11());

exports.Label = Label;

var InputWrapper = _styledComponents.default.div(_templateObject12());

exports.InputWrapper = InputWrapper;

var FormContainer = _styledComponents.default.div(_templateObject13(), function (_ref2) {
  var isCheckout = _ref2.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject14());
});

exports.FormContainer = FormContainer;

var ActionsForm = _styledComponents.default.div(_templateObject15(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16());
});

exports.ActionsForm = ActionsForm;