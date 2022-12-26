"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _styles2 = require("../../../../styles");
var _utils = require("../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessDetails = function BusinessDetails(props) {
  var _configs$google_maps_, _formState$changes$na, _formState$changes, _formState$changes$ad, _formState$changes2, _configs$country_auto, _formState$changes$zi, _formState$changes3, _configs$google_maps_2, _configs$google_maps_3, _formState$changes$lo, _formState$changes4, _formState$changes$ce, _formState$changes5;
  var formState = props.formState,
    handleChangeAddress = props.handleChangeAddress,
    handleChangeInput = props.handleChangeInput,
    handleChangeCenter = props.handleChangeCenter,
    placeId = props.placeId;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var googleMapsApiKey = configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  };
  var defaultPosition = {
    lat: 40.77473399999999,
    lng: -73.9653844
  };
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_DETAILS', 'Business details')), /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('BUSINESS_NAME', 'Business Name')), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    name: "name",
    placeholder: t('NAME', 'Name'),
    value: (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : '',
    onChange: function onChange(e) {
      handleChangeInput([{
        name: 'name',
        value: e.target.value
      }, {
        name: 'slug',
        value: (0, _utils.stringToSlug)(e.target.value)
      }], true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('ADDRESS', 'Address')), googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleAutocompleteInput, {
    name: "address",
    className: "input-autocomplete",
    apiKey: googleMapsApiKey,
    placeholder: t('ADDRESS', 'Address'),
    onChangeAddress: function onChangeAddress(e) {
      handleChangeAddress(e);
    },
    onChange: function onChange(e) {
      handleChangeInput(e);
    },
    defaultValue: (_formState$changes$ad = formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.address) !== null && _formState$changes$ad !== void 0 ? _formState$changes$ad : '',
    autoComplete: "new-password",
    countryCode: (configs === null || configs === void 0 ? void 0 : (_configs$country_auto = configs.country_autocomplete) === null || _configs$country_auto === void 0 ? void 0 : _configs$country_auto.value) || '*'
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    name: "zipcode",
    placeholder: t('ZIPCODE', 'Zipcode'),
    defaultValue: (_formState$changes$zi = formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.zipcode) !== null && _formState$changes$zi !== void 0 ? _formState$changes$zi : '',
    onChange: handleChangeInput
  })), /*#__PURE__*/_react.default.createElement(_styles.GoogleMapContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('GOOGLE_PLACE_ID', 'Google place ID')), /*#__PURE__*/_react.default.createElement("p", null, placeId !== null && placeId !== void 0 ? placeId : googleMapsApiKey), (configs === null || configs === void 0 ? void 0 : (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value) && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_3 = configs.google_maps_api_key) === null || _configs$google_maps_3 === void 0 ? void 0 : _configs$google_maps_3.value,
    location: (_formState$changes$lo = formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.location) !== null && _formState$changes$lo !== void 0 ? _formState$changes$lo : defaultPosition,
    mapControls: googleMapsControls,
    handleChangeCenter: handleChangeCenter,
    isFitCenter: true
  }))), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    noBottom: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('INT_NUMBER', 'Int. number')), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    name: "cellphone",
    placeholder: t('INT_NUMBER', 'Int. number'),
    value: (_formState$changes$ce = formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.cellphone) !== null && _formState$changes$ce !== void 0 ? _formState$changes$ce : '',
    onChange: handleChangeInput
  }))));
};
exports.BusinessDetails = BusinessDetails;