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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AppResources = function AppResources(props) {
  var _advancedValues$andro, _advancedValues$andro2, _advancedValues$andro3, _advancedValues$andro4, _advancedValues$andro5, _advancedValues$andro6, _advancedValues$andro7, _advancedValues$andro8, _advancedValues$andro9, _advancedValues$andro10, _advancedValues$andro11, _advancedValues$andro12, _advancedValues$andro13, _advancedValues$andro14, _advancedValues$andro15, _advancedValues$andro16, _advancedValues$andro17, _advancedValues$andro18, _advancedValues$andro19, _advancedValues$andro20, _advancedValues$andro21, _advancedValues$andro22, _advancedValues$andro23, _advancedValues$andro24, _advancedValues$andro25, _advancedValues$andro26, _advancedValues$andro27, _advancedValues$andro28, _advancedValues$andro29, _advancedValues$andro30, _advancedValues$andro31, _advancedValues$andro32, _advancedValues$andro33, _advancedValues$andro34, _advancedValues$andro35, _advancedValues$andro36, _advancedValues$andro37, _advancedValues$andro38, _advancedValues$andro39, _advancedValues$andro40, _advancedValues$ios, _advancedValues$ios$c, _advancedValues$ios$c2, _advancedValues$ios$c3, _advancedValues$ios$c4, _advancedValues$ios2, _advancedValues$ios2$, _advancedValues$ios2$2, _advancedValues$ios2$3, _advancedValues$ios2$4, _advancedValues$ios3, _advancedValues$ios3$, _advancedValues$ios3$2, _advancedValues$ios3$3, _advancedValues$ios3$4, _advancedValues$ios4, _advancedValues$ios4$, _advancedValues$ios4$2, _advancedValues$ios4$3, _advancedValues$ios4$4, _advancedValues$ios5, _advancedValues$ios5$, _advancedValues$ios5$2, _advancedValues$ios5$3, _advancedValues$ios5$4, _advancedValues$ios6, _advancedValues$ios6$, _advancedValues$ios6$2;
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
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro = advancedValues.android) === null || _advancedValues$andro === void 0 ? void 0 : (_advancedValues$andro2 = _advancedValues$andro.components) === null || _advancedValues$andro2 === void 0 ? void 0 : (_advancedValues$andro3 = _advancedValues$andro2.portrait) === null || _advancedValues$andro3 === void 0 ? void 0 : (_advancedValues$andro4 = _advancedValues$andro3.dimensions) === null || _advancedValues$andro4 === void 0 ? void 0 : (_advancedValues$andro5 = _advancedValues$andro4.idpi) === null || _advancedValues$andro5 === void 0 ? void 0 : _advancedValues$andro5.image,
    path: "android.components.portrait.dimensions.idpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xhdpi",
    ratio: "720 x 1280 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro6 = advancedValues.android) === null || _advancedValues$andro6 === void 0 ? void 0 : (_advancedValues$andro7 = _advancedValues$andro6.components) === null || _advancedValues$andro7 === void 0 ? void 0 : (_advancedValues$andro8 = _advancedValues$andro7.portrait) === null || _advancedValues$andro8 === void 0 ? void 0 : (_advancedValues$andro9 = _advancedValues$andro8.dimensions) === null || _advancedValues$andro9 === void 0 ? void 0 : (_advancedValues$andro10 = _advancedValues$andro9.xhdpi) === null || _advancedValues$andro10 === void 0 ? void 0 : _advancedValues$andro10.image,
    path: "android.components.portrait.dimensions.xhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxhdpi/hdpi",
    ratio: "960 x 1600 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro11 = advancedValues.android) === null || _advancedValues$andro11 === void 0 ? void 0 : (_advancedValues$andro12 = _advancedValues$andro11.components) === null || _advancedValues$andro12 === void 0 ? void 0 : (_advancedValues$andro13 = _advancedValues$andro12.portrait) === null || _advancedValues$andro13 === void 0 ? void 0 : (_advancedValues$andro14 = _advancedValues$andro13.dimensions) === null || _advancedValues$andro14 === void 0 ? void 0 : (_advancedValues$andro15 = _advancedValues$andro14.xxhdpi) === null || _advancedValues$andro15 === void 0 ? void 0 : _advancedValues$andro15.image,
    path: "android.components.portrait.dimensions.xxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxxhdpi/mdpi",
    ratio: "1280 x 1920 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro16 = advancedValues.android) === null || _advancedValues$andro16 === void 0 ? void 0 : (_advancedValues$andro17 = _advancedValues$andro16.components) === null || _advancedValues$andro17 === void 0 ? void 0 : (_advancedValues$andro18 = _advancedValues$andro17.portrait) === null || _advancedValues$andro18 === void 0 ? void 0 : (_advancedValues$andro19 = _advancedValues$andro18.dimensions) === null || _advancedValues$andro19 === void 0 ? void 0 : (_advancedValues$andro20 = _advancedValues$andro19.xxxhdpi) === null || _advancedValues$andro20 === void 0 ? void 0 : _advancedValues$andro20.image,
    path: "android.components.portrait.dimensions.xxxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement("h2", null, t('LANDSCAPE', 'Landscape')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "ldpi",
    ratio: "200 x 320 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro21 = advancedValues.android) === null || _advancedValues$andro21 === void 0 ? void 0 : (_advancedValues$andro22 = _advancedValues$andro21.components) === null || _advancedValues$andro22 === void 0 ? void 0 : (_advancedValues$andro23 = _advancedValues$andro22.landscape) === null || _advancedValues$andro23 === void 0 ? void 0 : (_advancedValues$andro24 = _advancedValues$andro23.dimensions) === null || _advancedValues$andro24 === void 0 ? void 0 : (_advancedValues$andro25 = _advancedValues$andro24.idpi) === null || _advancedValues$andro25 === void 0 ? void 0 : _advancedValues$andro25.image,
    path: "android.components.landscape.dimensions.idpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xhdpi",
    ratio: "720 x 1280 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro26 = advancedValues.android) === null || _advancedValues$andro26 === void 0 ? void 0 : (_advancedValues$andro27 = _advancedValues$andro26.components) === null || _advancedValues$andro27 === void 0 ? void 0 : (_advancedValues$andro28 = _advancedValues$andro27.landscape) === null || _advancedValues$andro28 === void 0 ? void 0 : (_advancedValues$andro29 = _advancedValues$andro28.dimensions) === null || _advancedValues$andro29 === void 0 ? void 0 : (_advancedValues$andro30 = _advancedValues$andro29.xhdpi) === null || _advancedValues$andro30 === void 0 ? void 0 : _advancedValues$andro30.image,
    path: "android.components.landscape.dimensions.xhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxhdpi/hdpi",
    ratio: "960 x 1600 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro31 = advancedValues.android) === null || _advancedValues$andro31 === void 0 ? void 0 : (_advancedValues$andro32 = _advancedValues$andro31.components) === null || _advancedValues$andro32 === void 0 ? void 0 : (_advancedValues$andro33 = _advancedValues$andro32.landscape) === null || _advancedValues$andro33 === void 0 ? void 0 : (_advancedValues$andro34 = _advancedValues$andro33.dimensions) === null || _advancedValues$andro34 === void 0 ? void 0 : (_advancedValues$andro35 = _advancedValues$andro34.xxhdpi) === null || _advancedValues$andro35 === void 0 ? void 0 : _advancedValues$andro35.image,
    path: "android.components.landscape.dimensions.xxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "xxxhdpi/mdpi",
    ratio: "1280 x 1920 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$andro36 = advancedValues.android) === null || _advancedValues$andro36 === void 0 ? void 0 : (_advancedValues$andro37 = _advancedValues$andro36.components) === null || _advancedValues$andro37 === void 0 ? void 0 : (_advancedValues$andro38 = _advancedValues$andro37.landscape) === null || _advancedValues$andro38 === void 0 ? void 0 : (_advancedValues$andro39 = _advancedValues$andro38.dimensions) === null || _advancedValues$andro39 === void 0 ? void 0 : (_advancedValues$andro40 = _advancedValues$andro39.xxxhdpi) === null || _advancedValues$andro40 === void 0 ? void 0 : _advancedValues$andro40.image,
    path: "android.components.landscape.dimensions.xxxhdpi.image",
    handleChangePhoto: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('iOS_SPLASH', 'iOS splash')), /*#__PURE__*/_react.default.createElement("h2", null, t('PORTRAIT', 'Portrait')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Ipad",
    ratio: "1536 x 2048 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$ios = advancedValues.ios) === null || _advancedValues$ios === void 0 ? void 0 : (_advancedValues$ios$c = _advancedValues$ios.components) === null || _advancedValues$ios$c === void 0 ? void 0 : (_advancedValues$ios$c2 = _advancedValues$ios$c.portrait) === null || _advancedValues$ios$c2 === void 0 ? void 0 : (_advancedValues$ios$c3 = _advancedValues$ios$c2.dimensions) === null || _advancedValues$ios$c3 === void 0 ? void 0 : (_advancedValues$ios$c4 = _advancedValues$ios$c3.ipad) === null || _advancedValues$ios$c4 === void 0 ? void 0 : _advancedValues$ios$c4.image,
    path: "ios.components.portrait.dimensions.ipad.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Iphone 3/4",
    ratio: "640 x 960 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$ios2 = advancedValues.ios) === null || _advancedValues$ios2 === void 0 ? void 0 : (_advancedValues$ios2$ = _advancedValues$ios2.components) === null || _advancedValues$ios2$ === void 0 ? void 0 : (_advancedValues$ios2$2 = _advancedValues$ios2$.portrait) === null || _advancedValues$ios2$2 === void 0 ? void 0 : (_advancedValues$ios2$3 = _advancedValues$ios2$2.dimensions) === null || _advancedValues$ios2$3 === void 0 ? void 0 : (_advancedValues$ios2$4 = _advancedValues$ios2$3.iphone) === null || _advancedValues$ios2$4 === void 0 ? void 0 : _advancedValues$ios2$4.image,
    path: "ios.components.portrait.dimensions.iphone.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Iphone 5/6 plus",
    ratio: "640 x 960 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$ios3 = advancedValues.ios) === null || _advancedValues$ios3 === void 0 ? void 0 : (_advancedValues$ios3$ = _advancedValues$ios3.components) === null || _advancedValues$ios3$ === void 0 ? void 0 : (_advancedValues$ios3$2 = _advancedValues$ios3$.portrait) === null || _advancedValues$ios3$2 === void 0 ? void 0 : (_advancedValues$ios3$3 = _advancedValues$ios3$2.dimensions) === null || _advancedValues$ios3$3 === void 0 ? void 0 : (_advancedValues$ios3$4 = _advancedValues$ios3$3.iphone_plus) === null || _advancedValues$ios3$4 === void 0 ? void 0 : _advancedValues$ios3$4.image,
    path: "ios.components.portrait.dimensions.iphone_plus.image",
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement("h2", null, t('LANDSCAPE', 'Landscape')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Ipad",
    ratio: "2048 x 1536 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$ios4 = advancedValues.ios) === null || _advancedValues$ios4 === void 0 ? void 0 : (_advancedValues$ios4$ = _advancedValues$ios4.components) === null || _advancedValues$ios4$ === void 0 ? void 0 : (_advancedValues$ios4$2 = _advancedValues$ios4$.landscape) === null || _advancedValues$ios4$2 === void 0 ? void 0 : (_advancedValues$ios4$3 = _advancedValues$ios4$2.dimensions) === null || _advancedValues$ios4$3 === void 0 ? void 0 : (_advancedValues$ios4$4 = _advancedValues$ios4$3.ipad) === null || _advancedValues$ios4$4 === void 0 ? void 0 : _advancedValues$ios4$4.image,
    path: "ios.components.landscape.dimensions.ipad.image",
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: "Iphone",
    ratio: "2208 x 1242 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$ios5 = advancedValues.ios) === null || _advancedValues$ios5 === void 0 ? void 0 : (_advancedValues$ios5$ = _advancedValues$ios5.components) === null || _advancedValues$ios5$ === void 0 ? void 0 : (_advancedValues$ios5$2 = _advancedValues$ios5$.landscape) === null || _advancedValues$ios5$2 === void 0 ? void 0 : (_advancedValues$ios5$3 = _advancedValues$ios5$2.dimensions) === null || _advancedValues$ios5$3 === void 0 ? void 0 : (_advancedValues$ios5$4 = _advancedValues$ios5$3.iphone) === null || _advancedValues$ios5$4 === void 0 ? void 0 : _advancedValues$ios5$4.image,
    path: "ios.components.landscape.dimensions.iphone.image",
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement("h2", null, t('ANY', 'Any')), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('ANY', 'Any'),
    ratio: "2732 x 2732 px",
    photo: advancedValues === null || advancedValues === void 0 ? void 0 : (_advancedValues$ios6 = advancedValues.ios) === null || _advancedValues$ios6 === void 0 ? void 0 : (_advancedValues$ios6$ = _advancedValues$ios6.components) === null || _advancedValues$ios6$ === void 0 ? void 0 : (_advancedValues$ios6$2 = _advancedValues$ios6$.any) === null || _advancedValues$ios6$2 === void 0 ? void 0 : _advancedValues$ios6$2.image,
    path: "ios.components.any.image",
    handleChangePhoto: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleUpdateSiteTheme(true);
    }
  }, t('SAVE', 'Save'))));
};
exports.AppResources = AppResources;