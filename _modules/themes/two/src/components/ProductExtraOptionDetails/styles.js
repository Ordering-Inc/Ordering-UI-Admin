"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectboxGroup = exports.RightSubOptionContent = exports.LeftSubOptionContent = exports.SubOptionImage = exports.SubOptionContainer = exports.ModifierOptionsContainer = exports.Dvider = exports.CheckboxWrapper = exports.OptionSettingItem = exports.OptionSettings = exports.DropDownWrapper = exports.EnableWrapper = exports.ActionsContainer = exports.InputWrapper = exports.RightOptionContent = exports.OptionContent = exports.OptionInfoContainer = exports.UploadImageIcon = exports.UploadImageIconContainer = exports.OptionImage = exports.OptionContainer = exports.MainContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: 50%;\n  \n  > div {\n    background: #F8F9FA;\n    &:first-child {\n      margin-bottom: 20px;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    max-width: initial;\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  input {\n    max-width: 100px;\n    ", "\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 27px;\n  "]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  ", "\n  ", "\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-top: 15px;\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h2 {\n    font-size: 18px;\n    font-weight: 600;\n    color: ", ";\n    margin-bottom: 30px;\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  height: 13px;\n  background: #F8F9FA;\n  margin: 10px 0 30px;\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n\n  label {\n    cursor: pointer;\n    color: ", ";\n    font-size: 14px;\n    ", "\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 20px 0;\n  flex-direction: column;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 35px;\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 35px;\n    "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  button {\n    background: #F8F9FA !important;\n    border: none;\n    padding: 0px;\n    svg {\n      color: ", ";\n    }\n\n    &:after {\n      display: none;\n    }\n  }\n\n  > div {\n    > div {\n      border: 1px solid #E9ECEF;\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n      border-radius: 8px;\n\n      a:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n    color: ", ";\n\n    ", "\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 35px;\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 35px;\n    "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n    padding-left: 20px;\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n    padding-right: 20px;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 30px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 0px;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 27px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  \n  ", "\n\n  ", "\n\n  ", "\n\n  > svg {\n    cursor: pointer;\n    font-size: 16px;\n    ", "\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    label {\n      display: none;\n    }\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  label {\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  ", "\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  > div:not(:last-child) {\n    width: 100px;\n  }\n  @media (min-width: 1200px) {\n    margin-top: 0px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n  }\n\n  svg {   \n    font-size: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  padding: 4px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 95px;\n  height: 95px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 20px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.headingColor;
});

exports.MainContainer = MainContainer;

var OptionContainer = _styledComponents.default.div(_templateObject2());

exports.OptionContainer = OptionContainer;

var OptionImage = _styledComponents.default.div(_templateObject3());

exports.OptionImage = OptionImage;

var UploadImageIconContainer = _styledComponents.default.div(_templateObject4());

exports.UploadImageIconContainer = UploadImageIconContainer;

var UploadImageIcon = _styledComponents.default.div(_templateObject5(), function (_ref) {
  var small = _ref.small;
  return small ? '16px' : '32px';
});

exports.UploadImageIcon = UploadImageIcon;

var OptionInfoContainer = _styledComponents.default.div(_templateObject6(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject7()) : (0, _styledComponents.css)(_templateObject8());
});

exports.OptionInfoContainer = OptionInfoContainer;

var OptionContent = _styledComponents.default.div(_templateObject9());

exports.OptionContent = OptionContent;

var RightOptionContent = _styledComponents.default.div(_templateObject10());

exports.RightOptionContent = RightOptionContent;

var InputWrapper = _styledComponents.default.div(_templateObject11(), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref2) {
  var primary = _ref2.primary;
  return !primary && (0, _styledComponents.css)(_templateObject12());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) ? (0, _styledComponents.css)(_templateObject13()) : (0, _styledComponents.css)(_templateObject14());
});

exports.InputWrapper = InputWrapper;

var ActionsContainer = _styledComponents.default.div(_templateObject15(), function (_ref3) {
  var primary = _ref3.primary;
  return !primary && (0, _styledComponents.css)(_templateObject16());
}, function (_ref4) {
  var top = _ref4.top;
  return top && (0, _styledComponents.css)(_templateObject17());
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject18()) : (0, _styledComponents.css)(_templateObject19());
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) ? (0, _styledComponents.css)(_templateObject20()) : (0, _styledComponents.css)(_templateObject21());
});

exports.ActionsContainer = ActionsContainer;

var EnableWrapper = _styledComponents.default.div(_templateObject22(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) ? (0, _styledComponents.css)(_templateObject23()) : (0, _styledComponents.css)(_templateObject24());
});

exports.EnableWrapper = EnableWrapper;

var DropDownWrapper = _styledComponents.default.div(_templateObject25(), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) ? (0, _styledComponents.css)(_templateObject26()) : (0, _styledComponents.css)(_templateObject27());
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.DropDownWrapper = DropDownWrapper;

var OptionSettings = _styledComponents.default.div(_templateObject28());

exports.OptionSettings = OptionSettings;

var OptionSettingItem = _styledComponents.default.div(_templateObject29());

exports.OptionSettingItem = OptionSettingItem;

var CheckboxWrapper = _styledComponents.default.div(_templateObject30(), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) ? (0, _styledComponents.css)(_templateObject31()) : (0, _styledComponents.css)(_templateObject32());
});

exports.CheckboxWrapper = CheckboxWrapper;

var Dvider = _styledComponents.default.div(_templateObject33());

exports.Dvider = Dvider;

var ModifierOptionsContainer = _styledComponents.default.div(_templateObject34(), function (props) {
  return props.theme.colors.headingColor;
});

exports.ModifierOptionsContainer = ModifierOptionsContainer;

var SubOptionContainer = _styledComponents.default.div(_templateObject35());

exports.SubOptionContainer = SubOptionContainer;

var SubOptionImage = _styledComponents.default.div(_templateObject36(), function (_ref5) {
  var primary = _ref5.primary;
  return primary && (0, _styledComponents.css)(_templateObject37());
}, function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) ? (0, _styledComponents.css)(_templateObject38()) : (0, _styledComponents.css)(_templateObject39());
});

exports.SubOptionImage = SubOptionImage;

var LeftSubOptionContent = _styledComponents.default.div(_templateObject40());

exports.LeftSubOptionContent = LeftSubOptionContent;

var RightSubOptionContent = _styledComponents.default.div(_templateObject41(), function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) ? (0, _styledComponents.css)(_templateObject42()) : (0, _styledComponents.css)(_templateObject43());
});

exports.RightSubOptionContent = RightSubOptionContent;

var SelectboxGroup = _styledComponents.default.div(_templateObject44());

exports.SelectboxGroup = SelectboxGroup;