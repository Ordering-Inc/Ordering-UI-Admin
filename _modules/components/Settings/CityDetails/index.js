"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CityDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _CityAdministratorSelector = require("../CityAdministratorSelector");
var _CountrySelector = require("../CountrySelector");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CityDetails = exports.CityDetails = function CityDetails(props) {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CityDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CITY_SETTINGS', 'City settings')), city && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: city.enabled,
    onChange: function onChange(enabled) {
      return handleChangesState('enabled', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (changesState === null || changesState === void 0 ? void 0 : changesState.name) || (city === null || city === void 0 ? void 0 : city.name) || '',
    placeholder: t('NAME', 'Name'),
    onChange: function onChange(e) {
      return handleChangesState('name', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COUNTRY', 'Country')), /*#__PURE__*/_react.default.createElement(_CountrySelector.CountrySelector, {
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : changesState.country_id) || parseInt(city === null || city === void 0 ? void 0 : city.country_id),
    countries: countries,
    handleChangeCountry: function handleChangeCountry(val) {
      return handleChangesState('country_id', val);
    },
    isDisabled: !!city
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: Object.keys(changesState).length === 0,
    onClick: function onClick() {
      return city ? handleSaveCity() : handleAddCity();
    }
  }, city ? t('SAVE', 'Save') : t('ADD', 'Add'))));
};