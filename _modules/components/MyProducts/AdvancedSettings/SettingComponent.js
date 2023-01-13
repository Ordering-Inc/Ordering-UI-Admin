"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _ImageBox = require("./ImageBox");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _Shared = require("../../Shared");
var _styles2 = require("../../../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SettingComponent = function SettingComponent(props) {
  var settingList = props.settingList,
    handleUpdateThemeValue = props.handleUpdateThemeValue,
    advancedValues = props.advancedValues,
    themeStructure = props.themeStructure;
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
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t(option.toString().toUpperCase(), option))
      };
    });
    return updatedOptions;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, settingList.map(function (setting, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, setting.type === 'hidden' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, setting.name), /*#__PURE__*/_react.default.createElement(_styles.HideCheckWrapper, {
      onClick: function onClick() {
        return handleUpdateThemeValue(!deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path), setting === null || setting === void 0 ? void 0 : setting.path);
      }
    }, deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "active"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, t('HIDDEN', 'Hidden')))), setting.type === 'position' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, setting.name), /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
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
      handleChangePhoto: handleUpdateThemeValue
    }), setting.type === 'color' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, setting.name), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
      defaultColor: deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path) || '#2C7BE5',
      onChangeColor: function onChangeColor(color) {
        return handleUpdateThemeValue(color, setting === null || setting === void 0 ? void 0 : setting.path);
      }
    })), setting.type === 'input' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, setting.name), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
      defaultValue: deepFind(advancedValues, setting === null || setting === void 0 ? void 0 : setting.path),
      onChange: function onChange(e) {
        return handleUpdateThemeValue(e.target.value, setting === null || setting === void 0 ? void 0 : setting.path);
      },
      placeholder: setting.name
    })));
  }));
};
exports.SettingComponent = SettingComponent;