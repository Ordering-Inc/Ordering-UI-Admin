"use strict";

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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ThemeOption = function ThemeOption(props) {
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
  }), /*#__PURE__*/_react.default.createElement("h5", null, getTitle(name))), ((optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'integer' || (optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'string') && !(optionObject !== null && optionObject !== void 0 && optionObject.options) && !validHexColor(valueObject) && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: valueObject,
    onChange: function onChange(e) {
      return handleChangeValue(e.target.value);
    }
  }), (optionObject === null || optionObject === void 0 ? void 0 : optionObject.value_type) === 'string' && validHexColor(valueObject) && /*#__PURE__*/_react.default.createElement(_styles2.ColorPickerContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
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
  }), typeof optionObject !== 'string' && Object.keys(optionObject).filter(function (subOption) {
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
  }));
};
exports.ThemeOption = ThemeOption;