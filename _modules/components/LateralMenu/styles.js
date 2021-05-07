"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseMenu = exports.MobileHeader = exports.LogOutItem = exports.ItemText = exports.MenuItem = exports.UserName = exports.UserAvatar = exports.LogoHeader = exports.MenuBottom = exports.MainMenuList = exports.MenuContent = exports.LateralMenuContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  svg {\n    font-size: 22px;\n  }\n  display: flex;\n  @media (min-width: 769px){\n    display: none;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  z-index: 999;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 50px;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px;\n  box-shadow: 0px 2px 2px #00000029;\n\n  svg {\n    font-size: 40px;\n  }\n\n  img {\n    height: 100%;\n    margin-top: 10px;\n  }\n\n  @media (min-width: 769px){\n    display: none;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px 0px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s;\n  color: red;\n\n  svg {\n    margin: 0px 15px;\n    color: red;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 10px 0px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  svg {\n    margin: 0px 15px;\n  }\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 25px;\n  svg {\n    margin: 0px 20px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-bottom: 25px;\n  img {\n    width: 190px;\n    height: 55px;\n    margin: 0;\n    vertical-align: middle;\n  }\n  display: none;\n  @media (min-width: 769px){\n    display: flex;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 20px 10px;\n  box-sizing: border-box;\n  height: 100%;\n\n  @media (min-width: 769px){\n    width: 200px;\n    padding: 10px 5px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0px;\n  z-index: 1000;\n  background-color: #ffffff;\n  height: 100vh;\n  box-shadow: 0px 2px 2px #00000029;\n  width: ", ";\n  overflow: auto;\n  transition: all 0.3s;\n\n  @media (min-width: 769px){\n    width: 200px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LateralMenuContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isShowMenu = _ref.isShowMenu;
  return isShowMenu ? '100vw' : '0px';
});

exports.LateralMenuContainer = LateralMenuContainer;

var MenuContent = _styledComponents.default.div(_templateObject2());

exports.MenuContent = MenuContent;

var MainMenuList = _styledComponents.default.div(_templateObject3());

exports.MainMenuList = MainMenuList;

var MenuBottom = _styledComponents.default.div(_templateObject4());

exports.MenuBottom = MenuBottom;

var LogoHeader = _styledComponents.default.div(_templateObject5());

exports.LogoHeader = LogoHeader;

var UserAvatar = _styledComponents.default.div(_templateObject6());

exports.UserAvatar = UserAvatar;

var UserName = _styledComponents.default.div(_templateObject7());

exports.UserName = UserName;

var MenuItem = _styledComponents.default.div(_templateObject8(), function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject9(), function (props) {
    return props.theme.colors.primary;
  });
});

exports.MenuItem = MenuItem;

var ItemText = _styledComponents.default.span(_templateObject10());

exports.ItemText = ItemText;

var LogOutItem = _styledComponents.default.div(_templateObject11());

exports.LogOutItem = LogOutItem;

var MobileHeader = _styledComponents.default.div(_templateObject12());

exports.MobileHeader = MobileHeader;

var CloseMenu = _styledComponents.default.div(_templateObject13());

exports.CloseMenu = CloseMenu;