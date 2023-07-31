"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ThemeComponent = function ThemeComponent(props) {
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
exports.ThemeComponent = ThemeComponent;