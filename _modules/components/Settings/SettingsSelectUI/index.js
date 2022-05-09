"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsSelectUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Select = require("../../../styles/Select");

var _Inputs = require("../../../styles/Inputs");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SettingsSelectUI = function SettingsSelectUI(props) {
  var config = props.config,
      handleSelectChange = props.handleSelectChange;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!config) return;

    if (config.key === 'terms_and_conditions') {
      var selectTypes = [{
        value: 'true',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('YES', 'Yes'))
      }, {
        value: 'false',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('NO', 'No'))
      }];
      setOptions(selectTypes);
    } else {
      var _config$options;

      var selectedTypes = config === null || config === void 0 ? void 0 : (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.map(function (item) {
        return {
          value: item.value,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t(item.text.toUpperCase()))
        };
      });

      if (config.customizable) {
        selectedTypes.push({
          value: config === null || config === void 0 ? void 0 : config.value,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('CUSTOM', 'Custom')),
          showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
            className: "open-disabled"
          }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
            placeholder: t('CUSTOM', 'Custom'),
            defaultValue: config === null || config === void 0 ? void 0 : config.value,
            onChange: function onChange(e) {
              return handleSelectChange(e.target.value);
            }
          }))
        });
      }

      setOptions(selectedTypes);
    }
  }, [config]);
  return /*#__PURE__*/_react.default.createElement(_styles.SettingsSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SelectHeader, null, (config === null || config === void 0 ? void 0 : config.name) && /*#__PURE__*/_react.default.createElement("p", null, config === null || config === void 0 ? void 0 : config.name)), options ? /*#__PURE__*/_react.default.createElement(_styles.SelectContent, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    notAsync: true,
    defaultValue: config === null || config === void 0 ? void 0 : config.value,
    options: options,
    className: "select",
    onChange: function onChange(typeValue) {
      return handleSelectChange(typeValue);
    },
    placeholder: t('SELECT_A_OPTION', 'Select a option')
  })) : /*#__PURE__*/_react.default.createElement(_styles.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value')));
};

exports.SettingsSelectUI = SettingsSelectUI;