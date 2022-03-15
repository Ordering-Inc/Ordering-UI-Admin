"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryZoneInformation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FirstSelect = require("../../../styles/Select/FirstSelect");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _reactHookForm = require("react-hook-form");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessDeliveryZoneInformation = function BusinessDeliveryZoneInformation(props) {
  var _ref, _formState$changes$na, _formState$changes, _ref2, _formState$changes$mi, _formState$changes2, _ref3, _formState$changes$pr, _formState$changes3, _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3;

  var business = props.business,
      zone = props.zone,
      formState = props.formState,
      handleChangeInput = props.handleChangeInput,
      handleChangeFormState = props.handleChangeFormState,
      handleUpdateBusinessDeliveryZone = props.handleUpdateBusinessDeliveryZone,
      handleAddBusinessDeliveryZone = props.handleAddBusinessDeliveryZone;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

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

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isShowMap = _useState12[0],
      setIsShowMap = _useState12[1];

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
    handleChangeFormState({
      type: type
    });
    setClearState(true);
    setZoneType(type);
  };

  var handleZoneData = function handleZoneData(data) {
    setZoneData(data);
    handleChangeFormState({
      data: data
    });
  };

  var onSubmit = function onSubmit() {
    if (zoneData || zoneType === 4) {
      if (!zone) handleAddBusinessDeliveryZone();else handleUpdateBusinessDeliveryZone();
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
  (0, _react.useEffect)(function () {
    setClearState(false);
    setZoneType((zone === null || zone === void 0 ? void 0 : zone.type) || 2);
    setZoneData(zone === null || zone === void 0 ? void 0 : zone.data);
    setIsShowMap(false);
    setTimeout(function () {
      setIsShowMap(true);
    }, [100]);
  }, [zone === null || zone === void 0 ? void 0 : zone.id]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NAME', 'Name'),
    name: "name",
    value: (_ref = (_formState$changes$na = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : zone === null || zone === void 0 ? void 0 : zone.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('NAME_REQUIRED', 'The name is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: parseInt(zoneType),
    options: typeOptions,
    onChange: handleChangeType
  })))), /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('MINIMUN_PURCHASED', 'Minimum purchase')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "minimum",
    value: (_ref2 = (_formState$changes$mi = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.minimum) !== null && _formState$changes$mi !== void 0 ? _formState$changes$mi : zone === null || zone === void 0 ? void 0 : zone.minimum) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DELIVERY_FEE', 'Delivery fee')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "price",
    value: (_ref3 = (_formState$changes$pr = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.price) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : zone === null || zone === void 0 ? void 0 : zone.price) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.')
    })
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('BUSINESS_ADDRESS', 'Business address')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "address",
    defaultValue: business === null || business === void 0 ? void 0 : business.address,
    disabled: true
  })), zoneType !== 4 && isShowMap && (configState !== null && configState !== void 0 && (_configState$configs = configState.configs) !== null && _configState$configs !== void 0 && (_configState$configs$ = _configState$configs.google_maps_api_key) !== null && _configState$configs$ !== void 0 && _configState$configs$.value ? /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
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
    borderRadius: "8px",
    type: "submit",
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, !zone ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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

exports.BusinessDeliveryZoneInformation = BusinessDeliveryZoneInformation;