"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RestaurantSelectGuide = function RestaurantSelectGuide(props) {
  var _configs$google_maps_, _orderingBusiness$add, _configs$country_auto;
  var setBusiness = props.setBusiness,
    businessList = props.businessList,
    setStep = props.setStep,
    onClose = props.onClose,
    handleImport = props.handleImport,
    handleChangeAddress = props.handleChangeAddress,
    orderingBusiness = props.orderingBusiness,
    isLoading = props.isLoading,
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
  var googleMapsApiKey = configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var handleSubmit = function handleSubmit() {
    setStep(3);
    handleImport();
  };
  var handleSelectBusiness = function handleSelectBusiness(id) {
    var _business = businessList.find(function (item) {
      return item._id === id;
    });
    setBusiness(_business);
  };
  (0, _react.useEffect)(function () {
    var _options = businessList === null || businessList === void 0 ? void 0 : businessList.map(function (item) {
      return {
        value: item._id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, item !== null && item !== void 0 && item.logo_photos[0] ? /*#__PURE__*/_react.default.createElement("img", {
          src: item.logo_photos[0],
          alt: ""
        }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), item.name)
      };
    });
    setOptions(_options);
  }, [businessList]);
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
    countryCode: (configs === null || configs === void 0 ? void 0 : (_configs$country_auto = configs.country_autocomplete) === null || _configs$country_auto === void 0 ? void 0 : _configs$country_auto.value) || '*'
  })), isLoading && /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 44
  })), !isLoading && (options === null || options === void 0 ? void 0 : options.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SELECT_YOUR_RESTAURANT', 'Select your restaurant')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: options,
    className: "select",
    defaultValue: (business === null || business === void 0 ? void 0 : business._id) || '',
    placeholder: t('SELECT_BUSINESS', 'Select a Business'),
    onChange: function onChange(value) {
      return handleSelectBusiness(value);
    },
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true
  })), !isLoading && options.length === 0 && /*#__PURE__*/_react.default.createElement(_styles2.EmptyData, null, t('NO_RESULT', 'There are no results')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return onClose();
    }
  }, t('SKIP', 'Skip')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSubmit,
    disabled: !(business !== null && business !== void 0 && business._id)
  }, t('CONTINUE', 'Continue'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))));
};
exports.RestaurantSelectGuide = RestaurantSelectGuide;