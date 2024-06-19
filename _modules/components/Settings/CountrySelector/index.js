"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountrySelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CountrySelector = exports.CountrySelector = function CountrySelector(props) {
  var countries = props.countries,
    defaultValue = props.defaultValue,
    handleChangeCountry = props.handleChangeCountry,
    isDisabled = props.isDisabled;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var options = countries.map(function (country) {
    return {
      value: country === null || country === void 0 ? void 0 : country.id,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, country === null || country === void 0 ? void 0 : country.name)
    };
  });
  return /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: defaultValue,
    placeholder: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('SELECT_COUNTRY', 'Select a country')),
    options: options,
    onChange: function onChange(val) {
      return handleChangeCountry(val);
    },
    isDisabled: isDisabled
  });
};