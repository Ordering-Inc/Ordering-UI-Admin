"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryZoneBasic = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FirstSelect = require("../../../styles/Select/FirstSelect");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessDeliveryZoneBasic = function BusinessDeliveryZoneBasic(props) {
  var _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3;

  var business = props.business,
      zone = props.zone,
      handleZoneType = props.handleZoneType,
      handleChangeZoneData = props.handleChangeZoneData,
      handleUpdateBusinessDeliveryZone = props.handleUpdateBusinessDeliveryZone,
      isAddValid = props.isAddValid,
      handleAddBusinessDeliveryZone = props.handleAddBusinessDeliveryZone,
      loading = props.loading;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseNumber = _useUtils2[0].parseNumber;

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      clearState = _useState2[0],
      setClearState = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      infoContentString = _useState4[0],
      setInfoContentString = _useState4[1];

  var _useState5 = (0, _react.useState)((zone === null || zone === void 0 ? void 0 : zone.type) || 2),
      _useState6 = _slicedToArray(_useState5, 2),
      zoneType = _useState6[0],
      setZoneType = _useState6[1];

  var _useState7 = (0, _react.useState)(zone === null || zone === void 0 ? void 0 : zone.data),
      _useState8 = _slicedToArray(_useState7, 2),
      zoneData = _useState8[0],
      setZoneData = _useState8[1];

  var _useState9 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      alertState = _useState10[0],
      setAlertState = _useState10[1];

  var typeOptions = [{
    value: 1,
    content: t('CIRCLE', 'Circle')
  }, {
    value: 2,
    content: t('POLYGON', 'Polygon')
  }, {
    value: 4,
    content: t('EVERYWHERE', 'Everywhere')
  }];
  var googleMapsControls = {
    defaultZoom: 8,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: false,
    defaultPosition: {
      lat: 40.77473399999999,
      lng: -73.9653844
    }
  };
  var fillStyle = {
    fillColor: '#2C7BE5',
    strokeColor: '#03459E',
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: true
  };

  var handleChangeType = function handleChangeType(type) {
    handleZoneType(type, (zone === null || zone === void 0 ? void 0 : zone.id) || null);
    setClearState(true);
    setZoneType(type);
  };

  var handleZoneData = function handleZoneData(data) {
    setZoneData(data);
    handleChangeZoneData(data, (zone === null || zone === void 0 ? void 0 : zone.id) || null);
  };

  var handleSave = function handleSave() {
    if (zoneData || zoneType === 4) {
      if (isAddValid) handleAddBusinessDeliveryZone();else handleUpdateBusinessDeliveryZone();
    } else {
      setAlertState({
        open: true,
        content: t('REQUIRED_POLYGON_CIRCLE', 'Polygon or circle must be drawn.')
      });
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    if (clearState) {
      handleZoneData(null);
    }
  }, [clearState]);
  (0, _react.useEffect)(function () {
    if (zoneType !== 1) return;
    var content = '<div style="width: 90px; height: 30px">' + '<span>Radius: </span>';
    content += parseNumber(zoneData === null || zoneData === void 0 ? void 0 : zoneData.radio);
    content += '<span>km</span>' + '</div>';
    setInfoContentString(content);
  }, [zoneData, zoneType]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BasicContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: parseInt(zoneType),
    options: typeOptions,
    onChange: handleChangeType
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('BUSINESS_ADDRESS', 'Business address')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "address",
    defaultValue: business === null || business === void 0 ? void 0 : business.address,
    disabled: true
  }), zoneType !== 4 && (configState !== null && configState !== void 0 && (_configState$configs = configState.configs) !== null && _configState$configs !== void 0 && (_configState$configs$ = _configState$configs.google_maps_api_key) !== null && _configState$configs$ !== void 0 && _configState$configs$.value ? /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setClearState(true);
    }
  }, t('CLEAR', 'Clear')), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessZoneGoogleMaps, {
    apiKey: configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.google_maps_api_key) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value,
    mapControls: googleMapsControls,
    location: business === null || business === void 0 ? void 0 : business.location,
    clearState: clearState,
    setClearState: setClearState,
    type: zoneType,
    data: zoneData,
    handleData: handleZoneData,
    fillStyle: fillStyle,
    infoContentString: infoContentString
  })) : /*#__PURE__*/_react.default.createElement(_styles2.ErrorText, null, t('REQUIRED_GOOGLE_MAP_API_KEY', 'Google Maps api key is required'))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "5px",
    onClick: function onClick() {
      return handleSave();
    },
    disabled: loading
  }, loading ? t('LOADING', 'loading') : isAddValid ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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

exports.BusinessDeliveryZoneBasic = BusinessDeliveryZoneBasic;