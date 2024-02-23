"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCountrySettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));
var _CountrySettingDetail = require("../CountrySettingDetail");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MultiCountrySettingsUI = function MultiCountrySettingsUI(props) {
  var countryState = props.countryState,
    actionState = props.actionState,
    setMoveDistance = props.setMoveDistance,
    countryConfigState = props.countryConfigState,
    handleGetContryConfigs = props.handleGetContryConfigs,
    handleChangeConfig = props.handleChangeConfig;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCountryId = _useState2[0],
    setSelectedCountryId = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var handleOpenCountrySettingDetails = function handleOpenCountrySettingDetails(countryId) {
    handleGetContryConfigs(countryId);
    setSelectedCountryId(countryId);
    setMoveDistance(500);
  };
  var handleCloseDetails = function handleCloseDetails() {
    setSelectedCountryId(null);
    setMoveDistance(0);
  };
  (0, _react.useEffect)(function () {
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      });
    }
  }, [actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SitesListContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MULTI_COUNTRY_SETTINGS', 'Multi country settings')), countryState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SitesWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SiteItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 14
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.SitesWrapper, null, countryState.countries.map(function (country) {
    return /*#__PURE__*/_react.default.createElement(_styles.SiteItem, {
      key: country === null || country === void 0 ? void 0 : country.id,
      active: (country === null || country === void 0 ? void 0 : country.id) === selectedCountryId,
      disabled: !(country !== null && country !== void 0 && country.enabled),
      onClick: function onClick() {
        return (country === null || country === void 0 ? void 0 : country.enabled) && handleOpenCountrySettingDetails(country === null || country === void 0 ? void 0 : country.id);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, country === null || country === void 0 ? void 0 : country.name), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  }))), selectedCountryId && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: selectedCountryId,
    onClose: function onClose() {
      return handleCloseDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_CountrySettingDetail.CountrySettingDetail, {
    selectedCountryId: selectedCountryId,
    countryConfigState: countryConfigState,
    handleChangeConfig: handleChangeConfig
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SETTINGS', 'Settings'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var MultiCountrySettings = exports.MultiCountrySettings = function MultiCountrySettings(props) {
  var sitesAuthSettinsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MultiCountrySettingsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.MultiCountrySettings, sitesAuthSettinsProps);
};