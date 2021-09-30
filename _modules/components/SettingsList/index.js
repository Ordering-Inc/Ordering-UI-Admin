"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsList = exports.SettingsListUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _NotFoundSource = require("../../components/NotFoundSource");

var _Buttons = require("../../styles/Buttons");

var _SettingsSelectUI = require("../SettingsSelectUI");

var _Confirm = require("../Confirm");

var _SettingsCountryFilter = require("../SettingsCountryFilter");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SettingsListUI = function SettingsListUI(props) {
  var _settingsState$change;

  var settingsState = props.settingsState,
      configs = props.configs,
      formState = props.formState,
      onCloseSettingsList = props.onCloseSettingsList,
      handleCheckBoxChange = props.handleCheckBoxChange,
      handleInputChange = props.handleInputChange,
      handleClickUpdate = props.handleClickUpdate,
      handleChangeFormState = props.handleChangeFormState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var transformArray = function transformArray(values) {
    return '[' + values + ']';
  };

  var formatArray = function formatArray(values) {
    values = values.replace('[', '');
    values = values.replace(']', '');
    return values;
  };

  var handleSubmit = function handleSubmit() {
    var _iterator = _createForOfIteratorHelper(formState.changes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (item.key === 'driver_tip_options') {
          if (!/^((\d)+,)*(\d)+$/.test(item.value)) {
            setAlertState({
              open: true,
              content: t('DRIVER_TIP_OPTIONS_ERROR')
            });
            return;
          }

          updateFormState(item.key, transformArray(item.value));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    handleClickUpdate && handleClickUpdate();
  };

  var updateFormState = function updateFormState(key, value) {
    var _changes = formState === null || formState === void 0 ? void 0 : formState.changes.map(function (item) {
      if (item.key === key) {
        return _objectSpread(_objectSpread({}, item), {}, {
          value: value
        });
      }

      return item;
    });

    handleChangeFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _changes
    }));
  };

  (0, _react.useEffect)(function () {
    var _settingsState$result;

    if (settingsState !== null && settingsState !== void 0 && (_settingsState$result = settingsState.result) !== null && _settingsState$result !== void 0 && _settingsState$result.error) {
      var _settingsState$result2;

      setAlertState({
        open: true,
        content: settingsState === null || settingsState === void 0 ? void 0 : (_settingsState$result2 = settingsState.result) === null || _settingsState$result2 === void 0 ? void 0 : _settingsState$result2.result
      });
    }
  }, [settingsState === null || settingsState === void 0 ? void 0 : settingsState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SettingsListContainer, null, !settingsState.error && settingsState.loading && /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40,
    width: 250,
    style: {
      marginBottom: '25px'
    }
  }), _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 25,
      width: 200
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 30
    }));
  })), !settingsState.error && !settingsState.loading && configs && !settingsState.API && /*#__PURE__*/_react.default.createElement(_styles.GeneralContainer, null, /*#__PURE__*/_react.default.createElement(_styles.GeneralTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('All_SETTINGS', 'All Settings'))), /*#__PURE__*/_react.default.createElement(_styles.FormContainer, null, configs.length > 0 && configs.map(function (config, i) {
    var _config$options, _config$options2, _config$options3, _config$options4;

    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, config.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      onChange: function onChange(e) {
        return handleInputChange(e.target.value, config === null || config === void 0 ? void 0 : config.id);
      },
      className: "form-control",
      placeholder: "placeholder"
    })), config.type === 2 && (config.key === 'country_autocomplete' ? /*#__PURE__*/_react.default.createElement(_SettingsCountryFilter.SettingsCountryFilter, {
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      handleSelectChange: function handleSelectChange(value) {
        return handleInputChange(value, config === null || config === void 0 ? void 0 : config.id);
      },
      label: config === null || config === void 0 ? void 0 : config.name
    }) : /*#__PURE__*/_react.default.createElement(_SettingsSelectUI.SettingsSelectUI, {
      config: config,
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      handleSelectChange: function handleSelectChange(value) {
        return handleInputChange(value, config === null || config === void 0 ? void 0 : config.id);
      }
    })), config.type === 3 && /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, null, (config === null || config === void 0 ? void 0 : config.name) && /*#__PURE__*/_react.default.createElement("p", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.length) > 0 && (config === null || config === void 0 ? void 0 : (_config$options2 = config.options) === null || _config$options2 === void 0 ? void 0 : _config$options2.map(function (item, j) {
      return /*#__PURE__*/_react.default.createElement(_styles.FormGroupWrapper, {
        key: j
      }, /*#__PURE__*/_react.default.createElement(_styles.FormGroupCheck, {
        className: "checkbox"
      }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: item === null || item === void 0 ? void 0 : item.value,
        "data-id": config === null || config === void 0 ? void 0 : config.id,
        defaultChecked: config === null || config === void 0 ? void 0 : config.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
        onChange: function onChange(e) {
          return handleCheckBoxChange(e, true, config === null || config === void 0 ? void 0 : config.value);
        }
      }), item.text)));
    })), !(config !== null && config !== void 0 && config.options) && /*#__PURE__*/_react.default.createElement(_styles.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value'))), config.type === 4 && (config.key === 'driver_tip_options' ? /*#__PURE__*/_react.default.createElement(_styles.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      defaultValue: formatArray(config === null || config === void 0 ? void 0 : config.value),
      onChange: function onChange(e) {
        return handleInputChange(e.target.value, config === null || config === void 0 ? void 0 : config.id);
      },
      className: "form-control",
      placeholder: "placeholder"
    })) : /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, null, (config === null || config === void 0 ? void 0 : config.name) && /*#__PURE__*/_react.default.createElement("p", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : (_config$options3 = config.options) === null || _config$options3 === void 0 ? void 0 : _config$options3.length) > 0 && (config === null || config === void 0 ? void 0 : (_config$options4 = config.options) === null || _config$options4 === void 0 ? void 0 : _config$options4.map(function (item, j) {
      return /*#__PURE__*/_react.default.createElement(_styles.FormGroupWrapper, {
        key: j
      }, /*#__PURE__*/_react.default.createElement(_styles.FormGroupCheck, {
        className: "checkbox"
      }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: item === null || item === void 0 ? void 0 : item.value,
        "data-id": config === null || config === void 0 ? void 0 : config.id,
        defaultChecked: JSON.parse(config === null || config === void 0 ? void 0 : config.value).includes(parseInt(item === null || item === void 0 ? void 0 : item.value)),
        onChange: function onChange(e) {
          return handleCheckBoxChange(e, false, config === null || config === void 0 ? void 0 : config.value);
        }
      }), item.text)));
    })), !(config !== null && config !== void 0 && config.options) && /*#__PURE__*/_react.default.createElement(_styles.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value')))));
  }), (settingsState === null || settingsState === void 0 ? void 0 : (_settingsState$change = settingsState.changes) === null || _settingsState$change === void 0 ? void 0 : _settingsState$change.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.SubmitBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: handleSubmit
  }, t('SAVE', 'Save'))))), !settingsState.loading && settingsState.error && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CONFIG', 'Sorry, we couldn\'t find the config.'),
    btnTitle: t('PROFILE_CATEGORY_REDIRECT', 'Go to Category Description'),
    onClickButton: onCloseSettingsList
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('SETTINGS', 'Settings'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};

exports.SettingsListUI = SettingsListUI;

var SettingsList = function SettingsList(props) {
  var settingsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SettingsListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SettingsList, settingsListProps);
};

exports.SettingsList = SettingsList;