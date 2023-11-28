"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestaurantSelectGuide = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RestaurantSelectGuide = exports.RestaurantSelectGuide = function RestaurantSelectGuide(props) {
  var _configs$google_maps_, _orderingBusiness$add, _configs$country_auto;
  var setBusiness = props.setBusiness,
    businessListState = props.businessListState,
    setStep = props.setStep,
    onClose = props.onClose,
    handleImport = props.handleImport,
    handleChangeAddress = props.handleChangeAddress,
    orderingBusiness = props.orderingBusiness,
    business = props.business;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var handleSubmit = function handleSubmit() {
    setStep(3);
    handleImport();
  };
  var handleSelectBusiness = function handleSelectBusiness(id) {
    var _businessListState$bu;
    var _business = (_businessListState$bu = businessListState.businesses) === null || _businessListState$bu === void 0 ? void 0 : _businessListState$bu.find(function (item) {
      return item._id === id;
    });
    setBusiness(_business);
  };
  (0, _react.useEffect)(function () {
    var _businessListState$bu2;
    var _options = (_businessListState$bu2 = businessListState.businesses) === null || _businessListState$bu2 === void 0 ? void 0 : _businessListState$bu2.map(function (item) {
      return {
        value: item._id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, item !== null && item !== void 0 && item.logo_photos[0] ? /*#__PURE__*/_react.default.createElement("img", {
          src: item.logo_photos[0],
          alt: ""
        }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), item.name)
      };
    });
    setOptions(_options);
  }, [businessListState === null || businessListState === void 0 ? void 0 : businessListState.businesses]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SELECT_YOUR_RESTAURANT_FROM_THIS_LIST', 'Select your restaurant from this list.')), /*#__PURE__*/_react.default.createElement(_styles2.SearchWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('ADDRESS', 'Address')), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleAutocompleteInput, {
    name: "address",
    className: "input-autocomplete",
    apiKey: googleMapsApiKey,
    placeholder: t('ADDRESS', 'Address'),
    onChangeAddress: function onChangeAddress(e) {
      handleChangeAddress(e);
    },
    defaultValue: (_orderingBusiness$add = orderingBusiness === null || orderingBusiness === void 0 ? void 0 : orderingBusiness.address) !== null && _orderingBusiness$add !== void 0 ? _orderingBusiness$add : '',
    autoComplete: "new-password",
    countryCode: (configs === null || configs === void 0 || (_configs$country_auto = configs.country_autocomplete) === null || _configs$country_auto === void 0 ? void 0 : _configs$country_auto.value) || '*'
  })), businessListState.loading && /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 44
  })), !businessListState.loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !businessListState.error ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (options === null || options === void 0 ? void 0 : options.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SELECT_YOUR_RESTAURANT', 'Select your restaurant')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: options,
    className: "select",
    defaultValue: (business === null || business === void 0 ? void 0 : business._id) || '',
    placeholder: t('SELECT_BUSINESS', 'Select a Business'),
    onChange: function onChange(value) {
      return handleSelectBusiness(value);
    },
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true
  })), options.length === 0 && /*#__PURE__*/_react.default.createElement(_styles2.EmptyData, null, t('NO_RESULT', 'There are no results'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.EmptyData, null, businessListState.error && typeof businessListState.error === 'string' && businessListState.error, businessListState.error && _typeof(businessListState.error) === 'object' && Array.isArray(businessListState.error) && /*#__PURE__*/_react.default.createElement("ul", null, businessListState.error.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, Array.isArray(item) ? item.map(function (err, index) {
      return typeof err === 'string' && /*#__PURE__*/_react.default.createElement("li", {
        key: index
      }, t(err.toUpperCase(), err));
    }) : typeof item === 'string' && /*#__PURE__*/_react.default.createElement("li", null, t(item.toUpperCase(), item)));
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return onClose();
    }
  }, t('SKIP', 'Skip')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSubmit,
    disabled: !(business !== null && business !== void 0 && business._id)
  }, t('CONTINUE', 'Continue'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))));
};