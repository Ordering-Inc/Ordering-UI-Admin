"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingItemDescription = exports.Title = exports.TitleContainer = exports.SettingItemContent = exports.IconWrapper = exports.SettingItemContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: normal;\n  font-size: 12px;\n  color: #909BA9;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 13px;\n  color: #344050;\n  margin-right: 14px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 64px;\n  height: 64px;\n\n  img {\n    width: 24px;\n    height: 24px;\n  }\n  svg {\n    font-size: 24px;\n    color: #B1BCCC;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #2C7BE5 !important;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  margin: 15px 0;\n  padding: 20px 10px;\n  transition: all 0.3s;\n  border-radius: 20px;\n  cursor: pointer;\n  border: 1px solid transparent;\n\n  ", "\n\n  &:hover {\n    background: #E9F2FE;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SettingItemContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject2());
});

exports.SettingItemContainer = SettingItemContainer;

var IconWrapper = _styledComponents.default.div(_templateObject3());

exports.IconWrapper = IconWrapper;

var SettingItemContent = _styledComponents.default.div(_templateObject4());

exports.SettingItemContent = SettingItemContent;

var TitleContainer = _styledComponents.default.div(_templateObject5());

exports.TitleContainer = TitleContainer;

var Title = _styledComponents.default.p(_templateObject6());

exports.Title = Title;

var SettingItemDescription = _styledComponents.default.div(_templateObject7());

exports.SettingItemDescription = SettingItemDescription;