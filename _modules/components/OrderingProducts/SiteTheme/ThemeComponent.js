"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _ThemeOption = require("./ThemeOption");
var _styles = require("../../../styles");
var _ThemeImage = require("./ThemeImage");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ThemeComponent = exports.ThemeComponent = function ThemeComponent(props) {
  var name = props.name,
    valueObject = props.valueObject,
    componentObject = props.componentObject,
    path = props.path,
    themeValues = props.themeValues,
    setThemeValues = props.setThemeValues,
    handleAddThemeGallery = props.handleAddThemeGallery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var getTitle = function getTitle(key) {
    return t(key.toUpperCase, key.replace(/_/g, ' '));
  };
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var handleChangeValue = function handleChangeValue(value) {
    var _themeValues = _objectSpread({}, themeValues);
    updateObject(_themeValues, value, path);
    setThemeValues(_themeValues);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.ComponentContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ComponentHeader, null, (componentObject === null || componentObject === void 0 ? void 0 : componentObject.value_type) === 'boolean' && /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: valueObject,
    onChange: function onChange(e) {
      return handleChangeValue(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("h4", null, getTitle(name))), (name === 'image' || name === 'dummy_image') && (componentObject === null || componentObject === void 0 ? void 0 : componentObject.value_type) === 'string' && /*#__PURE__*/_react.default.createElement(_ThemeImage.ThemeImage, {
    key: valueObject,
    valueObject: valueObject,
    handleAddThemeGallery: handleAddThemeGallery,
    handleChangeValue: handleChangeValue
  }), Object.keys(componentObject).filter(function (option) {
    return option !== 'components' && option !== 'value_type';
  }).map(function (option) {
    var optionObject = componentObject[option];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: option
    }, typeof (valueObject === null || valueObject === void 0 ? void 0 : valueObject[option]) !== 'undefined' && /*#__PURE__*/_react.default.createElement(_ThemeOption.ThemeOption, {
      name: option,
      optionObject: optionObject,
      valueObject: valueObject[option],
      path: path + '.' + option,
      themeValues: themeValues,
      setThemeValues: setThemeValues,
      handleAddThemeGallery: handleAddThemeGallery
    }));
  }), (componentObject === null || componentObject === void 0 ? void 0 : componentObject.components) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(componentObject === null || componentObject === void 0 ? void 0 : componentObject.components).filter(function (subComponent) {
    return subComponent !== 'value_type';
  }).map(function (subComponent) {
    var _valueObject$componen;
    var subComponentObject = componentObject === null || componentObject === void 0 ? void 0 : componentObject.components[subComponent];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: subComponent
    }, typeof (valueObject === null || valueObject === void 0 || (_valueObject$componen = valueObject.components) === null || _valueObject$componen === void 0 ? void 0 : _valueObject$componen[subComponent]) !== 'undefined' && /*#__PURE__*/_react.default.createElement(ThemeComponent, {
      name: subComponent,
      componentObject: subComponentObject,
      valueObject: valueObject === null || valueObject === void 0 ? void 0 : valueObject.components[subComponent],
      path: path + '.components.' + subComponent,
      themeValues: themeValues,
      setThemeValues: setThemeValues,
      handleAddThemeGallery: handleAddThemeGallery
    }));
  })));
};