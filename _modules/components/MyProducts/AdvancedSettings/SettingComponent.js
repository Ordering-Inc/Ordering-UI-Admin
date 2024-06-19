"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _HideCheckBox = require("./HideCheckBox");
var _ImageBox = require("./ImageBox");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SettingComponent = exports.SettingComponent = function SettingComponent(props) {
  var settingList = props.settingList,
    handleUpdateThemeValue = props.handleUpdateThemeValue,
    advancedValues = props.advancedValues,
    themeStructure = props.themeStructure,
    noLabel = props.noLabel,
    themeId = props.themeId;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var deepFind = function deepFind(obj, path) {
    var paths = path.split('.');
    var current = JSON.parse(JSON.stringify(obj));
    var i;
    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] === undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  };
  var getOptions = function getOptions(path) {
    var options = deepFind(themeStructure, [path, 'options'].join('.'));
    if (!options) return [];
    var updatedOptions = options.map(function (option) {
      return {
        value: option,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t(option.toString().toUpperCase(), option))
      };
    });
    return updatedOptions;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, settingList.map(function (setting, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, setting.type === 'hidden' && /*#__PURE__*/_react.default.createElement(_HideCheckBox.HideCheckBox, {
      handleUpdateThemeValue: handleUpdateThemeValue,
      setting: setting,
      initialCheck: deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path),
      noLabel: noLabel
    }), setting.type === 'position' && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, setting.name), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
      options: getOptions(setting === null || setting === void 0 ? void 0 : setting.path),
      className: "select",
      defaultValue: deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path),
      placeholder: t('SELECT_OPTION', 'Select an option'),
      onChange: function onChange(value) {
        return handleUpdateThemeValue(value, setting === null || setting === void 0 ? void 0 : setting.path);
      }
    }))), setting.type === 'image' && /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
      title: setting.name,
      ratio: "900 x 200 px",
      photo: deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path),
      path: setting === null || setting === void 0 ? void 0 : setting.path,
      themeId: themeId,
      handleChangePhoto: handleUpdateThemeValue
    }), setting.type === 'color' && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, setting.name), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
      defaultColor: deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path) || '#2C7BE5',
      onChangeColor: function onChangeColor(color) {
        return handleUpdateThemeValue(color, setting === null || setting === void 0 ? void 0 : setting.path);
      }
    })), setting.type === 'input' && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, setting.name), /*#__PURE__*/_react.default.createElement(_styles.Input, {
      defaultValue: deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path),
      onChange: function onChange(e) {
        return handleUpdateThemeValue(e.target.value, setting === null || setting === void 0 ? void 0 : setting.path);
      },
      placeholder: setting.name
    })));
  }));
};