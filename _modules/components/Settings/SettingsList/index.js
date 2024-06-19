"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsListUI = exports.SettingsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _SettingsSelectUI = require("../SettingsSelectUI");
var _SettingsCountryFilter = require("../SettingsCountryFilter");
var _SettingsImage = require("../SettingsImage");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SettingsListUI = exports.SettingsListUI = function SettingsListUI(props) {
  var _settingsState$change;
  var settingsState = props.settingsState,
    configs = props.configs,
    formState = props.formState,
    onCloseSettingsList = props.onCloseSettingsList,
    handleCheckBoxChange = props.handleCheckBoxChange,
    handleInputChange = props.handleInputChange,
    handleClickUpdate = props.handleClickUpdate,
    saveConfig = props.saveConfig,
    isCampaign = props.isCampaign;
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
  var valuesTypeSix = ['catering_delivery', 'catering_pickup'];
  var formatArray = function formatArray(values) {
    values = values.replace('[', '');
    values = values.replace(']', '');
    return values;
  };
  var handleSubmit = function handleSubmit() {
    var invalidMessageList = [];
    var _iterator = _createForOfIteratorHelper(formState.changes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        switch (item === null || item === void 0 ? void 0 : item.key) {
          case 'driver_tip_options':
            !/^((\d)+,)*(\d)+$/.test(item.value) && invalidMessageList.push(t('DRIVER_TIP_OPTIONS_ERROR'));
            break;
          case 'max_days_preorder':
            item.value < 1 && invalidMessageList.push(t('MAX_PREORDER_DAYS_MUST_BIGGER_ZERO', 'Max preorder days must be bigger than zero'));
            break;
          case 'platform_fee_fixed':
          case 'platform_fee_percentage':
            if (isNaN(Number(item === null || item === void 0 ? void 0 : item.value))) {
              invalidMessageList.push(t('VALIDATION_ERROR_NUMERIC', "The ".concat(item === null || item === void 0 ? void 0 : item.name, " must be a number.")).replace('_attribute_', item === null || item === void 0 ? void 0 : item.name));
            }
            if ((item === null || item === void 0 ? void 0 : item.key) === 'platform_fee_percentage' && Number(item === null || item === void 0 ? void 0 : item.value) > 100) {
              invalidMessageList.push(t('VALIDATION_MUST_SMALLER_HUNDRED', "".concat(item === null || item === void 0 ? void 0 : item.name, " must be not bigger than 100")).replace('_attribute_', item === null || item === void 0 ? void 0 : item.name));
            }
            break;
          default:
            break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (invalidMessageList.length > 0) {
      setAlertState({
        open: true,
        content: invalidMessageList
      });
      return;
    }
    handleClickUpdate && handleClickUpdate();
  };
  var timeout = null;
  var previousSearch = null;
  var handleChangeTypeSix = function handleChangeTypeSix(catering, config) {
    if (previousSearch !== catering.value) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        var cateringString = config === null || config === void 0 ? void 0 : config.value;
        var stringParam = cateringString.split('|').map(function (string) {
          return string.includes(catering.type) ? "".concat(catering.type, ",").concat(catering.value) : string;
        }).join('|');
        handleInputChange(stringParam, config.id);
      }, 1500);
    }
    previousSearch = catering.value;
  };
  var handleKeyPress = function handleKeyPress(e, key) {
    switch (key) {
      case 'platform_fee_fixed':
      case 'platform_fee_percentage':
        !/^[0-9.]$/.test(e.key) && e.preventDefault();
        break;
      default:
        break;
    }
  };
  (0, _react.useEffect)(function () {
    var _settingsState$result;
    if (settingsState !== null && settingsState !== void 0 && (_settingsState$result = settingsState.result) !== null && _settingsState$result !== void 0 && _settingsState$result.error) {
      var _settingsState$result2;
      setAlertState({
        open: true,
        content: settingsState === null || settingsState === void 0 || (_settingsState$result2 = settingsState.result) === null || _settingsState$result2 === void 0 ? void 0 : _settingsState$result2.result
      });
    }
  }, [settingsState === null || settingsState === void 0 ? void 0 : settingsState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SettingsListContainer, null, !isCampaign && /*#__PURE__*/_react.default.createElement(_styles2.GeneralTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('SETTINGS', 'All Settings'))), !settingsState.error && settingsState.loading && /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, _toConsumableArray(Array(6)).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 20,
      width: 200
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 44
    }));
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 44
  })), !settingsState.error && !settingsState.loading && configs && !settingsState.API && /*#__PURE__*/_react.default.createElement(_styles2.GeneralContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, null, configs.length > 0 && configs.map(function (config, i) {
    var _config$options, _config$options2, _config$options3, _config$options4, _config$options5, _config$options6, _config$value;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, config.type === 1 && /*#__PURE__*/_react.default.createElement(_styles2.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement(_styles2.Description, null, config === null || config === void 0 ? void 0 : config.description), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      value: config === null || config === void 0 ? void 0 : config.value,
      onChange: function onChange(e) {
        return handleInputChange(e.target.value, config === null || config === void 0 ? void 0 : config.id);
      },
      onKeyPress: function onKeyPress(e) {
        return handleKeyPress(e, config === null || config === void 0 ? void 0 : config.key);
      },
      className: "form-control",
      placeholder: config === null || config === void 0 ? void 0 : config.name
    })), config.type === 2 && (config.key === 'country_autocomplete' ? /*#__PURE__*/_react.default.createElement(_SettingsCountryFilter.SettingsCountryFilter, {
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      handleSelectChange: function handleSelectChange(value) {
        return handleInputChange(value, config === null || config === void 0 ? void 0 : config.id);
      },
      label: config === null || config === void 0 ? void 0 : config.name,
      description: config === null || config === void 0 ? void 0 : config.description
    }) : /*#__PURE__*/_react.default.createElement(_SettingsSelectUI.SettingsSelectUI, {
      config: config,
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      handleSelectChange: function handleSelectChange(value) {
        return handleInputChange(value, config === null || config === void 0 ? void 0 : config.id);
      }
    })), config.type === 3 && /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, (config === null || config === void 0 ? void 0 : config.name) && /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement("p", null, config === null || config === void 0 ? void 0 : config.description), (config === null || config === void 0 ? void 0 : config.key) !== 'filter_order_options' && (config === null || config === void 0 || (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.length) > 0 && (config === null || config === void 0 || (_config$options2 = config.options) === null || _config$options2 === void 0 ? void 0 : _config$options2.map(function (item, j) {
      return /*#__PURE__*/_react.default.createElement(_styles2.FormGroupWrapper, {
        key: j
      }, /*#__PURE__*/_react.default.createElement(_styles2.FormGroupCheck, {
        className: "checkbox"
      }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: item === null || item === void 0 ? void 0 : item.value,
        "data-id": config === null || config === void 0 ? void 0 : config.id,
        defaultChecked: config === null || config === void 0 ? void 0 : config.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
        onChange: function onChange(e) {
          return handleCheckBoxChange(e, true, config === null || config === void 0 ? void 0 : config.value);
        }
      }), t(item.text.toUpperCase(), item.text.replace(/_/g, ' ').toLowerCase()))));
    })), (config === null || config === void 0 ? void 0 : config.key) === 'filter_order_options' && (config === null || config === void 0 || (_config$options3 = config.options) === null || _config$options3 === void 0 ? void 0 : _config$options3.length) > 0 && (config === null || config === void 0 || (_config$options4 = config.options) === null || _config$options4 === void 0 ? void 0 : _config$options4.filter(function (option) {
      return option.value === 'external_id' || option.value === 'driver' || option.value === 'driver_group_general';
    }).map(function (item, j) {
      return /*#__PURE__*/_react.default.createElement(_styles2.FormGroupWrapper, {
        key: j
      }, /*#__PURE__*/_react.default.createElement(_styles2.FormGroupCheck, {
        className: "checkbox"
      }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: item === null || item === void 0 ? void 0 : item.value,
        "data-id": config === null || config === void 0 ? void 0 : config.id,
        defaultChecked: config === null || config === void 0 ? void 0 : config.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
        onChange: function onChange(e) {
          return handleCheckBoxChange(e, true, config === null || config === void 0 ? void 0 : config.value);
        }
      }), t(item.text.toUpperCase(), item.text.replace(/_/g, ' ').toLowerCase()))));
    })), !(config !== null && config !== void 0 && config.options) && /*#__PURE__*/_react.default.createElement(_styles2.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value'))), config.type === 4 && (config.key === 'driver_tip_options' ? /*#__PURE__*/_react.default.createElement(_styles2.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement(_styles2.Description, null, config === null || config === void 0 ? void 0 : config.description), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      defaultValue: formatArray(config === null || config === void 0 ? void 0 : config.value),
      onChange: function onChange(e) {
        return handleInputChange(e.target.value, config === null || config === void 0 ? void 0 : config.id);
      },
      className: "form-control",
      placeholder: "placeholder"
    })) : /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, (config === null || config === void 0 ? void 0 : config.name) && /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement("p", null, config === null || config === void 0 ? void 0 : config.description), (config === null || config === void 0 || (_config$options5 = config.options) === null || _config$options5 === void 0 ? void 0 : _config$options5.length) > 0 && (config === null || config === void 0 || (_config$options6 = config.options) === null || _config$options6 === void 0 ? void 0 : _config$options6.map(function (item, j) {
      return /*#__PURE__*/_react.default.createElement(_styles2.FormGroupWrapper, {
        key: j
      }, /*#__PURE__*/_react.default.createElement(_styles2.FormGroupCheck, {
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
    })), !(config !== null && config !== void 0 && config.options) && /*#__PURE__*/_react.default.createElement(_styles2.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value')))), config.type === 5 && /*#__PURE__*/_react.default.createElement(_SettingsImage.SettingsImage, {
      config: config,
      saveConfig: saveConfig
    }), config.type === 6 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement(_styles2.Description, null, config === null || config === void 0 ? void 0 : config.description, " ", [1312, 1315, 1316].includes(config === null || config === void 0 ? void 0 : config.id) && "(".concat(t('MINUTES', 'Minutes'), ")")), config === null || config === void 0 || (_config$value = config.value) === null || _config$value === void 0 || (_config$value = _config$value.split('|')) === null || _config$value === void 0 || (_config$value = _config$value.filter(function (value) {
      return valuesTypeSix.includes(value === null || value === void 0 ? void 0 : value.split(',')[0]);
    })) === null || _config$value === void 0 ? void 0 : _config$value.map(function (value, i, hash) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: "".concat(config === null || config === void 0 ? void 0 : config.id, " ").concat(value)
      }, /*#__PURE__*/_react.default.createElement(_styles2.Description, {
        typeSix: true
      }, t(value === null || value === void 0 ? void 0 : value.split(',')[0], value === null || value === void 0 ? void 0 : value.split(',')[0].replace('_', ' '))), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        defaultValue: value === null || value === void 0 ? void 0 : value.split(',')[1],
        onChange: function onChange(e) {
          return handleChangeTypeSix({
            value: e.target.value,
            type: value === null || value === void 0 ? void 0 : value.split(',')[0]
          }, config);
        },
        className: "form-control",
        placeholder: 0
      }));
    }))));
  }))), !settingsState.loading && settingsState.error && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_CONFIG', 'Sorry, we couldn\'t find the config.'),
    btnTitle: t('PROFILE_CATEGORY_REDIRECT', 'Go to Category Description'),
    onClickButton: onCloseSettingsList
  })), (settingsState === null || settingsState === void 0 || (_settingsState$change = settingsState.changes) === null || _settingsState$change === void 0 ? void 0 : _settingsState$change.length) > 0 && !settingsState.loading && !settingsState.API && /*#__PURE__*/_react.default.createElement(_styles2.SubmitBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSubmit
  }, t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var SettingsList = exports.SettingsList = function SettingsList(props) {
  var settingsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SettingsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SettingsList, settingsListProps);
};