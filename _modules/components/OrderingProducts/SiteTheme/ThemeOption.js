"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeOption = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
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
var ThemeOption = exports.ThemeOption = function ThemeOption(props) {
  var _Object$keys;
  var name = props.name,
    optionObject = props.optionObject,
    valueObject = props.valueObject,
    path = props.path,
    themeValues = props.themeValues,
    setThemeValues = props.setThemeValues,
    handleAddThemeGallery = props.handleAddThemeGallery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var getOptions = function getOptions(options) {
    return options.map(function (option) {
      return {
        value: option,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, typeof option === 'string' ? t(option.toUpperCase(), option.replace(/_/g, ' ')) : option)
      };
    });
  };
  var getTitle = function getTitle(key) {
    return t(key.toUpperCase, key.replace(/_/g, ' '));
  };
  var validHexColor = function validHexColor(colorCode) {
    var RegExp6 = /^#[0-9A-F]{6}$/i;
    var RegExp3 = /^#[0-9A-F]{3}$/i;
    return RegExp6.test(colorCode) || RegExp3.test(colorCode);
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
  return /*#__PURE__*/_react.default.createElement(_styles2.OptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionHeader, null, (optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'boolean' && /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: valueObject,
    onChange: function onChange(e) {
      return handleChangeValue(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("h5", null, getTitle(name))), ((optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'integer' || (optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'string' || name === 'borderRadius') && !(optionObject !== null && optionObject !== void 0 && optionObject.options) && !validHexColor(valueObject) && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: valueObject,
    onChange: function onChange(e) {
      return handleChangeValue(e.target.value);
    },
    onInput: function onInput(e) {
      if (name === 'borderRadius') {
        e.target.value = Number(e.target.value) > 99 || e.target.value === '.' || (e.target.value.match(/\./g) || []).length > 1 ? e.target.value.slice(0, -1) : e.target.value.match("^[".concat(e.target.value === '0' ? '1' : '0', "-9/.]{1,9}$"));
      }
    }
  }), (optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'string' && name !== 'borderRadius' && validHexColor(valueObject) && /*#__PURE__*/_react.default.createElement(_styles2.ColorPickerContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: valueObject,
    onChangeColor: function onChangeColor(color) {
      return handleChangeValue(color);
    }
  })), (optionObject === null || optionObject === void 0 ? void 0 : optionObject.options) && /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      isPlaceholder: true
    }, t('SELECT_ITEM', 'Select a _attribute_').replace('_attribute_', getTitle(name))),
    defaultValue: valueObject,
    options: getOptions(optionObject === null || optionObject === void 0 ? void 0 : optionObject.options),
    onChange: function onChange(value) {
      return handleChangeValue(value);
    }
  }), (name === 'image' || name === 'dummy_image') && (optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'string' && /*#__PURE__*/_react.default.createElement(_ThemeImage.ThemeImage, {
    isMarginTop: true,
    valueObject: valueObject,
    handleAddThemeGallery: handleAddThemeGallery,
    handleChangeValue: handleChangeValue
  }), !(optionObject !== null && optionObject !== void 0 && optionObject.value_type) && !(optionObject !== null && optionObject !== void 0 && optionObject.components) && Object.keys(optionObject).filter(function (subOption) {
    return subOption !== 'value_type' && subOption !== 'options';
  }).map(function (subOption) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: subOption
    }, subOption !== 'components' && /*#__PURE__*/_react.default.createElement(ThemeOption, {
      name: subOption,
      optionObject: optionObject[subOption],
      valueObject: valueObject[subOption],
      path: path + '.' + subOption,
      themeValues: themeValues,
      setThemeValues: setThemeValues,
      handleAddThemeGallery: handleAddThemeGallery
    }));
  }), (optionObject === null || optionObject === void 0 ? void 0 : optionObject.components) && (Object === null || Object === void 0 || (_Object$keys = Object.keys(optionObject === null || optionObject === void 0 ? void 0 : optionObject.components)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (subOption) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: subOption
    }, /*#__PURE__*/_react.default.createElement(ThemeOption, {
      name: subOption,
      optionObject: optionObject === null || optionObject === void 0 ? void 0 : optionObject.components[subOption],
      valueObject: valueObject === null || valueObject === void 0 ? void 0 : valueObject.components[subOption],
      path: path + '.' + subOption,
      themeValues: themeValues,
      setThemeValues: setThemeValues,
      handleAddThemeGallery: handleAddThemeGallery
    }));
  })));
};