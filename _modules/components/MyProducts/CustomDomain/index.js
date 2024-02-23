"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomDomain = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomDomainUI = function CustomDomainUI(props) {
  var _formState$changes5, _formState$changes6, _configs$google_maps_2;
  var handleChangeFormState = props.handleChangeFormState,
    formState = props.formState,
    onClose = props.onClose,
    handleChangeCustomDomain = props.handleChangeCustomDomain;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMapInput = _useState2[0],
    setShowMapInput = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    googleMapKey = _useState4[0],
    setGoogleMapKey = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var sslTypeList = [
  // { value: 'none', content: <Option>{t('NONE', 'None')}</Option> },
  {
    value: 'automatic',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('AUTOMATIC', 'automatic'))
  }, {
    value: 'proxy',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('PROXY', 'Proxy'), " (Cloudflare)")
  }];
  var handleSubmit = function handleSubmit() {
    var _configs$google_maps_, _formState$changes, _formState$changes2, _formState$changes3, _formState$changes4;
    var errors = [];
    if (!(configs !== null && configs !== void 0 && (_configs$google_maps_ = configs.google_maps_api_key) !== null && _configs$google_maps_ !== void 0 && _configs$google_maps_.value) && !(showMapInput && googleMapKey)) {
      errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('GOOGLE_MAP_API_KEY', 'Google map api key')));
    }
    if (!(formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.domain)) errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('DOMAIN', 'Domain')));
    if (formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.domain && !(formState !== null && formState !== void 0 && (_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.domain.match(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i))) {
      errors.push(t('VALIDATION_ERROR_DOMAIN', 'The domain is not valid'));
    }
    if (!(formState !== null && formState !== void 0 && (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.ssl_setup_type)) errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('SSL_SETUP_TYPE', 'SSL setup type')));
    if (errors.length === 0) {
      var googleMapApiKey = showMapInput && googleMapKey;
      handleChangeCustomDomain(googleMapApiKey);
    } else {
      setAlertState({
        open: true,
        content: errors
      });
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOM_DOMAIN', 'Custom domain')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DOMAIN', 'Domain')), /*#__PURE__*/_react.default.createElement(_styles2.CustomDomainInfo, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.CustomDomainInfoContent, null, /*#__PURE__*/_react.default.createElement("span", null, t('CUSTOM_DOMAIN_NOTIFY', 'Please make sure that your DNS CNAME is pointing {project-name}.tryordering.com'))))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "www.yourdomain.com",
    value: (formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.domain) || '',
    onChange: function onChange(e) {
      return handleChangeFormState({
        domain: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLL_SETUP_TYPE', 'SSL setup type')), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: sslTypeList,
    className: "select",
    defaultValue: formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.ssl_setup_type,
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeFormState({
        ssl_setup_type: value
      });
    }
  }))), !(configs !== null && configs !== void 0 && (_configs$google_maps_2 = configs.google_maps_api_key) !== null && _configs$google_maps_2 !== void 0 && _configs$google_maps_2.value) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return setShowMapInput(function (prev) {
        return !prev;
      });
    }
  }, showMapInput ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, t('I_HAVE_GOOGLE_MAPS_KEY_WANT_SHARE_IT', 'I have my Google Maps API Key, I want to share it'))), showMapInput && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('GOOGLE_MAP_API_KEY', 'Google map api key')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: googleMapKey,
    onChange: function onChange(e) {
      return setGoogleMapKey(e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    onClick: onClose
  }, t('Cancel', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSubmit,
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING', 'Ordering'),
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
var CustomDomain = exports.CustomDomain = function CustomDomain(props) {
  var customDomainProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CustomDomainUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CustomDomain, customDomainProps);
};