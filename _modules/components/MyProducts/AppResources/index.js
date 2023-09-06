"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppResources = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../AdvancedSettings/styles");
var _ImageBox = require("../AdvancedSettings/ImageBox");
var _styles2 = require("./styles");
var _styles3 = require("../../../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AppResources = function AppResources(props) {
  var _advancedValues$andro, _advancedValues$andro2, _advancedValues$andro3, _advancedValues$andro4, _advancedValues$andro5, _advancedValues$andro6, _advancedValues$andro7, _advancedValues$andro8, _advancedValues$ios, _advancedValues$ios2, _advancedValues$ios3, _advancedValues$ios4, _advancedValues$ios5, _advancedValues$ios6;
  var handleUpdateSiteTheme = props.handleUpdateSiteTheme,
    advancedValues = props.advancedValues,
    setAdvancedValues = props.setAdvancedValues;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var handleUpdateThemeValue = function handleUpdateThemeValue(value, path) {
    var _advancedValues = JSON.parse(JSON.stringify(advancedValues));
    updateObject(_advancedValues, value, path);
    setAdvancedValues(_advancedValues);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ANDROID_SPLASH', 'Android splash')), /*#__PURE__*/_react.default.createElement("h2", null, t('PORTRAIT', 'Portrait')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "ldpi",
    ratio: "200 x 320 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro = advancedValues.android) === null || _advancedValues$andro === void 0 || (_advancedValues$andro = _advancedValues$andro.components) === null || _advancedValues$andro === void 0 || (_advancedValues$andro = _advancedValues$andro.portrait) === null || _advancedValues$andro === void 0 || (_advancedValues$andro = _advancedValues$andro.dimensions) === null || _advancedValues$andro === void 0 || (_advancedValues$andro = _advancedValues$andro.idpi) === null || _advancedValues$andro === void 0 ? void 0 : _advancedValues$andro.image,
    path: "android.components.portrait.dimensions.idpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xhdpi",
    ratio: "720 x 1280 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro2 = advancedValues.android) === null || _advancedValues$andro2 === void 0 || (_advancedValues$andro2 = _advancedValues$andro2.components) === null || _advancedValues$andro2 === void 0 || (_advancedValues$andro2 = _advancedValues$andro2.portrait) === null || _advancedValues$andro2 === void 0 || (_advancedValues$andro2 = _advancedValues$andro2.dimensions) === null || _advancedValues$andro2 === void 0 || (_advancedValues$andro2 = _advancedValues$andro2.xhdpi) === null || _advancedValues$andro2 === void 0 ? void 0 : _advancedValues$andro2.image,
    path: "android.components.portrait.dimensions.xhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxhdpi/hdpi",
    ratio: "960 x 1600 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro3 = advancedValues.android) === null || _advancedValues$andro3 === void 0 || (_advancedValues$andro3 = _advancedValues$andro3.components) === null || _advancedValues$andro3 === void 0 || (_advancedValues$andro3 = _advancedValues$andro3.portrait) === null || _advancedValues$andro3 === void 0 || (_advancedValues$andro3 = _advancedValues$andro3.dimensions) === null || _advancedValues$andro3 === void 0 || (_advancedValues$andro3 = _advancedValues$andro3.xxhdpi) === null || _advancedValues$andro3 === void 0 ? void 0 : _advancedValues$andro3.image,
    path: "android.components.portrait.dimensions.xxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxxhdpi/mdpi",
    ratio: "1280 x 1920 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro4 = advancedValues.android) === null || _advancedValues$andro4 === void 0 || (_advancedValues$andro4 = _advancedValues$andro4.components) === null || _advancedValues$andro4 === void 0 || (_advancedValues$andro4 = _advancedValues$andro4.portrait) === null || _advancedValues$andro4 === void 0 || (_advancedValues$andro4 = _advancedValues$andro4.dimensions) === null || _advancedValues$andro4 === void 0 || (_advancedValues$andro4 = _advancedValues$andro4.xxxhdpi) === null || _advancedValues$andro4 === void 0 ? void 0 : _advancedValues$andro4.image,
    path: "android.components.portrait.dimensions.xxxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement("h2", null, t('LANDSCAPE', 'Landscape')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "ldpi",
    ratio: "200 x 320 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro5 = advancedValues.android) === null || _advancedValues$andro5 === void 0 || (_advancedValues$andro5 = _advancedValues$andro5.components) === null || _advancedValues$andro5 === void 0 || (_advancedValues$andro5 = _advancedValues$andro5.landscape) === null || _advancedValues$andro5 === void 0 || (_advancedValues$andro5 = _advancedValues$andro5.dimensions) === null || _advancedValues$andro5 === void 0 || (_advancedValues$andro5 = _advancedValues$andro5.idpi) === null || _advancedValues$andro5 === void 0 ? void 0 : _advancedValues$andro5.image,
    path: "android.components.landscape.dimensions.idpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xhdpi",
    ratio: "720 x 1280 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro6 = advancedValues.android) === null || _advancedValues$andro6 === void 0 || (_advancedValues$andro6 = _advancedValues$andro6.components) === null || _advancedValues$andro6 === void 0 || (_advancedValues$andro6 = _advancedValues$andro6.landscape) === null || _advancedValues$andro6 === void 0 || (_advancedValues$andro6 = _advancedValues$andro6.dimensions) === null || _advancedValues$andro6 === void 0 || (_advancedValues$andro6 = _advancedValues$andro6.xhdpi) === null || _advancedValues$andro6 === void 0 ? void 0 : _advancedValues$andro6.image,
    path: "android.components.landscape.dimensions.xhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxhdpi/hdpi",
    ratio: "960 x 1600 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro7 = advancedValues.android) === null || _advancedValues$andro7 === void 0 || (_advancedValues$andro7 = _advancedValues$andro7.components) === null || _advancedValues$andro7 === void 0 || (_advancedValues$andro7 = _advancedValues$andro7.landscape) === null || _advancedValues$andro7 === void 0 || (_advancedValues$andro7 = _advancedValues$andro7.dimensions) === null || _advancedValues$andro7 === void 0 || (_advancedValues$andro7 = _advancedValues$andro7.xxhdpi) === null || _advancedValues$andro7 === void 0 ? void 0 : _advancedValues$andro7.image,
    path: "android.components.landscape.dimensions.xxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxxhdpi/mdpi",
    ratio: "1280 x 1920 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$andro8 = advancedValues.android) === null || _advancedValues$andro8 === void 0 || (_advancedValues$andro8 = _advancedValues$andro8.components) === null || _advancedValues$andro8 === void 0 || (_advancedValues$andro8 = _advancedValues$andro8.landscape) === null || _advancedValues$andro8 === void 0 || (_advancedValues$andro8 = _advancedValues$andro8.dimensions) === null || _advancedValues$andro8 === void 0 || (_advancedValues$andro8 = _advancedValues$andro8.xxxhdpi) === null || _advancedValues$andro8 === void 0 ? void 0 : _advancedValues$andro8.image,
    path: "android.components.landscape.dimensions.xxxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('iOS_SPLASH', 'iOS splash')), /*#__PURE__*/_react.default.createElement("h2", null, t('PORTRAIT', 'Portrait')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Ipad",
    ratio: "1536 x 2048 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$ios = advancedValues.ios) === null || _advancedValues$ios === void 0 || (_advancedValues$ios = _advancedValues$ios.components) === null || _advancedValues$ios === void 0 || (_advancedValues$ios = _advancedValues$ios.portrait) === null || _advancedValues$ios === void 0 || (_advancedValues$ios = _advancedValues$ios.dimensions) === null || _advancedValues$ios === void 0 || (_advancedValues$ios = _advancedValues$ios.ipad) === null || _advancedValues$ios === void 0 ? void 0 : _advancedValues$ios.image,
    path: "ios.components.portrait.dimensions.ipad.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Iphone 3/4",
    ratio: "640 x 960 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$ios2 = advancedValues.ios) === null || _advancedValues$ios2 === void 0 || (_advancedValues$ios2 = _advancedValues$ios2.components) === null || _advancedValues$ios2 === void 0 || (_advancedValues$ios2 = _advancedValues$ios2.portrait) === null || _advancedValues$ios2 === void 0 || (_advancedValues$ios2 = _advancedValues$ios2.dimensions) === null || _advancedValues$ios2 === void 0 || (_advancedValues$ios2 = _advancedValues$ios2.iphone) === null || _advancedValues$ios2 === void 0 ? void 0 : _advancedValues$ios2.image,
    path: "ios.components.portrait.dimensions.iphone.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Iphone 5/6 plus",
    ratio: "640 x 960 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$ios3 = advancedValues.ios) === null || _advancedValues$ios3 === void 0 || (_advancedValues$ios3 = _advancedValues$ios3.components) === null || _advancedValues$ios3 === void 0 || (_advancedValues$ios3 = _advancedValues$ios3.portrait) === null || _advancedValues$ios3 === void 0 || (_advancedValues$ios3 = _advancedValues$ios3.dimensions) === null || _advancedValues$ios3 === void 0 || (_advancedValues$ios3 = _advancedValues$ios3.iphone_plus) === null || _advancedValues$ios3 === void 0 ? void 0 : _advancedValues$ios3.image,
    path: "ios.components.portrait.dimensions.iphone_plus.image",
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement("h2", null, t('LANDSCAPE', 'Landscape')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Ipad",
    ratio: "2048 x 1536 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$ios4 = advancedValues.ios) === null || _advancedValues$ios4 === void 0 || (_advancedValues$ios4 = _advancedValues$ios4.components) === null || _advancedValues$ios4 === void 0 || (_advancedValues$ios4 = _advancedValues$ios4.landscape) === null || _advancedValues$ios4 === void 0 || (_advancedValues$ios4 = _advancedValues$ios4.dimensions) === null || _advancedValues$ios4 === void 0 || (_advancedValues$ios4 = _advancedValues$ios4.ipad) === null || _advancedValues$ios4 === void 0 ? void 0 : _advancedValues$ios4.image,
    path: "ios.components.landscape.dimensions.ipad.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Iphone",
    ratio: "2208 x 1242 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$ios5 = advancedValues.ios) === null || _advancedValues$ios5 === void 0 || (_advancedValues$ios5 = _advancedValues$ios5.components) === null || _advancedValues$ios5 === void 0 || (_advancedValues$ios5 = _advancedValues$ios5.landscape) === null || _advancedValues$ios5 === void 0 || (_advancedValues$ios5 = _advancedValues$ios5.dimensions) === null || _advancedValues$ios5 === void 0 || (_advancedValues$ios5 = _advancedValues$ios5.iphone) === null || _advancedValues$ios5 === void 0 ? void 0 : _advancedValues$ios5.image,
    path: "ios.components.landscape.dimensions.iphone.image",
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement("h2", null, t('ANY', 'Any')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('ANY', 'Any'),
    ratio: "2732 x 2732 px",
    photo: advancedValues === null || advancedValues === void 0 || (_advancedValues$ios6 = advancedValues.ios) === null || _advancedValues$ios6 === void 0 || (_advancedValues$ios6 = _advancedValues$ios6.components) === null || _advancedValues$ios6 === void 0 || (_advancedValues$ios6 = _advancedValues$ios6.any) === null || _advancedValues$ios6 === void 0 ? void 0 : _advancedValues$ios6.image,
    path: "ios.components.any.image",
    handleChangePhoto: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleUpdateSiteTheme(advancedValues);
    }
  }, t('SAVE', 'Save'))));
};
exports.AppResources = AppResources;