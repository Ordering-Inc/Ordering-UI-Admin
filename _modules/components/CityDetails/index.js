"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CityDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Switch = require("../../styles/Switch");

var _Inputs = require("../../styles/Inputs");

var _CityAdministratorSelector = require("../CityAdministratorSelector");

var _CountrySelector = require("../CountrySelector");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CityDetails = function CityDetails(props) {
  var city = props.city,
      cityManagers = props.cityManagers,
      countries = props.countries,
      handleChangesState = props.handleChangesState,
      handleSaveCity = props.handleSaveCity,
      changesState = props.changesState,
      handleAddCity = props.handleAddCity;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CityDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CITY_SETTINGS', 'City settings')), city && /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: city.enabled,
    onChange: function onChange(enabled) {
      return handleChangesState('enabled', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    value: (changesState === null || changesState === void 0 ? void 0 : changesState.name) || (city === null || city === void 0 ? void 0 : city.name) || '',
    placeholder: t('NAME', 'Name'),
    onChange: function onChange(e) {
      return handleChangesState('name', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ADMINISTRATOR', 'Administrator')), /*#__PURE__*/_react.default.createElement(_CityAdministratorSelector.CityAdministratorSelector, {
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : changesState.administrator_id) || (city === null || city === void 0 ? void 0 : city.administrator_id),
    cityManagers: cityManagers,
    handleChangeAdministrator: function handleChangeAdministrator(val) {
      return handleChangesState('administrator_id', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COUNTRY', 'Country')), /*#__PURE__*/_react.default.createElement(_CountrySelector.CountrySelector, {
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : changesState.country_id) || parseInt(city === null || city === void 0 ? void 0 : city.country_id),
    countries: countries,
    handleChangeCountry: function handleChangeCountry(val) {
      return handleChangesState('country_id', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: Object.keys(changesState).length === 0,
    onClick: function onClick() {
      return city ? handleSaveCity() : handleAddCity();
    }
  }, city ? t('SAVE', 'Save') : t('ADD', 'Add'))));
};

exports.CityDetails = CityDetails;